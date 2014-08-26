define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/MainView.html",
	"dojo/parser",
	"dijit/layout/BorderContainer",
	"dijit/layout/TabContainer",
	"dijit/layout/AccordionContainer",
	"dijit/layout/ContentPane",
	"dijit/layout/AccordionPane"
], function(declare, lang, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, template){
    return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        startup: function(){
            this.inherited(arguments);
        },
        postCreate: function() {
            //alert('created!');
        }
    });
});
