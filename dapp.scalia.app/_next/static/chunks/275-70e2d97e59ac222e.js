"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [275], {
        4275: function(t, e, a) {
            a.d(e, {
                A: function() {
                    return g
                },
                x: function() {
                    return y
                }
            });
            var n = a(2820),
                o = a(8613);
            ! function(t) {
                let {
                    insertAt: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!t || "undefined" == typeof document) return;
                let a = document.head || document.getElementsByTagName("head")[0],
                    n = document.createElement("style");
                n.type = "text/css", "top" === e && a.firstChild ? a.insertBefore(n, a.firstChild) : a.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t))
            }('html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}\n');
            var r = t => {
                    switch (t) {
                        case "success":
                            return l;
                        case "info":
                            return c;
                        case "warning":
                            return d;
                        case "error":
                            return u;
                        default:
                            return null
                    }
                },
                s = Array(12).fill(0),
                i = t => {
                    let {
                        visible: e
                    } = t;
                    return n.createElement("div", {
                        className: "sonner-loading-wrapper",
                        "data-visible": e
                    }, n.createElement("div", {
                        className: "sonner-spinner"
                    }, s.map((t, e) => n.createElement("div", {
                        className: "sonner-loading-bar",
                        key: "spinner-bar-".concat(e)
                    }))))
                },
                l = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                    clipRule: "evenodd"
                })),
                d = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                })),
                c = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                    clipRule: "evenodd"
                })),
                u = n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, n.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                    clipRule: "evenodd"
                })),
                m = () => {
                    let [t, e] = n.useState(!1);
                    return n.useEffect(() => {
                        let t = () => {
                            e(document.hidden)
                        };
                        return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t)
                    }, []), t
                },
                p = 1,
                f = new class {
                    constructor() {
                        this.subscribe = t => (this.subscribers.push(t), () => {
                            let e = this.subscribers.indexOf(t);
                            this.subscribers.splice(e, 1)
                        }), this.publish = t => {
                            this.subscribers.forEach(e => e(t))
                        }, this.addToast = t => {
                            this.publish(t), this.toasts = [...this.toasts, t]
                        }, this.create = t => {
                            var e;
                            let {
                                message: a,
                                ...n
                            } = t, o = "number" == typeof(null == t ? void 0 : t.id) || (null == (e = t.id) ? void 0 : e.length) > 0 ? t.id : p++, r = this.toasts.find(t => t.id === o), s = void 0 === t.dismissible || t.dismissible;
                            return r ? this.toasts = this.toasts.map(e => e.id === o ? (this.publish({ ...e,
                                ...t,
                                id: o,
                                title: a
                            }), { ...e,
                                ...t,
                                id: o,
                                dismissible: s,
                                title: a
                            }) : e) : this.addToast({
                                title: a,
                                ...n,
                                dismissible: s,
                                id: o
                            }), o
                        }, this.dismiss = t => (t || this.toasts.forEach(t => {
                            this.subscribers.forEach(e => e({
                                id: t.id,
                                dismiss: !0
                            }))
                        }), this.subscribers.forEach(e => e({
                            id: t,
                            dismiss: !0
                        })), t), this.message = (t, e) => this.create({ ...e,
                            message: t
                        }), this.error = (t, e) => this.create({ ...e,
                            message: t,
                            type: "error"
                        }), this.success = (t, e) => this.create({ ...e,
                            type: "success",
                            message: t
                        }), this.info = (t, e) => this.create({ ...e,
                            type: "info",
                            message: t
                        }), this.warning = (t, e) => this.create({ ...e,
                            type: "warning",
                            message: t
                        }), this.loading = (t, e) => this.create({ ...e,
                            type: "loading",
                            message: t
                        }), this.promise = (t, e) => {
                            let a;
                            if (!e) return;
                            void 0 !== e.loading && (a = this.create({ ...e,
                                promise: t,
                                type: "loading",
                                message: e.loading,
                                description: "function" != typeof e.description ? e.description : void 0
                            }));
                            let n = t instanceof Promise ? t : t(),
                                o = void 0 !== a;
                            return n.then(t => {
                                if (t && "boolean" == typeof t.ok && !t.ok) {
                                    o = !1;
                                    let n = "function" == typeof e.error ? e.error("HTTP error! status: ".concat(t.status)) : e.error,
                                        r = "function" == typeof e.description ? e.description("HTTP error! status: ".concat(t.status)) : e.description;
                                    this.create({
                                        id: a,
                                        type: "error",
                                        message: n,
                                        description: r
                                    })
                                } else if (void 0 !== e.success) {
                                    o = !1;
                                    let n = "function" == typeof e.success ? e.success(t) : e.success,
                                        r = "function" == typeof e.description ? e.description(t) : e.description;
                                    this.create({
                                        id: a,
                                        type: "success",
                                        message: n,
                                        description: r
                                    })
                                }
                            }).catch(t => {
                                if (void 0 !== e.error) {
                                    o = !1;
                                    let n = "function" == typeof e.error ? e.error(t) : e.error,
                                        r = "function" == typeof e.description ? e.description(t) : e.description;
                                    this.create({
                                        id: a,
                                        type: "error",
                                        message: n,
                                        description: r
                                    })
                                }
                            }).finally(() => {
                                var t;
                                o && (this.dismiss(a), a = void 0), null == (t = e.finally) || t.call(e)
                            }), a
                        }, this.custom = (t, e) => {
                            let a = (null == e ? void 0 : e.id) || p++;
                            return this.create({
                                jsx: t(a),
                                id: a,
                                ...e
                            }), a
                        }, this.subscribers = [], this.toasts = []
                    }
                },
                g = Object.assign((t, e) => {
                    let a = (null == e ? void 0 : e.id) || p++;
                    return f.addToast({
                        title: t,
                        ...e,
                        id: a
                    }), a
                }, {
                    success: f.success,
                    info: f.info,
                    warning: f.warning,
                    error: f.error,
                    custom: f.custom,
                    message: f.message,
                    promise: f.promise,
                    dismiss: f.dismiss,
                    loading: f.loading
                });

            function h() {
                for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
                return e.filter(Boolean).join(" ")
            }
            var v = t => {
                var e, a, o, s, l, d, c;
                let {
                    invert: u,
                    toast: p,
                    unstyled: f,
                    interacting: g,
                    setHeights: h,
                    visibleToasts: v,
                    heights: b,
                    index: y,
                    toasts: x,
                    expanded: w,
                    removeToast: E,
                    closeButton: k,
                    style: N,
                    cancelButtonStyle: B,
                    actionButtonStyle: S,
                    className: T = "",
                    descriptionClassName: C = "",
                    duration: M,
                    position: z,
                    gap: I = 14,
                    loadingIcon: R,
                    expandByDefault: Y,
                    classNames: P,
                    icons: j,
                    closeButtonAriaLabel: A = "Close toast",
                    pauseWhenPageIsHidden: L,
                    cn: H
                } = t, [D, U] = n.useState(!1), [O, W] = n.useState(!1), [_, F] = n.useState(!1), [K, V] = n.useState(!1), [X, q] = n.useState(0), [G, J] = n.useState(0), Q = n.useRef(null), Z = n.useRef(null), $ = 0 === y, tt = y + 1 <= v, te = p.type, ta = !1 !== p.dismissible, tn = p.className || "", to = p.descriptionClassName || "", tr = n.useMemo(() => b.findIndex(t => t.toastId === p.id) || 0, [b, p.id]), ts = n.useMemo(() => {
                    var t;
                    return null != (t = p.closeButton) ? t : k
                }, [p.closeButton, k]), ti = n.useMemo(() => p.duration || M || 4e3, [p.duration, M]), tl = n.useRef(0), td = n.useRef(0), tc = n.useRef(0), tu = n.useRef(null), [tm, tp] = z.split("-"), tf = n.useMemo(() => b.reduce((t, e, a) => a >= tr ? t : t + e.height, 0), [b, tr]), tg = m(), th = p.invert || u, tv = "loading" === te;
                td.current = n.useMemo(() => tr * I + tf, [tr, tf]), n.useEffect(() => {
                    U(!0)
                }, []), n.useLayoutEffect(() => {
                    if (!D) return;
                    let t = Z.current,
                        e = t.style.height;
                    t.style.height = "auto";
                    let a = t.getBoundingClientRect().height;
                    t.style.height = e, J(a), h(t => t.find(t => t.toastId === p.id) ? t.map(t => t.toastId === p.id ? { ...t,
                        height: a
                    } : t) : [{
                        toastId: p.id,
                        height: a,
                        position: p.position
                    }, ...t])
                }, [D, p.title, p.description, h, p.id]);
                let tb = n.useCallback(() => {
                    W(!0), q(td.current), h(t => t.filter(t => t.toastId !== p.id)), setTimeout(() => {
                        E(p)
                    }, 200)
                }, [p, E, h, td]);
                return n.useEffect(() => {
                    if (p.promise && "loading" === te || p.duration === 1 / 0 || "loading" === p.type) return;
                    let t, e = ti;
                    return w || g || L && tg ? (() => {
                        if (tc.current < tl.current) {
                            let t = new Date().getTime() - tl.current;
                            e -= t
                        }
                        tc.current = new Date().getTime()
                    })() : (tl.current = new Date().getTime(), t = setTimeout(() => {
                        var t;
                        null == (t = p.onAutoClose) || t.call(p, p), tb()
                    }, e)), () => clearTimeout(t)
                }, [w, g, Y, p, ti, tb, p.promise, te, L, tg]), n.useEffect(() => {
                    let t = Z.current;
                    if (t) {
                        let e = t.getBoundingClientRect().height;
                        return J(e), h(t => [{
                            toastId: p.id,
                            height: e,
                            position: p.position
                        }, ...t]), () => h(t => t.filter(t => t.toastId !== p.id))
                    }
                }, [h, p.id]), n.useEffect(() => {
                    p.delete && tb()
                }, [tb, p.delete]), n.createElement("li", {
                    "aria-live": p.important ? "assertive" : "polite",
                    "aria-atomic": "true",
                    role: "status",
                    tabIndex: 0,
                    ref: Z,
                    className: H(T, tn, null == P ? void 0 : P.toast, null == (e = null == p ? void 0 : p.classNames) ? void 0 : e.toast, null == P ? void 0 : P.default, null == P ? void 0 : P[te], null == (a = null == p ? void 0 : p.classNames) ? void 0 : a[te]),
                    "data-sonner-toast": "",
                    "data-styled": !(p.jsx || p.unstyled || f),
                    "data-mounted": D,
                    "data-promise": !!p.promise,
                    "data-removed": O,
                    "data-visible": tt,
                    "data-y-position": tm,
                    "data-x-position": tp,
                    "data-index": y,
                    "data-front": $,
                    "data-swiping": _,
                    "data-dismissible": ta,
                    "data-type": te,
                    "data-invert": th,
                    "data-swipe-out": K,
                    "data-expanded": !!(w || Y && D),
                    style: {
                        "--index": y,
                        "--toasts-before": y,
                        "--z-index": x.length - y,
                        "--offset": "".concat(O ? X : td.current, "px"),
                        "--initial-height": Y ? "auto" : "".concat(G, "px"),
                        ...N,
                        ...p.style
                    },
                    onPointerDown: t => {
                        tv || !ta || (Q.current = new Date, q(td.current), t.target.setPointerCapture(t.pointerId), "BUTTON" !== t.target.tagName && (F(!0), tu.current = {
                            x: t.clientX,
                            y: t.clientY
                        }))
                    },
                    onPointerUp: () => {
                        var t, e, a, n;
                        if (K || !ta) return;
                        tu.current = null;
                        let o = Number((null == (t = Z.current) ? void 0 : t.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                            r = new Date().getTime() - (null == (e = Q.current) ? void 0 : e.getTime());
                        if (Math.abs(o) >= 20 || Math.abs(o) / r > .11) {
                            q(td.current), null == (a = p.onDismiss) || a.call(p, p), tb(), V(!0);
                            return
                        }
                        null == (n = Z.current) || n.style.setProperty("--swipe-amount", "0px"), F(!1)
                    },
                    onPointerMove: t => {
                        var e;
                        if (!tu.current || !ta) return;
                        let a = t.clientY - tu.current.y,
                            n = t.clientX - tu.current.x,
                            o = ("top" === tm ? Math.min : Math.max)(0, a),
                            r = "touch" === t.pointerType ? 10 : 2;
                        Math.abs(o) > r ? null == (e = Z.current) || e.style.setProperty("--swipe-amount", "".concat(a, "px")) : Math.abs(n) > r && (tu.current = null)
                    }
                }, ts && !p.jsx ? n.createElement("button", {
                    "aria-label": A,
                    "data-disabled": tv,
                    "data-close-button": !0,
                    onClick: tv || !ta ? () => {} : () => {
                        var t;
                        tb(), null == (t = p.onDismiss) || t.call(p, p)
                    },
                    className: H(null == P ? void 0 : P.closeButton, null == (o = null == p ? void 0 : p.classNames) ? void 0 : o.closeButton)
                }, n.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, n.createElement("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), n.createElement("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }))) : null, p.jsx || n.isValidElement(p.title) ? p.jsx || p.title : n.createElement(n.Fragment, null, te || p.icon || p.promise ? n.createElement("div", {
                    "data-icon": ""
                }, p.promise && "loading" === p.type && !p.icon ? p.icon || (null == j ? void 0 : j.loading) || (null != j && j.loading ? n.createElement("div", {
                    className: "loader",
                    "data-visible": "loading" === te
                }, j.loading) : R ? n.createElement("div", {
                    className: "sonner-loader",
                    "data-visible": "loading" === te
                }, R) : n.createElement(i, {
                    visible: "loading" === te
                })) : null, "loading" !== p.type ? p.icon || (null == j ? void 0 : j[te]) || r(te) : null) : null, n.createElement("div", {
                    "data-content": ""
                }, n.createElement("div", {
                    "data-title": "",
                    className: H(null == P ? void 0 : P.title, null == (s = null == p ? void 0 : p.classNames) ? void 0 : s.title)
                }, p.title), p.description ? n.createElement("div", {
                    "data-description": "",
                    className: H(C, to, null == P ? void 0 : P.description, null == (l = null == p ? void 0 : p.classNames) ? void 0 : l.description)
                }, p.description) : null), p.cancel ? n.createElement("button", {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: p.cancelButtonStyle || B,
                    onClick: t => {
                        var e;
                        ta && (tb(), null != (e = p.cancel) && e.onClick && p.cancel.onClick(t))
                    },
                    className: H(null == P ? void 0 : P.cancelButton, null == (d = null == p ? void 0 : p.classNames) ? void 0 : d.cancelButton)
                }, p.cancel.label) : null, p.action ? n.createElement("button", {
                    "data-button": "",
                    style: p.actionButtonStyle || S,
                    onClick: t => {
                        var e;
                        null == (e = p.action) || e.onClick(t), t.defaultPrevented || tb()
                    },
                    className: H(null == P ? void 0 : P.actionButton, null == (c = null == p ? void 0 : p.classNames) ? void 0 : c.actionButton)
                }, p.action.label) : null))
            };

            function b() {
                if ("undefined" == typeof document) return "ltr";
                let t = document.documentElement.getAttribute("dir");
                return "auto" !== t && t ? t : window.getComputedStyle(document.documentElement).direction
            }
            var y = t => {
                let {
                    invert: e,
                    position: a = "bottom-right",
                    hotkey: r = ["altKey", "KeyT"],
                    expand: s,
                    closeButton: i,
                    className: l,
                    offset: d,
                    theme: c = "light",
                    richColors: u,
                    duration: m,
                    style: p,
                    visibleToasts: g = 3,
                    toastOptions: y,
                    dir: x = b(),
                    gap: w,
                    loadingIcon: E,
                    icons: k,
                    containerAriaLabel: N = "Notifications",
                    pauseWhenPageIsHidden: B,
                    cn: S = h
                } = t, [T, C] = n.useState([]), M = n.useMemo(() => Array.from(new Set([a].concat(T.filter(t => t.position).map(t => t.position)))), [T, a]), [z, I] = n.useState([]), [R, Y] = n.useState(!1), [P, j] = n.useState(!1), [A, L] = n.useState("system" !== c ? c : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), H = n.useRef(null), D = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), U = n.useRef(null), O = n.useRef(!1), W = n.useCallback(t => C(e => e.filter(e => {
                    let {
                        id: a
                    } = e;
                    return a !== t.id
                })), []);
                return n.useEffect(() => f.subscribe(t => {
                    if (t.dismiss) {
                        C(e => e.map(e => e.id === t.id ? { ...e,
                            delete: !0
                        } : e));
                        return
                    }
                    setTimeout(() => {
                        o.flushSync(() => {
                            C(e => {
                                let a = e.findIndex(e => e.id === t.id);
                                return -1 !== a ? [...e.slice(0, a), { ...e[a],
                                    ...t
                                }, ...e.slice(a + 1)] : [t, ...e]
                            })
                        })
                    })
                }), []), n.useEffect(() => {
                    if ("system" !== c) {
                        L(c);
                        return
                    }
                    "system" === c && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")), window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", t => {
                        let {
                            matches: e
                        } = t;
                        L(e ? "dark" : "light")
                    })
                }, [c]), n.useEffect(() => {
                    T.length <= 1 && Y(!1)
                }, [T]), n.useEffect(() => {
                    let t = t => {
                        var e, a;
                        r.every(e => t[e] || t.code === e) && (Y(!0), null == (e = H.current) || e.focus()), "Escape" === t.code && (document.activeElement === H.current || null != (a = H.current) && a.contains(document.activeElement)) && Y(!1)
                    };
                    return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t)
                }, [r]), n.useEffect(() => {
                    if (H.current) return () => {
                        U.current && (U.current.focus({
                            preventScroll: !0
                        }), U.current = null, O.current = !1)
                    }
                }, [H.current]), T.length ? n.createElement("section", {
                    "aria-label": "".concat(N, " ").concat(D),
                    tabIndex: -1
                }, M.map((t, a) => {
                    var o;
                    let [r, c] = t.split("-");
                    return n.createElement("ol", {
                        key: t,
                        dir: "auto" === x ? b() : x,
                        tabIndex: -1,
                        ref: H,
                        className: l,
                        "data-sonner-toaster": !0,
                        "data-theme": A,
                        "data-rich-colors": u,
                        "data-y-position": r,
                        "data-x-position": c,
                        style: {
                            "--front-toast-height": "".concat((null == (o = z[0]) ? void 0 : o.height) || 0, "px"),
                            "--offset": "number" == typeof d ? "".concat(d, "px") : d || "32px",
                            "--width": "".concat(356, "px"),
                            "--gap": "".concat(14, "px"),
                            ...p
                        },
                        onBlur: t => {
                            O.current && !t.currentTarget.contains(t.relatedTarget) && (O.current = !1, U.current && (U.current.focus({
                                preventScroll: !0
                            }), U.current = null))
                        },
                        onFocus: t => {
                            t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible || O.current || (O.current = !0, U.current = t.relatedTarget)
                        },
                        onMouseEnter: () => Y(!0),
                        onMouseMove: () => Y(!0),
                        onMouseLeave: () => {
                            P || Y(!1)
                        },
                        onPointerDown: t => {
                            t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible || j(!0)
                        },
                        onPointerUp: () => j(!1)
                    }, T.filter(e => !e.position && 0 === a || e.position === t).map((a, o) => {
                        var r, l;
                        return n.createElement(v, {
                            key: a.id,
                            icons: k,
                            index: o,
                            toast: a,
                            duration: null != (r = null == y ? void 0 : y.duration) ? r : m,
                            className: null == y ? void 0 : y.className,
                            descriptionClassName: null == y ? void 0 : y.descriptionClassName,
                            invert: e,
                            visibleToasts: g,
                            closeButton: null != (l = null == y ? void 0 : y.closeButton) ? l : i,
                            interacting: P,
                            position: t,
                            style: null == y ? void 0 : y.style,
                            unstyled: null == y ? void 0 : y.unstyled,
                            classNames: null == y ? void 0 : y.classNames,
                            cancelButtonStyle: null == y ? void 0 : y.cancelButtonStyle,
                            actionButtonStyle: null == y ? void 0 : y.actionButtonStyle,
                            removeToast: W,
                            toasts: T.filter(t => t.position == a.position),
                            heights: z.filter(t => t.position == a.position),
                            setHeights: I,
                            expandByDefault: s,
                            gap: w,
                            loadingIcon: E,
                            expanded: R,
                            pauseWhenPageIsHidden: B,
                            cn: S
                        })
                    }))
                })) : null
            }
        }
    }
]);