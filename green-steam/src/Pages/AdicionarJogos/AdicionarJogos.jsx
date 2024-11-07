import { useState } from "react";
import { adicionarJogo } from "../../Services/Api.js";
import styles from "./AdicionarJogos.module.css";

export function AdicionarJogos({ onJogoAdicionado }) {
  const [nome, setNome] = useState("");
  const [genero, setGenero] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [precoUnitario, setPrecoUnitario] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidadeEstoque, setQuantidadeEstoque] = useState("");
  const [dataCadastro, setDataCadastro] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const novoJogo = { 
      nome, 
      genero, 
      plataforma, 
      precoUnitario: parseFloat(precoUnitario), 
      descricao, 
      quantidadeEstoque: parseInt(quantidadeEstoque), 
      dataCadastro, 
      imagemUrl 
    };

    try {
      const resposta = await adicionarJogo(novoJogo);
      if (onJogoAdicionado) {
        onJogoAdicionado(resposta.data);
      }
      setNome("");
      setGenero("");
      setPlataforma("");
      setPrecoUnitario("");
      setDescricao("");
      setQuantidadeEstoque("");
      setDataCadastro("");
      setImagemUrl("");
      setSuccess("Jogo adicionado com sucesso!");
    } catch (error) {
      setError("Erro ao adicionar jogo. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.formAdicionarJogos} onSubmit={handleSubmit}>
      <h2>Adicionar Novo Jogo</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}
      <input id="nome" name="nome" type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      <input id="genero" name="genero" type="text" placeholder="Gênero" value={genero} onChange={(e) => setGenero(e.target.value)} required />
      <input id="plataforma" name="plataforma" type="text" placeholder="Plataforma" value={plataforma} onChange={(e) => setPlataforma(e.target.value)} required />
      <input id="precoUnitario" name="precoUnitario" type="number" placeholder="Preço Unitário" value={precoUnitario} onChange={(e) => setPrecoUnitario(e.target.value)} required />
      <textarea id="descricao" name="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required></textarea>
      <input id="quantidadeEstoque" name="quantidadeEstoque" type="number" placeholder="Quantidade em Estoque" value={quantidadeEstoque} onChange={(e) => setQuantidadeEstoque(e.target.value)} required />
      <input id="dataCadastro" name="dataCadastro" type="date" placeholder="Data de Cadastro" value={dataCadastro} onChange={(e) => setDataCadastro(e.target.value)} required />
      <input id="imagemUrl" name="imagemUrl" type="text" placeholder="URL da Imagem" value={imagemUrl} onChange={(e) => setImagemUrl(e.target.value)} required />
      <button type="submit" disabled={loading}>{loading ? "Adicionando..." : "Adicionar Jogo"}</button>
    </form>
  );
}
