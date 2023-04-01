import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log("Unable to store data", e);
    }
};

export default setData;
