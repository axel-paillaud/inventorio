# Inventorio

Manage your inventory with excel-like tables, directly in the browser.

Back-end routes use Laravel, and the SPA is entirely done with JavaScript and the Vue 3 framework.

![presentation-screenshot](https://github.com/axel-paillaud/vancraft/assets/85078268/cae0c9c4-6635-4131-ade3-adf57c230859)

The site is available online [here]() (wip). You have access to a demo account, please be respectful when editing data.

See [here](#installation) for local installation

## Features

### Change the language

You can choose between French and English languages. When changing language, the webpage is updated dynamically (without reloading), and the language is saved in the current session (e.g., `$_SESSION`).

Default language is french.

### Filter by date

### Toggle table

### Create a new table and a new row

## <a name="installation"></a>Local installation (on unix-like system or with WSL)

### Requirements

`php` 8.2 or higher, with the appropriate modules (curl, pdo_mysql ...)

`composer` and `npm`

`mariadb` server (or `mysql`)

### Installation

`git clone git@github.com:axel-paillaud/vancraft.git`

`cd vancraft`

`composer install && npm install`

The project use MariaDB server.

`cp .env.example .env` Then, in the `.env` file, configure your MariaDB login credentials.

Run `php artisan migrate:fresh --seed` for fake datas.

`php artisan serve` 

`npm run dev`

Default adress: `localhost:8000`
