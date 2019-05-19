$( document ).ready(function() {
    var Random= Math.floor(Math.random()*101+19)

    $('#randomNumber').text(Random);

    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var userTotal= 0;
    var wins= 0;
    var losses= 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset() {
        Random= Math.floor(Math.random()*101+19);
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#userNumber').text(userTotal)

    }

    function congrats() {
        wins++
        $('#wins').text(wins);
        reset();
    }

    function loser(){
        losses++;
        $('#losses').text(losses);
        reset()
    }


    $('#mindStone').on ('click', function(){
        userTotal = userTotal + num1;
        console.log("New userTotal= "+ userTotal)
        $('#userNumber').text(userTotal);

        if (userTotal == Random) {
            congrats();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#powerStone').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal= "+ userTotal)
        $('#userNumber').text(userTotal);

        if (userTotal == Random) {
            congrats();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#realityStone').on ('click', function(){
        userTotal = userTotal + num3;
        console.log("New userTotal= "+ userTotal)
        $('#userNumber').text(userTotal);

        if (userTotal == Random) {
            congrats();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
    $('#timeStone').on ('click', function(){
        userTotal = userTotal + num4;
        console.log("New userTotal= "+ userTotal)
        $('#userNumber').text(userTotal);

        if (userTotal === Random) {
            congrats();
        }
        else if (userTotal > Random) {
            loser();
        }
    })
})