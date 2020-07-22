

var inf = {
    url: 'https://course-ec-api.hexschool.io/api/',
    uuid: 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
    apitoken: 'n1GRyAodz4NWzOmQDrkrtzDTNHKwMMruVtlMGbfdjX5Ep6mmHEdlswIo7UgS',
};


var data = [];

var item1 = 'EIH55jopBSvSM8NJpW2QLMqSUJZmV5sm8AMR92MZyJYnbum1qBcwIRZgwf0a2C6R';
var item2 = 'bDK4tiYN6t1TeE1OgBJ0zP5gN1SR64pd2pzq5iikzIoWX0qMlEjvYdaJNyewYb2y';
var item3 = 'QdfDtcdE57d9C8WvySyag9fZdcruXBItM8mGKdO9Fk0O16jddTfnuZRZwU0bO1qG';


function backendDestroyProduct(obj, prductionId) {
    let url = `${obj.url}${obj.uuid}/admin/ec/product/${prductionId}`;
    console.log(`DestroyProduct url ${url}`);
    axios.defaults.headers['Authorization'] = `Bearer ${obj.apitoken}`;
    axios
        .delete(url)
        .then(function (res) {
            console.log('DestroyProduct SUCESS !!');
            // frontProductlist(inf);
        })
        .catch(function () {
            console.log('ERR');
        });
}

//刪除一項產品
backendDestroyProduct(inf,item1);
backendDestroyProduct(inf,item2);
backendDestroyProduct(inf,item3);