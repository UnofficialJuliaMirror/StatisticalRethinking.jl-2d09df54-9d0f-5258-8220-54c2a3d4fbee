# Origin of these programs


StatisticalRethinking.jl is based on the book [Statistical Rethinking](https://xcelab.net/rm/statistical-rethinking/) by Richard McElreath.

The Julia versions have been derived by Rob Goedman and are contained in the in github organization [StatisticalRethinkingJulia](https://github.com/StatisticalRethinkingJulia). 

## Copyright notice

The associated R packages 'rethinking` by Richard McElreath has been released under the GPL v3+ license, e.g. see https://exygy.com/which-license-should-i-use-mit-vs-apache-vs-gpl/

##  Limited liability

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 

## Permission to publish a Julia version

The author has given permission to publish this Julia version and in particular expressed acceptance of repackaging the data examples:

-------------------


On Jul 30, 2019, at 02:03, Richard McElreath <richard_mcelreath@eva.mpg.de> wrote:

Hi, Rob.

I licensed the package under GPL 3+, which I believe allows you to do
whatever you want. I certainly don't see any issues with repackaging
the data examples.

Really super work, by the way. (Snipped a further personal remark).

Anyway, if you need anything more, please just ask.

Cheers,
Richard

-------------------

On Mon, Jul 29, 2019 at 9:09 PM Rob J. Goedman <goedman@icloud.com> wrote:

First of all, thank you for a great book, R package and on-line lectures!

My name is Rob Goedman and I maintain a Julia (language) version of 
the [cmdstan interface](https://github.com/StanJulia). As such I 
am part of the Stan development team.

Since about a year I have explored (and released) some early versions 
of a Julia version of [StatisticalRethinking](https://github.com/StatisticalRethinkingJulia) and example 
implementations of most models in 3 available mcmc implementations 
in Julia  (the above mentioned StanJulia, [DynamicHMC.jl](https://github.com/tpapp/DynamicHMC.jl) and [Turing.jl](https://github.com/TuringLang/AdvancedHMC.jl)).

Currently I am working on a first official release (v”1.0.0”) and wanted
to check in if there are restrictions on re-use of the data files provided 
in the R package `rethinking` for that purpose (as Julia is mostly released 
under an MIT-license).

The question was also triggered by the fact that one of the models 
(m11.4 in the 2nd edition) results in different tuning results in 
cmdstan and in DynamicHMC and the author of that package has asked 
if he could use the data for that model for his test case.

Best,
Rob J Goedman
goedman@icloud.com
