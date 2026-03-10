module.exports = [
"[project]/lib/categories.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/actions/kudos.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40907c717243a88f3c16d8d3fda9adab51e9ee819a":"submitKudos"},"",""] */ __turbopack_context__.s([
    "submitKudos",
    ()=>submitKudos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const MAX_MESSAGE_LENGTH = 500;
const VALID_CATEGORIES = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_OPTIONS"]);
async function submitKudos(formData) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=session");
    }
    const recipientId = formData.get("recipientId");
    const category = formData.get("category");
    const message = formData.get("message");
    const fieldErrors = {};
    if (!recipientId || typeof recipientId !== "string" || !recipientId.trim()) {
        fieldErrors.recipientId = "Select a team member to recognize.";
    }
    if (!category || typeof category !== "string" || !VALID_CATEGORIES.has(category)) {
        fieldErrors.category = "Select a category.";
    }
    if (!message || typeof message !== "string") {
        fieldErrors.message = "Enter a message.";
    } else if (message.trim().length === 0) {
        fieldErrors.message = "Message is required.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
        fieldErrors.message = `Message must be at most ${MAX_MESSAGE_LENGTH} characters.`;
    }
    if (Object.keys(fieldErrors).length > 0) {
        return {
            success: false,
            fieldErrors
        };
    }
    const recipient = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamMember.findUnique({
        where: {
            id: recipientId.trim()
        }
    });
    if (!recipient) {
        fieldErrors.recipientId = "Selected team member not found.";
        return {
            success: false,
            fieldErrors
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudos.create({
            data: {
                giverId: currentUser.id,
                recipientId: recipient.id,
                category: category,
                message: message.trim()
            }
        });
    } catch  {
        return {
            success: false,
            error: "Something went wrong. Please try again."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/feed");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitKudos
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitKudos, "40907c717243a88f3c16d8d3fda9adab51e9ee819a", null);
}),
"[project]/.next-internal/server/app/give-kudos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/kudos.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/kudos.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/.next-internal/server/app/give-kudos/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/kudos.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007b86f91233611ecc1a6881424aaad20a9c3eaeb4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearCurrentUser"],
    "4086f3fb3e6fbe43aa677793e26cc34ec0f0413c15",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setCurrentUser"],
    "40907c717243a88f3c16d8d3fda9adab51e9ee819a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitKudos"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$give$2d$kudos$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/give-kudos/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/session.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/kudos.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/kudos.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_dab6ddc9._.js.map