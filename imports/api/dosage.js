import {Mongo} from "meteor/mongo";

export const Dosage = new Mongo.Collection('dosage');

if (Meteor.isServer) {
    Meteor.publish('dosage', function tasksPublication() {
        return Dosage.find();
    });
}