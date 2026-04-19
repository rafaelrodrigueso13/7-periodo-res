import { createDrawerNavigator } from "@react-navigation/drawer";
import { ModalScreen } from "../../screens/modal-screen";
import { BottomTabsModalNav } from "../bottom-tabs-modal";
import { BottomTabsListNav } from "../bottom-tabs-list";
import { FormScreen } from "../../screens/form";
import { ListScreen } from "../../screens/rentals-list";

const Drawer = createDrawerNavigator();

export function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Modal' component={BottomTabsModalNav} />
            <Drawer.Screen name='List' component={BottomTabsListNav} />
            <Drawer.Screen name='Cadastro de Aluguel' component={FormScreen} />
            <Drawer.Screen name='Lista de Aluguéis' component={ListScreen} />
        </Drawer.Navigator>
    )
}