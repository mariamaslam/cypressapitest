describe("update multiple pets in the pet store", () => {
    before(() => {
        cy.fixture('Pets').as('petts');
    })

    it("Multiple pets store in pet store", () => {
        cy.get('@petts').then((pets) => {
            pets.forEach(pet =>{
                cy.api({
                    method: 'PUT',
                    url: '/pet',
                    failOnCodeStatus: false,
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: {
                        id: pet.id,
                        name: pet.name,
                        status: pet.status
                    }
                })
            })
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            console.log(`The response time is: ${response.duration} ms`)
            expect(response.duration).to.be.lessThan(1000)
            expect(response.body).to.have.property('name', pet.name)
            expect(response.body).to.have.property('status', pet.status)
        })
    })
})