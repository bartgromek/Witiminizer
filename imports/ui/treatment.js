import './treatment.html';
import {Template} from "meteor/templating";
import {Session} from "meteor/session";
import {Dosage} from "../api/dosage";

/*
Template.chosenSymptom.events({
    'click .listed-treatments' () {
        let symptom = Session.get('chosenSymptom');
        let medicine = this.name;
        let dosage = Dosage.find({})
    }
});
*/