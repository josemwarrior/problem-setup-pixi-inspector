
I work with Pixi v6.4.2

I've checked the issue #42 and this [repo](https://github.com/MatsMaker/example-of-migration-pixijs-imspector-to-5v), and read all the comments in the chrome store, all issues, but I don't found a answer.

**How can I work with webpack and (especially) typescript?**

If you build my project (npm run dev), and check the pixi-inspector tab in Chrome you notice the window turns black, and there is no way back and no way to correct it unless you refresh the page (Making debugging impossible with this tab, even though the objects do appear in the list.)

If you check the "no-webpack-js" branch, where I don't use webpack, loading Pixi via head, and pure javascript in the same file, you can see that everything works fine, with the same version of Pixi (6.4.2).

So there is something in the way webpack converts typescript to javascript, especially the Pixi library, making it unusable for debugging. My knowledge of both the development of this extension and webpack is limited, could someone help me? Thanks.
