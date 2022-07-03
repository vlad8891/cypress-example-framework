const url = Cypress.env("apiUrl");

describe("Api tests", () => {
  it("Create and update an employee, then validate that the number of employees aged over 30 has increased by 1", () => {
    const employeeName = "John Doe";
    const salary = "a lot";
    const age = "34";
    const newEmployeeName = "Jane Doe";
    const newSalary = "a lot and something";
    const newAge = "35";

    let employees = [];
    let employeesOver30 = [];
    let newEmployeesOver30 = [];

    cy.wait(5000);
    cy.request(`${url}/employees`).then((response) => {
      expect(response.status).to.eql(200);
      employees = response.body.data;
      for (let i = 0; i < employees.length; i++) {
        if (employees[i].employee_age > 30) {
          employeesOver30.push(employees[i]);
        }
      }
      cy.log(`Number of employees over 30 is ${employeesOver30.length}.`);
    });
    cy.wait(5000);
    cy.request({
      url: `${url}/create`,
      method: "POST",
      body: {
        name: employeeName,
        salary: salary,
        age: age,
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
      expect(response.body.data.name).to.eql(employeeName);
      expect(response.body.data.salary).to.eql(salary);
      expect(response.body.data.age).to.eql(age);
      response.body.data.name = newEmployeeName;
      response.body.data.salary = newSalary;
      response.body.data.age = newAge;
      cy.wait(5000);
      cy.request({
        url: `${url}/update/${response.body.data.id}`,
        method: "PUT",
        body: response.body,
      }).then((response) => {
        expect(response.status).to.eql(200);
        expect(response.body.data.data.name).to.eql(newEmployeeName);
        expect(response.body.data.data.salary).to.eql(newSalary);
        expect(response.body.data.data.age).to.eql(newAge);
      });
      cy.wait(5000);
      cy.request(`${url}/employees`).then((response) => {
        employees = response.body.data;
        for (let i = 0; i < employees.length; i++) {
          if (employees[i].employee_age > 30) {
            newEmployeesOver30.push(employees[i]);
          }
        }
        cy.log(`Number of employees over 30 is ${employeesOver30.length}.`);
        expect(newEmployeesOver30.length).to.eql(employeesOver30.length + 1);
      });
      cy.request({
        url: `${url}/delete/${response.body.data.id}`,
        method: "DELETE",
      }).then((response) => {
        expect(response.status).to.eql(200);
      });
    });
  });
});
