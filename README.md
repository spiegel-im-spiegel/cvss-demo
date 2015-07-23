# CVSS （共通脆弱性評価システム）のデモ

再利用しようという奇特な方がおられるなら CC0 ライセンスでどうぞ。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)

## ブラウザでデモを見る

ブラウザでのデモは完全にクライアント側で動作しているので適当なブラウザで HTML ファイルを表示すれば見れるが， connect パッケージを用いた簡単なサーバを用意してみた。 npm コマンドで  connect パッケージをインストールし， http.js を起動すればよい。

```shell
C:\cvss-demo>npm install connect
connect@3.4.0 node_modules\connect
├── utils-merge@1.0.0
├── parseurl@1.3.0
├── debug@2.2.0 (ms@0.7.1)
└── finalhandler@0.4.0 (escape-html@1.0.2, unpipe@1.0.0, on-finished@2.3.0)

C:\cvss-demo>npm install serve-static
serve-static@1.10.0 node_modules\serve-static
├── escape-html@1.0.2
├── parseurl@1.3.0
└── send@0.13.0 (range-parser@1.0.2, destroy@1.0.3, ms@0.7.1, fresh@0.3.0, statuses@1.2.1, etag@1.7.0, debug@2.2.0, depd@1.0.1, mime@1.3.4, on-finished@2.3.0, http-errors@1.3.1)

C:\cvss-demo>node http.js
Server has started at http://localhost:3000/cvss2.html
```

## 参考文献

### 本家サイト

- [Common Vulnerability Scoring System (CVSS-SIG)](http://www.first.org/cvss)
    - [CVSS v3.0 User Guide](http://www.first.org/cvss/user-guide)
    - [CVSS v3.0 Specification Document](http://www.first.org/cvss/specification-document)
    - [CVSS v3.0 Calculator](http://www.first.org/cvss/calculator/3.0)

### IPA サイト

- [共通脆弱性評価システムCVSS v3概説：IPA 独立行政法人 情報処理推進機構](http://www.ipa.go.jp/security/vuln/CVSSv3.html)
- [CVSS v3 Calculator](http://jvndb.jvn.jp/cvss/v3/) : いまどき Flash を要求するクソ仕様

### 我田引水

- [CVSS に関するメモ — Baldanders.info](http://www.baldanders.info/spiegel/log2/000290.shtml)
- [CVSS に関するメモ 2 — Baldanders.info](http://www.baldanders.info/spiegel/log2/000334.shtml)
- [Demo for CVSS](http://www.baldanders.info/spiegel/archive/cvss/cvss2.html)
