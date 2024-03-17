(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        3458: function(t, e, o) {
            Promise.resolve().then(o.t.bind(o, 2172, 23)), Promise.resolve().then(o.t.bind(o, 9361, 23)), Promise.resolve().then(o.bind(o, 2900))
        },
        2900: function(t, e, o) {
            "use strict";
            o.r(e), o.d(e, {
                Toaster: function() {
                    return l
                }
            });
            var r = o(9506),
                s = o(2820);
            let n = (0, s.createContext)(void 0),
                a = {
                    setTheme: t => {},
                    themes: []
                },
                u = () => {
                    var t;
                    return null !== (t = (0, s.useContext)(n)) && void 0 !== t ? t : a
                };
            var i = o(4275);
            let l = t => {
                let { ...e
                } = t, {
                    theme: o = "system"
                } = u();
                return (0, r.jsx)(i.x, {
                    theme: o,
                    className: "toaster group",
                    toastOptions: {
                        classNames: {
                            toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                            description: "group-[.toast]:text-muted-foreground",
                            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
                        }
                    },
                    ...e
                })
            }
        },
        2172: function() {},
        9361: function(t) {
            t.exports = {
                style: {
                    fontFamily: "'__Inter_aaf875', '__Inter_Fallback_aaf875'",
                    fontStyle: "normal"
                },
                className: "__className_aaf875"
            }
        }
    },
    function(t) {
        t.O(0, [275, 512, 184, 744], function() {
            return t(t.s = 3458)
        }), _N_E = t.O()
    }
]);