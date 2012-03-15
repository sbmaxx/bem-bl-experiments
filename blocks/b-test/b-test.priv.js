blocks['b-test'] = function() {

    return {
        block: 'b-test',
        content: ['категория 1', 'категория 2', 'категория 3'].map(function(el) {
            return { elem: 'item', content: el }
        })
    }

}
