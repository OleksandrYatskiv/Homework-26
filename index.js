let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];

Array.prototype.heroesRender = function (folder) {
    let htmlString = `
        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Icon</th>
                    </tr>
                </thead>
                <tbody>`;
    
    this.forEach(function (hero) {
        htmlString +=
            `<tr>
                <td>${hero.name}</td>
                <td>
                    <img src="images/${folder}/${hero.name.toLowerCase().replaceAll(' ', '')}.svg">
                </td>
            </tr>`;
    });

    htmlString+= `</tbody>
	    </table>`;
    document.write(htmlString);
}

marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');