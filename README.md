# deaisp

### _Docker + PHP + Apache 参考 URL_<br>

https://qiita.com/Ryooota/items/65ff0c32a5d93f225d7a<br>

### _ファイル構成_<br>

```
deaisp/
  ├ html/
    ├ assets/
    └ tailwind.css
  ├ .htaccess
  └ index.html
│
├ Dockerfile
├ .gitignore
├ .prettierrc
├ package.json
├ prettier.config.js
├ tailwind_import.css
└ tailwind.config.js
```

### _Clone_<br>

```
git clone https://github.com/aoyama-micron/deaisp.git
```

### _TailwindCSS + Prettier インストール_<br>

```
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

```
npm install -D prettier prettier-plugin-tailwindcss
```

### _TailwindCSS ビルド or 自動ビルド_<br>

```
build
npm run twb
```

```
watch
npm run tww
```

```
prettier write
npm run prt
```

### _ESLint + TypeScript_<br>

https://qiita.com/y-w/items/dcf5fb4af52e990109eb

```
typescript write
tsc
```
