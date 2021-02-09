import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import Totals from './Totals';
import Memo from './Memo';

const styles = StyleSheet.create({
    main_view: {
        marginTop: '20px',
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

const AboveHeader = (props) => {
    return (
        <View style={styles.main_view}>
            <View>
                <Memo
                    // memo={props.memo}
                 />
            </View>
            <View>
                <Totals
                    // sub_total={props.sub_total}
                    // tax_total={props.tax_total}
                    // grand_total={props.grand_total}
                    // paid={props.paid}
                    // balance={props.balance}
                 /> 
            </View>           
        </View>
    )
}

export default AboveHeader;