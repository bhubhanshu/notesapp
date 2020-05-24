
$('#changebgc').click(function(){
    
});
$('#start').click(function(){
    $('body').empty();
    $('body').css("background","black");
    $('body').prepend('<div class="container-fluid"><div class="row justify-content-end">\
    <button type="button" class="btn btn-warning" id="changebgc">Change Background Colour</button>\
    </div></div>');
});
