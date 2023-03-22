import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, createTheme } from '@rneui/themed';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
