import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const users = [{
  services: {
        steam:{
          id_steam:"76561198103503560",
        },
        riot:{
          summonerName:"",
          summonerId:"",
          region:"",
          cod_runa:"",
        },
  },
  email: 'genbby.uni@gmail.com',
  password: 'genbby.uni17',
  profile: {
    name: { first: 'Genbby', last: 'UNI' },
  },
  roles: ['admin'],
}];

users.forEach(({ email, password, profile, roles,services}) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {

    const userId = Accounts.createUser({ email, password, profile,roles,services});
    Roles.addUsersToRoles(userId, roles);
  }
});
