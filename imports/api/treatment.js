import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search'

export const Treatment = new Mongo.Collection('treatment');

if (Meteor.isServer) {
    Meteor.publish('treatment', function tasksPublication() {
        return Treatment.find();
    });
}

export const TreatmentIndex = new Index({
    collection: Treatment,
    fields: ['symptom'],
    engine: new MinimongoEngine(),
});