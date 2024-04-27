import React from "react";
import { rootStyles } from "../../rootStyle";
import { exitLabelActiveTemplateFields, packageLabelActiveTemplateFields } from "../templateConstants";
import CommonValueTemplate from "../CommonValueTemplate";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";


function PackageLabel() {
  return (
    <>
      <div>
        <CommonValueTemplate templateFields={packageLabelActiveTemplateFields} />
        <div style={styles.qrCodeContainer}>
          <Barcode value="https://bleaum.io/" />
        </div>
      </div>
    </>
  );
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 20
  },
  row: {
    marginTop: 0,
    marginBottom: 0,
  },
  dynamicValue: {
    fontStyle: "italic",
    backgroundColor: "#c2c2c2",
  },
  qrCodeContainer: {
    width: '80%', 
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default PackageLabel;
