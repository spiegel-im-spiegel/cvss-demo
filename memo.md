# memo for cvss-demo


## ディレクトリ構成（初期）

```shell
C:>tree . /f
C:.
│  package.json
│
├─gulp
└─src
    ├─js
    └─www
```

## 準備

最初に `npm init` で `package.json` を作成する。中身は適当で OK。

以下のコマンドを実行

```shell
C:>npm install -g gulp
C:\Users\username\AppData\Roaming\npm\gulp -> C:\Users\username\AppData\Roaming\npm\node_modules\gulp\bin\gulp.js
gulp@3.9.0 C:\Users\username\AppData\Roaming\npm\node_modules\gulp
├── pretty-hrtime@1.0.0
├── interpret@0.6.5
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.1.2
├── semver@4.3.6
├── tildify@1.1.0 (os-homedir@1.0.1)
├── v8flags@2.0.9 (user-home@1.1.1)
├── orchestrator@0.3.7 (sequencify@0.0.7, stream-consume@0.1.0, end-of-stream@0.1.5)
├── chalk@1.1.0 (ansi-styles@2.1.0, escape-string-regexp@1.0.3, supports-color@2.0.0, has-ansi@2.0.0, strip-ansi@3.0.0)
├── liftoff@2.1.0 (extend@2.0.1, rechoir@0.6.2, flagged-respawn@0.3.1, resolve@1.1.6, findup-sync@0.2.1)
├── gulp-util@3.0.6 (array-differ@1.0.0, array-uniq@1.0.2, lodash._reescape@3.0.0, lodash._reinterpolate@3.0.0, beeper@1.1.0, lodash._reevaluate@3.0.0, object-assign@3.0.0, replace-ext@0.0.1, vinyl@0.5.0, multipipe@0.1.2, through2@2.0.0, lodash.template@3.6.2, dateformat@1.0.11)
└── vinyl-fs@0.3.13 (graceful-fs@3.0.8, mkdirp@0.5.1, defaults@1.0.2, strip-bom@1.0.0, vinyl@0.4.6, through2@0.6.5, glob-stream@3.1.18, glob-watcher@0.0.6)

C:\home\project\cvss-demo>npm install -D require-dir gulp gulp-if gulp-uglify gulp-webpack
npm WARN deprecated gulp-webpack@1.5.0: Renamed to https://www.npmjs.com/package/webpack-stream
npm WARN optional dep failed, continuing fsevents@0.3.6
require-dir@0.3.0 node_modules\require-dir

gulp-if@1.2.5 node_modules\gulp-if
├── through2@0.6.5 (xtend@4.0.0, readable-stream@1.0.33)
├── gulp-match@0.2.1 (minimatch@1.0.0)
└── ternary-stream@1.2.3 (merge-stream@0.1.8, fork-stream@0.0.4, duplexer2@0.0.2)

gulp@3.9.0 node_modules\gulp
├── pretty-hrtime@1.0.0
├── interpret@0.6.5
├── deprecated@0.0.1
├── archy@1.0.0
├── minimist@1.1.2
├── semver@4.3.6
├── tildify@1.1.0 (os-homedir@1.0.1)
├── v8flags@2.0.9 (user-home@1.1.1)
├── chalk@1.1.0 (escape-string-regexp@1.0.3, ansi-styles@2.1.0, supports-color@2.0.0, strip-ansi@3.0.0, has-ansi@2.0.0)
├── orchestrator@0.3.7 (stream-consume@0.1.0, sequencify@0.0.7, end-of-stream@0.1.5)
├── liftoff@2.1.0 (rechoir@0.6.2, extend@2.0.1, flagged-respawn@0.3.1, resolve@1.1.6, findup-sync@0.2.1)
├── gulp-util@3.0.6 (array-differ@1.0.0, array-uniq@1.0.2, lodash._reevaluate@3.0.0, lodash._reinterpolate@3.0.0, beeper@1.1.0, object-assign@3.0.0, lodash._reescape@3.0.0, replace-ext@0.0.1, vinyl@0.5.0, lodash.template@3.6.2, through2@2.0.0, multipipe@0.1.2, dateformat@1.0.11)
└── vinyl-fs@0.3.13 (graceful-fs@3.0.8, defaults@1.0.2, strip-bom@1.0.0, vinyl@0.4.6, mkdirp@0.5.1, through2@0.6.5, glob-stream@3.1.18, glob-watcher@0.0.6)

gulp-uglify@1.2.0 node_modules\gulp-uglify
├── deap@1.0.0
├── through2@0.6.5 (xtend@4.0.0, readable-stream@1.0.33)
├── gulp-util@3.0.6 (array-differ@1.0.0, array-uniq@1.0.2, beeper@1.1.0, lodash._reinterpolate@3.0.0, lodash._reevaluate@3.0.0, object-assign@3.0.0, lodash._reescape@3.0.0, replace-ext@0.0.1, minimist@1.1.2, vinyl@0.5.0, chalk@1.1.0, lodash.template@3.6.2, through2@2.0.0, dateformat@1.0.11, multipipe@0.1.2)
├── vinyl-sourcemaps-apply@0.1.4 (source-map@0.1.43)
└── uglify-js@2.4.19 (uglify-to-browserify@1.0.2, async@0.2.10, source-map@0.1.34, yargs@3.5.4)

gulp-webpack@1.5.0 node_modules\gulp-webpack
├── through@2.3.8
├── memory-fs@0.2.0
├── vinyl@0.5.0 (clone-stats@0.0.1, replace-ext@0.0.1, clone@1.0.2)
├── gulp-util@3.0.6 (array-differ@1.0.0, array-uniq@1.0.2, lodash._reinterpolate@3.0.0, lodash._reevaluate@3.0.0, lodash._reescape@3.0.0, object-assign@3.0.0, beeper@1.1.0, replace-ext@0.0.1, minimist@1.1.2, chalk@1.1.0, lodash.template@3.6.2, through2@2.0.0, multipipe@0.1.2, dateformat@1.0.11)
└── webpack@1.10.5 (interpret@0.6.5, tapable@0.1.9, clone@1.0.2, async@1.4.0, esprima@1.2.5, enhanced-resolve@0.9.0, mkdirp@0.5.1, optimist@0.6.1, supports-color@3.1.0, uglify-js@2.4.24, webpack-core@0.6.6, node-libs-browser@0.5.2, watchpack@0.2.8)

C:>pushd src\js

C:>git submodule add git@github.com:spiegel-im-spiegel/cvss3.git cvss3
Cloning into 'src/js/cvss3'...
remote: Counting objects: 55, done.
remote: Compressing objects: 100% (41/41), done.Receiving objects:  52% (29/55)
remote: Total 55 (delta 27), reused 37 (delta 13), pack-reused 0
Receiving objects: 100% (55/55), 15.89 KiB | 0 bytes/s, done.
Resolving deltas: 100% (27/27), done.
Checking connectivity... done.
```

## 実行

```shell
C:>gulp webpack
[13:14:19] Using gulpfile C:\home\project\cvss-demo\gulpfile.js
[13:14:19] Starting 'webpack'...
[13:14:22] Finished 'webpack' after 3.09 s
[13:14:22] Version: webpack 1.10.5
    Asset     Size  Chunks             Chunk Names
bundle.js  26.9 kB       0  [emitted]  main

C:>gulp copy
[14:17:59] Using gulpfile C:\home\project\cvss-demo\gulpfile.js
[14:17:59] Starting 'copy'...
[14:17:59] Finished 'copy' after 6.4 ms

C:>gulp build
[14:23:50] Using gulpfile C:\home\project\cvss-demo\gulpfile.js
[14:23:50] Starting 'webpack'...
[14:23:53] Finished 'webpack' after 3.08 s
[14:23:53] Starting 'copy'...
[14:23:53] Finished 'copy' after 2.4 ms
[14:23:53] Starting 'build'...
[14:23:53] Finished 'build' after 3.53 μs
[14:23:54] Version: webpack 1.10.5
    Asset     Size  Chunks             Chunk Names
bundle.js  26.9 kB       0  [emitted]  main
```




## ブックマーク

- [gulp.jsを使ってフロントエンドのビルドをする【webpack, stylus】 - yutaponのブログ](http://yutapon.hatenablog.com/entry/2014/12/06/123000)
- [webpackを使い倒す - Thujikun blog](http://thujikun.github.io/blog/2014/12/07/webpack/)
