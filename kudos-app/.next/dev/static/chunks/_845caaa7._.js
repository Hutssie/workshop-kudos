(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/kudos/CategoryBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryBadge",
    ()=>CategoryBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/categories.ts [app-client] (ecmascript)");
;
;
function CategoryBadge({ category, className = "" }) {
    const label = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][category];
    const color = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][category];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${className}`,
        style: {
            backgroundColor: color
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/components/kudos/CategoryBadge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = CategoryBadge;
var _c;
__turbopack_context__.k.register(_c, "CategoryBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:dd9555 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toggleKudosLike",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"409afebbccfd31d8aa8dd6a82b5e1b2a34ae1c1c5b":"toggleKudosLike"},"app/actions/likes.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("409afebbccfd31d8aa8dd6a82b5e1b2a34ae1c1c5b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "toggleKudosLike");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vbGlrZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvbGliL3Nlc3Npb25cIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IHR5cGUgVG9nZ2xlS3Vkb3NMaWtlUmVzdWx0ID1cbiAgfCB7IHN1Y2Nlc3M6IHRydWU7IGxpa2VkOiBib29sZWFuIH1cbiAgfCB7IHN1Y2Nlc3M6IGZhbHNlOyBlcnJvcjogc3RyaW5nIH07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB0b2dnbGVLdWRvc0xpa2Uoa3Vkb3NJZDogc3RyaW5nKTogUHJvbWlzZTxUb2dnbGVLdWRvc0xpa2VSZXN1bHQ+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBsaWtlIGt1ZG9zLlwiIH07XG4gIH1cblxuICBpZiAoIWt1ZG9zSWQgfHwgdHlwZW9mIGt1ZG9zSWQgIT09IFwic3RyaW5nXCIgfHwgIWt1ZG9zSWQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQga3Vkb3MuXCIgfTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBwcmlzbWEua3Vkb3NMaWtlLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAga3Vkb3NJZF90ZWFtTWVtYmVySWQ6IHtcbiAgICAgICAgICBrdWRvc0lkOiBrdWRvc0lkLnRyaW0oKSxcbiAgICAgICAgICB0ZWFtTWVtYmVySWQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgYXdhaXQgcHJpc21hLmt1ZG9zTGlrZS5kZWxldGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogZXhpc3RpbmcuaWQgfSxcbiAgICAgIH0pO1xuICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvZmVlZFwiKTtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGxpa2VkOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIGF3YWl0IHByaXNtYS5rdWRvc0xpa2UuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAga3Vkb3NJZDoga3Vkb3NJZC50cmltKCksXG4gICAgICAgIHRlYW1NZW1iZXJJZDogY3VycmVudFVzZXIuaWQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2ZlZWRcIik7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbGlrZWQ6IHRydWUgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkFVc0IsNExBQUEifQ==
}),
"[project]/app/actions/data:02d559 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getKudosComments",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"400cbc3b3086607f55bdd678ca8e26204f2b3e96db":"getKudosComments"},"app/actions/comments.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("400cbc3b3086607f55bdd678ca8e26204f2b3e96db", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getKudosComments");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvbGliL3Nlc3Npb25cIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdldENvbW1lbnRzRm9yS3Vkb3MgfSBmcm9tIFwiQC9saWIvZmVlZFwiO1xuXG5jb25zdCBNQVhfQ09NTUVOVF9MRU5HVEggPSA1MDA7XG5cbmV4cG9ydCB0eXBlIFN1Ym1pdEt1ZG9zQ29tbWVudFJlc3VsdCA9XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBjb21tZW50OiBTZXJpYWxpemVkQ29tbWVudCB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3I6IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBTZXJpYWxpemVkQ29tbWVudCA9IHtcbiAgaWQ6IHN0cmluZztcbiAga3Vkb3NJZDogc3RyaW5nO1xuICBhdXRob3JJZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICBhdXRob3I6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBhdmF0YXJVcmw6IHN0cmluZyB8IG51bGw7XG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0S3Vkb3NDb21tZW50KFxuICBrdWRvc0lkOiBzdHJpbmcsXG4gIGJvZHk6IHN0cmluZ1xuKTogUHJvbWlzZTxTdWJtaXRLdWRvc0NvbW1lbnRSZXN1bHQ+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBjb21tZW50LlwiIH07XG4gIH1cblxuICBpZiAoIWt1ZG9zSWQgfHwgdHlwZW9mIGt1ZG9zSWQgIT09IFwic3RyaW5nXCIgfHwgIWt1ZG9zSWQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQga3Vkb3MuXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHRyaW1tZWRCb2R5ID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBib2R5LnRyaW0oKSA6IFwiXCI7XG4gIGlmICh0cmltbWVkQm9keS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29tbWVudCBjYW5ub3QgYmUgZW1wdHkuXCIgfTtcbiAgfVxuICBpZiAodHJpbW1lZEJvZHkubGVuZ3RoID4gTUFYX0NPTU1FTlRfTEVOR1RIKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGBDb21tZW50IG11c3QgYmUgYXQgbW9zdCAke01BWF9DT01NRU5UX0xFTkdUSH0gY2hhcmFjdGVycy5gLFxuICAgIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGt1ZG9zID0gYXdhaXQgcHJpc21hLmt1ZG9zLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGt1ZG9zSWQudHJpbSgpIH0sXG4gICAgfSk7XG4gICAgaWYgKCFrdWRvcykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkt1ZG9zIG5vdCBmb3VuZC5cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBwcmlzbWEua3Vkb3NDb21tZW50LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGt1ZG9zSWQ6IGt1ZG9zLmlkLFxuICAgICAgICBhdXRob3JJZDogY3VycmVudFVzZXIuaWQsXG4gICAgICAgIGJvZHk6IHRyaW1tZWRCb2R5LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9mZWVkXCIpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY29tbWVudDoge1xuICAgICAgICBpZDogY29tbWVudC5pZCxcbiAgICAgICAga3Vkb3NJZDogY29tbWVudC5rdWRvc0lkLFxuICAgICAgICBhdXRob3JJZDogY29tbWVudC5hdXRob3JJZCxcbiAgICAgICAgYm9keTogY29tbWVudC5ib2R5LFxuICAgICAgICBjcmVhdGVkQXQ6IGNvbW1lbnQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIGlkOiBjb21tZW50LmF1dGhvci5pZCxcbiAgICAgICAgICBuYW1lOiBjb21tZW50LmF1dGhvci5uYW1lLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBjb21tZW50LmF1dGhvci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBhdmF0YXJVcmw6IGNvbW1lbnQuYXV0aG9yLmF2YXRhclVybCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0S3Vkb3NDb21tZW50cyhrdWRvc0lkOiBzdHJpbmcpOiBQcm9taXNlPFNlcmlhbGl6ZWRDb21tZW50W10+IHtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50c0Zvckt1ZG9zKGt1ZG9zSWQpO1xuICByZXR1cm4gY29tbWVudHMubWFwKChjKSA9PiAoe1xuICAgIGlkOiBjLmlkLFxuICAgIGt1ZG9zSWQ6IGMua3Vkb3NJZCxcbiAgICBhdXRob3JJZDogYy5hdXRob3JJZCxcbiAgICBib2R5OiBjLmJvZHksXG4gICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIGF1dGhvcjoge1xuICAgICAgaWQ6IGMuYXV0aG9yLmlkLFxuICAgICAgbmFtZTogYy5hdXRob3IubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiBjLmF1dGhvci5kaXNwbGF5TmFtZSxcbiAgICAgIGF2YXRhclVybDogYy5hdXRob3IuYXZhdGFyVXJsLFxuICAgIH0sXG4gIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNFJBNkZzQiw2TEFBQSJ9
}),
"[project]/app/actions/data:a575e4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitKudosComment",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604afa3571c0d80c9cb93223a13b15f76ba7631179":"submitKudosComment"},"app/actions/comments.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("604afa3571c0d80c9cb93223a13b15f76ba7631179", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitKudosComment");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vY29tbWVudHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGdldEN1cnJlbnRVc2VyIH0gZnJvbSBcIkAvbGliL3Nlc3Npb25cIjtcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IGdldENvbW1lbnRzRm9yS3Vkb3MgfSBmcm9tIFwiQC9saWIvZmVlZFwiO1xuXG5jb25zdCBNQVhfQ09NTUVOVF9MRU5HVEggPSA1MDA7XG5cbmV4cG9ydCB0eXBlIFN1Ym1pdEt1ZG9zQ29tbWVudFJlc3VsdCA9XG4gIHwgeyBzdWNjZXNzOiB0cnVlOyBjb21tZW50OiBTZXJpYWxpemVkQ29tbWVudCB9XG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3I6IHN0cmluZyB9O1xuXG5leHBvcnQgdHlwZSBTZXJpYWxpemVkQ29tbWVudCA9IHtcbiAgaWQ6IHN0cmluZztcbiAga3Vkb3NJZDogc3RyaW5nO1xuICBhdXRob3JJZDogc3RyaW5nO1xuICBib2R5OiBzdHJpbmc7XG4gIGNyZWF0ZWRBdDogc3RyaW5nO1xuICBhdXRob3I6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nIHwgbnVsbDtcbiAgICBhdmF0YXJVcmw6IHN0cmluZyB8IG51bGw7XG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0S3Vkb3NDb21tZW50KFxuICBrdWRvc0lkOiBzdHJpbmcsXG4gIGJvZHk6IHN0cmluZ1xuKTogUHJvbWlzZTxTdWJtaXRLdWRvc0NvbW1lbnRSZXN1bHQ+IHtcbiAgY29uc3QgY3VycmVudFVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xuICBpZiAoIWN1cnJlbnRVc2VyKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIllvdSBtdXN0IGJlIGxvZ2dlZCBpbiB0byBjb21tZW50LlwiIH07XG4gIH1cblxuICBpZiAoIWt1ZG9zSWQgfHwgdHlwZW9mIGt1ZG9zSWQgIT09IFwic3RyaW5nXCIgfHwgIWt1ZG9zSWQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQga3Vkb3MuXCIgfTtcbiAgfVxuXG4gIGNvbnN0IHRyaW1tZWRCb2R5ID0gdHlwZW9mIGJvZHkgPT09IFwic3RyaW5nXCIgPyBib2R5LnRyaW0oKSA6IFwiXCI7XG4gIGlmICh0cmltbWVkQm9keS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiQ29tbWVudCBjYW5ub3QgYmUgZW1wdHkuXCIgfTtcbiAgfVxuICBpZiAodHJpbW1lZEJvZHkubGVuZ3RoID4gTUFYX0NPTU1FTlRfTEVOR1RIKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IGBDb21tZW50IG11c3QgYmUgYXQgbW9zdCAke01BWF9DT01NRU5UX0xFTkdUSH0gY2hhcmFjdGVycy5gLFxuICAgIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGt1ZG9zID0gYXdhaXQgcHJpc21hLmt1ZG9zLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IGt1ZG9zSWQudHJpbSgpIH0sXG4gICAgfSk7XG4gICAgaWYgKCFrdWRvcykge1xuICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkt1ZG9zIG5vdCBmb3VuZC5cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBwcmlzbWEua3Vkb3NDb21tZW50LmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGt1ZG9zSWQ6IGt1ZG9zLmlkLFxuICAgICAgICBhdXRob3JJZDogY3VycmVudFVzZXIuaWQsXG4gICAgICAgIGJvZHk6IHRyaW1tZWRCb2R5LFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHsgYXV0aG9yOiB0cnVlIH0sXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9mZWVkXCIpO1xuICAgIHJldHVybiB7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgY29tbWVudDoge1xuICAgICAgICBpZDogY29tbWVudC5pZCxcbiAgICAgICAga3Vkb3NJZDogY29tbWVudC5rdWRvc0lkLFxuICAgICAgICBhdXRob3JJZDogY29tbWVudC5hdXRob3JJZCxcbiAgICAgICAgYm9keTogY29tbWVudC5ib2R5LFxuICAgICAgICBjcmVhdGVkQXQ6IGNvbW1lbnQuY3JlYXRlZEF0LnRvSVNPU3RyaW5nKCksXG4gICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgIGlkOiBjb21tZW50LmF1dGhvci5pZCxcbiAgICAgICAgICBuYW1lOiBjb21tZW50LmF1dGhvci5uYW1lLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBjb21tZW50LmF1dGhvci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBhdmF0YXJVcmw6IGNvbW1lbnQuYXV0aG9yLmF2YXRhclVybCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0S3Vkb3NDb21tZW50cyhrdWRvc0lkOiBzdHJpbmcpOiBQcm9taXNlPFNlcmlhbGl6ZWRDb21tZW50W10+IHtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZXRDb21tZW50c0Zvckt1ZG9zKGt1ZG9zSWQpO1xuICByZXR1cm4gY29tbWVudHMubWFwKChjKSA9PiAoe1xuICAgIGlkOiBjLmlkLFxuICAgIGt1ZG9zSWQ6IGMua3Vkb3NJZCxcbiAgICBhdXRob3JJZDogYy5hdXRob3JJZCxcbiAgICBib2R5OiBjLmJvZHksXG4gICAgY3JlYXRlZEF0OiBjLmNyZWF0ZWRBdC50b0lTT1N0cmluZygpLFxuICAgIGF1dGhvcjoge1xuICAgICAgaWQ6IGMuYXV0aG9yLmlkLFxuICAgICAgbmFtZTogYy5hdXRob3IubmFtZSxcbiAgICAgIGRpc3BsYXlOYW1lOiBjLmF1dGhvci5kaXNwbGF5TmFtZSxcbiAgICAgIGF2YXRhclVybDogYy5hdXRob3IuYXZhdGFyVXJsLFxuICAgIH0sXG4gIH0pKTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFJBMkJzQiwrTEFBQSJ9
}),
"[project]/components/kudos/KudosCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KudosCard",
    ()=>KudosCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kudos$2f$CategoryBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kudos/CategoryBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$dd9555__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:dd9555 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$02d559__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:02d559 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a575e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:a575e4 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function formatRelativeTime(date) {
    const d = typeof date === "string" ? new Date(date) : date;
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    if (diffSec < 60) return "just now";
    if (diffMin < 60) return `${diffMin}m ago`;
    if (diffHour < 24) return `${diffHour}h ago`;
    if (diffDay < 7) return `${diffDay}d ago`;
    return new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium"
    }).format(d);
}
function AvatarPlaceholder({ name }) {
    const initials = name.split(" ").map((n)=>n[0]).join("").toUpperCase().slice(0, 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5b6880] text-sm font-medium text-white",
        "aria-hidden": true,
        children: initials
    }, void 0, false, {
        fileName: "[project]/components/kudos/KudosCard.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c = AvatarPlaceholder;
function isFeedItem(k) {
    return "likesCount" in k && typeof k.likesCount === "number";
}
function KudosCard({ kudos, currentUser }) {
    _s();
    const likesCount = isFeedItem(kudos) ? kudos.likesCount : 0;
    const commentsCount = isFeedItem(kudos) ? kudos.commentsCount : 0;
    const [currentUserLiked, setCurrentUserLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isFeedItem(kudos) ? kudos.currentUserLiked : false);
    const [optimisticLikesCount, setOptimisticLikesCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(likesCount);
    const [commentsOpen, setCommentsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [commentBody, setCommentBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPendingLike, startLikeTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isPendingComment, startCommentTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const giverName = kudos.giver.displayName ?? kudos.giver.name;
    const recipientName = kudos.recipient.displayName ?? kudos.recipient.name;
    const canEngage = !!currentUser;
    const handleLikeClick = ()=>{
        if (!canEngage || isPendingLike) return;
        startLikeTransition(async ()=>{
            setCurrentUserLiked((prev)=>!prev);
            setOptimisticLikesCount((prev)=>currentUserLiked ? prev - 1 : prev + 1);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$dd9555__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["toggleKudosLike"])(kudos.id);
            if (!result.success) {
                setCurrentUserLiked((prev)=>!prev);
                setOptimisticLikesCount((prev)=>currentUserLiked ? prev + 1 : prev - 1);
            }
        });
    };
    const handleCommentClick = ()=>{
        setCommentsOpen((prev)=>!prev);
        if (!commentsOpen && comments === null) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$02d559__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getKudosComments"])(kudos.id).then(setComments);
        }
    };
    const handleSubmitComment = (e)=>{
        e.preventDefault();
        if (!canEngage || !commentBody.trim() || isPendingComment) return;
        const body = commentBody;
        setCommentBody("");
        startCommentTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$a575e4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitKudosComment"])(kudos.id, body);
            if (result.success && result.comment) {
                setComments((prev)=>prev ? [
                        ...prev,
                        result.comment
                    ] : [
                        result.comment
                    ]);
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-white rounded-lg p-4 shadow-sm border border-[#d8d9db] hover:shadow-md transition-shadow",
        "aria-label": `Kudos from ${giverName} to ${recipientName}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start gap-3 mb-3",
                children: [
                    kudos.giver.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: kudos.giver.avatarUrl,
                        alt: "",
                        className: "h-10 w-10 rounded-full object-cover shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPlaceholder, {
                        name: giverName
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#212631]",
                                        children: giverName
                                    }, void 0, false, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#8a8c91] text-sm",
                                        "aria-hidden": true,
                                        children: "→"
                                    }, void 0, false, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-[#212631]",
                                        children: recipientName
                                    }, void 0, false, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#66686c]",
                                children: formatRelativeTime(kudos.createdAt)
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kudos/KudosCard.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kudos$2f$CategoryBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryBadge"], {
                    category: kudos.category,
                    className: "inline-block"
                }, void 0, false, {
                    fileName: "[project]/components/kudos/KudosCard.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/kudos/KudosCard.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#3d4657] mb-4 leading-relaxed",
                children: kudos.message
            }, void 0, false, {
                fileName: "[project]/components/kudos/KudosCard.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 text-[#8a8c91]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleLikeClick,
                        disabled: !canEngage || isPendingLike,
                        className: `flex items-center gap-1.5 transition-colors ${canEngage ? "hover:text-[#357d1c]" : "cursor-default opacity-70"} ${currentUserLiked ? "text-[#357d1c]" : ""}`,
                        "aria-pressed": currentUserLiked,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                className: `w-4 h-4 ${currentUserLiked ? "fill-current" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: optimisticLikesCount
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCommentClick,
                        className: "flex items-center gap-1.5 hover:text-[#5b6880] transition-colors",
                        "aria-expanded": commentsOpen,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: [
                                    "Comment",
                                    commentsCount > 0 ? ` (${commentsCount})` : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kudos/KudosCard.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            commentsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 pt-4 border-t border-[#d8d9db]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 mb-4",
                        children: comments === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#8a8c91]",
                            children: "Loading comments…"
                        }, void 0, false, {
                            fileName: "[project]/components/kudos/KudosCard.tsx",
                            lineNumber: 178,
                            columnNumber: 15
                        }, this) : comments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[#8a8c91]",
                            children: "No comments yet."
                        }, void 0, false, {
                            fileName: "[project]/components/kudos/KudosCard.tsx",
                            lineNumber: 180,
                            columnNumber: 15
                        }, this) : comments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 text-sm",
                                children: [
                                    c.author.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: c.author.avatarUrl,
                                        alt: "",
                                        className: "h-8 w-8 rounded-full object-cover shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 188,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AvatarPlaceholder, {
                                        name: c.author.displayName ?? c.author.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 194,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[#212631]",
                                                children: c.author.displayName ?? c.author.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                                lineNumber: 199,
                                                columnNumber: 21
                                            }, this),
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#66686c]",
                                                children: formatRelativeTime(c.createdAt)
                                            }, void 0, false, {
                                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#3d4657] mt-0.5",
                                                children: c.body
                                            }, void 0, false, {
                                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                                lineNumber: 205,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/kudos/KudosCard.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 183,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 176,
                        columnNumber: 11
                    }, this),
                    canEngage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmitComment,
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: commentBody,
                                onChange: (e)=>setCommentBody(e.target.value),
                                placeholder: "Write a comment…",
                                rows: 2,
                                maxLength: 500,
                                className: "flex-1 rounded border border-[#d8d9db] px-3 py-2 text-sm text-[#212631] placeholder:text-[#8a8c91] focus:outline-none focus:ring-2 focus:ring-[#5b6880]",
                                disabled: isPendingComment
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !commentBody.trim() || isPendingComment,
                                className: "shrink-0 px-4 py-2 rounded bg-[#5b6880] text-white text-sm font-medium hover:bg-[#4a5769] disabled:opacity-50 disabled:cursor-not-allowed",
                                children: isPendingComment ? "Posting…" : "Post"
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/KudosCard.tsx",
                                lineNumber: 222,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/KudosCard.tsx",
                        lineNumber: 212,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kudos/KudosCard.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/kudos/KudosCard.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(KudosCard, "sra+JlLaDndWp/EUcxnJ2JP/SCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c1 = KudosCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "AvatarPlaceholder");
__turbopack_context__.k.register(_c1, "KudosCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/profile/ProfileKudosSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileKudosSection",
    ()=>ProfileKudosSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kudos$2f$KudosCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kudos/KudosCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProfileKudosSection({ receivedKudos, givenKudos, currentUser }) {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("received");
    const displayedKudos = activeTab === "received" ? receivedKudos : givenKudos;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-sm border border-[#d8d9db] mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex border-b border-[#d8d9db]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab("received"),
                            className: `flex-1 px-6 py-4 font-medium transition-colors ${activeTab === "received" ? "text-[#5b6880] border-b-2 border-[#5b6880]" : "text-[#8a8c91] hover:text-[#66686c]"}`,
                            children: [
                                "Received (",
                                receivedKudos.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab("given"),
                            className: `flex-1 px-6 py-4 font-medium transition-colors ${activeTab === "given" ? "text-[#5b6880] border-b-2 border-[#5b6880]" : "text-[#8a8c91] hover:text-[#66686c]"}`,
                            children: [
                                "Given (",
                                givenKudos.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: displayedKudos.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-12 text-center shadow-sm border border-[#d8d9db]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#8a8c91]",
                        children: activeTab === "received" ? "No kudos received yet" : "No kudos given yet"
                    }, void 0, false, {
                        fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this) : displayedKudos.map((kudos)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kudos$2f$KudosCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KudosCard"], {
                        kudos: kudos,
                        currentUser: currentUser
                    }, kudos.id, false, {
                        fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/profile/ProfileKudosSection.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProfileKudosSection, "TTiKFIS3Bm0YkfBxWYfnxlKSHzs=");
_c = ProfileKudosSection;
var _c;
__turbopack_context__.k.register(_c, "ProfileKudosSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Heart
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
            key: "mvr1a0"
        }
    ]
];
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MessageCircle
]);
/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
            key: "1sd12s"
        }
    ]
];
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("message-circle", __iconNode);
;
 //# sourceMappingURL=message-circle.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_845caaa7._.js.map