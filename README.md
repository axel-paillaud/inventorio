# Inventorio

Manage your inventory with excel-like tables, directly in the browser.

Back-end routes use Laravel, and the SPA is entirely done with JavaScript and the Vue 3 framework.

![presentation-screenshot](https://github.com/axel-paillaud/vancraft/assets/85078268/cae0c9c4-6635-4131-ade3-adf57c230859)

## Installation (on unix-like system or with WSL)

`git clone git@github.com:axel-paillaud/vancraft.git`

`cd vancraft`

`composer install && npm install`

The project use MySQL server.

`cp .env.example .env` and, in the `.env` file, configure your MySQL login credentials.

Run `php artisan migrate:fresh --seed` for fake datas.

`php artisan serve` && `npm run dev`
