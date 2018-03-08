


    $("button").on("click", function() {


        //   var query = $(this).attr("data-person");
    
          var search = $("#search-term").val();
          var pages = $("#num-records-select").val();
          var startYear = $("#start-year").val();
          var endYear = $("#end-year").val();
    
       
          var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&q=" + search +  "08385334e1bc48789b8ccee555146928";
         
          var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&" + pages +  "08385334e1bc48789b8ccee555146928";
    
          var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&begin_date" + startYear +  "08385334e1bc48789b8ccee555146928";
    
          var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=&end_date" + endYear +  "08385334e1bc48789b8ccee555146928";
    
    
    
          $.ajax({
            url: queryrl,
            method: 'GET',
          }).done(function(result) {
            console.log(result);
          }).fail(function(err) {
            throw err;
          })
    
          .then(function(response) {
            var results = response.data;
    
            
    
    
    
    
        });
    