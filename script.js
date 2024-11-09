let userName = document.getElementById("username");
let email = document.getElementById("email");
let message = document.getElementById("message");
let addbtn = document.getElementById("btn");
let addbtn1 = document.getElementById("button1");
let addbtn2 = document.getElementById("button2");

let newArr = [];

function newId(){
	
	let createId = Math.random().toString().split(".")[1];
	
	console.log(createId);
	return createId;
}

function addData(h){
	
	let userDetail = {
		id:newId(),
		userName:userName.value,
		email:email.value,
		message:message.value
	}
	newArr.push(userDetail);
	showData(newArr);
	console.log(newArr);
	
		userName.value="";
		email.value="";
		message.value="";
}

let detailsContainer = document.getElementById("details_container");
let detailSec = document.getElementsByClassName("details_sec");

function showData(data){
	
	let newUser = data.map(function(ele,index){
		return `<div class="details_sec">
							<h1>${ele.userName}</h1>
							<h5>${ele.email}</h5>
							<p>${ele.message}</p>
							<div class="button_sec">
								<button type="button" class="delete_btn" onclick = "deleteBtn(${ele.id})">Delete</button>
								<button type="button" class="edit_btn" onclick  = "editBtn(${ele.id})">Edit</button>
							</div>
						</div>`
	}).join("");
	detailsContainer.innerHTML = newUser;
}


function deleteBtn(id){
		let delData = newArr.filter(function(ele){
			return ele.id != id; 
		});
		newArr = delData;
		showData(newArr);
}


let oldId;


function editBtn(id){
	let editData = newArr.find(function(ele){
		return ele.id == id;
		});
		if(editData){
			oldId = editData.id;
			userName.value = editData.username;
			email.value = editData.email;
			message.value = editData.message;
			
		}
	addbtn.style.display="none";
	addbtn1.style.display="inline-block";
	addbtn2.style.display="inline-block";
	
		let delData = newArr.filter(function(ele){
			return ele.id != id; 
		});
		newArr = delData;
		showData(newArr);
}


addbtn.addEventListener("click",addData);
addbtn1.addEventListener("click",function(ele){
	let userDetail = {
		id:oldId,
		userName:userName.value,
		email:email.value,
		message:message.value
	}
	newArr.push(userDetail);
	showData(newArr);
	console.log(oldId);
	console.log(newArr);
	
		userName.value="";
		email.value="";
		message.value="";
		
		addbtn.style.display="inline-block";
		addbtn1.style.display="none";
		addbtn2.style.display="none";
		
});


addbtn2.addEventListener("click",function(){
		userName.value="";
		email.value="";
		message.value="";
		
		addbtn.style.display="inline-block";
		addbtn1.style.display="none";
		addbtn2.style.display="none";
});
