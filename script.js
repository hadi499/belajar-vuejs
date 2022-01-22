const member = {
    name: 'hadi',
    message: 'Hello Word.',
    qty: 1,
    namaDepan: 'Hadi',
    namaBelakang: 'Purnomo',
    bilangan: 4,
    gambar: 'image/lee.png',
    menu: 'home',
    kelas: []
}

const vm = new Vue({
    el : '#app',
    data: member,
    methods: {
        getName: function() {
            return 'hello hadi'
        },
        ubahNama: function(namabaru){
            return this.name = namabaru
        }
    },
    computed:{
        totalBayar: function(){
            return this.qty * 1000
        },
        namaLengkap: function(){
            return this.namaDepan + ' ' + this.namaBelakang
        },
        infoBilangan: function(){
            return this.bilangan % 2 === 0 ? 'genap' : 'ganjil'
        }
    }
})