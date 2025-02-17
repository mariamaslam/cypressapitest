// GET /public/v2/users/7048599	Get user details
// PUT|PATCH /public/v2/users/7048599	Update user details
/// POST public/v2/users
// DELETE /public/v2/users/7048599

describe("Get status of all the pets in the pet store", () => {

    const auth = 'Bearer 2b7abb3a485fb281291a40a86e03cc864241d4a21532f3758ed404f701ca075b'

    it("Get all pets", () => {

        cy.api({
            method: 'GET',
            url: '/public/v2/users/',
            failOnCodeStatus: false,
         
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
        cy.api({
            method: 'POST',
            url: '/public/v2/users',
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json',
                'Authorization': auth
            },
            body: {
                name: 'John Doe',
                gender: 'male',
                status: 'active',
                email : Math.random().toString(36).substring(7) + '@gmail.com'
            }

        })
        .then((response) => {
            expect(response.status).to.eq(201)
            const postId = response.body.id
        

        cy.api({
            method: 'PUT',
            url: `/public/v2/users/${postId}`,
            failOnStatusCode: false,
            headers: {
                'content-type': 'application/json',
                'Authorization': auth
            },
            body: {
                name: 'Zaviyar'
            },
        })
        .then((response) => {
            expect(response.status).to.eq(200)

            cy.api({
                method: 'DELETE',
                url: `/public/v2/users/${postId}`,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': auth
                },
                body: {
                    name: 'Zaviyar'
                }
            })
            .then((response) => {
                expect(response.status).to.eq(204)
            })
        })
        
    })
    
})


})