/**
 * Prefijos del Sistema Internacional
 *
 * @type {Object}
 */
var SI_PREFIX = {
    '-24' : 'y',
    '-21' : 'z',
    '-18' : 'a',
    '-15' : 'f',
    '-12' : 'p',
    '-9'  : 'n',
    '-6'  : 'u',
    '-3'  : 'm',
    '-2'  : 'c',
    '-1'  : 'd',
    '0'   : '',
    '1'   : 'da',
    '2'   : 'h',
    '3'   : 'k',
    '6'   : 'M',
    '9'   : 'G',
    '12'  : 'T',
    '15'  : 'P',
    '18'  : 'E',
    '21'  : 'Z',
    '24'  : 'Y'
};
/**
 * Devuelve el número especificado formateado usando los prefijos del Sistema Internacional.
 *
 * @param {Number}  value            Valor a formatear.
 * @param {Object}  config           Configuración para modificar el resultado.
 * @param {String}  config.decimal   Símbolo a usar para el punto decimal (`.` por defecto).
 * @param {Number}  config.precision Número de dígitos decimales a mostrar (`2` por defecto).
 * @param {String}  config.separator Separador a usar entre los dígitos y el prefijo del SI (ninguno por defecto).
 * @param {Boolean} config.thousands Indica si se usan solamente los múltiplos de 1000.
 *
 * @return {String} Número formateado.
 */
module.exports = function SiNumber(value, config)
{
    if (!Number.isFinite(value))
    {
        throw new TypeError(`You MUST specify a finite number, not [${typeof value} = ${value}]`);
    }
    if (!config)
    {
        config = {};
    }
    //------------------------------------------------------------------------------
    // Configuración del resultado.
    //------------------------------------------------------------------------------
    var _decimal = typeof config.decimal === 'string'
        ? config.decimal
        : '.';
    var _precision = typeof config.precision === 'number'
        ? config.precision
        : 2;
    var _separator = typeof config.separator === 'string'
        ? config.separator
        : '';
    var _thousands = typeof config.thousands === 'boolean'
        ? config.thousands
        : false;
    //------------------------------------------------------------------------------
    // Obtención del resultado.
    //------------------------------------------------------------------------------
    var _exponent = Math.floor(Math.log(Math.abs(value)) / Math.log(10));
    var _prefix   = false;
    do {
        if (_exponent in SI_PREFIX && (!_thousands || (_exponent % 3 === 0)))
        {
            _prefix = SI_PREFIX[_exponent];
        }
        else
        {
            --_exponent;
            if (_exponent < -24)
            {
                _exponent = -24;
            }
        }
    } while (_prefix === false);
    var _result = (value / Math.pow(10, _exponent)).toFixed(_precision);
    if (_prefix !== false)
    {
        _result += _separator + _prefix;
    }
    //------------------------------------------------------------------------------
    return _result.replace('.', _decimal);
};
