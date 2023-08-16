import Button from "react-bootstrap/Button";
import NavBarCustom from "../../components/navbar";

export default function Carrinho() {
  const produtos = [
    { id: 2, nome: "Poco X5 pro", preco: 1900, estoque: 6 },
    { id: 4, nome: "Xiaomi Black Shark 4", preco: 2600, estoque: 3 },
  ];

  return (
    <div>
      <NavBarCustom />

      <div className="container">
        <h2 className="py-3">Carrinho ({produtos.length})</h2>
        <table className="table table-responsive table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Preço</th>
              <th scope="col">Quantidade</th>
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
                  <td>
                    <Button variant="primary" onClick={() => {}}>
                      -
                    </Button>
                    <span className="m-2">1</span>
                    <Button variant="primary" onClick={() => {}}>
                      +
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => {}}>
                      Remover
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
