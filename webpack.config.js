// const plugin1 = require('./plugin-1')

class plugin1 {
  constructor(option) {
    this.option = option
    console.log('plugin1初始化')
  }
  apply(compiler) {
    console.log('plugin1 apply被调用')
    compiler.hooks.done.tap('plugin1', (compiler) => {
      console.log(this.option)
    })
  }
}

class plugin2 {
  constructor(option) {
    this.option = option
    console.log('plugin2初始化')
  }
  apply(compiler) {
    console.log('plugin2 apply被调用')
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
