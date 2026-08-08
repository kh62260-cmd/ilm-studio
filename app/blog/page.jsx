import Link from "next/link";

const articles = [
  {
    category: "Quran",
    title: "Quran Se Hidayat Aur Sukoon Kaise Hasil Karein?",
    excerpt:
      "Quran Majeed momin ke liye hidayat, rehnumai aur dil ke sukoon ka azeem zariya hai.",
    slug: "quran-se-hidayat-aur-sukoon",
    readTime: "4 min read",
    icon: "☪",
  },
  {
    category: "Hadith",
    title: "Achhe Akhlaq Ki Islam Mein Ahmiyat",
    excerpt:
      "Islam mein husn-e-akhlaq ki bohat ahmiyat hai. Achha kirdar Muslim ki zindagi ka aham hissa hai.",
    slug: "achhe-akhlaq-ki-islam-mein-ahmiyat",
    readTime: "4 min read",
    icon: "☀",
  },
  {
    category: "Islamic Reminder",
    title: "Allah Par Tawakkul Karna Kya Hai?",
    excerpt:
      "Tawakkul ka matlab Allah par bharosa karte hue apni koshish jaari rakhna hai.",
    slug: "allah-par-tawakkul",
    readTime: "3 min read",
    icon: "✦",
  },
  {
    category: "Islamic Stories",
    title: "Sabr Aur Mushkil Waqt Se Milne Wali Seekh",
    excerpt:
      "Mushkil waqt insaan ko sabr, dua aur Allah par bharosa karne ka mauqa deta hai.",
    slug: "sabr-aur-mushkil-waqt",
    readTime: "4 min read",
    icon: "☾",
  },
  {
    category: "Inspirational",
    title: "Namaz Ko Apni Zindagi Ka Hissa Banayein",
    excerpt:
      "Namaz Allah ke saath apne talluq ko mazboot karne aur zindagi mein discipline lane ka zariya hai.",
    slug: "namaz-ki-ahmiyat",
    readTime: "3 min read",
    icon: "✧",
  },
  {
    category: "Duas",
    title: "Rozmarrah Zindagi Mein Dua Ki Ahmiyat",
    excerpt:
      "Dua momin ka Allah ke saath khaas talluq hai. Apni zaroorat aur pareshani Allah ke samne rakhein.",
    slug: "dua-ki-ahmiyat",
    readTime: "3 min read",
    icon: "✦",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-32 md:py-40">

        <div className="absolute inset-0 islamic-pattern opacity-10"></div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.10),transparent_55%)]"></div>

        <div className="container-custom relative z-10 text-center">

          <p className="text-gold font-semibold tracking-[0.3em] uppercase mb-5">
            Ilm Studio
          </p>

          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-gold font-bold">
            Islamic Articles
          </h1>

          <p className="max-w-3xl mx-auto mt-7 text-gray-300 text-lg md:text-xl leading-9">
            Quran, Hadith, Islamic reminders, inspirational stories aur
            beneficial Islamic knowledge — sab ek jagah.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          </div>

        </div>
      </section>

      {/* Articles */}
      <section className="py-20 md:py-28 bg-[#070707]">

        <div className="container-custom">

          <div className="text-center mb-14">

            <p className="text-gray-500 uppercase tracking-widest text-sm">
              Explore Knowledge
            </p>

            <h2 className="font-heading text-3xl md:text-4xl text-white mt-3">
              Latest Islamic Articles
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {articles.map((article) => (

              <article
                key={article.slug}
                className="article-card group"
              >

                {/* Article Visual Header */}
                <div className="article-visual">

                  <div className="article-pattern"></div>

                  <div className="article-icon">
                    {article.icon}
                  </div>

                  <div className="article-number">
                    ILM STUDIO
                  </div>

                </div>

                {/* Card Content */}
                <div className="article-body">

                  <div className="article-meta">

                    <span className="article-category">
                      {article.category}
                    </span>

                    <span className="article-time">
                      {article.readTime}
                    </span>

                  </div>

                  <h2 className="article-title">
                    {article.title}
                  </h2>

                  <p className="article-excerpt">
                    {article.excerpt}
                  </p>

                  <Link
                    href={`/blog/${article.slug}`}
                    className="article-read"
                  >
                    <span>Read Article</span>
                    <span className="article-arrow">→</span>
                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* YouTube CTA */}
      <section className="py-24 bg-[#0b0b0b]">

        <div className="container-custom">

          <div className="relative overflow-hidden rounded-3xl border border-[rgba(212,175,55,.2)] bg-[#111] px-8 py-16 text-center">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]"></div>

            <div className="relative z-10">

              <p className="text-gold font-semibold tracking-widest uppercase text-sm">
                Ilm Studio
              </p>

              <h2 className="font-heading text-3xl md:text-5xl text-white mt-4">
                More Islamic Knowledge on YouTube
              </h2>

              <p className="max-w-2xl mx-auto text-gray-400 mt-5 leading-8">
                Islamic stories, Quran, Hadith aur inspirational content ke
                liye hamare YouTube channel ko visit karein.
              </p>

              <a
                href="https://www.youtube.com/@ilmStudioOffical"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-block mt-8"
              >
                ▶ Watch on YouTube
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}