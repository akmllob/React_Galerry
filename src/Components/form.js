// Osis.js
import React, { Component } from "react";
import Alert from "./Alert";
import 'bootstrap/dist/css/bootstrap.min.css';

class Osis extends Component {
  render() {
    const Kirim = () => {
      alert("Formulir anda sudah terkirim!");
    };

    return (
      <div className="container mt-5">
        <Alert type="warning">Form Pendaftaran OSIS</Alert>
        <div className="card p-4">
          <form>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama:</label>
              <input
                type="text"
                className="form-control"
                id="nama"
                placeholder="Masukkan Nama Anda"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Laki-laki"
                  className="form-check-input"
                  id="laki-laki"
                />
                <label htmlFor="laki-laki" className="form-check-label">Laki-laki</label>
              </div>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  type="radio"
                  name="jenis_kelamin"
                  value="Perempuan"
                  className="form-check-input"
                  id="perempuan"
                />
                <label htmlFor="perempuan" className="form-check-label">Perempuan</label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">Alamat:</label>
              <input
                type="text"
                className="form-control"
                id="alamat"
                placeholder="Masukkan Alamat Anda"
              />
            </div>

            <button type="button-submit" className="btn btn-danger" onClick={Kirim}>
              Kirim (Merah)
            </button>

            <button type="button-submit" className="btn btn-warning ms-2" onClick={Kirim}>
              Kirim (Kuning)
            </button>

            <button type="button-sumbit" className="btn btn-success ms-2" onClick={Kirim}>
              Kirim (Hijau)
            </button>

            <button type="button-submit" className="btn btn-light ms-2" onClick={Kirim}>
              Kirim (Putih)
            </button>

            <button type="button-submit" className="btn btn-dark ms-2" onClick={Kirim}>
              Kirim (Hitam)
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Osis;
