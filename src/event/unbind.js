function unbind( events, handler ){

    for( let i = 0, elsLen = this.length; i < elsLen; i++ ){
        this[i].removeEventListener(events, this);
    }

    return this;
}

export default unbind;