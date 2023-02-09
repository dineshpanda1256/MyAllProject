import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import moment from 'moment'
//import RNPickerSelect from 'react-native-picker-select';
// import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent';
import LinearGradient from 'react-native-linear-gradient'

const { height, width } = Dimensions.get("screen");
export default function AppointmentVideo() {

    const [selectedDate, setSelectedDate] = useState({
        date: "",
        day: ""
    });
    const [selectedTime, setSelectedTime] = useState({
        time: ""

    });

    const navigation = useNavigation();
    const dateday = [
        {
            date: 13,
            day: "Mon"
        },
        {
            date: 14,
            day: "Tue"
        },
        {
            date: 15,
            day: "Wed"
        },
        {
            date: 16,
            day: "Thur"
        },
        {
            date: 17,
            day: "Fri"
        },

    ]

    // 
    // var getDaysArray = function (year, month) {
    //     var monthIndex = month - 1; // 0..11 instead of 1..12
    //     var names = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    //     var date = new Date(year, monthIndex, 1);
    //     var result = [];
    //     while (date.getMonth() == monthIndex) {
    //         result.push({ date: date.getDate(), day: names[date.getDay()] });
    //         date.setDate(date.getDate() + 1);
    //     }
    //     return result;
    // }

    // console.log(getDaysArray(2022, 5));
    // 

    const hours = [];
    Array.from({
        length: 48
    }, (_, hour) => {
        if (hour >= 18 && hour <= 29) {
            hours.push(moment({
                hour: Math.floor(hour / 2),
                minutes: (hour % 2 === 0 ? 0 : 30)
            }).format('hh:mm A'))
        }
    }
    );

    const isDateIsActive = (list) => {
        return (
            selectedDate.date == list.date && selectedDate.day == list.day
        )
    }

    const isTimeIsActive = (list) => {
        return (
            selectedTime.time == list
        )
    }

    return (
        // start MainView
        <View style={styles.appointmentContainer}>
            {/* backbutton start */}
            <View style={{ marginVertical: 5, flexDirection: "row", alignItems: "center", marginHorizontal: 10 }}>
                <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50, alignItems: "center", justifyContent: "center", backgroundColor: "#EFF3FA", }} onPress={() => {
                    navigation.goBack()
                }} >
                    <Ionicons name="chevron-back-outline" color={"gray"} size={20} />
                </TouchableOpacity>
                <Text style={{ fontWeight: "bold", marginLeft: 8 }}></Text>
            </View >
            {/* backbuttonEnd */}
            {/* monthdetailsStart */}

            <ScrollView>
                <View style={styles.monthDetails}>
                    <Text style={{ fontSize: 18, fontFamily: "Mulish", letterSpacing: 0.3 }}>July,2020</Text>
                    <Ionicons name="caret-down-outline" size={25} style={{ marginLeft: 10 }} />
                    {/* <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Football', value: 'football' },
                            { label: 'Baseball', value: 'baseball' },
                            { label: 'Hockey', value: 'hockey' },
                        ]}
                    /> */}
                </View>
                {/* monthdetailsEnd */}
                {/* dateday start */}

                <View>
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {
                            dateday.map((list, index) => {
                                return (

                                    <TouchableOpacity

                                        onPress={() => {
                                            setSelectedDate({
                                                date: list.date,
                                                day: list.day
                                            })
                                        }}

                                        style={[styles.datedayContainer, {
                                            backgroundColor: isDateIsActive(list) ? "#00E0C5" : "white",
                                        }]} key={index}>
                                        <View>
                                            <Text
                                                style={{ fontSize: 24, fontFamily: "Mulish", color: isDateIsActive(list) ? "white" : "grey" }}>{list.date}</Text>

                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 12, fontFamily: "Mulish", letterSpacing: 0.2,
                                                color: isDateIsActive(list) ? "white" : "grey"
                                            }}>{list.day}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            })
                        }
                        {/*  */}
                    </ScrollView>
                </View>
                {/* dateday end */}
                {/* timefield start */}
                <View style={{ marginHorizontal: 10, marginVertical: 30, flex: 1 }}>
                    <Text style={{ fontFamily: "Mulish", fontSize: 18, letterSpacing: 0.3, lineHeight: 22.59 }}>Available Time</Text>
                </View>
                {/* timefield end */}

                <View>

                    <FlatList
                        numColumns={3}
                        data={hours} renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectedTime({
                                            time: item,
                                        })
                                    }}
                                    style={[styles.timeField, {
                                        backgroundColor: isTimeIsActive(item) ? "#00E0C5" : "white",
                                    }]}>
                                    <View>
                                        <Text style={{ color: isTimeIsActive(item) ? "white" : "grey", fontSize: 12 }}>{item}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }} />

                </View>
                <View style={{ marginHorizontal: 12, marginVertical: 20 }}>
                    <Text style={{ fontSize: 14, fontFamily: "Mulish", letterSpacing: 0.23, lineHeight: 17.57 }}>Write your problem</Text>
                </View>
                <View style={styles.textInputContainer}>

                    <TextInput style={styles.textInput}
                        placeholder={"write your problem"}
                        underlineColorAndroid={"transparent"}
                    />
                </View>

                {/* button */}
                <View style={styles.btnMainDiv}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Callcut')}>
                        <LinearGradient
                            colors={['#00E0C5', '#009987']}
                            style={styles.btnDiv}>
                            <Text style={styles.btnText}>Take an appointment</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
        //end MainView    
    )
}
const styles = StyleSheet.create({
    appointmentContainer:
    {
        flex: 1,
        backgroundColor: "#fff"
    },
    monthDetails:
    {
        marginHorizontal: 15, marginVertical: 20, flexDirection: "row", alignItems: "center",
    },
    datedayContainer:
    {
        flex: 1,
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 10,
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
    },
    textInputContainer:
    {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        //borderWidth: 0.1,
        width: "94%",
        height: 150,
        borderRadius: 5,
        marginVertical: 7,
        marginHorizontal: 12,
        backgroundColor: "#6B779A29"
    },
    appointmentBtn:
    {
        backgroundColor: "#00E0C5", padding: 15, justifyContent: "center", alignItems: "center", borderRadius: 40
    },
    timeField:
    {
        flex: 1, marginHorizontal: 10, marginVertical: 10, borderRadius: 7, paddingVertical: 10, paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2

    },
    btnMainDiv: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    btnDiv: {
        width: Dimensions.get('screen').width * 0.85,
        height: Dimensions.get('screen').height * 0.06,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        borderRadius: 30,
    },
    btnText: {
        color: '#FFFFFF',
        fontFamily: 'Mulish',
        fontWeight: '600',
        fontSize: 18,
    },

    datedaytextContainer:
    {

    }

})