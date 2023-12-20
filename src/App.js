
import React, { useEffect, useState } from "react";
import "./App.css";
import { FaYoutube, FaTiktok, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


const iframe_container = {
  left: 0,
            width: "100%",
            height: 500,
            position: "relative"
          }
          

const iframe ={top: 0,
left: 0,
width: "100%",
height: "100%",
position: "absolute",
border: 0}
const SocialIcons = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  

  return (
    <div className="absolute bottom-10 mb-4 space-x-4 flex">
      <FaYoutube
        className="text-white hover:text-gray-200 text-2xl cursor-pointer"
        onClick={() => handleClick("https://www.youtube.com/DrainSerZ")}
      />
      <FaInstagram
        className="text-white hover:text-gray-200 text-2xl cursor-pointer"
        onClick={() => handleClick("https://www.instagram.com/drainserz")}
      />
      <FaTiktok
        className="text-white hover:text-gray-200 text-2xl cursor-pointer"
        onClick={() => handleClick("https://www.tiktok.com/@drainzshorts")}
      />
      <FaLinkedin
        className="text-white hover:text-gray-200 text-2xl cursor-pointer"
        onClick={() =>
          handleClick(
            "https://www.linkedin.com/in/muhammad-hasan-akbar-82197a27b"
          )
        }
      />
    </div>
  );
};

function App() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-visible lg:overflow-hidden">
      {/* Latar belakang dengan efek parallax */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('./background.png')`, // URL gambar dari internet
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      />

      {/* Konten latar depan */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
        <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Muhammad Hasan Akbar
        </h1>
        <p className="text-lg mb-3">
          Someone dengan <i>username</i> '<b>DrainSerZ</b>' or something more
          fun like '<b>Manusia Ikan</b>'
        </p>
        <p className="text-lg mb-3">
          Suka ngajak gelut di bidang{" "}
          <b>IT, Multimedia, dan Kreator Digital.</b>
        </p>
        <p className="bg-gray-600 rounded-full text-lg mb-8">
          <i>"Kemana engkau bisa pergi jika Hobi-mu adalah Pekerjaan-mu"</i>
        </p>
        <img
          src="./profile.jpg"
          className="rounded-full w-32 h-32 mb-4"
          alt="Profil"
        />
        <a
          className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full"
          href="#portofolio-section"
        >
          Look at me!
        </a>
        <SocialIcons />
      </div>

      <div className="bg-gray-800 relative z-10 flex flex-col min-h-screen text-white">
        {/* Bagian Portofolio */}
        <section id="portofolio-section" className="p-10 relative">
          <h2 className="text-2xl font-bold mb-4">Look at My Projects!</h2>

          {/* List proyek-proyek Anda */}
          <div className="grid grid-cols-1 gap-8">
            {/* Contoh proyek */}
            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">Photography Projects</h3>
              <p className="text-gray-300 mb-2">
                Ahli dalam pengoperasian kamera digital dan <i>software</i>{" "}
                editing foto seperti Adobe Photoshop, dan Adobe Lightroom.
              </p>
              <iframe
                title="Google Drive Folder "
                src={`https://drive.google.com/embeddedfolderview?id=1Ye_Ymdp8dNSk1vQTSsmy0o9gDxItkYVV#grid`}
                style={{
                  width: "100%",
                  height: "240px",
                  border: "0",
                  color: "white",
                }}
              />
            </div>

            {/* Contoh proyek lainnya */}
            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">Videography Projects</h3>
              <p className="text-gray-300">
                Ahli dalam pengambilan <i>angle</i> video, penggunaan gimbal,
                dan <i>software</i> editing video seperti Adobe Premiere Pro,
                Adobe After Effects, dan CapCut.
              </p>
              <h4 className="text-lg font-bold mt-3 mb-2">
                After Movie Yayasan Hasnur Centre 2023
              </h4>
              <div className="scrolling-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1jz1hodiaAFk-7L-867CdzMmFIGNm38rB/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1bVR9w3Q82X0reaLk9eWQiwRfcu20ya2j/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1IWfVgOY7OrM6RA2WBLIPAPCstMFcxjNK/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1jYhpjzd2BvzpwE5cytvHq4vvJg1Mjx5F/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/19XUaPM_VfLtkIK2QuuDSyy_kzgTeW6Xw/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1EOl17KjweFw0xaFHY0A6H8RZYqnH8Wv-/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1lFgQ5HCBJ_TIo03p5T556aYHeeOrdpMJ/preview`}
                  className="w-full"
                />
              </div></div>
              <h4 className="text-lg font-bold mt-3 mb-2">
                Lembaga Pers Mahasiswa Lensa Poliban
              </h4>
              <div className="scrolling-container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1lE1rLUykvYofD2iez7-WbTxhZbTfB2Wa/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1AuvEIgHg032XLCaDeQGSrWtdsLsAX6hH/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1hA8fqS6ylBPqz8UWnZvwilW9ly59ObRc/preview`}
                  className="w-full"
                />
              </div></div>
              
  <h4 className="text-lg font-bold mt-3 mb-2">Fun Projects</h4>
  <div className="scrolling-container">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1GPynpqQHzVpMPH82jBCc6y0WHf8QXtje/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1zjYIwXayvlGr73xPYbawZRgRsLjlYwpU/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1XUUsPyhJ2LkGaV5IoT1HBpGutBTe8zxK/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/18jucQNGM3VcmhLJyE2QhiLge-ivejA7e/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1unIqVuD0OYKDtEw1GczMASmd4zl3MIrh/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1LuiWaO6eAnXbRIqCwxUlXp-Cx8-3K-NH/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/182bQ1VQ-0DWWmB9IEr5OmQpdVrmF0zyx/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1xrjQAi_vMe3z3C0POJFhBmouEcP6v-5E/preview`}
                  className="w-full"
                />
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1U6eYgmHq4u0b4ZYluxBA6tdd-g6M5bcD/preview`}
                  className="w-full"
                />
              </div>
              </div>
              <h4 className="text-lg font-bold mt-3 mb-2">
                Video Pendek Yayasan Kanker Indonesia Banjarmasin 2023
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://drive.google.com/file/d/1HtED0gl-4oBZsmrVSh3kX8vKlCRv1yzR/preview`}
                  style={{ width: "100%", border: "0" }}
                />
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">UI UX Projects</h3>
              <p className="text-gray-300 mb-2">
                Mampu mengoperasikan <i>software</i> UI/UX seperti Figma,
                berikut adalah project prototipe aplikasi TabunganKu.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyZHI7QbNwxy5k8sngDvuTm%2FTabunganKu%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3D6gzQ89rIxrBN7N0y-1`}
                  style={{ width: "100%", height: "300px", border: "0" }}
                />
              </div>
            </div>

            <div className="bg-gray-700 p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">Content Creator</h3>
              <p className="text-gray-300 mb-2">
                Memiliki pengalaman menjadi Content Creator Youtube selama lebih
                dari 6 tahun, dan TikTok. Mampu menganalisa algoritma media
                sosial, mampu membuat <i>hook</i> yang baik dan beradaptasi
                dengan perkembangan konten seperti <i>short</i> konten.
              </p>
             
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <iframe
                  title="Google Drive Folder"
                  src={`https://www.youtube.com/embed/3Z-4Tv2oeq8?si=3rQhnHEkqtQVKX_o`}
                  style={{ width: "100%", border: "0" }}
                />
                
                <div className={iframe_container}>
                <iframe
                title="tiktok"
                  src="https://www.tiktok.com/embed/@drainzshorts"
                  className={iframe}
                  allowfullscreen
                  scrolling="no"
                  allow="encrypted-media;"
                ></iframe>
              </div>
              </div>
              <h4 className="text-lg font-bold mt-3 mb-2 hover:text-gray-200">
                
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              
              </div>
            </div>

            {/* Tambah proyek-proyek lain sesuai kebutuhan Anda */}
          </div>
        </section>

        {/* Bagian Kontak */}
        <section id="contact-section" className="p-8 bg-gray-900">
          <h2 className="text-2xl font-bold mb-4">Give me a Call!</h2>

          {/* Formulir kontak atau informasi kontak */}
     
          <div className="flex">
  <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 flex items-center rounded-full mr-4">
    <FaWhatsapp className="mr-2" />
    <a href="https://api.whatsapp.com/send?phone=6285157600318" target="_blank" rel="noopener noreferrer">
      Say Hello!
    </a>
  </button>
  
  <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 flex items-center rounded-full">
    <MdOutlineEmail className="mr-2" />
    <a href="mailto:asusakbar008@gmail.com?body=My custom mail body">
      Different Hello?
    </a>
  </button>
</div>
        </section>
      </div>
    </div>
  );
}

export default App;
