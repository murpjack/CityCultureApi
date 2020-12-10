// import mongoose from "mongoose";
import * as dbHandler from "./db-handler";
import { createMockUser, 
    // createUser
 } from "../controllers/usersControllers";
import { mockUser } from "./user-fake-data";

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => await dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => await dbHandler.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => await dbHandler.closeDatabase());

/**
 * Product test suite.
 */
describe("user db", () => {
    /**
     * Tests that a valid product can be created through the user service without throwing any errors.
     */
    it("can be created correctly", async () => {
        expect(async () => await createMockUser(mockUser)).not.toThrow();
    });
});
