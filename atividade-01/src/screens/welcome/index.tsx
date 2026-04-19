import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export function Welcome() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate("Drawer" as never)
    }

    function registerPress() {
        navigation.navigate("Register" as never)
    }

    function loginPress() {
        navigation.navigate("Login" as never)
    }

    return(
     <View style={{flex:1, alignItems: "center", justifyContent:"center"}} >
        <Text>
            Bem-vindo ao aplicativo de aluguel de carros.
        </Text>
        <Button title="Ir para Drawer" onPress={handlePress} />
        <Button title="Registrar" onPress={registerPress} />
        <Button title="Login" onPress={loginPress} />
     </View>
    )
}