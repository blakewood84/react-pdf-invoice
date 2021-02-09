import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import BillingLeft from './BillingLeft';
import BillingRight from './BillingRight';

const styles = StyleSheet.create({
    view: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:'20px',
        marginBottom: '20px'
    },
    right: {
        marginRight: '60px'
    }
});

const Billing = (props) => {
    return (
        <View style={styles.view}>
            <View>
                <BillingLeft
                    // bill_to={props.bill_to} 
                 />
            </View>
            <View style={styles.right}>
                <BillingRight
                    // service_to_info={props.service_to_info}
                 />
            </View>
        </View>
    )
}

export default Billing;