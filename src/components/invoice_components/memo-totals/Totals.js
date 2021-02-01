import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    totals_view: {
        fontSize: '12pt',
        width: '190px',
        marginRight: '20px',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sub_total_text: {
        width: '50%',
        textAlign: 'right'
    },
    price_text: {
        width: '50%',
        textAlign: 'left',
        paddingLeft: '10px'
    },
    row_grand_total: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    grand_total_text: {
        width: '50%',
        textAlign: 'right'
    }
});

const Totals = () => {
    return (
        <View style={styles.totals_view}>
            <View style={styles.row}>
                <Text style={styles.sub_total_text}>Subtotal: </Text>
                <Text style={styles.price_text}>$1,500</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_total_text}>Tax (15%): </Text>
                <Text style={styles.price_text}>$254.38</Text>
            </View>
            <View style={styles.row_grand_total}>
                <Text style={styles.sub_total_text}>GRAND TOTAL: </Text>
                <Text style={styles.price_text}>$1754.38</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_total_text}>Paid: </Text>
                <Text style={styles.price_text}>$1754.38</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.sub_total_text}>Balance: </Text>
                <Text style={styles.price_text}>$0.00</Text>
            </View>
        </View>
    )
}

export default Totals;