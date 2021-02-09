import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Questions from './Questions';
import ThankYou from './ThankYou';
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

const FooterWithThankYou = (props) => {
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
                <BottomBar page_number={props.page_number} />
            </View>
        </View>
    )
}

export default FooterWithThankYou;