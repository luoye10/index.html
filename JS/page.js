(function () {
    let pages; // 用来保存生成的分页器的列表
    let totalPage; // 总页数
    let parentNode; // 包含分页器的父元素
    let callbackFn; // 生成分页器时传入的回调函数

    let styles = {
        height: '40px',
        'line-height': '40px',
        cursor: 'pointer',
        color: '#000',
        display: 'inline-block',
        width: '50px',
        'box-sizing': 'border-box'
    };
    window.generatePage = generatePage;
    /**
     * @desc 生成动态分页器
     * @param {number} num 总数
     * @param {number} size 每页的数量
     * @param {HTMLElement} el 分页器的容器
     * @param {function} callback 当选择的页数发生变化时，会调用回调函数，回调函数的参数就是选择的页数
     */
    function generatePage(num, size, parent, callback) {
        const limit = 10; // 当页数小于10时，全部显示
        const pageNum = Math.ceil(num / size);
        pages = [];
        callbackFn = callback;
        totalPage = pageNum;
        parentNode = parent;
        if (pageNum <= limit) {
            var i = 0;
            while (i <= pageNum) {
                pages.push(i + 1);
                i++;
            }
        } else {
            pages.push(1, 2, 3, 4, 5, 6, 7, 8, '...', pageNum);
        }
        renderAllPage(pages);
    }
    function renderAllPage(pages) {
        var frag = document.createDocumentFragment();
        pages.forEach((page, index) => {
            var li = document.createElement('li');
            li.innerText = page;
            
            if (page === '...') {
                if (index === 1) {
                    // 最左边的省略号
                    li.className = 'prev';
                } else {
                    // 最右边的省略号
                    li.className = 'next';
                }
            } else {
                li.className = 'page';
            }
                
            Object.keys(styles).forEach(sty => {
                li.style[sty] = styles[sty];
            });
            li.addEventListener('click', handleClick);
            frag.appendChild(li);
        });
        parentNode.innerHTML = '';
        parentNode.appendChild(frag);
    }

    /**
     * 点击页数时的处理
     */
    function handleClick(e) {
        var el = e.target;
        var name = el.className;
        if (name.includes('active')) {
            return;
        }
        var active = document.getElementsByClassName('active')[0];
        if (active) {
            active.className = name.replace('active', ''); // 移除active
            active.style.color = '#000';
        }
        el.className = name + ' active';
        el.style.color = '#6cf';
        if (name.includes('prev')) {
            // 点击是左侧的省略号
            prevPage();
            var num = pages[5];
            var children = parentNode.children;
            children[5].className = 'page active';
            children[5].style.color = '#6cf';
            callbackFn(num);
            return;
        }
        if (name.includes('next')) {
            nextPage();
            var num = pages[5];
            var children = parentNode.children;
            children[5].className = 'page active';
            children[5].style.color = '#6cf';
            callbackFn(num);
            return;
        }
        var num = Number(el.innerText);
        callbackFn(num);
    }

    /**
     * 点击左侧的省略号时处理分页器
     */
    function prevPage() {
        var val = pages[2]; // 判断第三个标签的值
        if (val <= 3) {
            pages = [1, 2, 3, 4, 5, 6, 7, 8, '...', totalPage];
        } else {
            val = val - 2;
            pages = [1, '...', val, val + 1, val + 2, val + 3, val + 4, val + 5, '...', totalPage];
        }
        renderAllPage(pages);
    }

    /**
     * 点击右侧的省略号时处理分页器
     */
    function nextPage() {
        var val = pages[pages.length - 3]; // 倒数第三个标签的值
        if (totalPage - val <= 3) {
            pages = [
                1,
                '...',
                totalPage - 7,
                totalPage - 6,
                totalPage - 5,
                totalPage - 4,
                totalPage - 3,
                totalPage - 2,
                totalPage - 1,
                totalPage
            ];
        } else {
            val = val + 2;
            pages = [1, '...', val - 5, val - 4, val - 3, val - 2, val - 1, val, '...', totalPage];
        }
        renderAllPage(pages);
    }
})();
