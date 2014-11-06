<?php 
if (isset($_POST['nombre']) && !empty($_POST('nombre') &&
	isset($_POST['correo']) && !empty($_POST('correo') &&
	isset($_POST['numero']) && !empty($_POST('numero') &&
	isset($_POST['mensaje']) && !empty($_POST('mensaje')) 
{
	
	$destino = "contacto@realweb.com.mx";
	$asunto  = "Página web, Importante";
	$mensaje = "Nombre: " . $_POST['nombre']. <br> ."Empresa/organizacion: ". $_POST['company'].<br>. "Correo electrónico: ". $_POST['correo'] . <br> .
			   "Número telefónico ". $_POST['numero']. <br> . $_POST['mensaje'];
 
	
	mail($destino, $asunto, $mensaje)	
}







 ?>