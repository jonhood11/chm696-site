---
kernelspec:
  name: python3
  display_name: Python 3
---

# Python plotting demonstration

This page verifies that Python executes when the website is built. The first figure is generated with Matplotlib and embedded as a static image. The second is generated with Plotly and remains interactive in the published website.

## Matplotlib

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-4, 4, 500)
y1 = np.exp(-((x + 1.1) ** 2) / 0.8)
y2 = 0.72 * np.exp(-((x - 1.2) ** 2) / 1.3)

fig, ax = plt.subplots(figsize=(7, 4))
ax.plot(x, y1, color="#cfb991", linewidth=2.5, label="Signal A")
ax.plot(x, y2, color="#8e6f3e", linewidth=2.5, label="Signal B")
ax.set(xlabel="Coordinate", ylabel="Intensity", title="Python-generated figure")
ax.legend(frameon=False)
ax.spines[["top", "right"]].set_visible(False)
plt.show()
```

## Interactive Plotly figure

Use the toolbar to zoom, pan, and inspect the curves.

```{code-cell} python
:tags: [hide-input]
import plotly.graph_objects as go

figure = go.Figure()
figure.add_scatter(x=x, y=y1, mode="lines", name="Signal A")
figure.add_scatter(x=x, y=y2, mode="lines", name="Signal B")
figure.update_layout(
    title="Interactive Python-generated figure",
    xaxis_title="Coordinate",
    yaxis_title="Intensity",
    template="plotly_white",
)
figure.show()
```

The Python code above runs during the Jupyter Book build. Plotly supplies browser-side interaction after the page has been published; no Python server is required for students to view it.
