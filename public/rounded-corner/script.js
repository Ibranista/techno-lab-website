registerPaint(
  "rounded-shape",
  class {
    static get inputProperties() {
      return ["--path", "--radius"];
    }

    paint(ctx, size, properties) {
      const path = properties.get("--path").toString().trim();
      const radius = parseFloat(properties.get("--radius").toString()) || 0;

      if (!path) return;

      const points = path
        .split(",")
        .map((p) => p.trim().split(" ").map(Number));
      const w = size.width;
      const h = size.height;

      const cc = (x, y) => {
        let fx = 0,
          fy = 0;
        if (x.includes("calc")) {
          const tmp = x
            .replace("calc(", "")
            .replace(")", "")
            .split(/([+-])/);
          fx = (parseFloat(tmp[0]) / 100) * w + parseFloat(tmp[1]);
        } else if (x.includes("%")) {
          fx = (parseFloat(x) / 100) * w;
        } else if (x.includes("px")) {
          fx = parseFloat(x);
        }

        if (y.includes("calc")) {
          const tmp = y
            .replace("calc(", "")
            .replace(")", "")
            .split(/([+-])/);
          fy = (parseFloat(tmp[0]) / 100) * h + parseFloat(tmp[1]);
        } else if (y.includes("%")) {
          fy = (parseFloat(y) / 100) * h;
        } else if (y.includes("px")) {
          fy = parseFloat(y);
        }

        return [fx, fy];
      };

      const Ppoints = [];
      const Cpoints = [];
      const N = points.length;

      for (let i = 0; i < N; i++) {
        const j = i - 1 < 0 ? N - 1 : i - 1;
        const p = cc(points[i][0], points[i][1]);
        Ppoints.push([p[0], p[1]]);
        const pj = cc(points[j][0], points[j][1]);
        Cpoints.push([p[0] - (p[0] - pj[0]) / 2, p[1] - (p[1] - pj[1]) / 2]);
      }

      ctx.beginPath();
      ctx.moveTo(Cpoints[0][0], Cpoints[0][1]);
      for (let i = 0; i < Cpoints.length - 1; i++) {
        ctx.arcTo(
          Ppoints[i][0],
          Ppoints[i][1],
          Cpoints[i + 1][0],
          Cpoints[i + 1][1],
          radius
        );
      }
      ctx.arcTo(
        Ppoints[Cpoints.length - 1][0],
        Ppoints[Cpoints.length - 1][1],
        Cpoints[0][0],
        Cpoints[0][1],
        radius
      );
      ctx.closePath();
      ctx.fillStyle = "#000";
      ctx.fill();
    }
  }
);
