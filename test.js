const assert    = require('assert');
const siNumber  = require('./index');
const items     = [
    //@formatter:off
    [ 1.234567e-30, "{{sign}}0{{decimal}}000001{{sep}}y"        ],
    [ 1.234567e-29, "{{sign}}0{{decimal}}000012{{sep}}y"        ],
    [ 1.234567e-28, "{{sign}}0{{decimal}}000123{{sep}}y"        ],
    [ 1.234567e-27, "{{sign}}0{{decimal}}001235{{sep}}y"        ],
    [ 1.234567e-26, "{{sign}}0{{decimal}}012346{{sep}}y"        ],
    [ 1.234567e-25, "{{sign}}0{{decimal}}123457{{sep}}y"        ],
    [ 1.234567e-24, "{{sign}}1{{decimal}}234567{{sep}}y"        ],
    [ 1.234567e-23, "{{sign}}12{{decimal}}345670{{sep}}y"       ],
    [ 1.234567e-22, "{{sign}}123{{decimal}}456700{{sep}}y"      ],
    [ 1.234567e-21, "{{sign}}1{{decimal}}234567{{sep}}z"        ],
    [ 1.234567e-20, "{{sign}}12{{decimal}}345670{{sep}}z"       ],
    [ 1.234567e-19, "{{sign}}123{{decimal}}456700{{sep}}z"      ],
    [ 1.234567e-18, "{{sign}}1{{decimal}}234567{{sep}}a"        ],
    [ 1.234567e-17, "{{sign}}12{{decimal}}345670{{sep}}a"       ],
    [ 1.234567e-16, "{{sign}}123{{decimal}}456700{{sep}}a"      ],
    [ 1.234567e-15, "{{sign}}1{{decimal}}234567{{sep}}f"        ],
    [ 1.234567e-14, "{{sign}}12{{decimal}}345670{{sep}}f"       ],
    [ 1.234567e-13, "{{sign}}123{{decimal}}456700{{sep}}f"      ],
    [ 1.234567e-12, "{{sign}}1{{decimal}}234567{{sep}}p"        ],
    [ 1.234567e-11, "{{sign}}12{{decimal}}345670{{sep}}p"       ],
    [ 1.234567e-10, "{{sign}}123{{decimal}}456700{{sep}}p"      ],
    [ 1.234567e-9,  "{{sign}}1{{decimal}}234567{{sep}}n"        ],
    [ 1.234567e-8,  "{{sign}}12{{decimal}}345670{{sep}}n"       ],
    [ 1.234567e-7,  "{{sign}}123{{decimal}}456700{{sep}}n"      ],
    [ 1.234567e-6,  "{{sign}}1{{decimal}}234567{{sep}}u"        ],
    [ 1.234567e-5,  "{{sign}}12{{decimal}}345670{{sep}}u"       ],
    [ 1.234567e-4,  "{{sign}}123{{decimal}}456700{{sep}}u"      ],
    [ 1.234567e-3,  "{{sign}}1{{decimal}}234567{{sep}}m"        ],
    [ 1.234567e-2,  "{{sign}}1{{decimal}}234567{{sep}}c"        ],
    [ 1.234567e-1,  "{{sign}}1{{decimal}}234567{{sep}}d"        ],
    [ 1.234567e-0,  "{{sign}}1{{decimal}}234567{{sep}}"         ],
    [ 1.234567e1,   "{{sign}}1{{decimal}}234567{{sep}}da"       ],
    [ 1.234567e2,   "{{sign}}1{{decimal}}234567{{sep}}h"        ],
    [ 1.234567e3,   "{{sign}}1{{decimal}}234567{{sep}}k"        ],
    [ 1.234567e4,   "{{sign}}12{{decimal}}345670{{sep}}k"       ],
    [ 1.234567e5,   "{{sign}}123{{decimal}}456700{{sep}}k"      ],
    [ 1.234567e6,   "{{sign}}1{{decimal}}234567{{sep}}M"        ],
    [ 1.234567e7,   "{{sign}}12{{decimal}}345670{{sep}}M"       ],
    [ 1.234567e8,   "{{sign}}123{{decimal}}456700{{sep}}M"      ],
    [ 1.234567e9,   "{{sign}}1{{decimal}}234567{{sep}}G"        ],
    [ 1.234567e10,  "{{sign}}12{{decimal}}345670{{sep}}G"       ],
    [ 1.234567e11,  "{{sign}}123{{decimal}}456700{{sep}}G"      ],
    [ 1.234567e12,  "{{sign}}1{{decimal}}234567{{sep}}T"        ],
    [ 1.234567e13,  "{{sign}}12{{decimal}}345670{{sep}}T"       ],
    [ 1.234567e14,  "{{sign}}123{{decimal}}456700{{sep}}T"      ],
    [ 1.234567e15,  "{{sign}}1{{decimal}}234567{{sep}}P"        ],
    [ 1.234567e16,  "{{sign}}12{{decimal}}345670{{sep}}P"       ],
    [ 1.234567e17,  "{{sign}}123{{decimal}}456700{{sep}}P"      ],
    [ 1.234567e18,  "{{sign}}1{{decimal}}234567{{sep}}E"        ],
    [ 1.234567e19,  "{{sign}}12{{decimal}}345670{{sep}}E"       ],
    [ 1.234567e20,  "{{sign}}123{{decimal}}456700{{sep}}E"      ],
    [ 1.234567e21,  "{{sign}}1{{decimal}}234567{{sep}}Z"        ],
    [ 1.234567e22,  "{{sign}}12{{decimal}}345670{{sep}}Z"       ],
    [ 1.234567e23,  "{{sign}}123{{decimal}}456700{{sep}}Z"      ],
    [ 1.234567e24,  "{{sign}}1{{decimal}}234567{{sep}}Y"        ],
    [ 1.234567e25,  "{{sign}}12{{decimal}}345670{{sep}}Y"       ],
    [ 1.234567e26,  "{{sign}}123{{decimal}}456700{{sep}}Y"      ],
    [ 1.234567e27,  "{{sign}}1234{{decimal}}567000{{sep}}Y"     ],
    [ 1.234567e28,  "{{sign}}12345{{decimal}}670000{{sep}}Y"    ],
    [ 1.234567e29,  "{{sign}}123456{{decimal}}700000{{sep}}Y"   ],
    [ 1.234567e30,  "{{sign}}1234567{{decimal}}000000{{sep}}Y"  ]
    //@formatter:on
];
const thousands = [];
items.forEach(
    (item, index) =>
    {
        const _item = [].concat(item);
        if (_item[0] === 1.234567e-2)
        {
            _item[1] = "{{sign}}12{{decimal}}345670{{sep}}m";
        }
        else if (_item[0] === 1.234567e-1)
        {
            _item[1] = "{{sign}}123{{decimal}}456700{{sep}}m";
        }
        else if (_item[0] === 1.234567e1)
        {
            _item[1] = "{{sign}}12{{decimal}}345670{{sep}}";
        }
        else if (_item[0] === 1.234567e2)
        {
            _item[1] = "{{sign}}123{{decimal}}456700{{sep}}";
        }
        thousands[index] = _item;
    }
);
/**
 * Verificación de las opciones de configuración.
 *
 * @param {Array[]} items Listado de elementos con las validaciones y datos de la prueba.
 * @param {Boolean} thousands Si es `true` se verifica que solamente se usen múltiplos de mil.
 */
function testConfig(items, thousands = false)
{
    for (let _sign of [-1, 1])
    {
        for (let _decimal of ['.', ','])
        {
            for (let _separator of ['', ' ', '-', '__'])
            {
                for (let _item of items)
                {
                    ++assertions;
                    const _actual   = siNumber(
                        _sign * _item[0],
                        {
                            decimal   : _decimal,
                            precision : 6,
                            separator : _separator,
                            thousands : thousands
                        }
                    );
                    const _expected = _item[1]
                        .replace('{{sign}}', _sign > 0 ? '' : '-')
                        .replace('{{decimal}}', _decimal)
                        .replace('{{sep}}', _separator);
                    assert.equal(_expected, _actual, `Decimal: [${_decimal}] -- Sep: [${_separator}] :: ${_expected} !== ${_actual}`);
                }
            }
        }
    }
}
/**
 * Verifica que se lancen las excepciones si se usan valores no numéricos.
 */
function testTypeError()
{
    [true, 'test', [1, 2], null, {}, undefined].forEach(
        value => assert.throws(
            () =>
            {
                ++assertions;
                siNumber(value)
            },
            err => err instanceof TypeError && err.message === `You MUST specify a finite number, not [${typeof value} = ${value}]`
        )
    );
}
//------------------------------------------------------------------------------
// Inicio de las pruebas
//------------------------------------------------------------------------------
let assertions  = 0;
const startTime = new Date().getTime();
testConfig(items);
testConfig(thousands, true);
testTypeError();
//
// 2.5 centímetros, sin uso de miles y luego forzando el prefijo de miles.
++assertions;
assert.equal(siNumber(0.025, { precision : 1, decimal : ',' }) + 'm', '2,5cm');
++assertions;
assert.equal(siNumber(0.025, { precision : 1, decimal : ',', thousands : true }) + 'm', '25,0mm');
// 5 milisegundos
++assertions;
assert.equal(siNumber(0.005, { precision : 1, decimal : ',', thousands : true }) + 's', '5,0ms');
//
console.log('Total assertions : %d', assertions);
console.log('Time elapsed     : %ss', siNumber((new Date().getTime() - startTime) / 1000, 0, ',', '', true));
