Cara menjalankan Aplikasi:

1. Input perintah NPM INSTALL di Terminal BackEnd dan juga FrontEnd.
2. Setelah NPM sudah terinstall. Jalankan BackEnd dan FrontEnd dengan Input NPM RUN DEV di Terminal
3. Pastikan Menjalankan Perintah menggunakan Terminal di Folder Masing-Masing. Contoh : proyek-data-siswa\Backend lalu NPM RUN DEV...


Mengubah format data pada MySql agar tidak menunjukan format yang belebihan seperti:
2006-07-11T17:00:00.000Z, dengan menjalankan perintah di MySql:
SELECT DATE_FORMAT(tgl_lahir, '%d-%m-%Y') AS tgl_lahir FROM siswa;







<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
