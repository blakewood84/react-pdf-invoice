import React from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_view1: {
        width:'100%',
        fontSize: '10pt',
        display: 'flex',
        flexDirection: 'row'
    },
    table_view2: {
        width:'100%',
        fontSize: '10pt',
        display: 'flex',
        flexDirection: 'row',
    },
    table_view2_shaded: {
        width:'100%',
        fontSize: '10pt',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#dddddd'
    },
    col1: { // Items
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: '3px',
    },
    col2: { // Qty
        width: '10%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    col3: { // Price
        width: '20%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    col4: { // Total
        width: '20%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }

});

const data = [
    {
        description: 'Lorem ipsum dolo.',
        qty: '01',
        price: 211.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        qty: '01',
        price: 211.22,
    },
    {
        description: 'Lorem ipsum dolor.',
        qty: '01',
        price: 211.22,
    },
    {
        description: 'Lorem ipsum dolor .',
        qty: '01',
        price: 211.22,
    },
    {
        description: 'Lorem ipsum dolor.',
        qty: '01',
        price: 211.22,
    },
]


const TableRows = () => {
    let row_index = 0; 
    return (
        <View style={styles.table_view}>
            {
                
                data.map(item => {
                    
                    row_index++;
                    if(row_index % 2 === 0) { // if row is even
                        // Return Row that is shaded
                        return(
                        <View style={styles.table_view2_shaded}>
                            <Text style={styles.col1}>{item.description}</Text>
                            <Text style={styles.col2}>{item.qty}</Text>
                            <Text style={styles.col3}>{item.price}</Text>
                            <Text style={styles.col4}>$100</Text>
                        </View>
                    )
                    }
                    if(row_index % 2 !== 0){ // if row is odd
                        // Return Row that is not shaded
                        return(
                            <View style={styles.table_view2}>
                                <Text style={styles.col1}>{item.description}</Text>
                                <Text style={styles.col2}>{item.qty}</Text>
                                <Text style={styles.col3}>{item.price}</Text>
                                <Text style={styles.col4}>$100</Text>
                            </View>
                        )
                    }
                    
                })
            }
        </View>
    )
}

export default TableRows;