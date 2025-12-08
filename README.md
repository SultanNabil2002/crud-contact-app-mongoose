# Contact Manager API (RESTful)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

Proyek ini adalah Backend RESTful API untuk manajemen kontak (*Address Book*). Dibangun menggunakan **Node.js**, **Express**, dan **Prisma ORM**, serta menerapkan standar keamanan tinggi, arsitektur MVC, dan pengujian otomatis (TDD).

> **Credit / Attribution:**
> Proyek ini dikembangkan berdasarkan materi pembelajaran dan tutorial **NodeJS RESTful API** dari channel YouTube **[Programmer Zaman Now](https://www.youtube.com/@ProgrammerZamanNow)** oleh Eko Kurniawan Khannedy. Kode ini ditulis ulang dan dipelajari secara mendalam sebagai bagian dari studi backend development.

---

## 🚀 Fitur Utama

* **User Management:**
    * Registrasi User Baru.
    * Login (Authentication) menggunakan Token UUID.
    * Get Current User & Update Profile.
    * Logout (Revoke Token).
* **Contact Management:**
    * Create, Read, Update, Delete (CRUD) Data Kontak.
    * Pencarian Kontak (Search) berdasarkan Nama, Email, atau No HP.
    * Pagination (Halaman) otomatis pada hasil pencarian.
* **Address Management:**
    * CRUD Alamat yang terhubung dengan Kontak tertentu (*One-to-Many*).
* **Security & Validation:**
    * Validasi input request menggunakan **Joi**.
    * Enkripsi password aman menggunakan **Bcrypt**.
    * Middleware Authentication via Header.
* **Logging:**
    * Sistem pencatatan log aktivitas dan error menggunakan **Winston**.

## 🛠️ Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MySQL
* **ORM:** Prisma
* **Validation:** Joi
* **Testing:** Jest & Supertest
* **Logging:** Winston
* **Utilities:** Bcrypt, UUID

---

## ⚙️ Cara Menjalankan Project

Ikuti langkah-langkah berikut untuk menjalankan proyek ini di komputer lokal Anda.

### 1. Prasyarat
Pastikan Anda sudah menginstall:
* **Node.js** (Versi 14 ke atas disarankan)
* **MySQL Database** (Bisa menggunakan XAMPP, Laragon, atau Docker)

### 2. Instalasi
Clone repository ini, masuk ke foldernya, dan install dependencies:
```bash
git clone [https://github.com/SultanNabil2002/contact-manager-api.git](https://github.com/SultanNabil2002/contact-manager-api.git)
cd contact-manager-api
npm install
```

### 3. Konfigurasi Database
Buat file bernama .env di folder root (sejajar dengan package.json). Copy kode di bawah ini dan sesuaikan root serta password database Anda (jika ada):
```bash
# Format: mysql://USER:PASSWORD@HOST:PORT/NAMA_DATABASE
DATABASE_URL="mysql://root:@localhost:3306/belajar_nodejs_restful_api"
```

### 4. Migrasi Database
Jalankan perintah Prisma untuk membuat tabel-tabel di database MySQL Anda secara otomatis:
```bash
npx prisma migrate dev
```

### 5. Menjalankan Aplikasi
Untuk menjalankan server dalam mode production/development:
```bash
npm start
```
- Server akan berjalan di http://localhost:3000.

### 🧪 Menjalankan Testing
Project ini memiliki test coverage yang lengkap untuk setiap endpoint menggunakan Jest dan Supertest. Pastikan database MySQL menyala sebelum menjalankan test.
```bash
# Menjalankan semua unit test secara berurutan
npm test
```

### 📝 API Documentation
Dokumentasi endpoint tersedia dalam format .http yang sangat mudah digunakan langsung di text editor.

- File: Lihat file test.http di dalam project.

- Cara Pakai: Install extension REST Client di VS Code, lalu klik tombol "Send Request" yang muncul di file tersebut untuk mencoba API secara langsung.

- Author: Sultan Nabil
