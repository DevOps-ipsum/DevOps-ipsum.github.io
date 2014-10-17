var opsArray = ['ops', 'drupal', 'backend', 'server', 'Apache', 'Solr', 'uptime', 'downtime', 'HostTracker', 'Passpack', 'Bash', 'Terminal', 'User', 'git', 'push', 'pull', 'commit', 'ipHouse', 'taxonomy', 'compile', 'DNS', '“launch”', 'deploy', 'A record', 'Settings file', 'htaccess', 'chmod', 'sudo', 'SQL', 'mysql', 'Brew', 'Node', 'curl', 'grep', 'log', 'rebase', 'Pair Networks', 'GoDaddy sucks', 'github', 'repository', 'PHP', 'query', 'merge', 'run cron', 't7-export', 't7-import', 'module updates', 't7 heartbeat', 'clone repo locally', 'preview environment', 'symbolic link', 'drush alias', 'Linux', 'Tika', 'JSON', 'Chef', 'Script', 'Master branch', 'Develop branch', 'core', 'host', 'API', 'rsync', 'brogrammer', 'Load testing', 'Load balancing', 'Mandrill', 'diff', 'pub key', 'private key', 'Varnish', 'cache', 'cron', 'nameserver', 'alias', 'WYSIWYG', 'ping', 'server side', 'post', 'head', 'get', 'top', 'ps aux', 'rbash', 'chown', 'more', 'htpasswd', 'cc all', 'App Neta', 'Slackbot', 'integration', 'mobile forward', 'responsiveness', 'multi platform functionality ', 'sideband demultiplexer']


document.getElementById("ipsum").onclick = randString;

var randString = opsArray.randomElement();

for (var i = 0; i < 250; i++) {

	Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
	}

	return randString;
}

