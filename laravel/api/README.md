
## Installation & setup

### Install dependencies
```bash
composer install
```


### Set Laravel Sail Alias
```bash
alias sail='bash vendor/bin/sail'
```


### Start Laravel Sail
```bash
sail up
```


### Migrate Database
```bash
sail artisan migrate
```


### Run Database Seeder
```bash
sail artisan db:seed --class=UserSeeder
```
