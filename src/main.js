import Vue from 'vue';

new Vue({
    el: '#app',
    data: {
        budget: {
            income: [

            ],
            expenses: [

            ]
        },
        selected: 'inc',
        description: '',
        number: null,

    },
    computed: {
        budgetDisplayed() {
            let number = this.income - this.expenses;
            return new Intl.NumberFormat('fr-BE', { style: 'currency', currency: 'EUR' }).format(number);
        },
        income() {
            var incomes = this.budget['income'];
            var income = 0;
            incomes.forEach(function (element) {
                income += element['value'];
            })

            return income;
        },
        expenses() {
            var expenses = this.budget['expenses'];
            var expense = 0;
            expenses.forEach(function (element) {
                expense += element['value'];
            })

            return expense;
        },
        getDate() {
            const date = new Date();
            const createdDate = date.now;
            return new Intl.DateTimeFormat('fr-BE', { month: 'long', year: 'numeric' }).format(createdDate);
        },
    },
    methods: {
        add() {
            if (!this.number || !this.description) {
                return false;
            }
            if (this.selected === 'inc') {
                var newInc = {
                    description: this.description,
                    value: parseInt(this.number, 10)
                }
                this.budget['income'].push(newInc);
            }

            if (this.selected === 'exp') {
                var newInc = {
                    description: this.description,
                    value: parseInt(this.number, 10)
                }
                this.budget['expenses'].push(newInc);
            }

            this.description = '';
            this.number = '';
        },
        percent(number) {
            return this.income ? Math.round((number / this.income) * 100) + '%' : '0%';


        },
        deleteEntry(key, index) {
            this.budget[key].splice(index, 1);
        }
    }
});

