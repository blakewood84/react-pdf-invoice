import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import Questions from './Questions';
import ThankYou from './ThankYou';
import BottomBar from './BottomBar';

const styles = StyleSheet.create({
    table_view: {
        marginTop: '20px',
        width:'100%'

    },
    flex_row: {
        diplay: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    bottom_bar_row: {
        
    }
});

const Footer = () => {
    return (
        <View style={styles.table_view}>
            <View style={styles.flex_row}>
                <View>
                    <Questions />
                </View>
                <View>
                    <ThankYou />
                </View>
            </View>
            <View>
                <BottomBar />
            </View>
        </View>
    )
}

export default Footer;