import { LabelFieldMap } from "../../constants";
import { rootStyles } from "../../rootStyle";
import { CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";

const CustomSections = {
  test_results_qr: QRBlock()
};


export const exitLabelBlocks = [
  ...LabelFieldMap.EXIT_LABEL.fields.map((item) => ({
    id: item.id,
    label: item.label,
    attributes: { class: "gjs-block-section" },
    content: (!item.custom || !CustomSections[item.id]) ? CommonBlocks(item) : CustomSections[item.id],
    category: "Label Components"
  })),
  ...CommonBlocksDefinition
];
