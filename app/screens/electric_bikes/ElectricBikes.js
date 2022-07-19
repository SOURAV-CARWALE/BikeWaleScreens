import React,  { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, ActivityIndicator } from 'react-native';

import VehicleItem from './VehicleItem';
import requestOptions from './requestOptions';

function getElectricBikeList(cityId, pageSize, curPageNo) {
    return ("https://stg.bikewale.com/api/electricbikes/?cityid=" + cityId 
    + "&pageSize=" + pageSize 
    + "&curPageNo=" + curPageNo);
}

export default function ElectricBikes(props) {
    const url = getElectricBikeList(15,800,1);
    const [isloading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(url,requestOptions())
        .then((res) => res.json())
        .then( (res) => setData(res.electricBikes))
        .catch((err) => alert(err))
        .finally(setLoading(false));
    },[])

    const renderItem = ({ item }) => (
        <VehicleItem info={item} />
    );

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.modelId}
            ></FlatList>
        </View>
    );
}
