
#创建库
CREATE DATABASE phone CHARSET=UTF8;
#查数据库
SHOW DATABASES;
#用数据库
USE  phone;

#创建表(
	#用户表，表名：meizu_user(编号null，用户名 uname，密码upwd)
		CREATE TABLE meizu_user(
			uid INT PRIMARY KEY AUTO_INCREMENT,
			uname VARCHAR(30),
			upwd VARCHAR(30)
		);
		SET NAMES GBK;
		INSERT INTO meizu_user VALUES(null,'18357138700','sunshine');
		SELECT*FROM meizu_user;
	#产品表分类：meizu_product(编号null,类别表(meizu_hp,meizu_phone,meizu_da,meizu_pa))
        CREATE TABLE meizu_product(
        	tid INT PRIMARY KEY AUTO_INCREMENT,
        	tname VARCHAR(30)
        );
        SET NAMES GBK;
        INSERT INTO meizu_product VALUES(null,'meizu_hp'),(null,'meizu_phone'),(null,'meizu_da'),(null,'meizu_pa');
        SELECT*FROM meizu_product;
    #产品清单表meizu_plist
        CREATE TABLE meizu_plist(
                    pid INT PRIMARY KEY AUTO_INCREMENT,
                    pic VARCHAR(30),
                    pname VARCHAR(30),
                    desciption VARCHAR(100),
                    price DECIMAL(10,2),
                    tid INT
        );
        INSERT INTO meizu_plist VALUES
                (null,'1.png','魅蓝Note5','累计超18000台',899,1),
                (null,'2.png','魅蓝 E2','累计超12000台',1299,1),
                (null,'3.png','魅蓝 5s','累计超10000台',799,1),
                (null,'4.png','魅蓝 5','累计超18000台',699,1),
                (null,'5.png','魅蓝 E','累计超18000台',699,1),
                (null,'6.png','MEIZU-Flow 三单元耳机','流动之美 不绝于耳',599,1),
                (null,'7.png','魅族手环','腕间流动的心率专家',299,1),
                (null,'8.png','魅族旅行包','青春正好 即刻出发',269,1),
                (null,'9.png','魅族 EP51蓝牙运动耳机','摆脱束缚，更自由自在地运动',269,1),
                (null,'10.png','魅族HD50 头戴式耳机','清新简洁，有音质更有颜值',399,1),
                (null,'11.png','魅蓝 Note5','...',899,2),
                (null,'12.png','魅蓝 E','特惠100元 享3期免息',999,2),
                (null,'13.png','魅族PRO 6 Plus','购机特惠300元 享12期免息',2699,2),
                (null,'14.png','魅族PRO 6s','直降200 购机仅需2299元',2299,2),
                (null,'15.png','魅蓝 E2','三色现货 享3期免息',1299,2),
                (null,'16.png','魅族 MX6','拍照旗舰 购机享6期免息',1599,2),
                (null,'17.png','魅蓝 Max','领券立减200元 享3期免息',1699,2),
                (null,'18.png','魅蓝 A5','立减10元 享3期免息',699,2),
                (null,'19.png','魅蓝 5','购机享3期免息 高清屏长续航',0,2),
                (null,'20.png','魅蓝 5s','32G版限量赠壳＋膜 享3期免息',0,2),
                (null,'21.png','魅族HD50头戴式耳机','...',129,3),
                (null,'22.png','魅族HD50头戴式耳机','清新简洁，有音质更有颜值',399,3),
                (null,'23.png','魅族蓝牙小音箱','好音感 直达心灵',169,3),
                (null,'24.png','魅族 蓝牙通话耳机','经典小圆点 一键集大成',89,3),
                (null,'25.png','魅族手环','腕间流动的心率专家',229,3),
                (null,'26.png','魅族盒子',' 一键找回遥控器',399,3),
                (null,'27.png',' 魅族路由器 极速版','天生不凡 快狠稳',199,3),
                (null,'28.png','魅族旅行包','魅族旅行包',269,3),
                (null,'29.png','魅族 休闲旅行双肩包','曲面一体式 多功能隔层',199,3),
                (null,'30.png','魅族双口快充车载充电器','快充车载充电器',99,3),
                (null,'31.png','魅族 EP51蓝牙运动耳机','轻装上阵 乐享动听',269,3),
                (null,'32.png','先锋SEC-S531BT蓝牙运动耳机','反光线材 防汗设计',0,3),
                (null,'33.png','先锋重低音入耳式音乐耳机',' 强劲浑厚低音 9.4mm振膜',269,3),
                (null,'34.png','JBL T280A+ 入耳式耳机',' 全兼容专业线控 全金属机身',258,3),
                (null,'35.png','铁三角 ATH-CKR5 耳机',' 高清晰度音色',299,3),
                (null,'36.png','Beats Urbeats 入耳耳机',' 音质与外形兼得 经久耐用',788,3),
                (null,'37.png','铁三角 ATH-ES770H',' 铁三角 ATH-ES770H',1760,3),
                (null,'38.png','铁三角 ATH-MSR7',' 铁三角 ATH-MSR7',1580,3),
                (null,'39.png','Beats  pill+ 蓝牙音响',' Beats  pill+ 蓝牙音响',1888,3),
                (null,'40.png','JBL Charge2+ 迷你蓝牙音箱',' IPX5级防水 低音户外便携',0,3),
                (null,'41.png','纽曼虚拟现实智能VR眼','佩戴舒适 人性化设计',59,3),
                (null,'42.png','暴风魔镜S1虚拟现实智能VR眼镜','支持3期免息',0,3),
                (null,'43.png','飞智wee拉伸手柄',' 随时随地手机变掌机',179,3),
                (null,'44.png','北通蝙蝠有线游戏手柄',' 全北通蝙蝠有线游戏手柄',65,3),
                (null,'45.png','新游智能游戏手柄 Q1酷玩版',' 与手机适配性高 按键交互性强',0,3),
                (null,'46.png','乐心运动手环mambo','来电提醒 智能闹钟 睡眠监测',0,3),
                (null,'47.png','乐心体重秤S3','炫彩呼吸灯 250天超长续航',99,3),
                (null,'48.png','飞科剃须刀FS373',' 全身水洗 智能操控系统',99,3),
                (null,'49.png','CILINE-沁麟2.5L智能靠谱煲','一键搞定饭菜汤',0,3),
                (null,'50.png','力博得声波牙刷MA','洁净亮白 我的第一支声波牙刷',0,3),
                (null,'51.png','雷柏蓝牙光学鼠标6010B','低能耗  蓝牙3.0无线传输',69,3),
                (null,'52.png','雷柏有线光学鼠标N3600','可调节光学引擎 前后进退按键',0,3),
                (null,'53.png','雷柏专业游戏鼠标 有线鼠标V21','镀金USB接口 防滑防汗设计',0,3),
                (null,'54.png','雷柏触控静音鼠标T8','丰富的触控手势 全新鼠标体验',0,4),
                (null,'55.png','雷柏电竞级激光游戏鼠标V310',' MOBA游戏模式 Fps游戏模式',0,3),
                (null,'56.png','雷柏轻薄电脑静音键盘N7000','有线静音键盘 镭雕键帽 更耐用',0,3),
                (null,'57.png','雷柏无线键盘E1050','静音键盘 持久电力 舒适手感',0,3),
                (null,'58.png','雷柏炫彩背光游戏键盘V56','游戏键盘 炫彩背光 防溅洒设计',0,3),
                (null,'59.png','雷柏无线超薄键鼠套装9060','紧凑设计 简单便捷',169,3),
                (null,'60.png','雷柏无线键鼠套装1800P3','防喷洒设计 更耐用',99,3),
                (null,'61.png','','',0,4),
                (null,'62.png','PRO 7 简约保护壳','二合一 全兼容',49,4),
                (null,'63.png','PRO 7 Plus全贴合防爆保护膜','耐用 才好用',0,4),
                (null,'64.png','魅族 Type-C 3.0数据线','环保线材 柔软耐折',59,4),
                (null,'65.png','魅族Micro USB数据线','广泛兼容 经久耐用',29,4),
                (null,'66.png','PRO 6s 音乐智能保护套','情怀未老，音乐不息',99,4),
                (null,'67.png','魅蓝 E2 环窗智能保护套','环窗操作 便捷高效',69,4),
                (null,'68.png','魅蓝 5s智能保护壳','清新亮丽 原质 原味',39,4),
                (null,'69.png','Note5 环窗智能保护套','适用魅蓝 Note5',69,4),
                (null,'70.png','快充电源适配器（UP0830）','快速充电 安全无忧',0,4),
                (null,'71.png','魅族二合一金属数据线','二合一兼容',49,4),
                (null,'72.png','魅族Micro USB金属数据线','耐用 才好用',29,4),
                (null,'73.png','魅族Micro USB数据线','广泛兼容 经久耐用',49,4),
                (null,'74.png','魅族Micro USB熊猫数据线','柔韧耐磨 全面兼容',49,4),
                (null,'75.png','罗马仕AC12S快充适配器','双USB充电可换 插脚设计',39,4),
                (null,'76.png','魅族Type-C金属数据线','支持2A快速充电 耐用又放心',0,4),
                (null,'77.png','魅族Type-C熊猫数据线','更高规格 更快传输',59,4),
                (null,'78.png','魅族Type-C3.0数据线','环保线材 柔软耐折',59,4),
                (null,'79.png','魅族Type-C转接头','小巧便携随心转换',19,4),
                (null,'80.png','快充电源适配器（UP0830）','快速充电 安全无忧',0,4),
                (null,'81.png','PRO 7 Plus简约保护壳','轻薄 精致 耐用',59,4),
                (null,'82.png','PRO 7 全贴合防爆保护膜','反复清洗 光洁如新',59,4),
                (null,'83.png','魅蓝 5s高透保护膜','更懂屏幕的保护膜',29,4),
                (null,'84.png','PRO 6 Plus全贴合防爆保护膜','轻薄 精致 可靠 耐用',0,4),
                (null,'85.png','魅蓝 E2 高透保护膜','为双眸定制的通透',29,4),
                (null,'86.png','goodName','魅蓝 Note5 缤纷软胶保护壳',0,4),
                (null,'87.png','魅蓝 Note5亲肤保护壳','纤薄舒适 恍若无物',59,4),
                (null,'88.png','魅蓝 5s智能保护壳','清新亮丽 原质 原味',39,4),
                (null,'89.png','PRO 6 Plus音乐智能保护套','无需掀盖完成便捷操作',99,4),
                (null,'90.png','魅蓝 E2 软胶保护壳','清莹透亮 量身定制',29,4);
                SELECT*FROM meizu_plist;
    #购物车表meizu_cart
		CREATE TABLE meizu_cart(
				cid INT PRIMARY KEY AUTO_INCREMENT,
				uid INT,
				pid INT,
				count INT
		);
		SELECT*FROM meizu_cart;