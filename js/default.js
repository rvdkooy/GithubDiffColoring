$(function(){

    

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

        $('.blob-num-addition').css('background-color', '#' + result.additionGutter);
        $('.blob-num-addition').css('color', 'white');
        $('.blob-code-addition').css('background-color', '#' + result.additionCode);

        $('.blob-num-deletion').css('background-color', '#' + result.deletionGutter);
        $('.blob-num-deletion').css('color', 'white');
        $('.blob-code-deletion').css('background-color', '#' + result.deletionCode);
    });
})