var repo = require('./taskRepository');

var Task = function(data) {
	this.name = data.name;
	this.completed = false;
}

Task.prototype.complete = function() {
	console.log('Completing task: '+ this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('Saving task: '+ this.name);
	repo.save(this);
}

module.exports = Task;


