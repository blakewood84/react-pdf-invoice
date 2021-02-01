import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#FFFFFF'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#ffffff',
        backgroundColor: '#636363',
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

  const ReportTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.date}>DATE</Text>
        <Text style={styles.scale}>SCALE ID</Text>
        <Text style={styles.county}>TRIP/COUNTY</Text>
        <Text style={styles.mixed}>MIXED</Text>
        <Text style={styles.oak}>OAK</Text>
        <Text style={styles.aspen}>ASPEN</Text>
        <Text style={styles.bass}>BASS</Text>
        <Text style={styles.bonus}>BONUS</Text>
        <Text style={styles.price}>PRICE</Text>
        <Text style={styles.total}>TOTAL</Text>
    </View>
  );

  export default ReportTableHeader
