<?php
/**
 * SPDX-FileCopyrightText: 2024 STRATO AG
 * SPDX-FileCopyrightText: 2016-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-FileCopyrightText: 2011-2016 ownCloud, Inc.
 * SPDX-License-Identifier: AGPL-3.0-only
 * SPDX-FileContributor: Kai Henseler <kai.henseler@strato.de>
 */

/**
 * Check if logged user has email product
 * @return bool
 */
$hasEmailProduct = static function (): bool {
	try {
		$availableProductsClaim = \OC::$server->get(\OC\SystemConfig::class)->getValue("available_products_claim");
		if ($availableProductsClaim === '') {
			return false;
		}

		$userOIDCBackend = \OC::$server->get(\OCA\UserOIDC\User\Backend::class);
		$userData = $userOIDCBackend->getUserData();

		$availableProductsString = $userData["raw"][$availableProductsClaim] ?? "[]";

		$availableProducts = (array)json_decode($availableProductsString);
		return in_array("email", $availableProducts);
	} catch (\Error|\Exception) {
		return false;
	}
};

?><!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>" translate="no" >
	<head data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>" data-requesttoken="<?php p($_['requesttoken']); ?>">
		<meta charset="utf-8">
		<title>
			<?php
				p(!empty($_['pageTitle']) && $_['pageTitle'] !== $_['application'] ? $_['pageTitle'].' - ' : '');
p(!empty($_['application']) ? $_['application'].' - ' : '');
p($theme->getTitle());
?>
		</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<?php $iosAppId = \OC::$server->get(\OC\SystemConfig::class)->getValue("ionos_customclient_ios_appid"); ?>
		<?php if ($iosAppId !== '') { ?>
			<meta name="apple-itunes-app" content="app-id=<?php p($iosAppId); ?>">
		<?php } ?>
		<meta name="apple-mobile-web-app-capable" content="yes">
		<meta name="apple-mobile-web-app-status-bar-style" content="black">
		<meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] != 'files')? $_['application']:$theme->getTitle()); ?>">
		<meta name="mobile-web-app-capable" content="yes">
		<meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
		<link rel="icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon.ico')); /* IE11+ supports png */ ?>">
		<link rel="apple-touch-icon" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
		<link rel="apple-touch-icon-precomposed" href="<?php print_unescaped(image_path($_['appid'], 'favicon-touch.png')); ?>">
		<link rel="mask-icon" sizes="any" href="<?php print_unescaped(image_path($_['appid'], 'favicon-mask.svg')); ?>" color="<?php p($theme->getColorPrimary()); ?>">
		<link rel="manifest" href="<?php print_unescaped(image_path($_['appid'], 'manifest.json')); ?>" crossorigin="use-credentials">
		<?php emit_css_loading_tags($_); ?>
		<?php emit_script_loading_tags($_); ?>
		<?php print_unescaped($_['headers']); ?>
	</head>
	<body id="<?php p($_['bodyid']);?>" <?php foreach ($_['enabledThemes'] as $themeId) {
		p("data-theme-$themeId ");
	}?> data-themes=<?php p(join(',', $_['enabledThemes'])) ?>>
	<?php include 'layout.noscript.warning.php'; ?>

		<?php foreach ($_['initialStates'] as $app => $initialState) { ?>
			<input type="hidden" id="initial-state-<?php p($app); ?>" value="<?php p(base64_encode($initialState)); ?>">
		<?php }?>

		<div id="skip-actions">
			<?php if ($_['id-app-content'] !== null) { ?><a href="<?php p($_['id-app-content']); ?>" class="button primary skip-navigation skip-content"><?php p($l->t('Skip to main content')); ?></a><?php } ?>
			<?php if ($_['id-app-navigation'] !== null) { ?><a href="<?php p($_['id-app-navigation']); ?>" class="button primary skip-navigation"><?php p($l->t('Skip to navigation of app')); ?></a><?php } ?>
		</div>

		<header id="ionos-global-nav">
			<ionos-global-nav
			home_src="<?php p(\OC::$server->get(\OCP\IURLGenerator::class)->linkTo('', 'index.php'))?>">
				<div data-qa="IONOS-SEARCH-TARGET">
					<div id="unified-search"></div>
				</div>

				<?php $link = \OC::$server->get(\OC\SystemConfig::class)->getValue("ionos_peer_products", [])['ionos_webmail_target_link']; ?>
				<?php if ($link !== null && $hasEmailProduct()) { ?>
					<a href="<?php p($link) ?>"
						target="_blank"
						title="<?php p($l->t('IONOS WEBMAIL')) ?>" data-qa="IONOS-WEBMAIL-TARGET">
						<ionos-icons webmail />
					</a>
				<?php } ?>
				<div class="usermenu" data-qa="IONOS-USER-MENU-TARGET">
					<ionos-user-menu>
						<b slot="username">
							<?php p($_['user_displayname']); ?>
						</b>
						<div slot="options">
							<ionos-user-menu-item
								icon="settings"
								label="<?php p($l->t('Settings')); ?>"
								link="<?php p(\OC::$server->get(\OCP\IURLGenerator::class)->linkToRoute('settings.PersonalSettings.index')) ?>"
								data-qa="IONOS-USER-MENU-SETTINGS-TARGET"
							></ionos-user-menu-item>
							<ionos-user-menu-item
								icon="help"
								label="<?php p($l->t('Help & Support'),); ?>"
								link="<?php p(\OC::$server->get(\OC\SystemConfig::class)->getValue('ionos_help_target_link')) ?>"
								target="_blank"
								data-qa="IONOS-USER-MENU-HELP-TARGET"
							></ionos-user-menu-item>
						</div>
						<div slot="logout">
							<ionos-user-menu-item
								icon="logout"
								label="<?php p($l->t('Logout')); ?>"
								link="<?php p(\OC_User::getLogoutUrl(\OC::$server->get(\OCP\IURLGenerator::class)))?>"
								data-qa="IONOS-USER-MENU-LOGOUT-TARGET"
							></ionos-user-menu-item>
						</div>
					</ionos-user-menu>
				</div>
			</ionos-global-nav>
		</header>

		<main id="content" class="app-<?php p($_['appid']) ?>">
			<h1 class="hidden-visually" id="page-heading-level-1">
				<?php p((!empty($_['application']) && !empty($_['pageTitle']) && $_['application'] != $_['pageTitle'])
					? $_['application'].': '.$_['pageTitle']
					: (!empty($_['pageTitle']) ? $_['pageTitle'] : $theme->getName())
				); ?>
			</h1>
			<?php print_unescaped($_['content']); ?>
		</main>
		<div id="profiler-toolbar"></div>
	</body>
</html>
