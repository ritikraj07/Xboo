import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

export default function Payment({navigation}) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const route = useRoute();
    const { address } = route.params;
    // const address = { street: 'ajsdhk', line2: 'ashdhj', city: 'Nagpur', state: 'Maharashtra', zip: 19389 }
    const handlePayment = () => {
        navigation.navigate('Sp')
        
    };

    return (
        <>
            <View style={styles.container1}>
                <Text style={styles.addressLine}>Delivery Address:</Text>
                <Text style={styles.addressLine}>{address.street}, {address.city} {address.state}-{address.zip}</Text>
                <Text style={styles.addressLine}>{address.country}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Payment Information</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    onChangeText={setCardNumber}
                    value={cardNumber}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Cardholder Name"
                    onChangeText={setCardHolder}
                    value={cardHolder}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Expiration Date"
                    onChangeText={setExpirationDate}
                    value={expirationDate}
                />
                <TextInput
                    style={styles.input}
                    placeholder="CVV"
                    onChangeText={setCvv}
                    value={cvv}
                />
                <Button title="Pay Now" onPress={handlePayment} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1: {
        // flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    addressLine: {
        textAlign: 'left'
    }
});
