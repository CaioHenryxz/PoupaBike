"use client";

import { useState } from "react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function Simulator() {
  const [fuelCost, setFuelCost] = useState(600);

  const monthlySavings = fuelCost * 0.8;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="section section--economy" id="economia">
      <div className="container">
        <div className="economy-card">
          <div className="economy-card__copy">
            <p className="eyebrow">Economia real</p>
            <h2>Veja quanto do seu gasto com gasolina pode voltar para o seu bolso</h2>
            <p>
              Informe seu gasto mensal e compare agora o quanto uma moto elétrica pode reduzir da
              sua despesa no uso diário.
            </p>
          </div>

          <div className="economy-card__simulator">
            <label htmlFor="fuelCost">Seu gasto mensal com gasolina</label>
            <div className="input-wrap">
              <span>R$</span>
              <input
                id="fuelCost"
                type="number"
                min="0"
                step="50"
                value={fuelCost}
                aria-label="Seu gasto mensal com gasolina em reais"
                onChange={(event) => setFuelCost(Number(event.target.value) || 0)}
              />
            </div>
            <p className="economy-card__hint">
              Estimativa com base em até 80% de economia no uso mensal.
            </p>

            <div className="economy-results">
              <div className="economy-result">
                <small>Economia mensal</small>
                <strong>
                  <span className="economy-result__currency">R$</span>
                  <span className="economy-result__amount">{formatCurrency(monthlySavings)}</span>
                </strong>
              </div>
              <div className="economy-result">
                <small>Economia anual</small>
                <strong>
                  <span className="economy-result__currency">R$</span>
                  <span className="economy-result__amount">{formatCurrency(yearlySavings)}</span>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
