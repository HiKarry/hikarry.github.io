> 作者：小螃蟹
>> 更新时间：2019-09-10

帝国OL的战斗系统中一直存在着一个隐藏属性：怒气。  
但是很多玩家都不知道怒气到底有什么作用，那么今天就由我亲手来为大家揭开怒气那羞答答的面纱。

其实怒气的含义就是仇恨值，而仇恨值会影响怪物和宠物攻击的目标。

可能有些玩家已经通过某些技能的描述了解到了怒气的存在，例如以下这些技能：


<a href="http://helper/skill/55942"><img src="/empire/image/skill/76_4.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>挫志怒吼(20级)</span><br/>

<a href="http://helper/skill/57198"><img src="/empire/image/skill/4_4.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>斷筋(20级)</span><br/>

<a href="http://helper/skill/56606"><img src="/empire/image/skill/11_4.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>破甲(20级)</span><br/>

<a href="http://helper/skill/21074"><img src="/empire/image/skill/111_4.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>破甲射擊(20级)</span><br/>

<a href="http://helper/skill/166585"><img src="/empire/image/skill/4_1.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>斷筋攻擊(3级)</span><br/>

<a href="http://helper/skill/166405"><img src="/empire/image/skill/11_1.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>破甲攻擊(3级)</span><br/>

<a href="http://helper/skill/176909"><img src="/empire/image/skill/111_1.png" width="36" height="36" style="vertical-align: middle;" /></a> <span>穿甲射擊(3级)</span><br/>

或者这些怪物的技能：


<a href="http://helper/monster/49243"><img src="/empire/image/monster/5057.png" width="50" height="50" style="vertical-align: text-bottom;" /></a> <span>卷軸中的不死者（精英）</span><br/>

<a href="http://helper/monster/52042"><img src="/empire/image/monster/5216.png" width="50" height="50" style="vertical-align: text-bottom;" /></a> <span>惡魔安迪路</span><br/>

那么下面就来说一下怒气的具体作用。

#### 一、怒气值的计算

跟其它属性一样，怒气值也是有范围限制的。进入战斗后，怒气值初始为0，最低不少于-10万，最高不超过10万。

当玩家对敌人造成伤害时，敌人每损失一滴血，玩家的怒气值加1。

当玩家使用附带怒气的技能时，玩家会加上技能的怒气值。   
例如20级破甲技能的技能描述为：`敌人怒气+20000`。玩家使用该技能后，玩家的怒气值会增加20000，而不是敌人增加怒气值。

由于只有一个怪物技能会降低怒气值，其它技能都增加怒气值，所以怒气值要低于-10万基本是不可能的。


#### 二、怪物的攻击逻辑

在主动回合，怪物会根据**技能释放条件**优先使用主动技能，如果没有合适的主动技能，就会使用普通攻击。

例如查看以下怪物的技能：

<a href="http://helper/monster/51006"><img src="/empire/image/monster/5111.png" width="53" height="53" style="vertical-align: text-bottom;" /></a> <span>死神</span><br/>

由于`死亡凋零`技能在第二回合才会释放，所以第一回合死神会进行普通攻击。


#### 三、宠物的攻击逻辑

宠物如果设置为自动战斗状态，则和怪物的攻击逻辑类似。  
宠物在主动回合技能会优先释放技能，如果没有合适的主动技能，就会使用普通攻击。


#### 四、普通攻击的对象

当怪物和宠物进行普通攻击时，会有30%的概率随机攻击敌人，70%的概率攻击怒气值最高的敌人。  
如果所有敌人的怒气值都相同，则会攻击位置靠前的敌人。

玩家可以带上宠物到新手村打小怪进行测试，因为小怪没有技能只会普通攻击，以打10只小怪的战斗为例：

1、进入战斗后，玩家和宠物进行防御，这时大约有8只怪物会攻击宠物，只有2只怪物会攻击玩家。  
因为进入战斗后，玩家和宠物的怒气值都为0，怪物就攻击了位置靠前的宠物。

2、玩家和宠物多防御几回合，结果还是大同小异。

3、如果玩家用普通攻击打一只小怪，宠物继续防御。那么从下一回合开始，会变成有8只怪物攻击玩家，而只有2只怪物攻击宠物了。

4、玩家和宠物多防御几回合，结果还是大同小异。

可能有小伙伴会问了：“为什么不是7只怪物攻击宠物，而是8只呢？”  
因为怪物有70%的概率攻击宠物，有30%的概率随机攻击，那么宠物受到攻击的概率就是`70% + 30% / 2 = 85%`，大概受到8次攻击的数量了。


#### 五、怒气有什么用途

1、有些副本的怪物被封魔后会使用普通攻击，这时可以利用怒气值来吸引怪物的仇恨。

2、打某些怪物可以考虑玩家的站位，比如脆皮不要太靠前。

3、一个合格的奶妈要精确计算每个角色的伤害值，从而估算每个队友的怒气值，将复活术用在关键的人物上。

4、我编不下去了。

<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">
<script src="https://unpkg.com/gitalk@latest/dist/gitalk.min.js"></script> 
<script src="/empire/js/library.js"></script> 
<script type="text/javascript">setTitle("怒气值作用大揭秘，第四条必看");</script>
        