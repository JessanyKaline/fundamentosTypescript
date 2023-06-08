// Enum para representar os tipos de quarto
enum TipoQuarto {
  executivo = "Executivo",
  padrao = "Padrão",
  luxo = "Luxo",
}

// Alias para um tipo Union
type TipoQuartoUnion = TipoQuarto.executivo | TipoQuarto.padrao;

// Interface para um Hospede
interface Hospede {
  readonly nome: string;
}

// Interface para uma unidade do hotel
interface UnidadeHotel {
  readonly nomenclatura: string;
  readonly quartos: Quarto[];
  adicionarQuarto(quarto: Quarto): void;
}

class UnidadeHotelRural implements UnidadeHotel {
  readonly nomenclatura: string;
  readonly quartos: Quarto[] = [];

  constructor(nomenclatura: string) {
    this.nomenclatura = nomenclatura ;
  }

  adicionarQuarto(quarto: Quarto): void {
    this.quartos.push(quarto);
  }
}

// Classe base para um quarto
class Quarto {
  readonly numero: number;
  readonly hospedes: Hospede[] = [];

  constructor(numero: number) {
    this.numero = numero;
  }

  adicionarHospede(hospede: Hospede): void {
    this.hospedes.push(hospede);
  }

  listarHospedes(): void {
    console.log(`Hospedes do quarto ${this.numero}:`);
    for (const Hospede of this.hospedes) {
      console.log(`- ${Hospede.nome}`);
    }
  }
}

// Classe para um quarto que herda de Quarto e é um Alias para um tipo Union
class QuartoSemVaranda extends Quarto {
  readonly tipo: TipoQuartoUnion;

  constructor(numero: number) {
    super(numero);
    this.tipo = TipoQuarto.executivo;
  }

  // Override do método listarHospedes para adicionar informações específicas de um quarto sem varanda
  override listarHospedes(): void {
    console.log(`Hospedes do quarto ${this.numero} :`);
    for (const hospede of this.hospedes) {
      console.log(`- ${hospede.nome}`);
    }
  }
}

// Exemplo de uso das classes e interfaces
const hospede1: Hospede = { nome: "João" };
const hospede2: Hospede = { nome: "Maria" };
const hospede3: Hospede = { nome: "Pedro" };

const quartoExecutivo = new QuartoSemVaranda(101);
const quartoLuxo = new Quarto(303);

quartoExecutivo.adicionarHospede(hospede1);
quartoLuxo.adicionarHospede(hospede2);
quartoExecutivo.adicionarHospede(hospede3);

// Adicionando um hóspede diretamente
quartoExecutivo.adicionarHospede({ nome: "Ana" });

//Listar os hóspedes
console.log("LUXO TESTES");
quartoLuxo.listarHospedes();

console.log("EXECUTIVO TESTES");
quartoExecutivo.listarHospedes();

//Adiciona e retorna quartos
const quartoExecutivo2 = new QuartoSemVaranda(106);
const quartoPadrao = new Quarto(206);

const unidadeHotel = new UnidadeHotelRural('Sergipe');
unidadeHotel.adicionarQuarto(quartoExecutivo);
unidadeHotel.adicionarQuarto(quartoExecutivo2);
unidadeHotel.adicionarQuarto(quartoLuxo);
unidadeHotel.adicionarQuarto(quartoPadrao);

quartoExecutivo2.adicionarHospede({nome: "Josefina"});
quartoPadrao.adicionarHospede({nome: "José"});

console.log(`Unidade do Hotel ${unidadeHotel.nomenclatura}:`);
console.log(`Quartos:`);

unidadeHotel.quartos.forEach((quarto) => {
  console.log(`- Número do Quarto: ${quarto.numero}`);
  console.log(`  Hóspedes:`);

  quarto.hospedes.forEach((hospede) => {
    console.log(`  - ${hospede.nome}`);
  });
});
