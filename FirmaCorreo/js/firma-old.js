
    $(document).ready(function(){        
      $('#myModal').modal({backdrop: 'static', keyboard: true})  
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
		$("#phone").ForceNumericOnly();
    $("#celphone").ForceNumericOnly();

		$("#nameError").hide();
		$("#phoneError").hide();
		$("#mailError").hide();
		$("#celphoneError").hide();

    $('#lastNameError').hide();
    $('#html-c').hide();
    $(".btn-copy, .btn-copy2").hide();

		var nameErrorMessage = false;
		var mailErrorMessage = false;
		var phoneErrorMessage = false;
		var celphoneErrorMessage = false;
    var lastName = false;

		$('#confirm').click(function(){
			var playerName = $('#name').val();
			var playerMail = $('#mail').val();
			var playerPhone = $('#phone').val();
			var playerCelPhone = $('#celphone').val();
      var playerlastName = $('#lastName').val();

			var name = $("#name").val();
			var mail = $("#mail").val();
			var phone = $("#phone").val();
			var celphone = $("#celphone").val();
      var lastName = $("#lastName").val();


      var codigo = $('#table').html();

			if(name ==""){
				$("#nameError").html("Información requerida");
				$("#nameError").show();
			} else{
				$("#nameError").hide();
		      	$(".textOutput").html(playerName);
		      	nameErrorMessage = true;
			}

			if(mail ==""){
				$("#mailError").html("Información requerida");
				$("#mailError").show();
			} else{
				$("#mailError").hide();
				$(".textOutput2").html(playerMail);
				mailErrorMessage = true;
			}

			if(phone ==""){
				$("#phoneError").html("Información requerida");
				$("#phoneError").show();
			} else{
				$("#phoneError").hide();
				$(".textOutput3").html(playerPhone);
				phoneErrorMessage = true;

			}

			if(celphone ==""){
				$("#option").hide()
			} else{
				$(".textOutput4").html(playerCelPhone);
			}

      if(lastName ==""){
        $("#lastNameError").html("Información requerida");
        $("#lastNameError").show();
      } else{
        $("#lastNameError").hide();
        $(".textOutputLN").html(playerlastName);
        celphoneErrorMessage = true;

      }

      if(mail != "" && phone != ""  && name != "" && lastName != "")
      {
        $('#html-c').show();
        $("#red").empty();
        $("#red").html(codigo);
        $(".btn-copy, .btn-copy2").show();
      }

		});
	});

  var clipboard = new Clipboard('.btn-copy', {
      target: function() {
          return document.querySelector('#table');
      }
  });

  var clipboard = new Clipboard('.btn-copy2', {
      target: function() {
          return document.querySelector('#red');
      }
  });

  clipboard.on('success', function(e) {
      console.log(e);
  });

  clipboard.on('error', function(e) {
      console.log(e);
  });