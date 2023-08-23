# Create Jungle

1. Instalar dependencias

```bash
yarn install
```

2. Correr la aplicación

```bash
yarn start
```

3. Buscar en el navegador

```bash
http://localhost:3000/
```

## Notas

1. El infinite scroll se implementó para mostrar una funcionalidad extra, pero es necesario aclarar que para este caso en específico no es recomendable debido a que los datos que se le pasan mutan al eliminar un post o filtrar. Esto causa que al terminar de hacer scroll y eliminar un producto, se pierda el estado del scroll y haya que hacerlo de nuevo.

2. ThemeContext lo implemente con la idea de estilar los componentes mediante estilos definidos en JavaScript, y disponer de una futura opción para cambio de temas. Este objetivo no se pudo lograr por completo ya que esto limita la asignación de estilos a elementos hijos de una clase (por ejemplo, .input span) y los media query necesarios para el diseño responsive.
