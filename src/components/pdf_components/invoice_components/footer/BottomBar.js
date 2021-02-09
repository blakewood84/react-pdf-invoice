import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_view: {
        marginTop: '10px',
        width: '100%',
    },
    text_row: {
        fontSize: '12pt',
        textAlign: 'center',
        borderTop: '3pt solid black',
        paddingTop: '5px'
    },
    page_number: {
        fontSize: '10pt',
        marginTop: '5px'
    }
});

const BottomBar = (props) => {
    return (
        <View style={styles.table_view}>
            
            <View style={styles.text_row}>
                <Text>3650 Crater Lake Ave, Medford, OR 97504 - www.hukills.com </Text>
                <Text style={styles.page_number}>Page {props.page_number}</Text>
            </View>
        </View>
    )
}

export default BottomBar;