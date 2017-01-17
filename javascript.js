
    var topics = ["Cats", "Dogs", "Pizza", "Cows"];
    function renderButtons(){ 
        $('#buttonsView').empty();
        for (var i = 0; i < topics.length; i++){
            var a = $('<button>')
            a.addClass('subject');
            a.attr('data-name', topics[i]);
            a.text(topics[i]);
            $('#buttonsView').append(a);
        }
    }
    function displaySubjectInfo(){
        var subject = $(this).attr('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + subject + "&api_key=dc6zaTOxFJmzC&limit=10";
 $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
  $("#holder").html('')
    var gif = (response.data)
     for (var i = 0; i < response.data.length; i++){
   var newDiv = $('<div>');
                    var p = $('<p>').text("Rating: "+gif[i].rating)
                    var newImage = $('<img>').attr('src', gif[i].images.fixed_height_still.url)
                    $(newImage).attr('data-animate', gif[i].images.fixed_height.url)
                    $(newImage).attr('data-still', gif[i].images.fixed_height_still.url)
                    $(newImage).addClass('newImage')
                      console.log(newImage)
                    $(newDiv).append(p)
                    $(newDiv).append(newImage)
                     $("#holder").append(newDiv)
    }; 
     $('.newImage').on('click', function(){
 var state = $(this).attr('data-state'); 
    if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            };
            });       
            
        }); 
    }
    renderButtons();
    $('#addTopic').on('click', function(){
        var subject = $('#topic-input').val().trim();
        topics.push(subject);
        
        renderButtons();
        return false;
    });
    $(document).on('click', '.subject', displaySubjectInfo);
