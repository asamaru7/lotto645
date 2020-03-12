!function(){"use strict";$(function(){new Vue({el:".calculator",data:{reward:0,tax1:0,tax2:0,tax:0,selectedGame:0,games:[],selectedWin:5},computed:{amount:function(){var t=this.reward;if(isNaN(t))return alertify.error("정확한 숫자 형식이 아닙니다."),"";return t>5e4&&t<=3e8?(this.tax1=10*Math.floor(.22*(t-1e3)/10),this.tax2=0):t>3e8?(this.tax1=10*Math.floor(66e5),this.tax2=10*Math.floor(.33*(t-3e8-1e3)/10)):(this.tax1=0,this.tax2=0),this.tax=this.tax1+this.tax2,Math.floor(t-this.tax)}},watch:{reward:function(){var t=this.calcReward();parseInt(t)!==parseInt(this.reward)&&(this.selectedWin=0)},selectedGame:function(){this.setReward(this.selectedWin)}},mounted:function(){var t=this;$.getJSON("/api/games.json",function(e){t.games=e.list,t.selectedGame="n"+e.last})},methods:{moneyKorean:function(t){for(var e=["","일","이","삼","사","오","육","칠","팔","구"],r=["","십","백","천","만 ","십만 ","백만 ","천만 ","억 ","십억 ","백억 ","천억 ","조 ","십조 ","백조"],a=[],i=String(t),s=i.length,n="",o=0;o<s;o++)a[o]=i.substr(o,1);for(var h=s,c=0;c<s;c++){h--;var d="";""!==e[a[c]]&&(d=r[h],h>4&&(Math.floor(h/4)===Math.floor((h-1)/4)&&""!==e[a[c+1]]||Math.floor(h/4)===Math.floor((h-2)/4)&&""!==e[a[c+2]])&&(d=r[h].substr(0,1))),n+=e[a[c]]+d}return $.trim(n)},printNumber:function(t){return void 0===t||0===t?"-":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},rewardFocus:function(){this.reward<=0&&(this.reward="")},rewardBlur:function(){this.reward<=0&&(this.reward=0)},calcReward:function(){return this.selectedWin<=0?this.reward:this.games[this.selectedGame].wins[this.selectedWin][1]},setReward:function(t){t>0&&(this.selectedWin=t,this.reward=this.calcReward())}}})})}();
