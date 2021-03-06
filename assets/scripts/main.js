
(function($){
    $('.tooltip').tooltipster({contentAsHTML: true,theme: 'tooltipster-noir', interactive: true});
    $('#more-editals').on('click', function(e) {
        e.preventDefault();
        $('#more-editals-list').modal();
    });
    $('#frm-edital').validate({

        submitHandler: function(form) {

            var data = {
                'action'        : 'quijauaeditais_save_edital',
                'title'         : $('#title').val(),
                'edt_organization'      : $('#edt_organization').val(),
                'edt_period'     : $('#edt_period').val(),
                'edt_link'      : $('#edt_link').val(),
            };

            $.ajax({
                type: "POST",
                url: quijauaeditais_ajax.ajax_url,
                data :data,
                dataType : 'json',
            })
                .done(function(response) {
                    if(1 === response.status) {
                        swal("Sucesso", "edital enviado com sucesso. Aguarde moderação!", "success")
                        $('#frm-edital')[0].reset();
                        return;
                    }
                    swal("Oops...", "Ocorreu um erro ao enviar o edital. Por favor, tente novamente.", "error");
                    return;
                });
        }


    });

    $('#edt_period').mask('99/99/9999 - 99/99/9999');
})(jQuery);