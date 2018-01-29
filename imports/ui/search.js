import { Session } from 'meteor/session'
import {Template} from "meteor/templating";
import {SymptomIndex} from "../api/symptom";
import './search.html'


Template.search.helpers({
    symptomIndex() {
        return SymptomIndex;
    },
    searchAttributes() {
        return {
            placeholder: 'Type your symptom',
        };
    },
    searchCount() {
        let dict = SymptomIndex.getComponentDict();
        let counter = dict.get('count');
        let doc = document.querySelector('#foundSymptoms');
        if (counter !== 0 && doc !== null) doc.style.display = 'block';
        return 'Found ' + counter + ' symptoms';
    },
    hideBar() {
        let dict = SymptomIndex.getComponentDict();
        let counter = dict.get('count');
        if (counter === 0) document.querySelector('#foundSymptoms').style.display = 'none';
        },
});

Template.search.events({
    'click .symptom-name' () {
        let symptom = this.name;
        Session.set('chosenSymptom', symptom);
    },
    'click .back-to-main'() {
        Session.set('chosenSymptom', null);
    },
});
