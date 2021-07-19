import React from "react";
import * as moment from "moment";

// import uppink from "../../../assets/Uppink.svg";
import upgreen from "../../../assets/upgreen.svg";
import downred from "../../../assets/downred.svg";
import TransactionDetails from "./../TransactionDetails";
import { Util } from "../../../../../../helpers/util";

const RecentTransaction = ({ transactions }) => {
  return (
    <div
      style={{
        width: "92%",
      }}
    >
      <div className="recent-transact">
        <div className="">
          <div className="recentT">
            <p className="recentP">Recent Transactions</p>
            <p className="vAll">View all</p>
          </div>
        </div>
        {transactions.map((item) => {
          const isPositiveNumber = item.amount > 0;
          const icon = isPositiveNumber ? upgreen : downred;
          const sign = isPositiveNumber ? "+" : "-";
          const color = isPositiveNumber ? "#038830" : "#ee5253";

          return (
            <TransactionDetails
              icon={icon}
              title={item.description}
              date={moment(item.dateResolved).format("MMMM DD, YYYY")}
              amount={`${sign} $${Util.formatMoneyNumber(
                Math.abs(item.amount)
              )}`}
              status={item.status}
              style={{ color }}
              key={item.id}
            />
          );
        })}
        {/* <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        />
        <TransactionDetails
          icon={uppink}
          title={"Gold Plan Vest"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ea8e03" }}
        />{" "}
        <TransactionDetails
          icon={downred}
          title={"Wallet deposit"}
          date={"Mar 30, 2021"}
          amount={"+ $10,000.00"}
          status={"Processed"}
          style={{ color: "#ee5253" }}
        /> */}
        <hr />
      </div>
      {/* chart- transac */}
    </div>
  );
};

export default RecentTransaction;
