// GET /public/v2/users/7048599	Get user details
// PUT|PATCH /public/v2/users/7048599	Update user details
/// POST public/v2/users
// DELETE /public/v2/users/7048599

describe("Get all user etails in the system", () => {
    const auth = 'Bearer 980f367f0ec70cf84f9eedec4e191382435de377a8c3bad09b00a1dd4c71749f'

    it("Get all users", () => {

        cy.api({
            method: 'GET',
            url: '/public/v2/users/',
            failOnStatusCode: false,

        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
            cy.api({
                method: 'POST',
                url: '/public/v2/users',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': auth
                },
                body: {
                    name: 'John Doe',
                    gender: 'male',
                    email: Math.random().toString(36).substring(7) + '@gmail.com',
                    status: 'active'
                }

                })
                .then((response) => {
                    expect(response.status).to.eq(201)
                    const postId = response.body.id

                    cy.api({
                        method: 'PUT',
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
