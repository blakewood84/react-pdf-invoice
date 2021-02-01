import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import Header from './invoice_components/header-top/Header';
import Billing from './invoice_components/billing/Billing';
import Table from './invoice_components/table/Table';
import Memo from './invoice_components/memo-totals/Memo';
import Footer from './invoice_components/footer/Footer';
import Totals from './invoice_components/memo-totals/Totals';
import AboveFooter from './invoice_components/memo-totals/AboveFooter';


const styles = StyleSheet.create({
    page: {
        backgroundColor: '#cd242b',
        paddingTop: '20px',
        paddingRight: '15px'
    },
    overlay: {
        backgroundColor: 'white',
        height: '100%',
        padding: '20px'
    },
    table_view: {
        height: '60%',
    },
    table_row: {

    },
    totals_memo_row: {
        width: '100%',
    },
    spacer: {
        height: '2%'
    }

});

const Invoice = () => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.overlay}>
                    <View>
                        <Header />
                    </View>
                    <View>
                        <Billing />
                    </View>
                    <View style={styles.table_view}>
                        <View style={styles.table_row}>
                            <Table />
                        </View>
                        <View style={styles.totals_memo_row}>
                            <AboveFooter />
                        </View>
                    </View>
                    <View>
                        <Footer />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

export default Invoice;