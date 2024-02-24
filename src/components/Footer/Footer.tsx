export default function Footer() {
  return (
    <footer className='py-20  bg-slate-300/80'>
      <div className='container'>
        <div className='flex justify-evenly '>
          <div className=''>
            <span className='font-bold'>CHĂM SÓC KHÁCH HÀNG</span>
            <ul className='grid'>
              <li>
                <a
                  className='hover:text-red-500'
                  href='https://help.shopee.vn/portal'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>Trung Tâm Trợ Giúp</span>
                </a>
              </li>
              <li>
                <a
                  className='hover:text-red-500'
                  href='https://help.shopee.vn/portal/article/79180-[Th%c3%a0nh-vi%c3%aan-m%e1%bb%9bi]-L%c3%a0m-sao-%c4%91%e1%bb%83-mua-h%c3%a0ng-%2F-%c4%91%e1%ba%b7t-h%c3%a0ng-tr%c3%aan-%e1%bb%a9ng-d%e1%bb%a5ng-Shopee%3F'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>Hướng Dẫn Mua Hàng</span>
                </a>
              </li>
              <li>
                <a
                  className='hover:text-red-500'
                  href='https://banhang.shopee.vn/edu/article/13243/ban-hang-online-bat-dau-tu-dau'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>Hướng Dẫn Bán Hàng</span>
                </a>
              </li>
              <li>
                <a
                  className='hover:text-red-500'
                  href='https://help.shopee.vn/portal/article/79191-%5BD%E1%BB%8Bch-v%E1%BB%A5%5D-L%C3%A0m-sao-%C4%91%E1%BB%83-li%C3%AAn-h%E1%BB%87-Ch%C4%83m-s%C3%B3c-Kh%C3%A1ch-h%C3%A0ng'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>Chăm Sóc Khách Hàng</span>
                </a>
              </li>
              <li>
                <a
                  className='hover:text-red-500'
                  href='https://help.shopee.vn/portal/article/79046-[Quy-%c4%91%e1%bb%8bnh]-Ch%c3%adnh-s%c3%a1ch-b%e1%ba%a3o-h%c3%a0nh-cho-s%e1%ba%a3n-ph%e1%ba%a9m-mua-t%e1%ba%a1i-Shopee'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span>Chính Sách Bảo Hành</span>
                </a>
              </li>
            </ul>
          </div>
          <div className=''>
            <span className='font-bold'>VỀ SHOPEE</span>
            <ul className='grid '>
              <li>
                <a
                  href='https://careers.shopee.vn/about'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Giới Thiệu Về Shopee Việt Nam</span>
                </a>
              </li>
              <li>
                <a
                  href='https://careers.shopee.vn/jobs'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Tuyển Dụng</span>
                </a>
              </li>
              <li>
                <a
                  href='https://help.shopee.vn/portal/article/77242'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Điều Khoản Shopee</span>
                </a>
              </li>
              <li>
                <a
                  href='https://help.shopee.vn/portal/article/77244'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Chính Sách Bảo Mật</span>
                </a>
              </li>
              <li>
                <a
                  href='https://shopee.vn/mall/'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Chính Hãng</span>
                </a>
              </li>
              <li>
                <a
                  href='https://banhang.shopee.vn/'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Kênh Người Bán</span>
                </a>
              </li>
              <li>
                <a
                  href='https://shopee.vn/flash_sale/'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Flash Sales</span>
                </a>
              </li>
              <li>
                <a
                  href='https://shopee.vn/affiliate/'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Chương Trình Tiếp Thị Liên Kết Shopee</span>
                </a>
              </li>
              <li>
                <a
                  href='mailto:media.vn%40shopee.com'
                  title=''
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-500'
                >
                  <span>Liên Hệ Với Truyền Thông</span>
                </a>
              </li>
            </ul>
          </div>
          <div className=''>
            <span className='font-bold'>THANH TOÁN</span>
            <div className='grid grid-cols-3 gap-3  '>
              <div className=' bg-slate-200 shadow-md'>
                <a>
                  <img
                    src='https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8'
                    alt='logo'
                    className=''
                  />
                </a>
              </div>
              <div className='   bg-slate-200 shadow-md'>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16' alt='logo' />
                </a>
              </div>
              <div className='    bg-slate-200 shadow-md '>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08' alt='logo' />
                </a>
              </div>

              <div className=' bg-slate-200 shadow-md'>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/bc2a874caeee705449c164be385b796c' alt='logo' />
                </a>
              </div>
              <div className=' bg-slate-200 shadow-md '>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/2c46b83d84111ddc32cfd3b5995d9281' alt='logo' />
                </a>
              </div>
              <div className=' bg-slate-200 shadow-md'>
                <a>
                  <img
                    src='https://down-vn.img.susercontent.com/file/5e3f0bee86058637ff23cfdf2e14ca09'
                    alt='logo'
                    className=''
                  />
                </a>
              </div>

              <div className=' bg-slate-200 shadow-md'>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/9263fa8c83628f5deff55e2a90758b06' alt='logo' />
                </a>
              </div>
              <div className=' bg-slate-200 shadow-md'>
                <a>
                  <img src='https://down-vn.img.susercontent.com/file/0217f1d345587aa0a300e69e2195c492' alt='logo' />
                </a>
              </div>
            </div>
          </div>
          <div className=''>
            <span className='font-bold'>TẢI ỨNG DỤNG</span>
            <div className=' flex'>
              <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                <img
                  src='https://down-vn.img.susercontent.com/file/a5e589e8e118e937dc660f224b9a1472'
                  alt='download_qr_code'
                  className='w-[60px] h-[60px] shadow-md'
                />
              </a>
              <div className='grid justify-around ml-1'>
                <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/ad01628e90ddf248076685f73497c163'
                    alt='app'
                    className='shadow-md hover:bg-amber-100'
                  />
                </a>
                <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/ae7dced05f7243d0f3171f786e123def'
                    alt='app'
                    className='shadow-md ml-[2px] m-2   hover:bg-amber-100'
                  />
                </a>
                <a href='https://shopee.vn/web' target='_blank' rel='noopener noreferrer'>
                  <img
                    src='https://down-vn.img.susercontent.com/file/35352374f39bdd03b25e7b83542b2cb0'
                    alt='app'
                    className='shadow-md  hover:bg-amber-100'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-20 w-1/2 p-2 border-t-2'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div>Shopee.Tất cả các quyền được bảo lưu.</div>
          </div>
          <div className='lg:col-span-2'>
            <div>
              Quốc gia & Khu vực: Singapore | Indonesia | Đài Loan | Thái Lan | Malaysia | Việt Nam | Philippines |
              Brazil
            </div>
          </div>
        </div>
        <div className='mt-10 text-center text-sm'>
          <div>Công ty TNHH Shopee</div>
          <div className='mt-6'>
            Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành
            phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className='mt-2'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-2'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}
