import "grapesjs/dist/css/grapes.min.css";
import "./gjs.css";
import useInitializeEditor from "./hooks/useInitializeEditor";
import PackageLabel from "./templates/PackageLabel/PackageLabel";
import ExitLabel from "./templates/ExitLabel/ExitLabel";
import { LabelFieldMap } from "./constants";
import Receipt from "./templates/Receipt/Receipt";
import DeliveryReceipt from "./templates/DeliveryReceipt/DeliveryReceipt";
import PreOrderPullSheet from "./templates/PreOrderPullSheet/PreOrderPullSheet";
  
export const LabelTemplates = {
  PACKAGE_LABEL: ({ ...props }) => <PackageLabel {...props} />,
  EXIT_LABEL: ({ ...props }) => <ExitLabel {...props} />,
  RECEIPT: ({ ...props }) => <Receipt {...props} />,
  DELIVERY_RECEIPT: ({ ...props }) => <DeliveryReceipt {...props} />,
  PRE_ORDER_FULFILLMENT_PULL_SHEET: ({ ...props }) => <PreOrderPullSheet {...props} />
}

export function DragAndDropBuilder({ height, width, type, margins }) {
  // const [editor, setEditor] = useState(null);
  // const [saveClicked, setSaveClicked] = useState(false);
  // useEffect(() => {
  //   if (!editor) {
  //     const _editor = grapesjs.init({
  //       // Indicate where to init the editor. You can also pass an HTMLElement
  //       container: "#gjs",
  //       // Get the content for the canvas directly from the element
  //       // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
  //       fromElement: true,
  //       // Size of the editor
  //       height: height ?? "300px",
  //       width: width ?? "300px",
  //       // Disable the storage manager for the moment
  //       storageManager: false,
  //       // Avoid any default panel
  //       blockManager: {
  //         appendTo: "#blocks",
  //         blocks: exitLabelBlocks,
  //       },
  //       layerManager: {
  //         appendTo: ".layers-container",
  //       },
  //       // deviceManager: {
  //       //     devices: [{
  //       //         name: 'Desktop',
  //       //         width: '', // default size
  //       //       }, {
  //       //         name: 'Mobile',
  //       //         width: '320px', // this value will be used on canvas width
  //       //         widthMedia: '480px', // this value will be used in CSS @media
  //       //     }]
  //       //   },
        
  //       // We define a default panel as a sidebar to contain layers
  //       panels: panels,

  //       // The Selector Manager allows to assign classes and
  //       // different states (eg. :hover) on components.
  //       // Generally, it's used in conjunction with Style Manager
  //       // but it's not mandatory
        
  //       selectorManager: {
  //         appendTo: ".styles-container",
  //       },
  //       styleManager: styleManager,
  //       traitManager: {
  //           appendTo: '.traits-container',
  //       },
  //     });
  //     _editor.Panels.addPanel({
  //       id: "panel-top",
  //       el: ".panel__top",
  //     });
  //     _editor.Panels.addPanel({
  //       id: "basic-actions",
  //       el: ".panel__basic-actions",
  //       buttons: [
  //         {
  //           id: "visibility",
  //           active: true, // active by default
  //           className: "btn-toggle-borders",
  //           label: "<u>B</u>",
  //           command: "sw-visibility", // Built-in command
  //         }
  //       ],
  //     });

  //     // Define commands
  //     _editor.Commands.add("show-layers", {
  //       getRowEl(editor) {
  //         return editor.getContainer().closest(".editor-row");
  //       },
  //       getLayersEl(row) {
  //         return row.querySelector(".layers-container");
  //       },

  //       run(editor, sender) {
  //         const lmEl = this.getLayersEl(this.getRowEl(editor));
  //         lmEl.style.display = "";
  //       },
  //       stop(editor, sender) {
  //         const lmEl = this.getLayersEl(this.getRowEl(editor));
  //         lmEl.style.display = "none";
  //       },
  //     });
  //     _editor.Commands.add("show-styles", {
  //       getRowEl(editor) {
  //         return editor.getContainer().closest(".editor-row");
  //       },
  //       getStyleEl(row) {
  //         return row.querySelector(".styles-container");
  //       },

  //       run(editor, sender) {
  //         const smEl = this.getStyleEl(this.getRowEl(editor));
  //         smEl.style.display = "";
  //       },
  //       stop(editor, sender) {
  //         const smEl = this.getStyleEl(this.getRowEl(editor));
  //         smEl.style.display = "none";
  //       },
  //     });

  //     _editor.Commands.add('show-traits', {
  //       getTraitsEl(editor) {
  //         const row = editor.getContainer().closest('.editor-row');
  //         return row.querySelector('.traits-container');
  //       },
  //       run(editor, sender) {
  //         this.getTraitsEl(editor).style.display = '';
  //       },
  //       stop(editor, sender) {
  //         this.getTraitsEl(editor).style.display = 'none';
  //       },
  //     });
  //     // _editor.Commands.add('set-device-desktop', {
  //     //   run: editor => editor.setDevice('Desktop')
  //     // });
  //     // _editor.Commands.add('set-device-mobile', {
  //     //   run: editor => editor.setDevice('Mobile')
  //     // });


  //     _editor.on("run:export-template:before", (opts) => {
  //       console.log("Before the command run", opts);
  //       opts.abort = 1;
  //     });
  //     // _editor.on("run:export-template", (data) => {
  //     //   setSaveClicked(true);
  //     // });
  //     // _editor.on("abort:export-template", () =>  {
  //     //   setSaveClicked(true);
  //     // });

  //     setEditor(_editor);
  //   }
  // }, []);

  const editor = useInitializeEditor({ height, width, type });


  // useEffect(() => {
  //   if (saveClicked) {
  //     getHtmlData();
  //     setSaveClicked(false);
  //   }
  // }, [saveClicked])
  const handleSaveClick = () => {
    const htmlData = getHtmlData();
    console.log("HTML data", htmlData)
    window.top.postMessage({
      type: 'save',
      templateData: htmlData
    }, '*') 
  }
  const handleCancelClick = () => {
    window.top.postMessage({
      type: 'cancel'
    }, '*')
  }
  const getHtmlData = () => {
    let html = editor.getHtml();
    let css = editor.getCss();

    // html = html.replace('<body id="iskk">', '<div id="custom-page-html">')
    // html = html.replace('</body>', '</div>')
    // css = css.replace('body {', '#custom-page-html')

    const result = `
        <style>${css}</style>
        ${html}
    `
    return result;
  }

  const containerStyles = {
    paddingTop: margins?.top ?? type ? LabelFieldMap[type].margins.top : 0,
    paddingRight: margins?.right ?? type ? LabelFieldMap[type].margins.right : 0,
    paddingBottom: margins?.bottom ?? type ? LabelFieldMap[type].margins.bottom : 0,
    paddingLeft: margins?.left ?? type ? LabelFieldMap[type].margins.left : 0,
    boxSizing: 'border-box',
    width: '100%',
    minHeight: height,
    borderBottom: '2px dashed gray'
  }
  return (
    <div className="gjs-container">
      <div className="panel__top">
        <div className="panel__basic-actions" style={{ display: 'flex', gap: 8 }}>
          <button className="gjs-save-btn" onClick={handleSaveClick}>Save</button>
          <button className="gjs-cancel-btn" onClick={handleCancelClick}>Cancel</button>
        </div>

        <div className="panel__devices"></div>
        <div className="panel__switcher"></div>
      </div>
      <div className="editor-row">
        <div className="editor-canvas" style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#242424' }}>
          <div id="gjs" className="gjs-canvas">
            <div style={containerStyles}>
              {type ? LabelTemplates[type]({ height, margins }) : <h1>Edit Here...</h1>}
            </div>
          </div>
        </div>
        <div className="panel__right">
          <div className="layers-container" style={{ display: 'none' }}></div>
          <div className="styles-container"></div>
          {/* <div className="traits-container"></div> */}
        </div>
      </div>

      <div id="common-blocks"></div>
      <div id="blocks"></div>
    </div>
  );
}

