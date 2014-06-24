/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
<<<<<<< HEAD
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null
=======
    this.options        = options
    this.$body          = $(document.body)
    this.$element       = $(element)
    this.$backdrop      =
    this.isShown        = null
    this.scrollbarWidth = 0
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

<<<<<<< HEAD
=======
  Modal.VERSION  = '3.1.1'

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
<<<<<<< HEAD
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
=======
    return this.isShown ? this.hide() : this.show(_relatedTarget)
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

<<<<<<< HEAD
=======
    this.checkScrollbar()
    this.$body.addClass('modal-open')

    this.setScrollbar()
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    this.escape()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
<<<<<<< HEAD
        that.$element.appendTo(document.body) // don't move modals dom position
=======
        that.$element.appendTo(that.$body) // don't move modals dom position
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      }

      that.$element
        .show()
        .scrollTop(0)

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
<<<<<<< HEAD
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
=======
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.trigger('focus').trigger(e)
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

<<<<<<< HEAD
=======
    this.$body.removeClass('modal-open')

    this.resetScrollbar()
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
<<<<<<< HEAD
        .one($.support.transition.end, $.proxy(this.hideModal, this))
=======
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
<<<<<<< HEAD
          this.$element.focus()
=======
          this.$element.trigger('focus')
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
<<<<<<< HEAD
      that.removeBackdrop()
=======
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
<<<<<<< HEAD
=======
    var that = this
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
<<<<<<< HEAD
        .appendTo(document.body)
=======
        .appendTo(this.$body)
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
<<<<<<< HEAD
          .one($.support.transition.end, callback)
=======
          .one('bsTransitionEnd', callback)
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

<<<<<<< HEAD
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()
=======
      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(150) :
        callbackRemove()
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

    } else if (callback) {
      callback()
    }
  }

<<<<<<< HEAD
=======
  Modal.prototype.checkScrollbar = function () {
    if (document.body.clientWidth >= window.innerWidth) return
    this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    if (this.scrollbarWidth) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', '')
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf

  // MODAL PLUGIN DEFINITION
  // =======================

<<<<<<< HEAD
  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
=======
  function Plugin(option, _relatedTarget) {
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

<<<<<<< HEAD
=======
  var old = $.fn.modal

  $.fn.modal             = Plugin
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
<<<<<<< HEAD
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
=======
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

<<<<<<< HEAD
    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

=======
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

>>>>>>> 1aaad6481cb064f31f85d519cd56e3c1799585cf
}(jQuery);
