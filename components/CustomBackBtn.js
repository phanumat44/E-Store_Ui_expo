import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomBackBtn = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Constants.statusBarHeight, marginHorizontal: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 50, padding: 7, paddingHorizontal: 8 }}>

                    <Icon name="arrow-back" size={27} color="black" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 50, padding: 7, paddingHorizontal: 8 }}>
                    <View style={styles.badge}></View>
                    <Icon name="cart-outline" size={27} color="black" />
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default CustomBackBtn;

const styles = StyleSheet.create({
    badge: {
        position: 'absolute',
        right: 0,
        top: 0,
        backgroundColor: 'red',
        width: 15,
        height: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white',
    }
})