var Task = require('./task');
var ObservableList = require('./observerList');
/**
 * This is the subject.
 * 
 * This object wraps the 'Task' object and adds the
 * list of observables.
 */
var ObservableTask = function(data) {
	Task.call(this, data);
	this.observers = new ObservableList();
}

ObservableTask.prototype.addObserver = function( observer ) {
	this.observers.add(observer);
}

ObservableTask.prototype.removeObserver = function( observer ) {
	this.observers.removeAt(this.observers.indexOf(observer, 0));
}

ObservableTask.prototype.notify = function( context ) {
	var observerCount = this.observers.count();
	for( var i=0; i < observerCount ; i++) {
		this.observers.get(i)(context);
	}
}

ObservableTask.prototype.save = function() {
	this.notify(this);
	Task.prototype.save.call(this);
}

module.exports = ObservableTask;