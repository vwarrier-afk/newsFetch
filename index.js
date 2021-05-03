$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function(data){
        
        var currentQuote = '';
        var quotes = data.hits;

        $('.read').on('click',function(){
            currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
            console.log(currentQuote);
            $('.quoteBody').hide();
            //$('.quoteBody').html(currentQuote.title);
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink').attr('href', currentQuote.url).attr('target','_blank');
            $('.quoteAuthor').html('by ' + currentQuote.author);

            $('.tweetQuote').attr('href','https://twitter.com/intent/tweet?text=' + currentQuote.author + '+writes+' + currentQuote.title)
                .attr('target','_blank')
                .attr('disabled',false);
            $('.read').html('Fetch Another Article');
        });
        
        console.log(quotes[0].title);

        console.log(data);
    })
});

