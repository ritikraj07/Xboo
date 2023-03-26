import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, createTheme } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import Home from './Source/Screen/Home';
import Product from './Source/Screen/Product';
import Cart from './Source/Screen/Cart';
import Profile from './Source/Screen/Profile';
import SearchCom, {} from './Source/Components/SearchCom.jsx'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import SignUp from './Source/SignIn/SignUp';
import PhoneOtp from './Source/SignIn/PhoneOtp';
import EmailAuth from './Source/SignIn/EmailAuth';
import ProductList from './Source/Components/ProductList';
import ProductDescription from './Source/Components/ProductDescription';


function BottomTabs() {
  return <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'yellowgreen',
      tabBarInactiveTintColor: 'black'
    }}
  >
    <Tab.Screen name="Home" component={Home}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) =>
          <Icon name="home" type='octicons' color={color} size={size} />
      }}
    />
    <Tab.Screen name="Category" component={Product}
      options={{
        tabBarLabel: "Category",
        tabBarIcon: ({ color, size }) =>
          <Icon name="shopping-bag-1" type='fontisto' color={color} size={size} />
      }}
    />
    <Tab.Screen name="Cart" component={Cart}
      options={{
        tabBarLabel: "Cart",
        tabBarIcon: ({ color = 'green', size }) =>
          <Icon name="shopping-cart" type='fontAwesome5' color={color} size={size} />
      }}
    />
    <Tab.Screen name="Profile" component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) =>
          <Icon name="account" type='material-community' color={color} size={size} />
      }}
    />
  </Tab.Navigator>
}

function MyStack() {
  return (<Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="EmailAuth" component={EmailAuth} />
    <Stack.Screen name="BottomTab" component={BottomTabs} />
    <Stack.Screen name="SearchCom" component={SearchCom} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="PhoneOtp" component={PhoneOtp} />
    <Stack.Screen name="EmailAuth" component={EmailAuth} />
    <Stack.Screen name="productList" component={ProductList} />
    <Stack.Screen name="productdesc" component={ProductDescription} />
    
  </Stack.Navigator>)
}



export default function App() {
  const theme = createTheme({
    components: {
      Button: {
        raised: true,
      },
    },
  });

  return (
    <SafeAreaView style={{ flex: 1}}> 
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
         <MyStack />
      </NavigationContainer>
    </ThemeProvider>
    </SafeAreaView>
  );
}
