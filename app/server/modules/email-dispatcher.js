
var ES = require('./email-settings');
var EM = {};
module.exports = EM;

EM.server = require("emailjs/email").server.connect({

	host 	    : ES.host,
	user 	    : ES.user,
	password    : ES.password,
	ssl		    : true

});

EM.dispatchResetPasswordLink = function(account, callback)
{
	EM.server.send({
		from         : ES.sender,
		to           : account.email,
		subject      : 'Restablecimiento de contraseña',
		text         : 'algo salió mal... :(',
		attachment   : EM.composeEmail(account)
	}, callback );
}

EM.composeEmail = function(o)
{
	var link = 'http://integ.pe/reset-password?e='+o.email+'&p='+o.pass;
	var html = "<html><body>";
		html += "Hi "+o.name+",<br><br>";
		html += "Tu nombre de usuario es :: <b>"+o.user+"</b><br><br>";
		html += "<a href='"+link+"'>Haga clic aquí para restablecer su contraseña</a><br><br>";
		html += "Cheers,<br>";
		html += "<a href='http://twitter.com/necugar'>necugar</a><br><br>";
		html += "</body></html>";
	return  [{data:html, alternative:true}];
}