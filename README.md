# Modern Elegant Wedding Template

Template undangan pernikahan digital yang modern, elegan, ringan, responsif, dan berbasis *Static HTML/CSS/JS*. Template ini dirancang *reusable* sehingga mudah digunakan untuk banyak klien tanpa mengubah struktur kode utama.

## Struktur Folder
- `index.html` : Halaman utama undangan
- `data/wedding.js` : File konfigurasi data (Nama, Tanggal, Lokasi, Galeri, dll)
- `css/` : Styleheet modular (`style.css`, `responsive.css`)
- `js/` : Logic modular (`main.js`, `countdown.js`, `gallery.js`, `music.js`)
- `assets/` : Gambar placeholder & audio background

## Cara Menjalankan Lokal
1. Pastikan Anda memiliki browser modern (Chrome, Safari, Firefox, Edge).
2. Clone atau unduh repository ini.
3. Buka file `index.html` langsung di browser Anda, atau gunakan extension **Live Server** di VS Code.

## Cara Mengganti Data Klien
Buka file `data/wedding.js`. Anda cukup mengubah nilai variabel objek `weddingData` sesuai dengan data klien baru (nama mempelai, tanggal akad, daftar galeri, nomor rekening, dll). Anda tidak perlu menyentuh file HTML sama sekali.

## Cara Personalisasi Nama Tamu (URL Parameter)
Anda dapat membagikan link undangan dengan menyertakan parameter nama tamu di URL:
`https://username.github.io/repository-name/?to=Nama+Tamu+Undangan`

## Cara Deploy ke GitHub Pages (Gratis)
1. Buat repository baru di [GitHub](https://github.com/).
2. Upload seluruh file project ini ke branch `main` repository tersebut.
3. Masuk ke menu **Settings** pada repository GitHub Anda.
4. Pilih tab **Pages** di sidebar kiri.
5. Pada bagian **Build and deployment**, pilih Source: **Deploy from a branch**, lalu pilih branch `main` (`/root`).
6. Klik **Save** dan tunggu beberapa saat. URL live website Anda akan otomatis tersedia di halaman tersebut.