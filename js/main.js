function loadpage(error, text, xhr) {
        if (error) {alert('Error ' + xhr.status);return;}
        document.getElementById('content').innerHTML = text;
    }
    function load(page) {
        promise.get('/' + page + '.html').then(loadpage);
    }
    function loadSmallEvents(error, text, xhr) {
        if (error) {alert('Error ' + xhr.status);return;}
        
        var content = JSON.parse(text);
        var innerHTML = "";
        
        content.events.forEach(function(event) {
            innerHTML += 
            "<div class=\"well\"><p>Socialdans</p>" +
                "<p><span class=\"glyphicon glyphicon-map-marker\"></span>" +
                event.name +
                "</p><p><span class=\"glyphicon glyphicon-time\"></span>" +
                event.time +
                "</p></div>";
            
        });
         document.getElementById('small-events').innerHTML = innerHTML;
    }
    function loadStaticContent() {
        promise.get('/content/small-events.json').then(loadSmallEvents);
    }
