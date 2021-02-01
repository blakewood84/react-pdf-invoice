import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { Table, TableHeader, TableCell, TableBody, DataTableCell } from '@david.kucsai/react-pdf-table';
import ReportTitle from './ReportTitle'
import ReportItemsTable from './ReportItemsTable'


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 15,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:25,
        lineHeight: 1.5,
        flexDirection: 'column',
    },
    logo: {
        width: 74,
        height: 66,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    container: {
        flexDirection: 'row',
        borderBottomColor: '#636363',
        backgroundColor: '#636363',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        fontSize: 10,
        flexGrow: 1,
        color: '#ffffff',
    },
    countycontainer: {
        flexDirection: 'row',
        borderBottomColor: '#636363',
        backgroundColor: '#636363',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        fontSize: 7,
        flexGrow: 1,
        color: '#ffffff',
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDate: {
            fontSize: 12,
            fontStyle: 'bold',
    },
    row: {
      flexDirection: 'row',
      borderBottomColor: '#636363',
      backgroundColor: '#a7a7a7',
      borderBottomWidth: 1,
      alignItems: 'center',
      height: 24,
      fontStyle: 'bold',
      fontSize: 10,
      flexGrow: 1,
      color: '#ffffff',
    },
  });

  const Report = ({report}) => (
            <Document>
                <Page size="A4" style={styles.page}>
                    <ReportTitle title={report.title} subtitle={report.subtitle}/>
                    <View style={styles.invoiceNoContainer}>
                        <Text style={styles.invoiceDate}>{report.daterange}</Text>
                    </View >
                    <Table
                    data={[
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                        {date: "8-11-2020", scale: "8555", county: "8555/A62352", mixed: "", oak: "9.702", aspen: "", bass: "", bonus: "$2.00", price: "$105.00", total: "$1,018.71"},
                    ]}

                    >
                        <TableHeader>
                            <TableCell style={styles.container}>DATE</TableCell>
                            <TableCell style={styles.container}>SCALE ID</TableCell>
                            <TableCell style={styles.countycontainer}>TRIP/COUNTY</TableCell>
                            <TableCell style={styles.container}>MIXED</TableCell>
                            <TableCell style={styles.container}>OAK</TableCell>
                            <TableCell style={styles.container}>ASPEN</TableCell>
                            <TableCell style={styles.container}>BASS</TableCell>
                            <TableCell style={styles.container}>BONUS</TableCell>
                            <TableCell style={styles.container}>PRICE</TableCell>
                            <TableCell style={styles.container}>TOTAL</TableCell>
                        </TableHeader>
                        <TableBody>
                            <DataTableCell style={styles.row} getContent={(r) => r.date}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.scale}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.county}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.mixed}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.oak}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.aspen}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.bass}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.bonus}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.price}/>
                            <DataTableCell style={styles.row} getContent={(r) => r.total}/>
                        </TableBody>
                    </Table>
                    
                    <ReportItemsTable report={report} />
                </Page>
            </Document>
        );

  export default Report
