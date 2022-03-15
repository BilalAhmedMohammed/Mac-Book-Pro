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
function active(ev) {
    var divButton = document.getElementById('btnActive');
    var Buttons = divButton.children;
    for (var i = 0; i < Buttons.length; i++) {
        Buttons[i].classList.remove('active');
    }
    if (ev == Buttons[0]) {
        document.getElementById('inch14').classList.add('d-none');
        document.getElementById('inch16').classList.add('d-none');
        document.getElementById('inch13').classList.remove('d-none');
        //     document.getElementById('inch13').animate([
        //         // { display: 'flex' },
        //         {opacity:'1'}
        //     ], {
        //         duration: 1000,
        //         // iterations: Infinity
        //     });
    }
    else if (ev == Buttons[1]) {
        document.getElementById('inch16').classList.add('d-none');
        document.getElementById('inch13').classList.add('d-none');
        document.getElementById('inch14').classList.remove('d-none');
    }
    else if (ev == Buttons[2]) {

        document.getElementById('inch14').classList.add('d-none');
        document.getElementById('inch13').classList.add('d-none');
        document.getElementById('inch16').classList.remove('d-none');
    }
    else {

    }
    ev.classList.add('active');

}
function test(elem) {
    if (elem.value === "Iphon 13 pro") {
        location.assign('./appelLogo.html');
    }
    else if (elem.value === "Inch 13") {
        location.assign('./macBook 13-Inch.html');
    }
    else if (elem.value === "Inch 14") {
        location.assign('./macBook 14-Inch.html');
    }
    else if (elem.value === "Inch 16") {
        location.assign('./macBook 16-Inch.html');
    }
    else if (elem.value === "Iphon 11 pro") {
        location.assign('./Iphone 11.html');
    }
    else {
        // alert('This Element Is Not Exist Now');
        swal("This Element Is Not Exist Now", {
            className: "bg-danger",
            buttons: false,
            timer: 1500,
        });
    }

}

// function prev() {
//     alert(location.href);
//     location.href="./Iphone 11.html";
//     // let pages = ['./index.html', './appelLogo.html', './macBook 13-Inch.html', './Iphone 11.html', './macBook 14-Inch.html'];
//     // let linkPrev = document.getElementById('prev');
//     // console.log(location.href);
//     // if (location.href !== "./index.html") {
//     //     linkPrev.disabled = false;
//     //     for (let index = 0; index < pages.length; index++) {
//     //         // console.log(pages[index]);
//     //         // console.log(location.href);
//     //         if (location.href === pages[index]) {
//     //         // console.log(pages[index]);
//     //         // console.log(location.href);
//     //             // console.log(pages[index-1]);
//     //             // linkPrev.setAttribute('href', pages[index-1]);
//     //             location.href=pages[index-1];
//     //         }
//     //     }
//     // }
//     // else {
//     //     linkPrev.disabled = true;
//     // }

// }