/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

<<<<<<< HEAD
=======
  Alert.VERSION = '3.1.1'

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
<<<<<<< HEAD
      $parent.trigger('closed.bs.alert').remove()
=======
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
<<<<<<< HEAD
        .one($.support.transition.end, removeElement)
=======
        .one('bsTransitionEnd', removeElement)
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

<<<<<<< HEAD
  var old = $.fn.alert

  $.fn.alert = function (option) {
=======
  function Plugin(option) {
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

<<<<<<< HEAD
=======
  var old = $.fn.alert

  $.fn.alert             = Plugin
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
