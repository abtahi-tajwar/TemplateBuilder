import React from "react";
import CommonValueTemplate from "../CommonValueTemplate";
import { pullSheetLabelTemplateFields } from "../templateConstants";
import moment from "moment";
import Barcode from "react-barcode";

function PreOrderPullSheet() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Pull Sheet</h1>
      <p id="d-order_time" style={{ textAlign: "center" }}>
        {moment(new Date()).format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <div style={styles.valuePairs}>
        <CommonValueTemplate templateFields={pullSheetLabelTemplateFields} />
      </div>
      <div id="d-order_contents" style={styles.orderContents}>
        Order Contents
      </div>

      <div style={styles.qrCodeContainer} id="container-order_barcode">
          <Barcode id="d-order_barcode" value="https://bleaum.io/" />
        </div>
    </>
  );
}

const styles = {
  orderContents: {
    height: 50,
    width: "100%",
    backgroundColor: "gray",
    color: "white",
    border: "2px dashed black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  valuePairs: {
    margin: "15px 0px",
    padding: 10,
    border: "2px dashed gray",
    borderRadius: 5,
  },
  qrCodeContainer: {
    width: '80%', 
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default PreOrderPullSheet;
