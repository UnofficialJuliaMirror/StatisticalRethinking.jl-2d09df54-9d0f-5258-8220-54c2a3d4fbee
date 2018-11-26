var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "StatisticalRethinking",
    "title": "StatisticalRethinking",
    "category": "page",
    "text": ""
},

{
    "location": "#StatisticalRethinking-1",
    "page": "StatisticalRethinking",
    "title": "StatisticalRethinking",
    "category": "section",
    "text": "StatisticalRethinking is a Julia implementation of the code accompanying the book StatisticalRethinking.CurrentModule = StatisticalRethinking"
},

{
    "location": "#StatisticalRethinking.maximum_a_posteriori-Tuple{Any,Any,Any}",
    "page": "StatisticalRethinking",
    "title": "StatisticalRethinking.maximum_a_posteriori",
    "category": "method",
    "text": "maximumaposterior\n\nCompute the maximumaposteriori of a model. \n\nMethod\n\nmaximum_a_posteriori(model, lower_bound, upper_bound)\n\nRequired arguments\n\n* `model::Turing model`\n* `lower_bound::Float64`\n\nReturn values\n\n* `result`                       : Maximum_a_posterior vector\n\nExamples\n\nSee ...\n\n\n\n\n\n"
},

{
    "location": "#maximum_a_posteriori-1",
    "page": "StatisticalRethinking",
    "title": "maximum_a_posteriori",
    "category": "section",
    "text": "maximum_a_posteriori(model, lower_bound, upper_bound)"
},

{
    "location": "snippets00/#",
    "page": "Chapter 0 snippets",
    "title": "Chapter 0 snippets",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\""
},

{
    "location": "snippets00/#Chapter-0-snippets-1",
    "page": "Chapter 0 snippets",
    "title": "Chapter 0 snippets",
    "category": "section",
    "text": ""
},

{
    "location": "snippets00/#snippet-0.0-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.0",
    "category": "section",
    "text": "Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(300, 300))"
},

{
    "location": "snippets00/#snippet-0.1-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.1",
    "category": "section",
    "text": "println( \"All models are wrong, but some are useful.\" )"
},

{
    "location": "snippets00/#snippet-0.2-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.2",
    "category": "section",
    "text": "This is a StepRange, not a vectorx = 1:3\nx = x*10\nx = log.(x)\nx = sum(x)\nx = exp(x)\nx = x*10\nx = log(x)\nx = sum(x)\nx = exp(x)"
},

{
    "location": "snippets00/#snippet-0.3-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.3",
    "category": "section",
    "text": "log( 0.01^200 )\n200 * log(0.01)"
},

{
    "location": "snippets00/#snippet-0.4-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.4",
    "category": "section",
    "text": "dataset(...) provides access to often used R datasets.cars = dataset(\"datasets\", \"cars\")If this is not a common R dataset, use e.g.: howell1 = CSV.read(joinpath(ProjDir, \"..\", \"..\",  \"data\", \"Howell1.csv\"), delim=\';\') df = convert(DataFrame, howell1)This reads the Howell1.csv dataset in the data subdirectory of this package,  StatisticalRethinking.jl. See also the chapter 4 snippets.Fit a linear regression of distance on speedm = lm(@formula(Dist ~ Speed), cars)estimated coefficients from the modelcoef(m)Plot residuals against speedfig1 = scatter( cars[:Speed], residuals(m),\n  xlab=\"Speed\", ylab=\"Model residual values\", lab=\"Model residuals\")Save the plot"
},

{
    "location": "snippets00/#snippet-0.5-1",
    "page": "Chapter 0 snippets",
    "title": "snippet 0.5",
    "category": "section",
    "text": "Thie contents of this snipper is partially replaced by snippet 0.0. If any of these packages is not installed in your Julia system, you can add it by e.g. Pkg.add(\"RDatasets\")This page was generated using Literate.jl."
},

{
    "location": "snippets02/#",
    "page": "Chapter 2 snippets",
    "title": "Chapter 2 snippets",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\""
},

{
    "location": "snippets02/#Chapter-2-snippets-1",
    "page": "Chapter 2 snippets",
    "title": "Chapter 2 snippets",
    "category": "section",
    "text": ""
},

{
    "location": "snippets02/#snippet-2.0-1",
    "page": "Chapter 2 snippets",
    "title": "snippet 2.0",
    "category": "section",
    "text": "Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))snippet 2.1@show ways  = [0  , 3 , 8 , 9 , 0 ];\n@show ways/sum(ways)snippet 2.2@show d = Binomial(9, 0.5);\n@show pdf(d, 6)snippet 2.3define gridp_grid = range( 0 , stop=1 , length=20 )define priorprior = ones( 20 )compute likelihood at each value in gridlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]compute product of likelihood and priorunstd_posterior = likelihood .* priorstandardize the posterior, so it sums to 1posterior = unstd_posterior  ./ sum(unstd_posterior)snippet 2.4p1 = plot( p_grid , posterior ,\n    xlab=\"probability of water\" , ylab=\"posterior probability\",\n    lab = \"interpolated\", title=\"20 points\" )\np2 = scatter!( p1, p_grid , posterior, lab=\"computed\" )\n\nsavefig(\"s2_4.pdf\")snippet 2.5prior1 = [p < 0.5 ? 0 : 1 for p in p_grid]\nprior2 = [exp( -5*abs( p - 0.5 ) ) for p in p_grid]\n\np3 = plot(p_grid, prior1,\n  xlab=\"probability of water\" , ylab=\"posterior probability\",\n  lab = \"semi_uniform\", title=\"Other priors\" )\np4 = plot!(p3, p_grid, prior2,  lab = \"double_exponential\" )\n\nsavefig(\"s2_5.pdf\")snippet 2.6 (see snippet 3_2 for explanations)p_grid = range(0, step=0.001, stop=1)\nprior = ones(length(p_grid))\nlikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]\nposterior = likelihood .* prior\nposterior = posterior / sum(posterior)\n\nsamples = sample(p_grid, Weights(posterior), length(p_grid))\n\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\n\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))\nsavefig(\"s2_6.pdf\")snippet 2.7 analytical calculationw = 6\nn = 9\nx = 0:0.01:1\nplot( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\")\nsavefig(\"s2_7.pdf\")snippet 2.8 The example is in stanglobetoss.jlThis page was generated using Literate.jl."
},

{
    "location": "snippets03/#",
    "page": "Chapter 3 snippets",
    "title": "Chapter 3 snippets",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\""
},

{
    "location": "snippets03/#Chapter-3-snippets-1",
    "page": "Chapter 3 snippets",
    "title": "Chapter 3 snippets",
    "category": "section",
    "text": ""
},

{
    "location": "snippets03/#snippet-3.0-1",
    "page": "Chapter 3 snippets",
    "title": "snippet 3.0",
    "category": "section",
    "text": "Load Julia packages (libraries) needed  for the snippets in chapter 0using StatisticalRethinking\ngr(size=(600,300))snippet 3.1PrPV = 0.95\nPrPM = 0.01\nPrV = 0.001\nPrP = PrPV*PrV + PrPM*(1-PrV)\nPrVP = PrPV*PrV / PrPsnippet 3.2Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1)all priors = 1.0prior = ones(length(p_grid))Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid]As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* priorScale posterior such that they become probabilitiesposterior = posterior / sum(posterior)Sample using the computed posterior values as weightsIn this example we keep the number of samples equal to the length of p_grid, but that is not required.N = 10000\nsamples = sample(p_grid, Weights(posterior), N)\nfitnormal= fit_mle(Normal, samples)\n\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\n\np[1] = scatter(1:N, samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( fitnormal.μ, fitnormal.σ ) , x ), lab=\"Normal approximation\")\nplot(p..., layout=(1, 2))\nsavefig(\"s3_1.pdf\")This page was generated using Literate.jl."
},

{
    "location": "snippets04/#",
    "page": "Chapter 4 snippets",
    "title": "Chapter 4 snippets",
    "category": "page",
    "text": "EditURL = \"https://github.com/TRAVIS_REPO_SLUG/blob/master/\""
},

{
    "location": "snippets04/#Chapter-4-snippets-1",
    "page": "Chapter 4 snippets",
    "title": "Chapter 4 snippets",
    "category": "section",
    "text": ""
},

{
    "location": "snippets04/#snippet-4.0-1",
    "page": "Chapter 4 snippets",
    "title": "snippet 4.0",
    "category": "section",
    "text": "Load Julia packages (libraries) needed  for the snippetsusing StatisticalRethinkingsnippet 4.1No attempt has been made to condense this too fewer lines of codenoofsteps = 20;\nnoofwalks = 15;\npos = Array{Float64, 2}(rand(Uniform(-1, 1), noofsteps, noofwalks));\npos[1, :] = zeros(noofwalks);\ncsum = cumsum(pos, dims=1);\n\nf = Plots.font(\"DejaVu Sans\", 6)\nmx = minimum(csum) * 0.9Plot and annotate the random walksp1 = plot(csum, leg=false, title=\"Random walks ($(noofwalks))\")\nplot!(p1, csum[:, Int(floor(noofwalks/2))], leg=false, title=\"Random walks ($(noofwalks))\", color=:black)\nplot!(p1, [5], seriestype=\"vline\")\nannotate!(5, mx, text(\"step 4\", f, :left))\nplot!(p1, [9], seriestype=\"vline\")\nannotate!(9, mx, text(\"step 8\", f, :left))\nplot!(p1, [17], seriestype=\"vline\")\nannotate!(17, mx, text(\"step 16\", f, :left))Generate 3 plots of densities at 3 different step numbers (4, 8 and 16)p2 = Vector{Plots.Plot{Plots.GRBackend}}(undef, 3);\nplt = 1\nfor step in [4, 8, 16]\n  indx = step + 1 # We aadded the first line of zeros\n  global plt\n  fit = fit_mle(Normal, csum[indx, :])\n  x = (fit.μ-4*fit.σ):0.01:(fit.μ+4*fit.σ)\n  p2[plt] = density(csum[indx, :], legend=false, title=\"$(step) steps\")\n  plot!( p2[plt], x, pdf.(Normal( fit.μ , fit.σ ) , x ), fill=(0, .5,:orange))\n  plt += 1\nend\np3 = plot(p2..., layout=(1, 3))\n\nplot(p1, p3, layout=(2,1))snippet 4.2prod(1 .+ rand(Uniform(0, 0.1), 10))snippet 4.3growth = [prod(1 .+ rand(Uniform(0, 0.1), 10)) for i in 1:10000];\nfit = fit_mle(Normal, growth)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(growth, lab=\"\'sample\' distribution\")snippet 4.4big = [prod(1 .+ rand(Uniform(0, 0.5), 12)) for i in 1:10000];\nsmall = [prod(1 .+ rand(Uniform(0, 0.01), 12)) for i in 1:10000];\nfitb = fit_mle(Normal, big)\nfits = fit_mle(Normal, small)\np1 = plot(Normal(fitb.μ , fitb.σ ), lab=\"Big normal distribution\", fill=(0, .5,:orange))\np2 = plot(Normal(fits.μ , fits.σ ), lab=\"Small normal distribution\", fill=(0, .5,:orange))\ndensity!(p1, big, lab=\"\'big\' distribution\")\ndensity!(p2, small, lab=\"\'small\' distribution\")\nplot(p1, p2, layout=(1, 2))snippet 4.5log_big = [log(prod(1 .+ rand(Uniform(0, 0.5), 12))) for i in 1:10000];\nfit = fit_mle(Normal, log_big)\nplot(Normal(fit.μ , fit.σ ), fill=(0, .5,:orange), lab=\"Normal distribution\")\ndensity!(log_big, lab=\"\'sample\' distribution\")snippet 4.6Grid of 1001 stepsp_grid = range(0, step=0.001, stop=1);all priors = 1.0prior = ones(length(p_grid));Binomial pdflikelihood = [pdf(Binomial(9, p), 6) for p in p_grid];As Uniform priar has been used, unstandardized posterior is equal to likelihoodposterior = likelihood .* prior;Scale posterior such that they become probabilitiesposterior = posterior / sum(posterior);Sample using the computed posterior values as weights In this example we keep the number of samples equal to the length of p_grid, but that is not required.samples = sample(p_grid, Weights(posterior), length(p_grid));\n\np = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)\n\np[1] = scatter(1:length(p_grid), samples, markersize = 2, ylim=(0.0, 1.3), lab=\"Draws\")analytical calculationw = 6\nn = 9\nx = 0:0.01:1\np[2] = density(samples, ylim=(0.0, 5.0), lab=\"Sample density\")\np[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab=\"Conjugate solution\")quadratic approximationplot!( p[2], x, pdf.(Normal( 0.67 , 0.16 ) , x ), lab=\"Normal approximation\", fill=(0, .5,:orange))\nplot(p..., layout=(1, 2))snippet 4.7howell1 = CSV.read(joinpath(dirname(Base.pathof(StatisticalRethinking)), \"..\", \"data\", \"Howell1.csv\"), delim=\';\')\ndf = convert(DataFrame, howell1)This page was generated using Literate.jl."
},

]}
