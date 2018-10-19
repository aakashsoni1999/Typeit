var c=0;
function submit1(){
    clearInterval(timer1);
    var x=`this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really be considered a paragraph but just a series of run on sentences this should help you get faster at typing as im trying not to use too many difficult words in it although i think that i might start making it hard by including some more difficult letters I'm typing pretty quickly so forgive me for any mistakes i think that i will not just tell you a story about the time i went to the zoo and found a monkey and a fox playing together they`
    var y=document.getElementById("area1").value;
var j=0;
var cnt=0;
for(var i=0;(i<x.length)&&(j<y.length);i+=1,j+=1){
    if(x[i]!=y[j])
    {
        while(y[j]!=' '||y[i]=='.') {
            j+=1;
            if(j==y.length) break;
        }
        while(x[i]!=' '||x[i]=='.') {
            i+=1;
            if(i==x.length) break;
        }
        cnt--;
    }
    if(x[i]==' '||x[i]=='.'||((j==y.length-1)&&(x[i+1]==' ')))
    cnt++;
}
    var temp=Math.round((cnt/c)*60);
    var ans="";
    ans=ans+temp+" words per minute";
    document.getElementById("out1").innerHTML=ans;
    c=0;
}

function mycount1(){
    document.getElementById("t1").innerHTML=++c;
}
function mycount2(){
    document.getElementById("t2").innerHTML=++c;
}
function mycount3(){
    document.getElementById("t3").innerHTML=++c;
}

function submit3(){
    clearInterval(timer3);
    var x=`Once upon a time, a man and his wife had the good fortune to have a goose which laid a golden egg every day. Lucky though they were, they soon began to think they were not getting rich fast enough.

    They imagined that if the bird is able to lay golden eggs, its insides must be made of gold. And they thought that if they could get all that precious metal at once, they would get mighty rich very soon. So the man and his wife decided to kill the bird.
    
    However, upon cutting the goose open, they were shocked to find that its innards were like that of any other goose!
    
    MORAL: THINK BEFORE YOU ACT
    
    Kill not the goose that lays golden eggs is a popular proverb in English that is rooted in this story.
    
    When we use this proverb, we mean that anyone who feels entitled to, and tries to get more than he is already receiving, is most likely to get nothing at all in the future.
    
    
     
    Read the following example:
    
    Goose with the Golden Eggs StoryYoung Johnny had a very kind and generous uncle. Every time Johnny visited him with his parents, he was given five cents. One day, Johnny thought of buying a bike. The next time he met his uncle, he asked him for 50 dollars. “50 dollars?” exclaimed his uncle. “That is a lot of money!”
    
    “Well, you can afford it, and I want to buy a bike,” said Johnny. “You don’t have any children, so you should have a lot of money.”
    
    Johnny’s uncle was very angry. He did not like Johnny’s attitude.
    
    Johnny did not get 50 dollars. He did not get his five cents also any more.
    
    He had killed the goose that laid golden eggs. If he had been wiser, he would have at least got his five cents.
    
    Sometimes, we are not content with what we have, and wish for more. Such discontentment always results in unhappiness, and regret.`
    var y=document.getElementById("area3").value;
var j=0;
var cnt=0;
for(var i=0;(i<x.length)&&(j<y.length);i+=1,j+=1){
    if(x[i]!=y[j])
    {
        while(y[j]!=' '||y[i]=='.') {
            j+=1;
            if(j==y.length) break;
        }
        while(x[i]!=' '||x[i]=='.') {
            i+=1;
            if(i==x.length) break;
        }
        cnt--;
    }
    if(x[i]==' '||x[i]=='.'||((j==y.length-1)&&(x[i+1]==' ')))
    cnt++;
}
var temp=Math.round((cnt/c)*60);
    var ans="";
    ans=ans+temp+" words per minute";
    document.getElementById("out3").innerHTML=ans;
    c=0;
}

function submit2(){
    clearInterval(timer2);
    var x=`A greedy mouse saw a basket full of corn. He wanted to eat it. So he made a small hole in the basket. He squeezed in through the hole. He ate a lot of corn. He felt full and was very happy.

    Now he wanted to come out. He tried to come out through the small hole. He could not. His belly was full. He tried again. But it was of no use.
    
    The mouse started crying. A rabbit was passing by. It heard the mouse’s cry and asked, “Why are you crying, my friend?”
    
    The mouse explained, “I made a small hole and came into the basket to eat the corn. Now I am not able to get out through that hole.”
    
    The rabbit said, “It is because you ate too much. Wait till your belly shrinks.” The rabbit laughed and went away.
    
    Short Stories - Greedy MouseThe mouse fell asleep in the basket. The next morning his belly had shrunk. But he wanted to eat some more corn. He forgot all about getting out of the basket. So he ate the corn and his belly was really big again.
    
    After eating, the mouse remembered that he had to escape. But obviously, he could not. So he thought, “Oh! Now I will go out tomorrow.”
    
    The cat was the next passerby. He smelt the mouse in the basket. He lifted its lid and ate the mouse.`
    var y=document.getElementById("area2").value;
var j=0;
var cnt=0;
for(var i=0;(i<x.length)&&(j<y.length);i+=1,j+=1){
    if(x[i]!=y[j])
    {
        while(y[j]!=' '||y[i]=='.') {
            j+=1;
            if(j==y.length) break;
        }
        while(x[i]!=' '||x[i]=='.') {
            i+=1;
            if(i==x.length) break;
        }
        cnt--;
    }
    if(x[i]==' '||x[i]=='.'||((j==y.length-1)&&(x[i+1]==' ')))
    cnt++;
}
var temp=Math.round((cnt/c)*60);
var ans="";
ans=ans+temp+" words per minute";
document.getElementById("out2").innerHTML=ans;
c=0;
}