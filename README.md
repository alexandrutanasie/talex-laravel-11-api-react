# Instalation steps for backend (api)
## Mysql
```
#windows: download mysql service from https://dev.mysql.com/downloads/mysql/8.0.html
#execute these commands to mysql
mysql -u root -p
CREATE DATABASE laravel_api;
CREATE USER 'laravel_user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON laravel_api.* TO 'laravel_user'@'localhost';
```
## Laravel database config (.env)
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel_api
DB_USERNAME=laravel_user
DB_PASSWORD=password
```
## Laravel API
```
#windows: download php8.4 from: https://www.php.net/downloads.php and add to environmments variables to the system
cd backend/
composer install
php artisan migrate
php artisan serve
```
## Routes
```
POST http://127.0.0.1:8000/api/login
{
    "email": "john.doe@example.com",
    "password": "password123"
}
POST http://127.0.0.1:8000/api/register
{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
}
GET http://127.0.0.1:8000/api/user
```
# Instalation steps for frontend
```
cd frontend/
npm install
npm start
```
