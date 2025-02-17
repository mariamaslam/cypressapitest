describe("Upload an image for a pet", () => {
    
    it("Upload an image for a pet", () => {
        const formData = new FormData();
        formData.append('file', 'cypress/fixtures/cat.jpg');

        cy.fixture('cat.jpg', 'binary')
            .then(Cypress.Blob.binaryStringToBlob)
            .then(fileContent => {
                const formData = new FormData();
                formData.append('file', fileContent, 'cat.jpg');

                cy.api({
                    method: 'POST',
                    url: '/pet/1/uploadImage',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: formData
                }).then((response) => {
                    expect(response.status).to.eq(200)
                })
            })
    })
})