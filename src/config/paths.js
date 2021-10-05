const base_uri = "/api/back-office";
const projets = '/projets';
const upload = projets + '/upload';
const deleteProjet = projets + '/delete/:id';
const update = projets + '/update/:id';

const paths = {
    base_uri,
    projets,
    upload,
    delete: deleteProjet,
    update
};

module.exports = paths;