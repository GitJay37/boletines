// Obtener elementos de con clase .close
let links = document.querySelectorAll(".close");
// Recorrer elementos
links.forEach(function(link){
    
    // Agregar eventos
    link.addEventListener("click", function(e){
        e.preventDefault();

        let content = document.querySelector(".content");

        // Eliminar classes de animation
        content.classList.remove("fadeInDown");
        content.classList.remove("animated");
        // Agregar clases de animation 
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600);
        
    });
});