import React, { useState } from 'react';
import { View, Text, TextInput,Image, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';

export default function AddressForm({navigation}) {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');

    const handleSubmit = () => {
        const address = { street, city, state, zipcode };
        // onSubmit(address);
        navigation.navigate('Payment', {address})
        
    };

    return (
        <View style={styles.container}>

            <ImageBackground
                source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9R3q8guKFAt-fsNfc_7AN6a_o9tQxsAGXnbPDNbuvndQfusFQRHl3wCLAzGRIL0Pr_M&usqp=CAU",
                }}
                resizeMode="cover"

            >
                <View style={styles.banner}>
                    <Image source={require('./logo2.png')} style={{ width: 120, height: 60, marginRight: 0 }} />
                    <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between' }} >
                        <TouchableOpacity onPress={() => navigation.navigate('SearchCom')} >
                            <Icon name='search' type='feather' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ position: 'relative' }} onPress={() => on()} >
                            <Icon name='bell' type='feather' size={23} />
                            <Text style={{ position: 'absolute', color: 'green', fontSize: 18, fontWeight: 800, bottom: '50%', right: '50%' }} >3</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <Text style={styles.label}>Street:</Text>
            <TextInput
                style={styles.input}
                value={street}
                onChangeText={setStreet}
                placeholder="Enter your street address"
            />

            <Text style={styles.label}>City:</Text>
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Enter your city"
            />

            <Text style={styles.label}>State:</Text>
            <TextInput
                style={styles.input}
                value={state}
                onChangeText={setState}
                placeholder="Enter your state"
            />

            <Text style={styles.label}>Zipcode:</Text>
            <TextInput
                style={styles.input}
                value={zipcode}
                onChangeText={setZipcode}
                placeholder="Enter your zipcode"
                keyboardType="numeric"
            />

            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        fontSize: 18,
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },
});
