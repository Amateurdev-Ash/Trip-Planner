// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Budget Range Display
    const budgetInput = document.getElementById('budget');
    const budgetValue = document.getElementById('budget-value');

    budgetInput.addEventListener('input', () => {
        budgetValue.textContent = `$${budgetInput.value}`;
    });

    // Budget Estimator
    const totalMembersInput = document.getElementById('total-members');
    const estimatedCostDisplay = document.getElementById('estimated-cost');
    const costPerPersonDisplay = document.getElementById('cost-per-person');

    totalMembersInput.addEventListener('input', () => {
        const estimatedCost = budgetInput.value;
        const totalMembers = totalMembersInput.value;
        
        if (totalMembers > 0) {
            costPerPersonDisplay.textContent = `$${(estimatedCost / totalMembers).toFixed(2)}`;
        } else {
            costPerPersonDisplay.textContent = `$0`;
        }
    });

    // Itinerary Builder
    const itineraryForm = document.getElementById('itinerary-form');
    const itineraryList = document.getElementById('itinerary-list');

    itineraryForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const dayInput = document.getElementById('day');
        const activityInput = document.getElementById('activity');

        const listItem = document.createElement('li');
        listItem.textContent = `Day ${dayInput.value}: ${activityInput.value}`;

        itineraryList.appendChild(listItem);

        dayInput.value = '';
        activityInput.value = '';
    });
});
