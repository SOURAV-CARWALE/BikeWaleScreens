import { View, Text, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export default function Home() {
  return (
    <View>
        <FindYourRide />
        <DiscoverBikes />
    </View>
  )
}


const FindYourRide = () => (
    <ImageBackground
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFEBwj7DhAT693_lHeqd-tpj_5KAn8pdDWg&usqp=CAU'}}
        style={{
            height: 203,
            backgroundColor: "#5d5d5d",
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Text
            style={{
                color: 'white', 
                fontWeight: '700',
                marginBottom: 16,
                fontSize: 20
            }}
        >FIND YOUR RIDE</Text>
        <TextInput
            placeholder='Search E.g: Bajaj Pulsar'
            backgroundColor='white'
            color='black'
            style={{
                height: 44,
                width: 328,
                padding: 10,
                borderRadius: 5
            }}
        ></TextInput>
    </ImageBackground>
)

const DiscoverBikes = () => (
    <View
        style={{
            height: 1916,
            marginHorizontal: 16
        }}
    >
        <Text style={{fontSize: 18, fontWeight: "900", marginTop: 24, marginBottom: 12}}
        >Discover Bikes</Text>
        <View>
            <DiscoverItem title="Brand" discription="View Bikes of your favourite brand" icon="star"/>
            <DiscoverItem title="Budget" discription="View Bikes in your price range" icon="money-bill"/>
            <DiscoverItem title="Displacement" discription="View Bikes as your desire" icon="road"/>
            <DiscoverItem title="Ride Style" discription="View Bikes that suits your ride style" icon="motorcycle"/>
        </View>
    </View>
)

const DiscoverItem = (props) => (
    <TouchableOpacity style={{
        height: 68,
        marginVertical: 8,
        flexDirection: "row",
        alignItems: 'center'
    }}>
        <FontAwesome5Icon name={props.icon} size={30} color={"red"} />
        <View style={{padding: 10}}
        >
            <Text
                style={{
                    fontWeight: "700",
                }}
            >{props.title}</Text>
            <Text>{props.discription}</Text>
        </View>
    </TouchableOpacity>
)