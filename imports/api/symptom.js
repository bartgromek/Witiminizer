import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search'

export const Symptom = new Mongo.Collection('symptom');

if (Meteor.isServer) {
    Meteor.publish('symptom', function tasksPublication() {
        return Symptom.find();
    });
}

export const SymptomIndex = new Index({
    collection: Symptom,
    fields: ['name'],
    engine: new MinimongoEngine(),
});