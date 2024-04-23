const calendarJS = {
    'ES1': '1997-06',
    'ES2': '1998-06',
    'ES3': '1999-12',
    'ES4': null,
    'ES5': '2009-12',
    'ES6': '2015-06',
    'ES7': '2016-06',
    'ES8': '2017-06',
    'ES9': '2018-06',
}

const iterateEsVersion = getEsVersion(calendarJS)

function getEsVersion(calendarObject) {
    for (const esVersion in calendarObject){
        if (calendarObject[esVersion] === null) {
            console.log(esVersion + ' nie zostało wydane')
        } else {
            console.log(esVersion + ' wydano w terminie ' + calendarObject[esVersion])
        }
    }

}