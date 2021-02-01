import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import ReportTableHeader from './ReportTableHeader'
import ReportTableRow from './ReportTableRow'
import ReportTableFooter from './ReportTableFooter'

const tableRowsCount = 40;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#000000',
    },
});

  const ReportItemsTable = ({report}) => (
    <View style={styles.tableContainer}>
        <ReportTableHeader />
        <ReportTableRow items={report.items} />
        <ReportTableFooter items={report.items} />
    </View>
  );

  export default ReportItemsTable
