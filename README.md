# Inventorio

Manage your inventory with excel-like tables, directly in the browser.

Back-end routes use Laravel, and the SPA is entirely done with JavaScript and the Vue 3 framework.

![presentation-screenshot](https://github.com/axel-paillaud/vancraft/assets/85078268/cae0c9c4-6635-4131-ade3-adf57c230859)

## Local installation (on unix-like system or with WSL)

### Requirements

`php` 8.2 or higher, with the appropriate modules (curl, pdo_mysql ...)

`composer` and `npm`

`mariadb` server (or `mysql`)

### Installation

`git clone git@github.com:axel-paillaud/vancraft.git`

`cd vancraft`

`composer install && npm install`

The project use MariaDB server.

`cp .env.example .env` and, in the `.env` file, configure your MariaDB login credentials.

Run `php artisan migrate:fresh --seed` for fake datas.

`php artisan serve` && `npm run dev`
