import { createStackNavigator } from '@react-navigation/stack';
import { Welcome } from '../screens/welcome';
import { RegisterScreen } from '../screens/register';
import { LoginScreen } from '../screens/login';
import { DrawerNav } from './drawer';

const Stack = createStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Drawer" component={DrawerNav} />
    </Stack.Navigator>
  );
}