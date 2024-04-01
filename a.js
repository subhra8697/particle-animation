;(function(root) {
    'use strict';
    
    var MousePositionMonitor = function() {
        this.position = {x: 0, y: 0};
      
        var that = this;
        window.addEventListener('mousemove', function(event) {
            var dot, eventDoc, doc, body, pageX, pageY;

            event = event || window.event; 
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                    (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                    (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                    (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                    (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }
            
            that.position.x = event.pageX;
            that.position.y = event.pageY;
        });
    };

    MousePositionMonitor.prototype.getMousePosition = function() {
        return this.position;
    };

    root.MousePositionMonitor = MousePositionMonitor;
}(window));