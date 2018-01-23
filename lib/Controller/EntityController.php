<?php
namespace OCA\NCounting\Controller;

use OCP\IRequest;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\AppFramework\Controller;

use OCA\NCounting\Db\Entity;
use OCA\NCounting\Db\EntityMapper;

use Exception;

class EntityController extends Controller {
	private $mapper;

	public function __construct($AppName, IRequest $request, EntityMapper $mapper){
		parent::__construct($AppName, $request);
		$this->mapper = $mapper;
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 */
	public function index() {
		return new DataResponse($this->mapper->findAll());
		#return new DataResponse(['name' => 'something', 'value' => 'lol']);
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param int $id
	 */
	public function show($id) {
		try {
			return new DataResponse($this->mapper->find($id));
		} catch (Exception $e) {
			return new DataResponse([], Http::STATUS_NOT_FOUND);
		}
	}

	/**
	 * @NoAdminRequired
	 * @NoCSRFRequired
	 *
	 * @param string name
	 * @param string settings
	 */
	public function create($name, $settings) {
		$entity = new Entity();
		$entity->setName($name);
		$entity->setSettings($settings);
		$this->mapper->insert($entity);
	}
}
