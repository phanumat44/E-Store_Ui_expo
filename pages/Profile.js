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
                    <Image source={require('../assets/pfp.jpeg')} style={styles.pfp} />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 30, alignSelf: 'center', color: "white" }}>John Doe</Text>
                    <Text style={{ fontSize: 20, alignSelf: 'center', color: "white" }}>Johndoe@mail.com</Text>
                </View>

                <View style={{ display: "flex", alignContent: "center", justifyContent: "space-around", flexDirection: "row", marginBottom: 20 }}>
                    <TouchableOpacity style={{ width: 120, justifyContent: "center", alignContent: "center", marginBottom: 10, display: "flex", flexDirection: "row", backgroundColor: "black", borderWidth: 1, borderColor: "white", padding: 10, borderRadius: 50 }}>
                        <Icon name="heart" size={25} color="white" />
                        <Text style={{ color: "#ffff", fontSize: 22, marginLeft: 5 }}>67k</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 120, justifyContent: "center", alignContent: "center", marginBottom: 10, display: "flex", flexDirection: "row", backgroundColor: "white", padding: 10, borderRadius: 50 }}>
                        <Icon name="person" size={25} color="black" />
                        <Text style={{ color: "#111", fontSize: 22, marginLeft: 5 }}>10k</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'flex-start', paddingHorizontal: 0 }}>
                <TouchableOpacity style={styles.btn}>
                    <View style={{ flexDirection: 'row', gap: 3 }}>
                        <Icon name="bookmark" size={30} color="black" />
                        <Text style={{ fontSize: 25, }}>Favorite</Text>
                    </View>
                </TouchableOpacity>

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


                <TouchableOpacity style={{
                    marginTop: 50, display: "flex", flexDirection: "row", padding: 10, backgroundColor: "black", margin: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center',
                }}>
                    <Icon name="exit-outline" size={30} color="white" />
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", paddingLeft: 10 }}>Logout</Text>
                </TouchableOpacity>

            </View>

        </View >
    )
}

export default Profile

const styles = StyleSheet.create({
    pfp: {
        width: 150,
        height: 150,
        borderRadius: 100,

        marginTop: 40,
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