function modelImages(obj1){
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
//var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

modal.style.display = "block";

modalImg.src = obj1.src;
captionText.innerHTML = obj1.alt;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeBut")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";

}
}


/*const sendMail = (e) => {
  alert("aaaa");
    e.preventDefault()
    const message = encodeURIComponent(document.getElementById('message').value);
    const formEmail = encodeURIComponent(document.getElementById('email').value);
    alert("message"+message+" "+formEmail)
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'kavyasathish.b@gmail.com',
        From : fromEmail,
        Subject : encodeURIComponent("This is my subject"),
        Body : message
    }).then(
      message => alert(message)
    ).catch( err => {
        alert(err)
    });
}

function sendEmail() {
  alert("1111");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    alert("message"+finalmessage);
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
    alert("final"+finalmessage);
    Email.send({
      alert("wmailllllllll"+finalmessage);
        Host : "smtp.gmail.com",
        Username : "username",
        Password : "password",
        To : 'kavyasathish.b@gmail.com',
        From : email,
        Subject : "Mail from website",
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}*/
