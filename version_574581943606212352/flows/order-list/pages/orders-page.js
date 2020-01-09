define([], function() {
  'use strict';
  var l_orderNumber;
  var PageModule = function PageModule() {
    
    PageModule.prototype.openDialog=function (orderNumber) {
         console.log(orderNumber);
         if(l_orderNumber!='1'){
          l_orderNumber=orderNumber;
          document.getElementById('modalDialog1').open();
        }
       
          
        };
    
      PageModule.prototype.next=function (page) {
          console.log('------------------');
          console.log(page+1);
            return page+1;
        } 
        PageModule.prototype.previous=function (page) {
          if(page>0){
            return page-1;
          }else{
            return 0;
          }
        }  
    };

  return PageModule;
});
