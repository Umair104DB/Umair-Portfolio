fetch("../projects-data.json").then(r=>r.json()).then(items=>{
 const slug=document.body.dataset.project;const p=items.find(x=>x.slug===slug);if(!p)return;
 const esc=s=>String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
 document.title=p.title+" | Muhammad Umair Akhtar";
 document.getElementById("detailContent").innerHTML=`
 <section class="detail-hero"><div class="breadcrumbs"><a href="../index.html">Home</a> / <a href="../index.html#projects">Projects</a> / ${esc(p.title)}</div><p class="eyebrow">PROJECT OVERVIEW / ${esc(p.title.toUpperCase())}</p><h1>${esc(p.title.split(" ").slice(0,-1).join(" "))} <span class="gradient-text">${esc(p.title.split(" ").slice(-1).join(""))}</span></h1><p>${esc(p.description)}</p><div class="detail-tags">${p.technologies.map(t=>`<span>${esc(t)}</span>`).join("")}</div><div class="detail-actions"><a class="btn btn-primary" href="${esc(p.repo)}" target="_blank" rel="noopener">View GitHub Repository ↗</a><a class="btn btn-outline" href="../index.html#projects">All Projects</a></div></section>
 <div class="detail-cover"><img src="../${esc(p.image)}" alt="${esc(p.title)} project overview graphic"></div>
 <div class="detail-layout"><div class="detail-main">
 <section class="detail-block"><p class="eyebrow">01 / OVERVIEW</p><h2>What this project does</h2><p>${esc(p.description)}</p></section>
 <section class="detail-block"><p class="eyebrow">02 / MOTIVATION</p><h2>Why this project was developed</h2><p>${esc(p.why)}</p></section>
 <section class="detail-block"><p class="eyebrow">03 / FEATURES</p><h2>What is included</h2><ul>${p.features.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></section>
 <section class="detail-block"><p class="eyebrow">04 / WORKFLOW</p><h2>How it works</h2><div class="workflow">${esc(p.workflow)}</div></section>
 <section class="detail-block"><p class="eyebrow">05 / TECHNOLOGY</p><h2>Tools and technologies</h2><div class="detail-tags">${p.technologies.map(t=>`<span>${esc(t)}</span>`).join("")}</div><p>These technologies are listed in the supplied project documentation.</p></section>
 <section class="detail-block"><p class="eyebrow">06 / BENEFITS</p><h2>Benefits and applications</h2><ul>${p.benefits.map(v=>`<li>${esc(v)}</li>`).join("")}</ul>${p.applications.length?`<h3>Real-world applications</h3><ul>${p.applications.map(v=>`<li>${esc(v)}</li>`).join("")}</ul>`:""}</section>
 <section class="detail-block"><p class="eyebrow">07 / WHO IT MAY HELP</p><h2>Potential users</h2><p>Based on the stated project purpose, this work may be useful to:</p><ul>${p.audience.map(v=>`<li>${esc(v)}</li>`).join("")}</ul></section>
 ${p.scope?`<section class="detail-block"><p class="eyebrow">08 / SCOPE</p><h2>Notes and limitations</h2><p>${esc(p.scope)}</p></section>`:""}
 <a class="back-link" href="../index.html#projects">← Back to all projects</a></div>
 <aside class="detail-sidebar"><h3>Project at a glance</h3><p><b>Category</b><br>${esc(p.title)}</p><p><b>Technologies</b><br>${p.technologies.map(esc).join(" · ")}</p><p><b>Repository</b><br><a class="text-link" href="${esc(p.repo)}" target="_blank">Open on GitHub ↗</a></p><a class="btn btn-primary" href="${esc(p.repo)}" target="_blank">View Source Code ↗</a><a class="btn btn-outline" href="../index.html#projects">Explore More Projects</a></aside></div>`;
 document.querySelectorAll(".detail-block").forEach((el,i)=>{el.style.animationDelay=(Math.min(i,6)*.06)+"s"});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.1});
 document.querySelectorAll(".detail-block").forEach(el=>{el.classList.add("reveal");io.observe(el)});
});
