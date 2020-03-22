const {
  app
} = require('../src/app');
const {
  asyncReadFile,
  asyncWriteFile
} = require('../src/dao')
const request = require('supertest');

describe("app", () => {
  describe("get request", () => {
    it("should get all todos'", (done) => {
      app.locals.dataFilePath = "./test/fixture.json"
      request(app).get('/api/tasks/1').expect(200).expect([{
        "id": 1,
        "content": "Restful API homework",
        "createdTime": "2019-05-15T00:00:00Z"
      },
      ]).end((err, res) => {
        if (err) throw err;
        done()
      })
    })
  })

  describe("add task", () => {
  
    it("should create a id when the corresponding id does not exist in the datasource", (done) => {
      request(app).post('/api/tasks/').send({
        "id": 2,
        "content": "Restful API homework2",
        "createdTime": "2019-05-15T12:00:00Z"
      }).expect(201).expect([{
        "id": 1,
        "content": "Restful API homework",
        "createdTime": "2019-05-15T00:00:00Z"
      },
      {
        "id": 2,
        "content": "Restful API homework2",
        "createdTime": "2019-05-15T12:00:00Z"
      }
      ]).end((err, res) => {
        if (err) throw err;
        done()
      })
    })

  })
  describe("delete one task", () => {
    it("should return all items", (done) => {
        request(app).delete('/api/tasks/2').expect(204).end((err, res) => {
            if(err) throw err;
            done();
        })
    })  
})
})
