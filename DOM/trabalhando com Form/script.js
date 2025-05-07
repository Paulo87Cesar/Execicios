const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
    ev.preventDefault()

    const name = document.querySelector("input[name='name']").value
    const address = document.querySelector("input[name='address']").value
    const breadType = document.querySelector("select[name='breadType']").value
    const main = document.querySelector("input[name='main']").value
    const observation = document.querySelector("textarea[name='observations']").value

    let salada = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function(item){
        salada += '-' + item.value + '\n' 
    })
    alert(
        "Pedido Realizado!"+
      "\nNome do Cliente: " +name+
      "\nEndereço de Entrega: " +address+
      "\nTipo de pão: " +breadType+
      "\nRecheio: \n- " +main+ "\n" + salada +
      "Observações: " + observation
    )

})