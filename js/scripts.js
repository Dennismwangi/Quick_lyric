    $(document).ready(function() {
        $("form").submit (function (event){
            event.preventDefault();
            $("p#display").empty();

            var artiste = $("input#artiste").val();
            var title = $("input#title").val(); 

           var url = `https://api.lyrics.ovh/v1/${artiste}/${title}`;

            $.getJSON(url)
            .done(function(data){
                 /*data.forEach(display =>{ */
                    $("p#display").append(`<p>${data["lyrics"]}</p>`) 
                    
                /*} );*/
                
           /*console.log(data["lyrics"]); */

        

            });

        });

    });