describe("Deleting a pet from the pet store", () => {

    it("Delete a pet", () => {
        cy.api({
            method: 'DELETE',
            url: '/pet/1',
            headers: {
                'content-type': 'application/json',
                'api_key': 'pariatur Ut'
            },
         
        })
        .then((response) => {
            expect(response.status).to.eq(200)

        })
    })
})