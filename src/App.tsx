import { useState } from "react";
import logoImg from "./assets/logo.png";

import "./App.css";

function App() {
    return (
        <div>
            <main className="container">
                <img
                    className="logo"
                    src={logoImg}
                    alt="Logo de uma bomba de combustivel"
                />
                <h1 className="title">Qual Melhor Opção?</h1>

                <form className="form">
                    <label> Álcool (Preço por litro)</label>
                    <input
                        className="input"
                        type="nuumber"
                        placeholder="Qual valor do Álcool em sua cidade?"
                        min="1"
                        step="0.01"
                        required
                    />
                    <label> Gasolina (Preço por litro)</label>
                    <input
                        className="input"
                        type="nuumber"
                        placeholder="Qual valor da Gasolina em sua cidade?"
                        min="1"
                        step="0.01"
                        required
                    />

                    <input className="button" type="submit" value="Calcular" />
                </form>
            </main>
        </div>
    );
}

export default App;
