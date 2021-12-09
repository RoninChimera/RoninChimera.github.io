const player1 = document.querySelector('#player-one');
const player2 = document.querySelector('#player-two');
const reset = document.querySelector('#reset');

const score1 = document.querySelector('.score1');
const score2 = document.querySelector('.score2');
const select = document.querySelector('select');

let games = select.value;
let num1 = 0;
let num2 = 0;
let win = 2; 
const win5 = 3;
const win7 = 4;

function resetButton() {
    score1.innerText = 0;
    score2.innerText = 0;
    num1 = 0;
    num2 = 0;
    player1.disabled = false;
    player2.disabled = false;
    score1.classList.remove('win-green');
    score1.classList.remove('lose-red');
    score2.classList.remove('win-green');
    score2.classList.remove('lose-red');
    //select.value = "3"
}

select.addEventListener('change', function(e){
    //can use "this" in this situation instead of line below  ==> this.value instead of e.target.value
    games = e.target.value;
    if (games ==="5"){
        win = win5;
    }
    else if(games ==="7"){
        win = win7;
    }
    else{win = 2}
    console.log(`changed to ${games}`)
    resetButton();
})

player1.addEventListener('click', function(e) {
            num1++;
            score1.innerText = num1;
            if (num1 === win){
                console.log('win');
                player1.disabled = true;
                player2.disabled = true;
                score1.classList.toggle('win-green'); //could try bulma color in here instead ==> score1.classList.add('has-text-success')
                score2.classList.toggle('lose-red');  // score2.classList.add('has-text-danger')
            }
        })

player2.addEventListener('click', function(e) {
            num2++;
            score2.innerText = num2;
            if (num2 === win){
                console.log('win');
                player1.disabled = true;
                player2.disabled = true;
                score1.classList.toggle('lose-red'); 
                score2.classList.toggle('win-green');
            }
        })

    // if (games === "3"){
    //     num1=0;
    //     num2=0;
    //     player1.addEventListener('click', function(e) {
    //         num1++;
    //         score1.innerText = num1;
    //         if (num1 === win){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('win-green');
    //             score2.classList.toggle('lose-red');
    //         }
    //     })
        
    //     player2.addEventListener('click', function(e) {
    //         num2++;
    //         score2.innerText = num2;
    //         if (num2 === win){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('lose-red');
    //             score2.classList.toggle('win-green');
    //         }
    //     })
        
    // }
    // // for 5 games
    // else if (games === "5"){
    //     num1=0;
    //     num2=0;
        
    //     player1.addEventListener('click', function(e) {
    //         num1++;
    //         score1.innerText = num1;
    //         if (num1 === win5){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('win-green');
    //             score2.classList.toggle('lose-red');
    //         }
    //     })
        
    //     player2.addEventListener('click', function(e) {
    //         num2++;
    //         score2.innerText = num2;
    //         if (num2 === win5){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('lose-red');
    //             score2.classList.toggle('win-green');
    //         }
    //     })
        
    // }
    
    // else if (games === "7"){
    //     num1=0;
    //     num2=0;
    //     player1.addEventListener('click', function(e) {
    //         num1++;
    //         score1.innerText = num1;
    //         if (num1 === win7){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('win-green');
    //             score2.classList.toggle('lose-red');
    //         }
    //     })
        
    //     player2.addEventListener('click', function(e) {
    //         num2++;
    //         score2.innerText = num2;
    //         if (num2 === win7){
    //             console.log('win');
    //             player1.disabled = true;
    //             player2.disabled = true;
    //             score1.classList.toggle('lose-red');
    //             score2.classList.toggle('win-green');
    //         }
    //     })
        
   // }


    reset.addEventListener('click', resetButton)


    




// player1.addEventListener('click', function(e) {
//     num1++;
//     score1.innerText = num1;
// })

// player2.addEventListener('click', function(e) {
//     num2++;
//     score2.innerText = num2;
// })
// reset.addEventListener('click', function(e) {
//     score1.innerText = 0;
//     score2.innerText = 0;
//     num1 = 0;
//     num2 = 0;
//     player1.disabled = false;
//     player2.disabled = false;
//     score1.classList.remove('win-green');
//     score1.classList.remove('lose-red');
//     score2.classList.remove('win-green');
//     score2.classList.remove('lose-red');
//     select.value = "0"
// })