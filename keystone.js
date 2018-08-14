// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Require keystone
var keystone = require('keystone');

/**
 * Removes a module from the cache
 */
require.uncache = function (moduleName) {
    // Run over the cache looking for the files
    // loaded by the specified module name
    require.searchCache(moduleName, function (mod) {
        delete require.cache[mod.id];
    });

    // Remove cached paths to the module.
    // Thanks to @bentael for pointing this out.
    Object.keys(module.constructor._pathCache).forEach(function (cacheKey) {
        if (cacheKey.indexOf(moduleName) > 0) {
            delete module.constructor._pathCache[cacheKey];
        }
    });
};

/**
 * Runs over the cache to search for all the cached
 * files
 */
require.searchCache = function (moduleName, callback) {
    // Resolve the module identified by the specified name
    var mod = require.resolve(moduleName);

    // Check if the module has been resolved and found within
    // the cache
    if (mod && ((mod = require.cache[mod]) !== undefined)) {
        // Recursively go over the results
        (function run(mod) {
            // Go over each of the module's children and
            // run over it
            mod.children.forEach(function (child) {
                run(child);
            });

            // Call the specified callback providing the
            // found module
            callback(mod);
        })(mod);
    }
};

beforeEach(function (done) {
    this.timeout(5500);



    keystone.init({
        'name': 'Ciudatos',
        'brand': 'Ciudatos',

        'less': 'public',
        'static': 'public',
        'favicon': 'public/favicon.ico',
        'views': 'templates/views',
        'view engine': 'pug',

        'auto update': true,
        'session': true,
        'auth': true,
        'user model': 'User',
    });
    keystone.import('models');
    keystone.set('locals', {
        _: require('lodash'),
        env: keystone.get('env'),
        utils: keystone.utils,
        editable: keystone.content.editable,
    });
    keystone.set('routes', require('./routes'));

    keystone.set('nav', {
        cities: 'cities',
        documents: 'documents',
        home: 'homes',
        posts: ['posts', 'post-categories'],
        profiles: 'profiles',
        users: 'users',
    });

    keystone.start();


    require.uncache('keystone');
  /*  keystone = require('keystone');
    keystone.init();
    keystone.set('cookie secret', 'funky');
    keystone.set('logger', false);
    keystone.set('port', 4500);*/
    console.log('start keystone ');
    keystone.start(function () {
        keystone.httpServer.on('connection', function (socket) {
            sockets.push(socket);

        });
        done();
    });

});


