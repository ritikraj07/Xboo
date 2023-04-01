import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import setData from '../AsyncStorage/Setter';

const image = {
  uri: 'https://static.vecteezy.com/system/resources/previews/004/697/688/original/curve-light-blue-background-abstract-free-vector.jpg',
};

const Profile = ({ navigation }) => {
  const [name, setName] = useState("Your name");
  const [email, setEmail] = useState('yourmailId@example.com');
  const [phone, setPhone] = useState('Your Phone Number');
  const [address, setAddress] = useState('123 Main St, Anytown USA');
  const [editMode, setEditMode] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [Auth, setAuth] = useState(false)
  const [orders, setOrders] = useState([
    { id: '1', date: '2022-01-01', total: '100.00' },
    { id: '2', date: '2022-02-01', total: '200.00' },
    { id: '3', date: '2022-03-01', total: '300.00' },
  ]);

  useEffect(() => {
    let Auth = auth()._user
    if (Auth) {
      setAuth(true)
    } else {
      setAuth(false)
    }
    
    if (!Auth) {
      Alert.alert('XBoo!  Message', "You haven't login baby \n Pehla login kara phir istam kara",)
      navigation.navigate('EmailAuth')
    } else {
      firestore().collection(auth()?._user?.uid).doc('UserData').get()
        .then((e) => {
          // console.log(e)
          setName(e._data.name)
          setEmail(e._data.email)
          setPhone(e._data.phone)
          setAddress(e._data.address)
        }).catch((e) => {
          // console.log(e)
        })
    }
  }, [])

  const handleChooseProfilePic = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      // console.log(result.assets[0].uri);
      setProfilePic(result.assets[0].uri);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };
  

  async function handleSave(){
    setEditMode(false);
    // ------------------------------------Call API or update data source with new profile information------------
    
    //  console.log(user._data?.cart)
    if (Auth) {
      firestore()
        .collection(auth()._user.uid).doc('UserData')
        .set({ name: name, phone: phone, email: email, address: address, profilePic: profilePic })
        .then((e) => {
          // console.log(e);
          
          setcartbtm(true)
        }).catch((e) => {
          // console.log(e)

        })
    }
  };

  const handleLogout = () => {
    //---------------------------------------------- Handle logout logic---------------------------
    setData('isLogin', true)
    if (Auth) {
      auth()
        .signOut()
        .then(() => {
          // console.log('User signed out!')
          setAuth(false)
          navigation.navigate('SignUp')
          
        })
        .catch((e) => {
          // console.log(e)
        })
    } else {
      navigation.navigate('SignUp')
      setAuth(false)
    }
  };



  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <ScrollView>

          <View style={styles.profileHeader}>
            <TouchableOpacity onPress={handleChooseProfilePic}>
              {profilePic ? (

                <Image
                  source={{ uri: profilePic }}
                  style={styles.profilePic}
                />

              ) : (
                <View style={styles.profilePic}>
                  <Text style={styles.profilePicLabel}>Add Photo</Text>
                </View>
              )}
            </TouchableOpacity>
            <Text style={styles.profileName}>{name}</Text>
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={handleLogout}
            >
              <AntDesign name="logout" size={20} color="white" />
              <Text style={styles.logoutButtonText}>{Auth?"Logout":'LogIn'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
            <View style={styles.mainlabeldiv}>
              <View style={styles.lablediv}>
                <MaterialIcons name="account-circle" size={20} color="black" />
                <Text style={styles.label}>Name</Text>
              </View>
              {editMode ? (
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  onEndEditing={() => {
                    const arr = name.split(' ');

                    for (var i = 0; i < arr.length; i++) {
                      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                    }

                    const str2 = arr.join(' ');

                    setName(str2);
                  }}
                />
              ) : (
                <Text style={styles.value}>{name}</Text>
              )}
            </View>
            <View style={styles.mainlabeldiv}>
              <View style={styles.lablediv}>
                <Entypo name="email" size={20} color="black" />
                <Text style={styles.label}>Email</Text>
              </View>
              {editMode ? (
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                />
              ) : (
                <Text style={styles.value}>{email}</Text>
              )}
            </View>

            <View style={styles.mainlabeldiv}>
              <View style={styles.lablediv}>
                <Ionicons name="call" size={20} color="black" />
                <Text style={styles.label}>Phone</Text>
              </View>
              {editMode ? (
                <TextInput
                  style={styles.input}
                  value={phone}
                  onChangeText={setPhone}
                />
              ) : (
                <Text style={styles.value}>{phone}</Text>
              )}
            </View>

            <View style={styles.mainlabeldiv}>
              <View style={styles.lablediv}>
                <FontAwesome5 name="address-card" size={20} color="black" />
                <Text style={styles.label}>Address</Text>
              </View>
              {editMode ? (
                <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={setAddress}
                  multiline
                />
              ) : (
                <Text style={styles.value}>{address}</Text>
              )}
            </View>
            {editMode ? (
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Save Changes</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity disabled={!Auth} style={[styles.button, !Auth? {backgroundColor:'red'}:{background:'blue'} ]} onPress={handleEdit}>
                <AntDesign name="edit" size={20} color="white" />
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
            <View style={styles.listofCat}>
              {!editMode && <TouchableOpacity style={styles.orderButton}>
                <MaterialCommunityIcons
                  name="cart-variant"
                  size={20}
                  color="white"
                />
                <Text style={styles.orderButtonText}>My Orders</Text>
              </TouchableOpacity>}
              {!editMode && <TouchableOpacity
                style={{ ...styles.orderButton, backgroundColor: 'skyblue' }}
              >
                <Ionicons name="ios-heart-outline" size={20} color="white" />
                <Text style={styles.orderButtonText}>My WishList</Text>
              </TouchableOpacity>}
            </View>

            {/* <View style={styles.orders}>
        <Text style={styles.ordersLabel}>Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
      renderItem={renderOrderItem}
    />
  </View> */}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    // <a href="https://ibb.co/stZHxgn"><img src="https://i.ibb.co/XVq80W1/1679832679909.png" alt="1679832679909" border="0"></a>
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20,
  },

  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    padding: 20,

  },
  profilePic: {
    marginRight: 10,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "skyblue",

  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginLeft: 2,
  },
  logoutButton: {
    marginLeft: 'auto',
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  form: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  value: {
    marginTop: 5,
    marginLeft: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  orderButton: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
  },
  profilePicLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 40,
    color: '#333',
    marginLeft: 15,
  },
  orders: {
    width: '100%',
    marginTop: 20,
  },
  ordersLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lablediv: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 10,
  },
  mainlabeldiv: {
    marginTop: 10,
  },
  listofCat: {
    marginTop: 20,
  },
});

export default Profile;
