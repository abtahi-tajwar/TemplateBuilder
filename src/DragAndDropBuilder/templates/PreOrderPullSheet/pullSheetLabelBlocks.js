import QRCode from "react-qr-code";
import { LabelFieldMap } from "../../constants";
import { rootStyles } from "../../rootStyle";
import { BarcodeBlock, CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";

const CustomSections = {
  order_contents: /*html*/ `
    <style>
        .order-content-block-container {
            height: 50px;
            width: 100%;
            background-color: gray;
            color: white;
            border: 2px dashed black;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    </style>
    <div id="d-order_contents" class="order-content-block-container">Order Contents</div>
`,
  order_barcode: BarcodeBlock(),
  company_logo: /*html*/ `
        <style>
            .company_logo_block_container {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .company_logo_block_image {
                width: 50%;
            }
        </style>
        <div class="company_logo_block_container" id="container-company_logo">
            <img id="d-company_logo" src="/bleaum-logo.webp" class="company_logo_block_image" />
        </div>
    `,
  order_time: /*html*/ `
        <p data-gjs-type="default" id="d-order_time">(Dynamic) Order Time </p>
    `,
};
export const pullSheetBlocks = [
  ...LabelFieldMap.PRE_ORDER_FULFILLMENT_PULL_SHEET.fields.map((item) => ({
    id: item.id,
    label: item.label,
    attributes: { class: "gjs-block-section" },
    content:
      !item.custom || !CustomSections[item.id]
        ? CommonBlocks(item)
        : CustomSections[item.id],
    category: "Label Components",
  })),
  ...CommonBlocksDefinition,
];
