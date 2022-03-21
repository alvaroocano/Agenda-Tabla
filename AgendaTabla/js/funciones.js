	
	
	function crearTablaAmigos(){
		var amigos=[
			{nombre:"Pepe", apellido:"Pérez"},
			{nombre:"Elena", apellido:"Nito"},
			{nombre:"Dolores", apellido:"Delano"}]
		let tabla=document.createElement("table");
		let fila=document.createElement("tr");
		let columna_nombre=document.createElement("td");
		let columna_apellido=document.createElement("td");
		document.getElementsByTagName("div")[0].appendChild(tabla);

		for (var i=0; i<amigos.length; i++){
		document.getElementsByTagName("table")[0].appendChild(fila);
		document.getElementsByTagName("tr")[i].appendChild(columna_nombre);
		columna_nombre.innerHTML=amigos[i].nombre;
		document.getElementsByTagName("tr")[i].appendChild(columna_apellido);
		columna_apellido.innerHTML=amigos[i].apellido;
		tabla=document.createElement("table");
		fila=document.createElement("tr");
		columna_nombre=document.createElement("td");
		columna_apellido=document.createElement("td");
		}
		document.getElementsByTagName("table")[0].style.border="2px solid blue";

	}