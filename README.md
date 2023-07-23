This Repository is consist of two parts backend (Laravel) and fronted (ReactJs)
# For Beckend Setup

```
composer install 
php artisan keye:generate
php artisan migrate
php artisan db:seed 
php artisan serve
```
seeders will create fake data for all tables including 100k records for transactions table. 

# For Frontend Setup

```
npm i
npm run dev
```

then go to http://localhost:3000/ and use these credentials

Email: admin@gmail.com
Password: 12345678

Note: Make sure seeders run successfully then you will be able to check the system properly.
