import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);

        if (value) {
            return JSON.parse(value);
        } else {
            return null;
        }
    } catch (e) {
        console.log("Unable to read data", e);
    }
};

export default getData;
