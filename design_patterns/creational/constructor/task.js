var task = function(name) {
	this.name = name;
	this.completed = false;
}

task.prototype.complete = function() {
	console.log('Completing task: '+ this.name);
	this.completed = true;
};

task.prototype.save = function() {
	console.log('Saving task: '+ this.name);
}

module.exports = task;


