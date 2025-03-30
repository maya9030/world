// queries/countryQueries.js

module.exports = {
    getCountries: (limit = 1000) =>`
        WITH CountryCityCount AS(
	        SELECT CountryCode AS Code, COUNT(*) AS 都市数
	        FROM city
	        GROUP BY CountryCode
        )
        SELECT c.Code, c.Name AS 国名, c.Population AS 人口, ccc.都市数
        FROM country c
        JOIN CountryCityCount ccc
        ON c.Code = ccc.Code
        ORDER BY  ccc.都市数 DESC
        LIMIT ${limit};
    `,
    getDetail: (code) =>`
        SELECT Name AS 都市名, Population AS 都市人口 
        FROM city
        WHERE city.CountryCode = '${code}'
        ORDER BY  都市人口 DESC;
    `
}