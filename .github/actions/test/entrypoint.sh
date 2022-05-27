#!/bin/sh
cp -r /opt/deps/dev `pwd`/node_modules
npm run test
rm -rf `pwd`/node_modules
