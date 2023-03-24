import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
      console.log(result.assets[0].uri);
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
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={handleChooseProfilePic}>
          {profilePic ? (
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
          ) : (
            <View style={styles.profilePic}>
              <Text style={styles.profilePicLabel}>Add Photo</Text>
            </View>
          )}
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        {editMode ? (
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        ) : (
          <Text style={styles.value}>{name}</Text>
        )}
        <Text style={styles.label}>Email</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        ) : (
          <Text style={styles.value}>{email}</Text>
        )}
        <Text style={styles.label}>Phone</Text>
        {editMode ? (
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
        ) : (
          <Text style={styles.value}>{phone}</Text>
        )}
        <Text style={styles.label}>Address</Text>
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
        {editMode ? (
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleEdit}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.orderButton}>
          <Text style={styles.orderButtonText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.orderButton,backgroundColor:"skyblue"}}>
          <Text style={styles.orderButtonText}>My WishList</Text>
        </TouchableOpacity>

        {/* <View style={styles.orders}>
        <Text style={styles.ordersLabel}>Orders</Text>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
      renderItem={renderOrderItem}
    />
  </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    marginRight: 20,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginLeft: 'auto',
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  value: {
    marginTop: 5,
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orderButton: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePicLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
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
});

export default Profile;
