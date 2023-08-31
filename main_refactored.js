class DoSomething {

   constructor(numberMax, maxOrder) {
      this.numberMax = numberMax;
      this.maxOrder = maxOrder;
      this.arryPrimeNumber = Array(this.numberMax + 1).fill(0);
      this.arryPrimeNumber[1] = 2;
      this.isPrime = false
      this.multiplePrime = Array(this.maxOrder + 1).fill(0);
      this.indexPrime = 2
      this.testPrimeNumber = 1
   }

   searchPrimeNumbers() {

      let countLoop = 1;
      let primeSquare = 9;

      while (countLoop < this.numberMax) {
         do {
            this.testPrimeNumber += 2;
            if (this.testPrimeNumber == primeSquare) {

               this.indexPrime++;
               primeSquare = this.arryPrimeNumber[this.indexPrime] * this.arryPrimeNumber[this.indexPrime];
               this.multiplePrime[this.indexPrime - 1] = this.testPrimeNumber;
            }
            this.findMultiples()
         } while (!this.isPrime);
         countLoop++
         this.arryPrimeNumber[countLoop] = this.testPrimeNumber;
      }
   }

   findMultiples() {
      let countLoop = 0;
      this.isPrime = true;

      while (countLoop < this.indexPrime && this.isPrime) {
         if (this.multiplePrime[countLoop] < this.testPrimeNumber) {
            this.multiplePrime[countLoop] += this.arryPrimeNumber[countLoop] + this.arryPrimeNumber[countLoop];
         }
         else if (this.multiplePrime[countLoop] == this.testPrimeNumber) {
            this.isPrime = false;
         }
         countLoop++;
      }
   }

   printNumbersPrime() {
      let pageOfSet = 1;
      let currentPage = 0;
      const rowPerPage = 50;
      const quantityColumns = 4;

      while (pageOfSet <= this.numberMax) {
         console.log("Page ", currentPage);
         for (let rowOfSet = pageOfSet; rowOfSet <= pageOfSet + rowPerPage - 1; rowOfSet++) {
            let aux = [];
            for (let i = 0; i < quantityColumns; i++) {
               const index = rowOfSet + i * rowPerPage;
               if (index <= this.numberMax) {
                  aux.push(this.arryPrimeNumber[index]);
               }
            }
            console.log(aux.join('|'));
         }
         currentPage++;
         pageOfSet += rowPerPage * quantityColumns;
      }
   }

   generatePrimeNumbers() {
      this.searchPrimeNumbers();
      this.printNumbersPrime();
   }
}

const myApp = new DoSomething(1000, 30);
myApp.generatePrimeNumbers();