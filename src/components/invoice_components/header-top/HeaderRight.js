import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet, Note } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoice_view: {
        width: '150px'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '10pt',
    },
    invoice: {
        fontSize: '34pt',
    },
    invoice_row: {
        marginBottom: '10px'
    },
    sub_title: {
        width: '50%',
        textAlign: 'right'
    },
    sub_text: {
        width: '50%',
        textAlign: 'left',
        paddingLeft:'10px'
    },
});

const HeaderRight = () => {
    return (
        <View style={styles.invoice_view}>
            <View style={styles.invoice_row}>
                <Text style={styles.invoice}>INVOICE</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>DATE:</Text>
                <Text style={styles.sub_text}>07/28/20</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>DUE DATE:</Text>
                <Text style={styles.sub_text}>07/28/20</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>INVOICE NO.</Text>
                <Text style={styles.sub_text}>003</Text>
            </View>
        </View>
    )
}

export default HeaderRight;