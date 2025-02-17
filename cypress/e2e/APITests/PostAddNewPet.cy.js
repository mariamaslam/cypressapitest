describe("Add new post in pet store", () => {

    it("Add new post in pet store " , () => {
        cy.api({
            method: 'POST',
            url: '/pet',
            failOnStatusCode: false,
            header: {
                'Content-Type': 'application/json',
            },
            body: {
            name: 'doggie',
            },
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('name', 'doggie')
        })

    })

})