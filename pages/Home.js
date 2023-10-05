import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, FlatList, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import React from 'react';
import ProdCard from '../components/ProductCard';
import SkeletonLoader from '../components/SkeletonLoader';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const data = [
        { id: '1', name: 'All' },
        { id: '2', name: 'Dance' },
        { id: '3', name: 'R&B' },
        { id: '4', name: 'Pop' },
        { id: '5', name: 'Rock' },
        { id: '6', name: 'Edm' },
        { id: '7', name: 'Jazz' },
        { id: '8', name: 'Country' },
        { id: '9', name: 'Instrumental' },

    ];

    const navigation = useNavigation();

    const screenWidth = parseInt(Dimensions.get('window').width)
    const [searchValue, setSearchValue] = useState('');
    const [products, setProducts] = useState([]);
    const [tempProduct, setTempProduct] = useState([]);
    const screenHeight = Dimensions.get('window').height;
    const tempArr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 },]
    const [isLoading, setIsLoading] = useState(true);

    const handleSearchInputChange = (text) => {
        setSearchValue(text);
    };

    useEffect(() => {
        fetchDataFromAPI()
    }, []);

    const navigateToProductDetail = (item) => {
        navigation.navigate('Detail', {
            id: item.id,
            img: item.img,
            title: item.title,
            singer: item.singer,
            price: item.price,
            desc: item.desc,
            releaseAt: item.releaseAt
        });
    };

    const fetchDataFromAPI = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api.steinhq.com/v1/storages/6513c80c61eb47055d9f86c2/Products');
            const data = await response.json();

            const shuffledData = data.sort(() => Math.random() - 0.5)
            setTempProduct(shuffledData);
            setProducts(shuffledData);
            console.log(products)
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error('Error fetching data:', error);

        }
    };


    const renderItem = ({ item }) => (
        <View style={[styles.item, item.name == "All" ? { backgroundColor: 'black' } : {}]}>
            <Text style={[styles.itemText, item.name != "All" ? { color: 'black' } : { color: 'white', }]} >{item.name}</Text>
        </View>
    );


    return (

        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <View style={[{ flex: 1, }]}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: "row", justifyContent: "space-between" }}>
                        <Icon2 name="menu" padding={2} size={50} color="black" />
                        <TouchableOpacity onPress={() => fetchDataFromAPI()}>
                            <Image style={styles.pfp} source={require('../assets/pfp.jpg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[{ flex: 1, paddingHorizontal: 5 }]}>
                    <Text>Hi, Suranaree</Text>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Choose your favorite album</Text>
                </View>
                <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
                    <View style={styles.searchEL}>
                        <Icon name="search" size={25} color="#555" style={{ marginLeft: 7, borderColor: 'rgba(0, 0, 0, 0.2)' }} />
                        <TextInput
                            style={{ flex: 1, width: 100, marginLeft: 10, height: 50 }}
                            placeholder="Search Album..."
                            value={searchValue}
                            onChangeText={(search) => handleSearchInputChange(search)}
                        />
                    </View>
                </View>
                <View style={[{ flex: 1, alignItems: 'center', }]}>

                    <FlatList
                        paddingVertical={5}
                        paddingHorizontal={10}
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.name.toString()}
                    />
                </View>
            </View>
            <View style={{ flex: 7 }}>
                <View style={[{ flex: 2.5, }]}>
                    <  Image style={styles.banner} source={require('../assets/banner.jpg')} />
                </View>
                <Text style={[, { fontWeight: 'bold', marginVertical: 3 }]}>Recommended for you</Text>
                <View style={[{ flex: 7.5, }]}>
                    <FlatList
                        alignSelf='center'

                        data={products.length > 0 && !isLoading ? products : tempArr}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (<>
                            {products.length > 0 && !isLoading ? <TouchableOpacity onPress={() => navigateToProductDetail(item)}>
                                <ProdCard

                                    screenWidth={screenWidth}
                                    img={item.img}
                                    title={item.title}
                                    singer={item.singer}
                                    price={item.price}
                                />
                            </TouchableOpacity> :
                                <View style={[styles.card, {
                                    width: screenWidth / 2 - 15, maxHeight: 250, height: 250, margin: 4,
                                    alignSelf: 'center'
                                }]}>
                                    <SkeletonLoader height={155} width={190} style={{ borderRadius: 0, }} />
                                    <View style={{ padding: 5, paddingHorizontal: 20 }}>
                                        <SkeletonLoader height={18} width={160} style={{ borderRadius: 8, marginTop: 10 }} />
                                        <SkeletonLoader height={12} width={100} style={{ borderRadius: 8, marginTop: 8 }} />
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                            <SkeletonLoader height={12} width={60} style={{ borderRadius: 8, marginTop: 8 }} />
                                        </View>
                                    </View>
                                </View>
                            }
                        </>)}
                        numColumns={2}
                    />

                </View>
            </View>
        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        borderWidth: 0,
        flex: 1,
        padding: 7,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
    aqua: {
        backgroundColor: 'aqua',
    },
    yellow: {
        backgroundColor: 'yellow',
    },
    pfp: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: "black",
        borderWidth: 1

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
        height: '60%',
        marginVertical: 7,
        marginRight: 32,
    },
    itemText: {

        fontSize: 16,
    },
    searchEL: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        height: '90%',
        width: '95%',
        borderWidth: 1,
        borderBlockColor: 'rgba(0, 0, 0, 0.2)',
        padding: 0,
        borderRadius: 50,
        borderColor: 'rgba(0, 0, 0, 1)'
    },
    banner: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    card: {
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.24,
        shadowRadius: 4,
        borderRadius: 7,
    }
});
{/*    */ }