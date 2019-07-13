OC.L10N.register(
    "updatenotification",
    {
    "{version} is available. Get more information on how to update." : "{version} está disponible. Obtenga más información sobre cómo actualizar.",
    "Update notifications" : "Actualizar notificaciones",
    "Channel updated" : "Canal actualizado",
    "The update server could not be reached since %d days to check for new updates." : "No se ha podido contactar con el servidor de actualizaciones desde hace %d días para comprobar nuevas actualizaciones.",
    "Please check the Nextcloud and server log files for errors." : "Por favor, revisa que no haya errores en Nextcloud y en los archivos de registro.",
    "Update to %1$s is available." : "La actualización a %1$s está disponible.",
    "Update for %1$s to version %2$s is available." : "La actualización de %1$s a la versión %2$s está disponible.",
    "Update for {app} to version %s is available." : "Actualización de {app} a la versión %s disponible.",
    "Update notification" : "Notificación de actualización",
    "Displays update notifications for Nextcloud and provides the SSO for the updater." : "Muestra notificaciones de actualizaciones para Nexcloud y provee el SSO para el actualizador.",
    "The version you are running is not maintained anymore. Please make sure to update to a supported version as soon as possible." : "La versión que usas yo no está mantenida. Por favor, asegúrate de actualizar a una versión soportada tan pronto como sea posible.",
    "Apps missing updates" : "Apps con actualizaciones no disponibles",
    "View in store" : "Ver en la tienda",
    "Apps with available updates" : "Apps con actualizaciones disponibles",
    "Open updater" : "Abrir el actualizador",
    "Download now" : "Descargar ahora",
    "What's new?" : "¿Qué hay de nuevo?",
    "The update check is not yet finished. Please refresh the page." : "La comprobación de actuliazaciones no ha finalizado aún. Por favor, recarga la página.",
    "Your version is up to date." : "Su versión está actualizada.",
    "A non-default update server is in use to be checked for updates:" : "Se está usando un servidor de actualización no estándar para comprobar actualizaciones:",
    "Update channel:" : "Canal de actualización: ",
    "You can always update to a newer version. But you can never downgrade to a more stable version." : "Siempre puedes actualizar a una versión más moderna. Pero no puedes desactualizar a una versión más estable.",
    "Note that after a new release it can take some time before it shows up here. We roll out new versions spread out over time to our users and sometimes skip a version when issues are found." : "Nota: tras un nuevo lanzamiento, puede pasar algo de tiempo antes de que aparezca aquí. Escalonamos la difusión de nuevas versiones a nuestros usuarios y a veces saltamos una versión cuando aparecen problemas.",
    "Notify members of the following groups about available updates:" : "Notificar a los miembros de los siguientes grupos sobre actualizaciones disponibles:",
    "Only notification for app updates are available." : "Solo están disponibles las notificaciones para actualizaciones de apps",
    "The selected update channel makes dedicated notifications for the server obsolete." : "El canal de actualización seleccionado hace obsoletas las notificaciones dedicadas para el servidor.",
    "The selected update channel does not support updates of the server." : "El canal de actualización seleccionado no soporta actualizaciones del servidor",
    "A new version is available: <strong>{newVersionString}</strong>" : "Una nueva versión está disponible: <strong>{newVersionString}</strong>",
    "Checked on {lastCheckedDate}" : "Comprobado el {lastCheckeDate}",
    "Checking apps for compatible updates" : "Comprobando las actualizaciones compatibles de las apps",
    "Please make sure your config.php does not set <samp>appstoreenabled</samp> to false." : "Por favor, asegúrate de que tu config.php no tiene configurado <samp>appstoreenabled</samp> como false.",
    "Could not connect to the appstore or the appstore returned no updates at all. Search manually for updates or make sure your server has access to the internet and can connect to the appstore." : "No se ha podido conectar a la appstore o la appstore no ha devuelto ninguna actualización. Busca actualizaciones manualmente o asegúrate de que tu servidor tiene acceso a internet y puede conectarse a la appstore.",
    "<strong>All</strong> apps have an update for this version available" : "<strong>Todas</strong> las apps tienen disponible una actualización para esta versión",
    "View changelog" : "Ver registro de cambios",
    "Enterprise" : "Empresa",
    "For enterprise use. Provides always the latest patch level, but will not update to the next major release immediately. That update happens once Nextcloud GmbH has done additional hardening and testing for large-scale and mission-critical deployments. This channel is only available to customers and provides the Nextcloud Enterprise package." : "Para uso empresarial. Proporciona siempre el último nivel de actualización, pero no realiza inmediatamente la actualización a la siguiente versión mayor. Esta actualización ocurre una vez que Nextcloud GmbH ha realizado reforzamiento y comprobaciones adicionales para despliegues a larga escala y de misión crítica. Este canal está disponible únicamente a los clientes del paquete Nextcloud Enterprise.",
    "Stable" : "Estable",
    "The most recent stable version. It is suited for regular use and will always update to the latest major version." : "La versión estable más reciente. Es apropiada para uso regular y siempre se actualizará a la última versión mayor.",
    "Beta" : "Beta",
    "A pre-release version only for testing new features, not for production environments." : "Una versión preliminar solo para probar nuevas características, no para entornos de producción.",
    "_<strong>%n</strong> app has no update for this version available_::_<strong>%n</strong> apps have no update for this version available_" : ["<strong>%n</strong> app no tiene actualización disponible para esta versión.","<strong>%n</strong> apps no tienen actualización disponible para esta versión."],
    "You can always update to a newer version / experimental channel. But you can never downgrade to a more stable channel." : "Siempre podrás actualizar a la versión más reciente o al canal experimental, pero nunca podrás volver a un canal más estable.",
    "<strong>production</strong> will always provide the latest patch level, but not update to the next major release immediately. That update usually happens with the second minor release (x.0.2)." : "<strong>production</strong> siempre proporcionará el último nivel de parches, pero no se actualizará a la próxima versión principal de inmediato. Esa actualización generalmente ocurre con la segunda versión menor (x.0.2).",
    "<strong>stable</strong> is the most recent stable version. It is suited for regular use and will always update to the latest major version." : "<strong>stable</strong> es la versión estable más reciente. Es adecuada para uso en producción y siempre se actualizará a la última versión principal.",
    "<strong>beta</strong> is a pre-release version only for testing new features, not for production environments." : "<strong>beta</strong> es una versión preliminar solo para probar nuevas características, no para entornos de producción.",
    "Could not start updater, please try the manual update" : "No se ha podido iniciar el actualizador. Por favor, prueba a realizar la actualización de forma manual",
    "Production" : "Producción",
    "Will always provide the latest patch level, but not update to the next major release immediately. That update usually happens with the second minor release (x.0.2) and only if the instance is already on the latest minor version." : "Proveerá siempre el último nivel de parches, pero no actualizará automáticamente a la próxima versión mayor. Esa actualización normalmente sucede con la segunda versión menor (x.0.2) y solo si la instancia ya está en la última versión menor."
},
"nplurals=2; plural=(n != 1);");
