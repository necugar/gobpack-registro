
function LoginValidator(){

// bind a simple alert window to this controller to display any errors //

	this.loginErrors = $('.modal-alert');
	this.loginErrors.modal({ show : false, keyboard : true, backdrop : true });

	this.showLoginError = function(t, m)
	{
		$('.modal-alert .modal-header h3').text(t);
		$('.modal-alert .modal-body p').text(m);
		this.loginErrors.modal('show');
	}

}

LoginValidator.prototype.validateForm = function()
{
	if ($('#user-tf').val() == ''){
		this.showLoginError('Aviso!', 'Porfavor ingresa un nombre de ususario válido');
		return false;
	}	else if ($('#pass-tf').val() == ''){
		this.showLoginError('Aviso!', 'Porfavor ingresa un password válido');
		return false;
	}	else{
		return true;
	}
}