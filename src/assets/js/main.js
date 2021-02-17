import $ from 'jquery'
import './components/navigation/hamburger-nav'
import './components/navigation/navigation'
// import 'slick-carousel'
// import './components/aos'
// import './components/accordion'
// import './components/slider'
import './components/image-grid-text'

// Disabled form submit button for CF7
$(document).ready(() => {
  $('#form-submit').prop('disabled', true)
})
