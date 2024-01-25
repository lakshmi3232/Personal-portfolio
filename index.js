function myFunction() {
    var element = document.getElementById("ul--container");
    if (element.style.display === "block") {
        element.style.display = "none";
    } else {
        element.style.display = "block";
    }
}

function tap(val) {
    var carouselContainer = document.getElementById("carousal_ID");
    console.log(val);
    if (val === 0) {
        carouselContainer.scrollLeft -= 500;
    }
    else {
        carouselContainer.scrollLeft += 500;
    }
}

function validateForm(e) {
    e.preventDefault();

    var name = document.getElementById("fname").value;
    var mail = document.getElementById("Mail").value;
    var subject = document.getElementById("subject").value;
    var query = document.getElementById("text-area").value;

    var d1 = document.getElementById("display1");
    var d2 = document.getElementById("display2");
    var d3 = document.getElementById("display3");
    var d4 = document.getElementById("display4");

    if (!name) {
        d1.innerHTML = 'Please enter your name';
    }
    if (!/^[A-Za-z\s]+$/.test(name)) {
        d1.innerHTML = "Please enter your name as per credentials";
    }
    if (!mail) {
        d2.innerHTML = 'Please enter your mail';
    }
    if (!subject) {
        d3.innerHTML = 'Please enter your subject';
    }
    if (!query) {
        d4.innerHTML = 'Please enter your query';
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        d2.innerHTML = "Please type the email as per credentials";
    }

    if (subject.length < 2) {
        d3.innerHTML = 'Please enter a valuable subject'
    }

    if (!query || query.length <= 10) {
        d4.innerHTML = "Please type your query in the message box.<br>Query should be more than 10 characters"
    }

    let mailid = "lakshmi.e@wizinoa.com";
    let subjectto = `${subject}`;
    let content = `${query}`;
    let cBody = `Hi I am ${name}`;
    let vl = `mailto:${mailid}?subject=${subjectto}&body=${cBody, content}`;
    window.location.href = vl;
}