import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#636363'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    description: {
        width: '85%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


const ReportTableFooter = ({items}) => {
    return(
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{"$10,383"}</Text>
        </View>
    )
};

  export default ReportTableFooter
