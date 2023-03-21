import supertest from 'supertest'
import { expect } from 'chai'

const request = supertest('http://localhost:8080')

describe('test API', () => {
    describe('GET', () => {
        it('La petición debería retornar status 200', async () => {
            let res = await request.get('/users')
            expect(res.status).to.equal(200)
        })
    })
    describe('POST', () => {
        it('Debe guardar un usuario', async () => {
            let user = {
                first_name: 'Leo',
                last_name: 'Dan',
                email: 'leo@musica.com'
            }
            let res = await request.post('/users').send(user)
            expect(res.status).to.be.equals(201)
            const resBody = res.body
            expect(resBody).to.include.keys('first_name', 'last_name', 'email', '_id')
        })
    })
})