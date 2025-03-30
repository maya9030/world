// queries/countryQueries.js

module.exports = {
    getContinents: () =>`
        WITH CountCountry AS(
	        SELECT Continent_id AS 大陸id, COUNT(*) AS 国数
	        FROM country
	        GROUP BY Continent_id
        )
        SELECT cc.大陸id, c.Name AS 大陸, cc.国数
        FROM continent c
        JOIN CountCountry cc
        ON  c.id = cc.大陸id
        ORDER BY cc.国数 DESC;
    `,
    getCountries: (id) =>`
        WITH CountryCityCount AS(
	        SELECT CountryCode AS Code, COUNT(*) AS 都市数
	        FROM city
	        GROUP BY CountryCode
        )
        SELECT c.Code,
        c.Name AS 国名,
        c.Population AS 人口,
        ccc.都市数,
        c.continent_id AS id
        FROM country c
        JOIN CountryCityCount ccc
        ON c.Code = ccc.Code
        WHERE c.continent_id = ${id}
        ORDER BY  ccc.都市数 DESC;
    `,
    getDetail: () =>`
        SELECT
            ct.Name AS 都市名,
            ct.Population AS 都市人口 
        FROM city ct
        JOIN country c ON ct.CountryCode = c.Code
        WHERE c.continent_id = ?
        AND ct.CountryCode = ?
        ORDER BY  ct.Population DESC;
    `
}