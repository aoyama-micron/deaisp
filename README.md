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

### _TailwindCSS + Prettier_<br>

```
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

```
npm install -D prettier prettier-plugin-tailwindcss
```

### _ビルド or 自動ビルド_<br>

```
npm run build
```

```
npm run watch
```
