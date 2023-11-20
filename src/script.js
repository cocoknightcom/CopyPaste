document.addEventListener('DOMContentLoaded', function () {
    // Create a fun toggle button
    var toggleButton = document.createElement('div');
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.style.width = '40px';
    toggleButton.style.height = '20px';
    toggleButton.style.borderRadius = '10px';
    toggleButton.style.backgroundColor = '#ccc';
    toggleButton.style.cursor = 'pointer';

    // Create the switch handle
    var switchHandle = document.createElement('div');
    switchHandle.style.width = '18px';
    switchHandle.style.height = '18px';
    switchHandle.style.borderRadius = '50%';
    switchHandle.style.backgroundColor = '#fff';
    switchHandle.style.position = 'relative';
    switchHandle.style.left = '2px';
    switchHandle.style.transition = 'transform 0.3s ease-in-out';

    // Append the handle to the button
    toggleButton.appendChild(switchHandle);

    document.body.appendChild(toggleButton);

    // Function to toggle elements based on 'tags' attribute
    function toggleElements(isTodo) {
        // Remove existing h2 and p elements
        document.querySelectorAll('.content h2, .content p').forEach(function (element) {
            element.parentNode.removeChild(element);
        });

        // Iterate over tw-passagedata elements
        var passages = document.querySelectorAll('tw-passagedata');
        passages.forEach(function (passage) {
            var passageTags = passage.getAttribute('tags');

            // Check if the passage should be included based on 'tags' attribute
            if ((isTodo && passageTags && passageTags.includes('TODO')) || (!isTodo && (!passageTags || !passageTags.includes('TODO')))) {
                // Get the 'name' attribute value
                var passageName = passage.getAttribute('name');

                // Replace plain text line breaks with HTML line breaks
                var passageContent = passage.textContent.replace(/\n/g, '<br>');

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

    // Initial execution
    toggleElements(false);

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle elements based on 'tags' attribute
        var isTodo = toggleButton.dataset.isTodo === 'true';
        toggleElements(!isTodo);

        // Update the dataset attribute for the next toggle
        toggleButton.dataset.isTodo = (!isTodo).toString();

        // Move the switch handle to the new position
        switchHandle.style.transform = isTodo ? 'translateX(0)' : 'translateX(20px)';
    });
});
