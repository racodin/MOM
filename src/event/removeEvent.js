function removeEvent( events, handler ){

    for( let i = 0, elsLen = this.length; i < elsLen; i++ ){
        this[i].removeEventListener(events, this[i].MOMevents.events[events][0].handler);
    }

    return this;
}

export default removeEvent;