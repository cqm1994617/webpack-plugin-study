//plugin-2
const { SyncHook } = require("tapable");

function plugin2() {

}

plugin2.prototype.apply = function (compiler) {
    compiler.hooks.myPlugin.tap('1234', (data) => {
        console.log('@Listen4Myplugin', data)
    })
}

module.exports = plugin2