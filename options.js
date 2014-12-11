// Saves options to chrome.storage
function save_options() {
    var addedHighlight = document.getElementById('addedHighlight').value;
    var deletedHighlight = document.getElementById('deletedHighlight').value;
    chrome.storage.sync.set({
        addedHighlight: addedHighlight,
        deletedHighlight: deletedHighlight
    }, function() {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        addedHighlight: '#ffecec',
        deletedHighlight: '#ffdddd'
    }, function(items) {
        document.getElementById('addedHighlight').value = items.addedHighlight;
        document.getElementById('deletedHighlight').value = items.deletedHighlight;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
