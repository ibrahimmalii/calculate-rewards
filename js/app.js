//************** Define All Inputs ****************//
const vendor = document.getElementById('vendor')
const media = document.getElementById('media')
const corp = document.getElementById('corp')
const teamProject = document.getElementById('teamProject')


// About brand section
const brandContainer = document.getElementsByClassName('brandContainer')[0]
const targetAllInputs = document.querySelectorAll('.formContainer__input')
const brandName = document.getElementById('brandName')
const brandReward = document.getElementById('brandReward')
const brandValue = document.getElementById('brandValue')

const unlimitedReward = document.getElementById('unlimitedReward')
const unlimitedValue = document.getElementById('unlimitedValue')

const lifetimeReward = document.getElementById('lifetimeReward')
const lifetimeValue = document.getElementById('lifetimeValue')

// Target brands buttos 
const targetAllButtons = document.querySelectorAll('.mainContainer__button')






//************* To measure unlimited rewards and lifetime rewards *************//

const getSumResult = (inputOne, inputTwo, inputThree, inputFour) => {
    return +inputOne + +inputTwo + +inputThree + +inputFour
}

const calculateUnlimitedRewards = (sum) => {
    return sum * 1.1
}

const calculateLifetimeRewards = (sum) => {
    return sum * 1.2
}

const checkIfValuesExist = (inputOne, inputTwo, inputThree, inputFour) => {
    return inputOne && inputTwo && inputThree && inputFour
}

//*************** To Measure Unlimited And LifeTime Rewards *************//
const measureResults = (valueOne, valueTwo, valueThree, valueFour) => {
    if (checkIfValuesExist(valueOne, valueTwo, valueThree, valueFour)) {
        let summation = getSumResult(vendor.value, media.value, corp.value, teamProject.value)
        unlimitedReward.value = calculateUnlimitedRewards(summation)
        unlimitedValue.innerText = `$${calculateUnlimitedRewards(summation).toFixed(1)}`
        lifetimeReward.value = calculateLifetimeRewards(summation)
        lifetimeValue.innerText = `$${calculateLifetimeRewards(summation).toFixed(1)}`
    }
}

const calculateAllResult = () => {
    return measureResults(vendor.value, media.value, corp.value, teamProject.value)
}


//****************** Add Events To All Inputs *************//
targetAllInputs.forEach(item => item.addEventListener('keyup', calculateAllResult))


//******************** To Measure Branded Values *****************/
const measureBranded = (e) => {
    if (checkIfValuesExist(vendor.value, media.value, corp.value, teamProject.value)) {
        brandContainer.style.visibility = 'inherit'
        let summation = getSumResult(vendor.value, media.value, corp.value, teamProject.value)

        switch (e.target.value) {
            case 'Brex':
                brandName.innerText = 'Brex Business Card'
                brandReward.value = summation * 0.3
                brandValue.innerText = `$${(summation * 0.3).toFixed(1)}`
                break
            case 'Stripe':
                brandName.innerText = 'Stripe Business Card'
                brandReward.value = summation * 2.9
                brandValue.innerText = `$${(summation * 2.9).toFixed(1)}`
                break
            case 'Amex':
                brandName.innerText = 'Amex Business Card'
                brandReward.value = summation * 1.3
                brandValue.innerText = `$${(summation * 1.3).toFixed(1)}`
                break
            default:
                console.log('invalid values')
        }
    }
}

targetAllButtons.forEach(item => item.addEventListener('click', measureBranded))