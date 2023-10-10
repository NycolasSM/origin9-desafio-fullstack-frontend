import "./styles.css";

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
  const tableColumns = Object.values(columns).map((columnLabel, i) => <th key={i}>{columnLabel}</th>);

  const tableRows = data.map((registerData, i) => {
    return (
      <tr key={i}>
        {Object.keys(columns).map((columnKey, j) => (
          <td key={j}>{registerData[columnKey]}</td>
        ))}
      </tr>
    );
  });

  return (
    <table cellSpacing={0}>
      <thead>
        <tr>{tableColumns}</tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};
