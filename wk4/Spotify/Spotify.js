(function(){
    $("#form" ).submit(function(e) {
        $('#Container').html('');
        var input = $('#input').val();
        var selector = $('#select').val();
        getData(input, selector);
        e.preventDefault();
    });

    function getData(a, b) {
        $.get('https://api.spotify.com/v1/search', { q: a, type: b }, function(data) {
            console.log(data);
            console.log(b);
            $('#searchTerm').html('Results for "'+a+'"');
            if(b === 'artist') {
                var img;
                var name;
                var url;
                if(data.artists.items.length === 0) {
                    $('#Container').html('no matches');
                }
                loadItemsArtist(data);

                if(data.artists.next) {
                    console.log('next');
                    $('#button2').removeClass('invisible');
                    $('#button2').click(getMoreData(data));
                }
            }
            if(b === 'album') {
                if(data.albums.items.length === 0) {
                    $('#Container').html('no matches');
                }

                for(var i = 0; i < data.albums.items.length; i++) {
                    var img;
                    var name;
                    var url;
                    if(data.albums.items[i].images[0] === undefined) {
                        img = 'http://www.wpclipart.com/music/performance/more_performers/marching_band.png'
                    }
                    else {
                        img = data.albums.items[i].images[0].url;
                        name = data.albums.items[i].name;
                        url = data.albums.items[i].external_urls.spotify;
                        console.log(name);
                        $('#Container').append('<a href ="'+url+'"><div id="result"><img src='+img+'><a/><div id="name"><a href ="'+url+'">'+name+'<a/></div></div>');
                    }
                }
                if(data.albums.next) {
                    console.log('next');
                    $('#button2').removeClass('invisible');

                }
            }
            getMore(data);
        });

        function getMore(data) {


        }
    }

    function loadItemsArtist(data) {
        for(var i = 0; i < data.artists.items.length; i++) {
            if(data.artists.items[i].images[0] === undefined) {
                img = 'http://www.wpclipart.com/music/performance/more_performers/marching_band.png'
            }
            else {
                img = data.artists.items[i].images[0].url;
                name = data.artists.items[i].name
                url = data.artists.items[i].external_urls.spotify;
            }
            $('#Container').append('<a href ="'+url+'"><div id="result"><img src='+img+'><a/><div id="name"><a href ="'+url+'">'+name+'<a/></div></div>');
        }
    }

    function getMoreData() {
        $.get(data.artists.next, function(data2) {
            console.log(data2);
            loadItemsArtist(data2);
        });
    };


})();
