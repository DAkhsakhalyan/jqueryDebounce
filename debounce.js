(function($) {
    $.fn.debounce = function(callback, delayOpt) {
        var delay = delayOpt || 1000, // default delay is 1 sec
            $el = $(this),
            oldValue = $el.val(),
            timer;

        function runCallback() {
            typeof callback === "function" && callback(oldValue);
        }

        $el.on("keyup", function() {
            if( $el.val() === oldValue ) {
                clearTimeout(timer);
                return;
            }

            if( timer ) {
                clearTimeout(timer);
            }

            timer = setTimeout(function() {
                oldValue = $el.val();
                runCallback();
            }, delay);
        });
    };
})(jQuery);