import "grapesjs/dist/css/grapes.min.css";
import "../gjs.css";
import grapesjs from "grapesjs";
import { useEffect, useState } from "react";
import { styleManager } from "../styleManager";
import { panels } from "../panels";
import { exitLabelBlocks } from "../templates/ExitLabel/exitLabelBlocks";
import { packageLabelBlocks } from "../templates/PackageLabel/packageLabelBlocks";
import { receiptBlocks } from "../templates/Receipt/receiptBlocks";
import { deliveryReceiptBlocks } from "../templates/DeliveryReceipt/deliveryReceiptBlocks";
import { pullSheetBlocks } from "../templates/PreOrderPullSheet/pullSheetLabelBlocks";

const LabelBlocks = {
  PACKAGE_LABEL: packageLabelBlocks,
  EXIT_LABEL: exitLabelBlocks,
  RECEIPT: receiptBlocks,
  DELIVERY_RECEIPT: deliveryReceiptBlocks,
  PRE_ORDER_FULFILLMENT_PULL_SHEET: pullSheetBlocks,
};

function useInitializeEditor({ height, width, type }) {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    if (!editor) {
      const _editor = grapesjs.init({
        // Indicate where to init the editor. You can also pass an HTMLElement
        container: "#gjs",
        // Get the content for the canvas directly from the element
        // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
        fromElement: true,
        // Size of the editor
        height: height ?? "300px",
        width: width ?? "300px",
        // Disable the storage manager for the moment
        storageManager: false,
        // Avoid any default panel
        blockManager: {
          appendTo: "#blocks",
          blocks: LabelBlocks[type] ?? exitLabelBlocks,
        },
        layerManager: {
          appendTo: ".layers-container",
        },
        // deviceManager: {
        //     devices: [{
        //         name: 'Desktop',
        //         width: '', // default size
        //       }, {
        //         name: 'Mobile',
        //         width: '320px', // this value will be used on canvas width
        //         widthMedia: '480px', // this value will be used in CSS @media
        //     }]
        //   },

        // We define a default panel as a sidebar to contain layers
        panels: panels,

        // The Selector Manager allows to assign classes and
        // different states (eg. :hover) on components.
        // Generally, it's used in conjunction with Style Manager
        // but it's not mandatory

        selectorManager: {
          appendTo: ".styles-container",
        },
        styleManager: styleManager,
        traitManager: {
          appendTo: ".traits-container",
        },
      });
      _editor.Panels.addPanel({
        id: "panel-top",
        el: ".panel__top",
      });
      _editor.Panels.addPanel({
        id: "basic-actions",
        el: ".panel__basic-actions",
        buttons: [
          {
            id: "visibility",
            active: true, // active by default
            className: "btn-toggle-borders",
            label: "<u>B</u>",
            command: "sw-visibility", // Built-in command
          },
        ],
      });

      // Define commands
      _editor.Commands.add("show-layers", {
        getRowEl(editor) {
          return editor.getContainer().closest(".editor-row");
        },
        getLayersEl(row) {
          return row.querySelector(".layers-container");
        },

        run(editor, sender) {
          const lmEl = this.getLayersEl(this.getRowEl(editor));
          lmEl.style.display = "";
        },
        stop(editor, sender) {
          const lmEl = this.getLayersEl(this.getRowEl(editor));
          lmEl.style.display = "none";
        },
      });
      _editor.Commands.add("show-styles", {
        getRowEl(editor) {
          return editor.getContainer().closest(".editor-row");
        },
        getStyleEl(row) {
          return row.querySelector(".styles-container");
        },

        run(editor, sender) {
          const smEl = this.getStyleEl(this.getRowEl(editor));
          smEl.style.display = "";
        },
        stop(editor, sender) {
          const smEl = this.getStyleEl(this.getRowEl(editor));
          smEl.style.display = "none";
        },
      });

      _editor.Commands.add("show-traits", {
        getTraitsEl(editor) {
          const row = editor.getContainer().closest(".editor-row");
          return row.querySelector(".traits-container");
        },
        run(editor, sender) {
          this.getTraitsEl(editor).style.display = "";
        },
        stop(editor, sender) {
          this.getTraitsEl(editor).style.display = "none";
        },
      });
      // _editor.Commands.add('set-device-desktop', {
      //   run: editor => editor.setDevice('Desktop')
      // });
      // _editor.Commands.add('set-device-mobile', {
      //   run: editor => editor.setDevice('Mobile')
      // });

      _editor.on("run:export-template:before", (opts) => {
        console.log("Before the command run", opts);
        opts.abort = 1;
      });
      // _editor.on("run:export-template", (data) => {
      //   setSaveClicked(true);
      // });
      // _editor.on("abort:export-template", () =>  {
      //   setSaveClicked(true);
      // });

      setEditor(_editor);
    }
  }, [editor, height, width, type]);

  // useEffect(() => {
  //   if (editor) {
  //     const blockManager = editor.Blocks;
  //     // Render all blocks (inside the global collection)
  //     blockManager.render();

  //     // Render new set of blocks
  //     const blocks = blockManager.getAll();
  //     const filtered = blocks.filter(
  //       (block) => block.get("category") == "common"
  //     );

  //     blockManager.render(filtered);
  //   }
  // }, [editor]);

  return editor;
}

export default useInitializeEditor;
