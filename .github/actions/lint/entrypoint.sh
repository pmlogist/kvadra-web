#!/bin/sh
cp -r /opt/deps/dev `pwd`/node_modules
npm run lint
rm -rf `pwd`/node_modules
