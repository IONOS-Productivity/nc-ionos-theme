<?php
/**
 * SPDX-FileCopyrightText: 2024 STRATO AG
 * SPDX-FileCopyrightText: 2018-2024 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * SPDX-FileContributor: Kai Henseler <kai.henseler@strato.de>
 */
?>
<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>" translate="no" >
<head data-requesttoken="<?php p($_['requesttoken']); ?>">
	<meta charset="utf-8">
	<title>
		<?php
			p(!empty($_['application']) ? $_['application'].' - ' : '');
p($theme->getTitle());
?>
	</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
	<?php $iosAppId = \OC::$server->get(\OC\SystemConfig::class)->getValue("ionos_customclient_ios_appid"); ?>
	<?php if ($iosAppId !== '') { ?>
		<meta name="apple-itunes-app" content="app-id=<?php p($iosAppId); ?>">
	<?php } ?>
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="<?php p((!empty($_['application']) && $_['appid'] !== 'files')? $_['application']:$theme->getTitle()); ?>">
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
<body id="<?php p($_['bodyid']);?>">
<?php include('layout.noscript.warning.php'); ?>
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
			<?php
			/** @var \OCP\AppFramework\Http\Template\PublicTemplateResponse $template */
			if (isset($template) && $template->getActionCount() !== 0) {
				$primary = $template->getPrimaryAction();
				$others = $template->getOtherActions(); ?>
						<span id="header-primary-action" data-qa="IONOS-DOWNLOAD-SHARE-TARGET" class="<?php if ($template->getActionCount() === 1) {
							p($primary->getIcon());
						} ?>">
							<a href="<?php p($primary->getLink()); ?>" class="primary button">
							<ionos-icons <?php p($primary->getId()) ?> class="download"></ionos-icons>
								<span><?php p($primary->getLabel()) ?></span>
							</a>
						</span>
						<?php if ($template->getActionCount() > 1) { ?>
						<div id="header-secondary-action" data-qa="IONOS-DOWNLOAD-MENU-TARGET">
							<ionos-icons id="header-actions-toggle" class="menutoggle" moremenu></ionos-icons>
							<div id="header-actions-menu" class="popovermenu menu">
								<ul>
									<?php
										/** @var \OCP\AppFramework\Http\Template\IMenuAction $action */
										foreach ($others as $action) {
											print_unescaped($action->render());
										}
							?>
								</ul>
							</div>
						</div>
						<?php } ?>
					<?php
			} ?>
		</ionos-global-nav>
	</header>

	<div class="header-info">
		<span class="header-title">
		<?php if (isset($template) && $template->getHeaderTitle() !== '') { ?>
				<?php p($template->getHeaderTitle()); ?>
			<?php } else { ?>
				<?php	p($theme->getName()); ?>
			<?php } ?>
		</span>
		<?php if (isset($template) && $template->getHeaderDetails() !== '') { ?>
			<span class="header-shared-by">
				<?php p($template->getHeaderDetails()); ?>
			</span>
		<?php } ?>
	</div>


	<main id="content" class="app-<?php p($_['appid']) ?>">
		<h1 class="hidden-visually">
			<?php if (isset($template) && $template->getHeaderTitle() !== '') { ?>
				<?php p($template->getHeaderTitle()); ?>
			<?php } else { ?>
				<?php	p($theme->getName()); ?>
			<?php } ?>
		</h1>
		<?php print_unescaped($_['content']); ?>
	</main>
	<?php if (isset($template) && $template->getFooterVisible() && ($theme->getLongFooter() !== '' || $_['showSimpleSignUpLink'])) { ?>
	<footer>
		<p><?php print_unescaped($theme->getLongFooter()); ?></p>
		<?php
if ($_['showSimpleSignUpLink']) {
	?>
			<p>
				<a href="<?php p($_['signUpLink']); ?>" target="_blank" rel="noreferrer noopener">
					<?php p($l->t('Get your own free account')); ?>
				</a>
			</p>
			<?php
}
		?>
	</footer>
	<?php } ?>

</body>
</html>
