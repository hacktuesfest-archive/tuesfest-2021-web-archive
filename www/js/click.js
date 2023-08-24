$(document).ready(() => {
    if(window.location.hash === "" || window.location.hash === "#embedded"){
         $(".embedded-block").click()
     } else if(window.location.hash === "#software"){
         $(".software-block").click()
     } else if(window.location.hash === "#networks"){
         $(".networks-block").click()
     }
 });