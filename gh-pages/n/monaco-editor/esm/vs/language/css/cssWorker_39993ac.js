define("node_modules/monaco-editor/esm/vs/language/css/cssWorker",function(e,t){"use strict";function r(e,t){return new o(e,t)}Object.defineProperty(t,"__esModule",{value:!0});var n=e("node_modules/tslib/tslib"),i=n.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-css-languageservice/cssLanguageService")),s=n.__importStar(e("node_modules/monaco-editor/esm/vs/language/css/_deps/vscode-languageserver-types/main")),o=function(){function e(e,t){switch(this._ctx=e,this._languageSettings=t.languageSettings,this._languageId=t.languageId,this._languageId){case"css":this._languageService=i.getCSSLanguageService();break;case"less":this._languageService=i.getLESSLanguageService();break;case"scss":this._languageService=i.getSCSSLanguageService();break;default:throw new Error("Invalid language id: "+this._languageId)}this._languageService.configure(this._languageSettings)}return e.prototype.doValidation=function(e){var t=this._getTextDocument(e);if(t){var r=this._languageService.parseStylesheet(t),n=this._languageService.doValidation(t,r);return Promise.resolve(n)}return Promise.resolve([])},e.prototype.doComplete=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseStylesheet(r),i=this._languageService.doComplete(r,t,n);return Promise.resolve(i)},e.prototype.doHover=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseStylesheet(r),i=this._languageService.doHover(r,t,n);return Promise.resolve(i)},e.prototype.findDefinition=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseStylesheet(r),i=this._languageService.findDefinition(r,t,n);return Promise.resolve(i)},e.prototype.findReferences=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseStylesheet(r),i=this._languageService.findReferences(r,t,n);return Promise.resolve(i)},e.prototype.findDocumentHighlights=function(e,t){var r=this._getTextDocument(e),n=this._languageService.parseStylesheet(r),i=this._languageService.findDocumentHighlights(r,t,n);return Promise.resolve(i)},e.prototype.findDocumentSymbols=function(e){var t=this._getTextDocument(e),r=this._languageService.parseStylesheet(t),n=this._languageService.findDocumentSymbols(t,r);return Promise.resolve(n)},e.prototype.doCodeActions=function(e,t,r){var n=this._getTextDocument(e),i=this._languageService.parseStylesheet(n),s=this._languageService.doCodeActions(n,t,r,i);return Promise.resolve(s)},e.prototype.findDocumentColors=function(e){var t=this._getTextDocument(e),r=this._languageService.parseStylesheet(t),n=this._languageService.findDocumentColors(t,r);return Promise.resolve(n)},e.prototype.getColorPresentations=function(e,t,r){var n=this._getTextDocument(e),i=this._languageService.parseStylesheet(n),s=this._languageService.getColorPresentations(n,i,t,r);return Promise.resolve(s)},e.prototype.provideFoldingRanges=function(e,t){var r=this._getTextDocument(e),n=this._languageService.getFoldingRanges(r,t);return Promise.resolve(n)},e.prototype.doRename=function(e,t,r){var n=this._getTextDocument(e),i=this._languageService.parseStylesheet(n),s=this._languageService.doRename(n,t,r,i);return Promise.resolve(s)},e.prototype._getTextDocument=function(e){for(var t=this._ctx.getMirrorModels(),r=0,n=t;r<n.length;r++){var i=n[r];if(i.uri.toString()===e)return s.TextDocument.create(e,this._languageId,i.version,i.getValue())}return null},e}();t.CSSWorker=o,t.create=r});