function addEvent( events, handler ){

    for( let i = 0, elsLen = this.length; i < elsLen; i++ ){
        // this[i].events[events] = [];
        // this[i].events[events].delegateCount = 0;
        // this[i].events[events][i] = {
        //     type: events,
        //     origType: events,
        //     data: undefined,
        //     guid: 1,
        //     hanlder: function(){},
        //     namespace: "",
        //     needsContext: undefined,
        //     selector: undefined,
        // }
        this[i].MOMevents = {
            events: {
            },
            handle: function(){
            }
        };
        // this[i].MOMevents.events = {};
        var eventsArr = this[i].MOMevents.events[events] = [];
        var eventsObj = eventsArr[eventsArr.length] = {};
        eventsObj.type = events;
        eventsObj.handler = handler;
        // eventsArr[eventsArr.length].type = events;
        // eventsArr[eventsArr.length].handler = handler;
        // this[i].MOMevents.handle = function(){};

        this[i].addEventListener(events, handler);
    }

    return this;
}

export default addEvent;