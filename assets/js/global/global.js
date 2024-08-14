;(function () {
  // DRAG DROP

  function desativarDragDrop() {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  // LAZY LOADING

  function ativarLazyLoading() {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY + window.innerHeight + 500
      const imagens = document.querySelectorAll('img[data-src]')

      for (const imagem of Array.from([...imagens])) {
        const bodyRect = document.body.getBoundingClientRect()
        const imagemRect = imagem.getBoundingClientRect()
        const posicaoImagem = imagemRect.top - bodyRect.top
        if (alturaPagina <= posicaoImagem) return

        const src = imagem.getAttribute('data-src')
        imagem.src = src
        imagem.removeAttribute('data-src')
      }
    })
  }

  // ATIVAR TUDO

  desativarDragDrop()
  ativarLazyLoading()
})()
