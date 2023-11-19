window.storyFormat({
    "name": "CopyPaste",
    "version": "1.1.0",
    "url": "https://github.com/cocoknightcom/CopyPaste",
    "author": "cocoknightcom",
    "description": "A Twine 2 Proofing Story Format that cuts it. Exclude passages with a TODO tag.",
    "license": "MIT",
    "image": "icon.svg",
    "proofing": true,
    "source": "<!doctype html>\n\n<html>\n<head>\n  <meta charset=\"utf-8\">\n\n  <title>{{STORY_NAME}}</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no\" />\n  <style>\nhtml, body, .container {\n\tcolor: #303030;\n\tfont-family: 'SF Pro', 'Helvetica Neue', Helvetica, Arial, serif;;\n\tfont-size: 15px;\n\tmargin: 0;\n\tpadding: 0;\n}\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #e6e7f0 url('cC2560x1440closer.jpg') no-repeat 50% 0%;\n  background-size: poster;\n}\n.wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 50%;\n  max-width: 90%;\n  margin: 4% 0;\n  background-color: rgb(255,255,255,.5);\n\n}\n.content {\n  text-align: left;\n}\nh1 {\n\tmargin-top: 15px;\n\tfont-size: 19px;\n\tmargin-bottom: 30px;\n}\nh2 {\n\tfont-weight: normal;\n}\nh3 {\n\tmargin-top: -15px;\n\tpadding-bottom: 2%;\n\tfont-weight: normal;\n}\nh4 {\n\tfont-size: 19px;\n\tfont-weight: normal;\n}\na {\n\tcolor: rgb(46, 87, 224);\n}\na.btn {\n\tpadding: 10px 20px;\n\tcolor: white;\n\tbackground-color: rgb(46, 114, 224);\n\ttext-decoration: none;\n}\ntw-storydata, tw-passagedata {\n    display: block !important;\n}\nh1, h2, h3, h4, p, tw-passagedata {\n    padding: 0 20% 2% 20%;\n}\n@media (min-width: 481px) and (max-width: 767px) {\n\th1, h2, h3, h4, p, tw-passagedata {\n\t  padding: 0 5% 2% 5%;\n\t}\n}\n@media (min-width: 320px) and (max-width: 480px) {\n\th1, h2, h3, h4, p, tw-passagedata {\n\t  padding: 0 5% 2% 5%;\n\t}\n}\n</style>\n\n</head>\n\n<body>\n    <div class=\"container\">\n        <div class=\"wrapper\">\n            <div class=\"content\">\n                <h1># {{STORY_NAME}}</h1>\n                {{STORY_DATA}}\n            </div>\n        </div>\n    </div>\n    <script>\ndocument.addEventListener('DOMContentLoaded', function () {\n    // Remove tw-passagedata elements with 'tags' attribute containing 'TODO'\n    var todoPassages = document.querySelectorAll('tw-passagedata[tags*=\"TODO\"]');\n    todoPassages.forEach(function (passage) {\n        passage.parentNode.removeChild(passage);\n    });\n\n    // Iterate over remaining tw-passagedata elements\n    var passages = document.querySelectorAll('tw-passagedata');\n    passages.forEach(function (passage) {\n        // Get the 'name' attribute value\n        var passageName = passage.getAttribute('name');\n\n        // Create an h2 element\n        var h2 = document.createElement('h2');\n        h2.textContent = '## ' + passageName;\n\n        // Insert the h2 element before the current tw-passagedata element\n        passage.parentNode.insertBefore(h2, passage);\n    });\n});\n</script>\n</body>\n</html>"
});