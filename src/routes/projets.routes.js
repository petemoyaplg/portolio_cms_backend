const express = require( 'express' );
const { showProjets, createProjet, updateProjet, destroyProjet } = require( '../controller/projets.controller' );
const paths = require( '../config/paths' );
const { schemaId, schemaCreatProjet, schemaUpdateProjet } = require( '../schema/projetSchemat' );
const validateSchemaProjet = require( '../middlewares/projetsValidator' );
const projetRouter = express.Router();

projetRouter.get( paths.projets, showProjets );
projetRouter.post( paths.upload, schemaCreatProjet, validateSchemaProjet, createProjet );
projetRouter.put( paths.update, schemaUpdateProjet, validateSchemaProjet, updateProjet );
projetRouter.delete( paths.delete, schemaId, validateSchemaProjet, destroyProjet );

module.exports = projetRouter;