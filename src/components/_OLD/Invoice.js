import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';

import Header from '../pdf_components/invoice_components/header-top/Header';
import Billing from '../pdf_components/invoice_components/billing/Billing';
import Table from '../pdf_components/invoice_components/table/Table';
import Memo from '../pdf_components/invoice_components/memo-totals/Memo';
import Footer from '../pdf_components/invoice_components/footer/Footer';
import Totals from '../pdf_components/invoice_components/memo-totals/Totals';
import AboveFooter from '../pdf_components/invoice_components/memo-totals/AboveFooter';


const styles = StyleSheet.create({
    page: {
        
    },
    overlay: {
        backgroundColor: 'white',
        height: '100%',
        padding: '20px',
        border: '1pt solid black'
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