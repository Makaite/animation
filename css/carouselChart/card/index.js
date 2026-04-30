window.addEventListener("load", function () {
  let from = 0
  let to = 0
  let animate = null
  let timer = null
  let card = document.querySelector(".card");
  let change = document.querySelector(".change");
  let index = 0

  change.children[0].style.backgroundColor = '#1e75fe';

  //给卡片添加显示内容
  for(let i = 0; i < card.children.length; i++) {
    if(i === card.children.length - 1) {
      card.children[i].innerHTML = 1
    } else {
      card.children[i].innerHTML = i + 1
    }
  }

  //切换按钮的点击事件
  for(let i = 0; i < change.children.length; i++) {
    change.children[i].addEventListener('click', function() {
      card.style.transform =`translateX(${ i * -500}px)`
      card.style.transition = "0.5s";
      for(let i = 0; i < change.children.length; i++) {
        change.children[i].style.backgroundColor = '#fff'
      }
      this.style.backgroundColor = '#1e75fe';
      index = i
      clearInterval(timer)
      loop()
    })
  }

  loop()

  function loop() {
    timer = setInterval(() => {
      from = index * -500
      index++
      to = index * -500

      let effect = [
        { transform: 'translateX(' + from + 'px)' },
        { transform: 'translateX(' + to + 'px)' }
      ]

      let options = {
        duration: 500,
        easing: 'linear'
      }
      animate = card.animate(effect, options)
      
      //自动播放动画时按钮的背景颜色
      for(let i = 0; i < change.children.length; i++) {
        if(i === index) {
          change.children[i].style.backgroundColor = '#1e75fe';
        } else {
          if(index === change.children.length) {
            change.children[0].style.backgroundColor = '#1e75fe';
          }
          change.children[i].style.backgroundColor = '#fff';
        }
      }
   
      animate.finished.then(() => {
        if(index >= change.children.length) {
          card.style.transform = `translateX(0px)`;
          index = 0
        }else {
          card.style.transform = `translateX(${to}px)`;
        }
      })
      clearInterval(timer)
      loop()
    }, 3000);
  }
});