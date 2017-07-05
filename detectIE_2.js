function detectIE() {
  var ua = window.navigator.userAgent;
    detect = false;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        browser = {
            version: parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10),
            name: 'Internet Explorer'
        }
        if (setting.allowIE != true) {
            detect = setting.versionIE <= browser.version ? false : browser;
        }
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        browser = {
            version: parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10),
            name: 'Internet Explorer'
        }
        if (setting.allowIE != true) {
            detect = setting.versionIE <= browser.version ? false : browser;
        }
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        browser = {
            version: parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10),
            name: 'Microsoft Edge'
        }
        if (setting.allowEdge != true) {
            detect = setting.versionEdge <= browser.version ? false : browser;
        }
    }
    if(detect != false) {
        $.ajax({
            url: "https://gist.githubusercontent.com/ThisRave/7d0ab73f1a94351d63f3367c1462544f/raw/5e2157a75e88c10b27b4856f7f104e2c3c51b5a2/json",
            cache: false,
            dataType: 'json',
            error: function(response) {
                $('.sb-preloader-wrapper, .sb-wrapper').remove();
                $('body').text('Ваш браузер устарел, пожалуйста обновите браузер и попробуйте снова').fadeIn(2000);
            },
            success: function(data) {
                $('.sb-preloader-wrapper, .sb-wrapper').remove();
                $('title').text('Ваш браузер устарел');
                template = data.template.replace(data.template, data.styles + data.template).replace('{ title }', data.title).replace('{ text }', data.text);

                return $('body').html(template);
            }
        });
    } 
    return false;
}