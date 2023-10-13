# VEMASMAS__TEST-FRONTEND

¡Hola mundo!

Para esta ocasión, tengo el gusto de presentar un poco de mi experiencia como Frontend. Y bien, debo admitir que es sólo
una breve demostración, puesto que sólo tuve un par de horas
para realizarlo.

En la cabecera superior de la vista principal, coloqué un conjunto de checkbox para mostrar la versatilidad con la
que puede ser construído el layout de una vista.

También coloqué un pequeño formulario que simula ingresar un
producto a la base de datos de Pilgrim's Pride —sistema que desarrollé en algún momento y que se encuentra operando en dos plantas industriales—. Al cargar el producto, se lanza una
notificación en caso de éxito o en caso de fallo en la petición.

Si no se encuentra activo el servidor, se lanzará un error por
consola, pues, esto no fue válidado.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run client
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
