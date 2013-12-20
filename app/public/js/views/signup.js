
$(document).ready(function(){
	
	var av = new AccountValidator();
	var sc = new SignupController();
	
	$('#account-form').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			return av.validateForm();
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success') $('.modal-alert').modal('show');
		},
		error : function(e){
			if (e.responseText == 'email-taken'){
			    av.showInvalidEmail();
			}	else if (e.responseText == 'username-taken'){
			    av.showInvalidUserName();
			}
		}
	});
	$('#name-tf').focus();
	
// customize the account signup form //
	
	$('#account-form h1').text('Ficha de registro electrónico');
	$('#account-form #sub1').text('Por favor, ingresa la informacion solicitada ');
	$('#account-form #sub2').text('Elija un nombre de usuario y una contraseña');
	$('#account-form-btn1').html('Cancelar');
	$('#account-form-btn2').html('Enviar');
	$('#account-form-btn2').addClass('btn-primary');
	
// setup the alert that displays when an account is successfully created //

	$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
	$('.modal-alert .modal-header h3').text('Registro exitoso!');
	$('.modal-alert .modal-body p').html('Su cuenta ha sido creada. </br> Haga clic en Aceptar para volver a la página de inicio de sesión.');

})