const connection = require( '../config/db' );

const findAll = callback => {
    const sql = 'SELECT * FROM ??';
    executeQuery( sql, [ 'projets' ], callback );
}

const create = ( id_projet, titre, description, lien_github, lien_site, url_image, alt, callback ) => {
    const sql = `INSERT INTO ?? 
    (id_projet, titre, description, lien_github, lien_site, url_image, alt)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const params = [ 'projets', id_projet, titre, description, lien_github, lien_site, url_image, alt, ];
    executeQuery( sql, params, callback );
}

const deleteProjet = ( id_projet, callback ) => {
    const sql = 'DELETE FROM ?? WHERE id_projet = ?';
    executeQuery( sql, [ 'projets', id_projet ], callback );
}

const update = ( id_projet, titre, description, lien_github, lien_site, url_image, alt, callback ) => {
    const sql = `UPDATE ?? 
    SET titre = ?, description = ?, lien_github = ?, url_image = ?, alt = ?
    WHERE id_projet = ?`;
    const params = [ 'projets', id_projet, titre, description, lien_github, lien_site, url_image, alt ];
    executeQuery( sql, params, callback );
}

const executeQuery = ( sql, params, callback ) => {
    connection.query( sql, params, ( error, result ) => {
        if ( error ) {
            console.log( error );
            return callback( error, null )
        };
        return callback( null, result );
    } );
}

module.exports = {
    findAll,
    create,
    deleteProjet,
    update
}