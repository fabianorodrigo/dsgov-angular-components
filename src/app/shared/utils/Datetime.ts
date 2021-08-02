import * as moment from 'moment';

export function toHoraLocal(data: Date): Date {
  if (data == null) return null;
  //workaround porque o componente DatePicker mostrava a data 16/07/1979 no timezone UTC,
  //o que seria 15/07 no timezone Brasil. Nem chamando, no app.module, o moment.locale('pt-BR'),
  //que, de fato mudou a propriedade 'locale' dos objetos do tipo moment, não adiantou
  //console.log('Data do backend convertida pra moment', moment(this.pessoa.dataNascimento));
  //console.log('UTC do moment', moment(this.pessoa.dataNascimento).utc());
  //console.log('Date do moment UTCizado', moment(this.pessoa.dataNascimento).utc().toDate());
  return moment(data).utc().toDate();
}

export function agoraHoraLocal(): Date {
  return toHoraLocal(new Date());
}
