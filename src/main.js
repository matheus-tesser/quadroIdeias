import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://xqomrkcegsqscngqlfig.supabase.co'
const supabaseKey = 'sb_publishable_OB1V8tUGQfJf_bSDSMkfxw_QH5TR27W'

const supabase = createClient(supabaseUrl, supabaseKey)


const formPrincipal = document.getElementById('form-ideia')
const titulo = document.getElementById('titulo')
const descricao = document.getElementById('descricao')
const cartoes = document.getElementById('cartoes')
const botao = document.getElementById("botaoEnviar")
const mensagemUsuarios = document.getElementById('mensagensUsuarios')


formPrincipal.addEventListener('submit', async (evento) => {
  evento.preventDefault()

  let tituloSalvo = titulo.value.trim()
  let descricaoSalvo = descricao.value.trim()

  if (tituloSalvo == '' || descricaoSalvo == '') {
    alert("O campo está vazio")
    return
  }

  const { error } = await supabase
    .from('ideia')
    .insert([
      {
        titulo: tituloSalvo,
        descricao: descricaoSalvo
      }
    ])

  if (error) {
    console.error("Erro detalhado: ", error)
    alert("Erro ao salvar")
    return
  }
  else {
    alert("Ideia salva com sucesso")
    formPrincipal.reset()
    buscarIdeias()
  }

})


async function buscarIdeias() {
  const { data, error } = await supabase
    .from('ideia')
    .select('*')

  if (error) {
    console.error("Erro ao buscar dados:", error)
    return
  }


  const containerLista = document.getElementById('cartoes')
  containerLista.textContent = ''

  data.forEach(item => {
    const identificadorMensagem = document.getElementById('identificadorMensagem')
    identificadorMensagem.textContent = ''
    containerLista.innerHTML += `
      <div class="cartao-ideia">
        <p><strong>Serviço:</strong> ${item.titulo}</p>
        <p><strong>Usuário:</strong> ${item.descricao}</p>
      </div>
    `
  })


}

buscarIdeias()