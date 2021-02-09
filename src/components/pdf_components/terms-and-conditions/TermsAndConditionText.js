import React from 'react';
import { StyleSheet, Text, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    main_view: {
        fontSize: '8pt',
        border: '1pt solid black',
        padding: '2px'
    },
    paragraph: {
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '2px'
    },
    list_item: {
        marginTop: '2px',
        marginBottom: '2px',
        marginLeft: '5px'
    }

});

const TermsAndConditionText = (props) => {
    return (
        <View style={styles.main_view}>
            <View>
                <Text style={styles.paragraph}>
                    CONDITIONS AND EXCLUSIONS: Hukill’s Inc guarantees the services performed as set forth in this invoice to be free from defect in materials or workmanship for the applicable time period of one year. If within the guarantee period a drain stoppage or other defect in the repair of plumbing fixtures of plumbing parts installed by Hukill’s Inc occurs, Hukill’s Inc and subcontractor will clear the drain stoppage or repair or replace (at Hukill’s Inc option) the plumbing fixture or plumbing part previously installed at no cost to customer, subject to the following exclusions and limitations. Except for any quick connect/ press fit, stab or shark bite style fitting that comes on manufacturer supplied fixtures.
                </Text>
                <Text style={styles.list_item}>
                    1. This Guarantee applies only to the specific sewer lines cleaned, or plumbing fixtures or plumbing parts supplied and installed by Hukill’s Inc
                </Text>
                <Text style={styles.list_item}>
                    2. Hukill’s Inc must receive notice of the defect within the Guarantee period.
                </Text>
                <Text style={styles.list_item}>
                    3. This Guarantee does not apply to: a) Multi Unit Dwellings sewer and drain lines, plumbing fixtures or plumbing parts including quick connect/press fit, stab or shark bite style fittings, b) Materials furnished or work performed by other than Hukill’s Inc., c) Drains, sewer lines, plumbing fixtures and plumbing parts that have been misused, abused, damaged, or modified by others, d) Drain or sewer line stoppages caused by foreign objects, including but not limited to sanitary articles, paper towels, toys, grease, food from disposals, etc., or e) Drain lines which are settled, broken, offset, deteriorated, damaged or improperly or illegally installed.
                </Text>
                <Text style={styles.list_item}>
                    4. The Guarantee Period commences on the date of original service and shall not be extended by subsequent services or repairs made pursuant to the terms of the Guarantee. The Guarantee hereunder extends to the customer invoiced for the services and is not transferable.
                </Text>
                <Text style={styles.list_item}>
                    5. Hukill’s Inc, liability hereunder shall be limited to re-cleaning of drain or sewer stoppage (max two repeat visits) For the repair or replacement of defective plumbing fixtures or plumbing parts. Hukill’s Inc shall not be liable for (1) Incidental or consequential damages; (2) Water or other damage from a failed fitting other than improper installation; (3) Loss of use; or (4) Loss of anticipated benefits or profits, any of which results from the furnishing of services or products, or from the breach of the Guarantee, even if Hukill’s Inc knew of the likelihood of such damages.
                </Text>
                <Text style={styles.list_item}>
                    6. Any implied warranty of merchantability, or fitness for a particular purpose of use, shall be limited to the duration of the foregoing written guarantee. The foregoing written guarantee is customer’s sole and exclusively remedy and in lieu of all other guarantees and warranties, express or implied, written, or oral. This guarantee may only be modified in writing, signed by an officer of Hukill’s Inc.
                </Text>
                <Text style={styles.list_item}>
                    7. This guarantee does not apply in the event customer breaches any of The Terms and Conditions of service, including but not limited to timely payment of all charges.
                </Text>
                <Text style={styles.list_item}>
                    8. Collection, Owner agrees to pay all collection fees and charges including but not limited to all legal and attorney fees that result should Owner default in payment of this contract. Overdue accounts are subject to a $20 per month late fee or interest charged at the rate of 18% per annum whichever is greater.
                </Text>
                <Text style={styles.list_item}>
                    9. Legal Fees, in the event litigation arises out of the contract, prevailing party(ies) are entitled to all legal, arbitration, and attorney fees, the court shall not be bound to award fees based on any set, court fee schedule but shall if it so chooses, award the true amount of all costs, expenses and attorney fees paid or incurred.
                </Text>
                <Text style={styles.paragraph}>
                    “State law requires anyone who contracts to do construction work to be licensed by the Contractors State License Board in the license category in which the contractor is going to be working – if the total price of the job is $300 or more (including labor and materials).
                </Text>
                <Text style={styles.paragraph}>
                Licensed contractors are regulated by laws designed to protect the public. If you contract with someone who does not have a license the Contractors State License Board may be unable to assist you with a complaint. Your only remedy against an unlicensed contractor may be in civil court, and you may be liable for damages arising out of any injuries to the contractor or his or her employees. You may contact the Contractors State License Board to find out if this contractor has a valid license. The board has complete information on the history of licensed contractors including any possible suspensions, revocation, judgments, and citations. The board has offices throughout Oregon. Please check the government pages of the white pages for the nearest CCB or call 503-378-4621.”
                </Text>
                
            </View>
        </View>
        
    )
}

export default TermsAndConditionText;


