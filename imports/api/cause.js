import {Mongo} from "meteor/mongo";

export const Causes = new Mongo.Collection('cause');

if (Meteor.isServer) {
    Meteor.publish('cause', function tasksPublication() {
        return Causes.find();
    });
}