/**
 * Observer is implemented between the boundaries of an application.
 * Benefit: reduce dependencies.
 * Reference: https://habrastorage.org/files/39b/7f9/806/39b7f98064b5458e9e2837cca15e3525.jpg
 */
var Subject = function () {
    var _observers = [];

    return {
        subscribeObserver: function (observer) {
            _observers.push(observer);
        },
        unsubscribeObserver: function (observer) {
            var index = _observers.indexOf(observer);
            if (index > -1) {
                _observers.splice(index, 1);
            }
        },
        notifyObserver: function (observer) {
            var index = _observers.indexOf(observer);
            if (index > -1) {
                _observers[index].notify(index);
            }
        },
        notifyAllObservers: function () {
            for (var i = 0; i < _observers.length; i++) {
                _observers[i].notify(i);
            };
        }
    };
};

var Observer = function () {
    return {
        notify: function (index) {
            console.log("Observer " + index + " is notified!");
        }
    }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
  // Observer 1 is notified!
  // Observer 2 is notified!
  // Observer 3 is notified!
  // Observer 4 is notified!