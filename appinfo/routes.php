<?php
/**
 * Create your routes in here. The name is the lowercase name of the controller
 * without the controller part, the stuff after the hash is the method.
 * e.g. page#index -> OCA\NCounting\Controller\PageController->index()
 *
 * The controller class has to be registered in the application.php file since
 * it's instantiated in there
 */
return [
    'routes' => [
        ['name' => 'page#index',    'url' => '/',                   'verb' => 'GET' ],
	['name' => 'entity#index',  'url' => '/api/v1/entity',      'verb' => 'GET' ],
	['name' => 'entity#show',   'url' => '/api/v1/entity/{id}', 'verb' => 'GET' ],
	['name' => 'entity#create', 'url' => '/api/v1/entity',      'verb' => 'POST'],
	['name' => 'entity#update', 'url' => '/api/v1/entity/{id}', 'verb' => 'PUT' ],
	['name' => 'account#index',  'url' => '/api/v1/account/{entity}',      'verb' => 'GET'    ],
	['name' => 'account#show',   'url' => '/api/v1/account/{entity}/{id}', 'verb' => 'GET'    ],
	['name' => 'account#create', 'url' => '/api/v1/account/{entity}',      'verb' => 'POST'   ],
	['name' => 'account#update', 'url' => '/api/v1/account/{entity}/{id}', 'verb' => 'PUT'    ],
	['name' => 'account#delete', 'url' => '/api/v1/account/{entity}/{id}', 'verb' => 'DELETE' ],
    ]
];
