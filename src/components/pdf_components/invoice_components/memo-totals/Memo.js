import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    view: {
        width: '220px',
        marginLeft: '5px'
    },
    title: {
        fontSize: '14pt'
    },
    sub_text: {
        fontSize: '10pt'
    }

});

const Memo = (props) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>*Memo</Text>
            {/* <Text style={styles.sub_text}>{props.memo}</Text> */}
            <Text style={styles.sub_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget duis at tellus at urna condimentum mattis pellentesque id.</Text>
        </View>
    )
}

export default Memo;