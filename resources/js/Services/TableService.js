export class SortTable {
    constructor(tables = [], rows = []) {
        this.tables = tables;
        this.rows = rows;
    }

    associateRowToTable() {
        let tablesWithRows = [];

        this.tables.forEach((table) => {
            // Make a copy of the table props
            // We loose proxy here. If it's a problem later, remove {...table} to table
            tablesWithRows.push({...table});
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

