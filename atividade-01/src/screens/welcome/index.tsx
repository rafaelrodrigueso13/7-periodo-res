import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

export function Welcome() {
    const navigation = useNavigation();

    function handlePress() {
        navigation.navigate("Drawer")
    }

    function registerPress() {
        navigation.navigate("Register")
    }

    function loginPress() {
        navigation.navigate("Login")
    }

    return(
     <View style={{flex:1, alignItems: "center", justifyContent:"center"}} >
        <Text>
            Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
        </Text>
        <Button title="Ir pra Login" onPress={handlePress} />
        <Button title="Ir pra Registrar" onPress={registerPress} />
     </View>
    )
}