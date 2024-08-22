document.querySelector("button").addEventListener("click", result);

var container = document.createElement("div");
container.className="container";

var row=document.createElement("div");
row.className="row";

async function result() {
    row.innerHTML=" ";
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://dog.ceo/api/breeds/image/random`);
        var res = await data.json();
        console.log(res[0].show.language);
        var col= document.createElement("div");
        col.className='col-lg-4';
        col.innerHTML=`<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${res[0].show.image.medium}" alt="Card image cap">
     
        
        </div>`;
        row.append(col);
        container.append(row);
        document.body.append(container);

    } catch (error) {
        console.log(error);
    }
}