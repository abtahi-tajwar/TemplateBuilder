import React from "react";
import { rootStyles } from "../../rootStyle";
import { exitLabelActiveTemplateFields, packageLabelActiveTemplateFields, receiptLabelTemplateFields } from "../templateConstants";
import CommonValueTemplate from "../CommonValueTemplate";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";
import BleumLogo from '../../../assets/bleaum-logo.webp'
import moment from "moment";


function Receipt() {
  return (
    <>
      <div>
        <div style={styles.logoContainer} id="container-company_logo">
          <img id="d-company_logo" style={styles.logo} src={BleumLogo} />
        </div>
        <div style={{ textAlign: 'center' }} id="container-print_date">
          <p style={{ margin: 0, padding: 0 }} id="d-print_date" >{moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
        
        <div style={styles.metaInfoContainer}>
          <h3 data-gjs-type="default" id="d-store_name" style={{ margin: 0, padding: 0 }}>(Dynamic) Company Name</h3>
          <p data-gjs-type="default" id="d-store_email" style={{ margin: 0, padding: 0 }}>(Dynamic) Store Email</p>
          <p data-gjs-type="default" id="d-store_address" style={{ margin: 0, padding: 0 }}>(Dynamic) Store Address</p>
          <p data-gjs-type="default" id="d-store_phone" style={{ margin: 0, padding: 0 }}>(Dynamic) Store Phone</p>
        </div>

        <div style={styles.valuePairs}>
          <CommonValueTemplate templateFields={receiptLabelTemplateFields} />
        </div>
        <div id="d-order_contents" style={styles.orderContents}>Order Contents</div>
        <b>*If applicable the cannabis excise taxes are included in the total amount of this invoice.</b>
        <div style={styles.qrCodeContainer}>
          <Barcode value="https://bleaum.io/" />
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

export default Receipt;
