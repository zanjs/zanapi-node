/**
 * @api {get} /user/:id Read data of a User
 * @apiVersion 0.3.0
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @apiParam {Number} id The Users-ID.
 *
 * @apiExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @apiSuccess {Number}   id            The Users-ID.
 * @apiSuccess {Date}     registered    Registration Date.
 * @apiSuccess {Date}     name          Fullname of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 * @apiSuccess {Object[]} options       List of Users options (Array of Objects).
 * @apiSuccess {String}   options.name  Option Name.
 * @apiSuccess {String}   options.value Option Value.
 * @apiParam {String} TotalAmount **所有选中店铺商品累加** </br>
 * 
 * - 每件商品的价格 (RMB) = `GrabAttrs->OriginalPrice` 商品原价 * 汇率 , 精确到小数点2位，四舍五入 
 * 
 * - 汇率计算 = 优先使用网站汇率、其次国家汇率
 * 
 * - 运费 =  Rule规则运费计算 ？ 如果不在规则内采用商品运费
 * 
 * - `Rule.ExpensesType` == 2 && 店铺总价大于 `Rule.LimitPrice` ? `price = 0` :  `price = ExpensesPrice`
 * 
 * - Rule算法，店铺的总价（商品的价格*数量） < 最低价*汇率（国家汇率）。运费：价格*汇率（国家汇率）
 * 
 * - NoSet未设置，取抓取运费
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() {
    return;
}

/**
 * @api {post} /user Create a new User
 * @apiVersion 0.3.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiSuccess {Number} id         The new Users-ID.
 *
 * @apiUse CreateUserError
 */
function postUser() {
    return;
}

/**
 * @api {put} /user/:id Change a User
 * @apiVersion 0.3.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiErrorStructure"
 *
 * @apiParam {String} name Name of the User.
 *
 * @apiUse CreateUserError
 */
function putUser() {
    return;
}