import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';

import React from 'react'

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        navigation.navigate('Tabs');
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="applemusic" size={150} color="black" />
            <TextInput
                placeholder="Username"
                value={username}
                style={[styles.input, { marginTop: '20%' }]}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                value={password}
                style={styles.input}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
                <View >
                    <Text style={{ fontSize: 25, color: 'white' }}>Login</Text>
                </View>
            </TouchableOpacity >

            <Text>Don't have an account?</Text>

        </View >
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        shadowColor: '#000',
        backgroundColor: 'white',
        elevation: 5,
        padding: 10,
        width: '80%',
        borderRadius: 50,
    },
    btn: {
        marginTop: 20,
        marginBottom: 20,
        borderWidth: 1,
        padding: 10,
        width: '80%',
        borderRadius: 50,
        alignItems: 'center',
        backgroundColor: 'black',
        shadowColor: '#000',
        elevation: 10
    },
    pfp: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: 'black',
    }
})