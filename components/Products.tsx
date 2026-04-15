import {
  Hand,
  Lightbulb,
  Lock,
  Shield,
  ShoppingBasket,
  Smartphone,
  Wind,
} from "lucide-react";

import { bikes, motos } from "@/lib/products";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Products() {
  return (
    <>
      <section className="section" id="motos">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Motos elétricas</p>
            <h2>Motos para economizar mais, rodar melhor e depender menos da gasolina</h2>
          </div>

          <div className="product-grid product-grid--three">
            {motos.map((product) => (
              <article key={product.name} className="product-card product-card--moto">
                <div className="product-card__media">
                  <img src={product.image} alt={product.alt} />
                  <span className="product-card__media-note">
                    Espaço pronto para foto real do produto
                  </span>
                </div>
                <div className="product-card__body">
                  <span className="product-card__badge">{product.badge}</span>
                  <div className="product-card__benefits">
                    {product.benefits.map((benefit) => (
                      <span key={benefit}>{benefit}</span>
                    ))}
                  </div>
                  <h3>{product.name}</h3>
                  <p className="product-card__text">{product.description}</p>
                  <p className="product-card__microcopy">Mais economia por carga e menos gasto no mês.</p>
                  <p className="price">{product.price}</p>
                  <a
                    className="button button--card"
                    href={getWhatsAppLink(product.whatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quero saber mais
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="bicicletas">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Bicicletas</p>
            <h2>Modelos para adulto e infantil com visual moderno e uso diário</h2>
          </div>

          <div className="product-grid product-grid--four">
            {bikes.map((bike) => (
              <article key={bike.name} className="bike-card">
                <div className={`bike-card__image ${bike.imageClass}`} />
                <p className="bike-card__meta">{bike.meta}</p>
                <h3>{bike.name}</h3>
                <p className="bike-card__text">{bike.description}</p>
                <p className="bike-card__microcopy">Escolha mais prática para rotina, passeio ou pedal em família.</p>
                <a
                  className="button button--light"
                  href={getWhatsAppLink(bike.whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver modelos
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="acessorios">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Acessórios</p>
            <h2>Itens essenciais para segurança, praticidade e estilo</h2>
          </div>

          <div className="accessories-grid">
            <div className="accessory-item">
              <Shield className="accessory-item__icon" strokeWidth={2} />
              <strong>Capacete</strong>
              <span>Proteção essencial</span>
            </div>
            <div className="accessory-item">
              <Lock className="accessory-item__icon" strokeWidth={2} />
              <strong>Cadeado</strong>
              <span>Mais segurança</span>
            </div>
            <div className="accessory-item">
              <Smartphone className="accessory-item__icon" strokeWidth={2} />
              <strong>Suporte</strong>
              <span>Celular ao alcance</span>
            </div>
            <div className="accessory-item">
              <Lightbulb className="accessory-item__icon" strokeWidth={2} />
              <strong>Luzes LED</strong>
              <span>Mais visibilidade</span>
            </div>
            <div className="accessory-item">
              <ShoppingBasket className="accessory-item__icon" strokeWidth={2} />
              <strong>Cesta frontal</strong>
              <span>Praticidade no uso</span>
            </div>
            <div className="accessory-item">
              <Hand className="accessory-item__icon" strokeWidth={2} />
              <strong>Luvas</strong>
              <span>Conforto no pedal</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
