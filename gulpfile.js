var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */
// declare bower path
var bower_path = 'vendor/bower_components';
//declare dependencies paths
var paths = {
    Jquery: bower_path + '/jquery/dist/jquery.min.js',
    Bootstrap: bower_path + '/bootstrap-sass-official/assets/',
    FontAwesome: bower_path + '/Font-Awesome/css/font-awesome.min.css',
    Angular:bower_path + '/angular/angular.min.js'
}

elixir(function(mix) {
    mix.sass('app.scss','public/css/',{includePaths: [paths.Bootstrap + 'stylesheets/']})
        .copy(paths.Bootstrap + 'fonts/bootstrap/**', 'public/fonts')
        .copy(paths.FontAwesome ,'public/css/font-awesome.css')
        .copy(paths.Angular,'public/js/angular.js')
        .copy(paths.Jquery,'public/js/jquery.js')
        .copy(paths.Bootstrap + 'javascripts/bootstrap.js','public/js/bootstrap.js')
        .version('css/app.css');

});
