var tags = [
    "Iphon 11 pro",
    "Iphon 12 pro max",
    "Iphon x max pro",
    "Iphon 13 pro",
    "Ipad 5",
    "Ipad 6",
    "Ipad 7",
    "Ipad 8",
    "Mac pro",
    "Mac 2",
    "Mac 3",
    "Mac 6",
    "Watch 4",
    "Watch 2",
    "Watch 8",
    "Inch 13",
    "Inch 14",
    "Inch 16"
];
var n = tags.length;
function autoComplete(value) {
    document.getElementById('datalist').innerHTML = '';
    l = value.length;
    for (var i = 0; i < n; i++) {
        if (((tags[i].toLowerCase()).indexOf(value.toLowerCase())) > -1) {
            var node = document.createElement("option");
            var val = document.createTextNode(tags[i]);
            node.appendChild(val);

            document.getElementById("datalist").appendChild(node);
        }
    }
}
function displaySearchInput(ev) {
    document.getElementById('FormSearch').classList.remove('d-none');
    document.getElementById('FormSearch').classList.add('d-flex');
    document.getElementById('navLinks').classList.add('d-none');
}
function resetNavLinks() {
    document.getElementById('navLinks').classList.remove('d-none');
    document.getElementById('FormSearch').classList.add('d-none');
}
function changeImg(elem)
{
    const img=document.getElementById('imgIphone');
    if (elem.children[0].classList[1]==='text-warning')
    {
        img.setAttribute('src',"./images/yellow.jpg");
    }
    else if(elem.children[0].classList[1]==='text-dark')
    {
        img.setAttribute('src',"./images/black.png");
    }
    else if(elem.children[0].classList[1]==='text-secondary')
    {
        img.setAttribute('src',"./images/gray.jpg");
    }
    else if(elem.children[0].classList[1]==='text-primary')
    {
        img.setAttribute('src',"./images/primary.jpg");
    }
    else if(elem.children[0].classList[1]==='text-danger')
    {
        img.setAttribute('src',"./images/danger.jpg");
    }
    else if(elem.children[0].classList[1]==='text-success')
    {
        img.setAttribute('src',"./images/success.jpg");
    }
    else
    {

    }

}
function test(elem) {
    if (elem.value==="Iphon 13 pro")
    {
        location.assign('./appelLogo.html');
    }
    else if (elem.value==="Inch 13")
    {
        location.assign('./macBook 13-Inch.html');
    }
    else if (elem.value==="Inch 14")
    {
        location.assign('./macBook 14-Inch.html');
    }
    else if (elem.value==="Inch 16")
    {
        location.assign('./macBook 16-Inch.html');
    }
    else if (elem.value==="Iphon 11 pro")
    {
        location.assign('./Iphone 11.html');
    }
    else
    {
        swal("This Element Is Not Exist Now", {
            className: "bg-danger",
            buttons: false,
            timer: 1500,
        });
        // alert('This Element Is Not Exist Now');
    }
    
}
// function prev() {
//     let pages = ['./index.html', './appelLogo.html', './macBook 13-Inch.html', './Iphone 11.html', './macBook 14-Inch.html'];
//     let linkPrev = document.getElementById('prev');
//     if (location.href !== "./index.html") {
//         linkPrev.disabled = false;
//         for (let index = 0; index < pages.length; index++) {
//             if (location.href == pages[index]) {
//                 location.href=pages[index-1];
//                 linkPrev.setAttribute('href', pages[index-1]);
//             }

//         }
//     }
//     else {
//         linkPrev.disabled = true;
//     }

// }