## Install
	- git clone https://github.com/udamuri/Laravel9JetstreamInertiaVite.git
	- cd Laravel9JetstreamInertiaVite
    - composer install
	- cp .env.example .env
    - php artisan key:generate
    - Kuncinya akan ditulis secara otomatis di file .env Anda.
## Database
    - buat database laravel9_crud
    - php artisan migrate
    - php artisan storage:link
## Running Seeders
    - php artisan migrate:refresh --seed
## Database Config
    - config/database.php
```
    edit .env
    
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel9_crud
    DB_USERNAME=root
    DB_PASSWORD=
```


```
## Admin panel Laravel
```
    username : admin@gmail.com
    password : 12345678

	username : operator@gmail.com
    password : 12345678

```

## Tools
```
    Php framework 	: Laravel 9.x, Jetstream, Inertia (Vue)
    Php 			: >= 8.0 
    editor 			: Visual Studio Code
    os 				: Manjaro
    webserver		: Nginx
	
```

# Node
####node Version
#node -> stable (-> v16.14.0)

```php
#npm install && npm run dev  

```