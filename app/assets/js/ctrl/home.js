import $ from 'jquery'

export default (app) => {

  let panels = $('.js-panel')

  $('body').on('click', function() {
    panels.addClass('absolute--on')
    $('.frame').addClass('frame--white')
    let index = $('.js-panels').index($(this))
    console.log(index)
  })

}
