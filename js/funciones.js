/************************************************************************************************/
/*  GYM - hoja de funcones de GYM                                                               */
/*  Autor: Miguel Falcón                                                                        */
/*  versión 1.0 - 1/12/2022                                                                     */
/************************************************************************************************/

/*************** js de responsive navbar de w3scholls ***************/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
}