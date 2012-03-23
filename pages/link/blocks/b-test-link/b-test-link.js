BEM.DOM.decl('b-test-link', {
    onSetMod: {
        js: function() {
            console.log('on set mod js');
            this.findBlockOn({block: 'b-link', modName: 'pseudo', modVal: 'yes'}).on('click', function() {
                console.log('click is fired');
            });
        }
    }
});
