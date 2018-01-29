import {Mongo} from "meteor/mongo";
import { Index, MinimongoEngine } from 'meteor/easy:search'

export const PossibleCauses = new Mongo.Collection('possibleCause');

if (Meteor.isServer) {
    Meteor.publish('possibleCause', function tasksPublication() {
        return PossibleCauses.find();
    });
}

export const PossibleCausesIndex = new Index({
    collection: PossibleCauses,
    fields: ['symptom'],
    engine: new MinimongoEngine(),
});