export const COINS_URL: string = "https://v6.exchangerate-api.com/v6/fe25cc0e3ca35d8731d1e14f/latest/"

export interface Coin {
  nome: string
  sigla: string
  simbolo: string
}

export const COINS_LIST: Coin[] = [
  // Principais locais e de referência comercial
  {
    nome: "Real Brasileiro",
    sigla: "BRL",
    simbolo: "R$"
  },
  {
    nome: "Dólar Americano",
    sigla: "USD",
    simbolo: "$"
  },
  // Principais moedas globais (G10 e potências econômicas)
  {
    nome: "Euro",
    sigla: "EUR",
    simbolo: "€"
  },
  {
    nome: "Libra Esterlina",
    sigla: "GBP",
    simbolo: "£"
  },
  {
    nome: "Iene Japonês",
    sigla: "JPY",
    simbolo: "¥"
  },
  {
    nome: "Iuan Chinês",
    sigla: "CNY",
    simbolo: "¥"
  },
  {
    nome: "Franco Suíço",
    sigla: "CHF",
    simbolo: "CHF"
  },
  {
    nome: "Dólar Canadense",
    sigla: "CAD",
    simbolo: "$"
  },
  {
    nome: "Dólar Australiano",
    sigla: "AUD",
    simbolo: "$"
  },
  {
    nome: "Dólar Neozelandês",
    sigla: "NZD",
    simbolo: "$"
  }
];