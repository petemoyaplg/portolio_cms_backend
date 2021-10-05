const { body } = require( 'express-validator' );

const schemaId = body( 'id_projet' ).exists( { checkFalsy: true } ).withMessage( "L'id ne peut pas être vide" );
const schemaUrlImage = body( 'url_image' ).exists( { checkFalsy: true } ).isURL().withMessage( "L'url de l'image du projet est recquis" );

const schemaCreatProjet = [
    body( 'titre' ).isLength( { min: 6 } ).withMessage( "Le titre doit contenir 6 caratère au minimum" ),
    body( 'description' ).isLength( { min: 10 } ).withMessage( "La déscription doit contenir 10 caratère au minimum" ),
    body( 'lien_github' ).exists( { checkFalsy: true } ).isURL().withMessage( "Le lien git hub est recquis" ),
    body( 'lien_site' ).exists( { checkFalsy: true } ).isURL().withMessage( "Le lien du site est recquis" ),
    body( 'alt' ).exists( { checkFalsy: true } ).withMessage( "Le texte alternatif est recquis" )
];

const schemaUpdateProjet = schemaCreatProjet.concat( [ schemaId, schemaUrlImage ] );

module.exports = {
    schemaId,
    schemaCreatProjet,
    schemaUpdateProjet
};