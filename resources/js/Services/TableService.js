export class SortTable {
    constructor(tables = [], rows = []) {
        this.tables = tables;
        this.rows = rows;
    }

    associateRowToTable() {
        let tablesWithRows = [];

/*         this.tables.forEach((table) => {
            tableWithRow.push(table);
            tableWithRow.rows = [];
            this.rows.forEach((row) => {
                if (table.id === row.table_id) {
                    tableWithRow.rows.push(row);
                }
            });
        }); */

        this.tables.forEach((table) => {
            tablesWithRows.push(table);
        });

        tablesWithRows.forEach((table) => {
            table.row = [];
            this.rows.forEach((row) => {
                if (table.id === row.table_id) {
                    table.row.push(row);
                }
            });
        });

        return tablesWithRows;
    }
}

