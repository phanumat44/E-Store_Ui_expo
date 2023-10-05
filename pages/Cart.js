import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Check Out</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>Total</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineBold}></View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <View style={{ paddingHorizontal: 10 }}>
                    <View style={{ height: 170, width: '100%', flexDirection: 'row' }}>
                        <View style={{ width: "35%", backgroundColor: 'yellow', height: "100%" }}>
                            <Text>Image</Text>
                        </View>
                        <View style={{ width: "65%", backgroundColor: 'green', height: "100%", padding: 10 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <View>
                                    <Text style={styles.itemTitle}>SOUR</Text>
                                    <Text style={{}}>Quality : Master</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.itemTitle}>SOUR</Text>
                                    <View style={{}}>
                                        <Icon name="minus" size={15} color="black" />

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    lineBold: {
        height: 2,
        backgroundColor: 'black',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})