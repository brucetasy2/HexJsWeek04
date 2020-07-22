Vue.component('editproduct', {
    template: 
    `
<div id="editproduct" ref="editproduct"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade">
    <div role="document" class="modal-dialog modal-xl">
        
    </div>
</div>
      `,
    data () {
        return {
            indata:{
                imageUrl: [],
            },
        };
    },
    props: ['pid'],
    mounted() {
        console.log(`******** editproduct.js(mounted) ******`);
      },
    methods:{
        dorefresh(){
            console.log(`******** editproduct.js(dorefresh) ******`);
        }
    },
});





{/* <div id="editproduct"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal fade">
    <div role="document" class="modal-dialog modal-xl">
        <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
                <h5 id="exampleModalLabel" class="modal-title">
                <span>{{nameoftemplate}}</span>
                </h5>
                <button type="button" data-dismiss="modal" aria-label="Close" class="close">
                <span aria-hidden="true">×</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="imageUrl">輸入圖片網址[imageUrl]</label>
                            <input id="imageUrl" type="text" placeholder="請輸入圖片連結" class="form-control"
                                v-model="indata.imageUrl[0]" />
                        </div>
                        <img :src="indata.imageUrl[0]" alt="PIC" class="img-fluid" />
                    </div>

                    <div class="col-sm-8">
                        <div class="form-group">
                            <label for="title">標題[title]</label>
                            <input id="title" type="text" placeholder="請輸入標題" class="form-control" v-model="indata.title" />
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="category">分類[category]</label>
                                <input id="category" type="text" placeholder="請輸入分類" class="form-control"
                                v-model="indata.category" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">單位[unit]</label>
                                <input id="unit" type="unit" placeholder="請輸入單位" class="form-control" v-model="indata.unit" />
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="origin_price">原價[origin_price]</label>
                                <input id="origin_price" type="number" placeholder="請輸入原價" class="form-control"
                                v-model="indata.origin_price" />
                            </div>
                            <div class="form-group col-md-6">
                                <label for="price">售價[price]</label>
                                <input id="price" type="number" placeholder="請輸入售價" class="form-control"
                                v-model="indata.price" />
                            </div>
                        </div>

                        <hr />

                        <div class="form-group">
                            <label for="description">產品描述[description]</label>
                            <textarea id="description" type="text" placeholder="請輸入產品描述" class="form-control"
                                v-model="indata.description"></textarea>
                        </div>

                        <div class="form-group">
                            <label for="content">說明內容[content]</label>
                            <textarea id="description" type="text" placeholder="請輸入說明內容" class="form-control"
                                v-model="indata.content"></textarea>
                        </div>

                        <div class="form-group">
                            <div class="form-check">
                                <input id="is_enabled" type="checkbox" class="form-check-input" v-model="indata.is_enabled"
                                :true-value="1" :false-value="0" />
                                <label for="is_enabled" class="form-check-label">是否啟用[is_enabled]</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button type="button" data-dismiss="modal" class="btn btn-outline-secondary">取消</button>
                <button type="button" class="btn btn-primary" @click="updData">確認</button>
            </div>
        </div>
    </div>
</div> */}