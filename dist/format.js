window.storyFormat({
    "name": "CopyPaste",
    "version": "1.4.2",
    "url": "https://github.com/cocoknightcom/CopyPaste",
    "author": "cocoknightcom",
    "description": "A Twine 2 Proofing Story Format that cuts it. Filter passages by tag.",
    "license": "MIT",
    "image": "icon.svg",
    "proofing": true,
    "source": "<!doctype html>\n\n<html>\n<head>\n  <meta charset=\"utf-8\">\n\n  <title>{{STORY_NAME}}</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n  <link rel=\"shortcut icon\" type=\"image/svg\" href=\"https://cocoknight.com/CopyPaste/dist/icon.svg\"/>\n  <style>\nhtml, body, .container {\n\tcolor: #303030;\n\tfont-family: 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n\tfont-size: 15px;\n\tmargin: 0;\n\tpadding: 0;\n\t-webkit-user-select: none;\n\tuser-select: none;\n}\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e6e7f0;\n  background-size: poster;\n}\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50%;\n  max-width: 90%;\n  margin: 4% 0;\n  background-color: rgb(255,255,255,.5);\n\n}\n.content {\n  text-align: left;\n  -webkit-user-select: text;\n  user-select: text;\n}\nh1 {\n\tmargin-top: 15px;\n\tfont-size: 19px;\n\tmargin-bottom: 30px;\n}\nh2 {\n\tfont-weight: normal;\n}\nh3 {\n\tmargin-top: -15px;\n\tpadding-bottom: 2%;\n\tfont-weight: normal;\n}\nh4 {\n\tfont-size: 19px;\n\tfont-weight: normal;\n}\na {\n\tcolor: rgb(46, 87, 224);\n}\na.btn {\n\tpadding: 10px 20px;\n\tcolor: white;\n\tbackground-color: rgb(46, 114, 224);\n\ttext-decoration: none;\n}\nlabel, button {\n\t-webkit-user-select: none;\n\tuser-select: none;\n}\nh1, h2, h3, h4, p {\n    padding: 0 20% 2% 20%;\n}\np code {\n\tdisplay: inline-block;\n\tpadding: 0.1em 0.7em 0.2em 0.6em;\n\tcolor: #e6e7f0;\n\tbackground-color: #404040;\n\tborder-radius: 4px;\n}\n@media (min-width: 481px) and (max-width: 767px) {\n\th1, h2, h3, h4, p {\n\t  padding: 0 5% 2% 5%;\n\t}\n}\n@media (min-width: 320px) and (max-width: 480px) {\n\th1, h2, h3, h4, p {\n\t  padding: 0 5% 2% 5%;\n\t}\n}\n</style>\n\n</head>\n\n<body>\n    <div class=\"container\">\n        <div class=\"wrapper\">\n            <div class=\"content\">\n                <h1># {{STORY_NAME}}</h1>\n            </div>\n        </div>\n    </div>\n    {{STORY_DATA}}\n    <script>\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Create a filter list\n    var filterList = document.createElement('div');\n    filterList.style.position = 'fixed';\n    filterList.style.top = '10px';\n    filterList.style.right = '60px';\n    filterList.style.backgroundColor = '#fff';\n    filterList.style.padding = '5px';\n    filterList.style.border = '1px solid #ccc';\n    filterList.style.borderRadius = '5px';\n\n    // Fetch available tags from tw-tag elements\n    var availableTags = [];\n    var tagElements = document.querySelectorAll('tw-tag');\n    tagElements.forEach(function (tagElement) {\n        availableTags.push(tagElement.getAttribute('name'));\n    });\n    \n    // Create CopyPaste Icon\n    var iconImage = document.createElement('img');\n    iconImage.src = \"https://cocoknight.com/CopyPaste/dist/icon.svg\"\n    filterList.appendChild(iconImage);\n    filterList.appendChild(document.createElement('hr'));\n\n    // Create \"Activate All\" button\n    var activateAllButton = document.createElement('button');\n    activateAllButton.textContent = 'All';\n    activateAllButton.style.marginRight = '5px';\n    activateAllButton.style.cursor = 'pointer';\n    activateAllButton.addEventListener('click', function () {\n        toggleAllCheckboxes(true);\n    });\n    filterList.appendChild(activateAllButton);\n\n    // Create \"Activate None\" button\n    var activateNoneButton = document.createElement('button');\n    activateNoneButton.textContent = 'None';\n    activateNoneButton.style.marginRight = '5px';\n    activateNoneButton.style.cursor = 'pointer';\n    activateNoneButton.addEventListener('click', function () {\n        toggleAllCheckboxes(false);\n    });\n    filterList.appendChild(activateNoneButton);\n    filterList.appendChild(document.createElement('br'));\n\n    // Create \"Activate Untagged\" checkbox\n    var activateUntaggedCheckbox = document.createElement('input');\n    activateUntaggedCheckbox.type = 'checkbox';\n    activateUntaggedCheckbox.id = 'activateUntaggedCheckbox';\n    activateUntaggedCheckbox.checked = true;\n    var untaggedLabel = document.createElement('label');\n    untaggedLabel.htmlFor = 'activateUntaggedCheckbox';\n    untaggedLabel.textContent = 'Untagged';\n    filterList.appendChild(activateUntaggedCheckbox);\n    filterList.appendChild(untaggedLabel);\n    filterList.appendChild(document.createElement('br'));\n\n    // Create checkboxes for each tag\n    availableTags.forEach(function (tag) {\n        var checkbox = document.createElement('input');\n        checkbox.type = 'checkbox';\n        checkbox.id = 'tagCheckbox_' + tag;\n        checkbox.value = tag;\n        checkbox.checked = true; // All tags are active by default\n\n        var label = document.createElement('label');\n        label.htmlFor = 'tagCheckbox_' + tag;\n        label.textContent = tag;\n\n        filterList.appendChild(checkbox);\n        filterList.appendChild(label);\n        filterList.appendChild(document.createElement('br'));\n    });\n\n    filterList.appendChild(document.createElement('hr'));\n\n    // Create a fun toggle button\n    var toggleButton = document.createElement('div');\n    toggleButton.style.width = '40px';\n    toggleButton.style.height = '20px';\n    toggleButton.style.borderRadius = '10px';\n    toggleButton.style.backgroundColor = '#ccc';\n    toggleButton.style.cursor = 'pointer';\n\n    // Create the switch handle\n    var switchHandle = document.createElement('div');\n    switchHandle.style.width = '18px';\n    switchHandle.style.height = '18px';\n    switchHandle.style.borderRadius = '50%';\n    switchHandle.style.backgroundColor = '#fff';\n    switchHandle.style.position = 'relative';\n    switchHandle.style.left = '2px';\n    switchHandle.style.transition = 'transform 0.3s ease-in-out';\n\n    // Append the handle to the button\n    toggleButton.appendChild(switchHandle);\n\n    toggleButton.addEventListener('click', function () {\n        toggleExtractStrings();\n        \n        var showCodeBlocks = toggleButton.dataset.showCodeBlocks === 'true';\n\n        // Update the dataset attribute for the next toggle\n        toggleButton.dataset.showCodeBlocks = (!showCodeBlocks).toString();\n\n        // Move the switch handle to the new position\n        switchHandle.style.transform = showCodeBlocks ? 'translateX(0)' : 'translateX(20px)';\n    });\n\n    filterList.appendChild(toggleButton);\n\n    document.body.appendChild(filterList);\n\n    // Function to toggle all checkboxes\n    function toggleAllCheckboxes(checked) {\n        filterList.querySelectorAll('input[type=\"checkbox\"]').forEach(function (checkbox) {\n            checkbox.checked = checked;\n        });\n\n        // Trigger the filter based on the updated checkboxes\n        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type=\"checkbox\"]:checked')).map(checkbox => checkbox.value);\n        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);\n    }\n\n    // Function to toggle extracting strings in parentheses\n    function toggleExtractStrings() {\n        // Toggle the state\n        extractStrings = !extractStrings;\n\n        // Trigger the filter based on the updated state\n        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type=\"checkbox\"]:checked')).map(checkbox => checkbox.value);\n        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);\n    }\n\n    // Variable to store the state of extracting strings in parentheses\n    var extractStrings = true;\n    \n    function wrapNestedParentheses(input, hide) {\n        let output = '';\n        let depth = 0;\n        let display = '';\n        let skipWhitespace = false;\n    \n        if (hide) {\n            display = ' style=\"display: none !important\"';\n        }\n    \n        for (let char of input) {\n            if (char === '(') {\n                if (depth === 0) {\n                    output += '<code' + display + '>';\n                }\n                depth++;\n                skipWhitespace = false; // Reset the flag when an opening parenthesis is encountered\n            } else if (char === ')') {\n                depth--;\n                if (depth === 0) {\n                    output += '</code>';\n                    skipWhitespace = true; // Set the flag to skip whitespace before the next line break\n                }\n            } else if (char === '\\n' || char === '\\r') {\n                if (hide && skipWhitespace) {\n                    continue; // Skip line break and preceding whitespace when hide is true\n                }\n                output += char;\n                skipWhitespace = false; // Reset the flag when a line break is encountered\n            } else if (char === ' ' || char === '\\t') {\n                if (skipWhitespace) {\n                    continue; // Skip whitespace if the flag is set\n                }\n                output += char;\n            } else {\n                output += char;\n                skipWhitespace = false; // Reset the flag when a non-whitespace character is encountered\n            }\n        }\n    \n        return output;\n    }\n    \n\n    // Function to filter elements based on selected tags and untagged option\n    function filterElements(selectedTags, includeUntagged) {\n        // Remove existing h2 and p elements\n        document.querySelectorAll('.content h2, .content p').forEach(function (element) {\n            element.parentNode.removeChild(element);\n        });\n\n        // Iterate over tw-passagedata elements\n        var passages = document.querySelectorAll('tw-passagedata');\n        passages.forEach(function (passage) {\n            var passageTags = passage.getAttribute('tags');\n\n            if ((passageTags && selectedTags.some(tag => passageTags.includes(tag))) || (!passageTags && includeUntagged)) {\n                // Get the 'name' attribute value\n                var passageName = passage.getAttribute('name');\n\n                // Extract strings in parentheses and remove them from the content if enabled\n                var passageContent = passage.textContent;\n                passageContent = wrapNestedParentheses(passageContent, extractStrings);\n\n                // Trim leading and trailing whitespace and line breaks\n                passageContent = passageContent.trim();\n\n                // Replace plain text line breaks with HTML line breaks\n                passageContent = passageContent.replace(/\\n/g, '<br>');\n\n                // Create an h2 element\n                var h2 = document.createElement('h2');\n                h2.textContent = '## ' + passageName;\n\n                // Create a new p element\n                var p = document.createElement('p');\n                p.innerHTML = passageContent;\n\n                // Get the 'content' div\n                var contentDiv = document.querySelector('.content');\n\n                // Append the h2 and p elements to the 'content' div\n                contentDiv.appendChild(h2);\n                contentDiv.appendChild(p);\n            }\n        });\n    }\n\n    // Initial execution with all tags and untagged selected\n    var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type=\"checkbox\"]:checked')).map(checkbox => checkbox.value);\n    filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);\n\n    // Add change event listener to the checkboxes, untagged option, and extract strings toggle\n    filterList.addEventListener('change', function (event) {\n        var selectedCheckboxes = Array.from(filterList.querySelectorAll('input[type=\"checkbox\"]:checked')).map(checkbox => checkbox.value);\n        filterElements(selectedCheckboxes, activateUntaggedCheckbox.checked);\n    });\n});\n</script>\n</body>\n</html>"
});