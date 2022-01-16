import { readFile } from 'fs/promises'
import csvToJson from '../helpers/csvToJson'

const getAdherents = async () => {
    let adherentsCsvString = ''
    try {
        adherentsCsvString = (await readFile('./data/db.csv')).toString()
    } catch (error) {
        return null
    }
    const adherents = await csvToJson(adherentsCsvString)
    return adherents
}

export default { getAdherents }