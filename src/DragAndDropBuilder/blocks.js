export const blocks = [
    {
      id: "section", // id is mandatory
      label: "<b>Section</b>", // You can use HTML/SVG inside labels
      attributes: { class: "gjs-block-section" },
      content: `<section>
                <h1>This is a simple title</h1>
                <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
            </section>`,
    },
    {
        id: "container",
        label: "Container",
        content: /*html*/`
            <div style="display: flex; flex-direction: column; gap: 8px; max-width: 1200px; width: 90%; margin: 0 auto;">
                <p>Start inserting your content here...</p>
            </div>
        `
    },
    {
        id: "link-button",
        label: "Link Button",
        attributes: { class: "button-block" },
        content: /*html*/`
            <style>
                  .button-block {
                    outline: none; 
                    background: none; 
                    padding: 12px 16px; 
                    border-radius: 8px; 
                    background-image: linear-gradient(120deg,#d983a6,#4d114f); 
                    color: white; 
                    text-decoration: none;
                    transition: all .3s ease-out;
                }
                .button-block:hover {
                    background-image: linear-gradient(90deg,#d983a6,#4d114f); 
                }
            </style>
            <a href="#" class="button-block">Button Text</a>
        `
    },
    {
      id: "text",
      label: "Text",
      content: '<div data-gjs-type="text">Insert your text here..</div>',
    },
    {
      id: "image",
      label: "Image",
      // Select the component once it's dropped
      select: true,
      // You can pass components as a JSON instead of a simple HTML string,
      // in this case we also use a defined component type `image`
      content: { type: "image" },
      // This triggers `active` event on dropped components and the `image`
      // reacts by opening the AssetManager
      activate: true,
    },
  ]