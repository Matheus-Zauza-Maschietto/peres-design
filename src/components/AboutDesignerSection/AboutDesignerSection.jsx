import SectionLabel from "./Components/SectionLabel";
import DesignerPhoto from "./Components/DesignerPhoto";
import DecorativeDivider from "./Components/DecorativeDivider";
import DesignerQuote from "./Components/DesignerStats";

export default function AboutDesignerSection() {
  return (
    <section id="sobre" aria-label="Sobre mim" className="section-block overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">

        {/* Coluna da Imagem */}
        <DesignerPhoto />

        {/* Coluna do Texto */}
        <div
          className="flex flex-col justify-center px-6 md:px-12 lg:pl-16 lg:pr-24 py-12 lg:py-20"
          style={{ background: "linear-gradient(135deg, rgba(130,178,190,0.07) 0%, rgba(204,153,194,0.07) 100%)" }}
        >
          {/* Etiqueta de seção */}
          <SectionLabel>Sobre mim</SectionLabel>

          {/* Título com borda-esquerda em primary-2 */}
          <div
            className="pl-5 mb-8"
            style={{ borderLeft: "3px solid var(--color-primary-2)" }}
          >
            <h2
              className="text-4xl md:text-5xl font-light leading-[1.15] tracking-tight text-black"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Kethelyn Peres
            </h2>
            <p
              className="text-sm font-medium mt-3 tracking-wide"
              style={{ color: "var(--color-primary-2)" }}
            >
              Design Gráfico · Branding · Identidade Visual
            </p>
          </div>

          {/* Parágrafos descritivos */}
          <div
            className="space-y-5 text-[0.95rem] leading-[1.85]"
            style={{ color: "var(--color-neutral)" }}
          >
            <p>
              Olá, sou Kethelyn Peres — designer especializada em transformar a essência de marcas em
              identidades visuais que comunicam, conectam e ficam na memória. Acredito que um bom
              design vai além da estética: ele conta histórias, desperta emoções e gera resultados
              reais para quem empreende.
            </p>
            <p>
              Com mais de 5 anos de experiência em Design Gráfico, Branding e Identidade Visual,
              já ajudei mais de 80 negócios a encontrarem o seu visual único — de pequenos
              empreendedores a marcas consolidadas. Cada projeto é desenvolvido com olhar estratégico,
              atenção aos detalhes e total dedicação à visão do cliente.
            </p>
          </div>

          {/* Separador decorativo com linhas + ponto */}
          <DecorativeDivider />

          {/* Métricas */}
          <DesignerQuote />
        </div>

      </div>
    </section>
  );
}
