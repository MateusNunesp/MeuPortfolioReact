import '../App.css'
import { useCallback, useState } from 'react'


function Form() {


    const [nome, setNome] = useState("Fulano")
    const telefone = '5531996467581';
    const [mensagem, setMensagem] = useState ("Olá!")

    const enviar = useCallback(() => {

        const texto = `Olá! me chamo ${nome}, ${mensagem}`;
        const textoformatado = encodeURIComponent(texto);

        const url = `https://wa.me/${telefone}?text=${textoformatado}`;

        window.open(url, '_blank');

    }, [nome, mensagem])


    return(
        <section id="contato" class="contato">
            <h2>Entre em contato</h2>
            <form class="contato-form">
        
                <input type="text" id="form-nome" class="campo-form" placeholder="Seu nome" required onChange={(e) => setNome(e.target.value)}/>
        
                <textarea id="form-mensagem" class="campo-form" placeholder="Sua mensagem..." rows="5" required onChange={(e) => setMensagem(e.target.value)}></textarea>
        
                <button onClick={enviar} class="botao-enviar">Enviar via WhatsApp</button>
        </form>

        </section>
    );
}

export default Form;