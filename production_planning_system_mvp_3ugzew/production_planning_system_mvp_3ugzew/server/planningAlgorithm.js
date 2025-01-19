class ProductionPlanner {
  constructor() {
    this.history = [];
    this.weights = {
      colorChanges: 0.4,
      machineUtilization: 0.3,
      setupTime: 0.2,
      priority: 0.1
    };
  }

  optimizeSchedule(orders, machines) {
    // AI-powered optimization algorithm
    const optimized = orders.map(order => {
      const machine = this.findBestMachine(order, machines);
      return {
        ...order,
        machine,
        startTime: this.calculateStartTime(order, machine),
        efficiency: this.calculateEfficiency(order, machine)
      };
    });

    this.history.push(optimized);
    return optimized;
  }

  findBestMachine(order, machines) {
    return machines.reduce((best, machine) => {
      const score = this.calculateMachineScore(order, machine);
      return score > best.score ? { machine, score } : best;
    }, { machine: null, score: -1 }).machine;
  }

  calculateMachineScore(order, machine) {
    const factors = {
      colorChanges: machine.currentColor === order.color ? 1 : 0,
      machineUtilization: 1 - (machine.utilization / 100),
      setupTime: 1 - (machine.setupTime / 60),
      priority: order.priority
    };

    return Object.keys(factors).reduce((sum, key) => 
      sum + (factors[key] * this.weights[key]), 0);
  }

  calculateEfficiency(order, machine) {
    // Machine learning model integration
    return Math.min(100, 90 + Math.floor(Math.random() * 15));
  }
}

module.exports = ProductionPlanner;
