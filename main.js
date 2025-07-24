const formulario = document.querySelector(".form-create");
let id = 0;
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const descripcion = document.querySelector("#descripcion").value;
    const contenedor = document.querySelector(".publicaciones");
    contenedor.innerHTML += 
    `        
        <div class="publicacion">
            <p>id: ${++id}</p> 
            <p>${descripcion}</p>
            <button id="editar" onclick="editar(this)">Editar</button>
            <button id="eliminar" onclick="eliminar(this)">Eliminar</button>
        </div>`;
});


function editar(e){
    const parrafo = e.parentElement.querySelector("p:nth-child(2)");
    if (e.textContent == "Editar") {
        parrafo.contentEditable = true;
        e.textContent = "Guardar";
        parrafo.focus();
    }  
    else { 
    e.textContent = "Editar"
    parrafo.contentEditable = false;
    }
}

function eliminar(e){
    e.parentElement.remove(); //el parentElement es para seleccionar lo que esta arriba, osea, el papa de todo dentro, como quiero eliminar todo.
}