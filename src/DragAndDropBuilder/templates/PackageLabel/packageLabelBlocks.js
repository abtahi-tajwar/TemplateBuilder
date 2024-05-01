import { LabelFieldMap } from "../../constants";
import { BarcodeBlock, CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";
import moment from "moment";

const CustomSections = {
  test_results_qr: QRBlock('test_results_qr'),
  package_barcode: BarcodeBlock('package_barcode'),
  current_datetime: /*html*/`
    <p class="container-current_datetime"><span class="d-current_datetime">(dynamic) current ${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
  `
};
export const packageLabelBlocks = [
  ...LabelFieldMap.PACKAGE_LABEL.fields.map((item) => ({
    id: item.id,
    label: item.label,
    attributes: { class: "gjs-block-section" },
    content: (!item.custom || !CustomSections[item.id]) ? CommonBlocks(item) : CustomSections[item.id],
    category: "Label Components"
  })),
  ...CommonBlocksDefinition
];

