define([
    'dojo/ready',
    'dojo/parser',
    'dojo/_base/window',
    'dojo/dom-construct',
    'app/views/MainView'
], function (ready, parser, win, domConstruct, MainView) {
    return function(){
        ready(function(){
            var app = new MainView();
            parser.parse();
            domConstruct.place(app.domNode, win.body());
            app.startup();
        })
    }
});
