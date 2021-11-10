import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Touchable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function TaskList({data, deleteItem, editItem}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{marginRight: 10}} onPress={() => deleteItem(data.key)}>
                <Feather name="trash" color="#171717" size={20} />
            </TouchableOpacity>

            <View style={{paddingRight: 10}}>
                <TouchableWithoutFeedback onPress={ ()=> editItem(data) }>
                    <Text style={styles.tarefatxt}>{data.nome}</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        flexDirection: 'row',
        elevation: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        marginBottom: 10,
        padding: 10,
        borderRadius: 4,
    },
    tarefatxt: {
        color: '#171717',
        paddingRight: 10
    }
})