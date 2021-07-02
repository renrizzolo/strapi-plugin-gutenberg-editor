# Strapi plugin gutenberg-editor

Replaces the Strapi WYSIWYG Rich Text editor with the WordPress Gutenberg editor.
This is a proof of concept. It might be a little broken, there is no undo/redo, not all blocks have been tested, etc.

<img src="https://raw.githubusercontent.com/renrizzolo/strapi-plugin-gutenberg-editor/master/strapi-plugin-gutenberg.png" alt="screenshot" />


### Requirements 
In order to transform the blocks to/from html, the blocks JSON needs to be saved to a separate field.
You must add a JSON field titled `gutenberg_blocks` to your content type.

### Usage:
- `npm install strapi-plugin-gutenberg-editor` / `yarn add strapi-plugin-gutenberg-editor`
- Run strapi build in order to build the plugin: `npm run build && npm run develop` / `yarn build && yarn develop`
- Add a Rich Text field to your content type
- Add a JSON field titled `gutenberg_blocks` to your content type
- When editing your content, click the Open Gutenberg Editor button
- Your changes are automatically saved to the `gutenberg_blocks` JSON field. This is so the gutenberg structure can be fed back in to the editor from your saved state (converting the saved html output back to gutenberg is unreliable)
- You can use the html output of your rich text content type in your front end as normal

### notes

You might want to copy the blocks css from wordpress core and include it in your frontend: /wp-includes/css/dist/block-library/style.css.

There's known issue when directly uploading an image (rather than opening the media library). You will get an OS file picker, then after picking the file you will be presented with he strapi media uploader drop file UI. At this point you just need to press back within the media uploader UI, and the file you chose will be show and ready to upload. The whole integration with the Strapi Media Uploader feels pretty hacky, but it is working nonetheless.
