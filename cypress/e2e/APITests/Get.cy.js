describe("Get the status of all the pets", () => {

    it("Gettign the status of all the pets ", () => {

        cy.api({
            method: 'GET',
            url: '/pet/findByStatus?status=available&status=available',
            failOnStatusCode: false,

        })
        .then((response) => {
            expect(response.status).to.eq(200)
            //first body assertion
            expect(response.body[0]).to.have.property('status', 'available')
            //data type assertions
            response.body.forEach(pets =>{
                expect(pets.id).to.be.a('number')
            })
            // response time assertion
            cy.log(`Response time: ${response.duration} ms`)
            expect(response.duration).to.be.lessThan(2000)

            //array assertion
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.greaterThan(0)
            
            // cookies assertions
            // cy.setCookies('session_id', '123')
            // cy.getCookies('session_id').should('have.property', value, '123')

            //cross field assertions
            const specificPEt = response.body.find(pets => pets.id === 9223372016900013000)
            expect(specificPEt).to.exist
            expect(specificPEt).to.have.property('name', 'doggie')

            // find any assertion value in body
            const petNames = response.body.map(pets => pets.name)
            expect(petNames).to.include('Puff')

            // if else assertions
            response.body.forEach(pets => {
                if(pets.status === 'available'){
                    expect(pets).to.have.property('status', 'available')

                }
                else{
                    expect(pets).to.have.property('status').to.be.oneOf(['pending', 'sold'])
                }
            })
            // value assertion
            response.body.forEach(pets => {
                expect(pets).to.have.property('id')

            })
        })

    })
})