/* ========================================================================
 * Bootstrap: modal.js v3.3.4
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.4'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
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
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.4
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.4'

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown', relatedTarget)
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if ((!isActive && e.which != 27) || (isActive && e.which == 27)) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--                        // up
    if (e.which == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index = 0

    $items.eq(index).trigger('focus')
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown)

}(jQuery);
;
/* ========================================================================
 * Bootstrap: button.js v3.3.4
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.4'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false
        else $parent.find('.active').removeClass('active')
      }
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
    }

    if (changed) this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      Plugin.call($btn, 'toggle')
      e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);
;
/* ========================================================================
 * Bootstrap: collapse.js v3.3.4
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.4'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);
;
(function($, Drupal, window, document) {

   var MenuGroupToggleItem = function() {
      function MenuGroupToggleItem(btn, elems, toggleClass) {
         this.triggerBtn = btn;
         this.elems = elems;
         this.toggleClass = toggleClass;
         //console.log( this.triggerBtn.parent(),  this.triggerBtn.parent().hasClass('active-trail') );
         if (this.triggerBtn.parent().hasClass('active-trail')) {
            this.toggle();
         }
      }
      MenuGroupToggleItem.prototype = {
         constructor: MenuGroupToggleItem,
         isPressed: function() {
            return this.triggerBtn.hasClass(this.toggleClass);
         },
         toggle: function() {
            //this.elems.collapse('toggle');
            if (this.elems.is(':visible')) {
               this.elems.hide();
               $(this).trigger('hide');
            } else {
               this.elems.show();
               $(this).trigger('show', this.elems);
            }
            this.triggerBtn.toggleClass(this.toggleClass);
         }
      }
      return MenuGroupToggleItem;
   }();

   var MenuGroup = function() {

      function MenuGroup(menuGroupItems) {
         this.currentItem = null;
         _.each(menuGroupItems, $.proxy(this.initItems, this));
      }
      MenuGroup.prototype = {
         constructor: MenuGroup,
         toggleBackDrop: function() {
            //$('.header-backdrop').toggleClass('modal-backdrop');
         },
         toggleItems: function(item) {

            if (this.currentItem && this.currentItem != item) {
               this.currentItem.toggle();
            } else {
               this.toggleBackDrop();
            }

            item.toggle();

         },
         onItemIsPressed: function(item, event) {

            this.toggleItems(item);
            this.currentItem = this.currentItem == item ? null :
               item;

            //event.stopImmediatePropagation();
         },
         initItems: function(item) {
            if (item.isPressed()) {
               this.currentItem = item;
            }
            item.triggerBtn.on('click', $.proxy(this.onItemIsPressed,
               this, item));
         }

      }

      return MenuGroup;

   }();
   var AccordionMenuGroup = function() {

      function AccordionMenuGroup(menuGroupItems) {
         MenuGroup.call(this, menuGroupItems);
      }
      AccordionMenuGroup.prototype = Object.create(MenuGroup.prototype);
      AccordionMenuGroup.prototype.constructor = AccordionMenuGroup;
      AccordionMenuGroup.prototype.toggleBackDrop = function() {};
      AccordionMenuGroup.prototype.initItems = function(item) {
         MenuGroup.prototype.initItems.call(this, item);
         item.triggerBtn.parent().addClass('is-collapsed');
      };
      AccordionMenuGroup.prototype.toggleItems = function(item) {
         MenuGroup.prototype.toggleItems.call(this, item);
         var liElem = item.triggerBtn.parent();
         if (this.currentItem != item) {
            liElem.removeClass('is-collapsed').addClass('is-expanded');
         }

         if (this.currentItem) {
            this.currentItem.triggerBtn.parent().removeClass(
               'is-expanded').addClass('is-collapsed');
         }
      };
      return AccordionMenuGroup;

   }();
   var MobileMainNavGroup = function() {
      function MobileMainNavGroup(elem, section, elemHash, elemSection) {
         if (_.isEmpty(section)) {
            return;
         }
         this.elem = elem;
         this.section = section;
         this.sectionToElemHash = elemHash;
         var child = this.sectionToElemHash[this.section];

         if (!_.isEmpty(child)) {
            this.addActiveTrailClass(child);
         }

         this.addActiveTrailClass(elemSection);

      }
      MobileMainNavGroup.prototype.addActiveTrailClass = function(child) {
         this.elem.find(child).parent().once().addClass('active-trail');

         //console.log("aadding active to ", child);
      };

      return MobileMainNavGroup;
   }();
   //handle mobile navigation js
   var MobileMainNav = function() {

      function MobileMainNav(elem, settings, noToggle) {
         this.elem = elem;
         this.elem.html($('nav > .menu').html());
         this.setActiveTrailMenuItem(settings);
         //setting up accordian if there is a sub nav or not an external link
         if (!noToggle) {
            var accordionItems = this.elem.find('> li > ul').siblings('a');
            var accordianNav = [];
            accordionItems.each(function(index) {
               var liItem = $(this);
               accordianNav.push(new MenuGroupToggleItem(liItem,
                  liItem.siblings('ul'), 'is-expanded'));
            });
            var accordionMenuGroup = new AccordionMenuGroup(accordianNav);
            this.elem.find('> li > a').on('click', function(event) {
               var subNav = $(event.target).siblings('ul');
               if (!subNav.length || /^http/.test($(event.target).attr(
                     'href'))) {
                  return;
               }
                event.preventDefault();

            });
         }

      };
      MobileMainNav.prototype.setActiveTrailMenuItem = function(settings) {
         if ($("body").hasClass("node-type-news-release")) {
            $("nav #menu-studio, nav #menu-studio-news").parent().once()
               .addClass("active-trail");
         }
         if (_.isEmpty(settings.active_menu)) {
            return;
         }

         //set active trail baesd on section TODO refactor this into the drupal
         var movieMenu = new MobileMainNavGroup(this.elem, settings.active_menu
            .movie, {
               'in': '#menu-movie-in',
               'he': '#menu-movie-he',
               'wa': '#menu-movie-wa'
            }, '#menu-movie');

         var tvMenu = new MobileMainNavGroup(this.elem, settings.active_menu
            .tv, {
               'on': '#menu-tv-on',
               'he': '#menu-tv-he',
               'wa': '#menu-tv-wa'
            }, '#menu-tv');

         var vidMenu = new MobileMainNavGroup(this.elem, settings.active_menu
            .videogame, {
               'vg': '#menu-videogame-vg',
               'mg': '#menu-videogame-mg'
            }, '#menu-videogame');
         //console.log("active menu set");
      }
      return MobileMainNav;

   }();

   var SubNavTitleLinks = function() {

      var SubNavTitleLinks = function(subTitleLinkElem, targetLinkElem) {

         this.subTitleLinkElem = $(subTitleLinkElem);
         this.targetLinkElem = $(targetLinkElem);

         this.subTitleLinkElem.on('click', $.proxy(this.onClickTargetElem,
            this));
      }

      SubNavTitleLinks.prototype.onClickTargetElem = function(event) {
         //var locationHash = '#' + this.targetLinkElem.attr('id');
         //window.document.location.hash = locationHash;
         //compensate for fixed submenu nav -60
         var scrollPos = this.targetLinkElem.offset().top - 60;
         if ($(event.target).attr('rel') == '#about') {
             scrollPos -= 100;
         }
         $('html, body').animate({
            scrollTop: scrollPos
         }, 500);

         event.preventDefault();

      };

      return SubNavTitleLinks;

   }();
   SubNavTitleLinks.createSubTitleMenu = function(elems) {
      this.subTitleLinkItems = [];
      elems.each(function() {
         var item = new SubNavTitleLinks(this, $(this).attr('rel'));
         SubNavTitleLinks.subTitleLinkItems.push(item);
      });

      //take to specific location on a deeplink if path parameter matches an id element
      //looks like something is overriding the location while logged in could set a timeout
      var lastPathRegExp = /^\/.*\/([a-zA-Z0-9\-]*)\/?$/;
      var lastParam = window.document.location.pathname.replace(
         lastPathRegExp, "$1");
      var isPathParam = lastPathRegExp.test(window.document.location.pathname);


      if (lastParam.length && isPathParam ) {

          if (!$('#' + lastParam).length) {
            lastParam += 's';
          }

          if ($('#' + lastParam).length) {
              var scrollPos = $('#' + lastParam).offset().top - 60;
              if (lastParam == 'about') {
                  scrollPos -= 100;
              }
              setTimeout(function() {
                  $('html, body').scrollTop(scrollPos);
              }, 100);
          }

      }
   };
   Drupal.behaviors.navigation = {
      initToggleMenus: function() {

         //console.log( "init the toggle menus");

      },
      initialized: false,
      tries: 0,
      attach: function(context, settings) {

         if (this.initialized || window["_"] === undefined) {
             if (this.tries < 5) {
                this.tries++;
                setTimeout(Drupal.behaviors.navigation.attach, 100, context, settings);
             }
            return;
         }

         //var searchButton = new MenuGroupToggleItem($('.search-btn'),
         //   $('.block-search'), 'is-pressed');
         //$(searchButton).on('show', function(event, item) {
         //   $('#edit-qt').focus();
         //});

         //var burgerButton = new MenuGroupToggleItem($('.burger'), $(
         //   '.hamburger-primary-nav, .block-header-social-links'
         //), 'is-pressed');
         //var menuGroup = new MenuGroup([searchButton,
         //   burgerButton
         //]);

         //var mobileMainNav = new MobileMainNav($(
         //   '.hamburger-primary-nav'), settings);
         //var mainNav = new MobileMainNav($('.menu.collapse'), settings,
         //   true);

         SubNavTitleLinks.createSubTitleMenu($('a.title-sub-nav'));

         $('.dropdown').on('show.bs.dropdown', function () {
             if ($(window).width() > 767) {
                 $('.block-search.collapse.in').collapse('hide');

                 // debugger
                 if ('ontouchstart' in document.documentElement) {
                     // if mobile we use a backdrop because click events don't delegate
                     $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click',function(){
                        $('.dropdown.open').removeClass('open');
                     });
                     $(this).children('.dropdown-menu').on('click',function(){
                        $('.dropdown.open').removeClass('open');
                     })

                 }
                 //var closer = function(e) {
                 //    $('.dropdown.open').removeClass('open');
                 //    $('.dropdown.open').off('touchstart', arguments.callee);
                 //}
                 //
                 //$(document).on('touchstart', closer);
             }

             return true;

         });

         $('.block-search').on('show.bs.collapse hide.bs.collapse', function(evt){
             $('.search-btn[data-target=".block-search"]').toggleClass('is-pressed');
             if (evt && evt.type == 'show') {
                 setTimeout(function() {
                     $('#edit-qt').focus();
                 }, 200);
             }
         });
         $('.mobile-navbar-collapse').on('show.bs.collapse', function (evt) {
             $('.block-search.collapse').collapse('show');
             $('.header-backdrop').toggleClass('modal-backdrop');
             $('body').toggleClass('no-overflow');
             $('.navbar-toggle[data-target=".mobile-navbar-collapse"]').toggleClass('is-pressed');
         });
         $('.mobile-navbar-collapse').on('hide.bs.collapse', function (evt) {
             $('.block-search.collapse').collapse('hide');
             $('.header-backdrop').toggleClass('modal-backdrop');
             $('body').toggleClass('no-overflow');
             $('.navbar-toggle[data-target=".mobile-navbar-collapse"]').toggleClass('is-pressed');
        });

         var browseTitle = $('aside.col-sm-3 .section-accordian-menu h2.block-title');
         var browseMenu = $('aside.col-sm-3 .section-accordian-menu .menu-block-wrapper');
          //browseTitle.wrapInner('<span class="browse"></span>');
          //browseTitle.append('<span class="icon-x">x</span>');
         var browseMenuToggle = new MenuGroupToggleItem(browseTitle, browseMenu, 'open');
         var menuGroup = new MenuGroup([browseMenuToggle]);
         //$(window).on('resize', function(event) {
         //   if (burgerButton.isPressed() && !burgerButton.triggerBtn
         //      .is(':visible')) {
         //      burgerButton.triggerBtn.trigger('click');
         //      burgerButton.elems.hide();
         //   }
         //});

          $(window).on('resize', function(event) {
              if ($(window).width() > 768) {
                  $('.mobile-navbar-collapse.in').collapse('hide');
              }
          });
         this.initialized = true;

      }

   }

})(jQuery, Drupal, this, this.document);
;
(function ( $, Drupal, window, document ) {
    Drupal.behaviors.imgHoverPatch = {
        attach: function (context, settings) {
            $('span.img-hover').on('mouseover', function(){
                     var newHeight = $(this).siblings('img').height();
                     $(this).height(newHeight-6);
                }
            )
        }

    }
})(jQuery, Drupal, this, this.document);
;
(function($, Drupal, window, document) {

   var MoreLessButton = function() {
      function MoreLessButton(elems, toggleClass) {
         this.triggerBtn = null;
         this.elems = elems;
         this.toggleClass = toggleClass;
         if (this.checkTriggerPoint(null)) {
             this.initElems(null);
         };
         $(window).on('resize', $.proxy(this.onResize, this));
      }
      MoreLessButton.prototype = {
         constructor: MoreLessButton,
         triggerPoint: 768,
         moreLabel: Drupal.t('More', {}, {context: "More-Less button label"}),
         lessLabel: Drupal.t('Less', {}, {context: "More-Less button label"}),
         onResize: function(event) {
             if(this.checkTriggerPoint(event)) {
                 if (!this.triggerBtn) {
                    this.initElems(event);
                 }

             } else if (this.triggerBtn) {
                this.destroy();
             }
         },
         checkTriggerPoint: function(event) {
            var vh = $(window).height();
            var vw = $(window).width();
            return $("#about").height() > vh
                || ( vw < this.triggerPoint
                    && ($(".more-info-block").height() + $("#about").height()) > vh);
         },
         initElems: function(event) {
            this.triggerBtn = this.createButton(null);
            this.triggerBtn.children().on('touchstart tap click', $.proxy(this.onButtonClick,this));
            this.elems.append(this.triggerBtn);
            this.elems.addClass(this.toggleClass);
         },
         destroy: function() {
             if (this.triggerBtn) {
                 this.triggerBtn.children().off('touchstart tap click', $.proxy(this.onButtonClick, this));
                 this.elems.removeClass(this.toggleClass);
                 $('div.bottom-fade.more-btn-wrapper').remove();
                 delete this.triggerBtn;
             }
         },
         onButtonClick: function(event) {
            // stops bubbling the tap event to its parents. so you can create nested events.
            event.stopPropagation();
            // prevents the browser from doing it's native 'tap' implementation.
            event.preventDefault();
            if (this.elems.hasClass(this.toggleClass)) {
               this.triggerBtn.find('input').val(this.lessLabel);
               this.elems.removeClass(this.toggleClass);
            } else {
               this.triggerBtn.find('input').val(this.moreLabel);
               this.elems.addClass(this.toggleClass);
               $.smoothScroll({
                  scrollTarget: '.pane-node-field-display-title',
                  offset: -60
               });
            }
            // fail safe
            return false;
         },

         createButton: function(event) {
            var btn_wrapper = $('<div>').addClass(
               'bottom-fade more-btn-wrapper');
            // var link = $('<a>').attr({
            //    href: 'javascript:console.info("click")'
            // }).text('click me').appendTo(btn_wrapper);;
            var button = $('<input/>').attr({
               type: "button",
               value: this.moreLabel
            }).addClass('more-btn').appendTo(btn_wrapper);
            var down_icon = $('<div>').addClass('icon-chevron-down')
               .appendTo(btn_wrapper);

            return btn_wrapper;
         }
      }
      return MoreLessButton;

   }();

   Drupal.behaviors.moreLessBtn = {
      attach: function(context, settings) {
         var elem = $('.layout-responsive-region-body', context);
         if (!elem.length) {
            return;
         }
         // check if the targeted element exists
         if ($('.synopsis', elem).length) {
            var moreLessBtn = new MoreLessButton(elem, 'less');
         }

      }

   }
})(jQuery, Drupal, this, this.document);
;
(function($, Drupal, window, document) {
   $(window).load(function() {
      if ($('a.newsletter-modal').length) {
         // TODO - make this reusable for other webforms
         // create modal placeholder
         modal = $(
            '<div class="modal fade newsletterformmodal" tabindex="-1" role="dialog" aria-labelledby="webformmodal" aria-hidden="true" id="webformmodal"><div class="modal-dialog"><div class="modal-content"></div></div></div>'
         );
         modal_header = $(
            '<div class="modal-header"><button type="button" class="close" data-dismiss="modal">×</button><div class="form-logo"><img class="header_logo" alt="warner bros." title="Home" src="/sites/all/themes/bootstrap_wb/images/wb_logo.svg"></div></div>'
         );
         modal_body = $(
            '<div class="modal-body"><iframe src="" style="zoom:0.60" height="920px" frameborder="0"></iframe></div>'
         );
         $('.modal-content', modal).append(modal_header).append(
            modal_body);
         $('body').append(modal);

         // add override behavior on click
         $('a.newsletter-modal').once().on('click', function(e) {
            // stop link behavior
            e.preventDefault();

            // var header = $(this).attr('data-title') ||
            //    'Newsletter';
            // $('#webformmodal .modal-header h3').html(header);

            // get attributes
            var src = $(this).attr('href') ||
               '/newsletter';
            var width = $(this).attr('data-width') ||
               '99.6%';
            $('#webformmodal iframe').attr({
               'src': src,
               'width': width
            });

            // dynamic height does not work in Chrome
            if (navigator.userAgent.search("WebKit") == -1) {
               console.info('change the iframe height');
               var height = $(this).attr('data-height') ||
                  '550px';
               $('#webformmodal iframe').attr({
                  'height': height
               });
            }

            $('#webformmodal').modal('show');
         });

         $('#webformmodal').on('hidden.bs.modal', function() {
            $(this).find('iframe').attr('src', 'about:blank');
         });

         if (navigator.userAgent.match(/iPhone|iPad|iPod/i)) {

            $('.modal').on('show.bs.modal', function() {

               // Position modal absolute and bump it down to the scrollPosition
               $(this)
                  .css({
                     position: 'absolute',
                     marginTop: $(window).scrollTop() + 'px',
                     bottom: 'auto'
                  });

               // Position backdrop absolute and make it span the entire page
               //
               // We need to tap into the backdrop after Boostrap
               // positions it but before transitions finish.
               //
               setTimeout(function() {
                  $('.modal-backdrop').css({
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight,
                        document.body.offsetHeight,
                        document.documentElement.offsetHeight,
                        document.body.clientHeight,
                        document.documentElement.clientHeight
                     ) + 'px'
                  });
               }, 0);
            });
         }
      }

   });

   Drupal.behaviors.customModalBehavior = {
      attach: function(context, settings) {

      }
   }
})(jQuery, Drupal, this, this.document);
;
