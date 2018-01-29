import '../imports/ui/body.js';
import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'

Tracker.autorun(() => {
    console.log("Witam");
    Session.set('showCauses', false);
    Session.set('chosenSymptom', null);
});


