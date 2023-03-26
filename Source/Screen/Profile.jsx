import React, { useState } from 'react';
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
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import { Entypo } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const image = {
  uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8a96ef31-74a6-472d-854d-3a1d55adf24e/dbvjwkm-f6f2b5bc-f8c2-4d46-b7b3-4b3ce8956af7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhhOTZlZjMxLTc0YTYtNDcyZC04NTRkLTNhMWQ1NWFkZjI0ZVwvZGJ2andrbS1mNmYyYjViYy1mOGMyLTRkNDYtYjdiMy00YjNjZTg5NTZhZjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0K2z0jofYltUO2gjCLEdisNgMODxb4RSd2-egyX1zqY',
};

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [phone, setPhone] = useState('555-555-5555');
  const [address, setAddress] = useState('123 Main St, Anytown USA');
  const [editMode, setEditMode] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [orders, setOrders] = useState([
    { id: '1', date: '2022-01-01', total: '100.00' },
    { id: '2', date: '2022-02-01', total: '200.00' },
    { id: '3', date: '2022-03-01', total: '300.00' },
  ]);

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

  const handleSave = () => {
    setEditMode(false);
    // ------------------------------------Call API or update data source with new profile information------------
  };

  const handleLogout = () => {
    //---------------------------------------------- Handle logout logic---------------------------
  };

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderDate}>{item.date}</Text>
      <Text style={styles.orderTotal}>Total: ${item.total}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.background}>
        <ScrollView>
          <ImageBackground
            source={{
              uri: 'https://www.transparentpng.com/download/wave/background-wave-transparent-19.png',
            }}
            resizeMode="cover"
          >
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
                <Text style={styles.logoutButtonText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
              <TouchableOpacity style={styles.button} onPress={handleEdit}>
                <AntDesign name="edit" size={20} color="white" />
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
            <View style={styles.listofCat}>
              <TouchableOpacity style={styles.orderButton}>
                <MaterialCommunityIcons
                  name="cart-variant"
                  size={20}
                  color="white"
                />
                <Text style={styles.orderButtonText}>My Orders</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.orderButton, backgroundColor: 'skyblue' }}
              >
                <Ionicons name="ios-heart-outline" size={20} color="white" />
                <Text style={styles.orderButtonText}>My WishList</Text>
              </TouchableOpacity>
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
    borderWidth:2,
    borderColor:"skyblue",
    
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
    marginLeft:15,
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
