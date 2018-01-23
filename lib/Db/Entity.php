<?php
namespace OCA\NCounting\Db;

use JsonSerializable;

class Entity extends \OCP\AppFramework\Db\Entity implements JsonSerializable {
	protected $name;
	protected $settings;

	public function jsonSerialize() {
		return [
			'id' => $this->id,
			'name' => $this->name,
			'settings' => $this->settings
		];
	}
}
