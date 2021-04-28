import shebang from 'rollup-plugin-add-shebang';

export default {
    input: 'src/index.js',
    output: {
        file: 'bin/main.js',
        format: 'cjs'
    },
    plugins: [
        shebang({
            include: 'bin/main.js'
        }),
    ]
};