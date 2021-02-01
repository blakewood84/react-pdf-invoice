import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import BillingLeft from './BillingLeft';
import BillingRight from './BillingRight';

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:'20px'
    },
    right: {
        marginRight: '60px'
    }
});

const Billing = () => {
    return (
        <View style={styles.view}>
            <View>
                <BillingLeft />
            </View>
            <View style={styles.right}>
                <BillingRight />
            </View>
        </View>
    )
}

export default Billing;