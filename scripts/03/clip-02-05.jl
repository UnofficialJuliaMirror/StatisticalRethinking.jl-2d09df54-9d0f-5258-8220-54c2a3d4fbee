# # clip-02-05.jl

# Load Julia packages (libraries) needed  for the snippets in chapter 0

using StatisticalRethinking, Optim
gr(size=(600,300));

# ### snippet 3.2

# Grid of 1001 steps

p_grid = range(0, step=0.001, stop=1);

# all priors = 1.0

prior = ones(length(p_grid));

# Binomial pdf

likelihood = [pdf(Binomial(9, p), 6) for p in p_grid];

# As Uniform prior has been used, unstandardized posterior is equal to likelihood

posterior = likelihood .* prior;

# Scale posterior such that they become probabilities

posterior = posterior / sum(posterior);

# ### snippet 3.3

# Sample using the computed posterior values as weights

N = 10000
samples = sample(p_grid, Weights(posterior), N);

# In StatisticalRethinkingJulia samples will always be stored
# in an MCMCChain.Chains object. 

#chn = Chains(reshape(samples, N, 1, 1), [:toss], Dict(:parameters => [:toss]));
chn = MCMCChain.Chains(reshape(samples, N, 1, 1), names=[:toss]);
#describe(chn)

# Plot the chain

plot(chn)

# Compute the MAP (maximum_a_posteriori) estimate

x0 = [0.5]
lower = [0.0]
upper = [1.0]

function loglik(x)
  ll = 0.0
  ll += log.(pdf.(Beta(1, 1), x[1]))
  ll += sum(log.(pdf.(Binomial(9, x[1]), repeat([6], N))))
  -ll
end

(qmap, opt) = quap(samples, loglik, lower, upper, x0)

# Show optimization results

opt

# Fit quadratic approcimation

quapfit = [qmap[1], std(samples, mean=qmap[1])]

# ### snippet 3.4

# Create a vector to hold the plots so we can later combine them

p = Vector{Plots.Plot{Plots.GRBackend}}(undef, 2)
p[1] = scatter(1:N, samples, markersize = 2, ylim=(0.0, 1.3), lab="Draws")

# ### snippet 3.5

# Analytical calculation

w = 6
n = 9
x = 0:0.01:1
p[2] = density(samples, ylim=(0.0, 5.0), lab="Sample density")
p[2] = plot!( x, pdf.(Beta( w+1 , n-w+1 ) , x ), lab="Conjugate solution")

# Add quadratic approximation

plot!( p[2], x, pdf.(Normal( quapfit[1], quapfit[2] ) , x ), lab="Quap approximation")
plot(p..., layout=(1, 2))

# End of `clip_02_05.jl`