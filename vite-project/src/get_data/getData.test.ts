import { fetchUserData } from "./getData";
import { describe, test, expect } from "vitest";

describe("fetchUserData", () => {
  test("fetch user data by ID", async () => {
    // Arrange
    const userId = 1;
    // Act
    const userData = await fetchUserData(userId);
    // Assert
    expect(userData.id).toEqual(userId);
    expect(userData.name).toBeDefined();
    expect(userData.email).toBeDefined();
    expect(userData.address.street).toBeDefined();
    expect(userData.address.suite).toBeDefined();
    expect(userData.address.city).toBeDefined();
    expect(userData.address.zipcode).toBeDefined();
    expect(userData.address.geo.lat).toBeDefined();
    expect(userData.address.geo.lng).toBeDefined();
    expect(userData.phone).toBeDefined();
    expect(userData.website).toBeDefined();
    expect(userData.company.name).toBeDefined();
    expect(userData.company.catchPhrase).toBeDefined();
    expect(userData.company.bs).toBeDefined();
  });
  test("fetch user data for non-existing user", async () => {
    // Arrange
    const userId = 999;
    // Act and Assert
    await expect(fetchUserData(userId)).rejects.toThrowError(
      "HTTP Error! Status: 404"
    );
  });
});