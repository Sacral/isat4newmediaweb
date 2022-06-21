//src:http://abgne.tw/jquery/apply-jquery/jquery-twitter-like-append-message-marquee.html


	$(function(){
		// 先取得 .abgne-news-scroll ul 及 li 的高度
		// 並設定訊息移動, 淡入及輪播時間
		var $news = $('.comment1_content ul'), 
			scrollHeight = $news.find('li').outerHeight(true), 
			scrollSpeed = 600, fadeInSpeed = 600, 
			timer, speed = 1000;
	 

		// 用來控制輪播用
		function newsScroll(){
			
			
			// 先把 .abgne-news-scroll ul 往下移
			$news.animate({
				top: scrollHeight + 'px'
			}, scrollSpeed, function(){
				// 當 .abgne-news-scroll ul 移動到定點後
				// 先找出最後一個 li
				var $last = $news.find('li:last');
				// 複製一份並先隱藏起來
				// 接著把它加到 .abgne-news-scroll ul 中的第一個項目
				// 最後用淡入的方式顯示, 當顯示完後繼續輪播
				$last.clone().hide().prependTo($news).fadeIn(fadeInSpeed, function(){
					timer = setTimeout(newsScroll, speed);
				});
				// 馬上把 .abgne-news-scroll ul 移到 top 等於 0 的位置
				$news.css('top', 0);
				// 把 $last 移除掉
				$last.remove();
			});
		}
		
		
		$news.mouseenter(function newsScroll(){
			return false;

		});
		
		// 啟動輪播計時器
		timer = setTimeout(newsScroll, speed);
		
	});