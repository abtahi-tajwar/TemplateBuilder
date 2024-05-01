import { LabelFieldMap } from "../../constants";
import { BarcodeBlock, CommonBlocks } from "../blockTemplates";
import { CommonBlocksDefinition } from "../commonBlocksDefinition";
import moment from "moment";

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
  order_barcode: BarcodeBlock("order_barcode"),
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
  excise_tax_notification: /*html*/ `
        <b>*If applicable the cannabis excise taxes are included in the total amount of this invoice.</b>
    `,
  store_name: /*html*/ `
        <h3 data-gjs-type="default"><span id="d-store_name">(Dynamic) Company Name</span></h3>
    `,
  store_email: /*html*/ `
        <p data-gjs-type="default"><span id="d-store_email">(Dynamic) Store Email</span></p>
    `,
  store_address: /*html*/ `
        <p data-gjs-type="default"><span id="d-store_address">(Dynamic) Store Address</span></p>
    `,
  store_phone: /*html*/ `
        <p data-gjs-type="default"><span id="d-store_phone">(Dynamic) Store Phone</span></p>
    `,
  store_website: /*html*/ `
        <p data-gjs-type="default"><span id="d-store_website">(Dynamic) Store Website</span></p>
    `,
  current_datetime: /*html*/`
    <p class="container-current_datetime"><span class="d-current_datetime">(dynamic) ${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
  `,
};
export const receiptBlocks = [
  ...LabelFieldMap.RECEIPT.fields.map((item) => ({
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
