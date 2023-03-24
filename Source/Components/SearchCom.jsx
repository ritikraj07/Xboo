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
                <Icon name='notifications-none' size={35} />
            </View>
            


        </View>
    );
}

const styles = StyleSheet.create({
    searchView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
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