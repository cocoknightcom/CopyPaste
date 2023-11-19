document.addEventListener('DOMContentLoaded', function () {
    // Remove tw-passagedata elements with 'tags' attribute containing 'TODO'
    var todoPassages = document.querySelectorAll('tw-passagedata[tags*="TODO"]');
    todoPassages.forEach(function (passage) {
        passage.parentNode.removeChild(passage);
    });

    // Iterate over remaining tw-passagedata elements
    var passages = document.querySelectorAll('tw-passagedata');
    passages.forEach(function (passage) {
        // Get the 'name' attribute value
        var passageName = passage.getAttribute('name');

        // Create an h2 element
        var h2 = document.createElement('h2');
        h2.textContent = '## ' + passageName;

        // Insert the h2 element before the current tw-passagedata element
        passage.parentNode.insertBefore(h2, passage);
    });
});