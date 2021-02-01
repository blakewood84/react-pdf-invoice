import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    table_view: {
        width: '250px',
        fontSize: '12pt',
        marginTop: '15px'
    }
});

const Questions = () => {
    return (
        <View style={styles.table_view}>
            <View>
                <Text>Questions?</Text>
                <Text>Email us at accounts@hukills.com</Text>
                <Text>or call us at 1-541-323-3000</Text>
            </View>
        </View>
    )
}

export default Questions;