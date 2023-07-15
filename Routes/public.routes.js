const public_routes = {};

public_routes.login = "/login";

public_routes.pageNotFound = "/error-404";

public_routes.serverError = "/error-500";

public_routes.dashboard = "/dashboard";

public_routes.blankPage = "/blank-page";

public_routes.profile = "/profile";

// -- Product Router-- //
public_routes.product_list = "/product-list";

public_routes.product_addProduct = "/add-product";

public_routes.product_categoryList = "/category-list";

public_routes.product_addCategory = "/add-category";

public_routes.product_subCategoryList = "/sub-category-list";

public_routes.product_addSubCategory = "/add-sub-category";

public_routes.product_brandList = "/brand-list";

public_routes.product_addBrand = "/add-brand";

public_routes.product_productDetails = "/product-details";

public_routes.product_editProduct = "/edit-product";

public_routes.product_editCategory = "/edit-category";

public_routes.product_editBrand = "/edit-brand";

public_routes.product_editSubCategory = "/edit-sub-category";

// -- sales Router-- //

public_routes.sales_salesList = "/sales-list";

public_routes.sales_newSales = "/new-sales";

public_routes.sales_editSales = "/edit-sales";

public_routes.sales_salesDetails = "/sales-details";

// -- Purchase Router-- //

public_routes.purchase_purchaseList = "/purchase-list";

public_routes.purchase_addPurchase = "/add-purchase";

public_routes.purchase_editPurchase = "/edit-purchase";

// -- People Router-- //

public_routes.people_customerList = "/customer-list";

public_routes.people_supplierList = "/supplier-list";

public_routes.people_addCustomer = "/add-customer";

public_routes.people_addSupplier = "/add-supplier";

public_routes.people_editCustomer = "/edit-customer";

public_routes.people_editSupplier = "/edit-supplier";

// -- Report Router-- //

public_routes.report_salesReport = "/sales-report";

public_routes.report_purchaseReport = "/purchase-report";

// -- users Router-- //

public_routes.users_newUser = "/new-user";

public_routes.users_usersList = "/users-list";

module.exports = public_routes;
