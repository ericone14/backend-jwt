import { useState } from "react";
import "../styles/contatos.css"

export default function Contatos() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");

    const enviar = () => {
        alert("Mensagem enviada com sucesso!");
    };

    return (
        <div style={{padding: 20}}>
            <h2>Contato</h2>

            <input placeholder="Nome" onChange={e => setNome(e.target.value)} />
            <br />

            <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <br />

            <input placeholder="Assunto" onChange={e => setAssunto(e.target.value)} />
            <br />

            <button onClick={enviar}>Enviar</button>
        </div>
    );
}