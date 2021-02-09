import firebase from './firebase'; // THIS MUST BE FIRST
import React from 'react';
import { PDFViewer } from "@react-pdf/renderer";
import PDFInvoice from './components/pdf_components/PDFInvoice';

import './App.css';

function App() {

    return (
        <div>
          <PDFViewer width="1000px" height="800px">
              <PDFInvoice />
          </PDFViewer>  
          {/* <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
          </PDFDownloadLink> */}
        </div>
    );
}

export default App;
