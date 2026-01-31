describe('Integración Auth / API', () => {
  it('Debe rechazar acceso a ruta protegida sin token', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:4000/api/projects',
      failOnStatusCode: false, // 👈 importante
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('error');
    });
  });

  it('Debe permitir login y guardar token', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:4000/api/auth/login',
      body: {
        email: 'test@test.com',
        password: '123456',
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.be.oneOf([200, 201]);
      expect(response.body).to.have.property('token');
    });
  });
});
