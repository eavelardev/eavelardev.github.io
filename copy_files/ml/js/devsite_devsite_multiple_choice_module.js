(function(_ds) {
    var window = this;
    var qX = function(a) {
        return (0,
        _ds.Q)('<div class="devsite-multiple-choice-answer" answer-id="' + _ds.X(a.id) + '" role="button" tabindex="0"></div>')
    }
      , rX = function(a) {
        const b = a.Oq
          , c = a.Pq
          , d = a.Wr;
        let e = '<span class="devsite-multiple-choice-explanation-correctness">';
        a.correct ? 1 == c && 1 == d ? e += "Correct answer." : (a = _ds.S(b) + " of " + _ds.S(c) + " correct answers.",
        e += a) : 1 == d && (e += "Incorrect.");
        return (0,
        _ds.Q)(e + "</span><p></p>")
    };
    var tX = function(a) {
        a.eventHandler.listen(a, "click", b=>{
            sX(a, b)
        }
        )
    }
      , sX = function(a, b) {
        var c = _ds.bj(b.target, null, "devsite-multiple-choice-answer");
        if (!c || !c.hasAttribute("clicked")) {
            null == c || c.setAttribute("clicked", "");
            var d = null == c ? void 0 : c.getAttribute("answer-id");
            d && a.h.push(d.toString());
            var e = a.answers.find(g=>g.id.toString() === (null == d ? void 0 : d.toString()));
            b = null == e ? void 0 : e.Kj;
            var f = null == e ? void 0 : e.Yi;
            e = (null == e ? void 0 : e.Dq) || !1;
            uX(a, e);
            e && a.v++;
            null == c || c.setAttribute(e ? "correct" : "incorrect", "");
            if (f) {
                if (c = !a.hasAttribute("hide-correctness-message"))
                    c = _ds.M(rX, {
                        correct: e,
                        Oq: a.v,
                        Pq: a.C,
                        Wr: c
                    }),
                    f.insertBefore(c, f.firstChild);
                    // f.appendChild(c);
                f.style.display = "block"
            }
            b && vX(a, b, `${e}`)
        }
    }
      , uX = function(a, b) {
        b = new CustomEvent("devsite-multiple-choice-answer-selected",{
            detail: {
                "is-correct": b
            },
            bubbles: !0
        });
        a.dispatchEvent(b)
    }
      , vX = function(a, b, c) {
        const d = a.h.length;
        if (1 === d) {
            a.D = Date.now();
            let f;
            var e = {
                action: null == (f = a.De) ? void 0 : f.innerText,
                category: "MCE First Selection",
                label: null == b ? void 0 : b.innerText,
                value: c
            };
            a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{
                detail: e,
                bubbles: !0
            }))
        }
        if (d === a.answers.length) {
            e = a.answers.map(g=>g.id);
            e = _ds.zb(e, a.h) ? "Selected sequentially" : "Selected out of order";
            b = Math.floor((Date.now() - a.D) / 1E3);
            let f;
            e = {
                action: e,
                category: "MCE All Selected",
                label: null == (f = a.De) ? void 0 : f.innerText,
                value: `${b}`
            };
            a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{
                detail: e,
                bubbles: !0
            }))
        }
    }
      , wX = class extends _ds.E {
        constructor() {
            super();
            this.answers = [];
            this.j = [];
            this.C = this.v = 0;
            this.eventHandler = new _ds.G;
            this.D = 0;
            this.De = null;
            this.h = [];
            this.shuffle = !0
        }
        connectedCallback() {
            this.hasAttribute("preserve-order") && (this.shuffle = !1,
            this.removeAttribute("preserve-order"));
            for (var a = 0; a < this.children.length; a++) {
                const c = this.children[a];
                if (0 === a)
                    c.classList.add("devsite-multiple-choice-question"),
                    this.De = c;
                else {
                    var b = c.children[0];
                    const d = c.children[1];
                    b && b.classList.add("devsite-multiple-choice-option");
                    d && (d.classList.add("devsite-multiple-choice-explanation"),
                    d.style.display = "none");
                    const e = a;
                    let f = !1;
                    c.hasAttribute("correct") && (this.C++,
                    f = !0);
                    b = {
                        id: e,
                        Kj: b,
                        Yi: d,
                        Dq: f
                    };
                    this.answers.push(b);
                    this.shuffle && this.j.push(b);
                    c.removeAttribute("correct")
                }
            }
            for (a = 1; a < this.children.length; a++)
                _ds.Li(this.children[a]);
            if (this.shuffle)
                for (_ds.Ab(this.answers),
                a = _ds.zb(this.answers, this.j); a; )
                    _ds.Ab(this.answers),
                    a = !1;
            for (const c of this.answers)
                c.Kj && c.Yi && (a = _ds.M(qX, {
                    id: c.id.toString()
                }),
                a.appendChild(c.Kj),
                a.appendChild(c.Yi),
                this.appendChild(a));
            this.setAttribute("ready", "");
            tX(this)
        }
        disconnectedCallback() {
            _ds.H(this.eventHandler)
        }
    }
    ;
    try {
        window.customElements.define("devsite-multiple-choice", wX)
    } catch (a) {
        console.warn("Unrecognized DevSite custom element - DevsiteMultipleChoice", a)
    }
    ;
}
)(_ds_www);
