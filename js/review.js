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
// var btnAdd=document.getElementById('btnAdd');
// btnAdd.addEventListener('click',addToBag);
var num;
function bagFill(){
    num=document.getElementById('numOfElems');
    num.classList.remove('d-none');
        num.textContent=localStorage.getItem('num');
    // btnAdd.removeEventListener('click',addToBag);
    document.getElementById('bagBody').textContent=localStorage.getItem('bagBody');
    document.getElementById('bagCount').textContent=localStorage.getItem('bagCount'); 
}
function remove(ev){
    ev.preventDefault();
    num=document.getElementById('numOfElems');
    num.classList.add('d-none');
    num.textContent='';
    document.getElementById('bagBody').textContent="Your bag is Empty";
    document.getElementById('bagCount').textContent=''; 

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
