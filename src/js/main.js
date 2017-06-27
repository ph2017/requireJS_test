requirejs.config({
    baseUrl: './src/js/lib', //这个路径是指向index.html所在的目录！！坑爹！！
    paths: {
        app: '../',
        jquery: 'jquery', //jquery不能写成jQuery，不知为什么
        waterfall: '../component/waterFall',
        exposure: '../component/exposure'
    },
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/index']);