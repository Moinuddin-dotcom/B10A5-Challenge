
document.getElementById('noakhaliDonateBtn').addEventListener('click', function () {
    const noakhaliInput = parseFloat(document.getElementById('noaInputBtn').value)
    if (noakhaliInput > 0) {
        let changeNumber = parseFloat(document.getElementById('noakhaliTotalAmount').innerText)
        const newChange = changeNumber + noakhaliInput
        document.getElementById('noakhaliTotalAmount').innerText = newChange.toFixed(2)

        const openingBlance = parseFloat(document.getElementById('getOpeningBlance').innerText)
        const newOpeningBlance = openingBlance - noakhaliInput
        document.getElementById('getOpeningBlance').innerText = newOpeningBlance.toFixed(2)

        document.getElementById('my_modal_1').showModal()
    }
    else {
        alert('Input valid Amount')
    }
})

document.getElementById('feniDonateBtn').addEventListener('click', function () {
    const feniInput = parseFloat(document.getElementById('feniInputBtn').value)
    if (feniInput > 0) {
        const feniChangeNumber = parseFloat(document.getElementById('feniTotalAmount').innerText)
        const feniNewNumber = feniChangeNumber + feniInput
        document.getElementById('feniTotalAmount').innerText = feniNewNumber.toFixed(2)

        const openingSpell = parseFloat(document.getElementById('getOpeningBlance').innerText)
        const newOpeningSpell = openingSpell - feniInput
        document.getElementById('getOpeningBlance').innerText = newOpeningSpell.toFixed(2)
        document.getElementById('my_modal_2').showModal()

    } else {
        alert('Input valid Amount')
    }
})


document.getElementById('quotaDonateBtn').addEventListener('click', function () {
    const quotaInput = parseFloat(document.getElementById('quotaInputBtn').value)
    if (quotaInput > 0) {
        const quotaChangeNumber = parseFloat(document.getElementById('quotaTotalAmount').innerText)
        const quotaNewNumber = quotaChangeNumber + quotaInput
        document.getElementById('quotaTotalAmount').innerText = quotaNewNumber.toFixed(2)

        const openingAmount = parseFloat(document.getElementById('getOpeningBlance').innerText)
        const newOpeningAmount = openingAmount - quotaInput
        document.getElementById('getOpeningBlance').innerText = newOpeningAmount.toFixed(2)
        document.getElementById('my_modal_3').showModal()

    } else {
        alert('Input valid Amount')
    }
})



// btn color adding

// document.getElementById('donate-btn').onclick.style.backgroundColor = 'green'