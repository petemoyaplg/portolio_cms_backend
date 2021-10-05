const { cloudinary } = require( '../utils/cloudinary' );
const projet = require( '../models/projet' );

const showProjets = async ( req, res ) => {
    await projet.findAll( ( error, result ) => {
        if ( error ) return res.status( 400 ).send( error )
        return res.send( result );
    } );
}

const createProjet = async ( req, res ) => {
    const { data, titre, description, lien_github, lien_site, alt } = req.body;
    await cloudinary.uploader.upload( data, ( error, result ) => {
        if ( error ) return res.status( 404 ).send( { message: "Erreur d'upload de l'image" } );
        const { public_id, secure_url } = result;
        projet.create( public_id, titre, description, lien_github, lien_site, secure_url, alt, ( error, result ) => {
            if ( error ) return res.send( error );
            return res.send( result );
        } );
    } );
}

const updateProjet = async ( req, res ) => {
    const public_id = req.params.id;
    const { data, titre, description, lien_github, lien_site, url_image, alt } = req.body;

    await projet.update(
        public_id,
        titre,
        description,
        lien_github,
        lien_site,
        url_image,
        alt, ( error, result ) => {
            cloudinary.uploader.destroy( public_id );
            cloudinary.uploader.upload( data );
            if ( error ) return res.send( error );
            return res.send( result );
        } );
}

const destroyProjet = async ( req, res ) => {
    const public_id = req.params.id;
    await projet.deleteProjet( public_id, ( error, result ) => {
        if ( error ) return res.send( error );
        cloudinary.uploader.destroy( public_id );
        return res.send( result );
    } );
}

module.exports = {
    showProjets,
    createProjet,
    updateProjet,
    destroyProjet
};