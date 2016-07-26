(function() {

        console.log("hallo"); /*alles in einer funktion damit keine anderen script files auf der seite darauf zugreifen können*/




      function changeKittyState() {
          var cur = (document.getElementsByClassName('on')).item(0);
          var next = (document.getElementsByClassName('standby')).item(0);
          var prev = (document.getElementsByClassName('out')).item(0);

          cur.classList.remove("on");
          cur.classList.add("out");
          next.classList.remove("standby");
          next.classList.add("on");
          prev.classList.remove("out");
          prev.classList.add("standby");
        }

          setTimeout(changeKittyState, 6000);
                setTimeout(changeKittyState, 2000);
                setTimeout(changeKittyState, 2000);



})();
