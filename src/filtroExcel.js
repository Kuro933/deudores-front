const exceljs = require('exceljs');
const workbook = new exceljs.Workbook();

workbook.creator = 'Me';
workbook.created = new Date(2021, 9, 1);



async function Leer(msg, min, max) {
    const datos = await workbook.xlsx.load(msg);
    let cantidad = datos.worksheets[0].rowCount;
    let columnas = datos.worksheets[0].columnCount;
    var email = "No cumple el formato para ser un email valido";
    let confirmados = [];
    let rechazados = [];
    var emails_totales = [];
    console.log("rows y columnas", [cantidad, columnas]);
    for (var i = 1; i <= cantidad; i++) {
        var email = "No cumple el formato para ser un email valido";
        var nombre;
        var dic = [];
        var identificacion;
        var deuda;
        var datoEmail;
        var ignorar = false;
        var existe_email = false;
        existe_email = false;
        if (datos.worksheets[0].getRow(i).getCell(12).model.value !== undefined) {
            if (datos.worksheets[0].getRow(i).getCell(12).model.value >= 5000) {
                nombre = datos.worksheets[0].getRow(i).getCell(2).model.value + "#?" + datos.worksheets[0].getRow(i).getCell(3).model.value;
                identificacion = datos.worksheets[0].getRow(i).getCell(4).model.value;
                deuda = datos.worksheets[0].getRow(i).getCell(12).model.value;
                datoEmail = datos.worksheets[0].getRow(i).getCell(5).model.value;
                if (datoEmail !== undefined) {
                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }
                } else if (datos.worksheets[0].getRow(i).getCell(8).model.value !== undefined) {
                    datoEmail = datos.worksheets[0].getRow(i).getCell(8).model.value;

                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }

                } else if (datos.worksheets[0].getRow(i).getCell(10).model.value !== undefined) {
                    datoEmail = datos.worksheets[0].getRow(i).getCell(10).model.value;
                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }

                } else {
                    email = "No tiene Email";
                }

            } else {
                if (i !== 1) {
                    ignorar = true
                }
            }
        } else {
            nombre = datos.worksheets[0].getRow(i).getCell(2).model.value;
            identificacion = datos.worksheets[0].getRow(i).getCell(3).model.value;
            datoEmail = datos.worksheets[0].getRow(i).getCell(4).model.value;
            if (datos.worksheets[0].getRow(i).getCell(11).model.value >= 5000) {
                deuda = datos.worksheets[0].getRow(i).getCell(11).model.value;
                if (datoEmail !== undefined) {
                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }
                } else if (datos.worksheets[0].getRow(i).getCell(7).model.value !== undefined) {
                    datoEmail = datos.worksheets[0].getRow(i).getCell(7).model.value;
                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }

                } else if (datos.worksheets[0].getRow(i).getCell(9).model.value !== undefined) {
                    datoEmail = datos.worksheets[0].getRow(i).getCell(9).model.value;
                    if (datoEmail.includes("/")) {
                        var emails = datoEmail.split("/");
                        emails.forEach(element => {
                            if (element.match(emailFormat)) {
                                email = element;
                                if (Object.keys(emails_totales).length !== 0) {
                                    emails_totales.forEach(element => {
                                        if (element.email === email && element.deuda === deuda) {
                                            existe_email = true;
                                        }
                                    });
                                    emails_totales.push({ email: email, deuda: deuda });
                                } else {
                                    emails_totales.push({ email: email, deuda: deuda });
                                }
                            }
                        });
                    } else {
                        if (datoEmail.match(emailFormat)) {
                            email = datoEmail;
                            if (Object.keys(emails_totales).length !== 0) {
                                emails_totales.forEach(element => {
                                    if (element.email === email && element.deuda === deuda) {
                                        existe_email = true;
                                    }
                                });
                                emails_totales.push({ email: email, deuda: deuda });
                            } else {
                                emails_totales.push({ email: email, deuda: deuda });
                            }
                        }
                    }

                } else {
                    email = "No tiene Email";
                }
            } else {
                if (i !== 1) {
                    ignorar = true;
                }
            }
        }
        if (!ignorar) {
            if (i === 1) {
                dic.push("NOMBRE Y APELLIDO");
                dic.push("IDENTIFICACION");
                dic.push("EMAIL");
                dic.push("DEUDA");
                confirmados.push(dic);
                rechazados.push(dic);
            } else if (nombre !== undefined && deuda !== undefined) {
                if (email === "No tiene Email" || email === "No cumple el formato para ser un email valido" || existe_email) {
                    dic.push(nombre);
                    dic.push(identificacion);
                    dic.push(email);
                    dic.push(deuda);
                    rechazados.push(dic);
                } else {
                    dic.push(nombre);
                    dic.push(identificacion);
                    dic.push(email);
                    dic.push(deuda);
                    confirmados.push(dic);
                }


            }

        }
    }
    let response = await confirmoPromesis({ datos: confirmados, excel: "confirmados.xlsx", min: min, max:max });
    rechazo({ datos: rechazados, excel: "rechazados.xlsx" });
    return response;
}

async function confirmoPromesis(msg) {
    return new Promise(async function (resolve, reject) {
        console.log("cantidad de elementos en", [msg.excel, msg.datos.length]);
        const wb = new exceljs.Workbook();
        var ws = wb.addWorksheet('Deuda por responsable');
        for (let n = 0; n < msg.datos.length; n++) {
            msg.datos[n].forEach((element, i) => {
                ws.getRow(n + 1).getCell(i + 1).value = element;
            });
        }
        wb.xlsx.writeBuffer("confirmados.xlsx").then(async (datos) => { let respo = await rangoEntrePromesis(datos, msg.min, msg.max);  resolve({respo: respo})});
    });
}


async function rechazo(msg) {
    console.log("cantidad de elementos en", [msg.excel, msg.datos.length]);
    const wb = new exceljs.Workbook();
    var ws = wb.addWorksheet('Deuda por responsable');
    for (let n = 0; n < msg.datos.length; n++) {
        msg.datos[n].forEach((element, i) => {
            ws.getRow(n + 1).getCell(i + 1).value = element;
        });
    }
    wb.xlsx.writeBuffer("rechazados.xlsx").then(() => { });
}

async function rangoEntrePromesis(data,min,max) {
    return new Promise(async function (resolve, reject) {
        const datitos = await workbook.xlsx.load(data);
        let cantidad = datitos.worksheets[0].rowCount;
        let columnas = datitos.worksheets[0].columnCount;
        let datos = [];
        let primero = true;
        console.log("rows y columnas", [cantidad, columnas]);
        for (let k = 1; k <= cantidad; k++) {
            let diction = [];
            if (primero) {
                diction.push("NOMBRE Y APELLIDO");
                diction.push("IDENTIFICACION");
                diction.push("EMAIL");
                diction.push("DEUDA");
                datos.push(diction);
                primero = false;
                diction = [];
            }
    
            if (datitos.worksheets[0].getRow(k).getCell(4).model.value >= min && datitos.worksheets[0].getRow(k).getCell(4).model.value <= max) {
                var nombre = datitos.worksheets[0].getRow(k).getCell(1).model.value;
                var identificacion = datitos.worksheets[0].getRow(k).getCell(2).model.value;
                var deuda = datitos.worksheets[0].getRow(k).getCell(4).model.value;
                var email = datitos.worksheets[0].getRow(k).getCell(3).model.value;
                diction.push(nombre);
                diction.push(identificacion);
                diction.push(email);
                diction.push(deuda);
                datos.push(diction);
            }
        }
    
        const wb = new exceljs.Workbook();
        var ws = wb.addWorksheet('Deuda por responsable');
        for (let n = 0; n < datos.length; n++) {
            datos[n].forEach((element, i) => {
                ws.getRow(n+1).getCell(i + 1).value = element;
            });
        }
        wb.xlsx.writeBuffer(`filtro ${min} a ${max}.xlsx`).then((si) => { resolve({resp: si})});
    });
}

async function prepararMailAdjunto(min, max) {
    const datitos = await workbook.xlsx.readFile(`./filtro ${min} a ${max}.xlsx`);
    let cantidad = datitos.worksheets[0].rowCount;
    let columnas = datitos.worksheets[0].columnCount;
    var datos = [];
    // var nombre_json = "preparado pa mail.json";
    console.log("rows y columnas", [cantidad, columnas]);
    
    for (let k = 1; k <= cantidad; k++) {
        var diction = [];
        var nombre = datitos.worksheets[0].getRow(k).getCell(1).model.value;
        var identificacion = datitos.worksheets[0].getRow(k).getCell(2).model.value;
        var email = datitos.worksheets[0].getRow(k).getCell(3).model.value;
        diction.push(nombre);
        diction.push(identificacion);
        diction.push(email);
        datos.push(diction);
    }
    // fs.writeFileSync(nombre_json, JSON.stringify(datos), "utf8", (err) => { if (err) throw err });

}

var emailFormat = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
// var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default Leer;