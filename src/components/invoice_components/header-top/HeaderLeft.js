import React, { Fragment } from 'react';
import {Text, Image, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    image: {
        width: '280px',
        height: 'auto',
    },
    align_text: {
        fontSize:'10pt',
        marginLeft: '100px',
        marginTop: '10px'
    }
});

const HeaderLeft = () => {
    return(
        <View>
            <Image style={styles.image} src={require('../../../assets/hukills-logo.png')}></Image>
            <View style={styles.align_text}>
                <Text>CCB #49255</Text>
                <Text>Medford, OR 97504</Text>
            </View>
        </View>
    )
}

export default HeaderLeft;