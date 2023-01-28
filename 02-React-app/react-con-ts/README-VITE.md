# Levantar

```bash
yarn dev
```

fragment

Me permite regresar un fragmento de codigo se utiliza la siguiente sintaxis

Forma 1
```html
<Fragment>
<h1>Hola Ejemplo</h1>
<p>Linea 2</p>
</Fragment>
```
Forma 2
```html
<>
<h1>Hola Ejemplo</h1>
<p>Linea 2</p>
</>
```

Props

Utilizando las herramientas de desarrollo podemos inicializar estas propiedades del objeto


HOOKS

UseState

importar de la libreria react

```react
import  { useState } from 'react';
 const [valor, metodoQueCambia] = useState(valorEstadoInicial)
```
usando la destructuracion se tiene en la constante dos variables valor y funcion 
no se puede cambiar directamente el valor para eso se utiliza la segunda variable que es "metodo que cambia"
