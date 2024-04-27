import QRCode from "react-qr-code";
import { LabelFieldMap } from "../../constants";
import { rootStyles } from "../../rootStyle";
import { BarcodeBlock, CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";

const CustomSections = {
  test_results_qr: QRBlock(),
  package_barcode: BarcodeBlock()
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

