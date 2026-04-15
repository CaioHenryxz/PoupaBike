export const motos = [
  {
    badge: "2 rodas",
    name: "Volt Urban 2000W",
    price: "R$ 12.990",
    description: "Ideal para deslocamentos urbanos com economia e recarga simples.",
    benefits: ["Sem gasolina", "Até 60 km por carga"],
    alt: "Moto elétrica urbana amarela",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero mais informações sobre a moto elétrica Volt Urban 2000W.",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'><rect width='640' height='420' rx='32' fill='%23f6c700'/><circle cx='188' cy='308' r='54' fill='%23111111'/><circle cx='446' cy='308' r='54' fill='%23111111'/><path d='M160 254h116l64-70h84l34 58h42v28h-60l-25-44h-62l-48 52H160z' fill='%23ffffff'/><rect x='237' y='204' width='82' height='24' rx='12' fill='%23111111'/></svg>",
  },
  {
    badge: "2 rodas",
    name: "Rider Street X",
    price: "R$ 15.490",
    description: "Mais autonomia para quem quer agilidade no dia a dia e no trabalho.",
    benefits: ["Sem gasolina", "Até 75 km por carga"],
    alt: "Moto elétrica street preta",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero mais informações sobre a moto elétrica Rider Street X.",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'><rect width='640' height='420' rx='32' fill='%23111111'/><circle cx='180' cy='314' r='52' fill='%23f6c700'/><circle cx='442' cy='314' r='52' fill='%23f6c700'/><path d='M136 268h124l78-74h94l40 58h36v26h-64l-27-40h-58l-58 52H136z' fill='%23ffffff'/><rect x='252' y='214' width='70' height='20' rx='10' fill='%23f6c700'/></svg>",
  },
  {
    badge: "3 rodas",
    name: "Cargo Max Trio",
    price: "R$ 18.990",
    description: "Perfeita para carga leve, entregas e operações com mais estabilidade.",
    benefits: ["Sem gasolina", "Até 55 km por carga"],
    alt: "Moto elétrica de três rodas para carga",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero mais informações sobre a moto elétrica Cargo Max Trio.",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 420'><rect width='640' height='420' rx='32' fill='%23fff8d7'/><circle cx='158' cy='316' r='46' fill='%23111111'/><circle cx='334' cy='316' r='46' fill='%23111111'/><circle cx='498' cy='316' r='46' fill='%23111111'/><path d='M118 270h260l42-52h86l28 52h20v28H118z' fill='%23f6c700'/><rect x='244' y='194' width='84' height='24' rx='12' fill='%23111111'/></svg>",
  },
] as const;

export const bikes = [
  {
    meta: "Adulto | Urbana",
    name: "Bike Urbana Pulse",
    description: "Conforto para trajetos curtos, passeio e rotina na cidade.",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero ver os modelos de bicicleta urbana.",
    imageClass: "bike-card__image--urban",
  },
  {
    meta: "Adulto | MTB",
    name: "MTB Trail Force",
    description: "Mais firmeza para treinos, terra batida e pedal de aventura.",
    whatsappMessage: "Olá, vim pelo site da PoupaBike e quero ver as opções de MTB.",
    imageClass: "bike-card__image--mountain",
  },
  {
    meta: "Infantil | 16 pol",
    name: "Kids Flash 16",
    description: "Modelo leve e divertido para os primeiros pedais com segurança.",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero ver bicicletas infantis aro 16.",
    imageClass: "bike-card__image--kids",
  },
  {
    meta: "Infantil | 20 pol",
    name: "Junior Adventure 20",
    description: "Para crianças maiores que querem autonomia e estilo no passeio.",
    whatsappMessage:
      "Olá, vim pelo site da PoupaBike e quero ver bicicletas infantis aro 20.",
    imageClass: "bike-card__image--kidsplus",
  },
] as const;
