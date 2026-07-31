# Machine Learning: Model Selection

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Occam’s razor and the law of parsimony

Occam's razor and the law of parsimony

:::{note}
Occam's razor The simplest explanation is generally the correct one. When faced with competing hypotheses, the one with the fewest assumptions should be selected.
:::

:::{note}
Pareto Principle Also known as the 80/20 rule, this principle states that roughly 80$\%$ of effects come from 20$\%$ of causes.
:::


:::{note} Original-slide figure pending review
The original lecture refers to `Occam.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::


:::{note} Original-slide figure pending review
The original lecture refers to `Pareo.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::
*Vilfredo Pareto, 1848-1923*
## Pareto Principle


:::{note} Original-slide figure pending review
The original lecture refers to `Pareto_principle.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## DFT development


:::{note} Original-slide figure pending review
The original lecture refers to `DFT_error.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Extrapolation error

The figure shows how the interpolation and extrapolation errors from the SVD least-squares fit change as a function of the complexity of the model.


:::{note} Original-slide figure pending review
The original lecture refers to `extrapolation.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Model selection: Cross validation


:::{note} Original-slide figure pending review
The original lecture refers to `cross-validation.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

- Cross-validation: averaging models built on different experiments

- Cross-validation over models improves performance

- Regularization (i.e., LASSO graphs) shows superior performance


## Thresholding


:::{note} Original-slide figure pending review
The original lecture refers to `thresholding.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

- Thresholding: zeroing-out small loadings

- Thresholding improves performance of non-regularized models


## k-fold cross-validation


:::{note} Original-slide figure pending review
The original lecture refers to `k-fold.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Model selection


- How do you know you have a good model?

- Is this the best model?

:::{note}
Kullback-Leibler (KL) divergence 
```{math}
I(f,g) = \int f(\mathbf{x}, \beta) \log \biggl[ \frac{f(\mathbf{x}, \beta)}{g(\mathbf{x}, \mu)} \biggr]
```


- $f(\mathbf{x}, \beta) \ge 0$ and $g(\mathbf{x}, \mu)\ge 0$ are [probability distribution functions]{style="color: blue"} (PDFs).

- $f(\mathbf{x}, \beta)$ represents the \"true\" data distribution with its parameters $\beta$.

- $g(\mathbf{x}, \mu)$ represents the proposed model's distribution with its parameters $\mu$.

- $I(f,g)$ measures the information lost when $g$ is used to represent $f$.

- If $f = g$, there is no information lost.
:::


## KL divergence: example


:::{note} Original-slide figure pending review
The original lecture refers to `KL_divergence.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

- $f$ represents the truth (the distribution you want to model); $g$ are the models proposed to describe $f$.

- The model with the smallest KL divergence is considered the best model.


## Akaike Information Criterion (AIC)

The problem: often we do not know the exact function $f$!

:::{note}
Akaike Information Criterion (AIC) 
```{math}
AIC = 2K - 2 \log [L(\hat{\mu}|\mathbf{x})]
```

:::

- K is the number of parameters used in the model; it acts as a penalty for complexity.

- L is the maximized value of the likelihood function for the model. This term measures the model's goodness-of-fit to the data.

- Effectively, we want to find the model parameters $\hat{\mu}$ that maximize $\log(L)$. Maximizing $\log(L)$ is equivalent to minimizing the Sum of Squared Errors (achieved by least-squares fitting) for the Gaussian (normal) distribution of errors.

- The $-2 \log(L)$ term rewards models that fit the data well.

- The model with the lowest AIC score provides the optimal balance between fitting the data accurately and maintaining a simple, parsimonious structure.


## Bayesian Information Criterion BIC


:::{note}
Bayesian Information Criterion (AIC) 
```{math}
BIC = \log(n)K - 2 \log [L(\hat{\mu}|\mathbf{x})]
```

:::

- $n$ is the sample size on which the model was trained.

- The term $\log(n)K$ as a whole acts as the penalty for model complexity. It penalizes model complexity more heavily when the sample size is large.

- As overfitting becomes easier with more data, $\log(n)K$ penalty becomes very stringent, imposing a high cost for every additional parameter (K) added to the model.

- If the \"true\" model is among the candidates, BIC is theoretically *guaranteed* to select it as the sample size $n$ approaches infinity.

---

*Migration source: `04_Machine_Learning/Linear_Regression2.tex` from the archived Overleaf export.*
