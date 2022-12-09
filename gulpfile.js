const { src, watch } = require(`gulp`),
    browserSync = require(`browser-sync`),
    reload = browserSync.reload;

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        server: {
            baseDir: `./`
        }
    });

    watch(`js/app.js`).on(`change`, reload);
    watch(`css/style.css`).on(`change`, reload);
    watch(`index.html`).on(`change`, reload);
};

exports.default = serve;
