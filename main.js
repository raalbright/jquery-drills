$(document).ready(() => {
    const $submit = $('#btnSubmit');
    const $input = $('#inputField');
    const $div = $('<div></div>');
    const $ul = $('<ul></ul>');
    
    
    const generateRandomColor = () => `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    
    $div.appendTo($('body'));
    $ul.appendTo($('body'));
    
    $input.change(() => {
        if ($input.val().length > 0) {
            $submit.attr('disabled', false);
        } else {
            $submit.attr('disabled', true);
        }
    });
    
    $submit.click((e) => {
        e.preventDefault();
        const $li = $(`<li>${$input.val()}</li>`);
        $li.on({
            click: () => {
                $li.css({
                    backgroundColor: generateRandomColor(),
                })
            },
            dblclick: () => $li.remove()
        });
        $li.appendTo($ul);
    });
});
