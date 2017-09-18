$(document).ready(function(){
    $('#skritiy_text').click(function(){
            if($('.yes').css("display")=="block"){
                $('.yes').css("display", "none");
                $('.no').css("display", "block")
            }
            else{
                $('.yes').css("display", "block");
                $('.no').css("display", "none")
            }
    });
/*
        $('#bymaga').mouseover(function() {
            $('#img1').css('background-position','0 -73px');
        });
        $('#bymaga').mouseout(function(){
            $('#img1').css('background-position','0 0');
        });
        $('#sprei').mouseover(function(){
            $('#img2').css('background-position','-123px 0');
        });
        $('#sprei').mouseout(function(){
            $('#img2').css('background-position','-78px 0');
        });
        $('#gloves').mouseover(function(){
            $('#img3').css('background-position','-152px -82px');
        });
        $('#gloves').mouseout(function(){
            $('#img3').css('background-position','-78px -82px');
        });
        $('#metla').mouseover(function(){
            $('#img4').css('background-position','-232px 1px');
        });
        $('#metla').mouseout(function(){
            $('#img4').css('background-position','-168px 1px');
        }); 
*/


    var bsgm = ['#bymaga', '#sprei', '#gloves', '#metla']
    var images = ['#img1', '#img2', '#img3', '#img4']
    var position = ['0 -73px', '-123px 0', '-152px -82px','-232px 1px']
    var position2 = ['0 0', '-78px 0', '-78px -82px','-168px 1px']
    $('.block').each(function(i , value){
        $(bsgm[value]).hover(function(i, value){
            $(images[value]).css('background-position', position[value]);
            },function () {
            $(images[value]).css('background-position', position2[value]);
            });
    });
});
