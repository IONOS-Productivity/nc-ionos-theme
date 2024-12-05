<?php
/**
 * @author Björn Schießle <schiessle@owncloud.com>
 * @author Jan-Christoph Borchardt, http://jancborchardt.net
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

OCP\Util::addScript('', 'custom-elements/global-navigation/ionos-global-navigation');

/**
 * === ATTENTION ===
 * Please read and understand the comment in getDocBaseUrl()
 */
class OC_Theme {
	private const PRODUCT_NAME = 'HiDrive Next';

	/**
	 * Returns the base URL
	 * @return string URL
	 */
	public function getBaseUrl(): string {
		return 'https://nextcloud.com';
	}

	/**
	 * Returns the documentation URL
	 * @return string URL
	 */
	public function getDocBaseUrl(): string {
		// At time of authoring (2024-08, v29) this is called by OC_Defaults->buildDocLinkToKey()
		// We implement this method to catch any unexpected places that use
		// buildDocLinkToKey(). At time of authoring we don't see references
		// apart from disabled or hidden apps and status, configuration error
		// and maintenance pages.
		// If this method is not implemented lib/public/Defaults will fall back
		// to use a "ThemingDefaults" registered in the DI container, which
		// currently is registered by the "theming" app, which uses a config of
		// the "theming" app.
		return \OC::$server->get(\OC\SystemConfig::class)->getValue("ionos_help_target_link");
	}

	/**
	 * Returns the title
	 * @return string title
	 */
	public function getTitle(): string {
		return self::PRODUCT_NAME;
	}

	/**
	 * Returns the short name of the software
	 * @return string name
	 */
	public function getName(): string {
		return self::PRODUCT_NAME;
	}

	/**
	 * Returns the name of the product
	 * @return string name
	 */
	public function getProductName(): string {
		return self::PRODUCT_NAME;
	}

	/**
	 * Returns the short name of the software containing HTML strings
	 * @return string title
	 */
	public function getHTMLName(): string {
		return self::PRODUCT_NAME;
	}

	/**
	 * Returns entity (e.g. company name) - used for footer, copyright
	 * @return string entity name
	 */
	public function getEntity(): string {
		return 'IONOS SE';
	}

	/**
	 * Returns slogan
	 * @return string slogan
	 */
	public function getSlogan(): string {
		return 'Your custom cloud, personalized for you!';
	}

	/**
	 * Returns short version of the footer
	 * @return string short footer
	 */
	public function getShortFooter(): string {
		$entity = $this->getEntity();

		$footer = '© ' . date('Y');

		// Add link if entity name is not empty
		if ($entity !== '') {
			$footer .= ' <a href="' . $this->getBaseUrl() . '" target="_blank">' . $entity . '</a>' . '<br/>';
		}

		$footer .= $this->getSlogan();

		return $footer;
	}

	/**
	 * Returns long version of the footer
	 * @return string long footer
	 */
	public function getLongFooter(): string {
		$footer = '© ' . date('Y') . ' <a href="' . $this->getBaseUrl() . '" target="_blank">' . $this->getEntity() . '</a>' .
			'<br/>' . $this->getSlogan();

		return $footer;
	}

	/**
	 * Generate a documentation link for a given key
	 * @return string documentation link
	 */
	public function buildDocLinkToKey($key): string {
		return $this->getDocBaseUrl();
	}


	/**
	 * Returns mail header color
	 * @return string
	 */
	public function getColorPrimary(): string {
		return '#745bca';
	}

	/**
	 * Returns variables to overload defaults from core/css/variables.scss
	 * @return array
	 */
	public function getScssVariables(): array {
		return [
			'color-primary' => '#745bca'
		];
	}
}
