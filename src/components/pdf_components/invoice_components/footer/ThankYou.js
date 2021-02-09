import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_view: {
        color: '#cd242b',
        textAlign: 'right',
        width: '100px',
        marginRight: '40px',
        fontSize: '30pt'
    }
});

const ThankYou = () => {
    return (
        <View style={styles.table_view}>
            <Text>THANK</Text>
            <Text>YOU!</Text>
        </View>
    )
}

export default ThankYou;