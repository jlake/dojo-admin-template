define([
	'require',
	'dojo/ready',
	'dijit/registry'
], function(require, ready, registry){
	
	var app = {};
	
	ready(function(){
		console.log('loaded! baseUrl=' + dojoConfig.baseUrl);
		app.login({
			url: dojoConfig.baseUrl + '/api/login',
			onSuccess: function(response){
				console.log(response.message);
				this.onExecute(); // Hide dialog.
				//app.alert('You are successfully logged in!');
				location.href = dojoConfig.baseUrl + '/main.php';
			},
			onFailure: function(response){
				console.log(response.message);
				app.alert('Invalid login or password!');
			}
		});
	});
	
	/**
	 * Display alert dialog.
	 */
	app.alert = function(message){
		require(['dijit/Dialog'], function(Dialog){
			var dialog = new Dialog({ title: 'Alert', content: message });
			dialog.show();
		});
	};
	
	/**
	 * Display login dialog.
	 */
	app.login = function(options){
		require(['app/views/LoginView'], function(Dialog){
			var dialog = new Dialog(options);
			dialog.show();
		});
	};
	
	return app;
});