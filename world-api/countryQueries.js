// queries/countryQueries.js

module.exports = {
    getCountries: (limit = 1000) =>`
        SELECT Name AS 国名, Population AS 人口
        FROM country
        LIMIT ${limit};
    `,
    getDetail: (code) =>`
        SELECT Name AS 都市名, Population AS 都市人口
        FROM city
        WHERE city.CountryCode = ${code}
        LIMIT 100
    `
}