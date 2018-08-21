let proposition = window.confirm('Do you want to play a game?');
if (proposition === false) {
    alert('You did not become a millionaire, but can.');
} else {
    timeToPlay();
}

function timeToPlay() {
    let firstAtt = 10;
    let secondAtt = firstAtt / 2;
    let thirdAtt = Math.floor(secondAtt / 2);
    const prize = [firstAtt, secondAtt, thirdAtt];
    let totalPrize = 0;
    let renge = 5;
    const maxRenge = renge++;
    let rendNamber = Math.floor(Math.random() * maxRenge);
    for (let times = 0; times < 3; times++) {
        let yourNamber = +prompt(`Enter a number from 0 to ${maxRenge}
                                Attempts left: ${3 - times}
                                Total prize: ${totalPrize}$
                                Possible prize on current attempt: ${prize[times]}$`);
        if (rendNamber === yourNamber) {
            totalPrize = totalPrize + prize[times];
            alert(`Congratulation! Your prize is ${totalPrize}$`);
            if (confirm('Do you want to play a game again?')) {
                firstAtt = firstAtt * 3;
                secondAtt = firstAtt / 2;
                thirdAtt = Math.floor(secondAtt / 2);
                const prize = [firstAtt, secondAtt, thirdAtt];
                let renge = 10;
                let maxRenge = renge++;
                rendNamber = Math.floor(Math.random() * maxRenge);
                for (let times = 0; times < 3; times++) {
                    let yourNamber = +prompt(`Enter a number from 0 to ${maxRenge}
                                Attempts left: ${3 - times}
                                Total prize: ${totalPrize}$
                                Possible prize on current attempt: ${prize[times]}$`);
                    if (rendNamber === yourNamber) {
                        totalPrize = totalPrize + prize[times];
                        alert(`Congratulation! Your prize is ${totalPrize}$`);
                    }
                }
            } else {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
                break;
            }
        }
    }
}