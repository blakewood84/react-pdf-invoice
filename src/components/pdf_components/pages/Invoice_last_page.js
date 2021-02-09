import React from 'react';
import { Page, StyleSheet, View } from '@react-pdf/renderer';

import Header from '../invoice_components/header-top/Header';
import Table from '../invoice_components/table/Table';
import FooterWithThankYou from '../invoice_components/footer/FooterWithThankYou';
import AboveFooter from '../invoice_components/memo-totals/AboveFooter';


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
        height: '560px',
        marginTop: '20px'
    },
    table_row: {
    },
    totals_memo_row: {
        width: '100%',
        top: '-10px'
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
                        
                    </View>
                    <View wrap style={styles.totals_memo_row}>
                        <AboveFooter
                            // sub_total={props.sub_total}
                            // tax_total={props.tax_total}
                            // grand_total={props.grand_total}
                            // paid={props.paid}
                            // balance={props.balance}
                            // memo={props.memo}
                        />
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