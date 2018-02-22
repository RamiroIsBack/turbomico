var webpack = require('webpack')
var path = require('path')
var CommonsChunkPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin')
var chunks = ['app']
var config = require('./package.json')

module.exports = {

<<<<<<< HEAD
	entry: {
		app: './src/index.js'
	},
	output: {
		path: __dirname+'/public/dist',
		filename: 'bundle/[name].js',
        sourceMapFilename: 'bundle/[name].map'
	},
	node: {
		fs: 'empty'
	},
	devtool: '#source-map',
	plugins: process.env.NODE_ENV === 'production' ? [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		}),
	    new webpack.DefinePlugin({
	        'process.env': {
	        	'NODE_ENV': JSON.stringify('production')
	        }
	    }),
    	new webpack.optimize.UglifyJsPlugin({
    		minimize: true,
		    compress: {
		        warnings: false,
		        drop_console: true
		    }
    	})
	] : [
		new CommonsChunkPlugin({
			name: 'commons',
			chunks: chunks
		})
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query:{
					presets:['react', 'es2015']
				}
			},
			{
		        test: /\.json$/,
		        loader: 'json-loader'
		    },
			{
				test: /\.(jpg|png|svg)$/,
				loader: 'file-loader',
				query: {
					name: '[name].[ext]',
					outputPath: 'images/',
					publicPath: (config.server) ? '/' : 'public/dist/',
					useRelativePath: false
				}
			},
			{
        test: /\.css$/,
        loader:[ 'style-loader', 'css-loader' ]
      }
		]
	}
}
=======
  entry: {
    app: './src/index.js'
  },
  output: {
    path: __dirname+'/dist',

    filename: 'bundle/[name].js',
    sourceMapFilename: 'bundle/[name].map'
  },
  //*************NO VA****************
  //esto del history... hace q todas las llamdas a paginas /about /feria al server acaben en el index ppal d entrada que es lo 'unico' q tiene llamada al server y desde ahi se redirijan con el router del fronend (para el futuro mirar usar isomorphic)
  //el public path tiene q ser igual q el index del history...
  devServer: {
    historyApiFallback: true
  },
  devtool: '#source-map',
  plugins: process.env.NODE_ENV === 'production' ? [
    new CommonsChunkPlugin({
      name: 'commons',
      chunks: chunks
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
        drop_console: true
      }
    })
  ] : [
    new CommonsChunkPlugin({
      name: 'commons',
      chunks: chunks
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query:{
          presets:['react', 'es2015'],
          plugins: ['react-html-attrs']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: (config.server) ? '/' : 'dist/',
          useRelativePath: false
        }
      }
    ]
  }
}

>>>>>>> beef1cdb7be8214a7eb030961e76e474c8d189d0
