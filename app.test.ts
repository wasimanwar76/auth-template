import app from "./src/config/app";
import { calculationDiscount } from "./src/config/utils";
import request from "supertest";

describe("App", () => {
  test("Its should calculate discount", () => {
    const result = calculationDiscount(100, 10);
    expect(result).toBe(10);
  });

  test("its should return 200 statuscode", async () => {
    const response = await request(app).get("").send();
    expect(response.statusCode).toBe(200);
  });
});
