import {Session} from "meteor/session";
import {Template} from "meteor/templating";
import './chosenSymptom.html'
import './treatment.js';
import {TreatmentIndex} from "../api/treatment";
import {PossibleCausesIndex} from "../api/possibleCause";
import {PossibleCauses} from "../api/possibleCause";

Template.chosenSymptom.helpers({
    curingMedicine() {
        let symptom = Session.get('chosenSymptom');
        let cursor = TreatmentIndex.search(symptom);
        return cursor.fetch();
    },
    possibleCauses() {
        let symptom = Session.get('chosenSymptom');
        return PossibleCauses.find({symptom: symptom});
    },
    symptom() {
        return Session.get('chosenSymptom');
    },
});

Template.chosenSymptom.events({
   'click #show-causes' () {
        let show = Session.get('showCauses');
        if (show) {
            document.querySelector('.possible-causes').style.display = 'none';
            Session.set('showCauses', false);
        } else {
            document.querySelector('.possible-causes').style.display = 'block';
            Session.set('showCauses', true);
        }
   }
});