
var app = new Vue({
    el: '#app',
    data: {
        uuid : 'd952d084-2b40-40c3-9758-1aef7c7aa9e6',
        apiPath : 'https://course-ec-api.hexschool.io/api/',
        token:'',
        products: [],
        pages:[], // 頁數資訊
        cloneDate: {
            imageUrl: [],
        },
        editproductName: '新增產品',
    },

    methods: {
        // 取的產品
        getData(page = 1) {
            const api = `https://course-ec-api.hexschool.io/api/${this.uuid}/admin/ec/products?page=${page}`;
            // 帶入 token
            axios.defaults.headers.common.Authorization = `Bearer ${this.token}`;
            axios.get(api).then((response) => {
                this.products = response.data.data;       // 取得產品資料
                this.pages=response.data.meta.pagination; // 取得頁數資料
            });
        },

        // 更新產品
        updData() {
            if (this.editproductName == '新增產品') {
                this.products.unshift(this.cloneDate);
            } else {
                let curId = this.cloneDate.id;
                this.products.forEach((arry, inx) => {
                    if (arry.id == curId) {
                        this.products[inx] = this.cloneDate;
                    }
                });
            }
            this.cloneDate = {};
            $('#editproduct').modal('hide');
        },

        // 刪除產品
        delPrduct() {
            let delId = this.cloneDate.id;
            this.products.forEach((product, inx) => {
                if (product.id == delId) {
                    this.products.splice(inx, 1);
                }
            })
            $('#deletePanel').modal('hide');
        },

        // 開啟工作面板
        DoEditProduct(editType, product) {
            console.log(`******** all.js(editproduct) editType= ${editType} ******`);

            switch (editType) {
                case 'new': // 新增模式
                    $('#eeditproduct').modal('show');
                    this.editproductName = '新增產品';
                    this.cloneDate = {
                        imageUrl: [],
                    };
                    this.cloneDate.id = new Date().getTime();
                    break;
                case 'edit': //修改模式
                    // $('#editproduct').modal('show');
                    // this.cloneDate = JSON.parse(JSON.stringify(product)); ??????????????
                    this.editproductName = '修改產品';
                    console.log(`修改模式.id = ${this.cloneDate.id} `)

                    this.$refs.editproduct.GetProductForEditProduct(this.product.id);
                    


                    break;
                case 'delete': //刪除模式
                    $('#deletePanel').modal('show');
                    this.cloneDate = JSON.parse(JSON.stringify(product));
                    break;
                default:
                    break;
            }
        },
    },

    created() {
        // 取得 token 的 cookies  https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
        this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        // 若無法取得 token 則返回 Login 頁面
        if (this.token === '') {
            window.location = 'index.html'; 
        }
    },

    mounted() {
        console.log(`******** all.js(mounted) ${this.token} ******`);
        this.getData(); // 初始資料載入
    },
});
