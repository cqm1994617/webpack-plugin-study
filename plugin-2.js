//plugin-2

class plugin2 {
    constructor(option) {
        console.log('plugin2初始化')
        this.option = option
    }
    apply(compiler) {
        console.log('plugin2 apply被调用')
    }
}

module.exports = plugin2