var player1 = "",
    player2 = "";
const getname = () => {
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;
    if (player1 === "" || player2 === "") {
        alert("Please enter player names before starting !!");
    } else {
        document.getElementById('main').style.display = 'block';
        document.getElementById('main').style.backgroundImage = "url(images/mainImage.jpg)";

        document.getElementById('modal').style.display = 'none';
        document.getElementById('text').style.display = 'none';
        setPlayField(player1, player2);
    }

}

function setPlayField(p1, p2) {
    var x = "";
    document.getElementById('pl1').innerHTML = p1;
    document.getElementById('pl2').innerHTML = p2;

    var x = p1 + ' gets X and ' + p2 + ' gets 0';
    document.getElementById('setOptions').innerHTML = x;
}

var list = []
var i = 1;
var opt = "";
const winningMoves = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function tick(id) {

    if (i % 2 !== 0) {
        opt = "X";
    } else {
        opt = "O";
    }
    i++;
    document.getElementById(id).innerHTML = opt;
    // var x = {
    //     col: id,
    //     id: opt
    // };


    // list.push(x);
    var winner = "";
    for (var j = 0; j < winningMoves.length; j++) {
        let move = winningMoves[j];
        let a = move[0];
        let b = move[1];
        let c = move[2];
        if (document.getElementById(a).innerHTML === opt && document.getElementById(b).innerHTML === opt && document.getElementById(c).innerHTML === opt) {
            console.log("Winner " + opt);
            if (opt == 'X')
                winner = player1 + " wins !!";
            else
                winner = player2 + " wins!!";
            document.getElementById('main').style.opacity = 0.5;
            document.getElementById('modal').style.display = 'none';
            document.getElementById('text').style.display = 'none';
            document.getElementById('pop-up').style.display = 'block';
            document.getElementById("winnername").innerHTML = winner;
        }
    }
    console.log(list);
}

function cancelpopup() {
    document.getElementById('pop-up').style.display = 'none';
    document.getElementById('main').style.opacity = 1;

}

function replay() {
    location.reload();
}