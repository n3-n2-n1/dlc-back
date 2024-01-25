import ProfileActions from "../../components/ProfileActions/ProfileActions";
import Dashcards from "../../components/Dashcards/Dashcards";

function Home() {

  const handle = () => {};
  
  return (
    <main className="bg-gray-900 sm:p-6 space-y-6 xl:w-768 w-full flex-shrink-0 border-r border-gray-200 border-gray-800 h-screen overflow-y-auto lg:block hidden">
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between bg-dark-gray">
        <div className="mr-6">
          <h1 className="text-4xl mb-2 text-white font-weight-300">
            DLC MOTORS
          </h1>
          <h2 className="text-gray-300 ml-0.5">Gestión Íntegra de Productos</h2>
        </div>
        <div className="justify-center">
          <div className="mt-6">
            <ProfileActions />
          </div>
        </div>
      </div>
      {/* Masonry-style grid for MyClass */}
      <section className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
      <Dashcards buttons={[{ text: "Ventas", action: handle, link:'' }]} />
      <Dashcards buttons={[{ text: "Devoluciones", action: handle, link:'' }]} />

      </section>

      {/* <section className="gap-6">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
            Acquisition Overview
          </h3>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Top Channels
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Users
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Organic Search
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    5,649
                  </td>

                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">30%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-cyan-600 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Referral
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    4,025
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">24%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-orange-300 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Direct
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    3,105
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">18%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-teal-400 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Social
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    1251
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">12%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-pink-600 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                    Other
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    734
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">9%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-indigo-600 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="text-gray-500">
                  <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                    Email
                  </th>
                  <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                    456
                  </td>
                  <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">7%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div className="bg-purple-500 h-2 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
       */}
    </main>
  );
}

export default Home;
