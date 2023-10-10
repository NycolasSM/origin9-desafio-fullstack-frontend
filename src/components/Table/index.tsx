import React from "react";

export type RegisterType = {
  nome: string;
  data_nascimento: string;
  cpf: string;
  endereco: string;
  status: string;
};

type Props = {
  columns: { [columnKey: string]: string };
  data: RegisterType[];
};

export const Table = ({ columns, data }: Props) => {
  return <table>Tabela</table>;
};
