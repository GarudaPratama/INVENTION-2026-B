$(document).ready(function () {

    $('#navbar').load('./Navigasi/navbar.html', function() {
        
        $(this).find('img').attr('src', '../Navigasi/Logo (9).png');
    });
    
})