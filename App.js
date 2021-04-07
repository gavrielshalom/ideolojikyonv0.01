var numRight = 0;
var numWrong = 0;

function getResult(){
    var text = document.getElementById("resultText");
    var text2 = document.getElementById("devletText");
    $("button[id='right1']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong1']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right2']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong2']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right3']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong3']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right4']").click(function(){
        numWrong++;
        text.innerText = 'Devletçi puanı: ' + numWrong;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong4']" ).click(function(){
        numRight++;
        $(this).css( "background-color","red" );
        console.log("Kapitalizm puanı: " + numRight);
        text2.innerText = 'Kapitalizm puanı: ' + numWrong;
    });
    $("button[id='right5']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong5']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right6']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong6']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right7']").click(function(){
        numWrong++;
        text.innerText = 'Devletçi puanı: ' + numWrong;
        $(this).css( "background-color","green" );
        console.log(numWrong);
    });
    $( "button[id='wrong7']" ).click(function(){
        numRight++;
        $(this).css( "background-color","red" );
        console.log("Kapitalizm puanı: " + numRight);
        text2.innerText = 'Devletçi puanı: ' + numRight;
    });
    $("button[id='right8']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong8']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right9']").click(function(){
        numWrong++;
        text.innerText = 'Devletçi puanı: ' + numWrong;
        $(this).css( "background-color","green" );
        console.log(numWrong);
    });
    $( "button[id='wrong9']" ).click(function(){
        numRight++;
        $(this).css( "background-color","red" );
        console.log("Kapitalizm: " + numRight);
        text2.innerText = 'Kapitalizm puanı: ' + numWrong;
    });
    $("button[id='right10']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
        
    });
    $( "button[id='wrong10']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right11']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong11']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right12']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
        
    });
    $( "button[id='wrong12']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right13']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $( "button[id='wrong13']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right14']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong14']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right15']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong15']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right16']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
        
    });
    $( "button[id='wrong16']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right17']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
        
    });
    $( "button[id='wrong17']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right18']").click(function(){
        numWrong++;
        $(this).css( "background-color","green" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
        
    });
    $( "button[id='wrong18']" ).click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","red" );
        console.log(numRight);
    });
    $("button[id='right19']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong19']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    $("button[id='right20']").click(function(){
        numRight++;
        text.innerText = 'Kapitalizm puanı: ' + numRight;
        $(this).css( "background-color","green" );
        console.log(numRight);
    });
    $( "button[id='wrong20']" ).click(function(){
        numWrong++;
        $(this).css( "background-color","red" );
        console.log("Devletçi puanı: " + numWrong);
        text2.innerText = 'Devletçi puanı: ' + numWrong;
    });
    
}