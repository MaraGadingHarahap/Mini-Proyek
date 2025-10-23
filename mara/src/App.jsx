import React, { useState, useEffect } from 'react';
function GlobalStyles() {
  return (
    <style>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        background-color: #f4f7f6;
        margin: 0;
        color: #333;
      }
      
      * {
        box-sizing: border-box;
      }

      .app-container {
        min-height: 100vh;
      }

      /* Styling Navigasi */
      .app-nav {
        background-color: #880bcbff;
        padding: 1rem;
        box-shadow: 0 4px 10px -3px rgba(0, 0, 0, 0.1);
      }
      
      .nav-content {
        max-width: 60rem; /* max-w-5xl */
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between; /* Pisahkan nav dan User ID */
        align-items: center;
      }
      
      .nav-links {
        display: flex;
        column-gap: 1rem;
      }
      
      .nav-button {
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
      }
      
      .nav-button.active {
        background-color: #000000ff;
        color: white;
      }
      
      .nav-button.inactive {
        background-color: white;
        color: #aa0da4ff;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
      
      .nav-button.inactive:hover {
        background-color: #f0f6ff;
      }
      
      
      /* Konten Halaman Utama */
      .app-main {
        max-width: 60rem;               
        margin: 1.5rem auto;
        padding: 0 1.5rem;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }
      
      /* Responsif untuk layar lebih besar */
      @media (min-width: 768px) {
        .app-main {
          grid-template-columns: 1fr 2fr;
        }
      }

      .page-card {
        padding: 1.5rem;
        background-color: white;
        border-radius: 0.75rem;
        box-shadow: 0 4px 12px -1px rgba(0, 0, 0, 0.07);
      }
      
      .page-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 1.5rem;
        color: #000000ff;
      }

      /* Loading dan Teks Kosong */
      .loading-text, .empty-list-text {
        text-align: center;
        color: #777;
        padding: 2rem;
        font-style: italic;
      }
      
      /* Styling Form */
      .form-card {
      }
      
      .form-group {
        margin-bottom: 1rem;
      }
      
      .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #000000ff;
      }
      
      .form-input {
        border: 2px solid #e2e8f0;
        padding: 0.75rem;
        border-radius: 0.5rem;
        width: 100%;
        font-size: 1rem;
        transition: border-color 0.2s;
      }
      
      .form-input:focus {
        border-color: #7c848aff;
        outline: none;
      }
      
      .form-button {
        width: 100%;
        background-color: #940ea3ff;
        color: white;
        padding: 0.75rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s;
      }
      
      .form-button:hover {
        background-color: #003d6b;
      }

      
      .list-ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }
      
      .list-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        border-bottom: 1px solid #f0f0f0;
      }
      
      .list-item:last-child {
        border-bottom: none;
      }
      
      .list-item-info {
        display: flex;
        flex-direction: column;
      }

      .list-item-nama {
        font-weight: 600;
        font-size: 1.1rem;
        color: #333;
      }
      
      .list-item-kelas {
        font-size: 0.9rem;
        color: #777;
      }
      
      .delete-button {
        background-color: #e53e3e; /* Merah */
        color: white;
        border: none;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 500;
        transition: background-color 0.2s;
      }
      
      .delete-button:hover {
        background-color: #c53030;
      }
      
    `}</style>
  );
}

// --- Komponen: Form Tambah Mahasiswa ---
function FormTambahMahasiswa({ setMahasiswaList }) {
  // 1. State untuk mengelola input form
  const [nama, setNama] = useState('');
  const [kelas, setKelas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !kelas) return; // Validasi sederhana
    
    // Buat objek mahasiswa baru dengan ID unik
    const mahasiswaBaru = {
      id: crypto.randomUUID(), // ID unik lokal
      nama: nama,
      kelas: kelas
    };

    // 2. Perbarui state parent (App)
    //gunakan fungsi updater agar selalu mendapat list terbaru
    setMahasiswaList(prevList => [...prevList, mahasiswaBaru]);
      
    // 3. Reset form setelah sukses
    setNama('');
    setKelas('');
  };

  return (
    <div className="page-card form-card">
      <h2 className="page-title">Tambah Mahasiswa</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nama" className="form-label">Nama Mahasiswa</label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="form-input"
            placeholder="Contoh: Budi Santoso"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="kelas" className="form-label">Kelas</label>
          <input
            id="kelas"
            type="text"
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            className="form-input"
            placeholder="Contoh: Informatika Pagi A"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Simpan
        </button>
      </form>
    </div>
  );
}

// --- Komponen: Daftar Mahasiswa ---
function DaftarMahasiswa({ mahasiswaList, setMahasiswaList }) {

  const handleDelete = (id) => {
    // Perbarui state parent dengan mem-filter list
    setMahasiswaList(prevList => prevList.filter(mhs => mhs.id !== id));
  };

  return (
    <div className="page-card list-card">
      <h2 className="page-title">Daftar Mahasiswa</h2>
      {mahasiswaList.length === 0 ? (
        <p className="empty-list-text">Belum ada data mahasiswa.</p>
      ) : (
        <ul className="list-ul">
          {mahasiswaList.map((mhs) => (
            <li key={mhs.id} className="list-item">
              <div className="list-item-info">
                <span className="list-item-nama">{mhs.nama}</span>
                <span className="list-item-kelas">{mhs.kelas}</span>
              </div>
              <button 
                onClick={() => handleDelete(mhs.id)}
                className="delete-button"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// --- Halaman: Mahasiswa (Halaman Utama) ---
function MahasiswaPage({ mahasiswaList, setMahasiswaList }) {
  
  return (
    <>
      <FormTambahMahasiswa setMahasiswaList={setMahasiswaList} />
      <DaftarMahasiswa mahasiswaList={mahasiswaList} setMahasiswaList={setMahasiswaList} />
    </>
  );
}

// --- Halaman: Tentang ---
function TentangPage() {
  return (
    <div className="page-card" style={{ gridColumn: '1 / -1' }}>
      <h2 className="page-title">Tentang Aplikasi Ini</h2>
      <p>Aplikasi ini adalah demo React yang dibuat untuk tugas Mini Proyek kami.</p>
      <p>Fitur yang didemonstrasikan:</p>
      <ul>
        <li><strong>Components & Props:</strong> Aplikasi dipecah menjadi komponen (<code>App</code>, <code>MahasiswaPage</code>, <code>FormTambahMahasiswa</code>, dll.)</li>
        <li><strong>State & Hooks (useState):</strong> Digunakan untuk mengelola input form dan daftar mahasiswa.</li>
        <li><strong>Lifecycle & Hooks (useEffect):</strong> Digunakan untuk membaca dan menyimpan data ke <code>localStorage</code> secara otomatis.</li>
        <li><strong>Simulasi Routing:</strong> Navigasi antar halaman "Daftar Mahasiswa" dan "Tentang" menggunakan <code>useState</code>.</li>
        <li><strong>Penyimpanan Data:</strong> Terhubung dengan <strong>localStorage</strong> untuk menyimpan data secara persisten di browser.</li>
      </ul>
    </div>
  );
}


// --- Komponen App Utama (Router Simulasi & localStorage) ---
function App() {
  const [page, setPage] = useState('mahasiswa'); // 'mahasiswa' or 'tentang'
  
  // State utama untuk daftar mahasiswa, diangkat ke komponen App
  const [mahasiswaList, setMahasiswaList] = useState(() => {
    try {
      const dataTersimpan = localStorage.getItem('daftarMahasiswa');
      return dataTersimpan ? JSON.parse(dataTersimpan) : [];
    } catch (error) {
      console.error("Gagal parse localStorage", error);
      return [];
    }
  });

  // Hook useEffect: Berjalan SETIAP KALI mahasiswaList berubah
  // Ini untuk menyimpan data ke localStorage
  useEffect(() => {
    try {
      localStorage.setItem('daftarMahasiswa', JSON.stringify(mahasiswaList));
    } catch (error) {
      console.error("Gagal menyimpan ke localStorage", error);
    }
  }, [mahasiswaList]); // Dependensi: array mahasiswaList

  const renderPage = () => {e    
    // Kirim props (mahasiswaList, setMahasiswaList) ke halaman
    switch (page) {
      case 'mahasiswa':
        return <MahasiswaPage mahasiswaList={mahasiswaList} setMahasiswaList={setMahasiswaList} />;
      case 'tentang':
        return <TentangPage />;
      default:
        return <MahasiswaPage mahasiswaList={mahasiswaList} setMahasiswaList={setMahasiswaList} />;
    }
  };

  return (
    <div className="app-container">
      <GlobalStyles />
      
      {/* Header Navigasi */}
      <nav className="app-nav">
        <div className="nav-content">
          <div className="nav-links">
            <button
              onClick={() => setPage('mahasiswa')}
              className={`nav-button ${page === 'mahasiswa' ? 'active' : 'inactive'}`}
            >
              Daftar Mahasiswa
            </button>
            <button
              onClick={() => setPage('tentang')}
              className={`nav-button ${page === 'tentang' ? 'active' : 'inactive'}`}
            >
              Tentang
            </button>
          </div>
        </div>
      </nav>

      {/* Konten Halaman Utama */}
      <main className="app-main">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;

