var submitBtn = document.getElementById("submit_btn");
var sitesContainer = document.getElementById('sitesContainer');
var siteNameInput = document.getElementById("sitename");
var siteURLInput = document.getElementById("siteURL");
var NameAlert = document.getElementById("Name-alert");
var URL_Alert = document.getElementById("URL-alert");

var sitesArray =[];

if (JSON.parse(localStorage.getItem("sitesArray"))!=null)
{
    sitesArray= JSON.parse(localStorage.getItem("sitesArray"));
    display_sites(sitesArray);
}

function add_site()
{
    NameAlert.classList.add("d-none");
    URL_Alert.classList.add("d-none");

    if (siteNameInput.value!="" && siteURLInput.value!="") {
        var site = {
            siteName: siteNameInput.value,
            siteURL: siteURLInput.value
        }
    
        sitesArray.push(site);
        display_sites(sitesArray);
        localStorage.setItem("sitesArray",JSON.stringify(sitesArray));
    }

    else
    {
        if (siteNameInput.value == "") {
            NameAlert.classList.remove("d-none");
        }
        if (siteURLInput.value == "") {
            URL_Alert.classList.remove("d-none");
        }
    }

    clear_inputs();

} 

function display_sites (array)
{

    var cont="";
    for (let index = 0; index < array.length; index++) {
        
        cont += `<div class="site ps-4 grad my-4">
                <div class="d-flex  justify-content-between w-50 p-35">
                    <span class="fw-bold fs-4">${array[index].siteName}</span>
                    <div>
                        <button class="btn btn-info text-decoration-none"><a target="_blank" class="text-decoration-none text-black" href="${array[index].siteURL}">Visit</a></button>
                        <button onclick="delete_site (${index})" class="btn btn-danger">Delete</button>
                    </div>
                </div>
        
            </div>`;
    }
    sitesContainer.innerHTML= cont;
}

function delete_site (item)
{
    sitesArray.splice(item,1);
    localStorage.setItem("sitesArray",JSON.stringify(sitesArray));
    display_sites(sitesArray);
}

function clear_inputs()
{
    siteNameInput.value = "";
    siteURLInput.value = "";
}