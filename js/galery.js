const groups = [
    {
        name: 'LODY',
        items: [
            {
                src: 'img/fotkalodow.png',
                alt: 'lody'
            },
            {
                src: 'img/fotkalodow2.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow3.png',
                alt: 'lody'
            },
            {
                src: 'img/fotkalodow4.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow3.png',
                alt: 'lody'
            },
            {
                src: 'img/fotkalodow2.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow.png',
                alt: 'lody'
            }
        ]
    },
    {
        name: 'CIASTA',
        items: [
            {
                src: 'img/fotkalodow4.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow3.png',
                alt: 'lody'
            },
            {
                src: 'img/fotkalodow2.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow.png',
                alt: 'lody'
            }
        ]
    },
    {
        name: 'DESERY',
        items: [
            {
                src: 'img/fotkalodow2.png',
                alt: 'lody2'
            },
            {
                src: 'img/fotkalodow.png',
                alt: 'lody'
            }
        ]
    }
]


var galery = new Vue({
    el: '#galeria',
    data: {
        pageNumber: 0,
        groupImages: groups[0].items,
        groups: groups
    },
    props: {
        size: {
            type: Number,
            required: false,
            default: 4
        }
    },
    methods: {
        selectPhoto(group) {
            this.groupImages = group.items;
            this.goToPage(0);
        },
        goToPage(page) {
            this.pageNumber = page;
        }
    },
    computed: {
        pageCount() {
            return Math.floor(this.groupImages.length / this.size);
        },
        paginatedData() {
            const start = this.pageNumber * this.size;
            const end = start + this.size;
            return this.groupImages.slice(start, end);
        }
    }
})