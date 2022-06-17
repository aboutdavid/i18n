// If anyone's intrested, this is how the translations are loaded
// Basically, each block of text has a class and a translation. When a user wants to load a translation, they click on it and it fetches from the server.
// It replaces the text based on the ID as shown in the switchLanguage function
// Here's the code which is licensed under MIT compared to the rest of the repo.

/*
* Leave this included!
* Licensed (c) aboutdavid, 2022 under the MIT
* Website: aboutdavid.me
*/
fetch('https://i18n.aboutdavid.me/languages.json')
    .then(response => response.json())
    .then(res => {
        var i = 0
        var text = `<ul><li><a href="/">English</a></span></li>`
        var languages = res.languages
        while (i < languages.length) {
            console.log(languages)
            text += `<li onclick="switchLanguage(&quot;${languages[i].filename}&quot;)"><a href="#">${languages[i].native}</a></li>`
            i++
        }
        document.querySelector("#languages").innerHTML = text + "</ul>"
    })

function switchLanguage(file) {
    fetch('https://i18n.aboutdavid.me/translations/' + file)
        .then(response => response.json())
        .then(res => {
            var i = 0
            var keys = Object.keys(res)
            while (i < keys.length) {
                console.log(document.getElementById(keys[i]).innerText)
                document.getElementById(keys[i]).innerText = res[keys[i]]
                i++
            }
            console.log(Object.keys(res))
        })
}
