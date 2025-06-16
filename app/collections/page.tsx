import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import '@/app/styles/splide.min.css';
import '@/app/styles/splide-core.min.css';
import CollectionGallery from "./CollectionGallery";

export default function Collections() {
  return (
    <main className="overflow-hidden">

      <Banner />

      <Header relative={true} />

      <div className="py-10"></div>

      <section
        className=""
        style={{ background: 'url("/images/hero-bg.png") no-repeat center/cover' }}
      >
        <div className="black-overlay">
          <div className="container flex flex-col justify-center gap-2 text-center h-[400px] text-white">
            <h5>COLLECTIONS</h5>
            <h1 className="text-3xl">Best Sellers</h1>
          </div>
        </div>
      </section>

      <CollectionGallery />

      <Footer></Footer>

    </main>
  );
}
