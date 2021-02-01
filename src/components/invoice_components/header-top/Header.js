import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const styles = StyleSheet.create({
    align: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

const Header = () => {
    return (
        <View style={styles.align}>
            <HeaderLeft />
            <HeaderRight />
        </View>
    )
}

export default Header;