/**
 * Created by arsen on 28/06/16.
 */
$(function() {
    var $textarea = $('#text'),
        $result = $('#result');
    $textarea.autosize();
    $textarea.keydown(function () {
        var txt = $(this).val();
        $result.text(txt);
    });
});