import React from "react";
import { rootStyles } from "../rootStyle";
import { exitLabelActiveTemplateFields } from "./templateConstants";

function ExitLabel() {
  return (
    <>
      <div style={styles.header}>
        <b>Exit Label</b>
      </div>
      <div>
        {exitLabelActiveTemplateFields.map((field) => (
          <div style={styles.row} key={field.id}>
            <span>{field.label}: {" "}</span>
            <span
              style={rootStyles.dynamicValue}
              className="dynamic-value"
              data-gjs-type="default"
              id={`d-${field.id}`}
            >
              values to be populated dynamically
            </span>
          </div>
        ))}

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
