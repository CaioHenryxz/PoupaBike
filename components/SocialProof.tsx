export function SocialProof() {
  return (
    <section className="section section--social" id="avaliacoes">
      <div className="container">
        <div className="section-heading section-heading--compact">
          <p className="eyebrow">Prova social</p>
          <h2>Quem compra na PoupaBike percebe rápido a economia e a facilidade no atendimento</h2>
        </div>

        <div className="social-grid">
          <article className="review-card">
            <div className="review-card__stars" aria-label="5 estrelas">
              ★★★★★
            </div>
            <span className="review-card__pill">Economia no dia a dia</span>
            <p>
              “Comprei para usar no dia a dia e o gasto caiu muito. O atendimento foi rápido e
              tirou todas as minhas dúvidas.”
            </p>
            <strong>Marcos, cliente de moto elétrica</strong>
          </article>

          <article className="review-card">
            <div className="review-card__stars" aria-label="5 estrelas">
              ★★★★★
            </div>
            <span className="review-card__pill">Atendimento que ajuda a decidir</span>
            <p>
              “As opções de bike chegaram bem explicadas no WhatsApp. Foi fácil escolher o modelo
              certo para minha rotina.”
            </p>
            <strong>Ana Paula, cliente de bicicleta</strong>
          </article>

          <article className="review-card">
            <div className="review-card__stars" aria-label="5 estrelas">
              ★★★★★
            </div>
            <span className="review-card__pill">Compra com mais confiança</span>
            <p>
              “Gostei da praticidade e da atenção no pós-venda. Dá confiança para fechar tudo sem
              complicação.”
            </p>
            <strong>Juliano, cliente PoupaBike</strong>
          </article>
        </div>
      </div>
    </section>
  );
}
