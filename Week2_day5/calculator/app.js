
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function compute() {
    var expression = document.getElementById("result").value;
    var resultval = eval(expression);
    document.getElementById("result").value = resultval;
}
function clearScr() {
    //console.log()
    let res=" ";
    document.getElementById("result").value=res;
    
}
