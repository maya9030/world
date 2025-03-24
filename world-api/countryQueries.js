// queries/countryQueries.js

module.exports = {
    getCountries:(limit = 100) =>`
    SELECT Name AS 国名, Population AS 人口
    FROM country
    LIMIT ${limit};
    `
}