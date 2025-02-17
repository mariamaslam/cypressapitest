describe("Get Pets Tags", () => {

    it("Get request for pets tag", () => {

        cy.api({
            method: 'GET',
            url: '/pet/findByTags?tags=ex',
            failOnStatusCode: false,
        })

  

    .then((response) => {
        expect(response.status).to.eq(200)
  
    })
})
    
})