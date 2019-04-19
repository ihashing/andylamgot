var taglines = (function () {
    "use strict";

    function changeTaglines() {
        var taglines = jQuery(".tagline"),
            taglinesIndex = -1;

        function showNextTagline() {
            ++taglinesIndex;
            taglines.eq(taglinesIndex % taglines.length)
                .fadeIn(2000)
                .delay(2000)
                .fadeOut(2000, showNextTagline);
        }

        showNextTagline();
    }

    return {
        init: function () {
            changeTaglines();
        }
    };

}());

jQuery(function () {
    "use strict";
    taglines.init();
});
