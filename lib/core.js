function Polite(callDelay) {

    var self = this;

    this.callDelay = callDelay;
    this.timeOfLastCall = -Infinity;

    // self-explanatory
    this.getTimeSinceLastCall = function() {
        return +new Date() - this.timeOfLastCall;
    };

    // // if last connection made was too recent return false, else, return true and update TS of last connection made 
    // tryTimerForCall() {
    //     if (this.getTimeSinceLastCall() > this.callDelay) {
    //         this.timeOfLastCall = +new Date();
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    this.whenAlright = function(fnArgs, fn) {
        var loop = setInterval(function() {
            if (self.getTimeSinceLastCall() > self.callDelay) {
                self.timeOfLastCall = +new Date();
                fn.apply(this, fnArgs);
                clearInterval(loop);
            }
        });
    };
}

module.exports = new Polite(1000);
module.exports.Polite = Polite;
