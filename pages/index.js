import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Users/Table'
import Photo from "../public/landing.jpg"
import Card from '../components/Users/Card'
import Comment from '../components/Users/Comment'
import ListComment from '../components/Users/ListComment'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Blogging</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="container mb-5">
        <div className="mt-3" data-aos="fade-down" data-aos-offset="500" data-aos-duration="2000">
          <Image className={`rounded mx-auto d-block ${styles.landing}`} crossOrigin="anonymous" src={Photo} alt="Gambar Landing 1" />
        </div>
        <div className="content mt-4">
          <div className="text-center"><h4>Selamat datang di Blogging!</h4></div>
          <p data-aos="fade-right" data-aos-duration="2000">Atas nama tim kami, kami dengan bangga menyambut Anda di halaman landing page Blog Kami. Di sini, Anda akan
            menemukan beragam konten menarik yang mencakup topik-topik seperti inspirasi, teknologi, gaya hidup, wisata,
            dan masih banyak lagi. Kami memiliki tim penulis berpengalaman yang dengan antusiasme membuat konten yang
            bermanfaat, informatif, dan menghibur. Kami berkomitmen untuk memberikan konten terkini yang relevan dengan
            tren terkini dan kebutuhan pembaca kami. Blog Kami juga memberikan kesempatan bagi Anda untuk berbagi pemikiran,
            ide, dan wawasan Anda. Kami mendorong interaksi dengan para pembaca melalui komentar dan feedback yang Anda
            berikan. Kami percaya bahwa melalui kolaborasi dan diskusi, kita dapat membangun komunitas yang saling mendukung
            dan menginspirasi.</p>

          <p data-aos="fade-left" data-aos-duration="2000">Jangan lewatkan kesempatan untuk menjelajahi berbagai artikel menarik yang telah kami siapkan untuk Anda. Kami
            berharap Anda menikmati setiap tulisan dan menemukan informasi yang berharga di sini. Terima kasih telah
            mengunjungi Blog Kami! Nikmati pengalaman membaca yang menyenangkan dan jangan ragu untuk berbagi Blog Kami
            dengan teman dan keluarga Anda. Tetaplah terhubung dengan kami untuk mendapatkan konten terbaru melalui
            newsletter dan media sosial kami. Selamat membaca dan selamat bergabung dengan komunitas Blog Kami!</p>
        </div>
        {/* <Table /> */}
        <div data-aos="fade-up" data-aos-offset="500" data-aos-duration="2000">
          <h3>Kumpulan Artikel Pengguna</h3>
          <Card />
        </div>
        <div data-aos="flip-left" data-aos-offset="500" data-aos-duration="2000">
          <ListComment />
        </div>
        <div data-aos="flip-right" data-aos-duration="2000">
          <Comment />
        </div>
          
      </div>
    </div>
  )
}
