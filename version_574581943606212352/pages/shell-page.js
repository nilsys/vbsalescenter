define(['ojs/ojpopup'], function() {
  'use strict';

    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/59ebfa7dc28eca75e462764c/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
    
//      (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js';
//       s1.charset = 'UTF-8';
//       s1.setAttribute('crossorigin', '*');
//       s0.parentNode.insertBefore(s1, s0);
//     })();

  var PageModule = function PageModule() {
    
    PageModule.prototype.popUp = function (event) {
		 console.log('inside the popup function');
		   var p =document.getElementById("popup");
		   console.log(event);
		   p.open("#IDSPAN385906471");
    }
    
    };

  return PageModule;
});