// Observers

var Observers = function() {

	var notificationService = function() {
		var message = ' Notifying ';
		this.notify = function(task) {
			console.log( message + task.user + ' for task ' + task.name);
		}
	};
	
	var loggingService = function() {
		var message = ' Logging ';
		this.notify = function(task) {
			console.log( message + task.user + ' for task ' + task.name);
		}
	};
	
	var auditingService = function() {
		var message = ' Auditing ';
		this.notify = function(task) {
			console.log( message + task.user + ' for task ' + task.name);
		}
	};

	return {
		notificationService : notificationService,
		loggingService : loggingService,
		auditingService : auditingService
	}
}

module.exports = Observers();