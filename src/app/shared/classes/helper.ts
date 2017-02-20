import { IHelper } from './interfaces';
import { OpaqueToken } from '@angular/core';

export const HELPER_STATIC_CLASS = new OpaqueToken('helper');

export class Helper {

  public static idGenerate(idLength: number = 4): string {
    const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyz';

    let rtn = '';
    for (let i = 0; i < idLength; i++) {
      rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
  }
}
