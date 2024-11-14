
class CostAccountingSystem {
    constructor() {
        this.costCenters = [];
        this.expenses = [];
    }
    addCostCenter(name, budget) {
        this.costCenters.push({ name, budget });
    }
    recordExpense(centerName, amount, category) {
        const center = this.costCenters.find(c => c.name === centerName);
        if (center) {
            center.budget -= amount;
            this.expenses.push({ centerName, amount, category });
        }
    }
    generateReport() {
        return this.expenses;
    }
}
/* Add more JavaScript from your original file here */
