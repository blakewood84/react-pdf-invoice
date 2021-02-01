import React, { Component, Fragment, useState } from 'react';
import Invoice from './components/Invoice';


import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  PDFViewer,
  PDFDownloadLink
} from "@react-pdf/renderer";

import './App.css';

function App() {

    return (
        <div>
          {/* <PDFViewer width="1000px" height="800px">
            
          </PDFViewer> */}
          <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink>
        </div>
    );
}

export default App;
