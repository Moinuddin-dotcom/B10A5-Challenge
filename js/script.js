
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
    <p class="font-bold text-xl">${noakhaliInput.toFixed(2)} Taka is Donate for Flood at Noakhali, Bangladesh</p>
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



    let historyNewDivForFeni = document.createElement('div')
    historyNewDivForFeni.className = 'bg-white p-4 mt-4 mb-4 rounded-2xl border-2 border-gray-500 space-y-4'

    historyNewDivForFeni.innerHTML = `
    <p class="font-bold text-xl">${feniInput.toFixed(2)} Taka is Donate for Flood Relief in Feni,Bangladesh</p>
    <p class="text-gray-400 text-sm">${new Date()}</p>
    `
    const historyContainerForFeni = document.getElementById('historyStatus2')
    historyContainerForFeni.insertBefore(historyNewDivForFeni, historyContainerForFeni.firstChild)

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


    let historyNewDivForQuota = document.createElement('div')
    historyNewDivForQuota.className = 'bg-white p-4 mt-4 mb-4 rounded-2xl border-2 border-gray-500 space-y-4'

    historyNewDivForQuota.innerHTML = `
    <p class="font-bold text-xl">${quotaInput.toFixed(2)} Taka is Aid for Injured in the Quota Movement</p>
    <p class="text-gray-400 text-sm">${new Date()}</p>
    `
    const historyContainerForQuota = document.getElementById('historyStatus3')
    historyContainerForQuota.insertBefore(historyNewDivForQuota, historyContainerForQuota.firstChild)

})



// btn color adding



const getHistoryBtn = document.getElementById('history-btn')
const getDonateBtn = document.getElementById('donate-btn')

getHistoryBtn.addEventListener('click', function () {
    getHistoryBtn.classList.add("bg-[#B4F461]", "text-black", "font-bold");
    getHistoryBtn.classList.remove("hover:bg-white")
    getHistoryBtn.style.backgroundColor = "#B4F461";
    getHistoryBtn.style.color = "black";



    getDonateBtn.classList.remove("bg-[#B4F461]", "text-black", "font-bold")
    getDonateBtn.classList.remove("hover:bg-black")
    getDonateBtn.style.backgroundColor = "white";

    document.getElementById('fullSection').classList.add('hidden')

    document.getElementById('historyStatus').classList.remove('hidden')
    document.getElementById('historyStatus2').classList.remove('hidden')
    document.getElementById('historyStatus3').classList.remove('hidden')
})



getDonateBtn.addEventListener('click', function () {
    getDonateBtn.classList.add("bg-[#B4F461]", "text-black", "font-bold")
    getDonateBtn.classList.remove("hover:bg-[#B4F461]")
    getDonateBtn.style.backgroundColor = '#B4F461'
    getDonateBtn.style.color = 'black'

    getHistoryBtn.classList.remove("bg-[#B4F461]", "text-black", "font-bold")
    getHistoryBtn.style.backgroundColor = "white";
    getHistoryBtn.style.color = "gray"


    document.getElementById('fullSection').classList.remove('hidden')

    document.getElementById('historyStatus').classList.add('hidden')
    document.getElementById('historyStatus2').classList.add('hidden')
    document.getElementById('historyStatus3').classList.add('hidden')
})
