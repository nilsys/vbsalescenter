define([
  "ojs/ojcore",
  "knockout",
  "flows/main/resources/toastr.min",
  "ojs/ojpopup","ojs/ojfilmstrip"
], function(oj, ko, toastr) {
  "use strict";
  var self = this;
  //   self.shoppingCartArray=[
  //         {item_description:'Hello World'}
  //         ];
  var shoppingCartArray = [];

  var PageModule = function PageModule() {
    var self = this;
    PageModule.prototype.categoryChange = function(event) {
      console.log(event);
      if (event === undefined) {
        return "0";
      } else {
        return event;
      }
    };

    PageModule.prototype.addToCartButton = function(current, detail, key) {
      console.log(current.data);

      if (current.data.id == 152) {
        toastr.info(
          "You are eligible for 50% discount based on your past purchases"
        );
      }
      console.log("detail");
      console.log(detail);
      console.log(key);

      if (current.data != null) {
        var b = shoppingCartArray.find(item => item.id === current.data.id);
        console.log("item found or not found-->");
        console.log(b);
        //console.log (PageModule.variables);
        if (b === undefined) {
          current.data.quantity = 1;
          shoppingCartArray.push(current.data);
        } else {
          toastr.warning("Item allready exists in the shopping cart");
        }
      }
      return shoppingCartArray;
    };

    PageModule.prototype.consoleLog = function(event) {
      console.log("Inside the ConsoleLog Function");

      if (event.data != null) {
        console.log(event);

        var b = shoppingCartArray.find(item => item.id === event.data.id);
        console.log("item found or not found-->");
        console.log(b);
        //console.log (PageModule.variables);
        if (b === undefined) {
          event.data.quantity = 1;
          shoppingCartArray.push(event.data);
        } else {
          toastr.warning("Item allready exists in the shopping cart");
        }
      }
      console.log(shoppingCartArray);
      return shoppingCartArray;
    };

    PageModule.prototype.removeItem = function(itemId, scArray) {
      console.log("Inside the remove Function");
      console.log(scArray);
      if (itemId != null) {
        console.log(itemId);
        console.log(scArray);
        var b = scArray.findIndex(item => item.id == itemId);
        console.log("item found or not found-->");
        console.log(b);
        //console.log (PageModule.variables);
        if (b != undefined) {
          scArray.splice(b, 1);
          shoppingCartArray.splice(b, 1);
        }
      }
      var total = 0;
      scArray.map(item => {
        console.log("inside map");
        console.log(item.quantity);
        total = total + parseInt(item.price) * parseInt(item.quantity);
      });
      console.log(scArray);
      shoppingCartArray = scArray;
      return scArray;
    };

    
    PageModule.prototype.cartTotal = function(scArray) {
      var total = 0;
      scArray.map(item => {
        console.log("inside map");
        console.log(item.quantity);
        total = total + parseInt(item.price) * parseInt(item.quantity);
      });
      return total;
    };
    PageModule.prototype.quantityChanged = function(
      itemId,
      currItem,
      newQuantity,
      scArray
    ) {
      console.log("Inside Quantity Changed");
      console.log(itemId);
      console.log(scArray);
      console.log(newQuantity);
      var b = scArray.findIndex(item => item.id == itemId);
      var total = 0;
      scArray[b].quantity = newQuantity;
      console.log(scArray);
      shoppingCartArray = scArray;
      shoppingCartArray[b].quantity = newQuantity;
      scArray.map(item => {
        console.log("inside map");
        console.log(item.quantity);
        total = total + parseInt(item.price) * parseInt(item.quantity);
      });
      console.log(total);
      return total;
    };

    PageModule.prototype.emptyCart = function() {
      shoppingCartArray = [];

      return shoppingCartArray;
    };

    PageModule.prototype.calculateCartCount = function(scArray) {
      console.log("inside calculateCartCount");
      console.log(scArray.length);
      return scArray.length;
    };

    PageModule.prototype.mouseOverRating = function(
      current,
      detail,
      key,
      rating,
      rating1
    ) {
      var rowdata = document
        .getElementById("oj-table-1084591017-1")
        .getDataForVisibleRow(0);
      console.log(rowdata);
      console.log("inside mouseOverRating");
      console.log(rating);
      console.log(rating1);
      // 		  console.log(rating.data);
      // 		  console.log(current);
      // 		  		  console.log(detail);
      console.log(key);
      var popup = document.getElementById("popup1");
      popup.open("#popup1");
      $(".bar-1").css("width", Math.floor(Math.random() * 100) + "%");
      $(".bar-2").css("width", Math.floor(Math.random() * 100) + "%");
      $(".bar-3").css("width", Math.floor(Math.random() * 100) + "%");
      $(".bar-4").css("width", Math.floor(Math.random() * 100) + "%");
      $(".bar-5").css("width", Math.floor(Math.random() * 100) + "%");
      $("#one").text(rowdata.data.one);
      $("#two").text(rowdata.data.two);
      $("#three").text(rowdata.data.three);
      $("#four").text(rowdata.data.four);
      $("#five").text(rowdata.data.five);
    };

    PageModule.prototype.random = function() {
      return Math.floor(Math.random() * 100);
    };
    //  PageModule.prototype.calculateTotal  = function () {
    //         var total = 0;
    //         cartCount(0);
    //         self.cartData().map((item) => {
    //           //console.log(item.price);
    //           //console.log(item.quantity());
    //           total = (total + Number(item.price) * Number(item.quantity()));
    //           //console.log(+cartCount() + 1);
    //           cartCountUpdate(+cartCount() + 1);
    //           //console.log(total);
    //         });
    //         //console.log(cartCount());
    //         self.total(total.toLocaleString());
    //       }
  };

  return PageModule;
});
