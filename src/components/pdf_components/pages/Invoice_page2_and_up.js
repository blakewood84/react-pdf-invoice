import React from 'react';
import { Page, StyleSheet, View, Text } from '@react-pdf/renderer';

import Header from '../invoice_components/header-top/Header';
import Table from '../invoice_components/table/Table';
import FooterWithThankYou from '../invoice_components/footer/FooterWithThankYou';


const styles = StyleSheet.create({
    page: {
        
    },
    overlay: {
        backgroundColor: 'white',
        height: '100%',
        padding: '20px'
    },
    header_row: {
        position: 'relative'
    },
    table_view: {
        height: '540px',
        marginTop: '40px'
    },
    continue: { fontSize: '12pt', width: '100%', textAlign:'right'},
    table_row: {
    },
    totals_memo_row: {
        width: '100%',
    },
    spacer: {
        height: '2%',
        padding: '10'
    },
    footer_row: {
        width: '100%',
        bottom: '0px',
        margin: '20px',
        position: 'absolute',

    }

});

const Invoice = (props) => {
    return (
        <Page size="A4" style={styles.page}>
            <View style={styles.overlay}>
                <View style={styles.header_row} fixed>
                    <Header 
                        // invoice_id={props.invoice_id} 
                        // due_date={props.due_date} 
                        // date_created={props.date_created} 
                    />
                </View>
                <View style={styles.table_view} fixed>
                    <View style={styles.table_row} break>
                        <Table
                            // data={props.data}
                            invoice_items={props.invoice_items} 
                            />
                            <Text style={styles.continue}>Continue next page...</Text>
                    </View>
                </View>
                <View style={styles.footer_row} fixed>
                    <FooterWithThankYou page_number={props.page_number} />
                </View>
            </View>
        </Page>
   )
}

export default Invoice;