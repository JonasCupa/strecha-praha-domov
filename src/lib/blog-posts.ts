export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
}

export const posts: BlogPost[] = [
  {
    slug: "kdy-vymenit-okapy",
    title: "Kdy je čas vyměnit okapy?",
    date: "Březen 2026",
    excerpt:
      "Pět varovných signálů, že vaše okapy už neslouží tak, jak by měly — a co s tím dělat.",
    body: [
      "Okapy jsou nenápadná, ale klíčová součást každého domu. Když přestanou plnit svou funkci, voda si najde cestu tam, kam nemá — k základům, do fasády i pod střechu.",
      "Mezi nejčastější signály patří: rezavé skvrny, viditelné praskliny nebo netěsnosti ve spojích, prohnuté úseky, voda stékající po fasádě místo do svodu a tráva nebo mech rostoucí v okapu.",
      "Pokud na vašem domě pozorujete víc než jeden z těchto problémů, vyplatí se přivolat klempíře. Drobná oprava bývá řádově levnější než kompletní výměna, kterou odkládání problému často přinese.",
      "U starších rodinných domů obvykle doporučujeme měděné nebo titanzinkové okapy — vydrží desítky let prakticky bez údržby.",
    ],
  },
  {
    slug: "jak-poznat-zatekani",
    title: "Jak poznat zatékání střechou (než je pozdě)",
    date: "Únor 2026",
    excerpt:
      "Vlhká skvrna na stropě bývá jen špička ledovce. Jak najít skutečnou příčinu a jak zatékání předejít.",
    body: [
      "Voda v interiéru se na stropě nebo stěně obvykle objeví několik metrů od skutečného místa průniku. Putuje po krokvích a hledá nejnižší bod.",
      "Nejčastější příčiny: poškozená krytina po vichřici, vadné oplechování komínu nebo vikýře, prasklý okap, ucpané svody a stárnoucí střešní fólie.",
      "Preventivně doporučujeme jednou až dvakrát ročně vizuální kontrolu střechy — ideálně na jaře po zimě a na podzim před mrazy. Většinu drobných závad lze v této fázi vyřešit za zlomek ceny.",
      "Pokud už zatékání pozorujete, neodkládejte návštěvu odborníka. Mokré zateplení a prohnilé krovy jsou nákladná oprava.",
    ],
  },
  {
    slug: "plechova-vs-talaskova-strecha",
    title: "Plechová, nebo tašková střecha? Jak vybrat",
    date: "Leden 2026",
    excerpt:
      "Srovnání dvou nejčastějších typů střešní krytiny — životnost, cena, zvuková izolace a vzhled.",
    body: [
      "Plechová střecha (falcovaný plech nebo plechové tašky) je lehká, rychle se pokládá a vydrží 40 a více let. Hodí se i na sklony, kde tašky nelze použít.",
      "Pálené tašky působí tradičně a mají skvělou tepelnou setrvačnost. Životnost dosahuje 60–80 let, jsou ale výrazně těžší — krov musí únosnost zvládnout.",
      "Z hlediska ceny bývá kvalitní plechová střecha o něco dostupnější než pálené tašky, betonové tašky jsou nejlevnější.",
      "U konkrétního domu doporučujeme vždy osobní prohlídku. Rádi přijedeme, posoudíme stav krovu a doporučíme řešení šité na míru.",
    ],
  },
];
