// import { useNavigation } from '@react-navigation/core'
import { useEffect} from 'react'
import { View, Image, Text } from 'react-native'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function Sp({navigation}) {
    
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        }, 3000)
        

        firestore()
            .collection(auth()._user.uid).doc('Cart')
            .set({ cart: [] })
            .then((e) => { })
            .catch((e) => {})

    },[])
    return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
            <Image source={{ uri: 'https://i.gifer.com/7efs.gif' }} style={{ width: '100%', height: 300 }} />
            <Text style={{fontSize:20, marginTop:10}}>Payment SuccessFul</Text>
        </View>
    )
}