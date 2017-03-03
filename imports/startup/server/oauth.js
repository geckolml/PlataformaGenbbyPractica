import { Accounts } from 'meteor/accounts-base';
import { Random } from 'meteor/random'

Accounts.onCreateUser(function (options, user) {

        if(options.profile)
          user.profile=options.profile;

        user.id_steam = options.id_steam; // Se creará el campo id_steam en users.
      	user.cod_runa = Random.id() ;
        return user;    		      // record is re-inserted

});
