import $ from 'jquery'

$('.c-accordion--expand').on('click', function () {
  $('.c-accordion__btn').html('<span><i class="fas fa-angle-double-down fa-xs"></i></span>')
  $('.c-accordion__body:visible').slideUp()
  if (!$(this).next().is(':visible')) {
    $(this).next().slideDown(200)
    $(this).find('.c-accordion__btn').html('<span><i class="fas fa-angle-double-up fa-xs"></i></span>')
  }
})
