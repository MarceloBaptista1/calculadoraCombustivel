import { useState, type FormEvent } from "react";
import logoImg from "./assets/logo.png";
// import type { FormEvent } from "react";

import "./App.css";

interface InfoProps {
    title: string;
    alcool: number | string;
    gasolina: number | string;
}

function App() {
    const [gasolinaInput, setGasolinaInput] = useState(0);
    const [alcoolInput, setAlcoolInput] = useState(0);
    const [info, setInfo] = useState<InfoProps>();

    function calcular(event: React.FormEvent) {
        event.preventDefault();

        let calculo = alcoolInput / gasolinaInput;

        if (calculo <= 0.7) {
            setInfo({
                title: "Compensa Abastecer Com Álcool",
                gasolina: formatarMoeada(gasolinaInput),
                alcool: formatarMoeada(alcoolInput),
            });
        } else {
            setInfo({
                title: "Compensa Abastecer Com Gasolina!",
                gasolina: formatarMoeada(gasolinaInput),
                alcool: formatarMoeada(alcoolInput),
            });
        }
    }

    function formatarMoeada(valor: number) {
        let valorFormatado = valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return valorFormatado;
    }

    return (
        <div>
            <main className="container">
                <img
                    className="logo"
                    src={logoImg}
                    alt="Logo de uma bomba de combustivel"
                />
                <h1 className="title">Qual Melhor Opção?</h1>

                <form className="form" onSubmit={calcular}>
                    <label> Álcool (Preço por litro)</label>
                    <input
                        className="input"
                        type="number"
                        placeholder="Qual valor do Álcool em sua cidade?"
                        min="1"
                        step="0.01"
                        required
                        value={alcoolInput}
                        onChange={(e) => setAlcoolInput(Number(e.target.value))}
                    />
                    <label> Gasolina (Preço por litro)</label>
                    <input
                        className="input"
                        type="number"
                        placeholder="Qual valor da Gasolina em sua cidade?"
                        min="1"
                        step="0.01"
                        required
                        value={gasolinaInput}
                        onChange={(e) =>
                            setGasolinaInput(Number(e.target.value))
                        }
                    />

                    <input className="button" type="submit" value="Calcular" />
                </form>

                {info && Object.keys(info).length > 0 && (
                    <section className="result">
                        <h2 className="result-title">{info.title}</h2>

                        <span>Álcool {info.alcool}</span>
                        <span>Gasolina {info.gasolina}</span>
                    </section>
                )}
            </main>
        </div>
    );
}

export default App;
