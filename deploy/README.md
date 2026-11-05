# Despliegue en Dockge

El servidor ya tiene un stack `web` (nginx:alpine, puerto 8080) que sirve la carpeta `/opt/stacks/web/html`. Desplegar es copiar la raíz de este proyecto (index.html + assets) a esa carpeta. nginx lee los archivos en vivo, no hace falta reiniciar.

Dockge no permite subir archivos desde la interfaz, así que hay dos caminos:

## 1. Desde un repositorio Git (recomendado)

1. Publicar el proyecto en un repositorio (por ejemplo `giralte25/orbe-arquitectura`).
2. En Dockge, abrir **Consola** (terminal del host) y ejecutar:

```
cd /opt/stacks/web
rm -rf html
mkdir html
curl -L https://github.com/giralte25/orbe-arquitectura/archive/refs/heads/main.tar.gz | tar xz --strip-components=1 -C html
rm -rf html/deploy html/.impeccable html/PRODUCT.md html/DESIGN.md html/README.md
```

Para actualizar, repetir el mismo bloque.

## 2. Con un stack nuevo

`compose.yaml` y `nginx.conf` de esta carpeta sirven para crear un stack independiente (por ejemplo `orbe`), con gzip y caché de un mes para fuentes, imágenes, CSS y JS. Hay que colocar los archivos del sitio en `./html` dentro de la carpeta del stack.

## Dominio

`orbearquitectos.com` tiene que apuntar al puerto 8080 del servidor a través del proxy que ya use el servidor (fuera de Dockge). `ddclient` mantiene el DNS dinámico.
