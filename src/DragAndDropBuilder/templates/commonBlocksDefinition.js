export const CommonBlocksDefinition = [
  {
    id: "container", // id is mandatory
    label: "<b>Container</b>", // You can use HTML/SVG inside labels
    attributes: { class: "gjs-block-section" },
    content: { type: "div", content: `<div><p>Container</p></div>` },
    active: true,
    category: "common"
  },
  {
    id: "double-column",
    label: "<b>Double Column</b>",
    attributes: { class: "gjs-block-section" },
    category: "common",
    content: /*html*/`
        <style>
            .double_column_block_section {
                display: flex;
                gap: 10px;
            }
            .double_column_right_block {
                flex: 1;
            }
            .double_column_left_block {
                flex: 1;
            }
        </style>
        <div class="double_column_block_section">
            <div class="double_column_left_block">
                <p>Left Column</p>
            </div>
            <div class="double_column_right_block">
                <p>Right Column</p>
            </div>
        </div>
    `,
    active: true
  },
  {
    id: "image",
    label: "<b>Image</b>",
    // Select the component once it's dropped
    select: true,
    // You can pass components as a JSON instead of a simple HTML string,
    // in this case we also use a defined component type `image`
    content: { type: "image" },
    // This triggers `active` event on dropped components and the `image`
    // reacts by opening the AssetManager
    activate: true,
    category: "common"
  },
];