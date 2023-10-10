import React, { useState, useEffect } from "react";
import "./App.css";
import { Table } from "./components/Table/";

export const App = () => {
  const [data, setData] = useState<{ [columnKey: string]: string }[]>([]);
  const [columns, setColumns] = useState<{ [columnKey: string]: string }>({});

  useEffect(() => {
    setColumns({
      nome: "Nome",
      data_nascimento: "Data de Nascimento",
      cpf: "CPF",
      endereco: "Endereço",
      status: "Status",
    });

    setData([
      {
        nome: "João",
        data_nascimento: "01/01/2002",
        cpf: "111-222-333-98",
        endereco: "Rua 1, centro, SP, CEP: 13444-002",
        status: "Ativo",
      },
      {
        nome: "Maria",
        data_nascimento: "01/01/2001",
        cpf: "444-222-333-98",
        endereco: "Rua 2, centro, SP, CEP: 13999-001",
        status: "Inativo",
        teste: "teste",
      },
    ]);
  }, []);

  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
};
