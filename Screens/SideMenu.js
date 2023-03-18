import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './Home';


const Drawer = createDrawerNavigator();

function SideMenu() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
     
    </Drawer.Navigator>
  );
}

export default SideMenu;
