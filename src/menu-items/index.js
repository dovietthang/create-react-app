// import dashboard from './dashboard';
// import pages from './pages';
// import utilities from './utilities';
// import other from './other';
// import menuItem from './menuItem';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [
    {
      id: 'index',
      title: 'Trang Chủ',
      caption: 'Trang chủ',
      url: 'index',
      type: 'item'
    },
    {
      id: 'gioi-thieu',
      title: 'gioi-thieu',
      caption: 'gioi-thieu',
      url: 'gioi-thieu',
      type: 'item'
    },
    {
      id: 'dich-vu',
      title: 'dich-vu',
      caption: 'dich-vu',
      type: 'group',
      children: [
        {
          id: 'thiet-ke-website',
          title: 'Thiết kế Website',
          url: '/dich-vu/thiet-ke-website',
          type: 'item',
          breadcrumbs: false
        },
        {
          id: 'thiet-ke-website',
          title: 'Quản trị Website',
          url: 'dich-vu/thiet-ke-website',
          type: 'item',
          breadcrumbs: false
        },
        {
          id: 'marketing-online',
          title: 'Marketing Online',
          url: 'dich-vu/marketing-online',
          type: 'item',
          breadcrumbs: false
        },
        {
          id: 'google-adwords',
          title: 'Google Ads',
          url: 'dich-vu/google-adwords',
          type: 'item',
          breadcrumbs: false
        },
        {
          id: 'viet-bai-chuan-seo',
          title: 'Viết bài chuẩn SEO',
          url: 'dich-vu/viet-bai-chuan-seo',
          type: 'item',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'bang-gia',
      title: 'bang-gia',
      caption: 'bang-gia',
      url: 'bang-gia',
      type: 'item'
    },
    {
      id: 'giao-dien-website-mau',
      title: 'giao-dien-website-mau',
      caption: 'giao-dien-website-mau',
      url: 'giao-dien-website-mau',
      type: 'group',
      children: [
        {
          id: 'mau-giao-dien-website-ban-han',
          title: 'Mẫu Website bán hàng',
          url: 'danh-muc/mau-giao-dien-website-ban-han',
          type: 'item',
          breadcrumbs: false
        },
        {
          id: 'mau-website-gioi-thieu',
          title: 'Mẫu Website giới thiệu',
          url: 'danh-muc/mau-website-gioi-thieu',
          type: 'item',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'du-an',
      title: 'du-an',
      caption: 'du-an',
      url: 'du-an',
      type: 'item'
    },
    {
      id: 'lien-he',
      title: 'lien-he',
      caption: 'lien-he',
      url: 'lien-he',
      type: 'item'
    }
  ]
};

export default menuItems;
