import { getWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <div className="hero__content" id="top">
      <div className="hero__copy">
        <p className="eyebrow">Economize mais na rotina</p>
        <h1>Troque gasolina por economia real e mobilidade inteligente</h1>
        <p className="hero__text">
          Encontre motos elétricas, bikes e acessórios com atendimento rápido no WhatsApp e veja
          como reduzir custos sem abrir mão de praticidade no dia a dia.
        </p>
        <div className="hero__proof">
          <div className="hero__proof-item">
            <strong>+100 clientes atendidos</strong>
            <span>Loja com atendimento rápido e escolha guiada</span>
          </div>
          <div className="hero__proof-item">
            <strong>5 estrelas no atendimento</strong>
            <span>Mais confiança para tirar dúvidas e comprar melhor</span>
          </div>
        </div>
        <div className="hero__highlights">
          <span>Até 80% de economia</span>
          <span>Sem gasolina no dia a dia</span>
          <span>Modelos para trabalho e lazer</span>
        </div>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href={getWhatsAppLink(
              "Olá, vim pelo site da PoupaBike e quero falar agora pelo WhatsApp para encontrar o modelo ideal.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Falar agora no WhatsApp
          </a>
          <a className="button button--ghost" href="#economia">
            Simular minha economia
          </a>
        </div>
      </div>

      <div className="hero__panel">
        <div className="hero-card">
          <span className="hero-card__tag">Economia que aparece rápido</span>
          <h2>Veja em segundos quanto pode sobrar no seu bolso todo mês</h2>
          <p>Simule seu gasto com gasolina e compare o impacto anual da economia.</p>
          <a className="hero-card__link" href="#economia">
            Simular economia
          </a>
        </div>
      </div>
    </div>
  );
}
