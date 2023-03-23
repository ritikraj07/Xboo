import {useState, useEffect} from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native'
import { Text } from '@rneui/themed';

function Posters({ link = 'https://flipkart-data.onrender.com/bestselling', background ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Veuno9ctginawyA90z8OzOFltYgo3b1TYRFWbSKCjllsL69Yuwl2LwumWA1GGgYWRs&usqp=CAU'}) {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch(link)
            .then((d) => d.json())
            .then((res) => {
            setdata(res)
        })
    }, [])
    function PostElement({item}) {
        return (<View style={{
            borderRadius: 10, backgroundColor: 'white',
            borderRadius: 5, margin: 10, alignItems:'center', justifyContent:'center', padding:5 }}>
            <Image source={{ uri: item.image }}
               style={{
                   width: 100, height:100,
               }}
            />
            <Text h5 >{item.description.length > 20 ? item.description.substring(0,20) : item.description} </Text>
            <Text>Discount: {item.discount}% </Text>
        </View>)
    }
    return (
        <ImageBackground source={{ uri: background }}
            style={{ width: '100%', height: 180, marginVertical: 15, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={data}
                renderItem={({ item }) => <PostElement item={item} />}
                horizontal
            />
        </ImageBackground>
    );
}

export default Posters;