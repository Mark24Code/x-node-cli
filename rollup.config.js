import commonjs from '@rollup/plugin-commonjs';
import shebang from 'rollup-plugin-add-shebang';

export default {
    input: './src/index.js',
    output: {
        file: './bin/main.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        shebang({
            include: './bin/main.js'
        }),
    ]
};