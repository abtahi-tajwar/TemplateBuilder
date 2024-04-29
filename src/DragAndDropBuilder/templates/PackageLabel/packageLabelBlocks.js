import { LabelFieldMap } from "../../constants";
import { BarcodeBlock, CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";

const CustomSections = {
  test_results_qr: QRBlock('test_results_qr'),
  package_barcode: BarcodeBlock('package_barcode')
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

