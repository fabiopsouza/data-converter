function parseToJson(header, rows) {
    jsonArray = '['
    rows.forEach((rowColumns, index) => {
        jsonElement = parseJsonElement(header, rowColumns)
        jsonArray += appendSeparator(jsonElement, index, rows.length)
    });
    return jsonArray += ']'
}

function parseJsonElement(header, rowColumns) {
    jsonElement = '{'
    rowColumns.forEach((rowColumn, index) => jsonElement += formatField(header, rowColumn, index));
    return jsonElement += '}'
}

function formatField(header, fieldValue, index) {
    fieldName = header[index]
    field = `"${fieldName}":${fieldValue}`
    return appendSeparator(field, index, header.length)
}

function appendSeparator(field, index, elementsCount) {
    separator = index < elementsCount - 1 ? ',' : ''
    return `${field}${separator}`
}

module.exports = { parseToJson }