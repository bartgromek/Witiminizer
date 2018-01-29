import { Mongo } from 'meteor/mongo';
import { Index, MinimongoEngine } from 'meteor/easy:search'

export const NaturalMedicines = new Mongo.Collection('naturalMedicines');

if (Meteor.isServer) {
    Meteor.publish('naturalMedicines', function tasksPublication() {
        return NaturalMedicines.find();
    });
}