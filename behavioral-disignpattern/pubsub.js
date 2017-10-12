/**
 * Pub-sub is more cross app communication pattern
 * Benefit: reduce dependencies.
 * Reference: https://habrastorage.org/files/39b/7f9/806/39b7f98064b5458e9e2837cca15e3525.jpg
 */
var pubsub = {};
(function(q) {
    var events = {}, subUid = -1;
    q.subscribe = function(eventName, callback) {
        if (!events[eventName]) {
            events[eventName] = [];
        }
        var token = (++subUid).toString();
        events[eventName].push({
            token: token,
            callback: callback
        });
        return token;
    };

    q.publish = function(eventName, args) {
        if (!events[eventName]) {
            return false;
        }
        setTimeout(function() {
            var subscribers = events[eventName],
                len = subscribers ? subscribers.length : 0;

            while (len--) {
                subscribers[len].callback(eventName, args);
            }
        }, 0);
        return true;

    };

    q.unsubscribe = function(token) {
        for (var m in events) {
            if (events[m]) {
                for (var i = 0, j = events[m].length; i < j; i++) {
                    if (events[m][i].token === token) {
                        events[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    };
}(pubsub));