random1 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>1 665 ÷ 1 =</td> <td><input id="act1num0" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>27 000 ÷ 1 000 =</td> <td><input id="act1num10" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>3 973 ÷ 1 =</td> <td><input id="act1num1" class="inputfraccciones" style="width: 70px;"></input></td>'],
    ['<td><b style="color: #005ca4;"><li></li></b></td> <td>470 ÷ 10 =</td> <td><input id="act1num2" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 850 ÷ 10 =</td> <td><input id="act1num3" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>4 100 ÷ 10 =</td> <td><input id="act1num4" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>600 ÷ 100 =</td> <td><input id="act1num5" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>1200 ÷ 100 =</td> <td><input id="act1num6" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 300 ÷ 100 =</td> <td><input id="act1num7" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>2 000 ÷ 1 000 =</td> <td><input id="act1num8" class="inputfraccciones" style="width: 70px;"></input></td>'],
    [' <td><b style="color: #005ca4;"><li></li></b></td> <td>15 000 ÷ 1 000 =</td> <td><input id="act1num9" class="inputfraccciones" style="width: 70px;"></input></td>'],

];
var act01Txt = document.getElementsByClassName('act1class');

random1.sort(f_randomico);
for (i = 0; i < act01Txt.length; i++) {
    $('#' + act01Txt[i].id).html(random1[i]);
}

function pregunta1() {
    var respact2 = ['1665', '3973', '47', '285', '410', '6', '12', '23', '2', '15', '27', ];
    var cont = 0;
    for (var i = 0; i < 11; i++) {
        var res = $('#act1num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act1num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act1num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 11;
    $('#nota1').val(parseFloat(total).toFixed(2));

}
//////////pregunta2////////////////
random2 = [
    [' <td>8000</td>' +
        '<td><input id="act2num0" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num1" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num2" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num3" class="form-control sinEspacios soloNumeros"></input></td>'
    ],
    [' <td>75000</td>' +
        '<td><input id="act2num4" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num5" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num6" class="form-control sinEspacios soloNumeros"></input></td>' +
        ' <td><input id="act2num7" class="form-control sinEspacios soloNumeros"></input></td>'
    ],
    [' <td>60000</td>' +
        '<td><input id="act2num8" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num9" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num10" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num11" class="form-control sinEspacios soloNumeros"></input></td>'
    ],
    [' <td>900000</td>' +
        '<td><input id="act2num12" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num13" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num14" class="form-control sinEspacios soloNumeros"></input></td>' +
        '<td><input id="act2num15" class="form-control sinEspacios soloNumeros"></input></td>'
    ],

];
var act02Txt = document.getElementsByClassName('act2class');

random2.sort(f_randomico);
for (i = 0; i < act02Txt.length; i++) {
    $('#' + act02Txt[i].id).html(random2[i]);
}

function pregunta2() {
    var respact2 = ['8000', '800', '80', '8', '75000', '7500', '750', '75', '60000', '6000', '600', '60', '900000', '90000', '9000', '900', ];
    var cont = 0;
    for (var i = 0; i < 16; i++) {
        var res = $('#act2num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act2num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act2num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 16;
    $('#nota2').val(parseFloat(total).toFixed(2));

}
//////////////////////////
random3 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>¿Qué sucede cuando se divide 2 000 por 100?</td>' +
        '<td><select class="form-control" id="sel0">' +
        '<option>----selecciona----</option>' +
        '<option>Se quitan dos ceros al dividendo.</option>' +
        '<option>Se quitan tres ceros al dividendo.</option>' +
        '</select></td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>¿Qué sucede cuando se divide 900 por 100?</td>' +
        '<td><select class="form-control" id="sel1">' +
        '<option>----selecciona----</option>' +
        '<option>Se quitan dos ceros al dividendo.</option>' +
        '<option>Se quitan tres ceros al dividendo.</option>' +
        '</select></td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>¿Qué sucede cuando se divide 1 000 por 1 000?</td>' +
        '<td><select class="form-control" id="sel2">' +
        '<option>----selecciona----</option>' +
        '<option>Se quitan dos ceros al dividendo.</option>' +
        '<option>Se quitan tres ceros al dividendo.</option>' +
        '</select></td>'
    ],

];
var act03Txt = document.getElementsByClassName('act3class');

random3.sort(f_randomico);
for (i = 0; i < act03Txt.length; i++) {
    $('#' + act03Txt[i].id).html(random3[i]);
}

function pregunta3() {
    var respact2 = ['Se quitan dos ceros al dividendo.', 'Se quitan dos ceros al dividendo.', 'Se quitan tres ceros al dividendo.', ];
    var cont = 0;
    for (var i = 0; i < 3; i++) {
        var res = $('#sel' + [i] + ' option:selected').text();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#sel' + [i] + '').css("background", "#00e600");
        } else {
            $('#sel' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 3;
    $('#nota3').val(parseFloat(total).toFixed(2));

}
//////////////////////////
random4 = [
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>3 190</td>' +
        '<td>÷</td>' +
        '<td><input id="act4num0" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>' +
        '<td>=</td>' +
        '<td>319</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td><input id="act4num1" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>' +
        '<td>÷</td>' +
        '<td>100</td>' +
        '<td>=</td>' +
        '<td>597</td>'
    ],
    ['<td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>8 000</td>' +
        '<td>÷</td>' +
        '<td>100</td>' +
        '<td>=</td>' +
        '<td><input id="act4num2" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>10 000</td>' +
        '<td>÷</td>' +
        '<td><input id="act4num3" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>' +
        '<td>=</td>' +
        '<td>10</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td><input id="act4num4" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>' +
        '<td>÷</td>' +
        '<td>1000</td>' +
        '<td>=</td>' +
        '<td>632</td>'
    ],
    [' <td><b style="color: #005ca4;"><li></li></b></td>' +
        '<td>207 000</td>' +
        '<td>÷</td>' +
        '<td><input id="act4num5" class="inputfraccciones soloNumeros sinEspacios" style="width: 70px;"></input></td>' +
        '<td>=</td>' +
        '<td>207 000</td>'
    ],

];
var act04Txt = document.getElementsByClassName('act4class');

random4.sort(f_randomico);
for (i = 0; i < act04Txt.length; i++) {
    $('#' + act04Txt[i].id).html(random4[i]);
}

function pregunta4() {
    var respact2 = ['10', '59700', '80', '1000', '632000', '1', ];
    var cont = 0;
    for (var i = 0; i < 6; i++) {
        var res = $('#act4num' + [i] + '').val().toLowerCase();
        if (respact2[i] == res) {
            cont = cont + 1;
            $('#act4num' + [i] + '').css("background", "#00e600");
        } else {
            $('#act4num' + [i] + '').css("background", "#ff6666");
        }

    }
    var total = (cont * 2.5) / 6;
    $('#nota4').val(parseFloat(total).toFixed(2));

}

function NotaFinal() {
    pregunta1();
    pregunta2();
    pregunta3();
    pregunta4();

    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var nota4 = document.getElementById('nota4').value;



    var total = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);


    $('#txtNota').html(total.toFixed(2));
    document.getElementById('bt_comprobar').disabled = true;
    $('input').attr("disabled", true);
    $('#txtAlumno').attr("disabled", false);


}
