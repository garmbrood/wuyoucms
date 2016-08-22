var route = {
    //静态url匹配
    'static': {
        '/': {
            method: 'GET',
            controller: function (req, res, netx) {

            }
        }
    },
    //正则url匹配
    'regexp': [{
        method: 'GET',
        regexp: '/abc/s+/',
        controller: function (req, res, netx) {

        }
    }],
    //自定义匹配
    'customize': [{
        method: 'GET',
        matcher: function (req) {

        },
        controller: function (req, res, netx) {

        }
    }]
};