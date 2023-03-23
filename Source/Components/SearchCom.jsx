import React from 'react';
import { View, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Text, Icon } from '@rneui/themed';

function SearchCom(props) {
    return (
        <View style={styles.searchView}  >
            <View style={styles.searchInputView}>
                <Icon name='mic' size={35} />
                <TextInput
                    placeholder='Search for products'
                    placeholderTextColor="#8585ad"
                    style={styles.searchInput} />
            </View>
            <Icon name='notifications-none' size={35} />
        </View>
    );
}

const styles = StyleSheet.create({
    homeContanier: {
        flex: 1,
        backgroundColor: 'white'
    },
    banner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 1,
        paddingHorizontal: 10,
        height:1200
    },
    searchInputView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#f0f5f5',

    },
    searchInput: {
        width: '90%',
        padding: 5,
        fontSize: 22,

    },

})



export default SearchCom;