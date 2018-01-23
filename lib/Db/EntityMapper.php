<?php
namespace OCA\NCounting\Db;

use OCP\IDbConnection;
use OCP\AppFramework\Db\Mapper;

class EntityMapper extends Mapper {
	public function __construct(IDbConnection $db) {
		parent::__construct($db, 'ncounting_entities', '\OCA\NCounting\Db\Entity');
	}

	public function find($id) {
		$sql = 'SELECT * FROM *PREFIX*ncounting_entities WHERE id = :id';
		$params[":id"] = $id;
		return $this->findEntity($sql, $params);
	}

	public function findAll() {
		$sql = 'SELECT * FROM *PREFIX*ncounting_entities';
		return $this->findEntities($sql);
	}
}
