function bind( events, handler ){

    for( let i = 0, elsLen = this.length; i < elsLen; i++ ){
        this[i].addEventListener(events, handler);
    }

    return this;
}

export default bind;