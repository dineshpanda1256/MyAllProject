import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

export var UserSlice = createSlice({
  name: "user",
  initialState: {
    phone_number: null,
    email: null,
    token: null,
    Dob: null,
    user_type: null,
    first_name: null,
    last_name: null,
    gender: null,
    _id: null,
    test: null,
    pathology_id: null,
    pathology_name: null,
    signfrom: null,
    cartlab: null,
    cart: [],
    lat: null,
    long: null,
    subCategoryId: null,
    myOrderId: [],
    myOrderIdTwo: [],
    myAddress: null,
    organizationName: null,
  },
  reducers: {
    setCart: (state, action) => {
      // console.log("Phone number set", JSON.stringify(action.payload));

      if (state.cart != null) {
        state.cart = [
          {
            test: action.payload.test,
            id: action.payload.id,
            price: action.payload.price,
          },
          ...state.cart,
        ];
      } else {
        state.cart = [
          {
            test: action.payload.test,
            id: action.payload.id,
            price: action.payload.price,
          },
        ];
      }
    },
    setPhone_number: (state, action) => {
      // console.log("Phone number set", JSON.stringify(action.payload));
      state.phone_number = action.payload;
    },
    setEmail: (state, action) => {
      // console.log("Email set", JSON.stringify(action.payload));
      state.email = action.payload;
    },
    setToken: (state, action) => {
      // console.log("Token set", JSON.stringify(action.payload));
      state.token = action.payload;
    },
    setDob: (state, action) => {
      // console.log("Dob set", JSON.stringify(action.payload));
      state.Dob = action.payload;
    },
    setUser_type: (state, action) => {
      // console.log("User type set", JSON.stringify(action.payload));
      state.user_type = action.payload;
    },
    setFirst_name: (state, action) => {
      // console.log("First name set", JSON.stringify(action.payload));
      state.first_name = action.payload;
    },
    setLast_name: (state, action) => {
      // console.log("Last name set", JSON.stringify(action.payload));
      state.last_name = action.payload;
    },
    setGender: (state, action) => {
      // console.log("Gender set", JSON.stringify(action.payload));
      state.gender = action.payload;
    },
    setId: (state, action) => {
      // console.log("Id set", JSON.stringify(action.payload));
      state._id = action.payload;
    },
    setTest: (state, action) => {
      // console.log("Test", JSON.stringify(action.payload));
      state.test = action.payload;
    },
    setPathology_id: (state, action) => {
      // console.log("Pathology_id", JSON.stringify(action.payload));
      state.pathology_id = action.payload;
    },
    setSignup: (state, action) => {
      // console.log("Sign from", JSON.stringify(action.payload));
      state.signfrom = action.payload;
    },
    setPathology_name: (state, action) => {
      // console.log("Pathology name", JSON.stringify(action.payload));
      state.pathology_name = action.payload;
    },
    setSubCategoryId: (state, action) => {
      // console.log("SubCategory Id", JSON.stringify(action.payload));
      state.subCategoryId = action.payload;
    },
    setCartlab: (state, action) => {
      // console.log("cart lab", JSON.stringify(action.payload));
      state.cartlab = action.payload;
    },
    setLattitude: (state, action) => {
      // console.log("Lat  set", JSON.stringify(action.payload));
      state.lat = action.payload;
    },
    setLongitude: (state, action) => {
      // console.log("Long set", JSON.stringify(action.payload));
      state.long = action.payload;
    },
    setMyOrderId: (state, action) => {
      // console.log("orderId Set", JSON.stringify(action.payload));
      state.myOrderId = action.payload;
    },
    setMyOrderIdTwo: (state, action) => {
      // console.log("orderId Set", JSON.stringify(action.payload));
      state.myOrderIdTwo = action.payload;
    },
    setMyAddress: (state, action) => {
      // console.log("address Set", JSON.stringify(action.payload));
      state.myAddress = action.payload;
    },
    setOrganizationName: (state, action) => {
      // console.log("Organisation Name Set", JSON.stringify(action.payload));
      state.organizationName = action.payload;
    },

    clear(state) {
      storage.removeItem("persist:root");
      state = null;
    },
    // cleardata: (state, action) => {
    //   (state.Dob = null),
    //     (state.phone_number = null),
    //     (state.email = null),
    //     (state.token = null),
    //     (state.Dob = null),
    //     (state.user_type = null),
    //     (state.first_name = null),
    //     (state.last_name = null),
    //     (state.gender = null),
    //     (state._id = null);
    //   {
    //     state.cartlab = null;
    //   }
    //   {
    //     state.pathology_name = null;
    //   }
    //   {
    //     state.signfrom = null;
    //   }
    //   {
    //     state.pathology_id = null;
    //   }
    //   {
    //     state.cart = [];
    //   }
    //   console.log("All data clear");
    // },

    removedata: (state, action) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload);

      // console.log("removedata", state.cart);
    },
    emptycart: (state, action) => {
      state.cart = null;

      // console.log("removedata", state.cart);
    },
  },
});

export const getCart = (state) => {
  return state.user.cart;
};
export const getPhone_number = (state) => {
  return state.user.phone_number;
};
export const getEmail = (state) => {
  return state.user.email;
};
export const gettoken = (state) => {
  return state.user.token;
};
export const getDob = (state) => {
  return state.user.Dob;
};
export const getUser_type = (state) => {
  return state.user.user_type;
};
export const getFirst_name = (state) => {
  return state.user.first_name;
};
export const getLast_name = (state) => {
  return state.user.last_name;
};
export const getGender = (state) => {
  return state.user.gender;
};
export const getId = (state) => {
  return state.user._id;
};
export const getPathology_id = (state) => {
  return state.user.pathology_id;
};
export const getSignup = (state) => {
  return state.user.signfrom;
};
export const getPathology_name = (state) => {
  return state.user.pathology_name;
};
export const getCartlab = (state) => {
  return state.user.cartlab;
};
export const getSubCategoryId = (state) => {
  return state.user.subCategoryId;
};
export const getLat = (state) => {
  return state.user.lat;
};
export const getLong = (state) => {
  return state.user.long;
};
export const getOrderIds = (state) => {
  return state.user.myOrderId;
};
export const getOrderIdsTwo = (state) => {
  return state.user.myOrderIdTwo;
};
export const getMyAddress = (state) => {
  return state.user.myAddress;
};

export const getOrganizationName = (state) => {
  return state.user.organizationName;
};

export const {
  setPhone_number,
  setId,
  setDob,
  setEmail,
  setFirst_name,
  setGender,
  setLast_name,
  setToken,
  setUser_type,
  cleardata,
  setPathology_id,
  setSignup,
  setCart,
  removedata,
  setPathology_name,
  setCartlab,
  emptycart,
  setSubCategoryId,
  clear,
  setLattitude,
  setLongitude,
  setMyOrderId,
  setMyOrderIdTwo,
  setMyAddress,
  setOrganizationName,
} = UserSlice.actions;

export default UserSlice.reducer;
