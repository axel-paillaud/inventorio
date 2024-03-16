# Inventorio

Manage your inventory with excel-like tables, directly in the browser.

Back-end routes use Laravel, and the SPA is entirely done with JavaScript and the Vue 3 framework. APIs are not needed, as we use [inertiajs](https://inertiajs.com/) to glue data between Laravel and Vue.js (the "Monolith way").

![presentation-screenshot](https://github.com/axel-paillaud/vancraft/assets/85078268/345a29f4-39b9-4ec0-be09-819add1446b5)

The site is available online [here]() (wip). You have access to a demo account, please be respectful when editing data.

See [here](#installation) for local installation

## Features

### Change the language

We can choose between the French and English languages. When changing language, the webpage is updated dynamically (without reloading), and the language is saved in the current session (e.g., `$_SESSION`).

Default language is french.

### Filter by date

Each row in the table has a date, and we can filter rows by year, month, and day. For example, if I choose "*year 2023*", all tables will only show rows with a date that is equal to 2023.

The URL is updated accordingly to the date filter.

### Toggle table

We can activate and disable a table. This will result in hiding or showing the corresponding table. The value `is_active` is then saved asynchronously in the SQL database.

### Create a new table and a new row

We can add as many tables and rows we want.

To create a new table, click on "Create table", in the bottom right corner. You can then choose a name, and a color.

To create a new row in a table, click on the "+ Plus" button, in the last row of a table, near the "Total" label. The DOM is then manipulated to add this new row dynamically.

### Edit cells

To edit a cell, simply click on it, and update the content. On each change (e.g., `change` event), cell's data is saved in the SQL database.

The strategy to display both the view cell and the edit cell, is to use two containers: the first one is a simple `<div>` and the second one is an `<input>`. When we click on the `<td>` element, `<div>` is hidden and `<input>` is shown, and vice versa.

### Delete a row, and a table

### Responsive

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
