Themes can be used to customize the look and feel without the need to patch the source code. This makes it very easy to:

* Use your own logo (in the top left, in log in and in emails)
* Customize the text strings to replace »Nextcloud« etc. with your name of choice
* Change the main color (used in header and as log in background)
* And more …


The process is simple:

1. Put a folder here with the name of the theme as foldername (`nc-ionos-theme`)
2. Activate it by putting `'theme' => 'nc-ionos-theme',` into the config.php file
3. (optional) make the theme exclusive by putting `'enforce-theme' => 'nc-ionos-theme',` into the config.php file


The folder structure of a theme is exactly the same as the main structure. CSS files are loaded additionally to the default files so you can override properties. Images are replaced. You can also override JS files and PHP templates but we do not recommend that because you will need to adjust them after every update.

You can also find a basic example here which you can build upon.