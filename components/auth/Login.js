import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { firebase } from '@react-native-firebase/app';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }
    onSignUp() {
        const { email, password, } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        }
        )
            .catch((error) => {
                console.log(error)
            }
            )
    }






    render() {


        return (
            <View>

                <TextInput
                    placeholder="email"
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignUp()}
                    title="Signin" />

            </View>
        )
    }
}


export default Login
