
    $(document).ready(function(){
      //$('#myModal').modal({backdrop: 'static', keyboard: true})
      $('[data-toggle="tooltip"]').tooltip();



      $('.next').click(function(){
        var nextId = $(this).parents('.tab-pane').next().attr("id");
        $('[href=#'+nextId+']').tab('show');
        return false;
      })


      $('.first').click(function(){

      $('#myWizard a:first').tab('show')

      })

    });

	$(function (){

		jQuery.fn.ForceNumericOnly =
		    function() {
		        return this.each(function() {
		            $(this).keydown(function(e) {
		                var key = e.charCode || e.keyCode || 0;
		                // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
		                // home, end, period, and numpad decimal
		                return (
		                    key == 8 ||
		                    key == 9 ||
		                    key == 13 ||
		                    key == 46 ||
		                    key == 110 ||
		                    key == 190 ||
		                    (key >= 35 && key <= 40) ||
		                    (key >= 48 && key <= 57) ||
		                    (key >= 96 && key <= 105));
		            });
		        });
		    };

    	$('[data-toggle="tooltip"]').tooltip();       	
    	$("#fixedPhone").ForceNumericOnly();
		$("#phone").ForceNumericOnly();
    	$("#celphone").ForceNumericOnly();

		$("#nameError").hide();
		$('#lastNameError').hide();
		$("#mailError").hide();
		$("#fixedPhoneError").hide();file:///Users/Interfactura/Desktop/Github-Pruebas/FirmaIF/FirmaCorreo/firmaCorreoJuno.html#
		$("#phoneError").hide();
		$("#celphoneError").hide();


	    $('#html-c').hide();
	    $(".btn-copy, .btn-copy2").hide();
	    $(".btn-copy").hide();
	    $(".btn-copy4").hide();

		var nameErrorMessage = false;
		var lastName = false;
		var mailErrorMessage = false;
		var fixedPhoneError = false;
		var phoneErrorMessage = false;
		var celphoneErrorMessage = false;

	});


	  //DISPARAR Validación

		$("#multiplePhoneError").hide();

		var multiplePhone = $('input[name="fixed"]');



			$('#confirm').click(function(){
				/*var playerName = $('#name').val();
				var playerMail = $('#mail').val();
				var playerPhone = $('#phone').val();
				var playerCelPhone = $('#celphone').val();
	      		var playerlastName = $('#lastName').val();*/

				var name = $("#name").val();
				var lastName = $("#lastName").val();
				var fixedPhone = $("#fixedPhone").val();
				var phone = $("#phone").val();
				var celphone = $("#celphone").val();
				var mail = $("#mail").val();




				if(name ==""){
					$("#nameError").html("Información requerida");
					$("#nameError").show();
				} else{
					$("#nameError").hide();
			      	$(".textOutput").html(name);
			      	nameErrorMessage = true;
				}

				if(lastName ==""){
				  $("#lastNameError").html("Información requerida");
				  $("#lastNameError").show();
				} else{
				  $("#lastNameError").hide();
				  $(".textOutputLN").html(lastName);
				  celphoneErrorMessage = true;
				}

				if(mail ==""){
					$("#mailError").html("Información requerida");
					$("#mailError").show();
				} else{
					$("#mailError").hide();
					$(".textOutput2").html(mail);
					mailErrorMessage = true;
				}

				if(fixedPhone ==""){
					$("#fixedPhoneError").html("Información requerida");
					$("#fixedPhoneError").show();
				} else{
					$("#fixedPhoneError").hide();
					$(".textOutputFXP").html(fixedPhone);
					phoneErrorMessage = true;
				}




				if(phone ==""){
					$("#phoneError").html("Información requerida");
					$("#phoneError").show();
				} else{
					$("#phoneError").hide();
					$(".textOutput3").html(phone);
					phoneErrorMessage = true;
				}



				if(celphone ==""){
					$("#option").hide()
				}else{
						$("#option").show()
						$(".textOutput4").html(celphone);
				}

				if($('input[name="fixed"]').is(':checked')) {
				  $("#multiplePhoneError").hide();
				}

				else{
				  $("#multiplePhoneError").show();
				  $("#multiplePhoneError").html("Selecciona un teléfono fijo");
				}




				if(name != "" && lastName != "" && mail != "" && fixedPhone != "" && phone != "")
				{

					$('#html-c').show();
					$(".btn-copy, .btn-copy2, .btn-copy4").show();
					
					var codigo = $('#table').html();
					$("#red").html(codigo);
				}


			});



  //AGREGAR TELEFONO  AL SELECCIONAR RADIO

	$(multiplePhone).on('change', function(){
	    if ($(this).val()=='MTY') {
	         //change to "show update"
	         $(".textOutputFXP2").text("(81) 4777-1100");
	    }

	    if ($(this).val()=='CDMX1') {
	         //change to "show update"
	         $(".textOutputFXP2").text("(55) 4777-1100");
	    }

	    if ($(this).val()=='CDMX2') {
	         //change to "show update"
	         $(".textOutputFXP2").text("(55) 6236-8700");
	    }

	    $("#multiplePhoneError").hide();
	});
