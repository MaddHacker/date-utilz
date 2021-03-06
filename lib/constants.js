/**
 * Copyright 2017 MaddHacker
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/**
 * Decalre a class for date construction
 * Giving array of strings of day and month
 * 
 * @returns {string} strings for date and month
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
 */
class DateConst {
    constructor() {
        this._months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this._days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    month(num) { return this._months[num]; }
    day(num) { return this._days[num]; }
}

/**
 * Extending DateConst class to a new derived class enDateConst
 * The reserved 'super' keyword is for making super-constructor
 * calls and allows access to parent methods.
 * 
 * Note: In derived classes, super() must be called before 'this'
 * Leaving this out will cause a reference error.
 */
class enDateConst extends DateConst {
    constructor() { super(); }
}

class frDateConst extends DateConst {
    constructor() {
        super();
        this._months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        this._days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    }
}

class itDateConst extends DateConst {
    constructor() {
        super();
        this._months = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
        this._days = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
    }
}

class deDateConst extends DateConst {
    constructor() {
        super();
        this._months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
        this._days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
    }
}

class esDateConst extends DateConst {
    constructor() {
        super();
        this._months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
        this._days = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    }
}


module.exports = {
    en: enDateConst,
    fr: frDateConst,
    it: itDateConst,
    de: deDateConst,
    es: esDateConst
}
