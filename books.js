
let myLibrary = [];
const bookdisplaybox = document.getElementById('bookdisplay');

function book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        console.log(title+' by '+author+', '+pages+' pages, '+status);
    }
}

function addBookToLibrary() {
    const container = document.createElement('div');
    container.setAttribute('class','bookbox');
    bookdisplaybox.appendChild(container);

    const titlebox = document.createElement('div');
    const authorbox = document.createElement('div');
    const pagesbox = document.createElement('div');
    const readbutton = document.createElement('button');

    titlebox.setAttribute('class', 'databox');
    authorbox.setAttribute('class', 'databox');
    pagesbox.setAttribute('class', 'databox');
    readbutton.setAttribute('class','status');

    titlebox.textContent = myLibrary[myLibrary.length-1].title;
    authorbox.textContent = myLibrary[myLibrary.length-1].author;
    pagesbox.textContent = myLibrary[myLibrary.length-1].pages;
    readbutton.textContent = myLibrary[myLibrary.length-1].status;
    
    container.appendChild(titlebox);
    container.appendChild(authorbox);
    container.appendChild(pagesbox);
    container.appendChild(readbutton);
}

function getinput(){
    const entryform = document.getElementById('Entryform');
    const inputbox = document.createElement('div');
    inputbox.setAttribute('id','inputboxid')
    entryform.style.display = "block";
    const titleinput = document.createElement('input');
    const authorinput = document.createElement('input');
    const pagesinput = document.createElement('input');
    const readstatus = document.createElement('input');
    const button = document.createElement('button');
    button.setAttribute('id','button');
    titleinput.setAttribute('id','Title');
    authorinput.setAttribute('id','Author');
    pagesinput.setAttribute('id','Pages');
    readstatus.setAttribute('id','Status');
    var text = document.createTextNode("Enter");
    button.appendChild(text);;
    entryform.appendChild(inputbox);
    inputbox.appendChild(titleinput);
    inputbox.appendChild(authorinput);
    inputbox.appendChild(pagesinput);
    inputbox.appendChild(readstatus);
    inputbox.appendChild(button);
}

function clicked(e){
    if(e.target.id == "addnewbutton"){
        console.log(e.target.id);
        getinput();
    }
    if(e.target.id == "button"){
        a = document.getElementById("Title").value;
        b = document.getElementById("Author").value;
        c = document.getElementById("Pages").value;
        d = document.getElementById("Status").value;
        const todelete = document.getElementById('inputboxid');
        const deletefrom = document.getElementById('Entryform');
        deletefrom.removeChild(todelete);
        /*
        inputbox.removeChild(titleinput);
        inputbox.removeChild(authorinput);
        inputbox.removeChild(pagesinput);
        inputbox.removeChild(readstatus);
        inputbox.removeChild(button);
        */

        console.log("your are in")        
        const newbook = new book(a,b,c,d);
        myLibrary.push(newbook);
        addBookToLibrary(myLibrary);
        for(var i=0; i<myLibrary.length; i++){
            console.log(myLibrary[i].title);
        }
    }
}
window.addEventListener('click',clicked);