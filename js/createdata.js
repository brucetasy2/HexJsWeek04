var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'n1GRyAodz4NWzOmQDrkrtzDTNHKwMMruVtlMGbfdjX5Ep6mmHEdlswIo7UgS',
};


var nameOf="麝香貓咖啡"
var Data = {
    title: '',
    category: 'animal',
    content: 'Kopi Luwak Coffee',
    description: '收集麝香貓的天然糞便製作的貓屎咖啡',
    imageUrl: [
        'https://upload.cc/i1/2020/06/30/Wo9Bwr.jpg',
    ],
    enabled: true,
    origin_price: 3000,
    price: 2900,
    unit: '1000g',
};

function backendPostProduct(obj, dataSet) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product`;
    console.log(`CreateProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .post(url, dataSet)
        .then(function (res) {
            console.log('CreateProduct SUCESS !!');
        })
        .catch(function () {
            console.log('ERR');
        });
}


total_count=29 ;
do_cnt=0;

for ( i=1 ; i< total_count ; i++ ) {
    Data.title=nameOf + String(i);
    // console.log(`${Data.title}`);
    // 建立資料 OK
    backendPostProduct(inf,Data);
}




