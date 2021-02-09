import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_view1: {
        width:'100%',
        fontSize: '10pt',
        display: 'flex',
        flexDirection: 'row',
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
        backgroundColor: '#dddddd',
    },
    col1: { // Items
        width: '63%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: '3px',
        fontSize: '9pt'
    },
    col2: { // Qty
        width: '7%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: '9pt'
    },
    col3: { // Price
        width: '15%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: '9pt'
    },
    col4: { // Total
        width: '15%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: '9pt'
    }

});

const data = [
    {
        description: 'Lorem ipsum dolo.',
        count: '01',
        customPricePerUnit: 22222.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor .',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolo.',
        count: '01',
        customPricePerUnit: 22222.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolo.',
        count: '01',
        customPricePerUnit: 22222.22,
    },
    {
        description: 'Lorem ipsum dolo.',
        count: '01',
        customPricePerUnit: 22222.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
]


const TableRows = (props) => {
    let row_index = 0; 

    return (
        <View style={styles.table_view}>
            {
                
                props.invoice_items.map( item => {
                    {/* console.log("ROW COUNT FOR THIS ROW: ", item.description.length / 80); */}
                    row_index++;
                    if(row_index % 2 === 0) { // if row is even
                        // Return Row that is shaded
                        return(
                        <View key={row_index} wrap style={styles.table_view2_shaded}>
                            <Text style={styles.col1}>{item.description}</Text>
                            <Text style={styles.col2}>{item.count}</Text>
                            <Text style={styles.col3}>{item.customPricePerUnit}</Text>
                            <Text style={styles.col4}>{item.count * item.customPricePerUnit}</Text>
                        </View>
                    )
                    }
                    if(row_index % 2 !== 0){ // if row is odd
                        // Return Row that is not shaded
                        return(
                            <View key={row_index} wrap style={styles.table_view2}>
                                <Text style={styles.col1}>{item.description}</Text>
                                <Text style={styles.col2}>{item.count}</Text>
                                <Text style={styles.col3}>{item.customPricePerUnit}</Text>
                                <Text style={styles.col4}>{item.count * item.customPricePerUnit}</Text>
                            </View>
                        )
                    }
                    
                })
            }
        </View>
    )
}

export default TableRows;