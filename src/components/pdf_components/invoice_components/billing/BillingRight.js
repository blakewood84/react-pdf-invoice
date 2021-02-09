import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        width: '200px'
    },
    title: {
        fontSize:'20pt',
        backgroundColor: '#090909',
        color: '#fff',
        padding: '3px',
    },
    sub_rows: {
        fontSize: '12pt',
        marginTop: '2px'
    }
});

const BillingRight = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>Service To:</Text>
            {/* <Text style={styles.sub_rows}>{props.service_to_info.addressName}</Text>
            <Text style={styles.sub_rows}>{props.service_to_info.addressLine1}</Text>
            <Text style={styles.sub_rows}>{props.service_to_info.addressLine2}</Text> */}
            <Text style={styles.sub_rows}>John Doe</Text>
            <Text style={styles.sub_rows}>2432 Address Street</Text>
            <Text style={styles.sub_rows}>Somewhere, OR 97987</Text>
        </View>
    )
}

export default BillingRight;