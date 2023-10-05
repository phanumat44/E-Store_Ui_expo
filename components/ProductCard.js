//product card component
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, Button } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function ProdCard(props) {

    console.log(props.img)
    return (
        <View style={[styles.container, { width: props.screenWidth / 2 - 16 }]} >
            <View style={styles.mall_label} >
                <Icon size={24} name='heart' color={'white'} />
            </View>
            <Image source={{ uri: props.img }} style={styles.image} />
            <View style={{ position: 'absolute', bottom: 15, }}>
                <Text numberOfLines={1} style={styles.title}>{props.title} </Text>
                <View style={{
                    marginTop: 3,
                    width: 150, flex: 1, justifyContent: "flex-start", flexDirection: 'row', alignItems: 'center'
                }}>
                    <Text numberOfLines={1}>by : {props.singer}</Text>

                </View>
                <View style={{
                    width: 150, flex: 1, justifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center'
                }}>
                    <Text style={styles.price}>${props.price}</Text>

                </View>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {

        height: 250,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        overflow: 'hidden',
        borderRadius: 5,
        position: 'relative',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 0.7,

    },
    price: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    },
    discount: {
        fontSize: 12,
        color: 'red',
        backgroundColor: '#ffdede',
    },
    image: {
        position: 'absolute',
        top: 0,
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        /* resizeMode: 'contain', */
        maxHeight: 155,
        /* backgroundColor: '#55578c', */
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 0,

    },
    cart_btn: {
        /*   backgroundColor: '#fff',  */// Button background color
        paddingVertical: 4,
        borderWidth: 1,
        paddingHorizontal: 15,
        marginTop: 5,
        position: 'absolute',
        borderRadius: 10, // Adjust the border radius as needed
    },
    buttonText: {
        color: '#000',
    },
    mall_label: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.17)',
        padding: 3,
        borderRadius: 50,
        top: 2,
        right: 2,
        zIndex: 1,
    }

});  