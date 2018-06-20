$(document).ready(function () {
    $('a.footnote').mouseenter(on_footnote_mouse_enter);
});

function on_footnote_mouse_enter(event) {
    var popup_id = 'footnote-popup';
    var $fndiv = $('#' + popup_id);

    // popup doesn't exist, yet -> create it
    if($fndiv.length === 0) {
        $fndiv = $('<div/>')
            .attr('id', popup_id)
            .addClass(popup_id + ' JSpopup')
            .mouseleave(function () {$(this).hide();});
        $('body').append($fndiv);
    }

    // position() does not support hidden elements
    // $fndiv.show().position({
    //     my: 'left top',
    //     at: 'left bottom',
    //     of: this
    // }).hide();

    // obtain footnote content.
    var fn = $('a' + this.hash);        // hash includes '#' at the beginning.
    if (fn.length == 0) {
        console.debug("cannot find elements whose is are '%s'.", this.hash.slice(1));
        return;
    }
    var content = fn.parent().find('span')[0].innerHTML;

    // set content
    $fndiv.html(content).show();
}
