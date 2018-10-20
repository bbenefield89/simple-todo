import express from 'express';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import bodyParser from 'body-parser';
import TodoRoutes from './todo-routes';

import db from './database/connection'
import Todo from './database/models/Todo'

const APP_PORT = 3001;

const compiler = webpack({
	mode: 'development',
	entry: ['whatwg-fetch', path.resolve(__dirname, '../frontend', 'app.js')],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /\/node_modules\//,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	output: {
		filename: 'app.js',
		path: '/',
	},
});

const app = new WebpackDevServer(compiler, {
	contentBase: '/public/',
	publicPath: '/frontend/',
	stats: {colors: true},
});

app.use(bodyParser.json());
app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use(TodoRoutes);

db.authenticate()
console.log('\n\n=====\nDB CONNECTED\n=====\n\n')

Todo.sync()

app.listen(APP_PORT, () => {
  console.log(`App is now running on http://localhost:${APP_PORT}`);

});
