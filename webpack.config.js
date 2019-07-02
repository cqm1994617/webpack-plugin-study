// const plugin1 = require('./plugin-1')

class plugin1 {
  constructor(option) {
    this.option = option
    console.log(option.name + '初始化', Date.now())
  }
  apply(compiler) {
    console.log(this.option.name + ' apply被调用', Date.now())
    compiler.hooks.done.tap('plugin1', (compiler) => {
      console.log(this.option, Date.now())
    })
  }
}

class plugin2 {
  constructor(option) {
    this.option = option
    console.log(option.name + '初始化', Date.now())
  }
  apply(compiler) {
    console.log(this.option.name + ' apply被调用', Date.now())
  }
}

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new plugin1({ name: 'plugin1' }),
    new plugin2({ name: 'plugin2' })
  ]
}
