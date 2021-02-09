import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
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

const Header = (props) => {
    return (
        <View style={styles.align}>
            <HeaderLeft />
            <HeaderRight 
                invoice_id={props.invoice_id} 
                due_date={props.due_date} 
                date_created={props.date_created}
             />
        </View>
    )
}

export default Header;