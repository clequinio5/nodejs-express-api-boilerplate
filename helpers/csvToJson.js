import csv from 'csvtojson'

const csvToJson = async (csvAsString) => {
    const json = await csv({
        noheader: false,
        output: "json",
        delimiter: ";"
    }).fromString(csvAsString)
    return json
}

export default csvToJson