import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setLattitude,
  setLongitude,
  setMyAddress,
} from "../../Redux/Slice/userSlice";

export default function SelectLocation() {
  const [value, setValue] = useState(null);
  const [addressObj, setAddressObj] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAddressObject = (address_components) => {
    // console.log(address_components);
    const ShouldBeComponent = {
      street_number: ["street_number"],
      postal_code: ["postal_code"],
      street: ["street_address", "route"],
      province: [
        "administrative_area_level_1",
        "administrative_area_level_2",
        "administrative_area_level_3",
        "administrative_area_level_4",
        "administrative_area_level_5",
      ],
      city: [
        "locality",
        "sublocality",
        "sublocality_level_1",
        "sublocality_level_2",
        "sublocality_level_3",
        "sublocality_level_4",
      ],
      country: ["country"],
    };

    let address = {
      street_number: "",
      postal_code: "",
      street: "",
      province: "",
      city: "",
      country: "",
    };

    address_components.forEach((component) => {
      for (var shouldBe in ShouldBeComponent) {
        if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
          if (shouldBe === "country") {
            address[shouldBe] = component.short_name;
          } else {
            address[shouldBe] = component.long_name;
          }
        }
      }
    });

    // Fix the shape to match our schema
    address.address = address.street_number + " " + address.street;
    delete address.street_number;
    delete address.street;
    if (address.country === "US") {
      address.state = address.province;
      delete address.province;
    }
    return address;
  };

  useEffect(() => {
    const func = async () => {
      const addr = value && value.label;
      dispatch(setMyAddress(addr));
      const geocodeObj =
        value && value.value && (await geocodeByPlaceId(value.value.place_id));
      // console.log("geo Code  obj is", geocodeObj[0]?.geometry);
      dispatch(setLongitude(geocodeObj[0]?.geometry.viewport.Ia.hi));
      dispatch(setLattitude(geocodeObj[0]?.geometry.viewport.Ya.hi));
      const addressObject =
        geocodeObj && getAddressObject(geocodeObj[0].address_components);
      // console.log("addressObject", addressObject);
      setAddressObj(addressObject);
    };
    func();
  }, [value]);
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyCbX0Bznd0JJMjt3aw4yc4wYlx9s-pA13I"
        selectProps={{
          value,
          onChange: setValue,
          placeholder: "Please Select Your Location",
          isClearable: true,
        }}
        // onLoadFailed={(error) =>
        //   console.error("Could not inject Google script", error)
        // }
      />
    </div>
  );
}
