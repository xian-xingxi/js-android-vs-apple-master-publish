"use strict";

document.getElementById("AndroidBTN").addEventListener("click", setAndroid);
document.getElementById("AppleBTN").addEventListener("click", setApple);

function setAndroid() {
    console.log("Android click");
    document.getElementById("mainImg").src="images/Android-Logo.jpg";
    document.getElementById("link1").innerHTML="Android Home";
    document.getElementById("link1").style.backgroundColor="#a4c93b";
    document.getElementById("link1").href="https://www.android.com/";
    document.body.style.backgroundColor="#a4c93b";

}


function setApple() {
    console.log("Apple click");
    document.getElementById("mainImg").src="images/Apple-Logo.jpg";
    document.getElementById("link1").innerHTML="Apple Home";
    document.getElementById("link1").style.backgroundColor="#b6bcca";
    document.getElementById("link1").href="https://www.apple.com/";
    document.body.style.backgroundColor="#b6bcca";

}