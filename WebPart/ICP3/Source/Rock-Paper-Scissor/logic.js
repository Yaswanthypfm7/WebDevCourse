//Defined Rock , Paper & Scissor '

let words = ['Rock', 'Paper', 'Scissors'];

//Logic starts for the game Rock,Paper ,Scissor

function gamecode(value) {

    //Logic for Random code generator

    var cnumber = Math.floor(Math.random() * words.length);
    var computervalue = words[cnumber];
    alert("User value is " + words[value])
    alert("Computer value is " + words[cnumber]);
    if (value < cnumber) {
        if (cnumber == 2 && value == 0) {
            return alert('You Win');
        }
        else {
            return alert('Computer win');
        }
    }
    else if (value > cnumber) {
        if (value == 2 && cnumber == 0) {
            return alert('Computer win');
        }
        else {
            return alert('You Win');
        }
    }
    else {
        return alert('Its a Tie');
    }
}
//Logic end for Rock,Paper,Scissor