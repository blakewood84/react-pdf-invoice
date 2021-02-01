import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    titleContainer:{
        flexDirection: 'row',
        marginTop: 24,
    },
    subtitleContainer:{
        flexDirection: 'row',
        marginTop: 0,
    },
    reportTitle:{
        color: '#000',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Times-Roman',
    },
    reportSubTitle:{
        color: '#000',
        fontSize: 12,
        textAlign: 'center',
        fontFamily: 'Times-Roman',
    }
  });


  const ReportTitle = ({title, subtitle}) => (
    <Fragment>
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    </View>
    <View style={styles.subtitleContainer}>
        <Text style={styles.reportSubTitle}>{subtitle}</Text>
    </View>
    </Fragment>
  );

  export default ReportTitle
