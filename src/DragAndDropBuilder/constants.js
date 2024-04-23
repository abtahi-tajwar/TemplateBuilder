export const LabelFieldMap = {
    PACKAGE_LABEL: {
        label: "Package Label",
        fields: [
            { id: "product_name", label: "Product Name" },
            { id: "strain_name", label: "Strain Name" },
            { id: "store_name", label: "Store Name" },
            { id: "store_license", label: "Store License" },
            { id: "net_weight", label: "Net Weight" },
            { id: "mj_weight", label: "MJ Weight" },
            { id: "origin_id", label: "Origin ID" },
            { id: "sku", label: "SKU" },
            { id: "sku_barcode", label: "SKU Barcode" },
            { id: "batch_id", label: "Batch ID" },
            { id: "harvest_date", label: "Harvest Date" },
            { id: "manufacture_date", label: "Manufacture Date" },
            { id: "supplier_name", label: "Supplier Name" },
            { id: "supplier_license", label: "Supplier License" },
            { id: "test_results", label: "Test Results" },
            { id: "test_results_qr", label: "Test Results QR", custom: true },
            { id: "total_terpenes", label: "Total Responses" },
            { id: "product_category", label: "Product Category" },
            { id: "product_price", label: "Product Price" },
            { id: "expiration_date", label: "Expiration Date" },
            { id: "package_text", label: "Package Text" }
        ]
    },
    EXIT_LABEL: {
        label: "Exit Label",
        fields: [
            { id: "product_name", label: "Product Name" },
            { id: 'order_date', label: "Order Date" },
            { id: "patient_name", label: "OrderName" },
            { id: "patient_license", label: "Patient License" },
            { id: "strain_name", label: "Strain Name" },
            { id: "store_name", label: "Store Name" },
            { id: "store_license", label: "Store License" },
            { id: "net_weight", label: "Net Weight" },
            { id: "mj_weight", label: "MJ Weight" },
            { id: "origin_id", label: "Origin ID" },
            { id: "sku", label: "SKU" },
            { id: "package_id", label: "Package ID" },
            { id: "batch_id", label: "Batch ID" },
            { id: "harvest_date", label: "Harvest Date" },
            { id: "manufacture_date", label: "Manufacture Date" },
            { id: "supplier_name", label: "Supplier Name" },
            { id: "supplier_license", label: "Supplier License" },
            { id: "test_results", label: "Test Results" },
            { id: "test_results_qr", label: "Test Results QR", custom: true },
            { id: "total_terpenes", label: "Total Responses" },
            { id: "product_category", label: "Product Category" },
            { id: "product_price", label: "Product Price" },
            { id: "expiration_date", label: "Expiration Date" },
        ]
    },
    RECEIPT: {
        label: "Receipt",
        fields: [
            { id: "store_name", label: "Store Name" },
            { id: "store_address", label: "Store Address" },
            { id: "store_phone", label: "Store Phone" },
            { id: "store_website", label: "Store Phone" },
            { id: "store_email", label: "Store Email" },
            { id: "batch_id", label: "Batch ID" },
            { id: "budtender", label: "Budtender" },
            { id: "budtenderId", label: "Budtender ID" },
            { id: "return_reason", label: "Return Reason" },
            { id: "customer_name", label: "Customer Name" },
            { id: "customer_details", label: "Customer Details" },
            { id: "customer_id", label: "Customer ID" },
            { id: "order_contents", label: "Order Contents" },
            { id: "excise_tax_notification", label: "Excise Tax Notifcation" }
        ]
    },
    DELIVERY_RECEIPT: {
        label: "Delivery Receipt",
        fields: [
            { id: "store_name", label: "Store Name" },
            { id: "store_address", label: "Store Address" },
            { id: "store_phone", label: "Store Phone" },
            { id: "store_website", label: "Store Phone" },
            { id: "store_email", label: "Store Email" },
            { id: "batch_id", label: "Batch ID" },
            { id: "budtender", label: "Budtender" },
            { id: "budtenderId", label: "Budtender ID" },
            { id: "return_reason", label: "Return Reason" },
            { id: "customer_name", label: "Customer Name" },
            { id: "customer_details", label: "Customer Details" },
            { id: "customer_id", label: "Customer ID" },
            { id: "order_contents", label: "Order Contents" },
            { id: "excise_tax_notification", label: "Excise Tax Notifcation" }
        ]
    },
    PRE_ORDER_FULFILLMENT_PULL_SHEET: {
        label: "Pre-Order Fulfillment Pull Sheet",
        fields: [
            { id: "store_name", label: "Store Name" },
            { id: "order_time", label: "Order Time" },
            { id: "customer_name", label: "Customer Name" },
            { id: "customer_phone", label: "Customer Phone" },
            { id: "delivery_address", label: "Delivery Address" },
            { id: "preorder_notes", label: "PreOrder Notes" }
        ]
    }
}