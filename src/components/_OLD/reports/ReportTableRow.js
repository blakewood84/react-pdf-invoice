import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#636363'
const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      borderBottomColor: '#636363',
      backgroundColor: '#a7a7a7',
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 24,
      textAlign: 'center',
      fontStyle: 'bold',
      fontSize: 10,
      flexGrow: 1,
      color: '#ffffff',
    },
    date: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    scale: {
        width: '11%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    county: {
        width: '16%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    mixed: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    oak: {
        width: '6%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    aspen: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    bass: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    bonus: {
        width: '8%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    price: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    total: {
        width: '12%',
    },
  });


const ReportTableRow = ({items}) => {
    const rows = items.map( item =>
        <View style={styles.row} key={item.sno.toString()}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.scale}>{item.scale}</Text>
            <Text style={styles.county}>{item.county}</Text>
            <Text style={styles.mixed}>{item.mixed}</Text>
            <Text style={styles.oak}>{item.oak}</Text>
            <Text style={styles.aspen}>{item.aspen}</Text>
            <Text style={styles.bass}>{item.bass}</Text>
            <Text style={styles.bonus}>{item.bonus}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.total}>{item.total}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};

  export default ReportTableRow
