import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/adm.css"

const API = import.meta.env.VITE_API_URL;

export default function Adm() {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");

    // verifica token
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Acesso negado!");
            window.location.href = "/";
        }
    }, []);

    const cadastrar = async () => {
        try {
            const token = localStorage.getItem("token");

            await axios.post(
                `${API}/register`,
                { login, senha },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert("Usuário cadastrado!");
        } catch {
            alert("Erro ao cadastrar");
        }
    };

    return (
        <div style={{padding: 20}}>
            <h2>Área Administrativa</h2>

            <h3>Cadastrar Novo Usuário</h3>

            <input 
                placeholder="Login"
                onChange={e => setLogin(e.target.value)}
            />
            <br />

            <input 
                type="password"
                placeholder="Senha"
                onChange={e => setSenha(e.target.value)}
            />
            <br />

            <button onClick={cadastrar}>Cadastrar</button>

        </div>
    );
}