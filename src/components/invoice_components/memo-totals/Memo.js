import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    view: {
        width: '220px',
    },
    title: {
        fontSize: '14pt'
    },
    sub_text: {
        fontSize: '10pt'
    }

});

const Memo = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>*Memo</Text>
            <Text style={styles.sub_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </View>
    )
}

export default Memo;