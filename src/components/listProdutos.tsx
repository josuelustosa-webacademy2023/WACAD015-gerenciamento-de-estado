import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addProdutoNome } from "../redux/slices/carrinho.slice";

import Button from "react-bootstrap/Button";

export default function ProdutosList() {
  const dispatch = useDispatch();

  const produtos = [
    { id: 1, nome: "Poco X5", preco: 1250, estoque: 8 },
    { id: 2, nome: "Poco X5 pro", preco: 1900, estoque: 6 },
    { id: 3, nome: "Redmi 12 pro", preco: 1850, estoque: 4 },
    { id: 4, nome: "Xiaomi Black Shark 4", preco: 2600, estoque: 3 },
    { id: 4, nome: "Xiaomi 13 Ultra", preco: 4200, estoque: 5 },
  ];

  function inserirCarrinho(name: string) {
    dispatch(addProdutoNome(name));
  }

  return (
    <div className="container">
      <h2 className="py-3">Produtos ({produtos.length})</h2>
      <table className="table table-responsive table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Estoque</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => {
            return (
              <tr key={produto.id}>
                <th scope="row">{index + 1}</th>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
                <td>{produto.estoque}</td>
                <td>
                  <Button variant="success"
                    onClick={() => {
                      inserirCarrinho(produto.nome);
                    }}
                  >
                    Inserir no Carrinho
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
