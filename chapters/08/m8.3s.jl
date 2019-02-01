using StatisticalRethinking
using CmdStan, StanMCMCChain
gr(size=(500,500));

ProjDir = rel_path("..", "scripts", "08")
cd(ProjDir)

m_8_3_model = "
data{
  int N;
  vector[N] y;
}
parameters{
  real sigma;
  real alpha;
}
model{
  real mu;
  alpha ~ normal( 1 , 10 );
  sigma ~ cauchy( 0 , 1 );
  mu = alpha;
  y ~ normal( mu , sigma );
}
";

stanmodel = Stanmodel(name="m_8_3_model", monitors = ["alpha", "mu", "sigma"],
model=m_8_3_model, output_format=:mcmcchain);

m_8_3_data = Dict("N" => 2, "y" => [-1, 1]);

rc, chn, cnames = stan(stanmodel, m_8_3_data, ProjDir, diagnostics=false,
  summary=true, CmdStanDir=CMDSTAN_HOME);

rethinking = "
        mean   sd  5.5% 94.5% n_eff Rhat
alpha 0.06 1.90 -2.22  2.49  1321    1
sigma 2.15 2.32  0.70  5.21   461    1
";

describe(chn)

# This file was generated using Literate.jl, https://github.com/fredrikekre/Literate.jl
