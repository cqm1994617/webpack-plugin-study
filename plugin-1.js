//plugin-1

class plugin1 {
	constructor(option) {
		console.log('plugin1初始化')
		this.option = option
	}
	apply(compiler) {
		console.log('plugin2 apply被调用')
		compiler.hooks.done.tap('plugin1', (compiler) => {
			console.log(this.option)
		})
	}
}

module.exports = plugin1