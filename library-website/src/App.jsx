import songOfIceAndFireCover from './assets/books/song-of-ice-and-fire.jpg'
import theHobbitCover from './assets/books/the-hobbit.jpg'
import narniaCover from './assets/books/narnia.jpg'
import harryPotterCover from './assets/books/harry-potter.webp'
import percyJacksonCover from './assets/books/percy-jackson.jpg'
import lordOfTheRingsCover from './assets/books/lord-of-the-rings.jpg'
import tccLogo from './assets/tcc-logo.png'

const navigation = ['Home', 'Collections', 'Services', 'Programs', 'Visit']

const collections = [
  {
    code: 'PH',
    title: 'Filipiniana Shelf',
    description:
      'Regional literature, local history, and cultural studies that ground students in place.',
    accent: 'from-emerald-200 via-teal-50 to-white',
  },
  {
    code: 'RJ',
    title: 'Research Journals',
    description:
      'Peer-reviewed publications and current academic writing for reports, theses, and capstones.',
    accent: 'from-sky-200 via-cyan-50 to-white',
  },
  {
    code: 'AR',
    title: 'Archive Room',
    description:
      'School documents, campus publications, and preserved community materials for browsing.',
    accent: 'from-amber-200 via-orange-50 to-white',
  },
  {
    code: 'DL',
    title: 'Digital Learning',
    description:
      'Curated e-books, reading lists, and study guides for flexible, device-friendly learning.',
    accent: 'from-violet-200 via-fuchsia-50 to-white',
  },
  {
    code: 'RF',
    title: 'Reference Finder',
    description:
      'Encyclopedias, handbooks, citation support, and quick-reference materials in one place.',
    accent: 'from-rose-200 via-pink-50 to-white',
  },
  {
    code: 'NW',
    title: 'New Arrivals',
    description:
      'Freshly featured titles for education, technology, communication, and general reading.',
    accent: 'from-lime-200 via-emerald-50 to-white',
  },
]

const featuredBooks = [
  {
    category: 'Fantasy',
    title: 'A Song of Ice and Fire',
    author: 'George R. R. Martin',
    cover: songOfIceAndFireCover,
  },
  {
    category: 'Fantasy',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    cover: theHobbitCover,
  },
  {
    category: 'Fantasy',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    cover: narniaCover,
  },
  {
    category: 'Fantasy',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
    cover: harryPotterCover,
  },
  {
    category: 'Adventure',
    title: 'Percy Jackson and the Olympians',
    author: 'Rick Riordan',
    cover: percyJacksonCover,
  },
  {
    category: 'Fantasy',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    cover: lordOfTheRingsCover,
  },
]

const services = [
  {
    title: 'Study Support',
    text: 'Reserve quiet reading zones, browse recommended reading paths, and prepare with citation help.',
  },
  {
    title: 'Research Guidance',
    text: 'Find trustworthy starting points for academic papers, case studies, and classroom presentations.',
  },
  {
    title: 'Campus Access',
    text: 'View opening hours, borrowing reminders, and collection highlights from any device.',
  },
]

const quickFacts = [
  { label: 'Weekly hours', value: '48' },
  { label: 'Curated shelves', value: '12' },
  { label: 'Student spaces', value: '6' },
]

const contactEmail = 'library@tcc.example'
const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}&su=${encodeURIComponent('Inquiry for Tagoloan Community College Library')}`

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-stone-100 text-slate-900">
      <header className="relative border-b border-white/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-emerald-900 sm:px-6 lg:px-8">
          <span>Tagoloan Community College</span>
          <span className="hidden text-slate-500 sm:inline">
            Student reading and research hub
          </span>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-100 bg-white/90 p-1 shadow-lg shadow-emerald-900/10">
                <img
                  src={tccLogo}
                  alt="Tagoloan Community College logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800">
                  Library Website
                </p>
                <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Tagoloan Community College Library
                </h1>
              </div>
            </div>

            <nav
              aria-label="Primary"
              className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700"
            >
              {navigation.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-full px-4 py-2 transition hover:bg-emerald-900 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="relative">
        <section
          id="home"
          className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-16 lg:pt-14"
        >
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur sm:p-8 lg:p-10">
              <p className="mb-4 inline-flex rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-900">
                Discover, study, connect
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                A calm, modern library space for curious learners and campus
                researchers.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Designed for Tagoloan Community College, this library homepage
                highlights collections, featured books, and student support
                areas through a design that feels welcoming, academic, and
                mobile-friendly.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#featured"
                  className="rounded-full bg-emerald-900 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  Browse featured shelves
                </a>
                <a
                  href="#visit"
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:text-emerald-900"
                >
                  View library hours
                </a>
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-sky-50 p-4 shadow-inner shadow-emerald-100/40 sm:p-5">
                <label
                  htmlFor="catalog-search"
                  className="mb-3 block text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
                >
                  Search the library guide
                </label>
                <div className="flex flex-col gap-3 lg:flex-row">
                  <input
                    id="catalog-search"
                    type="text"
                    placeholder="Try: education journals, filipiniana, study guides..."
                    className="h-14 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-emerald-500"
                  />
                  <button
                    type="button"
                    className="h-14 rounded-full bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Search resources
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-3xl font-semibold text-slate-950">{fact.value}</p>
                    <p className="mt-1 text-sm text-slate-500">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)] sm:p-8">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">
                    Today at the library
                  </p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    Open now
                  </span>
                </div>
                <div className="mt-8 rounded-[1.75rem] bg-white/6 p-5 ring-1 ring-white/10">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                    Library hours
                  </p>
                  <p className="mt-3 text-3xl font-semibold">8:00 AM - 5:00 PM</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Monday to Friday access for reading, circulation, and study
                    support. Weekend events can be featured here later if
                    needed.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] bg-emerald-400/15 p-5 ring-1 ring-emerald-300/20">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                      Suggested zone
                    </p>
                    <p className="mt-3 text-xl font-semibold">Quiet reading nook</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Best for focused reading, note taking, and solo review
                      sessions.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-sky-400/15 p-5 ring-1 ring-sky-300/20">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
                      Weekly spotlight
                    </p>
                    <p className="mt-3 text-xl font-semibold">Capstone prep desk</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      A visible place to surface guides, deadlines, and research
                      pointers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Quick links
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {['New books', 'Reading lists', 'Research help', 'Library rules'].map(
                    (item) => (
                      <a
                        key={item}
                        href="#services"
                        className="rounded-[1.35rem] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700 transition hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-900"
                      >
                        {item}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section
          id="featured"
          className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20"
        >
          <div className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">
                  Featured books
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Popular shelf picks students will notice right away
                </h3>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Featured titles now sit directly below the hero so visitors can
                immediately see the highlighted books when they land on the
                homepage.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {featuredBooks.map((book) => (
                <article
                  key={book.title}
                  className="book-card group transition duration-500 hover:z-10"
                >
                  <div className="book-card-cover overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-lg transition duration-500">
                    <img
                      src={book.cover}
                      alt={`${book.title} book cover`}
                      className="book-card-image h-96 w-full object-cover object-center transition duration-500 xl:h-80"
                    />
                  </div>
                  <div className="book-card-copy px-1 pt-4 transition duration-500">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-800 transition duration-500">
                      {book.category}
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-snug text-slate-900">
                      {book.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{book.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="collections"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">
                Explore collections
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">
                A different layout from the sample, shaped for a college library.
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Instead of copying the reference, this version uses softer
              academic tones, rounded panels, and editorial-style cards that
              make the homepage feel more like a guided campus resource.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {collections.map((item) => (
              <article
                key={item.title}
                className={`rounded-[2rem] border border-white/70 bg-gradient-to-br ${item.accent} p-6 shadow-[0_22px_50px_rgba(15,23,42,0.08)]`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-white/80 bg-white/80 text-lg font-bold tracking-[0.32em] text-slate-700 shadow-sm">
                  {item.code}
                </div>
                <h4 className="mt-8 text-2xl font-semibold text-slate-950">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <a
                  href="#featured"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                >
                  Open shelf view
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 p-8 text-white shadow-[0_30px_80px_rgba(6,78,59,0.32)] lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
                Library support
              </p>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Student-friendly sections ready for library content.
              </h3>
              <p className="mt-5 text-sm leading-8 text-emerald-50/80 sm:text-base">
                The page already includes places for search, featured books,
                hours, services, and collection categories, giving the library a
                strong digital home for readers and researchers.
              </p>

              <div className="mt-8 space-y-4">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                  >
                    <h4 className="text-xl font-semibold">{service.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {service.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                Library access
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                Quick student reminders
              </h3>

              <div className="mt-8 space-y-4">
                {[
                  ['Borrowing', 'Bring your school ID to check out available titles.'],
                  ['Quiet hours', 'Morning study periods are best for silent reading and review.'],
                  ['Book requests', 'Ask the librarian about class references and reserved materials.'],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
                  >
                    <p className="text-lg font-semibold text-slate-900">{title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="programs"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-800">
                  Programs and spaces
                </p>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">
                  Spaces that feel useful on campus and clear on mobile.
                </h3>
                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600 sm:text-base">
                  This concept balances structure and warmth: large headings,
                  flexible cards, readable spacing, and a responsive layout that
                  holds up from desktop down to smaller screens.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Reading circle corner',
                  'Media and internet station',
                  'Research consultation desk',
                  'Freshman orientation board',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-slate-200 bg-stone-50 p-5"
                  >
                    <div className="mb-4 h-2 w-16 rounded-full bg-gradient-to-r from-emerald-700 to-sky-500" />
                    <p className="text-lg font-semibold text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        id="visit"
        className="relative border-t border-white/80 bg-slate-950 text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-300">
              Visit and contact
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Tagoloan Community College Library Website
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              A welcoming digital space for browsing, discovery, and campus
              information, designed to help students explore books, services,
              and library hours with ease.
            </p>
          </div>

          <div className="grid gap-4 text-sm text-slate-300 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">Library Hours</p>
              <p className="mt-2">Monday to Friday</p>
              <p>8:00 AM - 5:00 PM</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-white">Contact</p>
              <p className="mt-2">Tagoloan, Misamis Oriental</p>
              <p>{contactEmail}</p>
              <a
                href={gmailComposeLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
