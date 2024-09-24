
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


    let historyNewDiv = document.createElement('div')
    historyNewDiv.className = 'bg-white p-4 mt-4 mb-4 rounded-2xl border-2 border-gray-500 space-y-4'

    historyNewDiv.innerHTML = `
    <p class="font-bold text-xl">${noakhaliInput.toFixed(2)} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p class="text-gray-400 text-sm">${new Date()}</p>
    `
    const historyContainer = document.getElementById('historyStatus')
    historyContainer.insertBefore(historyNewDiv, historyContainer.firstChild)


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



let getHistoryBtn = document.getElementById('history-btn')
let getDonateBtn = document.getElementById('donate-btn')
getHistoryBtn.addEventListener('click', function () {
    getHistoryBtn.classList.add("bg-[#B4F461]", "text-black", "font-bold");
    getHistoryBtn.classList.remove("hover:bg-white")
    getHistoryBtn.style.backgroundColor = "#B4F461";
    getHistoryBtn.style.color = "black";

    getDonateBtn.classList.remove("bg-[#B4F461]", "text-black", "font-bold")
    getDonateBtn.classList.remove("hover:bg-black")
    getDonateBtn.style.backgroundColor = "white";

    document.getElementById('fullSection').classList.add('hidden')

})
