import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      warning: [
        {
          'description': 'Heavy showers are expected between 06:00 Sat 26th and 19:00 Sat 27th.',
          'red': false,
        },
        {
          'description': 'Heavy thunderstorm are expected between 06:00 Sat 28th and 19:00 Sat 28th.',
          'red': true,
        }
      ],
      weather: [
        {
          'city': 'Swindon',
          'temp': '10 degree',
          'rainy': true
        },
        {
          'city': 'Swansea',
          'temp': '14 degree',
          'rainy': false
        }
      ]
    }
  }
});
