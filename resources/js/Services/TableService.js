export function associateRowToTable(tables, rows) {
    tables.forEach((table) => {
        table.rows = [];
        rows.forEach((row) => {
            if (table.id === row.table_id) {
                table.rows.push(row);
            }
        });
    });
}

export function createTablePairs(tables) {
    let tablePairs = [];
    let index = 0;
    tablePairs[index] = [];
    tables.forEach((table) => {
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
};
