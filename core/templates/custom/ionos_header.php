<header id="ionos-global-nav">
	<ionos-global-nav
	home_src="<?php p(\OC::$server->get(\OCP\IURLGenerator::class)->linkTo('', 'index.php'))?>">
		<?php $link = \OC::$server->get(\OC\SystemConfig::class)->getValue("ionos_peer_products", [])['ionos_webmail_target_link']; ?>
		<?php if ($link !== null) { ?>
			<a href="<?php p($link) ?>"
				target="_blank" slot="webmail"
				title="<?php p($l->t('IONOS WEBMAIL')) ?>" data-qa="IONOS-WEBMAIL-TARGET">
				<ionos-icons webmail />
			</a>
		<?php } ?>
		<a href="<?php p(\OC_User::getLogoutUrl(\OC::$server->get(\OCP\IURLGenerator::class)))?>" style="color: var(--color-primary)">Logout</a>
		<a href="<?php p(\OC::$server->get(\OCP\IURLGenerator::class)->linkToRoute('settings.PersonalSettings.index'))?>" style="color: var(--color-primary)">Settings</a>
	</ionos-global-nav>
</header>
