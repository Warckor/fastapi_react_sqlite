# Finance App

![Static Badge](https://img.shields.io/badge/Status-En_desarrollo-green) 

![Static Badge](https://img.shields.io/badge/version-18.2.0-blue?logo=react)
![Static Badge](https://img.shields.io/badge/version-3.11.0-blue?logo=python)

Primer proyecto fullstack muy simple utilizando como *backend* el framework de python **FastAPI** y como *frontend* la librería **React**.

Para almacenar la información que se genera y se muestra se utiliza como base de datos **SQLite3**.

 Para las consultas que se realizan a la base de datos, se utiliza el ORM 🧲 **SQLAlchemy**. 

## 🔨 Funcionalidades
* Administración de finanzas muy simple.
* Creación de nuevos registros sobre gastos realizados.
* Muestra listado de todo lo incluido a través del formulario.

## 🚀Levantar el proyecto
Para arrancar el proyecto es necesario instalar primero las dependencias, tanto del backend como del frontend. Hecho esto, podremos arrancar el proyecto levantado los servicios del backend para FastAPI y del frontend para React.

### ⚡Instalando las dependecias
Para el backend existen dos opciones:
* La primera es instalando la librería `pipenv` y utilizar este gestor para instalar las librerías del proyecto establecidas en el fichero `Pipfile`:
```shell
# Instalar el gestor de paquetes
pip3 install pipenv

# Acceder a la ruta donde se encuentra el backend
cd ~/backend

# Inicializar el entorno virtual del proyecto
pipenv shell

#Instalar las dependencias
pipenv install
```

* La segunda opción es generando en el proyecto un entoro virtual con `venv` e instalar las librerías definidas en el fichero `requirements.txt`:
```shell
# Generar entorno virtual
python3 -m venv venv

# Activar el entorno virtual
source ~/.venv/Scripts/activate

# Instalar las dependencias
pip3 install -r ~/backend/requirements.txt
```

### 🚗Arrancando los servidores en local
Si se ha instalado la librería `pipenv` para generar el entorno virtual, tenemos en el fichero `Pipfile` un script para levantar el backend en desarrollo tal y como lo haríamos en un proyecto con Nodejs.
```shell
# uvicorn main:app --reload
pipenv run dev

# Con venv hay que meter el comando
uvicorn main:app --reload
```

Para el frontend igual, utilizamos el script que se encuentra configurado dentro del `package.json` para levantar el servicio.
```shell
npm run dev
```
