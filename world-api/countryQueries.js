// queries/countryQueries.js

module.exports = {
    getContinents: () =>`
        SELECT Continent, COUNT(*) AS 国数
        FROM country
        GROUP BY Continent;
    `,
    getCountries: () =>`
        WITH CountryCityCount AS(
	        SELECT CountryCode AS Code, COUNT(*) AS 都市数
	        FROM city
	        GROUP BY CountryCode
        )
        SELECT c.Code,
        c.Name AS 国名,
        c.Population AS 人口,
        COALESCE(ccc.都市数, 0) AS 都市数
        FROM country c
        LEFT JOIN CountryCityCount ccc
        ON c.Code = ccc.Code
        WHERE c.Continent = ?
        ORDER BY  ccc.都市数 DESC;
    `,
    getDetail: () =>`
        SELECT
            ct.Name AS 都市名,
            ct.Population AS 都市人口 
        FROM city ct
        JOIN country c ON ct.CountryCode = c.Code
        WHERE c.continent = ?
        AND ct.CountryCode = ?
        ORDER BY  ct.Population DESC;
    `
}