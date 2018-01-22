# nCounting storage documentation

## Entities

An entity is the top-most unit in nCounting, containing info about accounts, booking periods, predictions, and transactions.

The table `ncounting_entities` stores the entity's ID, name and a settings object.


## Entity Permissions / ACLs

The table `ncounting_acls` stores permissions that users or groups have on an entity.

Its field **target\_id** describes the user or group affected by the permission. A prefix of "u:" or "g:" indicates whether this permission affects a user or group. A \* can be used to grant permissions to all users.

The **permissions** field stores the granted permissions as characters, which can be combined freely. The following permissions are defined:

- **v**iew: see transactions of the current booking period
- **p**ast: see transactions of past booking periods
- **c**reate: create new transactions
- **r**eview: review accounts and transactions, mark them checked, comment on them
- **m**odify: modify and take over transactions created by others (own transactions can always be modified)
- **l**ock: lock/unlock transactions to prevent changes
- **a**ccounts: manage accounts for this entity, add predictions
- **o**wner: edit settings and acls for this entity (nextcloud admins will always have this permission)
