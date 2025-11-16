// ページの全ての画像やリソースが読み込まれたら実行
window.onload = function() {
    
    // bodyタグに 'loaded' クラスを追加
    document.body.classList.add('loaded');

    // ローダー要素を取得
    const loader = document.getElementById('loader');

    // ローダーのフェードアウトアニメーションが完了したら、ローダー自体を消す
    loader.addEventListener('transitionend', () => {
        loader.remove();
    });

    // スクロールで要素をフェードインさせる機能
    const fadeInElements = document.querySelectorAll('.fade-in');

    if (fadeInElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // 一度表示されたら監視を停止
                    observer.unobserve(entry.target);
                }
            });
        }, { 
            threshold: 0.1 // 10%見えたら実行
        });

        fadeInElements.forEach(element => {
            observer.observe(element);
        });
    }
};