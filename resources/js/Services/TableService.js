export class SortTable {
    constructor(tables = [], rows = []) {
        this.tables = tables;
        this.rows = rows;
    }

    associateRowToTable() {
        let tablesWithRows = [];

        this.tables.forEach((table) => {
            tablesWithRows.push(table);
        });

        tablesWithRows.forEach((table) => {
            table.rows = [];
            this.rows.forEach((row) => {
                if (table.id === row.table_id) {
                    table.rows.push(row);
                }
            });
        });

        return tablesWithRows;
    }
}

