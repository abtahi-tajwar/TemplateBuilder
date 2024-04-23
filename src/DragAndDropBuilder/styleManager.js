export const styleManager = {
    appendTo: ".styles-container",
    sectors: [
      {
        name: "Dimension",
        open: false,
        // Use built-in properties
        buildProps: ["width", "min-width", "height", "min-height"],
        // Use `properties` to define/override single property
        properties: [
          {
            // Type of the input,
            // options: integer | radio | select | color | slider | file | composite | stack
            type: "integer",
            name: "width", // Label for the property
            property: "width", // CSS property (if buildProps contains it will be extended)
            units: ["px", "%"], // Units, available only for 'integer' types
            defaults: "auto", // Default value
            min: 0, // Min value, available only for 'integer' types
          },
        ],
      },
      {
        name: "Spacing",
        open: false,
        // Use built-in properties
        buildProps: ["margin", "padding"],
      },
      {
        name: "Alignment",
        open: false,
        buildProps: ["align-self"],
        properties: [
          { 
            type: "radio",
            label: "Align",
            property: 'align-self',
            default: "flex-start",
            options: [
              { id: "flex-start", label: "Start" },
              { id: "center", label: "Center" },
              { id: "flex-end", label: "End" },
            ]
          }
        ]
      },
      {
        name: "Layout",
        open: false,
        buildProps: ["display", "flex-direction", "justify-content", "align-items"],
        properties: [
          {
            type: "select",
            label: "Display",
            property: "display",
            default: "flex",
            options: [
              { id: "flex", label: "Flex" },
              { id: "block", label: "Block" },
              { id: "inline", label: "Inline" },
              { id: "inline-block", label: "Inline-Block" }
            ]
          },
          {
            type: "radio",
            label: "Direction",
            property: "flex-direction",
            default: 'column',
            options: [
              { id: 'column', label: "Column" },
              { id: "row", label: "Row" }
            ]
          },
          {
            type: "radio",
            label: "Justify Content",
            property: 'justify-content',
            default: 'auto',
            options: [
              { id: 'center', label: 'Center'},
              { id: 'flex-start', label: 'Start' },
              { id: 'flex-end', label: 'End' },
            ]
          },
          {
            type: "radio",
            label: "Flex",
            property: 'font-size',
            default: '0 0 auto',
            options: [
              { id: '0 0 auto', label: 'Auto'},
              { id: '1 1 0%', label: 'Fill' },
              { id: '0 1 auto', label: 'Hug' },
              { id: 'custom', label: 'Custom' },
            ]
          }

        ]
      },
      {
        name: "Typography",
        open: false,
        buildProps: ["font-family", "font-size", "text-align", "color", "line-height", "text-decoration", "direction"],
        properties: [
          {
            id: 'text-decoration',
            name: "Text Decoration",
            label: "Decoration",
            type: "select",
            default: "initial",
            property: "text-decoration",
            options: [
              { id: "initial", label: "Default" },
              { id: "overline", label: "Overline" },
              { id: "line-through", label: "Line Throught"},
              { id: "underline", label: "Underline"}
            ]
          },
          {
            id: 'text-direction',
            name: "Text Direction",
            label: "Direction",
            type: "select",
            default: "LTR",
            property: "direction",
            options: [
              { id: "LTR", label: "LTR" },
              { id: "RTL", label: "RTL" }
            ]
          }
        ]
      },
      {
        name: "Extra",
        open: false,
        buildProps: ["background", "background-color", "box-shadow", "custom-prop", "text-align"],
        properties: [
          {
            id: "custom-prop",
            name: "Custom Label",
            property: "font-size",
            type: "select",
            defaults: "32px",
            // List of options, available only for 'select' and 'radio'  types
            options: [
              { value: "12px", name: "Tiny" },
              { value: "18px", name: "Medium" },
              { value: "32px", name: "Big" },
            ],
          },
        ],
      },
    ],
  }
  