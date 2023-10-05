import { View, Text, Image, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Detail = ({ route }) => {

    const data = [
        { id: '1', name: 'Master' },
        { id: '2', name: 'Lossless' },
        { id: '3', name: 'Hi-Fi' },
        { id: '4', name: 'CD-Quality' },

    ];


    const [liked, setLiked] = useState(false);
    const [selected, setSelected] = useState(data[0].name);
    const [priceFactor, setPriceFactor] = useState(4);

    const generateRandomNumber = () => {
        const min = 50;
        const max = 1000;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }

    const ChangeQuality = (name) => {
        setSelected(name)
        if (name == "Master") {
            setPriceFactor(4)
        }
        else if (name == "Lossless") {
            setPriceFactor(3)
        }
        else if (name == "Hi-Fi") {
            setPriceFactor(2)
        }
        else if (name == "CD-Quality") {
            setPriceFactor(1)
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={[styles.item, item.name == selected ? { backgroundColor: 'black' } : {}]} onPress={() => ChangeQuality(item.name)}>
            <Text style={[styles.itemText, item.name != selected ? { color: 'black' } : { color: 'white', }]} >{item.name}</Text>
        </TouchableOpacity>
    );
    const { id, img, title, singer, price, desc, releaseAt } = route.params;
    return (
        <View style={{ backgroundColor: '#fff', height: '100%' }}>
            <Image source={{ uri: img }} style={styles.image} />
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10 }}>
                    <Text style={styles.title}>{title}</Text>
                    <TouchableOpacity  >
                        <Icon name="share-social-outline" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.singer}>by : {singer}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.date}>Release : {releaseAt}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Icon name="star" size={20} color="gold" />
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'grey', marginLeft: 5 }}>({generateRandomNumber()})</Text>
                    </View>
                </View>
                <Text style={styles.price}>${price * priceFactor}</Text>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginTop: 10 }}>Quality :</Text>
                <View style={[{ alignItems: 'center', }]}>
                    <FlatList
                        paddingVertical={10}
                        paddingHorizontal={10}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.name.toString()}
                    />
                </View>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <Text>{" " + " " + desc}</Text>
                </ScrollView>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => setLiked(!liked)}>
                            <Icon name={liked ? "heart" : "heart-outline"} size={35} color={liked ? "red" : "black"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCart} >
                            <Icon style={{ paddingHorizontal: 5 }} name="cart-outline" size={25} color="white" />
                            <Text style={styles.btnCartText}>
                                Add to cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 450,
        margin: 0,
        /*    alignSelf: 'center', */
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 10,
        paddingBottom: 5
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    singer: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    date: {

        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'grey',
        /*  backgroundColor: '#000', */
    },
    price: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 6,
        paddingVertical: 3,

        borderColor: 'black',
        minHeight: 32,
        minWidth: 50,
        width: 'auto',
        height: '10%',
        marginVertical: 7,
        marginRight: 20,
    },
    itemText: {

        fontSize: 16,
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        padding: 2,
        bottom: 0,
        paddingLeft: 10,
        alignItems: 'center',
    },
    btnCart: {
        backgroundColor: 'black',
        height: 50,
        width: '87%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },
    btnCartText: {
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})