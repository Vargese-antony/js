var Task = function(name) {
	this.name = name;
	this.completed = false;
}

Task.prototype.save = function() {
	console.log('Saving task ' + this.name);
}

Task.prototype.complete = function() {
	this.completed = true;
	console.log('Completing task ' + this.name);
}

var task1 = new Task('Simple task');
task1.complete();
task1.save();

var urgentTask = new Task('Urgent task');
// Add new functionality to the object without modifying the existing object
urgentTask.priority = 1;
urgentTask.notify = function() {
	console.log('Notify all managers');
}
// Overide the save method
urgentTask.save = function() {
	this.notify();
	// Execute the prototype save() method
	Task.prototype.save.call(this);
}

urgentTask.complete();
urgentTask.save();

