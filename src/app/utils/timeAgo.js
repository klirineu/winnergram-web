/* eslint-disable */

export default function time_ago(time) {
    switch (typeof time) {
      case 'number':
        break;
      case 'string':
        time = +new Date(time);
        break;
      case 'object':
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, 'segundos', 1], // 60
      [120, 'Há um minuto', 'Daqui 1 minuto.'], // 60*2
      [3600, 'minutos', 60], // 60*60, 60
      [7200, 'Há uma hora', 'Daqui 1 hora'], // 60*60*2
      [86400, 'horas', 3600], // 60*60*24, 60*60
      [172800, 'Ontem', 'Amanhã'], // 60*60*24*2
      [604800, 'dias', 86400], // 60*60*24*7, 60*60*24
      [1209600, 'Semana passada', 'Semana que vem'], // 60*60*24*7*4*2
      [2419200, 'semanas', 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, 'Mês passado', 'Mês que vem'], // 60*60*24*7*4*2
      [29030400, 'mesês', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, 'Ano passado', 'Ano que vem'], // 60*60*24*7*4*12*2
      [2903040000, 'anos', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, 'A uma decada', 'Na proxima decada'], // 60*60*24*7*4*12*100*2
      [58060800000, 'decadas', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = 'atrás.',
      list_choice = 1;
  
    if (seconds <= 10) {
      return 'Agora mesmo'
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = 'atrás.';
      list_choice = 2;
    }
    var i = 0,
      format;
    while (format = time_formats[i++])
      if (seconds < format[0]) {
        if (typeof format[2] == 'string')
          return format[list_choice];
        else
          return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
      }
    return time;
  }