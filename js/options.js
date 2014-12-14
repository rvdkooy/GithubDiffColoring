var additionGutter = document.getElementById('additionGutter')
var additionCode = document.getElementById('additionCode')
var deletionGutter = document.getElementById('deletionGutter')
var deletionCode = document.getElementById('deletionCode')

function save_options(message) {
    
    var values = {
        additionGutter: additionGutter.value,
        additionCode: additionCode.value,
        deletionGutter: deletionGutter.value,
        deletionCode: deletionCode.value
    };
    var obj = {};
    obj[GitHubDiffSettings.settingsKey] = JSON.stringify(values);
    
    chrome.storage.sync.set(obj, function() {
        
        var status = document.getElementById('status');
        status.textContent = message;
        setTimeout(function() {
            status.textContent = '';
        }, 1500);
    });
}

function restore_options() {
    
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

        var additionGutterPicker = new jscolor.color(additionGutter, {});
        var additionCodePicker = new jscolor.color(additionCode, {});
        var deletionGutterPicker = new jscolor.color(deletionGutter, {});
        var deletionCodePicker = new jscolor.color(deletionCode, {});
        
        additionGutterPicker.fromString(result.additionGutter);
        additionCodePicker.fromString(result.additionCode);
        deletionGutterPicker.fromString(result.deletionGutter);
        deletionCodePicker.fromString(result.deletionCode);

        additionGutter.value = result.additionGutter;
        additionCode.value = result.additionCode;
        deletionGutter.value = result.deletionGutter;
        deletionCode.value = result.deletionCode;
    });
}

function restore_defaults() {
    
    chrome.storage.sync.clear();
        
    restore_options();
    save_options('Options restored.');
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', function(){ save_options('Options saved.'); });
document.getElementById('restore').addEventListener('click', restore_defaults);
