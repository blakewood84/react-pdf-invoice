import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import Questions from './Questions';

const styles = StyleSheet.create({
    table_view: {
        marginTop: '10px',
    },
    text_row: {
        fontSize: '12pt',
        textAlign: 'center',
        borderTop: '3pt solid black',
        paddingTop: '5px'
    }
});

const BottomBar = () => {
    return (
        <View style={styles.table_view}>
            
            <View style={styles.text_row}>
                <Text>3650 Crater Lake Ave, Medford, OR 97504 - www.hukills.com</Text>
            </View>
        </View>
    )
}

export default BottomBar;