import MOM from './MOM';

MOM.noConflict = function() {
    return MOM;
}
window.MOM = MOM;
