import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {


    let price1 = 79.96
    let price2 = 43.98
    const [qty1, setQty1] = useState(1)
    const [qty2, setQty2] = useState(1)
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Check Out</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>2 items</Text>
                <TouchableOpacity style={{ backgroundColor: 'black', padding: 10, paddingVertical: 5, borderRadius: 5 }}>
                    <Text style={{ color: 'white' }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lineBold}></View>
            <View style={{ flex: 1, gap: 5 }}>
                <View style={{ paddingHorizontal: 15, }}>
                    <View style={{ height: 170, width: '100%', flexDirection: 'row', borderBottomWidth: 1 }}>
                        <View style={{ width: "35%", height: "100%", padding: 7 }}>
                            <Image source={{ uri: 'https://assets.teenvogue.com/photos/6076dcb99774944e1309a4d1/4:3/w_1500,h_1125,c_limit/olivia.jpeg' }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                        </View>
                        <View style={{ width: "65%", height: "100%", padding: 10 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <View>
                                    <Text style={styles.itemTitle}>SOUR</Text>
                                    <Text style={{}}>Quality : Master</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.itemTitle}>${(price1 * qty1).toFixed(2)}</Text>
                                    <View style={{ paddingHorizontal: 5, paddingVertical: 5, flexDirection: 'row', borderRadius: 50, width: 'auto', backgroundColor: '#f6f6f6', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => { qty1 > 1 ? setQty1(qty1 - 1) : setQty1(1) }}><Icon2 name="minus" size={15} color="black" /></TouchableOpacity>
                                        <Text style={{ marginHorizontal: 10, }}>{qty1}</Text>
                                        <TouchableOpacity onPress={() => setQty1(qty1 + 1)}><Icon2 name="plus" size={15} color="black" /></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 15, }}>
                    <View style={{ height: 170, width: '100%', flexDirection: 'row', borderBottomWidth: 1 }}>
                        <View style={{ width: "35%", height: "100%", padding: 7 }}>
                            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/4/45/Billie_Eilish_-_Happier_Than_Ever.png' }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                        </View>
                        <View style={{ width: "65%", height: "100%", padding: 10 }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                <View>
                                    <Text style={styles.itemTitle}>Happier Than Ever</Text>
                                    <Text style={{}}>Quality : Hi-Fi</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={styles.itemTitle}>${(price2 * qty2).toFixed(2)}</Text>
                                    <View style={{ paddingHorizontal: 5, paddingVertical: 5, flexDirection: 'row', borderRadius: 50, width: 'auto', backgroundColor: '#f6f6f6', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={() => { qty2 > 1 ? setQty2(qty2 - 1) : setQty2(1) }}><Icon2 name="minus" size={15} color="black" /></TouchableOpacity>
                                        <Text style={{ marginHorizontal: 10, }}>{qty2}</Text>
                                        <TouchableOpacity onPress={() => setQty2(qty2 + 1)}><Icon2 name="plus" size={15} color="black" /></TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ fontSize: 18 }}>sub total</Text>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>${((price1 * qty1) + (price2 * qty2)).toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingHorizontal: 15, alignItems: 'center', marginTop: 5 }}>
                    <Text style={{ fontSize: 12 }}>(total Does not include shipping)</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ backgroundColor: 'black', padding: 10, paddingVertical: 10, borderRadius: 10, marginHorizontal: 15, marginTop: 30 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>Check Out</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ borderWidth: 1, backgroundColor: 'white', padding: 2, paddingVertical: 0, borderRadius: 10, marginHorizontal: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 20 }}>Check Out with</Text>
                    <Image source={require('../assets/paypallogo.png')} style={{ width: 90, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
                    <Text style={{ alignSelf: 'center', marginTop: 30 }}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>
        </View >
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