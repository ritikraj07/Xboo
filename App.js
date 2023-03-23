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



const Tab = createBottomTabNavigator();

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
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: 'yellowgreen',
              tabBarInactiveTintColor:'black'
            }} 
          >
            <Tab.Screen name="Home" component={Home}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: ({ color, size }) =>
                  <Icon name="home" type='octicons' color={color} size={size} />
              }}
            />
            <Tab.Screen name="Product" component={Product} 
              options={{
                tabBarLabel: "Product",
                tabBarIcon: ({ color, size }) =>
                  <Icon name="shopping-bag-1" type='fontisto' color={color} size={size} />
              }}
          />
            <Tab.Screen name="Cart" component={Cart}
              options={{
                tabBarLabel: "Cart",
                tabBarIcon: ({ color='green', size }) =>
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
      </NavigationContainer>
    </ThemeProvider>
     </SafeAreaView>
  );
}
