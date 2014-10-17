

// jQuery wrapper so there are no conflicts
(function($) {
	$(document).ready(function(){
		// JS to run after the DOM is prepared.
	var opsArray = ['ops', 'drupal', 'backend', 'server', 'Apache', 'Solr', 'uptime', 'downtime', 'HostTracker', 'Passpack', 'Bash', 'Terminal', 'User', 'git', 'push', 'pull', 'commit', 'ipHouse', 'taxonomy', 'compile', 'DNS', 'launch', 'deploy', 'A record', 'Settings file', 'htaccess', 'chmod', 'sudo', 'SQL', 'mysql', 'Brew', 'Node', 'curl', 'grep', 'log', 'rebase', 'Pair Networks', 'GoDaddy sucks', 'github', 'repository', 'PHP', 'query', 'merge', 'run cron', 'module updates', 'clone repo locally', 'preview environment', 'symbolic link', 'drush alias', 'Linux', 'Tika', 'JSON', 'Chef', 'Script', 'Master branch', 'Develop branch', 'core', 'host', 'API', 'rsync', 'brogrammer', 'Load testing', 'Load balancing', 'Mandrill', 'diff', 'pub key', 'private key', 'Varnish', 'cache', 'cron', 'nameserver', 'alias', 'WYSIWYG', 'ping', 'server side', 'post', 'head', 'get', 'top', 'ps aux', 'rbash', 'chown', 'more', 'htpasswd', 'cc all', 'App Neta', 'Slackbot', 'integration', 'mobile forward', 'responsiveness', 'multi platform functionality ', 'sideband demultiplexer']



	$("#ipsum").click(function(){
		$('#random-ipsum').hide();

		var numPar = $('#paragraph').val();
		var p = 0;
		 while ( p < numPar) {


		 			var newString = '';
					var i = 0;
					while ( i < 100 ) {
						opsString = opsArray[Math.floor(Math.random() * opsArray.length)];
	
						newString = newString + ' ' + opsString;
			    		// This block will be executed 100 times.
			    		if ( i % 10 == 0) {
			    			newString = newString + '.' + ' ';
			    		}
			    		i++; // Increment i
					}
				   var newNewString = '<p>' + newString + '</p>';
					$('#random-ipsum').append(newNewString);
					newString = '';
					p++;

			 }
			 $('#random-ipsum').fadeIn();
			 
		});	

	});
}(jQuery));