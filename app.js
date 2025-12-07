const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator')

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const methodOverride = require('method-override')

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

// setup method override
app.use(methodOverride('_method'));

app.set('view engine', 'ejs'); //setup EJS
app.use(expressLayouts); // third party middleware
app.set('layout', 'layouts/main-layout');
app.use(express.static('public')); // built-in middleware
app.use(express.urlencoded({ extended: true }));

//  konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
  cookie: { maxAge: 6000 },
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  })
);

app.use(flash());

// halaman Home
app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname });
  const mahasiswa = [
    {
      nama: 'Andi Saputra',
      email: 'andi.saputra@example.com'
    },
    {
      nama: 'Budi Santoso',
      email: 'budi.santoso@example.com'
    },
    {
      nama: 'Citra Lestari',
      email: 'citra.lestari@example.com'
    }
  ];

    res.render('index', { 
      nama: 'Sultan', 
      title: 'Home',
      mahasiswa,
    });
});

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout', 
    title: 'Halaman About' });
});

app.get('/contact', async (req, res) => {
    // contact.find().then((contact) => {
    //     res.send(contact);
    // });

  const contacts = await Contact.find();
  res.render('contact', { 
    layout: 'layouts/main-layout', 
    title: 'Halaman KONTAK', 
    contacts: contacts, 
    msg: req.flash('msg'), 
    });
});

// halaman form tambah data kontak
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout',

  });
});

// proses tambah data contact
app.post('/contact', [
  body('nama').custom( async (value) => {
    const duplikat = await Contact.findOne({ nama: value });
    if(duplikat) {
      throw new Error('Nama contact sudah digunakan!')
    }
    return true;
  }),
  check('email', 'Email Tidak Valid').isEmail(), 
  check('nohp', 'no hp tidak valid').isMobilePhone('id-ID')], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('add-contact', {
        title: 'Form Tambah Data Kontak',
        layout: 'layouts/main-layout',
        errors: errors.array(),
      })
    } else {
      try {
        await Contact.insertMany(req.body);
        // kirimkan flash message
        req.flash('msg',  'Data contact berhasil ditambahkan!');
        res.redirect('/contact');
      } catch (error) {
      console.error(error);
      res.redirect('/contact');
      }
    }
});

// app.get('/contact/delete/:nama', async (req, res) => {
//   const contact = await Contact.findOne({ nama:req.params.nama });

//   //  jika contact tidak ada
//   if(!contact) {
//     res.status(404);
//     res.send('<h1>504</h1>');
//   } else {
//     Contact.deleteOne({ nama: req.params.nama }).then((result) => { // bisa juga Contact.deleteOne({ _id: contact._id });
//       req.flash('msg',  'Data contact berhasil diHapus!');
//       res.redirect('/contact');
//     });
//   }
// })
app.delete('/contact', (req, res) => {
  Contact.deleteOne({ nama: req.body.nama }).then((result) => {
      req.flash('msg',  'Data contact berhasil diHapus!');
      res.redirect('/contact');
    });
});

// proses ubah data 2
app.put('/contact', [
  body('nama').custom( async (value, { req }) => {
    const duplikat = await Contact.findOne({ nama: value});
    if(value !== req.body.oldNama && duplikat) {
      throw new Error('Nama contact sudah digunakan!')
    }
    return true;
  }),
  check('email', 'Email Tidak Valid').isEmail(), 
  check('nohp', 'no hp tidak valid').isMobilePhone('id-ID')], (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      // return res.status(400).json({ errors: errors.array() });
      res.render('edit-contact', {
        title: 'Form Ubah Data Kontak',
        layout: 'layouts/main-layout',
        errors: errors.array(),
        contact: req.body,
      })
    } else {
      Contact.updateOne({ _id: req.body._id },
        {
          $set: {
            nama: req.body.nama,
            email: req.body.email,
            nohp: req.body.nohp,
          },
        }
      ).then((result) => {
          // kirimkan flash message
          req.flash('msg',  'Data contact berhasil diubah!');
          res.redirect('/contact');
      });
    }
});

app.get('/contact/edit/:nama', async (req, res) => {
  const contact = await Contact.findOne({ nama: req.params.nama});
  res.render('edit-contact', {
    title: 'Form Tambah Data Contact',
    layout: 'layouts/main-layout',
    contact,
  });
});

// halaman detail kontak
app.get('/contact/:nama', async (req, res) => {
//   const contact = findContact(req.params.nama);
  const contact = await Contact.findOne({ nama: req.params.nama })
  res.render('detail', { layout: 'layouts/main-layout', title: 'Halaman KONTAK', contact: contact });
});

app.listen(port, (req, res) => {
    console.log(`Mongo Contact App | Listening at http://localhost:${port}`)
});
