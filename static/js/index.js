/*
 * @LastEditors: misitebao
 * @Description: 请添加文档头注释！！！
 */
!function () {

    window.onload = () => {
        var kw = document.querySelector('#kw')
        var searchBtn = document.querySelector('.btn-search')
        
        // 输入框添加回车事件
        kw.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                searchHandle()
            }
        })

        // 搜索按钮添加点击事件
        searchBtn.addEventListener('click', () => {
            searchHandle()
        })
    }
    // 搜索方法
    function searchHandle() {
        var strKw = document.querySelector('#kw').value
        if (!strKw) {
            return
        }
        location.href = `https://www.baidu.com/s?wd=${strKw}`
    }
}()
