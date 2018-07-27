(function ($) {
    $.fn.resizeClassSwitch = function (options) {
        var options = $.extend({
                'mediumWidth': 1100,
                'smallWidth': 900,
                'mediumWidthClass': 'tmpl_hh_1000',
                'smallWidthClass': 'tmpl_hh_small',
                'isMedium': null,
                'isSmall': null,
                'isReset': null
            }, options),
            _this = this,
            templateWidth = _this.width();
 
        var mediumSizeNone = false;
        if (options.mediumWidth != 'undefinied' && !options.mediumWidth) mediumSizeNone = true;
 
        function switchClass() {
            if (templateWidth <= options.mediumWidth && templateWidth > options.smallWidth) {
                if (!mediumSizeNone) {
                    _this.addClass(options.mediumWidthClass);
                    $.isFunction(options.isMedium) && options.isMedium.call(this);
                }
            } else if (templateWidth <= options.smallWidth) {
                _this.addClass(options.smallWidthClass);
                $.isFunction(options.isSmall) && options.isSmall.call(this);
            } else {
                $.isFunction(options.isReset) && options.isReset.call(this);
            }
        }
 
        $(window).on("resize", function () {
            templateWidth = _this.width();
            _this.removeClass(options.mediumWidthClass + ' ' + options.smallWidthClass);
            switchClass();
        });
 
        return this.each(switchClass);
    };
 })(jQuery);