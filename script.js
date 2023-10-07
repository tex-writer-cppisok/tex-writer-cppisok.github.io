document.onload = function(){
    document.getElementById('result').innerHTML = document.cookie.substring(5);
}

function create(){
    document.getElementById('result').innerHTML = document.getElementById('txt').value;
    MathJax.typeset();
}

function save(){
    document.cookie = "text="+document.getElementById('txt').value+"; max-age="+String(7*24*3600);
}

