const formulario = document.getElementById("formulario")
const inputCantidad = document.getElementById("inputCantidad")
const inputPUnitario = document.getElementById("inputPUnitario")
const inputDescripcion = document.getElementById("inputDescripcion")
const inputPTotal = document.getElementById("inputPTotal")
const tbody = document.getElementById("tbody")

let resumen = []

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    let objResumen = {
        cantidad: inputCantidad.value,
        descripcion: inputDescripcion.value,
        precioUnitario: inputPUnitario.value,
        precioTotal: inputPTotal.value
    }

    resumen.push(objResumen)

    inputCantidad.value = ""
    inputDescripcion.value = ""
    inputPUnitario.value = ""
    inputPTotal.value = ""

    redibujarTbody(resumen)
})

const redibujarTbody = () => {
    tbody.innerHTML = ""

    let tbodyFalso = new DocumentFragment()

    resumen.forEach((res, i) => {
        let tr = document.createElement("tr")

        let tdCantidad = document.createElement("td")
        tdCantidad.innerText = res.cantidad

        let tdDescripcion = document.createElement("td")
        tdDescripcion.innerText = res.descripcion

        let tdPUnitario = document.createElement("td")
        tdPUnitario.innerText = res.precioUnitario

        let tdPTotal = document.createElement("td")
        tdPTotal.innerText = res.precioTotal

        let tdAcciones = document.createElement("td")
        let btnEliminar = document.createElement("button")

        btnEliminar.innerText = "Eliminar"
        btnEliminar.onclick = () => {
            // eliminarResumen(i)
        }

        tdAcciones.appendChild(btnEliminar)

        tr.appendChild(tdCantidad)
        tr.appendChild(tdDescripcion)
        tr.appendChild(tdPUnitario)
        tr.appendChild(tdPTotal)

        tbodyFalso.appendChild(tr)
    })

    tbody.appendChild(tbodyFalso)
}