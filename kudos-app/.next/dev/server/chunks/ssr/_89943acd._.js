module.exports = [
"[project]/lib/categories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_COLORS",
    ()=>CATEGORY_COLORS,
    "CATEGORY_LABELS",
    ()=>CATEGORY_LABELS,
    "CATEGORY_OPTIONS",
    ()=>CATEGORY_OPTIONS
]);
const CATEGORY_OPTIONS = [
    "TeamPlayer",
    "GreatWork",
    "Helpful",
    "Innovation",
    "Leadership",
    "PositiveAttitude"
];
const CATEGORY_LABELS = {
    TeamPlayer: "Team Player",
    GreatWork: "Great work",
    Helpful: "Helpful",
    Innovation: "Innovation",
    Leadership: "Leadership",
    PositiveAttitude: "Positive Attitude"
};
const CATEGORY_COLORS = {
    TeamPlayer: "#6955cd",
    GreatWork: "#357d1c",
    Helpful: "#5b6880",
    Innovation: "#271a60",
    Leadership: "#49a628",
    PositiveAttitude: "#8d80dd"
};
}),
"[project]/app/actions/data:81a62f [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitKudos",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40907c717243a88f3c16d8d3fda9adab51e9ee819a":"submitKudos"},"app/actions/kudos.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40907c717243a88f3c16d8d3fda9adab51e9ee819a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitKudos");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4va3Vkb3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tIFwiQC9saWIvc2Vzc2lvblwiO1xyXG5pbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9saWIvcHJpc21hXCI7XHJcbmltcG9ydCB7IENBVEVHT1JZX09QVElPTlMgfSBmcm9tIFwiQC9saWIvY2F0ZWdvcmllc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEt1ZG9zQ2F0ZWdvcnkgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuXHJcbmNvbnN0IE1BWF9NRVNTQUdFX0xFTkdUSCA9IDUwMDtcclxuXHJcbmNvbnN0IFZBTElEX0NBVEVHT1JJRVMgPSBuZXcgU2V0PHN0cmluZz4oQ0FURUdPUllfT1BUSU9OUyk7XHJcblxyXG5leHBvcnQgdHlwZSBTdWJtaXRLdWRvc1Jlc3VsdCA9XHJcbiAgfCB7IHN1Y2Nlc3M6IHRydWUgfVxyXG4gIHwgeyBzdWNjZXNzOiBmYWxzZTsgZXJyb3I/OiBzdHJpbmc7IGZpZWxkRXJyb3JzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB9O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdEt1ZG9zKGZvcm1EYXRhOiBGb3JtRGF0YSk6IFByb21pc2U8U3VibWl0S3Vkb3NSZXN1bHQ+IHtcclxuICBjb25zdCBjdXJyZW50VXNlciA9IGF3YWl0IGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgaWYgKCFjdXJyZW50VXNlcikge1xyXG4gICAgcmVkaXJlY3QoXCIvP2Vycm9yPXNlc3Npb25cIik7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZWNpcGllbnRJZCA9IGZvcm1EYXRhLmdldChcInJlY2lwaWVudElkXCIpO1xyXG4gIGNvbnN0IGNhdGVnb3J5ID0gZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlcIik7XHJcbiAgY29uc3QgbWVzc2FnZSA9IGZvcm1EYXRhLmdldChcIm1lc3NhZ2VcIik7XHJcblxyXG4gIGNvbnN0IGZpZWxkRXJyb3JzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcblxyXG4gIGlmICghcmVjaXBpZW50SWQgfHwgdHlwZW9mIHJlY2lwaWVudElkICE9PSBcInN0cmluZ1wiIHx8ICFyZWNpcGllbnRJZC50cmltKCkpIHtcclxuICAgIGZpZWxkRXJyb3JzLnJlY2lwaWVudElkID0gXCJTZWxlY3QgYSB0ZWFtIG1lbWJlciB0byByZWNvZ25pemUuXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhdGVnb3J5IHx8IHR5cGVvZiBjYXRlZ29yeSAhPT0gXCJzdHJpbmdcIiB8fCAhVkFMSURfQ0FURUdPUklFUy5oYXMoY2F0ZWdvcnkpKSB7XHJcbiAgICBmaWVsZEVycm9ycy5jYXRlZ29yeSA9IFwiU2VsZWN0IGEgY2F0ZWdvcnkuXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoIW1lc3NhZ2UgfHwgdHlwZW9mIG1lc3NhZ2UgIT09IFwic3RyaW5nXCIpIHtcclxuICAgIGZpZWxkRXJyb3JzLm1lc3NhZ2UgPSBcIkVudGVyIGEgbWVzc2FnZS5cIjtcclxuICB9IGVsc2UgaWYgKG1lc3NhZ2UudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgZmllbGRFcnJvcnMubWVzc2FnZSA9IFwiTWVzc2FnZSBpcyByZXF1aXJlZC5cIjtcclxuICB9IGVsc2UgaWYgKG1lc3NhZ2UubGVuZ3RoID4gTUFYX01FU1NBR0VfTEVOR1RIKSB7XHJcbiAgICBmaWVsZEVycm9ycy5tZXNzYWdlID0gYE1lc3NhZ2UgbXVzdCBiZSBhdCBtb3N0ICR7TUFYX01FU1NBR0VfTEVOR1RIfSBjaGFyYWN0ZXJzLmA7XHJcbiAgfVxyXG5cclxuICBpZiAoT2JqZWN0LmtleXMoZmllbGRFcnJvcnMpLmxlbmd0aCA+IDApIHtcclxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBmaWVsZEVycm9ycyB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVjaXBpZW50ID0gYXdhaXQgcHJpc21hLnRlYW1NZW1iZXIuZmluZFVuaXF1ZSh7XHJcbiAgICB3aGVyZTogeyBpZDogKHJlY2lwaWVudElkIGFzIHN0cmluZykudHJpbSgpIH0sXHJcbiAgfSk7XHJcbiAgaWYgKCFyZWNpcGllbnQpIHtcclxuICAgIGZpZWxkRXJyb3JzLnJlY2lwaWVudElkID0gXCJTZWxlY3RlZCB0ZWFtIG1lbWJlciBub3QgZm91bmQuXCI7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZmllbGRFcnJvcnMgfTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBwcmlzbWEua3Vkb3MuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGdpdmVySWQ6IGN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgIHJlY2lwaWVudElkOiByZWNpcGllbnQuaWQsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGNhdGVnb3J5IGFzIEt1ZG9zQ2F0ZWdvcnksXHJcbiAgICAgICAgbWVzc2FnZTogKG1lc3NhZ2UgYXMgc3RyaW5nKS50cmltKCksXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZWRpcmVjdChcIi9mZWVkXCIpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoib1JBZ0JzQix3TEFBQSJ9
}),
"[project]/components/kudos/GiveKudosForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GiveKudosForm",
    ()=>GiveKudosForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/categories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$81a62f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:81a62f [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
const MAX_MESSAGE_LENGTH = 500;
function GiveKudosForm({ teamMembers }) {
    const [recipientId, setRecipientId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const messageLength = message.length;
    const isOverLimit = messageLength > MAX_MESSAGE_LENGTH;
    const isValid = recipientId.trim() !== "" && category !== "" && message.trim() !== "" && !isOverLimit;
    const isDisabled = !isValid || isSubmitting;
    async function handleSubmit(e) {
        e.preventDefault();
        setFieldErrors({});
        setSubmitError(null);
        setIsSubmitting(true);
        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$81a62f__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitKudos"])(formData);
            if (result.success) return;
            if (result.fieldErrors) setFieldErrors(result.fieldErrors);
            if (result.error) setSubmitError(result.error);
        } finally{
            setIsSubmitting(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-6 rounded-lg border border-[#d8d9db] bg-white p-6 shadow-sm",
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "recipientId",
                        className: "block text-sm font-medium text-[#212631]",
                        children: "Who are you recognizing?"
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        id: "recipientId",
                        name: "recipientId",
                        value: recipientId,
                        onChange: (e)=>setRecipientId(e.target.value),
                        className: "mt-1 block w-full rounded border border-[#d8d9db] px-3 py-2 text-[#212631] focus:border-[#5b6880] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-opacity-50",
                        "aria-describedby": fieldErrors.recipientId ? "recipientId-error" : undefined,
                        "aria-invalid": !!fieldErrors.recipientId,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "",
                                children: "Select a team member"
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            teamMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: m.id,
                                    children: m.displayName ?? m.name
                                }, m.id, false, {
                                    fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    fieldErrors.recipientId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        id: "recipientId-error",
                        className: "mt-1 text-sm text-red-600",
                        role: "alert",
                        children: fieldErrors.recipientId
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                            className: "block text-sm font-medium text-[#212631]",
                            children: "Category"
                        }, void 0, false, {
                            fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3",
                            role: "group",
                            "aria-describedby": fieldErrors.category ? "category-error" : undefined,
                            "aria-invalid": !!fieldErrors.category,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_OPTIONS"].map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: `flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors focus-within:ring-2 focus-within:ring-[#5b6880] focus-within:ring-offset-1 ${category === opt ? "border-transparent text-white" : "border-[#d8d9db] text-[#3d4657] hover:border-[#b0b2b6]"}`,
                                    style: category === opt ? {
                                        backgroundColor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"][opt]
                                    } : undefined,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "radio",
                                            name: "category",
                                            value: opt,
                                            checked: category === opt,
                                            onChange: ()=>setCategory(opt),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CATEGORY_LABELS"][opt]
                                    ]
                                }, opt, true, {
                                    fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        fieldErrors.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            id: "category-error",
                            className: "mt-1 text-sm text-red-600",
                            role: "alert",
                            children: fieldErrors.category
                        }, void 0, false, {
                            fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "message",
                        className: "block text-sm font-medium text-[#212631]",
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "message",
                        name: "message",
                        value: message,
                        onChange: (e)=>setMessage(e.target.value),
                        maxLength: MAX_MESSAGE_LENGTH,
                        rows: 4,
                        placeholder: "Write a short shout-out...",
                        className: "mt-1 block w-full rounded border border-[#d8d9db] px-3 py-2 text-[#212631] placeholder:text-[#8a8c91] focus:border-[#5b6880] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-opacity-50",
                        "aria-describedby": fieldErrors.message || isOverLimit ? "message-error message-counter" : "message-counter",
                        "aria-invalid": !!fieldErrors.message || isOverLimit
                    }, void 0, false, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                id: "message-counter",
                                className: "text-sm text-[#8a8c91]",
                                "aria-live": "polite",
                                children: [
                                    messageLength,
                                    "/",
                                    MAX_MESSAGE_LENGTH
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            fieldErrors.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "message-error",
                                className: "text-sm text-red-600",
                                role: "alert",
                                children: fieldErrors.message
                            }, void 0, false, {
                                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    isOverLimit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        role: "alert",
                        children: [
                            "Message must be at most ",
                            MAX_MESSAGE_LENGTH,
                            " characters."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded bg-red-50 p-3 text-sm text-red-700",
                role: "alert",
                children: submitError
            }, void 0, false, {
                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: isDisabled,
                className: "rounded-lg bg-[#357d1c] px-4 py-2.5 font-medium text-white hover:bg-[#49a628] focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                children: isSubmitting ? "Sending…" : "Send Kudos"
            }, void 0, false, {
                fileName: "[project]/components/kudos/GiveKudosForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/kudos/GiveKudosForm.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-ssr] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-ssr] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-server-dom-turbopack-client.js [app-ssr] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
];

//# sourceMappingURL=_89943acd._.js.map