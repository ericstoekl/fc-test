"use strict"

module.exports = (context, callback) => {
    eval(context);
    callback(undefined, {status: "done"});
}
