export interface Product {
  id: number
  titulo: string
  valor: number
  descricaoBreve: string
  categoria: Categoria  
  destaques: string[]
  detalhes: string[]
}

export interface Categoria {
  id: number
  nome: string
}