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
function gallery(ev){
    ev.preventDefault();
 document.getElementById('carouselExampleIndicators').classList.remove('d-none');
 document.getElementById('nav').classList.add('d-none');
 document.getElementById('container').classList.add('d-none');

}
function closeGallery(event){
    console.log('Bilal');
    event.stopPropagation();
    document.getElementById('carouselExampleIndicators').classList.add('d-none');
    document.getElementById('nav').classList.remove('d-none');
    document.getElementById('container').classList.remove('d-none');
}
var btnAdd=document.getElementById('btnAdd');
btnAdd.addEventListener('click',addToBag);
function addToBag(){
    var num=document.getElementById('numOfElems');
    num.classList.remove('d-none');
    num.textContent=parseInt(num.textContent)+1;
    btnAdd.removeEventListener('click',addToBag);
    document.getElementById('bagBody').textContent="16-inch proBook";
    document.getElementById('bagCount').textContent="1"; 
    setTimeout(function(){
        localStorage.setItem('bagBody',"16-inch proBook");
        localStorage.setItem('bagCount',"1");
        localStorage.setItem('num',num.textContent);
        location.assign('../reviewPage 16.html');
    },1000); 
}
function saveItem(elem) {
    console.log(elem.classList[4]);
    if (elem.classList[4] == 'text-primary') {
        elem.classList.remove('text-primary');
        elem.classList.add('text-warning');
        document.getElementById('savedItems').textContent="1";
    }
    else {
        elem.classList.remove('text-warning');
        elem.classList.add('text-primary');
        document.getElementById('savedItems').textContent=" ";
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
