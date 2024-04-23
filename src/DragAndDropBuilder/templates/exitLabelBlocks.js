import { LabelFieldMap } from "../constants";
import { rootStyles } from "../rootStyle";
const styles = {
  row: {
    marginTop: 0,
    marginBottom: 0,
  },
  dynamicValue: {
    fontStyle: "italic",
    backgroundColor: "#c2c2c2",
  },
};
export const exitLabelBlocks = [
  ...LabelFieldMap.EXIT_LABEL.fields.map((item) => ({
    id: item.id,
    label: item.label,
    attributes: { class: "gjs-block-section" },
    content: (
      /*html*/`
        <p style="margin-top: 0; margin-bottom: 0">
        ${item.label} : 
        <span
            style="font-style: italic; background-color: #c2c2c2;"
            className="dynamic-value"
            id=${`d-${item.id}`}
        >
            values to be populated dynamically
            </span>
        </p>
      `
    ),
  })),
  {
    id: "section", // id is mandatory
    label: "<b>Section</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
  },
  {
    id: "image",
    label: "Image",
    // Select the component once it's dropped
    select: true,
    // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
    content: { type: "image" },
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
    activate: true,
  },
];
