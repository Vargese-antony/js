// Create the observer list

var ObserverList = function() {
	this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
	return this.observerList.push(obj);
}

ObserverList.prototype.get = function(index) {
	return this.observerList[index];
}

ObserverList.prototype.count = function() {
	return this.observerList.length;
}

ObserverList.prototype.removeAt = function(index) {
	return this.observerList.splice(index, 1);
}

ObserverList.prototype.indexOf = function(obj, startIndex) {
	var i = startIndex;

	while( i < this.observerList.length) {
		if( this.observerList[i] === obj ) {
			return i;
		}
		i++;
	}

	return -1;
}

module.exports = ObserverList;