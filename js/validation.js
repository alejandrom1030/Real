$(document).ready(function() {

    


    //validator

     $('#formulario').validate({
        rules: {
            nombre: {
                minlength: 4,
                required: true,
                

            },
            correo: {
                    required: true,
                    email: true
                },

            mensaje: {
                required:true,
                minlength: 21
            }, 
            numero:{
                required:true,
                number:true,
                minlength:8
            },
            company:{
                minlength:4,

            }
            

        },

        messages:{
            nombre:{
                minlength:"Tu nombre debe tener al menos 4 letras.",
                required:"Necesitamos saber tu nombre."
            },
            correo:{
                required:"Necesitamos tu correo para contactarte.",
                email:"Ese no es un email, ingresa uno válido."
            },
            mensaje:{
                required:"Es necesario que nos cuentes de tu proyecto.",
                minlength:"Cuentanos un poquito más."
            },
            numero:{
                required:"Necesitamos tu número para contactarte.",
                number:"Ese no es un número telefónico, ingresa uno válido.",

            },
            company:{
                minlength:"Tu compañía debe tener al menos 4 letras."
            }


        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });


     $('#formulario').bind('change keyup', function() {
    if($(this).validate().checkForm()) {
        $('#submitbutton').removeClass('button_disabled').attr('disabled', false);
    } else {
        $('#submitbutton').addClass('button_disabled').attr('disabled', true);
    }
});
});