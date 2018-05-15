var Task = require('./task');
var ObserverTask = require('./observableTask');
var Observers = require('./observers');


var task1 = new ObserverTask({name:'create demo for constructor', user: 'John'});

// create instance of the services
var audit = new Observers.auditingService();
var logging = new Observers.loggingService();
var notify = new Observers.notificationService();

// Add the observers to the task object
task1.addObserver(audit.notify);
task1.addObserver(logging.notify);
task1.addObserver(notify.notify);

task1.save();

console.log('\t');
task1.removeObserver(logging.notify);
task1.save();