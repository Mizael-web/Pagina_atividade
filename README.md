# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## explicação do codigo:

// Importa o React e o hook useState, que permite usar estado dentro do componente funcional
import React, { useState } from "react";

// Importa o arquivo CSS responsável pela estilização da página de atividades
import "./atividade.css";

// Importa ícones da biblioteca react-icons (Font Awesome)
import { FaPlus, FaTrash, FaUpload, FaClipboardList } from "react-icons/fa";

// Define o componente funcional AtividadePage
const AtividadePage = () => {
  // Estado que armazena a lista de atividades
  const [atividades, setAtividades] = useState([]);

  // Estado que armazena os dados do formulário para uma nova atividade
  const [novaAtividade, setNovaAtividade] = useState({
    titulo: "",
    descricao: "",
    tipo: "",
    data_entrega: "",
    cod_turma: "",
    professor_matricula: "",
  });

  // Função que atualiza os valores do formulário conforme o usuário digita
  const handleChange = (e) => {
    // Atualiza o estado novaAtividade mantendo os valores anteriores e alterando apenas o campo modificado
    setNovaAtividade({ ...novaAtividade, [e.target.name]: e.target.value });
  };

  // Função para adicionar uma nova atividade à lista
  const adicionarAtividade = () => {
    // Impede a adição se o título estiver vazio
    if (!novaAtividade.titulo) return;

    // Gera um ID único com base no timestamp atual
    const id = Date.now();

    // Adiciona a nova atividade ao array de atividades
    setAtividades([...atividades, { ...novaAtividade, id }]);

    // Limpa o formulário após adicionar
    setNovaAtividade({
      titulo: "",
      descricao: "",
      tipo: "",
      data_entrega: "",
      cod_turma: "",
      professor_matricula: "",
    });
  };

  // Função para remover uma atividade com base no seu ID
  const removerAtividade = (id) => {
    // Filtra a lista de atividades, removendo a que tem o ID correspondente
    setAtividades(atividades.filter((a) => a.id !== id));
  };

  // JSX retornado pela função (o que será exibido na tela)
  return (
    <div className="atividade-container"> {/* Container principal da página */}
      <h1><FaClipboardList /> Atividades</h1> {/* Título da página com ícone */}

      <div className="atividade-form"> {/* Formulário de cadastro de atividade */}
        {/* Campo de entrada para o título da atividade */}
        <input
          name="titulo"
          placeholder="Título"
          value={novaAtividade.titulo}
          onChange={handleChange}
        />

        {/* Campo de descrição da atividade */}
        <textarea
          name="descricao"
          placeholder="Descrição"
          value={novaAtividade.descricao}
          onChange={handleChange}
        ></textarea>

        {/* Campo do tipo de atividade com opções */}
        <select
          name="tipo"
          value={novaAtividade.tipo}
          onChange={handleChange}
        >
          <option value="">Tipo</option>
          <option value="Prova">Prova</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Atividade Extra">Atividade Extra</option>
        </select>

        {/* Campo de data de entrega */}
        <input
          type="date"
          name="data_entrega"
          value={novaAtividade.data_entrega}
          onChange={handleChange}
        />

        {/* Campo do código da turma */}
        <input
          name="cod_turma"
          placeholder="Código da Turma"
          value={novaAtividade.cod_turma}
          onChange={handleChange}
        />

        {/* Campo da matrícula do professor */}
        <input
          name="professor_matricula"
          placeholder="Matrícula do Professor"
          value={novaAtividade.professor_matricula}
          onChange={handleChange}
        />

        <div className="atividade-buttons"> {/* Botão para adicionar atividade */}
          <button onClick={adicionarAtividade}>
            <FaPlus /> Adicionar
          </button>
        </div>
      </div>

      {/* Lista de atividades cadastradas */}
      <ul>
        {atividades.map((a) => (
          <li key={a.id}> {/* Cada item da lista recebe uma chave única */}
            <strong>{a.titulo}</strong> - {a.tipo} (Entrega: {a.data_entrega})
            {/* Botão para remover a atividade */}
            <button onClick={() => removerAtividade(a.id)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporta o componente para que ele possa ser usado em outras partes da aplicação
export default AtividadePage;
