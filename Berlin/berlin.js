(function() {
  document.getElementById('menu').addEventListener('click', function(){
    var lg = document.getElementById('largemenu');
    lg.classList.remove('out');
    lg.classList.add('in');

    document.getElementById('body').style.overflow = 'hidden';

  })

  document.getElementById('close').addEventListener('click', function(){
    var lg = document.getElementById('largemenu');
    lg.classList.remove('in');
    lg.classList.add('out');


    document.getElementById('body').style.overflow = 'visible';

    })

  })();
