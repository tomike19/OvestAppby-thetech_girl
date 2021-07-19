export class HttpException extends Error {
  isHttpException = true;

  constructor(message, status, data = null, name = "HttpException") {
    super(message);

    this.status = status;
    this.name = name;
    this.data = data
      ? Object.entries(data).map((cur) => {
          const [key, value] = cur;
          const lastItem = value.pop();
          const message = [value.join(", "), lastItem]
            .filter((item) => item)
            .join(" and ");

          return [key, message];
        }, {})
      : [];
  }
}
