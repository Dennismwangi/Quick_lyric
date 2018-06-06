
/*$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        $("div#player").empty();

        var artiste = $("input#artiste").val();
        var title = $("input#title").val(); */

            var request = gapi.client.youtube.search.list({
                part: "snippet",
                type: "video",
                q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
                maxResults: 3,
                order: "viewCount",
               /* publishedAfter: "2015-01-01T00:00:00Z"*/
            });

                function init() {
            gapi.client.setApiKey("AIzaSyBPzdhCEaWtQh16b6H9IAkAmgry2tr3Nsw");
            gapi.client.load("youtube", "v3", function () {
                // yt api is ready
            });

        /*var url = `https://api.lyrics.ovh/v1/${artiste}/${title}`;*/

        $.getJSON(url)
            .done(function (data) {
               /* data.forEach(display =>{ */
                $("#player").append(`<p>${data["video"]}</p>`)

                } );

               /* console.log(data["lyrics"]);



            });

    });

}); */


function init() {
    gapi.client.setApiKey("AIzaSyBPzdhCEaWtQh16b6H9IAkAmgry2tr3Nsw");
    gapi.client.load("youtube", "v3", function () {
        // yt api is ready
    });

} 
 }

  