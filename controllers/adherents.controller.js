import adherentService from '../services/adherents.service'

const getAdherents = async (req, res) => {
    const adherents = await adherentService.getAdherents()
    if (!adherents) {
        res.status(404).send({
            msg: 'Le fichier d’entrée est introuvable'
        })
    }
    const nombreAdherents = adherents.length
    if (nombreAdherents === 0) {
        res.send({ msg: "Aucun adhérent n’est présent " })
    } else {
        const sortedAdherents = adherents.sort((a, b) => {
            if (a.nom === b.nom) {
                return b.prenom - a.prenom
            }
            return a.nom > b.nom ? 1 : -1;
        })
        res.send({ liste: sortedAdherents, nombre: adherents.length })
    }
}

const getAdherentById = async (req, res) => {
    const { id } = req.params
    const adherents = await adherentService.getAdherents()
    const adherent = adherents.find(adherent => adherent.identifiant === id)
    if (adherent) {
        res.send(adherent)
    } else {
        res.send({ msg: "Aucun adhérent ne correspond à votre demande" })
    }

}

export default { getAdherents, getAdherentById }