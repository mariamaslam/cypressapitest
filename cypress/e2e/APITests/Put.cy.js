describe("Put pets in pet store", () =>{
    before(() => {
        cy.fixture('Pets').as('pets')
    })

    it("PUt pets", () => {
        cy.get('@pets').then((pets) => {
            cy.api({
                method: 'PUT',
                url: '/pet',
                failOnCodeStatus: false,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    id: pets.id,
                    name: pets.name,
                    status: pets.status
                }
            })
            .then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })
})