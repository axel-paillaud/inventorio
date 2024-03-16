# Inventorio

Manage your inventory with excel-like tables, directly in the browser.

Back-end routes use Laravel, and the SPA is entirely done with JavaScript and the Vue 3 framework. APIs are not needed, as we use [inertiajs](https://inertiajs.com/) to glue data between Laravel and Vue.js (the "Monolith way").

![presentation-screenshot](https://github.com/axel-paillaud/vancraft/assets/85078268/345a29f4-39b9-4ec0-be09-819add1446b5)

The site is available online [here]() (wip). You have access to a demo account, and the database is reset every hour. Please be respectful when editing data.

See [here](#local-setup) for local setup.

## Table of features contents

* [Change the language](#change-the-language)
* [Filter rows by date](#filter-rows-by-date)
* [Toggle table](#toggle-table)
* [Create a new table and a new row](#create-a-new-table-and-a-new-row)
* [Edit cells](#edit-cells)
* [Delete a row and a table](#delete-a-row-and-a-table)
* [Responsive](#responsive)

## Features

### Change the language

We can choose between the French and English languages. When changing language, the webpage is updated dynamically (without reloading), and the language is saved in the current session (e.g., `$_SESSION`).

Default language is french.

### Filter rows by date

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

### Delete a row and a table

We can delete a row, or an entire table. When we delete a table, all the corresponding rows are deleted as well.

When a row is hovered over, you can notice a red border appear on the row's left side. Hover over the left side, and you can see the Trash icon. Click on it, and it will delete the corresponding row.

To delete a table, hover the table's header. The Trash icon is here, on the left side.

### Responsive

If we have enough width on the screen, two tables are displayed. If not, only one table is displayed, taking up all the screen's width.

This web app is not optimized to be used on a mobile phone in portrait mode. It is very complicated (impossible ?) to show an entire table with rows on a device with a 380 px width.

That said, you can still use a mobile phone to edit cells, and view tables, but you will have a horizontal scroll on the table. On a mobile phone, the header uses the hamburger menu, and the footer uses a list icon to display filters.

## Local setup

Unix-like system required, or WSL on Windows (see [WSL Install](https://learn.microsoft.com/en-us/windows/wsl/install)).

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
