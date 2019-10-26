import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import * as Routes from '../screens/index'

const Auth = createStackNavigator({
    SignIn:Routes.SignIn,
    SignUp:Routes.SignUp,
},{
    headerMode:'none'
})

const Home = createStackNavigator({
 Home:Routes.Home,
})

const Blood_Request = createStackNavigator({
    Blood_Request : Routes.AddRequest
})

const drawer = createDrawerNavigator(
    {
        SignUp:{screen:Auth},
        Home:{screen:Home},
        PostR:{screen:Blood_Request}
},
{
    initialRouteName:'',
    contentComponent:Routes.Drawer,
    drawerPosition:'left'
}
)

const AppContainer =  createAppContainer(drawer)

export default class Nav extends React.Component{
    render(){
        return<AppContainer/>
    }
}