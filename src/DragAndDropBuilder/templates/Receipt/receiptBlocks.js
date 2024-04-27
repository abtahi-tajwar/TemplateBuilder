import QRCode from "react-qr-code";
import { LabelFieldMap } from "../../constants";
import { rootStyles } from "../../rootStyle";
import { BarcodeBlock, CommonBlocks, QRBlock } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";

const CustomSections = {
    order_contents: QRBlock(),
    order_barcode: BarcodeBlock(),
    company_logo: /*html*/`
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
    excise_tax_notification: /*html*/`
        <b>*If applicable the cannabis excise taxes are included in the total amount of this invoice.</b>
    `,
    store_name: /*html*/`
        <h3 data-gjs-type="default" id="d-store_name">(Dynamic) Store Name </h3>
    `,
    store_website: /*html*/`
        <i data-gjs-type="default" id="d-store_email">(Dynamic) Store Email </i>
    `,
    store_address: /*html*/`
        <p data-gjs-type="default" id="d-store_email">(Dynamic) Store Email </p>
    `,
    store_phone: /*html*/`
        <p data-gjs-type="default" id="d-store_phone">(Dynamic) Store Phone </p>
    `
};
export const receiptBlocks = [
  ...LabelFieldMap.RECEIPT.fields.map((item) => ({
    id: item.id,
    label: item.label,
    attributes: { class: "gjs-block-section" },
    content: (!item.custom || !CustomSections[item.id]) ? CommonBlocks(item) : CustomSections[item.id],
    category: "Label Components"
  })),
  ...CommonBlocksDefinition
];

