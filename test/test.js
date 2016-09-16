/**
 * Copyright (C) 2016 pantojs.xyz
 * test.js
 *
 * changelog
 * 2016-09-16[09:03:41]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

const release = require('../');
const panto = require('panto');
const assert = require('assert');

describe('release-panto', () => {
    describe('#release', () => {
        it('should get the files', done => {
            panto.setOptions({
                cwd: __dirname,
                src: 'fixtures'
            });
            release(panto, (files, output) => {
                assert.deepEqual(files, ['dist-a.css', 'dist-b.css']);
                assert.deepEqual(output, __dirname + '/output');
                done();
            });
            panto.loadTransformer('write');
            panto.$('*.css').tag('CSS').write({
                destname: file => {
                    return `dist-${file.filename}`;
                }
            });
            panto.build();
        });
    });
});
