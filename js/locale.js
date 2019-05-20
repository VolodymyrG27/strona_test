const locations = [
    {
        name: 'qwerty1',
        address: 'asdaf'
    },
    {
        name: 'qwerty2',
        address: 'asdaf'
    },
    {
        name: 'qwerty3',
        address: 'asdaf'
    },
    {
        name: 'qwerty4',
        address: 'asdaf'
    },
    {
        name: 'qwerty5',
        address: 'asdaf'
    },
    {
        name: 'qwerty6',
        address: 'asdaf'
    }
];

var example1 = new Vue({
    el: '#locale',
    data: {
        allLocations: locations,
        start: 0,
        end: 4
    },
    methods: {
        next() {
            if (this.end < this.allLocations.length) {
                this.start++;
                this.end++;
            }
        },
        previous() {
            if (this.start > 0) {
                this.start--;
                this.end--;
            }
        }
    },
    computed: {
        selectedLocations() {
            return this.allLocations.slice(this.start, this.end);
        }
    }

})