import {Session} from "meteor/session";
import { Template } from 'meteor/templating';
import './body.html';
import './search.js';
import './chosenSymptom.js';
import './possibleCause';

Meteor.subscribe('cause');
Meteor.subscribe('dosage');
Meteor.subscribe('naturalMedicines');
Meteor.subscribe('possibleCause');
Meteor.subscribe('symptom');
Meteor.subscribe('treatment');

Template.body.helpers({
    ifSearch() {
        let chosenSymptom = Session.get('chosenSymptom');
        return chosenSymptom === null;
    },

});

Template.body.events({
    'click .back-to-main'() {
        Session.set('showCauses', false);
        Session.set('chosenSymptom', null);
    },

});

