class CPU {
    constructor(id, CPUName, manufacturer, numCores, numThreads, baseSpeed, boostSpeed, cacheSize) {
        this.CPUName = CPUName;
        this.manufacturer = manufacturer;
        this.numCores = numCores;
        this.numThreads = numThreads;
        this.baseSpeed  = baseSpeed;
        this.boostSpeed  = boostSpeed;
        this.cacheSize = cacheSize;
    }
}

module.exports = CPU;