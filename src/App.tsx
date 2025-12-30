import { useState } from 'react';
import BreedingModal from './components/BreedingModal';
import ImageViewer from './components/ImageViewer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openBreeding, setOpenBreeding] = useState<string | null>(null);
  const [viewImage, setViewImage] = useState<string | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">
            <img
              src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000062-396a9396ab/f7167f8a-9c75-482f-95f6-2d9ef4ed8836.jpeg?ph=fa6ab152d7"
              alt="Temika Logo"
              className="logo"
              onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000062-396a9396ab/f7167f8a-9c75-482f-95f6-2d9ef4ed8836.jpeg?ph=fa6ab152d7")}
              style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%', cursor: 'pointer' }}
            />
            <div>
              <div className="brand-name">TEMIKA</div>
              <div className="brand-sub">Chovatelská stanice Maine Coon</div>
            </div>
          </div>

          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <button onClick={() => scrollTo('hero')}>Domů</button>
            <button onClick={() => scrollTo('about')}>O nás</button>
            <button onClick={() => scrollTo('cats')}>Naše kočky</button>
            <button onClick={() => scrollTo('pets')}>Naši mazlíci</button>
            <button onClick={() => scrollTo('breeding')}>Naše odchovy</button>
            <button onClick={() => scrollTo('kittens')}>Aktuální koťata</button>
            <button onClick={() => scrollTo('terms')}>Podmínky</button>
            <button onClick={() => scrollTo('contact')}>Kontakt</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Vítejte na našich stránkách
          </h1>
          <p className="hero-subtitle">Představíme vám naší chovatelskou stanici Mainských mývalích koček</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('about')}>
              O nás
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('kittens')} style={{ background: 'var(--gold-accent)', color: 'var(--dark-bg)' }}>
              Aktuální koťata
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">O nás</h2>
          <div className="about-grid">
            <div className="about-content">
              <h3 style={{ fontSize: '1.8rem', color: 'var(--gold-accent)', marginBottom: '1.5rem', fontFamily: "'Playfair Display', serif" }}>
                Temika
              </h3>
              <p className="about-text" style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-white)' }}>
                Chovatelská stanice Mainských mývalích koček
              </p>
              <p className="about-text">
                Chovatelská stanice byla založena v roce 2021 a název je složen ze jmen mých dcer :)
              </p>
              <p className="about-text">
                Bydlíme v Říčanech u Prahy v klidné lokalitě u lesa. V roce 2020, po 30 letech toužení,
                jsem si pořídila svého prvního maine coona. Oblíbila jsem si toto plemeno a tak přišel
                Olaf, Filip a z holčiček Teminka a potom Bíba.
              </p>
              <p className="about-text">
                Začátky nebyly snadné, ale povedlo se nám to překonat a vše už je na dobré cestě.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000064-8468b8468e/0609856d-4ebe-40b2-be4d-ffd91368dd21-9.jpeg?ph=fa6ab152d7"
                alt="Maine Coon kočka"
                className="about-image"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000064-8468b8468e/0609856d-4ebe-40b2-be4d-ffd91368dd21-9.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000060-6743067432/53114bf5-0de9-4e76-bf36-e67832131b8d.jpeg?ph=fa6ab152d7"
                alt="Maine Coon kočka"
                className="about-image"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000060-6743067432/53114bf5-0de9-4e76-bf36-e67832131b8d.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Cats Section */}
      <section id="cats" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Naše kočky</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-cream)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Seznamte se s našimi krásnými kočkami a kocoury plemene Maine Coon
          </p>

          {/* Teminka - Ajka */}
          <div className="cat-detail">
            <h3 className="cat-name">Teminka</h3>
            <p className="cat-fullname">Ajka Ichib Maine Treasures, narozena 2021</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000082-1dcca1dccb/87f48311-dd9b-4c10-b9ca-396f3a71d655.jpeg"
                alt="Teminka - Ajka"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000082-1dcca1dccb/87f48311-dd9b-4c10-b9ca-396f3a71d655.jpeg")}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000078-9b9469b962/1fc85b72-c5b5-43df-a479-fd465958820f.jpeg"
                alt="Teminka - Ajka"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000078-9b9469b962/1fc85b72-c5b5-43df-a479-fd465958820f.jpeg")}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000080-94c3a94c3c/6af21b01-24bd-4d39-bb8a-056fd50ae1b0.jpeg"
                alt="Teminka - Ajka"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000080-94c3a94c3c/6af21b01-24bd-4d39-bb8a-056fd50ae1b0.jpeg")}
              />
            </div>
            <div className="cat-pedigree">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000445-c0992c0993/Temi%20rodokmen.jpeg"
                alt="Teminka rodokmen"
                className="pedigree-image"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000445-c0992c0993/Temi%20rodokmen.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Maky - Makayla */}
          <div className="cat-detail">
            <h3 className="cat-name">Maky</h3>
            <p className="cat-fullname">Makayla Quotr Maine Treasures, narozena 2023</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000088-ceb81ceb82/028d23ee-569a-4ad1-ba49-b84473bc72b6.jpeg"
                alt="Maky - Makayla"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000088-ceb81ceb82/028d23ee-569a-4ad1-ba49-b84473bc72b6.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000090-5ce5d5ce5e/1f6cfba9-d8b3-4df3-8815-8dbf8a131a0f.jpeg"
                alt="Maky - Makayla"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000090-5ce5d5ce5e/1f6cfba9-d8b3-4df3-8815-8dbf8a131a0f.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000451-8ba398ba3b/maky.jpeg"
                alt="Maky - Makayla"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000451-8ba398ba3b/maky.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="cat-pedigree">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000453-7463c7463e/Maky%20rodokmen.jpeg"
                alt="Maky rodokmen"
                className="pedigree-image"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000453-7463c7463e/Maky%20rodokmen.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Bagi - Bagheera */}
          <div className="cat-detail">
            <h3 className="cat-name">Bagi</h3>
            <p className="cat-fullname">Bagheera Temika, narozena 2024</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000400-420684206a/471415364_9428430317180803_8447038798444350479_n.jpeg"
                alt="Bagi - Bagheera"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000400-420684206a/471415364_9428430317180803_8447038798444350479_n.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000096-d37d8d37db/7f68af1f-030c-45da-b867-6ab773c57fd9.jpeg"
                alt="Bagi - Bagheera"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000096-d37d8d37db/7f68af1f-030c-45da-b867-6ab773c57fd9.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000455-5330a5330b/Bagi.jpeg"
                alt="Bagi - Bagheera"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000455-5330a5330b/Bagi.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="cat-pedigree">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000457-aac08aac0a/Bagi%20rodokmen.jpeg"
                alt="Bagi rodokmen"
                className="pedigree-image"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000457-aac08aac0a/Bagi%20rodokmen.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Kiki - Jacinda */}
          <div className="cat-detail">
            <h3 className="cat-name">Kiki</h3>
            <p className="cat-fullname">Jacinda Cavicoons, narozena 2025</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000473-69b9169b92/574966706_25515987907998454_4611367247989840203_n.jpeg"
                alt="Kiki - Jacinda"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000473-69b9169b92/574966706_25515987907998454_4611367247989840203_n.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000479-9c0949c096/572385945_25515988341331744_3774706529054180252_n.jpeg"
                alt="Kiki - Jacinda"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000479-9c0949c096/572385945_25515988341331744_3774706529054180252_n.jpeg")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000481-08b2a08b2d/766b4e6f-86ec-41f2-a6de-4ce8ac62bf49.jpeg"
                alt="Kiki - Jacinda"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000481-08b2a08b2d/766b4e6f-86ec-41f2-a6de-4ce8ac62bf49.jpeg")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Pets Section */}
      <section id="pets" className="section">
        <div className="container">
          <h2 className="section-title">Naši mazlíci</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-cream)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Zde vám představujeme naše miláčky, kteří nejsou určení k chovu
          </p>

          {/* Spyke Cavicoons - Sebíček */}
          <div className="cat-detail">
            <h3 className="cat-name">Spyke Cavicoons</h3>
            <p className="cat-fullname">Sebíček - Otec mnoha krásných koťat</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000433-a0a06a0a08/0eb6e00a-09d7-46d2-8ea3-92460f2f23a3.jpeg?ph=fa6ab152d7"
                alt="Spyke Cavicoons - Sebíček"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000433-a0a06a0a08/0eb6e00a-09d7-46d2-8ea3-92460f2f23a3.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000435-29c4f29c52/67b3c7c5-edde-4310-a73f-0cfed8a95edd.jpeg?ph=fa6ab152d7"
                alt="Spyke Cavicoons - Sebíček"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000435-29c4f29c52/67b3c7c5-edde-4310-a73f-0cfed8a95edd.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Olaf */}
          <div className="cat-detail">
            <h3 className="cat-name">Olaf</h3>
            <p className="cat-fullname">Náš milovaný mazlíček</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000437-2d2762d278/b4c4a586-dd61-4ca3-9bb1-0ccef4df323c.jpeg?ph=fa6ab152d7"
                alt="Olaf"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000437-2d2762d278/b4c4a586-dd61-4ca3-9bb1-0ccef4df323c.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000439-8148b8148d/adaa157a-a75f-4efe-8d10-dac0f59b3c54.jpeg?ph=fa6ab152d7"
                alt="Olaf"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000439-8148b8148d/adaa157a-a75f-4efe-8d10-dac0f59b3c54.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Filípek */}
          <div className="cat-detail">
            <h3 className="cat-name">Filípek</h3>
            <p className="cat-fullname">Náš krásný kamarád</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000441-397ad397af/1397e616-880e-44af-b77f-a1fe7723e2aa.jpeg?ph=fa6ab152d7"
                alt="Filípek"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000441-397ad397af/1397e616-880e-44af-b77f-a1fe7723e2aa.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000443-d9ecdd9ece/c827d04b-d9d1-409d-a4d8-a54746e879d1.jpeg?ph=fa6ab152d7"
                alt="Filípek"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000443-d9ecdd9ece/c827d04b-d9d1-409d-a4d8-a54746e879d1.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

          {/* Bíba */}
          <div className="cat-detail">
            <h3 className="cat-name">Bíba</h3>
            <p className="cat-fullname">Diana Bob Maine Treasures, narozena 2021</p>
            <div className="cat-gallery">
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000469-1500e15010/bc4dc810-e966-40d8-abdd-a4f584b75888-5.jpeg?ph=fa6ab152d7"
                alt="Bíba - Diana Bob Maine Treasures"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000469-1500e15010/bc4dc810-e966-40d8-abdd-a4f584b75888-5.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
              <img
                src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000471-cd172cd174/2a085ebc-309c-49f5-9623-6fe8b04492a4-6.jpeg?ph=fa6ab152d7"
                alt="Bíba - Diana Bob Maine Treasures"
                className="cat-photo"
                onClick={() => setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000471-cd172cd174/2a085ebc-309c-49f5-9623-6fe8b04492a4-6.jpeg?ph=fa6ab152d7")}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breeding Section */}
      <section id="breeding" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Naše odchovy</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-cream)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Přehled našich vrhů koťat
          </p>

          <div className="breeding-grid">
            {/* Vrh A */}
            <div className="breeding-card" onClick={() => setOpenBreeding('A')}>
              <div className="breeding-header">
                <h3 className="breeding-title">Vrh A</h3>
              </div>
              <div className="breeding-info">
                <div className="breeding-parent">
                  <span className="parent-label">Matka:</span>
                  <span className="parent-name">Diana Bob Maine Treasures</span>
                </div>
                <div className="breeding-parent">
                  <span className="parent-label">Otec:</span>
                  <span className="parent-name">Spyke Cavicoons</span>
                </div>
              </div>
              <div className="breeding-images">
                <img
                  src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000459-ae9ebae9ec/edbfe755-0c1f-404e-826e-65d92515e207.jpeg?ph=fa6ab152d7"
                  alt="Vrh A"
                  className="breeding-photo"
                  onClick={(e) => { e.stopPropagation(); setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000459-ae9ebae9ec/edbfe755-0c1f-404e-826e-65d92515e207.jpeg?ph=fa6ab152d7"); }}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000461-54b9654b98/b9d52af1-4823-4c8e-8e33-53e491e0698f.jpeg?ph=fa6ab152d7"
                  alt="Vrh A"
                  className="breeding-photo"
                  onClick={(e) => { e.stopPropagation(); setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000461-54b9654b98/b9d52af1-4823-4c8e-8e33-53e491e0698f.jpeg?ph=fa6ab152d7"); }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Vrh B */}
            <div className="breeding-card" onClick={() => setOpenBreeding('B')}>
              <div className="breeding-header">
                <h3 className="breeding-title">Vrh B</h3>
              </div>
              <div className="breeding-info">
                <div className="breeding-parent">
                  <span className="parent-label">Matka:</span>
                  <span className="parent-name">Diana Bob Maine Treasures</span>
                </div>
                <div className="breeding-parent">
                  <span className="parent-label">Otec:</span>
                  <span className="parent-name">Spyke Cavicoons</span>
                </div>
              </div>
              <div className="breeding-images">
                <img
                  src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000463-bfa6abfa6c/01098a0f-fdc9-4943-811f-79111249bf6f.jpeg?ph=fa6ab152d7"
                  alt="Vrh B"
                  className="breeding-photo"
                  onClick={(e) => { e.stopPropagation(); setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000463-bfa6abfa6c/01098a0f-fdc9-4943-811f-79111249bf6f.jpeg?ph=fa6ab152d7"); }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Vrh C */}
            <div className="breeding-card" onClick={() => setOpenBreeding('C')}>
              <div className="breeding-header">
                <h3 className="breeding-title">Vrh C</h3>
              </div>
              <div className="breeding-info">
                <div className="breeding-parent">
                  <span className="parent-label">Matka:</span>
                  <span className="parent-name">Ajka Ichib Maine Treasures</span>
                </div>
                <div className="breeding-parent">
                  <span className="parent-label">Otec:</span>
                  <span className="parent-name">Spyke Cavicoons</span>
                </div>
              </div>
              <div className="breeding-images">
                <img
                  src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000465-5f69c5f69e/4ef11054-c65c-4530-a858-472177c0ede5.jpeg?ph=fa6ab152d7"
                  alt="Vrh C"
                  className="breeding-photo"
                  onClick={(e) => { e.stopPropagation(); setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000465-5f69c5f69e/4ef11054-c65c-4530-a858-472177c0ede5.jpeg?ph=fa6ab152d7"); }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Vrh D */}
            <div className="breeding-card" onClick={() => setOpenBreeding('D')}>
              <div className="breeding-header">
                <h3 className="breeding-title">Vrh D</h3>
              </div>
              <div className="breeding-info">
                <div className="breeding-parent">
                  <span className="parent-label">Matka:</span>
                  <span className="parent-name">Makayla Quotr Maine Treasures</span>
                </div>
                <div className="breeding-parent">
                  <span className="parent-label">Otec:</span>
                  <span className="parent-name">Spyke Cavicoons</span>
                </div>
              </div>
              <div className="breeding-images">
                <img
                  src="https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000467-45c7545c77/fb655dc1-6e83-434d-b264-7f6436850b55.jpeg?ph=fa6ab152d7"
                  alt="Vrh D"
                  className="breeding-photo"
                  onClick={(e) => { e.stopPropagation(); setViewImage("https://fa6ab152d7.cbaul-cdnwnd.com/fe87b4eb0eb1b548203f045e2935b53b/200000467-45c7545c77/fb655dc1-6e83-434d-b264-7f6436850b55.jpeg?ph=fa6ab152d7"); }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kittens Section */}
      <section id="kittens" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Aktuální koťata</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-cream)', fontSize: '1.2rem', padding: '2rem 0' }}>
            Teď koťata momentálně nemáme
          </p>
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="section section-alt">
        <div className="container-narrow">
          <h2 className="section-title">Podmínky rezervace a odběru</h2>
          <p style={{ textAlign: 'center', color: 'var(--text-cream)', marginBottom: '3rem', fontSize: '1.1rem' }}>
            Vše, co potřebujete vědět o adopci našich koťat
          </p>
          <div className="terms-list">
            <div className="term-item">
              <div className="term-number">1</div>
              <div className="term-content">
                <h3>Jak probíhá rezervace</h3>
                <p>
                  Rezervace kotěte probíhá formou rezervační zálohy ve výši 5 000 Kč. Po zaplacení zálohy
                  vám zašleme rezervační smlouvu. Záloha je nevratná, avšak je možné ji převést na jiné
                  kotě z našich budoucích vrhů.
                </p>
              </div>
            </div>

            <div className="term-item">
              <div className="term-number">2</div>
              <div className="term-content">
                <h3>Co je v ceně kotěte</h3>
                <ul>
                  <li>Průkaz původu (PP) z Klubu chovatelů koček</li>
                  <li>Veterinární průkaz s očkováním a odčervením</li>
                  <li>Základní očkování proti běžným chorobám</li>
                  <li>Čip pro identifikaci zvířete</li>
                  <li>Startovací balíček (krmivo, hračky, deka s vůní matky)</li>
                  <li>Poradenství a celoživotní podpora chovatele</li>
                </ul>
              </div>
            </div>

            <div className="term-item">
              <div className="term-number">3</div>
              <div className="term-content">
                <h3>Kdy je možný odběr</h3>
                <p>
                  Koťata opouštějí naši chovatelskou stanici nejdříve ve věku 12-14 týdnů. V tomto věku
                  jsou již plně očkovaná, naučená používat WC, zcela socializovaná a připravená na nový domov.
                  Přesný termín odběru si domluvíme individuálně.
                </p>
              </div>
            </div>

            <div className="term-item">
              <div className="term-number">4</div>
              <div className="term-content">
                <h3>Doprava kotěte</h3>
                <p>
                  Preferujeme osobní předání kotěte v našem sídle, kde si můžete s kočkou i jejím prostředím
                  udělat představu.
                </p>
              </div>
            </div>

            <div className="term-item">
              <div className="term-number">5</div>
              <div className="term-content">
                <h3>Kupní smlouva</h3>
                <p>
                  Při odběru kotěte podepíšeme kupní smlouvu, která ošetruje práva a povinnosti obou stran.
                  Smlouva obsahuje záruky zdravotního stavu kotěte a závazek, že v případě nečekaných okolností
                  má chovatel přednostní právo kotě odkoupit zpět.
                </p>
              </div>
            </div>

            <div className="term-item">
              <div className="term-number">6</div>
              <div className="term-content">
                <h3>Veterinární péče</h3>
                <p>
                  Všechna naše koťata jsou před předáním veterinárně vyšetřena a očkována. Doporučujeme
                  pokračovat v pravidelných veterinárních kontrolách a očkování. Rádi vám poskytneme
                  doporučení na osvědčeného veterináře.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Kontakt</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="contact-title">Telefon</h3>
              <p className="contact-name">Michaela Přibilová</p>
              <a href="tel:+420725518336" className="contact-link">+420 725 518 336</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="contact-title">E-mail</h3>
              <a href="mailto:dog.ouni@volny.cz" className="contact-link">dog.ouni@volny.cz</a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="contact-title">Adresa</h3>
              <p className="contact-address">
                Letní 73/5<br />
                Říčany u Prahy<br />
                251 01
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <h3 className="contact-title">Facebook skupina</h3>
              <a href="https://www.facebook.com/groups/temikacoon/?ref=share" target="_blank" rel="noopener noreferrer" className="contact-link">
                Temika Coon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="footer-brand">TEMIKA</div>
              <p className="footer-desc">
                Chovatelská stanice Maine Coon zaměřená na zdravé a krásné kočky s vynikající povahou.
              </p>
            </div>

            <div className="footer-section">
              <h4>Rychlé odkazy</h4>
              <div className="footer-links">
                <button onClick={() => scrollTo('about')}>O nás</button>
                <button onClick={() => scrollTo('cats')}>Naše kočky</button>
                <button onClick={() => scrollTo('pets')}>Naši mazlíci</button>
                <button onClick={() => scrollTo('breeding')}>Naše odchovy</button>
                <button onClick={() => scrollTo('kittens')}>Aktuální koťata</button>
                <button onClick={() => scrollTo('terms')}>Podmínky</button>
                <button onClick={() => scrollTo('contact')}>Kontakt</button>
              </div>
            </div>

            <div className="footer-section">
              <h4>Právní informace</h4>
              <div className="footer-links">
                <a href="#">Ochrana osobních údajů</a>
                <a href="#">Obchodní podmínky</a>
                <p style={{ marginTop: '1rem', fontSize: '0.85rem', opacity: 0.6 }}>
                  Fotografie: Pexels
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TEMIKA. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>

      {openBreeding && (
        <BreedingModal
          breedingId={openBreeding}
          onClose={() => setOpenBreeding(null)}
          onImageClick={(imageUrl) => setViewImage(imageUrl)}
        />
      )}

      {viewImage && (
        <ImageViewer
          imageUrl={viewImage}
          onClose={() => setViewImage(null)}
        />
      )}
    </div>
  );
}

export default App;
