import $ from 'jquery'

// Swap text for button on Our Food cards
$('.our-food-overlay--main').hover(function () {
  $('.food-main').addClass('over-text-none')
  $('.food-main-btn').addClass('over-text-block')
}, function () {
  $('.food-main').removeClass('over-text-none')
  $('.food-main-btn').removeClass('over-text-block')
})

$('.our-food-overlay--dim-sum').hover(function () {
  $('.food-dim-sum').addClass('over-text-none')
  $('.food-dim-sum-btn').addClass('over-text-block')
}, function () {
  $('.food-dim-sum').removeClass('over-text-none')
  $('.food-dim-sum-btn').removeClass('over-text-block')
})

$('.our-food-overlay--thai').hover(function () {
  $('.food-thai').addClass('over-text-none')
  $('.food-thai-btn').addClass('over-text-block')
}, function () {
  $('.food-thai').removeClass('over-text-none')
  $('.food-thai-btn').removeClass('over-text-block')
})

$('.our-food-overlay--appetisers').hover(function () {
  $('.food-appetisers').addClass('over-text-none')
  $('.food-appetisers-btn').addClass('over-text-block')
}, function () {
  $('.food-appetisers').removeClass('over-text-none')
  $('.food-appetisers-btn').removeClass('over-text-block')
})

$('.our-food-overlay--noodles').hover(function () {
  $('.food-noodles').addClass('over-text-none')
  $('.food-noodles-btn').addClass('over-text-block')
}, function () {
  $('.food-noodles').removeClass('over-text-none')
  $('.food-noodles-btn').removeClass('over-text-block')
})
