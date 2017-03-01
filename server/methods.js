import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({

'update'(id,idsteam){

    check(idsteam,String);
    Meteor.users.update({_id:id},{$set:{ "services.steam.id": idsteam }});

},
'remove'(idsteam){

    check(idsteam,String);
    Meteor.users.remove({"profile.id":idsteam});

}

});
