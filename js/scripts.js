
$('#change').click(function(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    $('body').css("background",randomColor);
});
$('#24').click(function(){
    $('.card').css("max-width","24rem");
    $('#currsize').text("24 rem");
    $('textarea').css("width","20rem");
});
$('#28').click(function(){
    $('.card').css("max-width","28rem");
    $('#currsize').text("28 rem");
    $('textarea').css("width","24rem");
});
$('#32').click(function(){
    $('.card').css("max-width","32rem");
    $('#currsize').text("32 rem");
    $('textarea').css("width","28rem");
});
$('#44').click(function(){
    $('.card').css("max-width","44rem");
    $('#currsize').text("44 rem");
    $('textarea').css("width","40rem");
});
$('#reset').click(function(){
    $('input').val("");
    $('textarea').val("");
});

$('#save').click(function(){
    var h1=$('#heading').val();
    var txt=$('#text').val();
    $('input').val("");
    $('textarea').val("");
    
    $('#saved').append('<div class="card border-success text-black" style="max-width: 24rem;">\
    <div class="card-header bg-warning">\
        <div id="saved1heading">'+h1+'</div>\
    </div>\
    <div class="card-body">\
        <div id="saved1text">'+txt+'</div>\
    </div>\
    <button type="submit" class="btn btn-danger text-white" id="edit">Edit</button>\
    </div>')
});
