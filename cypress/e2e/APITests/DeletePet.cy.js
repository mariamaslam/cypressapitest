describe("Delete an existing pet in the store", () => {
    it("Delete a pet", () => {

        cy.api({
            method: 'DELETE',
            url: '/pet/1',
            failOnStatusCode: false,

            headers: {
                'Content-type': 'application/json',
                'api_key': 'pariatur Ut'
            },
       
        })
        .then((response) =>{
            expect(response.status).to.eq(200)
        })

    })

})