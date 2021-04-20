// ブラウザバックのアクションが実行された際に、戻るボタンを押す

// disable browser back
history.pushState(null, null, null);

// 戻るアクションが発火した際に戻るボタンを探してクリックする
window.addEventListener('popstate', function (e) {
    if (document.URL.match(/portalv2/)) {
        if (document.querySelector(".icon-back") != null) {
            document.querySelector(".icon-back").click();
        } else {
            alert('ブラウザバックできません。');
            history.pushState(null, null, null);
        }
    }
});