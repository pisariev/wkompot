describe('Scrolling', function() {
    beforeEach( async  function() {
        await browser.url('https://bormando.github.io/pagescrolling/');
    });

    it('to top', async function() {
        const elem = await $('button');
        const header = await $('.navbar.top');
        await browser.execute((elem, header) => {
            window.scrollTo(
                0,
                elem.offsetTop - header.offsetHeight
            )
        }, elem, header);
        await elem.click();
    });

    it('to bottom', async function() {
        const elem = await $('button');
        const footer = await $('.navbar.bottom');
        await elem.scrollIntoView(false);
        await browser.execute((footer) => {
            window.scrollBy(0, footer.offsetHeight)
        }, footer);
        await elem.click();
    });
});
