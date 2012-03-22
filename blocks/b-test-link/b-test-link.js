BEM.DOM.decl('b-test-link', {
    onSetMod: {
        js: function() {
            this.findBlockOn({block: 'b-link', modName: 'pseudo', modVal: 'yes'}).on('click', function() {
                console.log('click is fired');
            });
        }
    }
});
