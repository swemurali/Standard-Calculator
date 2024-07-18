    function f(val) {
        document.getElementById('t1').value += val;
    }

    function clr() {
        document.getElementById('t1').value = "";
    }

    function op(event) {
        if (event.key == '7' || event.key == '8' || event.key == '9' || event.key == '+' || event.key == '+/-' || event.key == '4' ||
            event.key == '5' || event.key == '6' || event.key == '*' || event.key == '^0.5' || event.key == '1' ||
            event.key == '2' || event.key == '3' || event.key == '-' || event.key == '/' || event.key == '0' || event.key == '.') {
            document.getElementById('t1').value += event.key;
        }
    }

    var cal = document.getElementById('calc');
    cal.onkeyup = function (event) {
        if (event.keyCode == 13) {
            console.log("Enter");
            solve();
        }
    }

    function solve() {
        let x = document.getElementById('t1').value;
        let y = math.evaluate(x); // Assuming you have included the math.js library
        document.getElementById('t1').value = y;
    }
