import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

const styles = StyleSheet.create({
    table_view: {
        width:'100%',
        marginTop: '20px'
    }
});

const Table = () => {
    return (
        <View style={styles.table_view}>
            <View>
                <TableHeader />
            </View>
            <View>
                <TableRows />
            </View>
        </View>
    )
}

export default Table;