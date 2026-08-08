import Link from "next/link";

const articles = {
  "quran-se-hidayat-aur-sukoon": {
    category: "Quran",
    title: "Quran Se Hidayat Aur Sukoon Kaise Hasil Karein?",
    intro:
      "Quran Majeed Allah ki taraf se nazil hone wali hidayat ki kitaab hai. Is mein insaan ke liye aqeedah, ibadat, akhlaq aur zindagi ke behtareen usoolon ki rehnumai milti hai.",
    sections: [
      {
        heading: "Quran Se Rishta Mazboot Karein",
        text:
          "Quran ko sirf padhna hi nahi balki samajhna aur uski taleemat par amal karna bhi zaroori hai. Rozana thora waqt Quran ki tilawat aur tarjume ko samajhne ke liye nikalna ek behtareen aadat hai.",
      },
      {
        heading: "Mushkil Waqt Mein Quran",
        text:
          "Jab insaan pareshani, gham ya uncertainty ka samna karta hai to Allah ki yaad aur Quran ki hidayat uske dil ko mazboot kar sakti hai. Quran humein Allah par bharosa, sabr aur umeed ki taleem deta hai.",
      },
      {
        heading: "Quran Ki Taleemat Par Amal",
        text:
          "Quran ki asal khoobsurti us waqt samne aati hai jab hum uski taleemat ko apni zindagi ka hissa banate hain. Sach bolna, insaf karna, walidain ke saath husn-e-sulook aur zarooratmandon ki madad is hidayat ka hissa hain.",
      },
    ],
  },

  "achhe-akhlaq-ki-islam-mein-ahmiyat": {
    category: "Hadith",
    title: "Achhe Akhlaq Ki Islam Mein Ahmiyat",
    intro:
      "Islam mein achhe akhlaq ko bohat ahmiyat di gayi hai. Musalman ka rawaiya, guftagu aur doosron ke saath muamla uske kirdar ka aham hissa hai.",
    sections: [
      {
        heading: "Narmi Aur Husn-e-Sulook",
        text:
          "Doosron ke saath narmi se pesh aana, unki izzat karna aur takleef dene se bachna Islamic akhlaq ka hissa hai.",
      },
      {
        heading: "Sachai Aur Amanat",
        text:
          "Sach bolna aur amanat ki hifazat karna Muslim ke kirdar ki bunyadi khoobiyan hain. Ye qualities insaan ke ghar, doston aur muashray ke talluqaat ko mazboot karti hain.",
      },
      {
        heading: "Akhlaq Ko Rozmarrah Zindagi Mein Lana",
        text:
          "Achhe akhlaq sirf baaton tak mehdoood nahi hone chahiye. Ghar walon, padosiyon, classmates aur colleagues ke saath hamara rawaiya bhi Islamic values ko reflect karna chahiye.",
      },
    ],
  },

  "allah-par-tawakkul": {
    category: "Islamic Reminder",
    title: "Allah Par Tawakkul Karna Kya Hai?",
    intro:
      "Tawakkul ka matlab Allah par bharosa karna hai, jabke insaan apni taraf se jaiz aur zaroori koshish bhi karta rahe.",
    sections: [
      {
        heading: "Tawakkul Aur Koshish",
        text:
          "Allah par bharosa karne ka matlab ye nahi ke insaan apni koshish chhor de. Muslim apne ikhtiyar mein jo behtareen koshish kar sakta hai karta hai aur phir natija Allah ke hawale karta hai.",
      },
      {
        heading: "Pareshani Mein Allah Ko Yaad Karna",
        text:
          "Mushkil waqt mein dua, sabr aur Allah par bharosa insaan ko umeed deta hai. Har situation mein Allah se madad maangna momin ke liye ek aham sahara hai.",
      },
      {
        heading: "Dil Ka Sukoon",
        text:
          "Jab insaan apni koshish ke baad Allah ke faisle par razi rehne ki koshish karta hai to uske andar sabr aur sukoon paida hota hai.",
      },
    ],
  },

  "sabr-aur-mushkil-waqt": {
    category: "Islamic Stories",
    title: "Sabr Aur Mushkil Waqt Se Milne Wali Seekh",
    intro:
      "Zindagi mein mushkilaat aana fitri hai. Islam humein mushkil waqt mein sabr, dua aur Allah par bharosa karne ki taleem deta hai.",
    sections: [
      {
        heading: "Mushkil Waqt Hamesha Ek Jaisa Nahi Rehta",
        text:
          "Pareshani ke waqt insaan ko umeed nahi chhorni chahiye. Halat badalte rehte hain aur momin Allah ki rehmat se mayoos nahi hota.",
      },
      {
        heading: "Sabr Ka Matlab",
        text:
          "Sabr ka matlab sirf khamosh rehna nahi. Sabr mein Allah ki ita'at par qayam rehna, gunah se bachna aur mushkilaat mein apne rawaiye ko behtar rakhna bhi shamil hai.",
      },
      {
        heading: "Mushkilaat Se Seekhein",
        text:
          "Har mushkil insaan ko apne aap ko behtar banane, dua ki taraf lautne aur Allah ke saath apna talluq mazboot karne ka mauqa de sakti hai.",
      },
    ],
  },

  "namaz-ki-ahmiyat": {
    category: "Inspirational",
    title: "Namaz Ko Apni Zindagi Ka Hissa Banayein",
    intro:
      "Namaz Islam ki bunyadi ibadat hai aur Muslim ki rozmarrah zindagi mein Allah ke saath talluq ko mazboot karne ka aham zariya hai.",
    sections: [
      {
        heading: "Namaz Aur Allah Se Talluq",
        text:
          "Namaz ke zariye insaan apne Rab ko yaad karta hai aur apni zindagi mein Allah ki bandagi ko central place deta hai.",
      },
      {
        heading: "Consistency Kaise Banayein?",
        text:
          "Namaz ki pabandi ke liye waqt ki planning karein, azan ko reminder banayein aur namaz ko daily routine ka fixed hissa samjhein.",
      },
      {
        heading: "Namaz Aur Discipline",
        text:
          "Paanch waqt ki namaz din ko structured banane mein madad karti hai aur insaan ko apni spiritual responsibilities yaad dilati hai.",
      },
    ],
  },

  "dua-ki-ahmiyat": {
    category: "Duas",
    title: "Rozmarrah Zindagi Mein Dua Ki Ahmiyat",
    intro:
      "Dua Allah ke saath bande ke talluq ka ek aham zariya hai. Muslim apni zaroorat, pareshani aur umeed Allah ke samne rakhta hai.",
    sections: [
      {
        heading: "Har Haal Mein Allah Se Maangna",
        text:
          "Dua sirf mushkil waqt ke liye nahi. Khushi, sehat, rizq, ilm aur rozmarrah ke mamlaat mein bhi Allah se khair maangni chahiye.",
      },
      {
        heading: "Dua Ke Saath Amal",
        text:
          "Dua ke saath apni taraf se halal aur jaiz koshish karna bhi zaroori hai. Insaan Allah se madad maangte hue apni responsibility poori karta hai.",
      },
      {
        heading: "Umeed Aur Sabr",
        text:
          "Dua karte hue Allah ki rehmat se umeed rakhna aur sabr karna momin ke liye bohat aham hai.",
      },
    ],
  },
};

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-heading text-5xl text-gold font-bold">
            Article Not Found
          </h1>

          <p className="text-gray-400 mt-5">
            Ye article available nahi hai.
          </p>

          <Link
            href="/blog"
            className="inline-block mt-8 gold-btn"
          >
            ← Back to Articles
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Article Header */}
        <section className="article-page-hero">

        <div className="absolute inset-0 islamic-pattern opacity-10"></div>

        <div className="article-hero-glow"></div>

        <div className="container-custom relative z-10 max-w-4xl mx-auto">

        <Link
        href="/blog"
        className="article-back"
        >
         ← All Articles
        </Link>

        <div className="article-header-card">

        <span className="article-page-category">
         {article.category}
        </span>

        <h1 className="article-page-title">
            {article.title}
        </h1>

        <div className="article-divider"></div>

        <p className="article-page-intro">
            {article.intro}
        </p>

    </div>

  </div>
</section>

      {/* Article Content */}
<section className="article-content-section">

  <article className="container-custom max-w-4xl mx-auto">

    <div className="article-content-card">

      {article.sections.map((section, index) => (
        <section
          key={index}
          className="article-content-block"
        >

          <div className="article-section-number">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div>

            <h2 className="article-content-heading">
              {section.heading}
            </h2>

            <p className="article-content-text">
              {section.text}
            </p>

          </div>

        </section>
      ))}

    </div>

    {/* Back Button */}
    <div className="article-bottom-nav">

      <Link
        href="/blog"
        className="outline-btn inline-flex"
      >
        ← Back to Articles
      </Link>

    </div>

  </article>
</section>

    </main>
  );
}