BEM.DOM.decl('b-test', {

    onSetMod: {

        js: function() {

            BEM.blocks['b-form-checkbox'].on(this.domElem, 'change', this._onChange, this);

        },

        disabled: {

            'yes': function() {

                this._disabled = this._getChecked()[0].setMod('disabled', 'yes');

            },

            '': function() {

                this._disabled.delMod('disabled');

            }

        }

    },

    _onChange: function() {

        this.setMod('disabled', this._countChecked() === 1 ? 'yes' : '');

    },

    _countChecked: function() {

        return this._getChecked().length;

    },

    _getChecked: function() {

        return this.findBlocksInside({ blockName: 'b-form-checkbox', modName: 'checked', modVal: 'yes' });

    }

});
