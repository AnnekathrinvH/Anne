(function() {

          $.get('TickerjQuery.json', function(data) {
              console.log(data);
              ticker(data);
          });


    function ticker(data){
        var ticker = $('#container');
        var id;
        var startPosition = ticker.offsetLeft;

        insertLinks();
        function insertLinks() {
            for(var i = 0; i < data.length; i++) {
                ticker.html('+= '<a href=' + data[i].link + '>' + data[i].title + '</a>'')
                //ticker.innerHTML += '<a href=' + data[i].link + '>' + data[i].title + '</a>';
            }
        }



        function moveTicker() {
          var newPosition = startPosition--;
          ticker.css('left','+=1')
        //  id = window.requestAnimationFrame(moveTicker);
          var links = document.getElementsByTagName('a');
          var firstWidth = links[1].offsetLeft;
          console.log(firstWidth);
          console.log(newPosition);

          if (newPosition < -firstWidth) {
            var old = ticker.removeChild(links[0]);
            newPosition -= firstWidth;

            ticker.appendChild(old);
          }
        }




        function stopTicker() {
          window.cancelAnimationFrame(id);
          ticker.removeEventListener('mouseover', stopTicker);
          ticker.addEventListener('mouseout', startTicker);
          console.log(id);
        }

        function startTicker() {
          moveTicker();
          console.log('start');
          ticker.removeEventListener('mouseout', startTicker);
          ticker.addEventListener('mouseover', stopTicker);

        }

        moveTicker();
        ticker.addEventListener('mouseover', stopTicker);

    }
})();
