describe("Add new post in the pet store", () => {
    before(() => {
        cy.fixture('Pets').as('pets')
    })

    it("Add new pets in the pet store", () => {
        cy.get('@pets').then((pets) => {
            pets.forEach( ()=> {
                cy.api({
                    method: 'POST',
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


})