import { API_URL } from "./config";
import { HTTPModule } from "./http";
import { Util } from "./util";
import * as moment from "moment";

export class User extends HTTPModule {
  constructor() {
    super({
      baseURL: `${API_URL}/user`,
    });

    if (localStorage.authToken) {
      const { authToken } = localStorage;
      super.updateRequestConfig({
        headers: { Authorization: `Bearer ${authToken}` },
      });
    }
  }

  async login(credentials) {
    const { data } = await this.post("/login", credentials);
    const { user, access_token } = data;
    user.token = access_token;

    return user;
  }

  async register(credentials) {
    const { message } = await this.post("/create", credentials);
    const { user, token } = message;
    user.token = token;

    return user;
  }

  async profile() {
    const { data: user } = await this.get("/profile");
    const token = localStorage.authToken;
    user.token = token;

    return user;
  }

  async resendOtp(payload) {
    await this.post("/email/otp/send", payload);
  }

  async verifyEmail(payload) {
    return this.post("/email/otp/verify", payload);
  }

  async verifyUserStatus() {
    const { message } = await this.get("/status");

    return message.includes("active");
  }

  async getCountries() {
    const { data } = await this.get("/countries");

    return data;
  }

  async getStates() {
    const { data } = await this.get("/states/160");

    return data;
  }

  async getBanks() {
    const { data } = await this.get("/banks");

    return data;
  }

  async verifyAccountNumber(payload) {
    const [{ data }] = await this.post("/account/verify", payload);

    return data;
  }

  async getBalances() {
    return this.mockCall({
      ovest: Util.formatMoneyNumber(10234),
      savest: {
        total: Util.formatMoneyNumber(2242),
        percentageChane: 0.3,
        totalReturns: 200,
      },
      investment: {
        total: Util.formatMoneyNumber(8000),
        percentageChane: 2,
        totalReturns: Util.formatMoneyNumber(1234),
      },
    });
  }

  async getTransactions() {
    return this.mockCall(
      Array(4)
        .fill(null)
        .map((_val, index) => {
          const sign = Math.random() > 0.5 ? -1 : 1;
          const amount = Math.random() * 100000 * sign;
          const descIndex = sign > 0 ? 0 : 1;

          return {
            id: `transaction-${index}`,
            dateResolved: moment().subtract(index, "months").toDate(),
            status: "Processed",
            amount,
            description: ["Wallet deposit", "Wallet withrawal"][descIndex],
          };
        })
    );
  }
}

export class $api {
  static updateRequestConfig(config) {
    $api.user.updateRequestConfig(config);
  }

  static user = new User();
}
