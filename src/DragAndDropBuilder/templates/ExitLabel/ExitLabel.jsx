import React from "react";
import { rootStyles } from "../../rootStyle";
import { exitLabelActiveTemplateFields } from "../templateConstants";
import CommonValueTemplate from "../CommonValueTemplate";

function ExitLabel() {
  return (
    <>
      <div style={styles.header}>
        <b>Exit Label</b>
      </div>
      <div>
        <CommonValueTemplate templateFields={exitLabelActiveTemplateFields} />

        <p style={styles.row}>
          <b>
            This product has been tested for contaminants. Keep out of reach of
            children. Women should not use marijuana or medical marijuana
            products during pregnancy because of the risk of birth defects.
          </b>
        </p>
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
};

export default ExitLabel;
