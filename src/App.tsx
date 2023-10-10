import { useState, useEffect } from "react";
import "./App.css";
import { Table } from "./components/Table/";
import axios from "axios";
import { offlineData } from "./db/offlineData";

export const App = () => {
  const [data, setData] = useState<{ [columnKey: string]: string }[]>([]);
  const [columns, setColumns] = useState<{ [columnKey: string]: string }>({});

  const getRegisters = async () => {
    const registers = await axios
      .get("http://localhost:3001/users")
      .then((resp) => {
        return resp.data;
      })
      .catch(() => {
        alert("Erro na requisição, certifique-se de estar rodando a API; utilizando registros offline");
        return null;
      });

    if (!registers) {
      return setData(offlineData);
    }

    return setData(registers);
  };

  useEffect(() => {
    setColumns({
      nome: "Nome",
      data_nascimento: "Data de Nascimento",
      cpf: "CPF",
      endereco: "Endereço",
      status: "Status",
    });

    getRegisters();
  }, []);

  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
};
