({
    block: 'b-page',
    head: [
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'link.js' }
    ],
    content: {
        block: 'b-link',
        mix: [{ block: 'b-test-link', js: true }],
        mods: { pseudo: 'yes' },
        content: 'link'
    }
})
