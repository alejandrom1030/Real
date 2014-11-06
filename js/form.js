$(formulario).bootstrap3Validate(function(e, data) { 
    e.preventDefault();

    var self = $(this);

    $('.process', self).show();
    $("[type='submit']", self).hide();
    $(".alert-danger", self).hide();

    $.ajax({
        url: self.attr('action'),
        data: data,
        type: self.attr('method'),
    })
    .done(function() {
        self[0].reset(); // Clear form
    })
    .fail(function() {
        $('.alert-danger', self).text('Error!').show();
    })
    .always(function() {
        $('.process', self).hide();
        $("[type='submit']", self).show();
    });
})