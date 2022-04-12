/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {

  // Common Labels for both calendars
  calendarLabels: [
      { text: '学习' ,value : '学习', color: 'success' },
      { text: '生活', value: '生活', color: 'warning'},
      { text: '工作', value: '工作', color: 'danger'},
      { text: '其它', value: '其它', color: 'danger'},
  ],

  calendarEvents: [
    {
        id: 1,
        title: 'My Event',
        start: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        end: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        desc: 'demo event',
        cssClass: 'event-success',
        label: 'business'
    },
  ],

  // Simple Calendar State
  simpleCalendarEvents: [
    {
        id: 1,
        title: 'My Event',
        startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        url: '',
        classes: 'event-success',
        label: 'business'
    },
  ]
}
