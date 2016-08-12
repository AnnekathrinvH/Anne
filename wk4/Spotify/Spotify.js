(function(){
    var templates = document.querySelectorAll('script[type="text/handlebars"]');

    Handlebars.templates = Handlebars.templates || {};

    Array.prototype.slice.call(templates).forEach(function(script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });


    var input;
    var selector;
    var data;
    var img;
    var name;
    var url;
    var choice;

    $("#form" ).submit(function(e) {
        $('#Container').html('');
        input = $('#input').val();
        selector = $('#select').val();
        getData();
        e.preventDefault();
    });


    function getData() {
        $.get('https://api.spotify.com/v1/search', { q: input, type: selector }, function(request) {
            data = request;
            console.log(data);
            console.log(selector);
            showResults();
        });
    };

    function showResults() {
        $('#searchTerm').html('Results for "'+input+'"');

        if(selector === 'artist') {
            choice = data.artists;
            if(choice.items.length === 0) {
                $('#Container').html('no matches');
            }

            loadItems();

        }
        if(selector === 'album') {
            choice = data.albums;
            if(choice.items.length === 0) {
                $('#Container').html('no matches');
            }

            loadItems();
        }
    }



    function loadItems() {
        console.log(choice.items);
        for(var i = 0; i < choice.items.length; i++) {
            if(choice.items[i].images[0] === undefined) {
                choice.items[i].images[0] = {url: 'http://www.wpclipart.com/music/performance/more_performers/marching_band.png'}
            }
        }
        console.log(choice.items);


        var spotifyData = Handlebars.templates.searchResults(choice.items);
        $('#Container').append(spotifyData);




        if(choice.next) {
            console.log('next');
            $('#button2').removeClass('invisible');
            $('#button2').click(function() {
                getMoreData();
            })
        }
        if (choice.next === null) {
            $('#button2').addClass('invisible');
        }
    }

    function getMoreData() {
        $.get(choice.next, function(newdata) {
            data = newdata;
            if(selector === 'artist') {
                choice = data.artists;
            }
            if (selector === 'album') {
                choice = data.albums;
            }
            console.log(data);
            loadItems();
        });
    };


})();
