const weddingData = {
    // Informasi Umum / SEO
    seo: {
        title: "The Wedding of Maman & Dinceu",
        description: "Minggu, 22 November 2026. Kepada Bapak/Ibu/Saudara/i, kami mengundang Anda untuk hadir di acara pernikahan kami.",
        shareImage: "assets/images/gallery/img_1.jpeg"
    },

    // Mempelai Pria
    groom: {
        name: "Maman Abdul Rahman",
        nickname: "Maman Abdul Rahmanan",
        father: "Bapak Yayan Hendriana",
        mother: "Ibu Oom",
        photo: "assets/images/gallery/mamanpas.jpeg",
        instagram: "https://www.instagram.com/man_smilleoudontcry27?stkn=MWh2dWFsbTZ0dHV6Nw=="
    },

    // Mempelai Wanita
    bride: {
        name: "Dinceu Kamelia",
        nickname: "Dinceu Kamelia",
        father: "Aapak Ade Kurnia",
        mother: "ibu Astiawati",
        photo: "assets/images/gallery/dinceupas.jpeg",
        instagram: "https://www.instagram.com/renkairui_?stkn=djMweGo1aXV3M2M1"
    },

    // Waktu & Tanggal Utama (Format: YYYY-MM-DDTHH:MM:SS untuk Countdown)
    weddingDateISO: "2026-11-22T08:00:00",
    dateFormatted: "Minggu, 22 November 2026",

    // Detail Acara Akad
    akad: {
        date: "Minggu, 22 November 2026",
        time: "08.00 WIB - Selesai",
        venue: "Di rumah mempelai wanita",
        address: " Dsn.Sudimara Rt/Rw 05/02 Desa.Panawangan Kec.Panawangan Kab.Ciamis",
        mapsUrl: "https://www.google.com/maps/place/V9VP%2BJQ3,+Panawangan,+Kec.+Panawangan,+Kabupaten+Ciamis,+Jawa+Barat/@-7.1059897,108.3868948,17z/data=!4m5!3m4!1s0x2e6f410a6b68c4c7:0x3179b0cf3fe503d!8m2!3d-7.1059875!4d108.3869219?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
    },

    // Detail Acara Resepsi
    reception: {
        date: "Minggu, 22 November 2026",
        time: "10.00 - Selesai",
        venue: "Di rumah mempelai wanita",
        address: " Dsn.Sudimara Rt/Rw 05/02 Desa.Panawangan Kec.Panawangan Kab.Ciamis",
        mapsUrl: "https://www.google.com/maps/place/V9VP%2BJQ3,+Panawangan,+Kec.+Panawangan,+Kabupaten+Ciamis,+Jawa+Barat/@-7.1059897,108.3868948,17z/data=!4m5!3m4!1s0x2e6f410a6b68c4c7:0x3179b0cf3fe503d!8m2!3d-7.1059875!4d108.3869219?hl=en&entry=ttu&g_ep=EgoyMDI2MDkyOS4wIKXMDSoASAFQAw%3D%3D"
    },

    // Love Story / Perjalanan Cinta (Opsional, kosongkan array jika tidak ada)
    loveStory: [
        {
            year: "2022",
            title: "Pertama Bertemu",
            description: "Kami pertama kali bertemu di sebuah acara seminar di Jakarta dan mulai bertukar kabar."
        },
        {
            year: "2023",
            title: "Komitmen & First Date",
            description: "Setelah melalui banyak diskusi dan kebersamaan, kami memutuskan untuk menjalin hubungan serius."
        },
        {
            year: "2025",
            title: "Pertunangan (Engagement)",
            description: "Melangkah ke jenjang yang lebih serius dengan melangsungkan prosesi lamaran keluarga."
        },
        {
            year: "2026",
            title: "Hari Pernikahan",
            description: "Hari bahagia di mana kami mengikat janji suci pernikahan di hadapan Allah SWT dan keluarga."
        }
    ],

    // Galeri Foto (Ganti path sesuai kebutuhan)
    gallery: [
        "assets/images/gallery/img_1.jpeg",
        "assets/images/gallery/img_2.jpeg",
        "assets/images/gallery/img_3.jpeg",
        "assets/images/gallery/img_4.jpeg",
        "assets/images/gallery/img_5.jpeg",
        "assets/images/gallery/img_6.jpeg",
        "assets/images/gallery/img_7.jpeg",
        "assets/images/gallery/img_8.jpeg",
        "assets/images/gallery/img_9.jpeg",
        "assets/images/gallery/img_10.jpeg",
    ],

    // Musik Latar
    music: {
        audioSource: "assets/music/play_2.mp3", // Path ke file audio (mp3)
        
    },

    // Informasi RSVP & WhatsApp
    whatsapp: {
        phoneNumber: "6282164995924", // Format nomor tanpa tanda + atau 0 di depan (contoh: 628...)
        templateMessage: "Halo Maman & Dinceu, saya mengonfirmasi bahwa saya akan"
    },

    // Rekening / Wedding Gift
    gifts: [
        {
            bankName: "Bank BRI",
            accountNumber: "4055 0102 0955 535",
            accountName: "Maman Abdul Rahman"
        },
        {
            bankName: "Bank DANA",
            accountNumber: "088222447715",
            accountName: "Dinceu Kamelia"
        }
    ],
    giftAddress: {
        recipient: "Maman Abdul Rahman & Dinceu Kamelia",
        address: " Dsn.Sudimara Rt/Rw 05/02 Desa.Panawangan Kec.Panawangan Kab.Ciamis"
    }
};