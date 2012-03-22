({
    block: 'b-page',
    head: [
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'link.js' }
    ],
    content: [{
        block: 'b-link',
        mods: { pseudo: 'yes' },
        mix: [{ block: 'b-test-link', js: true }],
        content: 'link'
    }, { block: 'b-test-link' }]
})
