//plugin-1
const { SyncHook } = require("tapable");

function plugin1(option) {
    this.option = option
}

plugin1.prototype.apply = function(compiler) {

    compiler.hooks.myPlugin = new SyncHook(['data'])

    compiler.hooks.run.tap('run', () => {
        console.log('run')
    })

    compiler.hooks.beforeRun.tap('before', () => {
        console.log('before')
    })
    compiler.hooks.emit.tap('2333', () => {
        //广播自定义事件
        compiler.hooks.myPlugin.call("testdata")
        console.log('@environment');
    })
}

module.exports = plugin1