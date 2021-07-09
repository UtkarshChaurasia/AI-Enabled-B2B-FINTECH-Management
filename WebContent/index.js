/* Add Modal Feature */

var addModalBtn = document.querySelector('.add-btn');
var addModalBg = document.querySelector('.add-modal-bg');
var addModalClose = document.querySelector('.add-modal-close');
var modalCancel = document.querySelector('.modal-cancel-btn');

addModalBtn.addEventListener('click', function(){
    addModalBg.classList.add('add-modal-active');
});

addModalClose.addEventListener('click', function(){
    addModalBg.classList.remove('add-modal-active');
});

modalCancel.addEventListener('click', function(){
    addModalBg.classList.remove('add-modal-active');
});


/*Delete Modal Feature*/

var deleteModalBtn = document.querySelector('.delete-btn');
var deleteModalBg = document.querySelector('.delete-modal-bg');
var deleteCancelBtn = document.querySelector('.delete-cancel-btn');
var deleteModalClose = document.querySelector('.delete-modal-close');


deleteModalBtn.addEventListener('click', function(){
    deleteModalBg.classList.add('delete-modal-active');
});

deleteCancelBtn.addEventListener('click', function(){
    deleteModalBg.classList.remove('delete-modal-active');
});

deleteModalClose.addEventListener('click', function(){
    deleteModalBg.classList.remove('delete-modal-active');
});



/*Edit Modal Feature*/


var editModalBtn = document.querySelector('.edit-btn');
var editModalBg = document.querySelector('.edit-modal-bg');
var editModalClose = document.querySelector('.edit-modal-close');
var editCancel = document.querySelector('.edit-cancel-btn');

editModalBtn.addEventListener('click', function(){
    editModalBg.classList.add('edit-modal-active');
});

editModalClose.addEventListener('click', function(){
    editModalBg.classList.remove('edit-modal-active');
});

editCancel.addEventListener('click', function(){
    editModalBg.classList.remove('edit-modal-active');
});

/*
var y = document.querySelectorAll('[name="myCheck"]:checked');

if(y.length==1)
{
	var editModalBtn = document.querySelector('.edit-txt');
	editModalBtn.classList.add('edit-btn-enabled');
}
else
{
	editModalBtn.classList.remove('edit-btn-enabled');
}
*/










/*Checkbox functionality */

function selectedRow(result){
    //var editBtnBg = document.querySelector('.edit-txt');
    if(result.checked)
    {
        result.parentNode.parentNode.style.backgroundColor = "#2A5368";
        //editBtnBg.classList.add('edit-btn-enabled');
        
    }
    else
    {
        result.parentNode.parentNode.style.backgroundColor = "";
        //editBtnBg.classList.remove('edit-btn-enabled');
    }
}

function selectAllRow(result) {
    var x = document.getElementById("table").querySelectorAll(".row");
    if(result.checked)
    {
        for(let i=0;i<x.length;i++)
        {
            x[i].style.backgroundColor = "#2A5368";
        }
        $(".checkbox").prop('checked', true);
    }
    else
    {
        for(let i=0;i<x.length;i++)
        {
            x[i].style.backgroundColor = "";
        }
        $(".checkbox").prop('checked', false);
    }
    
}








let tableRowHeader = `<div class="row-header">
    <div class="cell" data-title="checkbox">
        <input type="checkbox" onclick="selectAllRow(this)" style="background-color: #273D49CC;">
    </div>
   <div class="cell" data-title="Customer Name">
       Customer Name
   </div>
   <div class="cell" data-title="Customer #">
       Customer #
   </div>
   <div class="cell" data-title="Invoice #">
       Invoice #
   </div>
   <div class="cell" data-title="Invoice Amount">
       Invoice Amount
   </div>
   <div class="cell" data-title="Due Date">
       Due Date
   </div>
   <div class="cell" data-title="Predicted Payment Date">
       Predicted Payment Date
   </div>
   <div class="cell" data-title="Notes">
       Notes
   </div>
</div>`



var pageno = 1;
const fetchTableData = () => {
    $.get('/H2HBABBA2557/fetch', { page: pageno }, function(data, textStatus, jqXHR) {
        buildTable(data)
       
    });
}

(
    function() {
        fetchTableData();
    }

)()


function buildTable(data) {
    const table = document.getElementById('table');
    
    table.innerHTML += tableRowHeader;
    
    for (let i in data) {
       
    	let tableRowEle = `<div class="row" id="${data[i].field}" >
        <div class="cell" data-title="checkbox">
        <input type="checkbox" name="myCheck"  value="${data[i].field}" class="checkbox" onclick="selectedRow(this)" style="background-color: #273D49CC;">
        <label for="individual"></label>
    </div>
   <div class="cell" data-title="Customer Name">
       ${data[i].customerName}
   </div>
   <div class="cell" data-title="Customer #">
       ${data[i].customerId}
   </div>
   <div class="cell" data-title="Invoice #">
       ${data[i].invoiceId}
   </div>
   <div class="cell" data-title="Invoice Amount">
       ${data[i].invoiceAmt}
   </div>
   <div class="cell" data-title="Due Date">
       ${data[i].dueDate}
   </div>
   <div class="cell" data-title="Predicted Payment Date">
       ${data[i].predictedDate}
   </div>
   <div class="cell" data-title="Notes">
       ${data[i].notes}
   </div>
</div>`
    	
    		
        table.innerHTML += tableRowEle;
    }
}

function nextPage(){
	pageno+=1;
	const table = document.getElementById('table');
	table.innerHTML = "";
	fetchTableData();
}

function prevPage(){
	if(pageno>1)
	{
		pageno-=1;
		const table = document.getElementById('table');
		table.innerHTML = "";
		fetchTableData();
	}
	
}

function clearAddModal()
{
	document.getElementById("add-customer-name").value="";
	document.getElementById("add-customer-no").value="";
	document.getElementById("add-due-date").value="";
	document.getElementById("add-invoice-no").value="";
	document.getElementById("add-invoice-amt").value="";
	document.getElementById("add-notes").value="";
}


function addInvoice(){
	var customerName = document.getElementById("add-customer-name").value;
	var customerNo = document.getElementById("add-customer-no").value;
	var dueDate = document.getElementById("add-due-date").value;
	var invoiceNo = document.getElementById("add-invoice-no").value;
	var invoiceAmt = document.getElementById("add-invoice-amt").value;
	console.log(customerName);
	if(customerName=="" || customerNo=="" || dueDate=="" || invoiceNo=="" || invoiceAmt=="")
	{
		alert("You cannot leave any field empty!");
		return;
	}
	var notes = document.getElementById("add-notes").value;
	clearAddModal();
	addModalBg.classList.remove('add-modal-active');
    
        
    
	
	$.post('/H2HBABBA2557/addInvoice', { custName: customerName, custId: customerNo, dueDa: dueDate, invNo: invoiceNo, invAmt: invoiceAmt, not: notes }, function() {
        alert("Data Added!");
     });
		
}


function checkEdit(){
	var y = document.querySelectorAll('[name="myCheck"]:checked');
	if(y.length!=1)
	{
		var editModalBg = document.querySelector('.edit-modal-bg');
		editModalBg.classList.remove('edit-modal-active');
		alert("Select only one row to edit!");
	}
	
}

function resetEditModal()
{
	
	document.getElementById("edit-invoice-amt").value = "";
	document.getElementById("edit-notes").value = "";
	
}


function editInvoice()
{
	var newInvoiceAmt = document.getElementById("edit-invoice-amt").value;
	var newNotes = document.getElementById("edit-notes").value;
	var y = document.querySelectorAll('[name="myCheck"]:checked');
	var editId = y[0]['value'];
	$.post('/H2HBABBA2557/editInvoice', { uniqId: editId, inamt: newInvoiceAmt, nn: newNotes }, function() {
		window.location.reload();
        alert("Data Edited!");
     });
	
	resetEditModal();
	editModalBg.classList.remove('edit-modal-active');
}


function checkDelete(){
	var y = document.querySelectorAll('[name="myCheck"]:checked');
	if(y.length<1)
	{
		var deleteModalBg = document.querySelector('.delete-modal-bg');
		deleteModalBg.classList.remove('delete-modal-active');
		alert("Select atleast one row to delete!");
	}
	
}


function deleteInvoice()
{
	var y = document.querySelectorAll('[name="myCheck"]:checked');
	var arr = [];
	for(let i=0;i<y.length;i++)
	{
		arr.push(y[i]['value']);
		
	}
	for(var i=0;i<arr.length;i++)
	{
		$.post('/H2HBABBA2557/deleteInvoice', {idList: arr[i]}
    	);
	}
	var deleteModalBg = document.querySelector('.delete-modal-bg');
	deleteModalBg.classList.remove('delete-modal-active');
	window.location.reload();
	alert("Deleted Successfully");
	
	
}




var searchBtn = document.querySelector(".search-box");
searchBtn.addEventListener('keypress', function(e){
	if(e.key === 'Enter')
	{
		var searId = document.getElementById("search-inv").value;
	    console.log(searId);
	    /*$.post('/H2HBABBA2557/searchInvoice', { searchId: searId}, function() {
	    	$.get('/H2HBABBA2557/searchInvoice', {page: pageno}, function(data, textStatus, jqXHR) {
		        buildTable(data)
		       
		    });
	    	
	     });*/
	    
	}
    
});