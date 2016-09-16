/**
 * Copyright (C) 2016 pantojs.xyz
 * index.js
 *
 * changelog
 * 2016-09-16[08:55:37]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = (panto, ...publishers) => {
    panto.on('complete', files => {
        const filenames = files.map(f => f.filename);
        const output = panto.file.touch('.');
        publishers.forEach(publisher => {
            publisher(filenames, output);
        });
    });
};
