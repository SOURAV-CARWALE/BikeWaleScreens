import React from 'react';
import {View, SafeAreaView, ScrollView, Image, StyleSheet, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function VehicleItem(props) {

    const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('sourav', jsonValue)
        } catch (e) {
          console.log(e);
        }
      }
      const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('sourav')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log(e);
        }
      }

    return (
        <SafeAreaView style={[styles.container,styles.common]}>
            <Image style={styles.img}
                    source={{uri: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/114531/scooty-right-front-three-quarter.jpeg?isig=0&q=80'}}
            ></Image>
            <Text style={[styles.vehicle_name,styles.common]}>{props.info.makeName}</Text>
            <Text style={[styles.ex_showroom,styles.common]}>{props.info.priceLabel}</Text>
            <Text style={[styles.price,styles.common]}>{props.info.price}</Text>
            <TouchableOpacity style={[styles.btn,styles.common]}
                                onPress={()=> alert('someone give me API please')}
            >
                <Text style={[styles.check_price,styles.common,styles.innerColor]}>Check On-Road Price</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{position: "absolute", right: 20, top: 20}}
                onPress={()=>console.log("fdsafsdfa")}
            >
                <FontAwesome5Icon name="heart" size={24} style={{color:"red"}}/>
            </TouchableOpacity>
            <View style={[styles.divider,styles.common]}></View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    btn: {
        height: 40,
        width: 191,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#de111"
    },
    check_price: {
        height: 20,
        width: 151,
        alignSelf: 'center',
        textAlign: 'center',
    },
    innerColor: {
        color: 'red',
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium'
    },
    container: {
        height: 400,
        marginHorizontal: 16,
    },
    divider:{
        borderWidth: 0.5,
        marginTop: 25,
    },
    ex_showroom: {
        height: 22,
        width: 146,
        color: '#82888b',
        marginBottom: 20,
    },

    img:{
        height: 185,
        width: 328,
    },

    price: {
        height: 21,
        width: 150,
        marginBottom: 20,
    },

    vehicle_name: {
        height: 20,
        width: 95,
        marginVertical: 20,
        fontFamily: 'sans-serif-medium'
    },

    // common: {
    //     borderColor: "red", 
    //     borderWidth: 1,
    //     color:'#2a2a2a'
    // }

  });