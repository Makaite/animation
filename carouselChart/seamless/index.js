window.addEventListener('load', function () {
  let viewItem = document.querySelector('.view-item')
  let progressDiv = document.querySelector('.progress')

  seamless()
  progress(1)

  function seamless() {
    let effect = [
      { transform: 'translateX(0px)' },
      { transform: 'translateX(-1500px)' }
    ]

    let options = {
      duration: 4 * 1000,
      easing: 'linear'
    }

    let animate = viewItem.animate(effect, options)
    animate.addEventListener('finish', function () {
      viewItem.style.transform = 'translateX(0)'
      seamless()
    })
  }

  function progress(index) {
    let effect = [
      { width: '0px' },
      { width: '500px' }
    ]
    let options = {
      duration: 2 / 3 * 4 * 1000,
      easing: 'linear'
    }
    if(index === 2) {
      options.duration = 4 * 1000
    }
    let animate = progressDiv.animate(effect, options)
    animate.addEventListener('finish', function() {
      progressDiv.style.width = '0px'
      progress(2)
    })
  }
})
