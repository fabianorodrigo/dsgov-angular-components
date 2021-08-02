import { LoggingLevel } from './logging.level';
import { LOG_LEVEL } from '../parameters';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  trace(...obj: unknown[]) {
    if (LoggingLevel[LOG_LEVEL] >= LoggingLevel.TRACE) console.log(new Date().toLocaleTimeString(), 'TRACE', obj);
  }

  debug(...obj: unknown[]) {
    if (LoggingLevel[LOG_LEVEL] >= LoggingLevel.DEBUG) console.log(new Date().toLocaleTimeString(), 'DEBUG', obj);
  }

  info(...obj: unknown[]) {
    if (LoggingLevel[LOG_LEVEL] >= LoggingLevel.INFO) console.log(new Date().toLocaleTimeString(), 'INFO', obj);
  }

  warn(...obj: unknown[]) {
    if (LoggingLevel[LOG_LEVEL] >= LoggingLevel.WARN) console.warn(new Date().toLocaleTimeString(), 'WARN', obj);
  }

  error(...obj: unknown[]) {
    if (LoggingLevel[LOG_LEVEL] >= LoggingLevel.ERROR) console.warn(new Date().toLocaleTimeString(), 'ERROR', obj);
  }
}
