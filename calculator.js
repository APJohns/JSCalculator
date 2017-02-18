var display;

function calc(input) {

    if (display == null) {
        display = "";
    }

    if (input == "=") {
        display = eval(display);
    } else if(input == "ce") {
        display = "";
    } else {
        display += input.toString();
    }


    document.getElementById("screen").innerHTML = display;
}