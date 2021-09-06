$(document).ready(function(){
	let products =[
		{
			"ProductName":"Module Khuếch Đại Âm Thanh TPA3116D2 HIFI 2.0 2*100W",
			"Discount":15,
			"Old_price":"350.000",
			"New_Price":"299.000",
			"ImageURL":"images/product-1.png"
		},
		{
			"ProductName":"Keo tản nhiệt Silicone 45g Japan",
			"Discount":0,
			"Old_price":0,
			"New_Price":"49.000",
			"ImageURL":"images/product-2.png"
		},
		{
			"ProductName":"Ổ Cắm Hẹn Giờ AL-06 220-240VAC 50Hz 2300W",
			"Discount":0,
			"Old_price":0,
			"New_Price":"85.000",
			"ImageURL":"images/product-3.png"
		},
		{
			"ProductName":"Cảm Biến Từ Hall NJK-5002C NPN Thường Mở",
			"Discount":0,
			"Old_price":0,
			"New_Price":"49.000",
			"ImageURL":"images/product-4.png"
		},
		{
			"ProductName":"Bộ Sạc Pin 18650 JXC-008 3.7-4.2V Đa Năng 4 Pin",
			"Discount":0,
			"Old_price":0,
			"New_Price":"79.000",
			"ImageURL":"images/product-5.png"
		},
		{
			"ProductName":"Module Khuếch Đại Âm Thanh 2x150W TPA3116D2 V4",
			"Discount":11,
			"Old_price":"201.000",
			"New_Price":"179.000",
			"ImageURL":"images/product-6.png"
		},
		{
			"ProductName":"Module Khuếch Đại Âm Thanh Bluetooth 5.0 Hifi 2x50W",
			"Discount":22,
			"Old_price":"319.000",
			"New_Price":"249.000",
			"ImageURL":"images/product-7.png"
		},
		{
			"ProductName":"Module Giải Mã Âm Thanh Tích Hợp Bluetooth 5.0- USB- Thẻ Nhớ- FM Kèm Remode",
			"Discount":0,
			"Old_price":"49.000",
			"New_Price":"159.000",
			"ImageURL":"images/product-8.png"
		},
		{
			"ProductName":"Module Khuếch Đại Âm Thanh TDA2030 Mini",
			"Discount":44,
			"Old_price":"45.000",
			"New_Price":"25.000",
			"ImageURL":"images/product-9.png"
		},
		{
			"ProductName":"Module Khuếch Đại Âm Thanh TPA3116D2 HIFI 2.0 2*100W",
			"Discount":0,
			"Old_price":0,
			"New_Price":"159.000",
			"ImageURL":"images/product-10.png"
		},
		{
			"ProductName":"Phân Tần Loa 2 Kênh 80W Loa 4-8R WEAH-227",
			"Discount":0,
			"Old_price":0,
			"New_Price":"129.000",
			"ImageURL":"images/product-11.png"
		},
		{
			"ProductName":"Bơm Chìm Hộ Gia Đình BL-2512 12VDC 65W 3T/H",
			"Discount":10,
			"Old_price":"408.000",
			"New_Price":"368.000",
			"ImageURL":"images/product-12.png"
		},
		{
			"ProductName":"Kit EASY 8051",
			"Discount":17,
			"Old_price":"270.000",
			"New_Price":"225.000",
			"ImageURL":"images/product-13.png"
		},
		{
			"ProductName":"Module camera OV2640 200W Pixel",
			"Discount":0,
			"Old_price":0,
			"New_Price":"95.000",
			"ImageURL":"images/product-14.png"
		},
		{
			"ProductName":"Cáp Nguồn Raspberry Pi 4B Cáp Chuyển Đổi Nguồn 5V3A Giao Diện USB Type-c",
			"Discount":0,
			"Old_price":0,
			"New_Price":"25.000",
			"ImageURL":"images/product-15.png"
		},
		{
			"ProductName":"Vỏ Raspberry Pi 4B Màu Đen",
			"Discount":0,
			"Old_price":0,
			"New_Price":"79.000",
			"ImageURL":"images/product-16.png"
		},
		{
			"ProductName":"Camera Raspberry V2.1 8Mp IMX219 RS UK 1080P Chính Hãng",
			"Discount":0,
			"Old_price":0,
			"New_Price":"649.000",
			"ImageURL":"images/product-17.png"
		},
		{
			"ProductName":"Đầu Nối HDMI Raspberry Pi 4B",
			"Discount":0,
			"Old_price":0,
			"New_Price":"39.000",
			"ImageURL":"images/product-18.png"
		},
		{
			"ProductName":"Combo Bộ Kít Arduino Uno R3 Full V3 -2020 (BH 06 Tháng)",
			"Discount":5,
			"Old_price":"579.000",
			"New_Price":"549.000",
			"ImageURL":"images/product-19.png"
		},
		{
			"ProductName":"Bộ 3 Tấm Tản Nhiệt Raspberry Pi",
			"Discount":0,
			"Old_price":0,
			"New_Price":"35.000",
			"ImageURL":"images/product-20.png"
		},
		{
			"ProductName":"Dây Kẽm Hàn Cell Pin  Niken 0.1x4mm Dài 1M",
			"Discount":0,
			"Old_price":0,
			"New_Price":"10.000",
			"ImageURL":"images/product-21.png"
		},
		{
			"ProductName":"Đồng Hồ Vạn Năng Màn Hình Lớn 2.88 Inch TOOLTOP ET8132 Tự Động",
			"Discount":0,
			"Old_price":0,
			"New_Price":"669.000",
			"ImageURL":"images/product-22.png"
		},
		{
			"ProductName":"Module Kiểm Tra Dung Lượng Thực Pin 18650 XH-M240",
			"Discount":0,
			"Old_price":0,
			"New_Price":"159.000",
			"ImageURL":"images/product-23.png"
		},
		{
			"ProductName":"Nhiệt Kế Điện Tử Mini Không Dây Đo Nhiệt Độ Môi Trường -50~100*C",
			"Discount":0,
			"Old_price":0,
			"New_Price":"27.000",
			"ImageURL":"images/product-24.png"
		},
		{
			"ProductName":"Kính Lúp Học Sinh Thực Hành Viền Kim Loại",
			"Discount":0,
			"Old_price":0,
			"New_Price":"35.000",
			"ImageURL":"images/product-25.png"
		},
		{
			"ProductName":"Kính Lúp Móc Khóa Cầm Tay Kim Loại 21mm Độ Phóng Đại Cao",
			"Discount":0,
			"Old_price":0,
			"New_Price":"45.000",
			"ImageURL":"images/product-26.png"
		},
		{
			"ProductName":"Kính Lúp Đeo Trực Tiếp 32225-21SX Có Led Có Thể Điều Chỉnh Độ Phóng",
			"Discount":0,
			"Old_price":0,
			"New_Price":"229.000",
			"ImageURL":"images/product-27.png"
		},
		{
			"ProductName":"Đầu Đồng Đệm Động Cơ B10-8mm",
			"Discount":0,
			"Old_price":0,
			"New_Price":"15.000",
			"ImageURL":"images/product-28.png"
		},
	];
	function print_owl_slider(_ProductList){
		let _s = "";
		for (var i = 0; i < 12; i++) {
			if ((i+1)%2!=0) {
				_s+=`<div class="product-slider">`;
			}
			
			if (_ProductList[i].Discount <1) {
				_s+=`
					<div class="product">
						<a href="#">
							<div class="img-holder">
								<a href="#">
									<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
								</a>
							</div>
							<div class="product-info">
								<a href="#">
									<h5>${_ProductList[i].ProductName}</h5>
								</a>
								<span class="price-new">${_ProductList[i].New_Price}₫</span>
								<div class="overlay">
									<div class="overlay-content">
										<button class="btn buy-product" type="button">
											<i class="fas fa-shopping-basket"></i>
											<span>Mua hàng</span>
										</button>
										<button class="btn find-product" type="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</a>
					</div>
					`;
			}else {
				_s+=
					`
					<div class="product">
						<div class="img-holder">
							<a href="#">
								<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
								<div class="discount">
									<span>${_ProductList[i].Discount}%</span>
									<p>GIẢM</p>
								</div>
							</a>
						</div>
						<div class="product-info">
							<a href="#">
								<h5>${_ProductList[i].ProductName}</h5>
							</a>
							<span class="price-old">${_ProductList[i].Old_price}₫</span>
							<span class="price-new">${_ProductList[i].New_Price}₫</span>
							<div class="overlay">
								<div class="overlay-content">
									<button class="btn buy-product" type="button">
										<i class="fas fa-shopping-basket"></i>
										<span>Mua hàng</span>
									</button>
									<button class="btn find-product" type="button">
										<i class="fas fa-search"></i>
									</button>
								</div>
							</div>
						</div>
					</div>

					`;
			}
			if ((i+1)%2 == 0) {
				_s+=`</div>`;
				
			}
		}
		let productListNode = document.getElementById('owl-silder-1');
		productListNode.innerHTML = _s;
	}
	function print_mid_main_1(_ProductList){
		let _s = "";
		for (var i = 12; i < 20; i++) {
			if (_ProductList[i].Discount <1) {
				_s+=`
				<div class="col-6 col-md-3">
					<div class="product">
						<a href="#">
							<div class="img-holder">
								<a href="#">
									<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
								</a>
							</div>
							<div class="product-info">
								<a href="#">
									<h5>${_ProductList[i].ProductName}</h5>
								</a>
								<span class="price-new">${_ProductList[i].New_Price}₫</span>
								<div class="overlay">
									<div class="overlay-content">
										<button class="btn buy-product" type="button">
											<i class="fas fa-shopping-basket"></i>
											<span>Mua hàng</span>
										</button>
										<button class="btn find-product" type="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				`;
			}else {
				_s+=
					`
					<div class="col-6 col-md-3">
						<div class="product">
							<div class="img-holder">
								<a href="#">
									<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
									<div class="discount">
										<span>${_ProductList[i].Discount}%</span>
										<p>GIẢM</p>
									</div>
								</a>
							</div>
							<div class="product-info">
								<a href="#">
									<h5>${_ProductList[i].ProductName}</h5>
								</a>
								<span class="price-old">${_ProductList[i].Old_price}₫</span>
								<span class="price-new">${_ProductList[i].New_Price}₫</span>
								<div class="overlay">
									<div class="overlay-content">
										<button class="btn buy-product" type="button">
											<i class="fas fa-shopping-basket"></i>
											<span>Mua hàng</span>
										</button>
										<button class="btn find-product" type="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					`;
			}
		}
		let productListNode = document.getElementById('print_2');
		productListNode.innerHTML = _s;
	}
	function print_mid_main_2(_ProductList){
		let _s = "";
		for (var i = 20; i < 28; i++) {
			if (_ProductList[i].Discount <1) {
				_s+=`
				<div class="col-6 col-md-3">
					<div class="product">
						<a href="#">
							<div class="img-holder">
								<a href="#">
									<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
								</a>
							</div>
							<div class="product-info">
								<a href="#">
									<h5>${_ProductList[i].ProductName}</h5>
								</a>
								<span class="price-new">${_ProductList[i].New_Price}₫</span>
								<div class="overlay">
									<div class="overlay-content">
										<button class="btn buy-product" type="button">
											<i class="fas fa-shopping-basket"></i>
											<span>Mua hàng</span>
										</button>
										<button class="btn find-product" type="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
				`;
			}else {
				_s+=
					`
					<div class="col-6 col-md-3">
						<div class="product">
							<div class="img-holder">
								<a href="#">
									<img src="${_ProductList[i].ImageURL}" alt="product" loading="lazy">
									<div class="discount">
										<span>${_ProductList[i].Discount}%</span>
										<p>GIẢM</p>
									</div>
								</a>
							</div>
							<div class="product-info">
								<a href="#">
									<h5>${_ProductList[i].ProductName}</h5>
								</a>
								<span class="price-old">${_ProductList[i].Old_price}₫</span>
								<span class="price-new">${_ProductList[i].New_Price}₫</span>
								<div class="overlay">
									<div class="overlay-content">
										<button class="btn buy-product" type="button">
											<i class="fas fa-shopping-basket"></i>
											<span>Mua hàng</span>
										</button>
										<button class="btn find-product" type="button">
											<i class="fas fa-search"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					`;
			}
		}
		let productListNode = document.getElementById('print_3');
		productListNode.innerHTML += _s;
	}

	print_owl_slider(products);
	print_mid_main_1(products);
	print_mid_main_2(products);

	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$("#go-up").fadeIn();
			$('.section_1').css("background-color","black");
		}else {
			$("#go-up").fadeOut();
			$('.section_1').css("background-color","rgba(255,255,255,0.1)");
		}
	});

	$('#go-up').click(function(){
		$('html ,body').animate({scrollTop :0},300);
	});

	$( ".product" ).hover(
		function() {
			$(this).find('.overlay').css('width','100%');
		}, function() {
			$(this).find('.overlay').css('width','0%');
		}
	);
	$('#open-sidebar').click(function(e) {
		$('#wrapper').toggleClass('toggled');
		$('#mobile-overlay').toggle();
	});

	$('#mobile-overlay').click(function() {
		$('#mobile-overlay').hide('200');
		$('#wrapper').removeClass('toggled');
	});
	$('#close-sidebar').click(function() {
		$('#mobile-overlay').hide('200');
		$('#wrapper').removeClass('toggled');
	});


	$('footer .owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	    		items:2,
	            nav:false
	    	},
	        768:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:false,
	            loop:true
	        }
	    }
	});

	$('main .owl-carousel').owlCarousel({
	    loop:false,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	    		items:2,
	            nav:false
	    	},
	        768:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:false,
	            loop:false
	        }
	    }
	});
});