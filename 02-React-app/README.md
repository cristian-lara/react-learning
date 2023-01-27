

# Con create app

Se va a crear con gestor de paquetes NPM
Crear con 
```bash
npx create-react-app react-old
```

### Estructura

/public/index.html

Encontramos una seccion en el body la cual nos muestra dos partes
- Validacion de error si no se tiene Javascript habilitado
- El tag en donde se va montar toda la aplicación en este caso es **id=root**

/public/manifest.json

Es un punto inicial para convertir nuestra app en una PWA
Tambien ayuda o se le saca provecho cuando se esta trabajando para  una aplicacion movil


/src/app.js

Archivo principal componente funcional base

/src/index.js

Archivo principar de entrada tiene todos los imports necesarios (estils etc...)
trabaja en stric mode para controlar errores no se recomienda trabajar con la manera no estricta.

# Con Vite

Se va crear con gestor de paquetes YARN
Crear con

```bash
yarn create vite
```
La aplicacion de este repo se creo con el nombre react-con-ts

### Estructura

Para mas configuraciones podemos visitar
https://vitejs.dev/config/

main.tsx

No crear una variable lo ejecuta direcatamente ,

# Diferencias entre VIT y Create React

Es mas limpio no existen archivos como el manifest ya que este puede o no ser necesario es por eso que se concluye que el trabajo en VIT es mas manual
No crea una variable para inicializar reduciendo asi un espacio de memoria a pesar de que la diferencia se insignificante
