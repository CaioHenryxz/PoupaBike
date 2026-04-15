import { Hero } from "@/components/Hero";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Header() {
  return (
    <header className="hero">
      <div className="hero__bg" />
      <div className="container">
        <nav className="topbar">
          <a href="#top" className="logo" aria-label="PoupaBike">
            <img className="logo__image" src="/logo-poupabike.png" alt="Logo da PoupaBike" />
          </a>
          <a
            className="button button--whatsapp"
            href={getWhatsAppLink("Olá, vim pelo site da PoupaBike e quero mais informações")}
            target="_blank"
            rel="noreferrer"
          >
            Falar agora no WhatsApp
          </a>
        </nav>

        <Hero />

        <div className="trust-bar">
          <div className="trust-item">
            <strong>Atendimento rápido</strong>
            <span>Resposta no WhatsApp em poucos minutos</span>
          </div>
          <div className="trust-item">
            <strong>Loja física e retirada</strong>
            <span>Atendimento local e suporte mais próximo</span>
          </div>
          <div className="trust-item">
            <strong>Entrega facilitada</strong>
            <span>Consulte disponibilidade para sua região</span>
          </div>
        </div>
      </div>
    </header>
  );
}
