/*
 * grunt-include-method
 * https://github.com/knyga/grunt-include-method
 *
 * Copyright (c) 2015 Oleksandr Knyga
 * Licensed under the MIT license.
 */
'use strict';
var IncludeMethod = require('node-include-method');
var include = new IncludeMethod();
var async = require('async');
var _ = require('lodash');

module.exports = Task;

function Task (grunt) {
    grunt.registerMultiTask('includeMethod', 'Grunt task for node include method.', function () {
        async.each(this.files, function (file, next) {
            include.compile(_.extend(file.orig, {
                done: function() {
                    next();
                }
            }));
        }, this.async());
    });
}