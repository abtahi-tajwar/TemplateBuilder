import React from "react";
import { rootStyles } from "../rootStyle";

function CommonValueTemplate({ templateFields }) {
  return templateFields.map((field) => (
    <div style={styles.row} key={field.id} id={`container-${field.id}`}>
      <span style={styles.label}>{field.label}: </span>
      <span
        // style={rootStyles.dynamicValue}
        style={{
          wordBreak: "break-all",
          backgroundColor: "#c2c2c2",
          textAlign: "right",
          fontStyle: "italic",
        }}
        data-gjs-type="default"
        id={`d-${field.id}`}
      >
        dynamic {field.label} value
      </span>
    </div>
  ));
}

const styles = {
  header: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 20,
  },
  row: {
    marginTop: 0,
    marginBottom: 0,
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "0.8rem",
    borderBottom: "0.1px solid gray",
  },
  label: {
    maxWidth: 350,
    width: 200,
  },
  dynamicValue: {
    flex: 1,
    textAlign: "right",
    fontStyle: "italic",
    backgroundColor: "#c2c2c2",
    overflow: "hidden",
    overflowWrap: "break-word",
  },
};
export default CommonValueTemplate;
