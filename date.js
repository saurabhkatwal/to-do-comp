exports.getDate=function(){
    const today = new Date();
    options = {
        day: 'numeric',
        weekday: 'long',
        month: 'long',
        year: 'numeric'
    }
    return today.toLocaleDateString('en-US', options);
}
exports.getDay=function(){
    const today = new Date();
    options = {
        weekday: 'long'
    }
    return today.toLocaleDateString('en-US', options);
}