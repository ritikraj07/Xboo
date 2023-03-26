import { useState, useEffect } from 'react';
import { View, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed';
import { useNavigation } from '@react-navigation/core';

function GridPoster({ offerName, link = 'https://flipkart-data.onrender.com/bestselling', background = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU' }) {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(link)
            .then((d) => d.json())
            .then((res) => {
                setdata(res)
            })
    }, [])
    const navigation = useNavigation();
    function Poster({item}) {
        return (<TouchableOpacity style={{
            borderRadius: 10, backgroundColor: 'white', width: 110,
            borderRadius: 5, margin: 5, alignItems: 'center', justifyContent: 'center', padding: 3, marginHorizontal: 10, borderWidth:1
        }}
            onPress={() => navigation.navigate('productdesc', { item })}
        >
            <Image source={{ uri: item.image }}
                style={{
                    width: 80, height: 80,
                }}
            />
            <Text h5  >{item.description.length > 20 ? item.description.substring(0, 20)+ "..." : item.description} </Text>
            <Text>Discount: {item.discount}% </Text>
        </TouchableOpacity>)
    }
    return (
        <ImageBackground source={{ uri: background }}
            style={{ paddingVertical: 10, width: '100%', marginVertical: 15, alignItems: 'center', justifyContent: 'space-around' }}>
            <Text h4>{offerName}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => <Poster item={item} />}
                numColumns={3}
                scrollEnabled={false}
            />
        </ImageBackground>
    );
}

export default GridPoster;