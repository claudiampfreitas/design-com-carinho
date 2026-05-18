import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import art1 from "@/assets/art1.jpg";
import art2 from "@/assets/art2.jpg";
import art3 from "@/assets/art3.jpg";
import art4 from "@/assets/art4.jpg";
import art5 from "@/assets/art5.jpg";
import art6 from "@/assets/art6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MixTech Studio — Design acolhedor para sua marca" },
      {
        name: "description",
        content:
          "Design personalizado, banners, artes e divulgação para pequenas marcas. Fale com a MixTech Studio pelo WhatsApp.",
      },
      { property: "og:title", content: "MixTech Studio" },
      {
        property: "og:description",
        content: "Design acolhedor, simples e sofisticado para sua marca.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP_NUMBER = "5531999998888";
const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da MixTech Studio e tenho interesse nos serviços de design.";
const waLink = (extra?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    extra ? `${WHATSAPP_MESSAGE} ${extra}` : WHATSAPP_MESSAGE,
  )}`;

const services = [
  {
    name: "Arte avulsa",
    desc: "Posts, stories e pequenas peças sob medida.",
    price: "a partir de R$ 35",
  },
  {
    name: "Pacote de posts",
    desc: "Conjunto de artes para sua semana no Instagram.",
    price: "a partir de R$ 180",
  },
  {
    name: "Banners & capas",
    desc: "Banners para redes sociais, eventos e divulgação.",
    price: "a partir de R$ 60",
  },
  {
    name: "Identidade visual mini",
    desc: "Logo, paleta e tipografia para começar com o pé direito.",
    price: "a partir de R$ 290",
  },
  {
    name: "Divulgação de marca",
    desc: "Acompanhamento criativo para pequenas marcas crescerem.",
    price: "sob consulta",
  },
  {
    name: "Convites & lembrancinhas",
    desc: "Arte digital para datas especiais e momentos únicos.",
    price: "a partir de R$ 45",
  },
];

const gallery = [
  { src: art1, alt: "Composição abstrata em terracota" },
  { src: art2, alt: "Ilustração floral delicada" },
  { src: art3, alt: "Identidade visual em cartão de visita" },
  { src: art4, alt: "Formas orgânicas em aquarela" },
  { src: art5, alt: "Convite elegante com flores secas" },
  { src: art6, alt: "Embalagem artesanal" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          MixTech<span className="text-primary">.</span>Studio
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#servicos" className="hover:text-foreground transition">Serviços</a>
          <a href="#sobre" className="hover:text-foreground transition">Sobre</a>
          <a href="#galeria" className="hover:text-foreground transition">Galeria</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-whatsapp-foreground hover:opacity-90 transition"
        >
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary mb-6">
            Estúdio de design personalizado
          </span>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-foreground">
            Design feito com{" "}
            <em className="text-primary not-italic font-normal">carinho</em>,
            do seu jeitinho.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
            Aqui na MixTech Studio a gente transforma sua ideia em arte — sem
            complicação, com conversa próxima e um café virtual de boas-vindas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-base font-medium text-whatsapp-foreground hover:opacity-90 transition shadow-sm"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Fazer um pedido
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center rounded-full border border-border bg-card px-6 py-3 text-base font-medium hover:bg-muted transition"
            >
              Ver serviços
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-accent/40 rounded-3xl rotate-2" />
          <img
            src={heroImg}
            alt="Espaço aconchegante com elementos de design"
            width={1280}
            height={1280}
            className="relative rounded-3xl shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-primary">
            Catálogo
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">
            Serviços & valores
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Cada pedido é único — esses são os pontos de partida. Conta pra
            gente o que você precisa e ajustamos juntos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.name}
              className="group rounded-2xl border border-border bg-background p-7 hover:border-primary/40 hover:-translate-y-1 transition-all"
            >
              <h3 className="font-display text-2xl">{s.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {s.price}
                </span>
                <a
                  href={waLink(`Tenho interesse em: ${s.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 group-hover:text-primary transition"
                >
                  Pedir →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary">
          Sobre nós
        </span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">
          Um estúdio que escuta antes de criar.
        </h2>
        <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            A MixTech Studio nasceu da vontade de tornar o design acessível,
            humano e bonito. Aqui no Instagram, atendemos pessoas e pequenas
            marcas que querem se comunicar com clareza — sem precisar entender
            de software ou termos técnicos.
          </p>
          <p>
            Você conta a sua ideia (mesmo que esteja embolada na cabeça), e a
            gente cuida do resto: pensa, desenha, ajusta e entrega no
            tempinho combinado. Arte não precisa ser complicada — precisa ser
            sua.
          </p>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-card">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary">
              Inspiração
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              Pequenas artes, grandes ideias.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Uma seleção de peças para você imaginar o que podemos criar
            juntas.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((g, i) => (
            <figure
              key={i}
              className={`overflow-hidden rounded-2xl bg-muted shadow-sm ${
                i % 5 === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="relative rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-accent/30 blur-2xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl">
              Bora dar vida à sua ideia?
            </h2>
            <p className="mt-5 text-lg opacity-90 max-w-lg mx-auto">
              Chama no WhatsApp e conta o que você imagina. Respondemos com
              aquele jeitinho de conversa entre amigas.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-7 py-4 text-base font-medium hover:bg-accent transition"
            >
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" />
              (31) 99999-8888
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MixTech Studio. Feito com carinho.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://instagram.com/mixtechstudio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            <InstagramIcon className="h-4 w-4" />
            @mixtechstudio
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-whatsapp transition"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.768.967-.941 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2.003a9.996 9.996 0 00-8.504 15.31L2 22l4.79-1.503a9.998 9.998 0 005.255 1.498h.004c5.523 0 10.012-4.488 10.014-10.01a9.94 9.94 0 00-2.93-7.075A9.94 9.94 0 0012.04 2.003zm0 18.227h-.003a8.32 8.32 0 01-4.236-1.16l-.304-.18-2.842.892.91-2.77-.198-.31a8.288 8.288 0 01-1.273-4.41c.002-4.583 3.732-8.31 8.32-8.31a8.272 8.272 0 015.882 2.437 8.27 8.27 0 012.435 5.881c-.002 4.583-3.732 8.31-8.318 8.31z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
