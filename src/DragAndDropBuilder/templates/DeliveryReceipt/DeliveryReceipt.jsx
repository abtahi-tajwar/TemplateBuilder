import React from "react";
import { deliveryReceiptLabelTemplateFields } from "../templateConstants";
import CommonValueTemplate from "../CommonValueTemplate";
import Barcode from "react-barcode";
import BleumLogo from '../../../assets/bleaum-logo.webp'
import moment from "moment";


function DeliveryReceipt() {
  return (
    <>
      <div>
        <div style={styles.logoContainer} id="container-company_logo">
          <img id="d-company_logo" style={styles.logo} src={BleumLogo} alt="conpany-logo" />
        </div>
        <div style={{ textAlign: 'center' }} id="container-print_date">
          <span style={{ margin: 0, padding: 0 }} id="d-print_date" >{moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</span>
        </div>
        <div style={styles.valuePairs}>
          <CommonValueTemplate templateFields={deliveryReceiptLabelTemplateFields} />
        </div>
        <div id="d-order_contents" style={styles.orderContents}>Order Contents</div>
        <div className="container-excise_tax_notification">
          <b><span id="d-excise_tax_notification">*If applicable the cannabis excise taxes are included in the total amount of this invoice.</span></b>
        </div>
        <div style={styles.qrCodeContainer} id="container-order_barcode">
          <Barcode id="d-order_barcode" value="https://bleaum.io/" />
        </div>
      </div>
    </>
  );
}

const styles = {
  logoContainer: {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  logo: {
    width: '50%',
  },
  valuePairs: {
    margin: '15px 0px',
    padding: 10,
    border: '2px dashed gray',
    borderRadius: 5
  },
  
  metaInfoContainer: {
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    alignItems: 'center', 
    borderTop: '1px solid gray',
    marginTop: 15,
    padding: '10px 0px'

  },
  orderContents: {
    height: 50,
    width: '100%',
    backgroundColor: 'gray',
    color: 'white',
    border: '2px dashed black',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20
  },
  metaDivider: {
    borderBottom: '1px solid gray', 
    width: '100%'
  },
  qrCodeContainer: {
    width: '80%', 
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default DeliveryReceipt;
