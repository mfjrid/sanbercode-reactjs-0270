import React from "react";
import "./App.css";

//App.js ini menggunakan css di App.css
function App() {
  return (
    <div>
      <div className="container">
        <h1>Form Pembelian Buah</h1>
        <table>
          <tr>
            <th>Nama Pelanggan</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="checkbox" name="buah" id="semangka" />
              Semangka
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="checkbox" name="buah" id="jeruk" />
              Jeruk
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="checkbox" name="buah" id="nanas" />
              Nanas
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="checkbox" name="buah" id="salak" />
              Salak
            </td>
          </tr>
          <tr>
            <th>Daftar Item</th>
            <td>
              <input type="checkbox" name="buah" id="anggur" />
              Anggur
            </td>
          </tr>
          <tr>
            <button type="submit">Kirim</button>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
