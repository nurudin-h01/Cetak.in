import logo from "../src/asset/logo.png";
import white_logo from "../src/asset/logo cetakin.png";
import ilustrasi from "../src/asset/ilustrasi.png";

function App() {
  return (
    <div className="">
      <div className="w-full ">
        <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <img src={logo} className="h-[25px]" alt="" srcset="" />
            <div class="flex md:order-2">
              <button type="button" class="text-white bg-[#02897A] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-[#02897A] dark:focus:ring-blue-800">Masuk</button>
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/#" class="block py-2 pl-3 pr-4 text-white bg-[#02897A] rounded md:bg-transparent md:text-[#02897A] md:p-0 dark:text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Produk</a>
                </li>
                <li>
                  <a href="/#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Customer</a>
                </li>
                <li>
                  <a href="/#" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang Kami</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="grid grid-cols-12 h-screen w-full lg:mt-20">
          <div className="col-span-12 lg:col-span-6 flex flex-col h-screen md:h-full">
            <div className="my-auto md:mx-auto h-full ">
              <p className="mt-20 font-bold text-3xl text-[#02897A]">
                CETAK DOKUMENMU
              </p>
              <p className="text-left mt-7">
                Banyak tugas, banyak dokumen yang harus dicetak?
              </p>
              <p>Tidak perlu khawatir, nikmati layanan online jasa</p>
              <p>percetakan kami. Cetak dokumen pun kini menjadi lebih</p>
              <p>mudah. Tunggu apa lagi, Cetak sekarang dokumenmu!!!</p>
              <button className="py-1 mt-7 px-5 bg-[#02897A] text-white rounded font-medium">
                Daftar
              </button>
            </div>
          </div>
          <div className="invisible lg:visible lg:col-span-6">
            <div className="flex h-full">
              <div className="flex h-full w-full">
                <img
                  src={ilustrasi}
                  className="mx-auto mt-20 h-[300px]"
                  alt="sepatu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-24 bg-white">
        <p className="text-center font-extrabold text-3xl text-[#02897A]">
          Kenapa harus kami?
        </p>
        <div className="grid grid-cols-12 w-full mt-8">
          <div className="col-span-12 my-3 lg:col-span-3 flex flex-col w-full">
            <div className="py-2 px-2 bg-green-400 text-white mx-auto w-fit rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                <polyline points="9 15 12 12 15 15" />
                <line x1="12" y1="12" x2="12" y2="21" />
              </svg>
            </div>
            <div className="mx-auto mt-5 text-base text-gray-700">
              <p className="text-center">Kirim filemu lewat cloud,</p>
              <p className="text-center">kami cetak</p>
            </div>
            <p></p>
          </div>
          <div className="col-span-12 lg:col-span-3 my-3 flex flex-col w-full">
            <div className="py-2 px-2 bg-blue-300 text-white mx-auto w-fit rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </div>
            <div className="mx-auto mt-5 text-base  text-gray-700">
              <p className="text-center">Tersedia Layanan Antar</p>
              <p className="text-center">Jemput Dokumen</p>
            </div>
            <p></p>
          </div>
          <div className="col-span-12 lg:col-span-3 my-3  flex flex-col w-full">
            <div className="py-2 px-2 bg-red-300 text-white mx-auto w-fit rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-businessplan" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <ellipse cx="16" cy="6" rx="5" ry="3" />
                <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                <path d="M5 15v1m0 -8v1" />
              </svg>
            </div>
            <div className="mx-auto mt-5 text-base text-gray-700">
              <p className="text-center">Harga bersaing dengan</p>
              <p className="text-center">kompetitor</p>
            </div>
            <p></p>
          </div>
          <div className="col-span-12 my-3 lg:col-span-3  flex flex-col w-full">
            <div className="py-2 px-2 bg-yellow-300 text-white mx-auto w-fit rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
            </div>
            <div className="mx-auto mt-5 text-base text-gray-700">
              <p className="text-center">Menghemat waktu anda</p>
            </div>
            <p></p>
          </div>
        </div>
      </div>
      <div className="mt-auto bg-[#02897A] pl-5 lg:pl-0">
        <div className="grid grid-cols-12 py-10 w-full ">
          <div className="col-span-12 lg:col-span-3 w-full flex flex-col">
            <img src={white_logo} className="h-[40px] mr-auto lg:mx-auto" alt="" />
            <div className="flex">
              <img src="" alt="" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:mt-3 w-full flex flex-col">
            <div className="mt-4 lg:mx-auto lg:mt-0">
              <p className="text-white font-bold">Cloud File</p>
              <div className="mt-1 lg:mt-4">
                <p className="my-1 text-white">Tentang Kami</p>
                <p className="my-1 text-white">FAQ</p>
                <p className="my-1 text-yellow-50">Blog</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:mt-3 w-full flex flex-col">
            <div className="mt-4 lg:mx-auto lg:mt-0">
              <p className="text-white font-bold">Cloud File</p>
              <div className="mt-1 lg:mt-4">
                <p className="my-1 text-white">Tentang Kami</p>
                <p className="my-1 text-white">FAQ</p>
                <p className="my-1 text-yellow-50">Blog</p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:mt-3 w-full flex flex-col">
            <div className="mt-4 lg:mx-auto lg:mt-0">
              <p className="text-white font-bold ">Beri Saran</p>
              <div className="mt-1 lg:mt-4 flex flex-col">
                <input className="rounded-lg w-1/2 lg:w-full" type="text" />
                <button className="py-1 px-4 text-[#02897A] bg-white font-medium mt-4 w-max lg:mx-auto rounded">Submit</button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
