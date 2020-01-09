define(['ojs/ojcore','knockout', 'ojs/ojsunburst','ojs/ojarraytreedataprovider'], function(oj,ko) {
  //'use strict';
 
  var PageModule = function PageModule() {

 var dataOA= ko.observableArray();
 var handler = new oj.ColorAttributeGroupHandler();
 var sunburstData = new oj.ArrayTreeDataProvider(dataOA, {
        keyAttributes: 'id',
        childrenAttribute: "products"
      });
      
    	PageModule.prototype.toggleOrentation = function (orientation) {
    	  console.log(orientation);
        if(orientation=='vertical'){
          return 'horizontal'
        } else
        {
          return 'vertical'
        }
			
		}  
		PageModule.prototype.getHandler=function () {
		  return handler;
  }
		PageModule.prototype.printVariable=function (response) {
          console.log('------------------');
          console.log(response);
          var sb = document.getElementById('1326890');
          
                    var sb1 = document.getElementById('2-6890');
          sb1.refresh();
           document.getElementById('1326890').refresh();
           console.log('printing sb');
           console.log(sb);
           console.log('printing sb.data');
           console.log(sb.getProperty('data'));
           sb.refresh();
          return response;
        } 
		
		PageModule.prototype.getSBDP=function (restResponse) {
		  
          console.log('------------------');
                    console.log('inside getSBDP');
                    console.log(restResponse.length);
          dataOA(restResponse);
          console.log(dataOA);
          console.log(sunburstData);
                console.log('###################');

//       $.ajax({
//           url: "https://apex.oracle.com/pls/apex/venks/om/customertoproduct",
//           method: "get",
//         })
//         .done(function (data) {
//           console.log('**************************');
//           console.log('**************************');
//           console.log('**************************');
//           console.log('**************************');
//           
//           console.log(data);
//          dataOA(data);
//                   return sunburstData;
// 
//          console.log(sunburstData);
//         }).fail(function (xhr) {
//           console.log('error callback 2', xhr);
//         });
//           
        return sunburstData;
        } 
        
		PageModule.prototype.assignJSONResponse=function (response) {
          console.log('------------------');
          console.log('inside assignJson Response');
          console.log(response);
                    
          return response;

        } 
		
		
    };

  return PageModule;
});
