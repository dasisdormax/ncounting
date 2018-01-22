# nCounting storage documentation


## Entities

An entity is the top-most storage unit in nCounting, containing info about accounts, booking periods, predictions, and transactions.

The table `ncounting_entities` stores entities with the following fields: id, name, settings (JSON: preferred currency, more detailed description, ...).


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


## Accounts

An account is a virtual container representing either real value or debts (for 'balance' accounts) or income or expenses (for 'flow' accounts). For any transaction, money is neither created nor destroyed, but transfered from one account to another.

Accounts are stored in the table `ncounting_accounts`. An account has the following fields: id, entity\_id, name, parent\_id (optional), code (text, optional), deleted, hidden, readonly, sign (+1 for assets or expenses, -1 for liabilities, income or equity), settings (JSON: ???).


## Transactions

A transaction is a movement of value between accounts. It can contain 2 or more transaction parts that put or pull value from accounts, whose sum must equal to zero.

A transaction has the following fields: id, booking\_period, name, date, created\_by, last\_edit\_by, readonly, deleted, settings (JSON: ???).

A transaction part has the following fields: id, transaction\_id, date, account\_id, amount, currency, details.

This information is stored in the `ncounting_transactions` and `ncounting_transactionparts` tables. Note that to prevent floating math rounding errors, the amount is stored as BIGINT (from -2^63 to 2^63-1), which is to be interpreted with a scaling factor that depends on the currency used.


## Projects / Booking periods

A project groups accounts and transactions related to another. While each project has its own tree of flow accounts, portals regulate the flow of value in and out of the project. A booking period is just a special case of a project and has a formal start and end date, but each transaction must be assigned to a booking period. Finished projects and booking periods can be closed, preventing further changes of related transactions.

A project has the following fields: id, entity\_id, name, start, end, balance\_root (a reference to the balance account tree, optional), flow\_root (a reference to the flow account tree), closed, settings (JSON: ???)


## Portals

A portals connects a project to the 'outer world', e.g. your booking period's flow and balance accounts. Portals can be configured to route incomes and expenses through different accounts or change the routes depending on the transaction date (e.g. for projects that span multiple booking periods). Note that for booking periods, the target will be your "equity" account(s).

A portal has the following fields: id, project\_id, ingoing\_account, outgoing\_account, end
