import React from 'react';
import { Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../invoice_components/header-top/Header';
import TermsAndConditionText from '../terms-and-conditions/TermsAndConditionText';
import FooterWithThankYou from '../invoice_components/footer/FooterWithThankYou';

const styles = StyleSheet.create({
    page: {},
    overlay: {
        backgroundColor: 'white',
        height: '100%',
        padding: '20px',
    },
    title_text: {
        fontSize: '12pt',
        border: '1pt solid black',
        backgroundColor: '#090909',
        color: '#fff',
        padding: '5px'
    },
    spacer: {
        height: "50px",
    },
    spacer_2: {
        height: '17%'
    },
    footer: {
        width: '100%',
        bottom: '-20px'
    }

});

const TermsAndConditions = (props) => {
    return (
            <Page size="A4" style={styles.page}>
                <View style={styles.overlay}>
                    <View>
                        <Header
                            invoice_id={props.invoice_id} 
                            due_date={props.due_date} 
                            date_created={props.date_created}
                         />
                    </View>
                    <View style={styles.spacer}></View>
                    <View>
                        <Text style={styles.title_text}>Terms and Conditions</Text>
                    </View>
                    <View>
                        <TermsAndConditionText />
                    </View>
                    <View style={styles.spacer_2}></View>
                    <View style={styles.footer}>
                        <FooterWithThankYou page_number={props.page_number} />
                    </View>
                </View>
            </Page>
        
    )
}

export default TermsAndConditions;