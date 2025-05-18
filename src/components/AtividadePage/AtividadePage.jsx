
import React, { useState } from "react";
import "./atividade.css";
import { FaPlus, FaTrash, FaUpload, FaClipboardList } from "react-icons/fa";

const AtividadePage = () => {
  const [atividades, setAtividades] = useState([]);
  const [novaAtividade, setNovaAtividade] = useState({
    titulo: "",
    descricao: "",
    tipo: "",
    data_entrega: "",
    cod_turma: "",
    professor_matricula: "",
  });

  const handleChange = (e) => {
    setNovaAtividade({ ...novaAtividade, [e.target.name]: e.target.value });
  };

  const adicionarAtividade = () => {
    if (!novaAtividade.titulo) return;
    const id = Date.now();
    setAtividades([...atividades, { ...novaAtividade, id }]);
    setNovaAtividade({
      titulo: "",
      descricao: "",
      tipo: "",
      data_entrega: "",
      cod_turma: "",
      professor_matricula: "",
    });
  };

  const removerAtividade = (id) => {
    setAtividades(atividades.filter((a) => a.id !== id));
  };

  return (
    <div className="atividade-container">
      <h1><FaClipboardList /> Atividades</h1>
      <div className="atividade-form">
        <input name="titulo" placeholder="Título" value={novaAtividade.titulo} onChange={handleChange} />
        <textarea name="descricao" placeholder="Descrição" value={novaAtividade.descricao} onChange={handleChange}></textarea>
        <select name="tipo" value={novaAtividade.tipo} onChange={handleChange}>
          <option value="">Tipo</option>
          <option value="Prova">Prova</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Atividade Extra">Atividade Extra</option>
        </select>
        <input type="date" name="data_entrega" value={novaAtividade.data_entrega} onChange={handleChange} />
        <input name="cod_turma" placeholder="Código da Turma" value={novaAtividade.cod_turma} onChange={handleChange} />
        <input name="professor_matricula" placeholder="Matrícula do Professor" value={novaAtividade.professor_matricula} onChange={handleChange} />
        <div className="atividade-buttons">
          <button onClick={adicionarAtividade}><FaPlus /> Adicionar</button>
        </div>
      </div>

      <ul>
        {atividades.map((a) => (
          <li key={a.id}>
            <strong>{a.titulo}</strong> - {a.tipo} (Entrega: {a.data_entrega})
            <button onClick={() => removerAtividade(a.id)}><FaTrash /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AtividadePage;
