(function (t) {
    function s(s) {
        for (var a, c, n = s[0], o = s[1], r = s[2], d = 0, v = []; d < n.length; d++) c = n[d], Object.prototype.hasOwnProperty.call(e, c) && e[c] && v.push(e[c][0]), e[c] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
        u && u(s);
        while (v.length) v.shift()();
        return l.push.apply(l, r || []), i()
    }

    function i() {
        for (var t, s = 0; s < l.length; s++) {
            for (var i = l[s], a = !0, n = 1; n < i.length; n++) {
                var o = i[n];
                0 !== e[o] && (a = !1)
            }
            a && (l.splice(s--, 1), t = c(c.s = i[0]))
        }
        return t
    }

    var a = {}, e = {app: 0}, l = [];

    function c(s) {
        if (a[s]) return a[s].exports;
        var i = a[s] = {i: s, l: !1, exports: {}};
        return t[s].call(i.exports, i, i.exports, c), i.l = !0, i.exports
    }

    c.m = t, c.c = a, c.d = function (t, s, i) {
        c.o(t, s) || Object.defineProperty(t, s, {enumerable: !0, get: i})
    }, c.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, c.t = function (t, s) {
        if (1 & s && (t = c(t)), 8 & s) return t;
        if (4 & s && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (c.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & s && "string" != typeof t) for (var a in t) c.d(i, a, function (s) {
            return t[s]
        }.bind(null, a));
        return i
    }, c.n = function (t) {
        var s = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return c.d(s, "a", s), s
    }, c.o = function (t, s) {
        return Object.prototype.hasOwnProperty.call(t, s)
    }, c.p = "/";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [], o = n.push.bind(n);
    n.push = s, n = n.slice();
    for (var r = 0; r < n.length; r++) s(n[r]);
    var u = o;
    l.push([0, "chunk-vendors"]), i()
})({
    0: function (t, s, i) {
        t.exports = i("56d7")
    }, "1b3b": function (t, s, i) {
        t.exports = "./img/icon-iOS.b44d699c.svg"
    }, 4313: function (t, s, i) {
        t.exports = "./img/icon-android.c036d76d.svg"
    }, "56d7": function (t, s, i) {
        "use strict";
        i.r(s);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var a = i("2b0e"), e = function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "layout"}, [i("div", {staticClass: "wrapper"}, [i("div", {staticClass: "crumbs"}, [t._v(" Fanler • Рейтинг букмекеров ")]), i("Title"), t._m(0), i("div", {staticClass: "content"}, [i("ul", {staticClass: "content-tabs"}, t._l(t.mockTabs, (function (s) {
                    return i("li", {staticClass: "content-tabs__tab"}, [t._v(" " + t._s(s) + " "), i("span", {staticStyle: {margin: "0 0 0 4px"}}, [t._v("21")])])
                })), 0), i("div", {staticClass: "content-container"}, [i("BookmakersTable"), i("Sidebar")], 1)])], 1)])
            }, l = [function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {staticClass: "sidebar--mobile-static"}, [a("div", {staticClass: "filters"}, [a("img", {
                    attrs: {
                        width: "11",
                        src: i("5cf6"),
                        alt: ""
                    }
                }), t._v(" Фильтры")]), a("div", {staticClass: "new"}, [a("img", {
                    attrs: {
                        width: "15",
                        src: i("ca00"),
                        alt: ""
                    }
                }), t._v(" Новые")])])
            }], c = function () {
                var t = this, s = t.$createElement;
                t._self._c;
                return t._m(0)
            }, n = [function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "title-container"}, [i("a", {staticClass: "go-back"}), i("h1", {staticClass: "title"}, [t._v(" Рейтинг букмекеров "), i("span", {
                    staticStyle: {
                        color: "#83868A",
                        "font-weight": "400"
                    }
                }, [t._v("819")])]), i("p", {staticClass: "subtitle collapsed"}, [t._v("Все букмекерские конторы у нас на сайте имеют подробный обзор плюсов и минусов, экспертную оценку коэффициентов и выбора ставок, а так же информацию о бонусах. Выбрать легальную БК, принимающую ставки на спорт через интернет, также помогут наши независимые рейтинги.")])])
            }], o = {name: "Title"}, r = o, u = (i("8b70"), i("2877")), d = Object(u["a"])(r, c, n, !1, null, null, null),
            v = d.exports, b = function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "table"}, [t._m(0), t._l(t.mockData, (function (s) {
                    return i("div", {
                        staticClass: "table__row",
                        class: {highlighted: s.isHighlighted}
                    }, [i("div", {staticClass: "table-cell table-cell--logo"}, [i("div", {staticClass: "cell-number"}, [t._v(t._s(s.id))]), i("div", {staticClass: "logo-wrapper"}, [i("img", {
                        staticClass: "bookmaker-logo",
                        attrs: {src: "./img/logos/" + s.logo + ".svg"}
                    }), i("span", [t._v("FONBET")])])]), i("div", {staticClass: "table-cell table-cell--bonus"}, [i("img", {
                        staticClass: "gift-img",
                        attrs: {src: "./img/gift.svg", alt: ""}
                    }), t._v(" " + t._s(s.bonus) + " ₽ ")]), i("div", {staticClass: "table-cell table-cell--has-border table-cell--feedbacks"}, [i("span", {staticClass: "mobile-title"}, [t._v("Отзывы")]), i("img", {
                        staticClass: "message-img",
                        attrs: {src: "./img/message.svg", alt: ""}
                    }), t._v(" " + t._s(s.feedbacks) + " ")]), i("div", {staticClass: "table-cell table-cell--has-border table-cell--complaints"}, [i("span", {staticClass: "mobile-title"}, [t._v("Жалобы")]), i("span", {staticClass: "success"}, [t._v(t._s(s.complaints[0]))]), i("span", {staticClass: "neutral"}, [t._v(" / " + t._s(s.complaints[1]) + " / ")]), i("span", {staticClass: "fail"}, [t._v(t._s(s.complaints[2]))])]), i("div", {staticClass: "table-cell table-cell--cta"}, [i("span", {staticClass: "btn btn--cta"}, [t._v("Играть")]), i("span", {staticClass: "btn btn--overview"}, [t._v("Обзор")]), i("div", {
                        staticClass: "dropdown-trigger",
                        on: {
                            click: function (t) {
                                s.isActive = !s.isActive
                            }
                        }
                    }, [i("img", {
                        staticClass: "message-img",
                        attrs: {src: "./img/dropdown-arrow.svg", alt: ""}
                    })])]), i("div", {
                        staticClass: "table-cell table-cell--details",
                        class: {active: s.isActive}
                    }, [t._m(1, !0), t._m(2, !0), t._m(3, !0), t._m(4, !0), t._m(5, !0)])])
                }))], 2)
            }, _ = [function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "table__row table__header"}, [i("div", {staticClass: "table-cell"}, [t._v("Букмекер")]), i("div", {staticClass: "table-cell"}, [t._v("Бонус")]), i("div", {staticClass: "table-cell"}, [t._v("Отзывы")]), i("div", {staticClass: "table-cell"}, [t._v("Жалобы")])])
            }, function () {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {staticClass: "mobile-selector"}, [a("span", [t._v("На мобильных")]), a("a", {
                    staticClass: "iOS",
                    attrs: {href: "#"}
                }, [a("img", {attrs: {width: "11", src: i("1b3b"), alt: ""}})]), a("a", {
                    staticClass: "android",
                    attrs: {href: "#"}
                }, [a("img", {attrs: {width: "11", src: i("4313"), alt: ""}})]), a("a", {
                    staticClass: "mobile",
                    attrs: {href: "#"}
                }, [a("img", {attrs: {width: "11", src: i("ba5e"), alt: ""}})])])
            }, function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "comparison-container"}, [i("ul", {staticClass: "comparison-list"}, [i("h3", {staticClass: "comparison-list__title comparison-list__title--plus"}, [t._v("Плюсы "), i("span", [t._v("5")])]), i("li", [t._v("Приветственный бонус и высокие коэффициенты")]), i("li", [t._v("Приветственный бонус")]), i("li", [t._v("Приветственный бонус")]), i("li", [t._v("Приветственный бонус")])]), i("ul", {staticClass: "comparison-list"}, [i("h3", {staticClass: "comparison-list__title comparison-list__title--minus"}, [t._v("Минусы "), i("span", [t._v("5")])]), i("li", [t._v("Приветственный бонус")]), i("li", [t._v("Приветственный бонус")]), i("li", [t._v("Приветственный бонус")])]), i("ul", {staticClass: "comparison-list"}, [i("h3", {staticClass: "comparison-list__title comparison-list__title--rating"}, [t._v("Место в рейтингах")]), i("li", {staticClass: "highlighted"}, [t._v("Народный")]), i("li", [t._v("Надёжность")]), i("li", [t._v("Коэффициенты")]), i("li", [t._v("Выбор ставок")]), i("li", [t._v("Сервис LIVE")])])])
            }, function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "bonuses"}, [i("div", {staticClass: "bonus"}, [i("span", [t._v("Страховка до 10 000 рублей")]), i("button", {staticClass: "bonus-cta"}, [t._v("Получить бонус")])]), i("div", {staticClass: "bonus"}, [i("span", [t._v("Кешбэк до 15 000 рублей")]), i("button", {staticClass: "bonus-cta"}, [t._v("Получить бонус")])]), i("div", {staticClass: "bonus"}, [i("span", [t._v("Эксклюзивный бонус за депозит до 8 000 рублей")]), i("button", {staticClass: "bonus-cta"}, [t._v("Получить бонус")])])])
            }, function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "note"}, [i("span", [t._v("Данный букмекер сотрудничает с Fanler в решении спорных ситуаций")]), i("a", {
                    staticClass: "note-link",
                    attrs: {href: ""}
                }, [t._v("Добавить жалобу")])])
            }, function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "cta"}, [i("button", {staticClass: "cta-btn"}, [t._v("Начать играть")]), i("button", {staticClass: "read-btn"}, [t._v("Читать обзор")]), i("a", {
                    staticClass: "info",
                    attrs: {href: "#"}
                }, [t._v("Как зарегистрироваться у букмекера BetCity")])])
            }], f = {
                name: "BookmakersTable", data: function () {
                    return {
                        mockTabs: ["Футбол", "Тренды", "Конкурсы", "Эксперты о бэттинге", "Хоккей", "Баскетбол", "Теннис", "Бои"],
                        mockData: [{
                            id: 1,
                            logo: "fonbet",
                            bonus: 1e4,
                            feedbacks: 789,
                            complaints: [248, 104, 55],
                            isActive: !1,
                            isHighlighted: !0
                        }, {
                            id: 2,
                            logo: "xbettery",
                            bonus: 1e4,
                            feedbacks: 789,
                            complaints: [248, 104, 55],
                            isActive: !1,
                            isHighlighted: !1
                        }, {
                            id: 3,
                            logo: "1xstavka",
                            bonus: 1e3,
                            feedbacks: 789,
                            complaints: [248, 104, 55],
                            isActive: !1,
                            isHighlighted: !1
                        }, {
                            id: 4,
                            logo: "leonru",
                            bonus: 100,
                            feedbacks: 789,
                            complaints: [248, 104, 55],
                            isActive: !1,
                            isHighlighted: !1
                        }, {
                            id: 5,
                            logo: "betcity",
                            bonus: 1e3,
                            feedbacks: 789,
                            complaints: [248, 104, 55],
                            isActive: !1,
                            isHighlighted: !1
                        }]
                    }
                }
            }, p = f, m = (i("b003"), Object(u["a"])(p, b, _, !1, null, null, null)), h = m.exports, g = function () {
                var t = this, s = t.$createElement, i = t._self._c || s;
                return i("div", {staticClass: "sidebar"}, [i("h3", {staticClass: "sidebar-title"}, [t._v("Фильтры")]), t._l(t.filters, (function (s) {
                    return i("div", {staticClass: "filter-section"}, [i("h3", {staticClass: "filter-section__title"}, [t._v(t._s(s.title))]), s.hasSearch ? i("input", {
                        staticClass: "search",
                        attrs: {type: "text", placeholder: "Поиск..."}
                    }) : t._e(), i("ul", {staticClass: "filter-list"}, [i("li", [i("div", {staticClass: "checkbox--mock"}), t._v(" " + t._s(s.items[0]) + " ")]), i("li", [i("div", {staticClass: "checkbox--mock"}), t._v(" " + t._s(s.items[1]) + " ")]), i("li", [i("div", {staticClass: "checkbox--mock"}), t._v(" " + t._s(s.items[2]) + " ")]), i("a", {staticClass: "show-more"}, [t._v("Показать ещё")])])])
                }))], 2)
            }, C = [], k = {
                name: "Sidebar", data: function () {
                    return {
                        filters: [{
                            id: 1,
                            title: "Редакция",
                            items: ["Ежедневные экспрессы", "Суперэкспрессы", "Тоталы"],
                            isExpanded: !0,
                            hasSearch: !1
                        }, {
                            id: 2,
                            title: "Команда",
                            items: ["Александр Вишневский", "Константин Генич", "Кирилл Дементьев"],
                            isExpanded: !0,
                            hasSearch: !1
                        }, {
                            id: 3,
                            title: "Дата",
                            items: ["Сегодня", "Завтра", "Вчера"],
                            isExpanded: !0,
                            hasSearch: !1
                        }, {
                            id: 4,
                            title: "Команды",
                            items: ["Зенит", "Спартак", "ЦСК"],
                            isExpanded: !0,
                            hasSearch: !1
                        }, {
                            id: 5,
                            title: "Матчи",
                            items: ["Унион — Байер", "Лацио — Рома", "Монпелье — Монако"],
                            isExpanded: !0,
                            hasSearch: !1
                        }, {
                            id: 6,
                            title: "Лиги",
                            items: ["Кубок России", "Премьер-лига", "ЧЕ-2021"],
                            isExpanded: !0,
                            hasSearch: !0
                        }, {
                            id: 7,
                            title: "Игроки",
                            items: ["Лионель Месси", "Лионель Месси", "Лионель Месси"],
                            isExpanded: !0,
                            hasSearch: !0
                        }]
                    }
                }
            }, x = k, w = (i("f203"), Object(u["a"])(x, g, C, !1, null, null, null)), y = w.exports, E = {
                name: "App", components: {Title: v, BookmakersTable: h, Sidebar: y}, data: function () {
                    return {
                        mockTabs: ["Футбол", "Тренды", "Конкурсы", "Эксперты о бэттинге", "Хоккей", "Баскетбол", "Теннис", "Бои"],
                        mockData: [{
                            id: 1,
                            logo: "fonbet",
                            bonus: 1e4,
                            feedbacks: 789,
                            complaints: [248, 104, 55]
                        }, {id: 2, logo: "xbettery", bonus: 1e4, feedbacks: 789, complaints: [248, 104, 55]}, {
                            id: 3,
                            logo: "1xstavka",
                            bonus: 1e3,
                            feedbacks: 789,
                            complaints: [248, 104, 55]
                        }, {id: 4, logo: "leonru", bonus: 100, feedbacks: 789, complaints: [248, 104, 55]}, {
                            id: 5,
                            logo: "betcity",
                            bonus: 1e3,
                            feedbacks: 789,
                            complaints: [248, 104, 55]
                        }],
                        isMobile: !0
                    }
                }
            }, S = E, O = (i("5c0b"), Object(u["a"])(S, e, l, !1, null, null, null)), j = O.exports;
        a["a"].config.productionTip = !1, new a["a"]({
            render: function (t) {
                return t(j)
            }
        }).$mount("#app")
    }, "5c0b": function (t, s, i) {
        "use strict";
        i("9c0c")
    }, "5cf6": function (t, s, i) {
        t.exports = "img/icon-filters.0d8bec6f.svg"
    }, "8b70": function (t, s, i) {
        "use strict";
        i("ff94")
    }, "8f0e": function (t, s, i) {
    }, 9741: function (t, s, i) {
    }, "9c0c": function (t, s, i) {
    }, b003: function (t, s, i) {
        "use strict";
        i("8f0e")
    }, ba5e: function (t, s, i) {
        t.exports = "img/icon-mobile.9b73a815.svg"
    }, ca00: function (t, s, i) {
        t.exports = "img/icon-new.f0eb0e45.svg"
    }, f203: function (t, s, i) {
        "use strict";
        i("9741")
    }, ff94: function (t, s, i) {
    }
});
//# sourceMappingURL=app.b88324b0.js.map
