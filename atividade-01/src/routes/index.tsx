import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './AppNavigator';


export function Routes() {
    return(
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
} 