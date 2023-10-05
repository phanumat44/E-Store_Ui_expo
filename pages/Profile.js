import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

const Profile = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <View style={{ flex: 2, alignItems: 'center' }}>
                    <Image source={require('../assets/pfp.jpg')} style={styles.pfp} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, alignSelf: 'center', color: "white" }}>John Doe</Text>
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: "white" }}>Johndoe@gmail.com</Text>
                </View>
            </View>
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'flex-start', paddingHorizontal: 0 }}>
                <TouchableOpacity style={styles.btn}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="settings-sharp" size={30} color="black" />
                        <Text style={{ fontSize: 25, }}>Settings</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="help-circle-outline" size={30} color="black" />
                        <Text style={{ fontSize: 25, }}>Help</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="exit-outline" size={30} color="black" />
                        <Text style={{ fontSize: 25, }}>Logout</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    pfp: {
        width: 150,
        height: 150,
        borderRadius: 100,

        marginTop: 100,
        marginBottom: 100,
        borderWidth: 2,
        borderColor: 'white',

    },
    btn: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        /*   elevation: 5, */
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomWidth: 1,
    }
})