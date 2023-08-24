const persons = [];

class Person {
    constructor(
        name,
        gender
    ) {
        this.name = name;
        this.gender = gender;
        // 1. Tambahkan di constructor untuk set value gender
    }

    setTitle() {
        if(this.gender === "L"){
            this.name = "Tuan " + this.name
        }else{
            this.name  = "nyonya " + this.name
        } 
        // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai 
            // name nya menjadi contoh, 
            // name = Tuan Jhon
    }

    static find(name) {
        const foundNama = persons.find((person) => person.name === name)
        return foundNama;
        // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    } 
}

// 3. buat kan 2 object person
    // 1 person laki laki
    // panggil funsi setTittle dari object person 
    // 1 person perempuan
    // panggil funsi setTittle dari object person 
let orang = new Person("ahmad","L")
orang.setTitle()
let manusia = new Person("yanti","M")
manusia.setTitle()
// 4. setiap object person nya ditambahkan ke array object persons
persons.push(orang, manusia);
// 5. tampilkan object persons.
console.log(persons);
// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
const foundOrang = Person.find("Tuan ahmad");
console.log(foundOrang);