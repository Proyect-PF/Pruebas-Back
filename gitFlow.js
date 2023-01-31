//? agregar los cambios de un archivo al staged
//! git add archivo/directorio
//? agregar todos los cambios de todos los archivos al staged
//! git add .


//? los cambios son comprometidos en el repositorio
//? debes escribir el mensaje del cambio
//? cuando se abra el archivo de configuración
//? al terminar guarda y cierra el archivo
//? para que los cambios tengan efecto
//! git commit
//? es un shortcut del comando anterior
//? escribes y confirmas el mensaje del cambio en un sólo paso
//! git commit -m "mensaje descriptivo del cambio"


//? se agrega el origen remoto de tu repositorio de GitHub
//! git remote add origin https://github.com/usuario/repositorio.git
//? la primera vez que vinculamos el repositorio remoto con el local
//! git push -u origin master
//? para las subsecuentes actualizaciones, sino cambias de rama
//! git push


//?para descargar los cambios del repositorio remoto al local
//! git pull


//? # crear rama
//! git branch nombre-rama

//? # cambiar de rama
//! git checkout nombre-rama

//? # crear una rama y cambiarte a ella
//! git checkout -b rama

//? # subir rama local al remoto
//! git push -u origin nombre-rama

//? # eliminar rama
//! git branch -d nombre-rama

//? # eliminar ramas remotas
//! git push origin --delete nombre-rama

//? #eliminar rama (forzado)
//! git branch -D nombre-rama

//? # listar todas las ramas del repositorio
//! git branch