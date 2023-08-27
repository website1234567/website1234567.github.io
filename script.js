const link1 = document.getElementById("topic1");
const link2 = document.getElementById("topic2");
const link3 = document.getElementById("topic3");
const info = document. getElementById("info");

link1.addEventListener("click", function() {
    info.innerHTML =`
<h1>All Albums</h1>
<p>2006-Debut</p>
<p>2008-Fearless</p>
<p>2010-Speak Now</p>
<p>2012-Red</p>
<p>2014-1989</p>
<p>2017-Reputation</p>
<p>2019-Lover</p>
<p>2020-Folklore</p>
<p>2020-Evermore</p>
<p>2021-Fearless Taylor's Version</p>
<P>2021-Red Taylor's Version</p>
<p>2022-Midnights</p>
<p>2023-Speak Now Taylor's Version</p>
<P>2023 Upcoming-1989 Taylor's Version</p>
`
});

link2.addEventListener("click", function() {
    info.innerHTML =`
<h1>Taylor's Version</h1>
<p1> Taylor's Version is a re-record of her albums.</p1>
<p1>These re-records means Swift owns all the rights to the albums which she previously didn't own.</p1>
<p1> She has re-recorded three albums so far with her fourth re-record coming out in October.</p1>
<p1> She didn't own the rights to her first six albums but with only two more to re-record she will own all her music.</p1>
`
});

link3.addEventListener("click", function() {
    info.innerHTML =`
    <h1>Where to listen</h1>
    <p>You can listen to Taylor Swift's music on all streaming platforms including spotify.</p>
    <p>Use the link down below to stream her on Spotify</p>
 `
});