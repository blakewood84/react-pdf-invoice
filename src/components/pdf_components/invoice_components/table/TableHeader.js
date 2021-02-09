import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_header_view: {
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        fontSize: '12pt',
        textAlign: 'center',
        backgroundColor: '#090909',
        color: '#fff',
        padding: '5px'
    },
    col1: { // Items
        width: '63%',
    },
    col2: { // Qty
        width: '7%',
    },
    col3: { // Price
        width: '15%',
    },
    col4: { // Total
        width: '15%',
    }
});

const TableHeader = () => {
    return (
        <View style={styles.table_header_view}>
            <Text style={styles.col1}>ITEM</Text>
            <Text style={styles.col2}>QTY</Text>
            <Text style={styles.col3}>PRICE</Text>
            <Text style={styles.col4}>TOTAL</Text>
        </View>
    )
}

export default TableHeader;