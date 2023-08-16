import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { fetchProdutos } from "./redux/slices/api.slice.produtos";
import ProdutosList from "./components/listProdutos";
import NavBarCustom from "./components/navbar";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProdutos());
  }, []);

  return (
    <div>
      <NavBarCustom />
      <ProdutosList />
    </div>
  );
}

export default App;
