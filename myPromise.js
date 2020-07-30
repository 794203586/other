function myPromise(fn)
{
    var state = "pending"; // 状态: pending-准备中，fulfilled-完成，reject-失败
    var data = undefined; // 返回数据、成功、失败
    var callbacks = []; // 当前回调集合
    
    this.then = (execFn) =>
    {
        callbacks.push(execFn);
    }

    function resolve(value)
    {
        setTimeout(() => {
            callbacks.forEach(callback =>{
                callback(value);
            });
        }, 0);
    }

    fn(resolve);
}


new myPromise(function(resolve)
{
    resolve("myPromise");
}).then(function(data)
{
    console.log("myPromise--", data);
});
