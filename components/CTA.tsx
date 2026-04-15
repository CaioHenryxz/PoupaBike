import { getWhatsAppLink } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="section section--cta">
      <div className="container">
        <div className="cta-banner">
          <div>
            <p className="eyebrow">Fale enquanto os modelos estão disponíveis</p>
            <h2>Chame no WhatsApp agora e receba opções, valores e atendimento rápido hoje</h2>
          </div>
          <a
            className="button button--xl"
            href={getWhatsAppLink(
              "Olá, vim pelo site da PoupaBike e quero receber opções, valores e atendimento rápido pelo WhatsApp.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Falar agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
