import {
	GraphQLSchema,
	GraphQLNonNull,
	GraphQLList,
	GraphQLString,
	GraphQLInt,
	GraphQLObjectType,
} from 'graphql';

import Ponto from '../models/ponto';

const viewer = {};

export const pontoType = new GraphQLObjectType({
	name: 'Ponto',
	fields: () => ({
		_id: { type: new GraphQLNonNull(GraphQLString) },
		category: { type: new GraphQLNonNull(GraphQLInt) },
		lyrics: { type: new GraphQLNonNull(GraphQLString) },
		audio: { type: new GraphQLNonNull(GraphQLString) }
	})
});


export const viewerType = new GraphQLObjectType({
	name: 'Viewer',
	fields: () => ({
		pontos: {
			type: new GraphQLList(pontoType),
			resolve: async () =>  await Ponto.find({})
		}
	})
});

const schema = () => new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'Query',
		fields: () => ({
			viewer: {
				type: viewerType,
				resolve: () => viewer
			}
		})
	})
});

export default schema;
