import { Accounts } from 'meteor/accounts-base';


Accounts.onCreateUser(function (options, user) {

        if(options.profile)
          user.profile=options.profile;

        user.id_steam = user.id_steam; // Se creará el campo id_steam en users.

        return user;    		      // record is re-inserted

});
