import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import ProductDetailScreen from '../screens/productDetail/ProductDetailScreen';
import ShoppingCart from '../screens/shoppingCart/ShoppingCart';
// import HomeScreen from '@/screens/home/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="ShoppingCartScreen" component={ShoppingCart} />
        <Stack.Screen name="ProductScreen" component={ProductDetailScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigation