chrome.storage.sync.get(GitHubDiffSettings.settingsKey, function(result) {

    if(result.diffsettings){
        result = JSON.parse(result.diffsettings);
    }
    else{
        result.additionGutter = GitHubDiffSettings.defaults.additionGutter;
        result.additionCode = GitHubDiffSettings.defaults.additionCode;
        result.deletionGutter = GitHubDiffSettings.defaults.deletionGutter;
        result.deletionCode = GitHubDiffSettings.defaults.deletionCode;
    }

    var style = document.createElement('style');
	style.type = 'text/css';
	
	var innerHtml = '.blob-num-addition { background-color: #' + result.additionGutter + ' !important;  }';
    innerHtml += '.blob-code-addition { background-color: #' + result.additionCode + ' !important;  }';
	innerHtml += '.blob-code-addition .x { background-color: #' + result.additionCode + ' !important;  }';
	innerHtml += '.blob-num-deletion { background-color: #' + result.deletionGutter + ' !important;  }';
    innerHtml += '.blob-code-deletion { background-color: #' + result.deletionCode + ' !important;  }';
	innerHtml += '.blob-code-deletion .x { background-color: #' + result.deletionCode + ' !important;  }';

	style.innerHTML = innerHtml
	
	document.getElementsByTagName('head')[0].appendChild(style);
});