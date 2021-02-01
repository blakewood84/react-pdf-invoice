import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize:'20pt',
    },
    sub_rows: {
        fontSize: '12pt',
        marginTop: '2px'
    }
});

const BillingRight = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Service To:</Text>
            <Text style={styles.sub_rows}>John Doe</Text>
            <Text style={styles.sub_rows}>508-572-1812</Text>
            <Text style={styles.sub_rows}>211 Kovar Road, Burlington, MA 01803</Text>
        </View>
    )
}

export default BillingRight;