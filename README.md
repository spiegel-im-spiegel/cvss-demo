# Demonstration for CVSS (Common Vulnerability Scoring System) Version 3

## Build

Use [gulp] and [webpack].

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

C:>gulp build
[18:23:06] Using gulpfile C:cvss-demo\gulpfile.js
[18:23:06] Starting 'webpack'...
[18:23:06] Finished 'webpack' after 259 ms
[18:23:06] Starting 'copy'...
[18:23:06] Finished 'copy' after 3.78 ms
[18:23:06] Starting 'build'...
[18:23:06] Finished 'build' after 3.21 μs
[18:23:06] Version: webpack 1.10.5
    Asset     Size  Chunks             Chunk Names
cvss3c.js  28.5 kB       0  [emitted]  main
```

output folder:

```shell
C:>tree build /f
C:CVSS-DEMO\BUILD
│  cvss3.html
│  cvss3j.html
│
└─js
        cvss3c.js
```

see: [http://www.baldanders.info/spiegel/archive/cvss/cvss3.html](http://www.baldanders.info/spiegel/archive/cvss/cvss3.html)

## License

These codes are licensed under CC0.

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

## Reference

- [Common Vulnerability Scoring System (CVSS-SIG)](http://www.first.org/cvss)
    - [CVSS v3.0 User Guide](http://www.first.org/cvss/user-guide)
    - [CVSS v3.0 Specification Document](http://www.first.org/cvss/specification-document)
    - [CVSS v3.0 Calculator](http://www.first.org/cvss/calculator/3.0)
- [共通脆弱性評価システムCVSS v3概説：IPA 独立行政法人 情報処理推進機構](http://www.ipa.go.jp/security/vuln/CVSSv3.html)
- [CVSS に関するメモ — Baldanders.info](http://www.baldanders.info/spiegel/log2/000290.shtml)
- [CVSS に関するメモ 2 — Baldanders.info](http://www.baldanders.info/spiegel/log2/000334.shtml)
- [CVSS に関するメモ 3 — Baldanders.info](http://www.baldanders.info/spiegel/log2/000864.shtml)
- [CVSSv3 用の node.js モジュールを作ってみた - Qiita](http://qiita.com/spiegel-im-spiegel/items/d6fe10d3df92b9d8556b)
- [node.js の CVSS v3 モジュールを使ってデモページを作ってみた - Qiita](http://qiita.com/spiegel-im-spiegel/items/f2db3759b957206d4521)

[gulp]: http://gulpjs.com/ "gulp.js - the streaming build system"
[webpack]: http://webpack.github.io/ "webpack module bundler"
