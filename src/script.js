document.addEventListener('DOMContentLoaded', function () {
    // Create a filter list
    var filterList = document.createElement('div');
    filterList.style.position = 'fixed';
    filterList.style.top = '10px';
    filterList.style.right = '60px';
    filterList.style.backgroundColor = '#fff';
    filterList.style.padding = '5px';
    filterList.style.border = '1px solid #ccc';
    filterList.style.borderRadius = '5px';

    // Fetch available tags from tw-tag elements
    var availableTags = [];
    var tagElements = document.querySelectorAll('tw-tag');
    tagElements.forEach(function (tagElement) {
        availableTags.push(tagElement.getAttribute('name'));
    });

    // Create "Activate All" button
    var activateAllButton = document.createElement('button');
    activateAllButton.textContent = 'All';
    activateAllButton.style.marginRight = '5px';
    activateAllButton.style.cursor = 'pointer';
    activateAllButton.addEventListener('click', function () {
        toggleAllCheckboxes(true);
    });
    filterList.appendChild(activateAllButton);

    // Create "Activate None" button
    var activateNoneButton = document.createElement('button');
    activateNoneButton.textContent = 'None';
    activateNoneButton.style.marginRight = '5px';
    activateNoneButton.style.cursor = 'pointer';
    activateNoneButton.addEventListener('click', function () {
        toggleAllCheckboxes(false);
    });
    filterList.appendChild(activateNoneButton);
    filterList.appendChild(document.createElement('br'));

    // Create "Activate Untagged" checkbox
    var activateUntaggedCheckbox = document.createElement('input');
    activateUntaggedCheckbox.type = 'checkbox';
    activateUntaggedCheckbox.id = 'activateUntaggedCheckbox';
    activateUntaggedCheckbox.checked = true;
    var untaggedLabel = document.createElement('label');
    untaggedLabel.htmlFor = 'activateUntaggedCheckbox';
    untaggedLabel.textContent = 'Untagged';
    filterList.appendChild(activateUntaggedCheckbox);
    filterList.appendChild(untaggedLabel);
    filterList.appendChild(document.createElement('br'));

    // Create checkboxes for each tag
    availableTags.forEach(function (tag) {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'tagCheckbox_' + tag;
        checkbox.value = tag;
        checkbox.checked = true; // All tags are active by default

        var label = document.createElement('label');
        label.htmlFor = 'tagCheckbox_' + tag;
        label.textContent = tag;

        filterList.appendChild(checkbox);
        filterList.appendChild(label);
        filterList.appendChild(document.createElement('br'));
    });

    document.body.appendChild(filterList);

    // Function to toggle all checkboxes
    function toggleAllCheckboxes(checked) {
        filterList.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
            checkbox.checked = checked;
        });

        // Trigger the filter based on the updated checkboxes
        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);
    }

    // Function to filter elements based on selected tags and untagged option
    function filterElements(selectedTags, includeUntagged) {
        // Remove existing h2 and p elements
        document.querySelectorAll('.content h2, .content p').forEach(function (element) {
            element.parentNode.removeChild(element);
        });

        // Iterate over tw-passagedata elements
        var passages = document.querySelectorAll('tw-passagedata');
        passages.forEach(function (passage) {
            var passageTags = passage.getAttribute('tags');

            if ((passageTags && selectedTags.some(tag => passageTags.includes(tag))) || (!passageTags && includeUntagged)) {
                // Get the 'name' attribute value
                var passageName = passage.getAttribute('name');

                // Extract strings in parentheses and remove them from the content
                var passageContent = passage.textContent.replace(/\(.*?\)/g, '');

                // Trim leading and trailing whitespace and line breaks
                passageContent = passageContent.trim();

                // Replace plain text line breaks with HTML line breaks
                passageContent = passageContent.replace(/\n/g, '<br>');

                // Create an h2 element
                var h2 = document.createElement('h2');
                h2.textContent = '## ' + passageName;

                // Create a new p element
                var p = document.createElement('p');
                p.innerHTML = passageContent;

                // Get the 'content' div
                var contentDiv = document.querySelector('.content');

                // Append the h2 and p elements to the 'content' div
                contentDiv.appendChild(h2);
                contentDiv.appendChild(p);
            }
        });
    }

    // Initial execution with all tags and untagged selected
    var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
    filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);

    // Add change event listener to the checkboxes and untagged option
    filterList.addEventListener('change', function (event) {
        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => checkbox.value);
        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);
    });
});