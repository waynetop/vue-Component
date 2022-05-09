<script type="text/javascript">
    (function() {
        _fmOpt = {
            partner: "jingurcb",
            appName: "jingurcb_web",
            token: "jingurcb" + "-" + new Date().getTime() + "-"+ Math.random().toString(16).substr(2),
            fmb: true,
            getinfo: function(){
                return "e3Y6ICIyLjUuMCIsIG9zOiAid2ViIiwgczogMTk5LCBlOiAianMgbm90IGRvd25sb2FkIn0=";
            },
            fpHost: 'https://fptest.fraudmetrix.cn',
            staticHost: 'statictest.fraudmetrix.cn',
            tcpHost: 'fpflashtest.fraudmetrix.cn',
            wsHost: 'fptest.fraudmetrix.cn:9090',
        }
        var cimg = new Image(1,1);
        cimg.onload = function() {
            _fmOpt.imgLoaded = true;
        };
        cimg.src = "https://fptest.fraudmetrix.cn/fp/clear.png?partnerCode=jingurcb&appName=jingurcb_web&tokenId=" + _fmOpt.token;
        var fm = document.createElement('script'); fm.type = 'text/javascript'; fm.async = true;
        fm.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.fraudmetrix.cn/v2/fm.js?ver=0.1&t=' + (new Date().getTime()/3600000).toFixed(0);
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fm, s);
    })();
</script>