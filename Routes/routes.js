const express = require("express");
const route = express.Router();
const public_routes = require("./public.routes");
const auth_route = require("./auth.routes");

const LocalStorage = require("node-localstorage").LocalStorage,
  localStorage = new LocalStorage("./local-storage");

let selected_layout = "index";

const changeLayout = function (res) {
  setLayout();
  res.redirect(public_routes.dashboard);
};

route.use(function (req, res, next) {
  let url_replace_options = req.url.replace("?", "");
  res.locals.routes = public_routes;
  res.locals.current_routes = url_replace_options;
  next();
});

const setLayout = function () {
  let current_layout = localStorage.getItem("layout");
  if (current_layout == "index") {
    selected_layout = "index";
  }
};
setLayout();
route.get("/index", function (req, res) {
  localStorage.setItem("layout", "index");
  changeLayout(res);
});

// redirect
route.get("/", function (req, res) {
  res.redirect(public_routes.login);
});
// redirect **

// auth
route.use(auth_route)
// auth **

// main
route.get(public_routes.dashboard, (req, res, next) => {
  res.render("layout", {
    page_path: "./dashboard/dashboard",
    layout: selected_layout,
    title: "Dashboard",
  });
});

//------------------------ PRODUCT ---------------------------- //

route.get(public_routes.product_list, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/productlist",
    layout: selected_layout,
    title: "Product List",
  });
});

//====== Code to be start ======== //
//add-product
route.get(public_routes.product_addProduct, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/addproduct",
    active_path: "Add Product",
    layout: selected_layout,
    title: "Add Product",
  });
});

//categorylist
route.get(public_routes.product_categoryList, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/categorylist",
    active_path: "Category List",
    layout: selected_layout,
    title: "Category List",
  });
});

//addcategory
route.get(public_routes.product_addCategory, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/addcategory",
    layout: selected_layout,
    title: "Add Category",
  });
});

//subcategorylist
route.get(public_routes.product_subCategoryList, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/subcategorylist",
    layout: selected_layout,
    title: "Sub Category List",
  });
});

//addsubcategory
route.get(public_routes.product_addSubCategory, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/addsubcategory",
    layout: selected_layout,
    title: "Add Sub Category",
  });
});

//brandlist
route.get(public_routes.product_brandList, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/brandlist",
    layout: selected_layout,
    title: "Brand List",
  });
});

//addbrand
route.get(public_routes.product_addBrand, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/addbrand",
    layout: selected_layout,
    title: "Add Brand",
  });
});

//Product Details
route.get(public_routes.product_productDetails, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/productdetails",
    layout: selected_layout,
    title: "Product Details",
  });
});

//Edit Product
route.get(public_routes.product_editProduct, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/editproduct",
    layout: selected_layout,
    title: "Edit Product",
  });
});

//Edit Category
route.get(public_routes.product_editCategory, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/editcategory",
    layout: selected_layout,
    title: "Edit Category",
  });
});

//Edit Brand
route.get(public_routes.product_editBrand, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/editbrand",
    layout: selected_layout,
    title: "Edit Brand",
  });
});

//Edit Sub Category
route.get(public_routes.product_editSubCategory, (req, res, next) => {
  res.render("layout", {
    page_path: "./product/editsubcategory",
    layout: selected_layout,
    title: "Edit Sub Category",
  });
});

//------------------------ /PRODUCT ---------------------------- //

//------------------------  SALES ---------------------------- //

//Sales
route.get(public_routes.sales_salesList, (req, res, next) => {
  res.render("layout", {
    page_path: "./sales/saleslist",
    layout: selected_layout,
    title: "Sales List",
  });
});

//New Sales
route.get(public_routes.sales_newSales, (req, res, next) => {
  res.render("layout", {
    page_path: "./sales/newsales",
    layout: selected_layout,
    title: "New Sales",
  });
});

// Edit Sales
route.get(public_routes.sales_editSales, (req, res, next) => {
  res.render("layout", {
    page_path: "./sales/editsales",
    layout: selected_layout,
    title: "Edit Sales",
  });
});

// Sales Details
route.get(public_routes.sales_salesDetails, (req, res, next) => {
  res.render("layout", {
    page_path: "./sales/salesdetails",
    layout: selected_layout,
    title: "Sales Details",
  });
});

//------------------------ /SALES ---------------------------- //
//------------------------ PURCHASE ---------------------------- //

//Purchase List
route.get(public_routes.purchase_purchaseList, (req, res, next) => {
  res.render("layout", {
    page_path: "./purchase/purchaselist",
    layout: selected_layout,
    title: "Purchase List",
  });
});

//Add Purchase
route.get(public_routes.purchase_addPurchase, (req, res, next) => {
  res.render("layout", {
    page_path: "./purchase/addpurchase",
    layout: selected_layout,
    title: "Add Purchase",
  });
});

//Edit Purchase
route.get(public_routes.purchase_editPurchase, (req, res, next) => {
  res.render("layout", {
    page_path: "./purchase/editpurchase",
    layout: selected_layout,
    title: "Edit Purchase",
  });
});
//------------------------ /PURCHASE ---------------------------- //
//------------------------ PEOPLE ---------------------------- //

//Customer List
route.get(public_routes.people_customerList, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/customerlist",
    layout: selected_layout,
    title: "Customer List",
  });
});

//Add Customer
route.get(public_routes.people_addCustomer, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/addcustomer",
    layout: selected_layout,
    title: "Add Customer",
  });
});

//Supplier List
route.get(public_routes.people_supplierList, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/supplierlist",
    layout: selected_layout,
    title: "Supper List",
  });
});

//Add Supplier
route.get(public_routes.people_addSupplier, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/addsupplier",
    layout: selected_layout,
    title: "Add Supplier",
  });
});

//Edit Customer
route.get(public_routes.people_editCustomer, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/editcustomer",
    layout: selected_layout,
    title: "Edit Customer",
  });
});

//Edit Supplier
route.get(public_routes.people_editSupplier, (req, res, next) => {
  res.render("layout", {
    page_path: "./people/editsupplier",
    layout: selected_layout,
    title: "Edit Supplier",
  });
});

//------------------------ /PEOPLE ---------------------------- //
//------------------------ Blank Page ---------------------------- //
route.get(public_routes.blankPage, (req, res, next) => {
  res.render("layout", {
    page_path: "./blankpage/blankpage",
    layout: selected_layout,
    title: "Blank Page",
  });
});
//------------------------ /Blank Page ---------------------------- //
//------------------------ Error Pages ---------------------------- //

// 404 - Error
route.get(public_routes.pageNotFound, (req, res, next) => {
  res.render("index-error", {
    page_path: "./error/error404",
    layout: "index-error",
    title: "404 Error",
  });
});

// 500 - Error
route.get(public_routes.serverError, (req, res, next) => {
  res.render("index-error", {
    page_path: "./error/error500",
    layout: "index-error",
    title: "500 Error",
  });
});
//------------------------ /Error Pages ---------------------------- //
//------------------------ Report ---------------------------- //

//Sales Report
route.get(public_routes.report_salesReport, (req, res, next) => {
  res.render("layout", {
    page_path: "./report/salesreport",
    layout: selected_layout,
    title: "Sales Report",
  });
});

//Purchase Report
route.get(public_routes.report_purchaseReport, (req, res, next) => {
  res.render("layout", {
    page_path: "./report/purchasereport",
    layout: selected_layout,
    title: "Purchase Report",
  });
});

//------------------------ /Report ---------------------------- //
//------------------------ Users ---------------------------- //

//New User
route.get(public_routes.users_newUser, (req, res, next) => {
  res.render("layout", {
    page_path: "./users/newuser",
    layout: selected_layout,
    title: "New User",
  });
});

//Users List
route.get(public_routes.users_usersList, (req, res, next) => {
  res.render("layout", {
    page_path: "./users/userslist",
    layout: selected_layout,
    title: "Users List",
  });
});

//------------------------ /Users ---------------------------- //

// main **

// wild card route
route.all("*", function (req, res) {
  res.redirect(public_routes.login);
});
// wild card route **

module.exports = route;
