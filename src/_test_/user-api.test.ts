import request from "supertest";

// Setup methods used before/after each test
import * as dbHandler from "./db-handler";

// Node instance
import app from "../app";

import { mockUser, duplicateUser, updatedUser } from "./user-fake-data";

// Base API path used in this simple app
const apiBaseUrl = "/api/user";
/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());
/**
 * Seed test user data before every test.
 */
beforeEach(async () => await dbHandler.seedDatabase());
/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());
/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

describe("API", () => {
	it("reaches route '/getallusers' and returns status true.", async done => {
		const response = await request(app).get(`${apiBaseUrl}/getallusers`);
	
		expect(response.status).toBe(200);
		expect(response.status).not.toEqual(400);
		expect(response.body.success).toBe(true);
		done();
	});

	it("should GET a list from DB.", async done => {
		const response = await request(app).get(`${apiBaseUrl}/getallusers`);
		expect(response.body.data.length).toBeGreaterThanOrEqual(1);
		done();
	});

	it("should create a new user.", async done => {
		const response = await request(app)
			.post(`${apiBaseUrl}/addsingleuser`)
			.set('Content-Type', 'application/json')
			.send(mockUser)
			
		expect(response.status).toEqual(201);
		expect(response.status).not.toEqual(400);
     	expect(response.body.id).toEqual(mockUser._id);
		done();
	});

	it("should NOT create a new user with duplicate userID.", async done => {
		const response = await request(app)
			.post(`${apiBaseUrl}/addsingleuser`)
			.set('Content-Type', 'application/json')
			.send(duplicateUser)
			
		expect(response.status).toEqual(409);
		done();
	});

	it("should UPDATE details of an existing user.", async done => {
		const response = await request(app)
			.put(`${apiBaseUrl}/updatesingleuser`) 
			.set('Content-Type', 'application/json')
			.send(updatedUser);

		expect(response.status).toEqual(200);
		expect(response.status).not.toEqual(400);
     	expect(response.body.id).toEqual(updatedUser._id);
		done();
	});

	it("should DELETE an existing user from DB.", async done => {
	  	const response = await request(app)
			.del(`${apiBaseUrl}/removesingleuser`) 
			.set('Content-Type', 'application/json')
			.send(updatedUser);

		expect(response.status).toEqual(200);
		expect(response.status).not.toEqual(400);
     	expect(response.body.id).toEqual(updatedUser._id);
		done();
	});
});
