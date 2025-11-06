'use strict';

{
    const btn = document.getElementById('btn');
    const menu = document.getElementById('result');

    btn.addEventListener('click', () => {
        const results = ['ハンバーグ', '唐揚げ', 'チキン南蛮', 'オムライス', '焼きそば', 'カレー', '生姜焼き', 'ミートパスタ'];
        const n = Math.floor(Math.random() * results.length);
        menu.textContent = results[n];
    });
}