import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import TableHeader from './TableHeader';
import TableRows from './TableRows';

const styles = StyleSheet.create({
    table_view: {
        width:'100%',
    }
});

const Table = (props) => {
    return (
        <View style={styles.table_view}>
            <View>
                <TableHeader />
            </View>
            <View>
                <TableRows 
                    invoice_items={props.invoice_items} 
                />
            </View>
        </View>
    )
}

export default Table;