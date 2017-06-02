var common_utils = {

    //jQuery ajax common setup
    ajaxGlobalSetup: function() {
        $.ajaxSetup({
            headers: {},
            error: function(e) {

            }
        });
    },

    //return object by url queryString
    parserQueryString: function() {
        var json = {};
        var checkstr = "?"
        var idx = location.href.indexOf(checkstr);
        if (idx > 0) {
            var arr = location.href.substr(idx + checkstr.length).split("&");
            for (var index = 0; index < arr.length; index++) {
                var temp = arr[index].split("=");
                if (temp.length == 1) {
                    json[temp[0]] = "";
                } else if (temp.length == 2) {
                    var queryvalue = decodeURIComponent(temp[1]).replace(/\+/g, ' ')
                    queryvalue = queryvalue.split("#")[0]
                    json[temp[0]] = queryvalue
                } else {
                    continue;
                }
                //null처리
            }
        }
        return json;
    },

    //data parsing for selectbox react component
    parseValueForSelectBox: function(prevArr, pValue, pName) {
        var parseArr = []
        if (prevArr) {
            prevArr.map(function(value) {
                var newObj = {};
                newObj.value = value[pValue];
                newObj.name = value[pName];
                parseArr.push(newObj);
            })
        }
        return parseArr;
    },

    /**
     * params를 QueryString으로 반환 해준다.
     */
    requestBuildQueryString: function(params) {
        var queryString = [];
        for (var property in params)
            if (params.hasOwnProperty(property)) {
                if (params[property] != undefined) {
                    queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
                }
            }
        return queryString.join('&');
    },

    /*
     * 게시물 new 체크
     */
    isToday: function(date) {
        var isToday = false;
        if (date == "" || date == undefined || date == null) {
            return false
        }
        try {
            spDate = date.split(" ")
            spDate[0] = spDate[0].replace(/-/g, "/")
        } catch (err) {
            return false
        }
        var dt = Date.parse(spDate[0] + " " + spDate[1]);
        var todayDate = Date.now();
        if (todayDate - dt <= 86400000) {
            isToday = true
        }

        return isToday
    },

    //check date after present
    futureTime: function(date) {
        if (date) {
            var endDateTime = [],
                today, sec, dueDay, dueHour;

            endDate = date.split('-');
            endDateTime = endDate[2].split(' ');
            endDate[2] = endDateTime[0]
            endDateTime = endDateTime[1].split(':');
            endDate = new Date(endDate[0], (endDate[1] - 1), endDate[2], endDateTime[0], endDateTime[1], endDateTime[2]);
            today = new Date();

            return endDate.getTime() - today.getTime() >= 0 ? true : false
        } else {
            return false
        }
    },

    getDateByForm: function(date) {
        if (Boolean(date) == false) {
            return Boolean(date);
        }
        var year, month, day
        if (date) {
            year = date.substring(0, 4)
            month = date.substring(5, 7)
            day = date.substring(8, 10)
        }
        return year + "." + month + "." + day
    },

    getDateByEventForm: function(startDate, endDate) {
        return this.getDateByForm(startDate) + " ~ " + this.getDateByForm(endDate)
    },

    is_ie: function() {
        if (navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
        if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
        if (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
        return false;
    },

    /**
     * 코드에 대한 이름을 구한다.
     * codeGroup : 해당 코드 의 목록 정보
     * cafecode : 검사할 코드 그룹
     */
    getCodeName: function(codeGroup, code) {
        var codeName = "";
        jQuery.each(codeGroup, function(key, val) {
            if (key == code) {
                codeName = val;
                return codeName;
            }
        });
        return codeName;
    },

    getCodeGroupList: function(allGroupList, codeGroupID) {
        jQuery.each(allGroupList, function(key, val) {

        });
    },

    andiosCheck: function() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.search("android") > -1) {
            return "android"
        } else if ((ua.search("iphone") > -1) || (ua.search("ipod") > -1) || (ua.search("ipad") > -1)) {
            return "ios"
        }
    },

    boardContentsRex: function(str) {
        var rex = /<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>|<iframe.+?<\/iframe>/ig
        var boardContentsStr = str
        return boardContentsStr.replace(rex, "");
    },

    onlyCharNumRex: function(str) {
        var rex = /[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/ig
        return rex.test(str);
    },

    numberWithCommas: function(number) {
        return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : ""
    },

    currentPath: function() {
        var location, locationStrArr;

        location = document.location.pathname
        locationStrArr = location.split("/")
        location = locationStrArr[locationStrArr.length - 1]

        return location
    },

    currentUrl: function() {
        var location

        //window.location.origin 이 ie11부터 있네
        if (window.location.origin) {
            location = window.location.origin + window.location.pathname
        } else {
            location = window.location.href
            location = location.split("?")
            location = location[0]
        }
        return location
    },

    checkImg: function(value) {

        var IMG_FORMAT = "\.(bmp|gif|jpg|jpeg|png)$";

        if ((new RegExp(IMG_FORMAT, "i")).test(value)) return true;

        return false

    },

    nullStringAlert: function(target, str) {
        alerObj = {
            "alertPop": false,
            "alertTitle": "",
        }
        if (!str) {
            alerObj.alertPop = true
            alerObj.alertTitle = target + " 입력해주세요."
            return alerObj;
        }
        return alerObj;
    },

    isYoutube: function(data) {
        return data && data.indexOf('youtube') > 0 ? true : false
    },

    ajaxForm: function(ajaxObj) {

        if (!ajaxObj.errorFunc) {
            ajaxObj.errorFunc = function(xhr, status, err) {
                alert("서버간 통신오류가 발생하였습니다.")
            }
        }

        $.ajax({
            url: ajaxObj.url,
            data: ajaxObj.data ? ajaxObj.data : "",
            type: ajaxObj.type,
            success: ajaxObj.successFunc,
            error: ajaxObj.errorFunc
        });
    },

    getCookie: function(cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if (start != -1) {
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if (end == -1)
                end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    },

    setCookie: function(c_name, value, exdays, path) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString()) +
            ((path == null) ? "" : ";path=" + path);
        document.cookie = c_name + "=" + c_value;

    },

    setStateForAlert: function(alertObj, _this, returnurl) {
        alertObj.alertPop = true
        alertObj.closeCallBack = function() { _this.setState({ alertPop: false }) }
        alertObj.redirectUrl = returnurl ? returnurl : ""

        _this.setState(alertObj)
    },

    getYoutubeId: function(youtubeUrl) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var matchs = youtubeUrl.match(regExp);
        if (matchs) {
            return matchs[7];
        }
    },

    //ie10에서 iframe z-index ignore 해결
    iframeZindex: function() {
        //ie10에서 iframe z-index ignore 해결
        $("iframe").each(function() {
            var ifr_source = $(this).attr('src');
            var wmode = "wmode=transparent";
            if (ifr_source.indexOf('?') != -1) {
                var getQString = ifr_source.split('?');
                var oldString = getQString[1];
                var newString = getQString[0];
                $(this).attr('src', newString + '?' + wmode + '&' + oldString);
            } else $(this).attr('src', ifr_source + '?' + wmode);
        });
    },

    setYoutube: function() {
        var youtube = [],
            y_load = 0;

        //youtube apu load 체크
        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
            window.onYouTubePlayerAPIReady = function() {
                loadPlayer();
            };
            $.getScript('//www.youtube.com/player_api');
        } else {
            loadPlayer();
        }

        //youtube 객체 생성
        function loadPlayer() {
            var hasVideo = $('.swiper-slide .video-container').filter('[youtube-id]');
            hasVideo.each(function(index) {
                var videoid = $(this).attr('id'),
                    youtubeurl = $(this).attr('youtube-id');

                var playerDefaults = {
                    loop: 0,
                    enablejsapi: 1,
                    autoplay: 1,
                    autohide: 1,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,
                    controls: 0,
                    disablekb: 1,
                    iv_load_policy: 3
                };

                youtube[index] = new YT.Player(videoid, {
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange.bind(this, index)
                    },
                    playerVars: playerDefaults,
                    videoId: youtubeurl
                });

                function onPlayerStateChange(index, event) {
                    if (event.data == YT.PlayerState.STOP || event.data == 0) {
                        event.target.playVideo()
                    }
                }


                function onPlayerReady(event) {
                    event.target.mute();
                    event.target.playVideo();
                }
            })
        }
    }
}