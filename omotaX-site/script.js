// ページの全ての画像やリソースが読み込まれたら実行
window.onload = function() {
    
    const body = document.querySelector('body');

    // ロゴ描画アニメーションの時間を待つ (CSSのアニメーション時間と合わせる)
    setTimeout(() => {
        // bodyタグに 'loaded' クラスを追加して、CSSアニメーションを開始させる
        body.classList.add('loaded');
    }, 3000); // 3秒

};