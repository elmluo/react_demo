import {createStore} from 'redux'

export default function() {
    // 下面的代码来自与redux官网的一个小 demo

    // 第一步，定义计算规则，即reducer
    function counter (state=0, action) {
        switch (action.type) {
            case "INCREMENT":
                // 在这里尽量不要改变原来的state
                return state + 1;
            case "DECREMENT":
                return state - 1;
            default:
                return state
        }
    }

    // 第二步：根据计算规则生成 store
    let store = createStore(counter);

    // 第三步： 定义数据（state）变化,要触发监听函数。
    // 在监听函数中，通过getState() 方法拿到变化后的数据
    store.subscribe(()=> {
        console.log("fn1 -> current state", store.getState())
    });
    store.subscribe(()=> {
        console.log("fn2 -> current state", store.getState())
    });

    // 第四步： 触发数据变化
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'INCREMENT'});
    store.dispatch({type: 'DECREMENT'});
    store.dispatch({type: 'DECREMENT'});


}