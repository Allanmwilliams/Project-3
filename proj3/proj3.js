jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies')
        .then(function(response){
            console.log(response.data);
            var moviesHTML = response.data.map(function(movie){

            return '<p class="movie" data-movie="'+movie.id+'">' + 
                movie.title + '</p>' ;
            });
            
            $('#movies').html(moviesHTML);


        });

        $('body').on('click', '.movie', function(){
            var id = $(this).data('movie');
            var url = 'http://csc225.mockable.io/movies/' + id;
            
            axios.get(url).then(function(response){
               
               var movie = response.data;
                var movieHTML = '<p>' + movie.title + '</p>';
                movieHTML += '<p>' + movie.director + '</p>';
                movieHTML += '<p>' + movie.release + '</p>';
               movieHTML += '<a href="' + movie.poster + '">Movie Poster</a>';
                $('#current-movie').html(movieHTML);
               
            })
            $('#current-movie').html('<img src=https://media3.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif?cid=790b7611f90983e71faf8acb78876a06e504dde55962491c&rid=giphy.gif>');

        });



       
});