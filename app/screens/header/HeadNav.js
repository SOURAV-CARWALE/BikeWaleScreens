import React from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HeadNav(props) {
    return (
        <View style={{
            height: 56,
            marginTop: 25,
            backgroundColor: '#2a2a2a',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            }} 
        >
            <Toggler toggler={props.toggler}/>
            <Title title={props.title}/>
            <Search />
            <Map />
        </View>
    );
}



const Toggler = (props) => (
    <TouchableOpacity
        onPress={()=> alert('again i dont have api for it')} 
    >
        <FontAwesome5 name={props.toggler ? props.toggler : "bars"} size={24} color="white" />
    </TouchableOpacity>
)

const Title = (props) => (
    <Text style={{
        height: 24,
        width: 119,
        color: 'white',
        fontWeight: "700",
        fontFamily: 'sans-serif-medium'}}>{props.title ? props.title : "BikeWale"}
    </Text>
)

const Search = (props) => (
    <FontAwesome5 name='search' color={"white"} size={20}>
    </FontAwesome5>
)

const Map = (props) => (
    <TouchableOpacity
        onPress={()=> alert('again i dont have api for it')} 
    >    
        <FontAwesome5 name='location-arrow' color={"white"} size={24} />
    </TouchableOpacity>
)