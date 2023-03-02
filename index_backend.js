let dialog = document.querySelector('#newdialog');
let editdialog = document.querySelector('#editdialog');
let editbutton = document.querySelector('#edit')
let cancelbutton = document.querySelector('#cancel');
let canceleditbutton = document.querySelector('#cancel-edit');
let addbutton = document.querySelector('#add-button');
let deletedialog = document.querySelector('#deletedialog');
let yesdelete = document.querySelector('#yes-delete');
let nodelete = document.querySelector('#no-delete');
let posts = JSON.parse(localStorage.getItem("postlist")) || [];

function dialogshow() {
  dialog.showModal();
}

nodelete.addEventListener('click', () => {
  deletedialog.close();
});
cancelbutton.addEventListener('click', () => {
  dialog.close();
});
canceleditbutton.addEventListener('click', () => {
  editdialog.close();
});

//show posts
function showPosts() {
  var html = '';
  for (let index = 0; index <posts.length; index++) {
    html += '<li>'+posts[index].title;
    html += '('+posts[index].date+')';
    html += ':'+posts[index].details;
    html += "<button onclick='deletewindow("+index+")'><i class='fa fa-trash'></i></button>"
    html+= "<button onclick='editwindow("+index+")'><i class='fa fa-pencil'></i></button>"+"</li>"
  };
  document.querySelector("#blogs-ul").innerHTML = html;
}

//addpost function
function addpost(){
  let title_content = document.querySelector("#title").value;
  let date_content = document.querySelector("#date").value;
  let description = document.getElementById("description").value;
  posts.push({
    title:title_content,
    date:date_content,
    details:description,
  });
  localStorage.setItem("postlist", JSON.stringify(posts));
  showPosts();
  document.querySelector("#title").value = "";
  document.querySelector("#date").value = "";
  document.getElementById("description").value = "";
  showPosts();
  dialog.close();
}
function deletewindow(index){
  deletedialog.showModal();
  yesdelete.addEventListener('click',()=>{
    posts.splice(index,1);
    localStorage.setItem("postlist",JSON.stringify(posts));
    showPosts();
    deletedialog.close();
  })
}

function editwindow(index){
  
  editdialog.showModal();
  document.querySelector("#edit-title").value= posts[index].title;
  document.querySelector("#edit-date").value= posts[index].date;
  document.querySelector("#edit-description").value= posts[index].details;
  editbutton.addEventListener('click',()=>{
    posts[index].title = document.querySelector("#edit-title").value;
    posts[index].date = document.querySelector("#edit-date").value;
    posts[index].details = document.querySelector("#edit-description").value;
    localStorage.setItem('postlist',JSON.stringify(posts));
    showPosts();
    editdialog.close();
  })
}

gtag('set', 'user_properties', {
    'location': 'USER_GEO_LOCATION'
  });

(function () {
  showPosts();
})();