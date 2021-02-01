import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import Totals from './Totals';
import Memo from './Memo';

const styles = StyleSheet.create({
    main_view: {
        marginTop: '20px',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const AboveHeader = () => {
    return (
        <View style={styles.main_view}>
            <View>
                <Memo />
            </View>
            <View>
                <Totals /> 
            </View>           
        </View>
    )
}

export default AboveHeader;