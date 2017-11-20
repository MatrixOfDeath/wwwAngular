'use strict';
angular.module('app').service('User', function() {

	this.construct			= function() {
		this.id 				= -1;
		this.nom				= null;
		this.prenom				= null;
		this.email				= null;
		this.isConnected 		= false;
	}

	this.flush 				= function() { localStorage.removeItem('User'); }
	this.save 				= function() { localStorage.setItem('User', JSON.stringify(this)); }

	this.loadFromSave		= function() {
		var UserString = localStorage.getItem('User');
		if (UserString){
			var User = JSON.parse(localStorage.getItem('User'));
			for (var property in User){
				this[property] = User[property];
			}
		} else { this.construct(); }
	}

	this.loadFromResponse	= function(object){
		for (var property in object){ this[property] = object[property]; }	
		if(this.id > 0){ this.isConnected = true; }
		this.save();
	}

	this.construct();
	this.loadFromSave();
	
});