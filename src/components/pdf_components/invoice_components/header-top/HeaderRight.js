import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

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

const HeaderRight = (props) => {
    return (
        <View style={styles.invoice_view}>
            <View style={styles.invoice_row}>
                <Text style={styles.invoice}>INVOICE</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>DATE:</Text>
                {/* <Text style={styles.sub_text}>{props.date_created}</Text> */}
                <Text style={styles.sub_text}>01/22/22</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>DUE DATE:</Text>
                {/* <Text style={styles.sub_text}>{props.due_date}</Text> */}
                <Text style={styles.sub_text}>01/22/22</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_title}>INVOICE NO.</Text>
                {/* <Text style={styles.sub_text}>{props.invoice_id}</Text> */}
                <Text style={styles.sub_text}>54654</Text>
            </View>
        </View>
    )
}

export default HeaderRight;