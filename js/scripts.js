var num=0;
function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
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
    var h1=htmlEntities($('#heading').val());
    var txt=htmlEntities($('#text').val());
    $('#message').empty();
    if(h1.length==0){
        $('#message').append("Please add a heading");
        $('#message').css("color","red");
        return;
    }
    if(txt.length==0){
        $('#message').append("Notes Empty");
        $('#message').css("color","red");
        return;
    }
    $('#message').append("Note added");
    $('#message').css("color","green");
    $('input').val("");
    $('textarea').val("");

    $('#saved').append('<div class="card border-success text-black mx-5 my-5" style="width: auto; height: auto;">\
    <div class="card-header bg-warning">\
        <div id="saved'+num+'heading">'+h1+'</div>\
    </div>\
    <div class="card-body">\
        <div id="saved'+num+'text" class="mb-3">'+txt+'</div>\
        <button class="btn btn-primary text-white edit">Edit</button>\
        <button class="btn btn-danger text-white delete">Delete</button>\
    </div>\
    </div>');
    num++;
    addListenerDeleteButton('.delete');
    addListenerEditButton('.edit');
});
function addListenerDeleteButton(deleteButton) {
    $(deleteButton).click(function () { 
        $(this).parent().parent().remove();
        $('#message').empty();
        $('#message').append("Note Deleted");
        $('#message').css("color","red");
    });
}
function addListenerEditButton(editButton) {
    $(editButton).click(function () {
        $('#message').empty();
        $('#heading').val($(this).parent().parent().children('.card-header').children('div').text());
        $('#text').val($(this).parent().parent().children('.card-body').children('div').text());
        $(this).parent().parent().remove();
    });
}
  

