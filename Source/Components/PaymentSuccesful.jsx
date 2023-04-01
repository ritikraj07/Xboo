// import { useNavigation } from '@react-navigation/core'
import { useEffect} from 'react'
import { View, Image, Text } from 'react-native'

export default function Sp({navigation}) {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },3000)
    },[])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
            <Image source={{ uri: 'https://i.gifer.com/7efs.gif' }} style={{ width: '100%', height: 300 }} />
            <Text style={{fontSize:20, marginTop:10}}>Payment SuccessFul</Text>
        </View>
    )
}