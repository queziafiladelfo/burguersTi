import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

import Feed from './src/screens/Feed/index';
import Details from './src/screens/Details/index';
import Comments from './src/screens/Comments/index';

function App(){
    const Stack = createStackNavigator();  
    return(
       
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Burguers-Ti" component={Feed} options={style} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="Comments" component={Comments} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

//nomeclaturas aqui tem que ser padrões
const style = {
    headerStyle:{
        // paddingTop: 34,
        // paddingBottom: 16,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: { height: 6 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        elevation: 10
    },

    headerTitleStyle:{
        color: '#3b3d40',
        fontSize: 32,
        fontWeight: 'bold',
        alignSelf: 'center',

    }

}

export default App;