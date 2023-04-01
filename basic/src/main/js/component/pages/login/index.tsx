import Button from "../../atoms/button";
import Card from "../../atoms/card";
import Input from "../../atoms/input";
import Label from "../../atoms/label";

export default function LogIn() {
  return (
    <div className="grid h-screen place-items-center font-face">
      <Card className="w-full max-w-sm p-4 bg-blue-50 border border-blue-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-blue-400 dark:border-blue-400">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-blue-900 dark:text-white text-right">
            ورود به ایمیجلی
          </h5>
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            >
              ایمیل
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-400 dark:placeholder-gray-600 dark:text-gray-800"
              placeholder="name@company.com"
              required={true}
            />
          </div>
          <div>
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-right"
            >
              رمز عبور
            </Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-100 dark:border-gray-500 dark:placeholder-gray-400 dark:text-gray-800"
              required={true}
            />
          </div>
          <div className="flex flex-row-reverse">
            <div className="flex">
              <div className="h-5">
                <Input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <Label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-cyan-50 dark:text-cyan-50"
              >
                بخاطر سپردن
              </Label>
            </div>
            <a
              href="#"
              className="mr-auto text-sm text-cyan-50 hover:underline dark:text-cyan-50 underline"
            >
              فراموشی رمز عبور؟
            </a>
          </div>
          <Button
            type="submit"
            value="ورود"
            className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          />

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            ثبت نام نکرده اید؟
            <a
              href="#"
              className="text-red-700 hover:underline dark:text-cyan-50 mr-2 underline"
            >
              ایجاد حساب کاربری
            </a>
          </div>
        </form>
      </Card>
    </div>
  );
}
