# PruebaTecnica Jan Plata

## Aplicación Pokédex

### En este proyecto he utilizado siete componentes, un servicio y pipes para el componente de búsqueda.
![20b5e4197ccb0fea7dbb1fc4b6fa2917](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/630bc313-c261-49e1-a354-3fc3511b96c0)

## Componentes 

### 1. about
Este componente es bastante bàsico ya que solamente es una vista html con información sobre el autor.
![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/3bdc58b7-2851-4040-beba-4ac0b61be1b0)


### 2. home

Lógica:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/b79de28b-3ecf-4b88-b868-d993502e527f)

Vista:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/df44d130-763a-47b6-97fd-471f87125614)


### 3. login  

### 4. navbar 
Componente general de navegación que consta de 3 links a otras vistas y una barra de búsqueda.

Lógica:

Solamente contiene el metodo search para llamar al setter de searchterm y redirigir a la ruta /search

![7fdbf2ec0a1fbd1e3e326ccc98c4a318](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/b3e3813d-1a85-46ff-a9aa-6beb5d625a26)

Vista:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/f593aee3-377c-47b1-823f-869da923b1d1)



### 5. pokemon-detail
Componente que muestra los detalles del pokemon en questión recibidos a través del servicio/API

Lógica:

![2d3693b7adc57b887e30579503344606](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/0dd77556-8ded-4c06-a29c-093f686b4b33)

Vista:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/3116a5e6-23db-4286-b0f9-4eb951b7679b)


### 6. pokemons
Componente que muestra 8 pokemons aleatorios.

Lógica:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/913da581-48cd-4df8-8ac1-23627a1f4ead)

Vista:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/035f774e-b6f3-4887-a387-7374b176326d)

### 6. search
Componente que permite hacer busquedas de pokemons por su nombre.

Lógica:

Vista:

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/1df158bb-512a-40e7-95e3-4abe56043bc3)

## Angular Pipes

Pipe para filtrar los datos para el componente search.

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/97041e7f-dbc0-4ea1-a9ef-6a2724bafb56)

## Servicios

He usado el archivo pokemonservice para gestionar las entradas de datos de la API para los diferentes componentes.

![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/634d7ec2-1889-4990-9fde-8e7b500932db)
![image](https://github.com/GitJanPlata/jpg-fe-gc-PruebaTecnica/assets/96839905/54433402-59d2-4295-8f41-f8bde904ba62)

## Routing

He configurado las rutas del sitio de la siguiente manera:



