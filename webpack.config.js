const plugin1 = require('./plugin-1')
const plugin2 = require('./plugin-2')

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    plugins: [
        new plugin1(),
        new plugin2()
    ]
}
