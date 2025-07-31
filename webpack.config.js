import path from 'path';

export default {
  mode: 'production',
  entry: './src/webflow-components/WebflowSearch.tsx',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .tsx and .ts files
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};
