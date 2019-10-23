import React , { Component } from 'react'
import {
View,Text,TouchableOpacity,ScrollView,StyleSheet,Picker
} from 'react-native'

import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { update_user } from '../store/actions/action'
import { connect } from 'react-redux'
import ip from './ip'

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
           
                fName:'Aijaz',
                lName:'Abbasi',
                email:'m8y@gmail.com',
                bloodGroup:'A+',
                password:12334455,
            
        }
    }

     _signup(){
          console.log('chala')
          let {fName,lName,email,bloodGroup,password} = this.state
          fetch(`http://${ip}:3000/users/register`, {
    method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
    body: JSON.stringify({fName,lName,email,bloodGroup,password})
}).then(user=>user.json())
.then(data=>console.log(data))
.catch(error=>console.log(error))
      }

    componentDidMount(){
        // this.props.store_user({'name':'Aijaz jee'})
    }

    render(){
        return(
            <View style={{flex:1,backgroundColor:'teal'}}>

{/* Header */}
                <View style={styles.header}>
                    <Text style={styles.hText}>Blood Donation App</Text>
                </View>

{/* Form */}
            <View style={styles.container}>

                <ScrollView>

                  <Form style={styles.form}>
            <Item floatingLabel>
              <Label style={styles.label}>First Name</Label>
              <Input onChangeText={(text)=>this.setState({fName:text})} />
            </Item>

            <Item floatingLabel>
              <Label style={styles.label}>Last Name</Label>
              <Input onChangeText={(text)=>this.setState({lName:text})} />
            </Item>

            <Item floatingLabel>
              <Label style={styles.label}>Email</Label>
              <Input onChangeText={(text)=>this.setState({email:text})} />
            </Item>

            <Item  >
                {/* <Label style={styles.label}>Blood Group</Label> */}
              <Picker
  selectedValue={this.state.blood}
  style={{height: 50, width: 200,color:'white',backgroundColor:'teal'}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({blood: itemValue})
  }>
       {/* <Picker.Item label="" value="" /> */}
  <Picker.Item label="A+" value="A+" />
  <Picker.Item label="A-" value="A-" />
   <Picker.Item label="B+" value="B+" />
  <Picker.Item label="B-" value="B-" />
  <Picker.Item label="AB+" value="AB+" />
  <Picker.Item label="AB-" value="AB-" />
   <Picker.Item label="O+" value="O+" />
  <Picker.Item label="O-" value="O-" />
</Picker>

            </Item>

            <Item floatingLabel >
              <Label style={styles.label}>Password</Label>
              <Input onChangeText={(text)=>this.setState({password:text})}  secureTextEntry/>
            </Item>

            <TouchableOpacity onPress={()=>this._signup()} style={styles.button}>
                <Text style={styles.bText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',marginTop:20}}>
                <Text style={{color:'white',fontSize:16,marginRight:5}}>Already have an account? </Text>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('SignIn')}>
                    <Text style={{color:'#00FFFF',fontSize:18,}}>Sign In</Text>
                </TouchableOpacity>
            </View>
          </Form>

</ScrollView>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'teal'
    },
    form:{
        marginLeft:5,
        marginRight:5,
        maxWidth:350,
        alignSelf:'center',
        minWidth:300
    },
    label:{
        color:'white'
    },
    button:{
        backgroundColor:'white',
        marginTop:26,
        height:40,
        justifyContent:'center',
        borderRadius:20
    },
    bText:{
        color:'teal',
        textAlign:'center',
        fontSize:18
    },
    header:{
        height:100,
        backgroundColor:'#20B2AA',
        justifyContent:'center',
        // borderWidth:2,
        borderBottomEndRadius:100,
        borderBottomStartRadius:100,
        marginBottom:2,
    },
    hText:{
        color:'white',
        fontWeight:'800',
        fontSize:22,
        textAlign:'center'
    }

})

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);