import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Questions from './Questions';
import BottomBar from './BottomBar';

const styles = StyleSheet.create({
    table_view: {
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

const Footer = (props) => {
    return (
        <View style={styles.table_view}>
            <View style={styles.flex_row}>
                <View>
                    <Questions />
                </View>
            </View>
            <View>
                <BottomBar />
            </View>
        </View>
    )
}

export default Footer;