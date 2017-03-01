import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const users = [{
  email: 'genbby.uni@gmail.com',
  password: 'genbby.uni17',
  profile: {
    name: { first: 'Genbby', last: 'UNI' },
  },
  roles: ['admin'],
  id_steam:"76561198103503560",
}];

users.forEach(({ email, password, profile,id_steam, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {

    const userId = Accounts.createUser({ email, password, profile,id_steam   });
    Roles.addUsersToRoles(userId, roles);

  }
});
