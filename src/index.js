var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Enum para representar os tipos de quarto
var TipoQuarto;
(function (TipoQuarto) {
    TipoQuarto["executivo"] = "Executivo";
    TipoQuarto["padrao"] = "Padr\u00E3o";
    TipoQuarto["luxo"] = "Luxo";
})(TipoQuarto || (TipoQuarto = {}));
var UnidadeHotelRural = /** @class */ (function () {
    function UnidadeHotelRural(nomenclatura) {
        this.quartos = [];
        this.nomenclatura = nomenclatura;
    }
    UnidadeHotelRural.prototype.adicionarQuarto = function (quarto) {
        this.quartos.push(quarto);
    };
    return UnidadeHotelRural;
}());
// Classe base para um quarto
var Quarto = /** @class */ (function () {
    function Quarto(numero) {
        this.hospedes = [];
        this.numero = numero;
    }
    Quarto.prototype.adicionarHospede = function (hospede) {
        this.hospedes.push(hospede);
    };
    Quarto.prototype.listarHospedes = function () {
        console.log("Hospedes do quarto ".concat(this.numero, ":"));
        for (var _i = 0, _a = this.hospedes; _i < _a.length; _i++) {
            var Hospede = _a[_i];
            console.log("- ".concat(Hospede.nome));
        }
    };
    return Quarto;
}());
// Classe para um quarto que herda de Quarto e é um Alias para um tipo Union
var QuartoSemVaranda = /** @class */ (function (_super) {
    __extends(QuartoSemVaranda, _super);
    function QuartoSemVaranda(numero) {
        var _this = _super.call(this, numero) || this;
        _this.tipo = TipoQuarto.executivo;
        return _this;
    }
    // Override do método listarHospedes para adicionar informações específicas de um quarto sem varanda
    QuartoSemVaranda.prototype.listarHospedes = function () {
        console.log("Hospedes do quarto ".concat(this.numero, " :"));
        for (var _i = 0, _a = this.hospedes; _i < _a.length; _i++) {
            var hospede = _a[_i];
            console.log("- ".concat(hospede.nome));
        }
    };
    return QuartoSemVaranda;
}(Quarto));
// Exemplo de uso das classes e interfaces
var hospede1 = { nome: "João" };
var hospede2 = { nome: "Maria" };
var hospede3 = { nome: "Pedro" };
var quartoExecutivo = new QuartoSemVaranda(101);
var quartoLuxo = new Quarto(303);
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
var quartoExecutivo2 = new QuartoSemVaranda(106);
var quartoPadrao = new Quarto(206);
var unidadeHotel = new UnidadeHotelRural('Sergipe');
unidadeHotel.adicionarQuarto(quartoExecutivo);
unidadeHotel.adicionarQuarto(quartoExecutivo2);
unidadeHotel.adicionarQuarto(quartoLuxo);
unidadeHotel.adicionarQuarto(quartoPadrao);
quartoExecutivo2.adicionarHospede({ nome: "Josefina" });
quartoPadrao.adicionarHospede({ nome: "José" });
console.log("Unidade do Hotel ".concat(unidadeHotel.nomenclatura, ":"));
console.log("Quartos:");
unidadeHotel.quartos.forEach(function (quarto) {
    console.log("- N\u00FAmero do Quarto: ".concat(quarto.numero));
    console.log("  H\u00F3spedes:");
    quarto.hospedes.forEach(function (hospede) {
        console.log("  - ".concat(hospede.nome));
    });
});
