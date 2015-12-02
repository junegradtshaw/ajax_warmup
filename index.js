//var search_term=$("#user_name").val();  //aww are cute images
// <script src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.2.min.js"></script>

var search_term="aww"

var urlString="https://www.reddit.com/subreddits/search.json?q="+search_term;
console.log(urlString);

var getter=$.ajax({
  url: "https://www.reddit.com/subreddits/search.json?q="+search_term,
  method: "GET",
  dataType: "json"
});

getter.done(function(response) {
  generateTable(response);
});

getter.fail(function(){
console.log("those people are mean" );
});


$("#searchButton").click(function () {
  var searchText=$('#search').val();
  $('tr:contains(' + searchText + ')').css("background-color", "blue");
});

$("#hideTitleButton").click(function () {
  var hideTitleText=$('#hideTitle').val();
  $('tr:has(td:first-child:contains(' + hideTitleText + '))').hide();
});

$("#removeButton").click(function () {
  var removeText=$('#remove').val();
  $('tr:contains(' + removeText + ')').hide();
});

function generateTable(response) {
    var dataArray=response["data"]["children"];
    dataArray.forEach(function(element) {
      var rowString=getRow(element);
      $("#myTable").append(rowString);
    })
  };

function getRow(element) {
  var imgString=getImage(element["data"]["header_img"]);
  var title = element["data"]["title"];
  var id = element["data"]["id"];
  var tableString = '<tr><td>'+title+'</td><td>'+id+'</td><td><img src="'+imgString+'" /></td></tr>';
  return(tableString);
};

function getImage(imgString) {
  return(imgString ? imgString : "http://placehold.it/100x100");
};
