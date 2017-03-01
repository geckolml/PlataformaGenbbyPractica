import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
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
