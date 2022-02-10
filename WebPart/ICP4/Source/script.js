

function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    var userName=user;
    var reqUrl="https://api.github.com/users/"+ userName;

const xmlhttp= new XMLHttpRequest();
xmlhttp.open('GET',reqUrl,false);
xmlhttp.send();
return xmlhttp;

   
}

function showUser(data) {
   
    $("#profile").html(data.login );
    $("img").attr("src", data.avatar_url);
    $("#a1").attr("href",data.html_url);
    $("#pop > p").text("User Id: "+ data.id);    
    $("#pop > p").append("<br/>"+ "Date Created: "+ data.created_at + "<br />");
    $("#pop > p").append( "<br/>"+ "No of public Repositories: "+ data.public_repos + "<br />");
    $("#a2").attr("href",data.repos_url);
    

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            var data=JSON.parse(response.responseText)
            console.log(data)
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(data);
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});

