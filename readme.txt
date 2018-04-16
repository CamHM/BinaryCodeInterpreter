Archivos:
config.xml -->Construcción de las app nativas
              Configuración de app en el empaquetado
package.json --> Definición de parámetros del proyecto
ionic.config.json --> Archivo de configuración del proyecto
tsconfig.json -->Configuración que utiliza TypeScript para pasar código a
                 EcmaScript
tslint.json --> Archivo de configuración de TypeScript

carpetas:
www --> Esta carpeta contiene el código de la aplicación
después de compilar
resource --> Contiene los logos de la app
node_modules --> se alojan los modulos descargados de node
          que necesita la aplicación
          modúlos iniciales --> se especifican en el archivo package.json
hook --> comandos que se ejecutan de forma automática al compilar la aplicación
.sourcemaps --> guarda los mapeos del código css y js --> Podemos ver el código
          como lo hemos escrito
src --> la app se trabaja en esta carpeta
    --> contiene todo el código del proyecto ("código de la parte web")
    Archivos (App web)
    service-worker --> archivo predefinido para crear un service-worker--> Hilo de ejecución
    manifest.json-->configuración de inicio para el buscador embebido(??)
    index.html -->archivo de inicio de aplicación --> contiene los scripts y a los css
    Estructura (app ionic y aungular2)
    app -->
    app.scss --> sass -->Transpilador de código css
    main.ts -->
    app.components --> Contiene el código del componente principal de la app --> Angular2
    app.html --> //Se pueden agregar componentes personalizados.
    app.modules.ts --> modulos se la app angular
                    export -->//declaración de clase. export --> inidca en el empaquetado que es una clase exportable
    main --> 1) importa la clase que le indica a angular donde se ejecutará la aplicación
             2) modulo de aungular2
             3) Inicializa la app a partir del modulo que se pasa como parámetro
                método main
