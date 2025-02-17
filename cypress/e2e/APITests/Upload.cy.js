describe("Upload a file", () => {
    
    it("Upload a file", () => {
        const formData = new FormData();
        formData.append('file', 'cypress/fixtures/cat.jpg');

        cy.fixture('cat.jpg', 'binary')


        
    })


})