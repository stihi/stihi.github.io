/**
 * Created by arsen on 28/06/16.
 */
$(function() {
    var $textarea = $('#text'),
        $result = $('#result');
    $textarea.autosize();
    $('form').sisyphus();
    $textarea.keyup(function () {
        var txt = $(this).val();
        var arrTxt = txt.split(/[\r\n]/);
        var result = '';
        arrTxt.forEach(function (str, i) {
            var count = str.match(/[аоэиуыеёюя]/igm).length;
            var str2 = '';
            for (var P, L, R = [], V = 'аоэиуыеёюя', j = 0, J = str.length; j < J; j++) {
                L = str.charAt(j), P = V.indexOf(L), R[j] = P < 0 ? L : ('<span class="text-danger">' + L + '</span>');
                str2 = R.join('');
            }
            result += '<small class="text-muted">#' + (i+1) + '</small> <span class="text-primary">[' + count + ']</span> ' + str2 + '<br>';
        });
        $result.html(result);
    });
});