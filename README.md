# CopyPaste
A Twine 2 Proofing Story Format that cuts it.

## Introduction
CopyPaste was created with cross-tool story development in mind and aims to facilitate extracting the content from Twine (including passage titles) and easily use it in tools such as Obsidian and LLMs.

## User's Guide
Open Twine and navigate to the Twine tab. Click on Story Formats and then on Add.
Copy and paste the link to the format.js file in the dist folder (https://github.com/cocoknightcom/CopyPaste/dist/format.js) into the Add form and click Add.
CopyPaste should now appear as one of your Current Story Formats.
Select it and click Use to Proof Stories.
When working on your story, go to the Build tab and click on Proof to use CopyPaste.
You can exclude passages from being displayed in CopyPaste by adding a TODO tag to the passages you want to exclude.

## Developer's Guide
If you want to work with the source, you can clone the repository and use Node to compile the data in src as by executing node compile.js. This will create the format.js file in dist.

Have fun!