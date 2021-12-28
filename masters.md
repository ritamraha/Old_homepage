---
layout: page
title: Master's Thesis
permalink: masters.html
---

<p>I have done my Master's thesis on <span style="color:#F14E23"><b><i>Relaxed Energy Games</i></b></span> at <a href="https://www.irisa.fr/sumo/">SUMO team </a>, INRIA, Rennes under supervision of <a href="https://people.irisa.fr/Nicolas.Markey/">Nicolas Markey</a> and <a href="https://people.irisa.fr/Loic.Helouet/">Lo&iuml;c H&eacute;lou&euml;t</a>. I will be forever greatful to <a href="https://www.cmi.ac.in/~sri/">Prof. B. Srivathsan</a> for helping me not only to get the chance to work with them for my thesis but also in different aspects of my career. The theis led to <a href="https://dblp.org/rec/journals/corr/abs-1909-07653">this paper</a>.</p>
        
<p> You can check my <b>thesis presentation</b> by clicking <a href="assets/master_thesis/index.html" target="_blank">here</a> with the <b>thesis report</b> <a href="assets/master_thesis/raha_thesis.pdf" target="_blank">here</a> .</p>
        
<h2>Abstract:</h2>
<p> Energy reachability games are finite two player turn-based games played on weighted graphs.
    The objective of the game combines reachability objective(qualitative) with the (quantitative)
    requirement that the weights along a path must satisfy certain constraints (bounds). Besides
    having direct applications in reactive system synthesis with resource constraints, it is one of the
    simplest models that combine quantitative and qualitative objectives.<p>


<p> In this thesis, we first prove that under strict energy constraints (either only lower-bound constraint or interval constraint), those games are LOGSPACE-equivalent to energy games with
the same energy constraints but without reachability objective (i.e., for infinite runs). We then
consider two kinds of relaxations of the upper-bound constraints (while keeping the lower-bound
constraint strict): in the first one, called weak upper bound, the upper bound is absorbing, in the
sense that it allows receiving more energy when the upper bound is already reached, but the extra energy will not be stored; in the second one, we allow for temporary violations of the upper
bound, imposing limits on the number or on the amount of violations.
We prove that when considering weak upper bound, reachability objectives require memory, but
can still be solved in polynomial-time for one-player arenas; we prove that they are in coNP in
the two-player setting. Allowing for bounded violations makes the problem PSPACE-complete
for one-player arenas and EXPTIME-complete for two players.
</p>