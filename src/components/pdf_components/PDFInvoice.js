import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';

import TermsAndConditions from './pages/TermsAndConditions';
import InvoicePage1 from './pages/Invoice_pg1';
import InvoicePage2Plus from './pages/Invoice_page2_and_up';
import InvoiceLastPage from './pages/Invoice_last_page';
import InvoiceSinglePage from './pages/InvoiceSinglePage';

// import firebase from 'firebase';
// const firestore = firebase.firestore();


// var unsubscribe = firestore.collection('hukills' + '/invoices/' + 'hukills').doc('45764').onSnapshot((doc) => {

//     var invoice = doc.data();

//     console.log("INVOICE: ", invoice);
// });


const data = [
    {
        // 6
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 6
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 1
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 6
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 6
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n \n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 6
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n \n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        count: '01',
        customPricePerUnit: 211.22,
    },
    {
        // 1
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n',
        count: '01',
        customPricePerUnit: 211.22,
    },
    

]

const removeNewLinesFromString = (description) => {
    const REGEX = /[\n]+/gm;
    return description.replace(REGEX, '');
}

const filterDataForNewLinesReturnNewArray = (items_data) => {
    return items_data.map(item => {
        item.description = removeNewLinesFromString(item.description);
        return item;
    });
}


const createPdfPages = (items_data) => {
    let filtered_data_array = filterDataForNewLinesReturnNewArray(items_data);
    
    let count = 0;
    let total_rows = 0;
    let page_count = 0;
    let page = [];
    let all_pages = [];

    filtered_data_array.map((item, index) => {
        
        let description_row_count = (item.description.length / 80) < 1 ? 1 : (item.description.length / 80);

        // once I hit 32.3 and there is more data, then the max_count switches to 39.5
        let max_row_count_allowed = (total_rows <= 32.3 && index !== filtered_data_array.length - 1) ? 32.3 : 39

        // console.log("=========================");
        // console.log("MAX ROW COUNT: ", max_row_count_allowed);
        // console.log("=========================");
        // console.log("ITEM # ", index + 1);
        // console.log("PAGE COUNT: ", page_count);
        // console.log("ROW COUNT FOR THIS ITEM: ", description_row_count);
        // console.log("COUNT WAS: ", count);
        // console.log("COUNT IS NOW: ", count + description_row_count);

        if (index === filtered_data_array.length - 1) { // last item in array
            // console.log("LAST ITEM IN ARRAY");

            if (description_row_count + count > max_row_count_allowed) { // 32.3 for Single Page
                if (page.length === 0) { 
                    page.push(item);
                    all_pages.push(page);
                    total_rows += description_row_count;
                    page_count++;
                } 
                else if(page.length > 0) { // more than 1 item in array
                    all_pages.push(page);
                    page = [];
                    page.push(item);
                    all_pages.push(page);
                    total_rows += description_row_count;
                    page_count++;
                }
            }
            else if (description_row_count + count < max_row_count_allowed) {
                page.push(item);
                all_pages.push(page);
                total_rows += description_row_count;
                page_count++;
            }
        }
        if (description_row_count + count > max_row_count_allowed && index !== filtered_data_array.length - 1){
            all_pages.push(page);
            page_count++;
            page = [];
            page.push(item);
            count = description_row_count;
            total_rows += description_row_count;

        }
        else if (description_row_count + count <= max_row_count_allowed && index !== filtered_data_array.length - 1) {
            total_rows += description_row_count;
            count += description_row_count;
            page.push(item);
        }

        // if it's the last set of data in array:
            // 1. check if its rows will make the count go over 30
            // a) if it does, create a new page
            // b) if it doesn't, push the item into the set, push the set into the data_array
        
        // if it's not the last set of data in array:
            // 1. check if the items rows will make the count go over 30
            // a) if it does, create a new page. create a new count with that items rows
            // b) if it doesn't: 
                    // 1) count the row, add it to the count. push the row into the set.
    });

    return all_pages;
}



const PDFInvoice = (props) => {

    const PDFPages = createPdfPages(data);

    // If there is only 1 Page: 

    if (PDFPages.length === 1) {
        let page_number = 1;
        return (
            <Document>
                <InvoiceSinglePage page_number={page_number} invoice_items={PDFPages[0]} />
                <TermsAndConditions page_number={page_number + 1} />
            </Document>
        ) 
    }
    // More than 1 Page
    if (PDFPages.length > 1) {
        return (
            <Document>
                {
                    PDFPages.map((page, index) => {
                        let page_number = index + 1;
                        console.log("PAGE NUMBER");
                        if (index === 0) {
                            return <InvoicePage1 invoice_items={page} page_number={page_number} /> // First Page
                        }
                        else if (index > 0 && index < PDFPages.length - 1) {
                            return <InvoicePage2Plus invoice_items={page} page_number={page_number} /> // Pages 2+
                        }
                        else if (index === PDFPages.length - 1) {
                            return <InvoiceLastPage invoice_items={page} page_number={page_number} /> // Last Page
                        }
                    })
                }
                <TermsAndConditions page_number={PDFPages.length + 1} />
            </Document>
        )
    }
}

export default PDFInvoice;