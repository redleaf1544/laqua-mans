var storyContent = {"inkVersion":21,"root":[["#","^SINGLE_SENTENCE: on","/#","#","^AUTO_STYLE: [anonymous_2 log out]@logrole","/#","#","^AUTO_STYLE: [anonymous_2 log in]@logrole","/#","#","^AUTO_STYLE: [Liko log out]@logrole","/#","#","^AUTO_STYLE: [Liko log in]@logrole","/#","^那个……","\n","^……","\n","^……你好，有人在吗？","\n","^我看到这里显示着有人在线。","\n","ev","str","^这里是私人聊天室，你是通过邀请链接进来的吗？","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n","^私人……邀请？","\n","^对不起……我不太懂…","\n","^我昨天才下载了这个软件，我的朋友们说现在时兴这样的社交方式。","\n","^那个……我现在有点不安。","\n","^希望您能……帮帮我。 ",{"->":"main"},"\n",{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"main":[["ev","str","^怎么了？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^我不知道怎么说……","\n","^手机的信号忽然变得很差，别的软件几乎发不出任何消息……！","\n","^只有这个聊天室可用。","\n","^我在其他的房间都试着发了求助信息，但没有任何回应。","\n",["ev","str","^你可以试试紧急电话","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^讲故事可以去小说房间","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"emcall"},"\n",{"#f":5}],"c-1":["^ ",{"->":"dontfool"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":1}],"emcall":["^我试过。","\n","^但每个号码都是不在服务区。","\n","^我也试着打过亲人的电话，也是一样的没有人接……","\n","^说…说实话，要是没有你的回复的话，我可能真的要绝望了。","\n","^不管怎么说，谢谢。 ",{"->":"main1"},"\n",{"#f":1}],"dontfool":["^我没有在开玩笑……","\n","^请你相信我！","\n","^我知道我说的很乱也很像是唬人的把戏，但是我真的不知道要怎么办才好了。","\n","^你要当做我在讲故事也可以！","\n","^只是、求你别下线……","\n","^……","\n","^我真的很害怕…… ",{"->":"main1"},"\n",{"#f":1}],"main1":[["ev","str","^你至少得告诉我发生了什么吧","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^——","\n","^我……","\n","^我坐地铁坐过头了！！","\n","^呜呜……","\n",["ev","str","^……","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"main2"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"main2":["^现在地铁也关掉了……","\n","^Vber也打不到车……","\n","^明明昨晚十二点前就睡了、下午还睡了两节课——但还是莫名其妙地睡着了。","\n","^一觉醒来就到了陌生的终点站，头还很痛。","\n","^……我难道是在地铁上被袭击了？","\n","^这边好像是没开发的山区，也太荒了吧……","\n",{"->":"calmdown"},{"#f":1}],"calmdown":[["ev","str","^冷静点","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",["ev","str","^看看地铁的站点信息","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^对哦。我这就看！","\n",{"->":"logout"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"logout":["#","^SINGLE_SENTENCE: off","/#","^[anonymous_2 log out]","\n","^[anonymous_2 log in]","\n","#","^SINGLE_SENTENCE: on","/#",{"->":"login"},{"#f":1}],"login":[["^完了……","\n","^除了和旧线路的换乘站以外一站都没印象。","\n","^这下真的完蛋了。","\n","^外面天也开始黑了。","\n","^怎么办……","\n","ev","str","^手机上叫车吧","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^导航软件还可以用吗","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"calluber"},"\n",{"#f":5}],"c-1":["^ ",{"->":"main3"},"\n",{"#f":5}]}],{"#f":1}],"calluber":["^刚才就在打了。","\n","^不仅一直都没人接单……网络也很差，订单创建断断续续的，一直在重启。","\n","^这边有那么远吗……好烦。","\n","^不知道该怎么办才好了。","\n",["ev","str","^导航软件还可以用吗","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"main3"},"\n",{"#f":5}]}],{"#f":1}],"main3":["^……喔……太好了！","\n","^导航地图能联网！","\n","^我设置好路线了，试试走一段路看看。","\n",{"->":"main4"},{"#f":1}],"main4":["^我看了一下地图，大约10公里半径内全都是未开发的荒区。","\n","^头太晕了，就像睡了一个很长很长的觉。","\n",["ev","str","^走的时候小心一点","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"main5"},{"#f":5}]}],{"#f":1}],"main5":[["ev","str","^有补给吗？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^补给？","\n","^啊、有的！","\n","^我书包里有炒面面包和水杯，水杯里大概有一半的水。","\n","^还有……","\n","^坏了，我没带充电宝。","\n","^手机还有76%的电量。","\n","^感觉不够用啊……","\n","^太阳快要下山了，我先关掉手机走一段路。","\n","^真的太谢谢你了……我叫Liko！","\n","^等我回去了一定会感谢你的。","\n","^我先下了！","\n",{"->":"main6"},{"#f":5}]}],{"#f":1}],"main6":[["#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^呜……累死我了……","\n","^脚好酸。","\n","^走了这么久别说人烟了、车道都没看到。","\n","^……！","\n","^Vber——Vber有人接单了！！","\n","ev","str","^(消息未发送）","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^得、得救了！","\n","^我先在这里歇会，顺便等车过来。","\n","^终于能回家了。","\n","^呜哇、等了一会，好冷啊，我只穿了校服和外套欸……","\n","^现在天彻底黑了，不过车已经快到了。","\n",["ev","str","^(消息未发送）","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^匿名1、你还在吗？","\n","^啊，车来了。","\n","^我上车了！","\n","^呜……好暖和。车内有开空调呢。","\n","^感觉、有点困了……","\n","^啊不行不行，一定要清醒。","\n","^不能再睡了！","\n",["ev","str","^不要去","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^啊、你上线了！","\n","^没事没事。","\n","^司机虽然没有说话，但是我确认过车牌号和他的订单信息了。","\n","^没错的。","\n","^……终于能回家了，总算是能安心了。","\n","^妈妈肯定等急了。","\n","^不知道到了信号覆盖范围内会有多少通未接来电啊，哈哈哈。","\n",{"->":"car"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"car":[["ev","str","^真的没错吗","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^对啊？","\n","^……","\n","^不用疑惑的吧？","\n","^车牌号是对的，订单信息也是对的，还有哪里……","\n",["ev","str","^司机怎么样","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"car1"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"car1":[["^司机是…","\n","^……欸、","\n","^他是、男的……应该，是中年人……？不对、好像是青年的女……","\n","^我……忘记了。","\n","^车的中间装了挡板……我、我看不清。","\n","^司机长什么样子——","\n","^我不记得了。","\n","^……怎么办。","\n","^难道是……人口拐卖………","\n","^不、不要，怎么办啊！救救我！","\n","^车窗被锁上了、我打不开！","\n","ev","str","^先不要打草惊蛇","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^你站着说话不腰疼啊！","\n",["ev","str","^……一般来说，轿车的门窗是不可能在驾驶座锁上的情况下打开的","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^……","\n","^……对不起。","\n","^怎么办……","\n","^你能帮我报警吗？","\n","^求你了我之后会让妈妈给你钱的！只要你救我我们家有的都、","\n","^——说是这么说……我连自己在哪里都不知道。","\n","^……","\n",{"->":"main7"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"main7":[["^……为什么是我啊。","\n","^我不就是不小心睡着了吗？！","\n","^谁来、救救我……","\n","ev","str","^对不起","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^……","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"main7a"},"\n",{"#f":5}],"c-1":["^ ",{"->":"main7a"},"\n",{"#f":5}]}],{"#f":1}],"main7a":[["^……没关系。","\n","^反正本来就……跟你无关。","\n","^……我先下了。","\n","^……？等下、","\n","^车、车停下来了！","\n","^虽、虽然没听到声音，但是车子解锁了……司机好像下车了！","\n","ev","str","^快跑","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^记得保持安静","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"main8"},"\n",{"#f":5}],"c-1":[{"->":"main8"},"\n",{"#f":5}]}],{"#f":1}],"main8":[["^嗯！我先下线！","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^好奇怪、","\n","^司机……不见了。","\n","^周围像是……荒山一样……都是杂草。","\n","^车子好像是顺着盘山公路上来的。","\n","^驾驶座的门开着。","\n","ev","str","^你没有跑吗？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^我正准备跑的！但总感觉很奇怪……就稍微在车门旁边蹲了一会。","\n","^什么声音都没有。","\n","^……太奇怪了，这到底怎么回事啊……","\n","^汽车还是点火的状态，车灯也亮着，但是周围除了我一个人都没有。","\n","^报警电话还是打不通……","\n","^啊啊……好烦，要是会开车就把这车直接开走了。","\n","^……好、当我没说，油表已经空了。","\n","^说实话我真的好累，能不能在这车里睡一晚上啊？","\n",["ev","str","^刚脱离拐卖危机就这么想是不是有点粗神经了？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^……","\n","^外面真的很冷嘛！刚入秋而已怎么会这么冷啊，冻得我满手鸡皮疙瘩。","\n","^也不知道司机开到这种荒山上到底有什么目的。","\n","^钥匙倒是还在车上，总之我先把车门都关上了，我现在坐在驾驶座上。","\n","^……也没什么用啊。","\n","^我还是回不去。","\n",["ev","str","^先看看车里有没有什么用得上的东西吧","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^对。","\n","^走一步算一步吧。","\n","^我看看，我听说现在高级轿车会有中控屏，这车子外面看上去那么……额、顺滑？但内饰很旧啊，只有收音机没有中控屏。","\n","^调了半天，都只有断断续续的沙沙声。","\n","^我也不知道那几个交通电台的频道。","\n","^后视镜上挂着一个小猫的挂饰哎，还挺可爱的，但我对车主的印象已经一点不剩了。","\n","^我想想……一般放东西会放在副驾这边的抽屉里吧？","\n","^哦，还真找到了！","\n","^但都是些没用的杂物啊，有个饰品，好像是水晶？","\n","^要不要拿走啊？看上去很贵的样子……","\n","^匿名？你又下线了吗？","\n","^好吧，我拿走了。","\n","^等下。","\n",{"->":"main8a"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"main8a":[["^广播好像收到什么了。","\n","^。。","\n","^/我开了语音识别。你能看懂吗。","\n","^/恶劣。天、勿外出。避，公馆正在开放中。欢迎光临。开放中。临。","\n","^你听到了吗？","\n","^它好像说……附近有建筑！","\n","^我在抽屉里也找到一张折页传单，看上去很旧了，但是上面描述着一个叫“拉克亚公馆”的地方。","\n","^……要过去吗？","\n","^空调制暖从刚刚开始就停了，现在车里很冷。","\n","^我也不想承认但是……我现在好累。","\n","^而且车现在已经打不起火了。","\n","^……我是绝对不会在这这辆车里过夜的。","\n","^首先我不知道车主会不会回来。","\n","^其次外面真的很冷，没有空调的话我感觉熬不过去……嗯。","\n","ev","str","^也没什么别的选择了","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^那你怎么过去呢","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"main9"},{"#f":5}],"c-1":["\n",{"->":"main9"},{"#f":5}]}],{"#f":1}],"main9":[["^虽说手机完全没信号了，但是自带的指南针还能用！","\n","^传单上附有一张简易的地图。","\n","^路线是一条直线，路上也有别墅方设置的标志物，应该不会走错。","\n","^我先按照传单上的走。","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^44&这","#","^（$l@%@","/#","\n","^为何。","\n","^——soTXT么bzh*～","\n","ev","str","^liko？","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^你还好吗？","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n",{"->":"main10"},{"#f":5}],"c-1":["\n",{"->":"main10"},{"#f":5}]}],{"#f":1}],"main10":[["^我住进来了！！","\n","^太好了！！","\n","^刚刚有些紧张，把手机捏在手里，应该是误触了。","\n","^谢谢你关心我。","\n","^我现在在客房里，稍等一下。","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^我来了。","\n","^在起居室接了一杯水。","\n","^我按照地图走了一段时间，大概有二十分钟到半小时？总之走得脚都快没知觉了——路上基本上没有任何人行的道路，都是野生的林地……","\n","^中途还摔了一跤。","\n","^好像崴到脚了，现在还是很痛。","\n","^不知道走了多久，才终于看到了类似别墅的建筑物。","\n","^幸好别墅还亮着灯。","\n","^走过去的时候在附近看到了广告标牌，上面大概写了简介和别墅的特点……看起来风光还可以，不过……","\n","^那个司机会不会就是想到这里来啊？","\n","^那为什么要弃车离开呢？","\n","^不管了，我继续说吧。","\n","^别墅的门没有关紧，我太冷了，就直接推门进去了。","\n","^里面果然装了空调！这大半夜的一路上身上都冻得快结霜了。","\n","ev","str","^有人在吗？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^啊、有的！","\n","^虽然出现的方式吓了我一跳哈哈！","\n","^别墅的管理人是位先生，大概二十岁的青年样子？","\n","^我还在玄关不知所措的时候，管理人突然从我背后出现，问我是谁。","\n","^吓了我一大跳！","\n","^然后我也吓了他一大跳哈哈哈。","\n","^管理人是今晚看到的第一个活人，都有种恍若隔世的感觉了。","\n","^差点说不出话来。","\n","^他看到我崴了脚，还找了药箱，给了我一些止痛药。","\n","^人真好啊。","\n","^管理人说，现在是淡季以及公馆关闭休整内务的时间，所以可以让我借住！","\n","^然后是一些馆内的注意事项。","\n","^他也要求我小心一点，说是公馆毕竟是度假酒店，要是弄坏了设施会追责。","\n","^其次是尽管现在不对外开放，但是有几位客人是长租的，这些客人基本都是艺术创作者，脾气会很古怪，希望我多体谅。","\n","^……我只会呆在自己的房间的（笑）","\n",["ev","str","^联络呢，应该不能长住吧","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^嗯！不过管理人也说了这边网络信号时有时无的，最近休整也把公用的线路暂时停掉了，他说可以让我借住到公用电话线接好、或者我联络上外界。","\n","^对了，匿名1，你帮我告诉一下妈妈吧？","\n","^我等下发她的联系方式给你。","\n","^这样的话明天应该就能让妈妈报警了。","\n","^啊、还有一条是建议我不要在馆内胡乱走动。","\n","^因为休整的时候整个馆几乎只有他和几位长租的客人，他有自己的事情不希望把时间都浪费在找我上。","\n","^今天真的太长了，我好累！","\n","^啊、稍等。","\n",["ev","str","^？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":[{"->":"main11"},"\n",{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":1}],"main11":[["^好奇怪啊。","\n","^明明听到了鞋跟的声音停留在门口，但是没有人敲门。","\n","^难道是管理人说的长租的房客吗？","\n","^……要不开门看看？","\n","ev","str","^看看吧","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^最好不要","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":[{"->":"main11a"},"\n",{"#f":5}],"c-1":[{"->":"main11b"},"\n",{"#f":5}]}],{"#f":1}],"main11a":["^好。","\n","^唔……这门也没有猫眼啊……","\n","^稍等，我直接开门吧。","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#",{"->":"main12"},{"#f":1}],"main11b":["^好。","\n","^可能是别的房客吧。","\n","^我可能最多在这里住个一两天，就这么点时间还是不要惹麻烦为好。","\n","^不过听声音的话，他好像是站在门口了。","\n","^……有点诡异啊。","\n","^不敲门也不离开的、干什么呢……","\n","^对方……应该没有钥匙吧。","\n","^……","\n","^我就开一点点……","\n","^稍微看一下。","\n",{"->":"main12"},{"#f":1}],"main12":[["^好奇怪。","\n","^什么都没有。","\n","^走廊上是完全空旷的一片。","\n","^唔……","\n","^我……觉得有点不一样，但是我不知道哪里不一样。","\n","^就好像……我认识这个走廊？","\n","^太空旷了，也很简洁……别墅的走廊是这样的吗？","\n","^聊天室没法发送照片，我也很难描述。","\n","^总感觉，有点眼熟。","\n","ev","str","^为什么？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^额，我很难说。","\n","^像……医院？","\n","^对。","\n","^没错。","\n","^度假别墅喜欢这么装修吗？","\n","^不过走廊是空的。","\n","^所以是我没听到对方离开的脚步声……？","\n","^好奇怪啊，干嘛要这样……","\n","^！","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^我信号恢复了一点！！","\n","^我之前就编辑好求助短信了！","\n","^啊啊啊要打电话的时候又没信号了！","\n","^短信倒是已发送了……但我能收到回信吗……","\n","^唉、不管了。","\n","^脚好痛啊，止痛药是不是没效果啊。","\n","^不过在这里应该是安全的。","\n","^我先休息了。","\n","^[Liko log out]","\n",["ev","str","^晚安","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":"night"},{"#f":5}]}],{"#f":5}]}],{"#f":1}],"night":[["^[Liko log in]","\n","^醒了。","\n","^好困啊感觉一直在做梦……","\n","^呃……忽然好恶心。头也很痛，像是有什么东西在脑子里乱钻一样。","\n","^匿名你应该睡了吧？","\n","^……我不想出房间。","\n","^我吃点止痛药看能不能挨过去吧。","\n","#","^SINGLE_SENTENCE: off","/#","^[Liko log out]","\n","^[Liko log in]","\n","#","^SINGLE_SENTENCE: on","/#","^等下。","\n","^这个止痛药是过期的。","\n","^这玩意我睡前吃了得有五六片、","\n","^忍不住了、好想吐。","\n","^、…！","\n","^……","\n","^……幸好房间有独卫。","\n","^好难受。","\n","^头越来越痛了，应该是昨晚在野外被风吹到感冒了。","\n","^哎。","\n","^门外有种奇怪的声音……","\n","ev","str","^这个时间？","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^你在啊。","\n","^很难形容，嗯……有一点水声？像是什么东西在地上拖着脚走路……啪嗒啪嗒地……一边走一边滴水的感觉。","\n","^不会是什么危险的动物吧……","\n","^还有一种奇怪的味道。","\n","^隐隐约约的什么肉腐烂的味道，若有若无但是好恶心。","\n","^正在修整污水管道吗难道。","\n","^但是独卫那边没有味道、反而是越靠近门好像越明显。","\n","^呃……好恶心……","\n","^又想吐了……","\n","^！","\n","^我刚刚过去听声音但是太黑了想站起来的时候又崴了一下我摔在门口弄出了很大的声音","\n","^外面开灯了","\n","^只有滴水的声音了就在我面前","\n","^我想起来了是昨晚的鞋跟脚步声是一样的被水声盖住了啪嗒的东西是肉","\n","^河水","\n","^/","\n","^/","\n","^/","\n","^[Liko log out]","\n","^——","\n","^DAY 1 END","\n","^PLEASE TURN TO DAY 2","\n","end",{"#f":5}]}],{"#f":1}],"#f":1}],"listDefs":{}};