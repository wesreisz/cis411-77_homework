

(function($) {
    var thisUser = 'userX';
    var boxes = $('.box');
    var mark;
    var winnerWinner = false;
    var count = 0;

    $('#reset').on('click', function(){
        boxes.removeClass('markX markO');
        thisUser = 'userX';
        $('#player_name').html('Player 1 (X) goes first!');
        winnerWinner = false;
        $("#button").text("");
        count = 0;
    });
    
    $('.box').on('click', function() {
        $thisBox = $(this);
        if (isEmpty($thisBox) && winnerWinner === false)
        {
            if(markBoxForUser($thisBox))
            {
                ifChickenDinner();
            }
        }
    
    });

    function markBoxForUser(box) {
        mark = thisUser === 'userX' ? 'markX' : 'markO';
        //box.html(mark);
        box.addClass(mark);
        count = count + 1;
        return true;        
    }

    function isEmpty(box) {
        if (box.hasClass('markX') || box.hasClass('markO')) {
            return false;
        }
        return true;
    }

    function endUserTurn() {
        //thisUser = thisUser === 'userX' ? 'userO' : 'userX';
        if (thisUser === 'userX') {
            thisUser = 'userO';
            $('#player_name').html('Player 2 (O) GO!!');
        }
        else {
            thisUser = 'userX';
            document.getElementById('player_name').innerHTML = 'Player 1 (X) GO!!';
        }
    }

    //check for winner
    function ifChickenDinner() {
        //check row 1
        if ($('#box1_1').hasClass(mark) &&
            $('#box1_2').hasClass(mark) &&
            $('#box1_3').hasClass(mark)) {
            grats();
            winnerWinner = true;
            return;
        }
        //check row 2
        else if($('#box2_1').hasClass(mark) &&
            $('#box2_2').hasClass(mark) &&
            $('#box2_3').hasClass(mark)) {
            grats();
            winnerWinner = true;
            return;
        }
        //check row 3
        else if($('#box3_1').hasClass(mark) &&
            $('#box3_2').hasClass(mark) &&
            $('#box3_3').hasClass(mark)){
            grats();
            winnerWinner = true;
            return;
        }
        //check column 1
        else if($('#box1_1').hasClass(mark) &&
            $('#box2_1').hasClass(mark) &&
            $('#box3_1').hasClass(mark)){
            grats();
            winnerWinner = true;
            return;
        }
        //check column 2
        else if($('#box1_2').hasClass(mark) &&
            $('#box2_2').hasClass(mark) &&
            $('#box3_2').hasClass(mark)){
            grats();
            winnerWinner = true;
            return;
        }
        //check column 3
        else if($('#box1_3').hasClass(mark) &&
            $('#box2_3').hasClass(mark) &&
            $('#box3_3').hasClass(mark)){
            grats();
            winnerWinner = true;
            return;
        }
        //check diaganol 1
        else if($('#box1_1').hasClass(mark) &&
            $('#box2_2').hasClass(mark) &&
            $('#box3_3').hasClass(mark)){
            grats();
            winnerWinner = true;
            return;
        }
        //check diaganol 1
        else if ($('#box3_1').hasClass(mark) &&
            $('#box2_2').hasClass(mark) &&
            $('#box1_3').hasClass(mark)) {
            grats();
            winnerWinner = true;
            return;
        }
        //check to see if grid is full
        else if(count === 9){
            $("#button").text('OMG a DRAW!!');
            winnerWinner = true;
        }

        else {
            endUserTurn();
        }
        

    }

    //give the winner their chicken dinner
    function grats() {
        var gratsMessage;
        switch (mark) {
            case 'markX':
                gratsMessage = 'X WINS! Congratulations';
                break;
            default:
                gratsMessage = 'O WINS! Congratulations';
        }
        $("#button").text(gratsMessage);

    }

})(jQuery)