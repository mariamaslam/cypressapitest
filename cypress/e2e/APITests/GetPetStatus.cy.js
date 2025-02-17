describe("Get Pets", () => {

    it("Get all pets", () => {
        cy.api({
            method: 'GET',
            url: '/pet/findByStatus?status=available&status=available',
            failOnStatusCode: false,
        
        })
        .then((response) => {
            // status code assertion
            expect(response.status).to.eq(200)

            //body assertions
            expect(response.body[0]).to. have.property('status', 'available')
            // expect(response.body[0]).to.have.property('name', 'doggie')

            // response time assertion
            cy.log(`Response time: ${response.duration} ms`)
            expect(response.duration).to.be.lessThan(2000)


            // finding a value in body
            const petNames = response.body.map(pet => pet.name)
            expect(petNames).to.include('fish')

            
            // Array / List Assertions
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.greaterThan(0)

            //Cookies assertions
            cy.setCookie('session_id', '123ABC')
            cy.getCookie('session_id').should('have.property', 'value', '123ABC')

             // Cross-Field Assertions
            const specificPet = response.body.find(pet => pet.id === 9223372016900029000)
            expect(specificPet).to.exist
            expect(specificPet).to.have.property('name', 'fish')
            expect(specificPet.category).to.have.property('name', 'string')
            expect(specificPet).to.have.property('photoUrls').that.is.an('array').with.length.greaterThan(0)
            expect(specificPet.tags[0]).to.have.property('name', 'string')

            // Localization Assertions
            // expect(response.headers).to.have.property('content-language')
            // expect(response.headers['content-language']).to.eq('en-US') // Adjust the expected value as needed

              // Conditional Assertions
              response.body.forEach(pet => {
                if (pet.status === 'available') {
                    expect(pet).to.have.property('name')
                    expect(pet.name).to.be.a('string')
                } else {
                    expect(pet).to.have.property('status')
                    expect(pet.status).to.be.oneOf(['pending', 'sold'])
                }

            // Data Type Assertions
            response.body.forEach(pet => {
                    expect(pet.id).to.be.a('number')
                    expect(pet.name).to.be.a('string')
            
            


            // Check that each pet has an 'id' property
          response.body.forEach(pet => {
            expect(pet).to.have.property('id')
        })
        // response.body.forEach(pet => {
        //     expect(pet).to.have.property('name')

        // })
     
        })
    })

})
})
})