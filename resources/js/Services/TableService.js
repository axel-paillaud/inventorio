export class SortTable {
    constructor(tables = [], rows = []) {
        this.tables = tables;
        this.rows = rows;
    }

    createTablePairs(tablePairs = [], index = 0) {
        tablePairs[index] = [];
        this.tables.forEach((table) => {
            if (tablePairs[index].length < 2) {
                tablePairs[index].push(table);
            }
            else {
                index++;
                tablePairs[index] = [];
                tablePairs[index].push(table);
            }
        });
        return tablePairs;
    }

    associateRowToTable() {
        this.tables.forEach((table) => {
            table.rows = [];
            this.rows.forEach((row) => {
                if (table.id === row.table_id) {
                    table.rows.push(row);
                }
            });
        });
    }
}

