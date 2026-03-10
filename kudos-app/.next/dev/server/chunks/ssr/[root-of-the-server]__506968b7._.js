module.exports = [
"[project]/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashPassword",
    ()=>hashPassword,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcrypt$29$__ = __turbopack_context__.i("[externals]/bcrypt [external] (bcrypt, cjs, [project]/node_modules/bcrypt)");
;
const SALT_ROUNDS = 10;
async function hashPassword(plainPassword) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcrypt$29$__["hash"](plainPassword, SALT_ROUNDS);
}
async function verifyPassword(plainPassword, hash) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$bcrypt__$5b$external$5d$__$28$bcrypt$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$bcrypt$29$__["compare"](plainPassword, hash);
}
}),
"[project]/app/actions/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"007b86f91233611ecc1a6881424aaad20a9c3eaeb4":"clearCurrentUser","4086f3fb3e6fbe43aa677793e26cc34ec0f0413c15":"setCurrentUser","40e6b4db654f98f175fb2e6c7bdf3c0f8f0e32fc3c":"login"},"",""] */ __turbopack_context__.s([
    "clearCurrentUser",
    ()=>clearCurrentUser,
    "login",
    ()=>login,
    "setCurrentUser",
    ()=>setCurrentUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function login(formData) {
    try {
        const emailRaw = formData.get("email");
        const password = formData.get("password");
        if (typeof emailRaw !== "string" || !emailRaw.trim()) {
            return {
                success: false,
                error: "Email is required."
            };
        }
        if (typeof password !== "string" || !password.trim()) {
            return {
                success: false,
                error: "Password is required."
            };
        }
        const email = emailRaw.trim().toLowerCase();
        const member = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamMember.findUnique({
            where: {
                email
            }
        });
        if (!member) {
            return {
                success: false,
                error: "Invalid email or password."
            };
        }
        const valid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(password, member.passwordHash);
        if (!valid) {
            return {
                success: false,
                error: "Invalid email or password."
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])(member.id);
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "Something went wrong. Please try again."
        };
    }
}
async function setCurrentUser(formData) {
    const teamMemberId = formData.get("teamMemberId");
    if (typeof teamMemberId !== "string" || !teamMemberId.trim()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=missing");
    }
    const member = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamMember.findUnique({
        where: {
            id: teamMemberId.trim()
        }
    });
    if (!member) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/?error=invalid");
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setSession"])(member.id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function clearCurrentUser() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    login,
    setCurrentUser,
    clearCurrentUser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(login, "40e6b4db654f98f175fb2e6c7bdf3c0f8f0e32fc3c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(setCurrentUser, "4086f3fb3e6fbe43aa677793e26cc34ec0f0413c15", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(clearCurrentUser, "007b86f91233611ecc1a6881424aaad20a9c3eaeb4", null);
}),
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/categories.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const MAX_MESSAGE_LENGTH = 500;
const VALID_CATEGORIES = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$categories$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CATEGORY_OPTIONS"]);
async function submitKudos(formData) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        return {
            success: false,
            error: "You must be logged in to give kudos."
        };
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
    if (recipient.id === currentUser.id) {
        fieldErrors.recipientId = "You can't give kudos to yourself.";
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
        return {
            success: true
        };
    } catch  {
        return {
            success: false,
            error: "Something went wrong. Please try again."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitKudos
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitKudos, "40907c717243a88f3c16d8d3fda9adab51e9ee819a", null);
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[project]/lib/upload.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveAvatarFile",
    ()=>saveAvatarFile
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
const ALLOWED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp"
];
const MAX_SIZE_BYTES = 2 * 1024 * 1024; // 2MB
const EXT_BY_MIME = {
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp"
};
async function saveAvatarFile(file) {
    const type = file.type;
    if (!ALLOWED_TYPES.includes(type)) {
        throw new Error("Invalid file type. Use JPEG, PNG, or WebP.");
    }
    if (file.size > MAX_SIZE_BYTES) {
        throw new Error("Image must be 2MB or smaller.");
    }
    const ext = EXT_BY_MIME[type] ?? ".jpg";
    const filename = `${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])()}${ext}`;
    // public/uploads/avatars is served at /uploads/avatars
    const uploadDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "uploads", "avatars");
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
        recursive: true
    });
    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(uploadDir, filename);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
    return `/uploads/avatars/${filename}`;
}
}),
"[project]/app/actions/profile.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40ab7a86963598877e1b28ea3d26f6a9f290c1374f":"updateProfileAvatar"},"",""] */ __turbopack_context__.s([
    "updateProfileAvatar",
    ()=>updateProfileAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/upload.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function updateProfileAvatar(formData) {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!user) {
        return {
            success: false,
            error: "You must be logged in."
        };
    }
    const avatar = formData.get("avatar");
    if (!(avatar instanceof File) || avatar.size === 0) {
        return {
            success: false,
            error: "Please select an image."
        };
    }
    try {
        const avatarUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$upload$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveAvatarFile"])(avatar);
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].teamMember.update({
            where: {
                id: user.id
            },
            data: {
                avatarUrl
            }
        });
        return {
            success: true
        };
    } catch (err) {
        return {
            success: false,
            error: err instanceof Error ? err.message : "Failed to update photo."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    updateProfileAvatar
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProfileAvatar, "40ab7a86963598877e1b28ea3d26f6a9f290c1374f", null);
}),
"[project]/app/actions/likes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"409afebbccfd31d8aa8dd6a82b5e1b2a34ae1c1c5b":"toggleKudosLike"},"",""] */ __turbopack_context__.s([
    "toggleKudosLike",
    ()=>toggleKudosLike
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function toggleKudosLike(kudosId) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        return {
            success: false,
            error: "You must be logged in to like kudos."
        };
    }
    if (!kudosId || typeof kudosId !== "string" || !kudosId.trim()) {
        return {
            success: false,
            error: "Invalid kudos."
        };
    }
    try {
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosLike.findUnique({
            where: {
                kudosId_teamMemberId: {
                    kudosId: kudosId.trim(),
                    teamMemberId: currentUser.id
                }
            }
        });
        if (existing) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosLike.delete({
                where: {
                    id: existing.id
                }
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/feed");
            return {
                success: true,
                liked: false
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosLike.create({
            data: {
                kudosId: kudosId.trim(),
                teamMemberId: currentUser.id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/feed");
        return {
            success: true,
            liked: true
        };
    } catch  {
        return {
            success: false,
            error: "Something went wrong. Please try again."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    toggleKudosLike
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(toggleKudosLike, "409afebbccfd31d8aa8dd6a82b5e1b2a34ae1c1c5b", null);
}),
"[project]/lib/feed.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "enrichKudosWithEngagement",
    ()=>enrichKudosWithEngagement,
    "getCommentsForKudos",
    ()=>getCommentsForKudos,
    "getKudosFeed",
    ()=>getKudosFeed,
    "getKudosGivenBy",
    ()=>getKudosGivenBy,
    "getKudosReceivedBy",
    ()=>getKudosReceivedBy,
    "getTotalLikesReceived",
    ()=>getTotalLikesReceived
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
;
async function getKudosFeed(currentUserId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudos.findMany({
        orderBy: {
            createdAt: "desc"
        },
        include: {
            giver: true,
            recipient: true
        }
    });
    const kudosIds = rows.map((r)=>r.id);
    if (kudosIds.length === 0) return [];
    let allLikes = [];
    let commentCounts = [];
    try {
        [allLikes, commentCounts] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "kudosId", "teamMemberId" FROM "kudos_likes"
        WHERE "kudosId" IN (${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Prisma"].join(kudosIds)})
      `,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "kudosId", COUNT(*)::int as count FROM "kudos_comments"
        WHERE "kudosId" IN (${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Prisma"].join(kudosIds)})
        GROUP BY "kudosId"
      `
        ]);
    } catch  {
        // Tables may not exist if migration 20260310120000_add_kudos_likes_and_comments hasn't been applied
        allLikes = [];
        commentCounts = [];
    }
    const likeCountByKudos = new Map();
    const likedByCurrentUser = new Set();
    for (const like of allLikes){
        likeCountByKudos.set(like.kudosId, (likeCountByKudos.get(like.kudosId) ?? 0) + 1);
        if (currentUserId && like.teamMemberId === currentUserId) {
            likedByCurrentUser.add(like.kudosId);
        }
    }
    const commentCountByKudos = new Map(commentCounts.map((c)=>[
            c.kudosId,
            Number(c.count)
        ]));
    return rows.map((row)=>({
            ...row,
            likesCount: likeCountByKudos.get(row.id) ?? 0,
            commentsCount: commentCountByKudos.get(row.id) ?? 0,
            currentUserLiked: likedByCurrentUser.has(row.id)
        }));
}
async function getCommentsForKudos(kudosId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosComment.findMany({
        where: {
            kudosId
        },
        orderBy: {
            createdAt: "asc"
        },
        include: {
            author: true
        }
    });
}
async function getTotalLikesReceived(teamMemberId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosLike.count({
        where: {
            kudos: {
                recipientId: teamMemberId
            }
        }
    });
}
const kudosInclude = {
    giver: true,
    recipient: true
};
async function getKudosReceivedBy(teamMemberId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudos.findMany({
        where: {
            recipientId: teamMemberId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: kudosInclude
    });
}
async function getKudosGivenBy(teamMemberId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudos.findMany({
        where: {
            giverId: teamMemberId
        },
        orderBy: {
            createdAt: "desc"
        },
        include: kudosInclude
    });
}
async function enrichKudosWithEngagement(kudosList, currentUserId) {
    const kudosIds = kudosList.map((k)=>k.id);
    if (kudosIds.length === 0) return [];
    let allLikes = [];
    let commentCounts = [];
    try {
        const [likesRaw, commentsRaw] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "kudosId", "teamMemberId" FROM "kudos_likes"
        WHERE "kudosId" IN (${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Prisma"].join(kudosIds)})
      `,
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].$queryRaw`
        SELECT "kudosId", COUNT(*)::int as count FROM "kudos_comments"
        WHERE "kudosId" IN (${__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["Prisma"].join(kudosIds)})
        GROUP BY "kudosId"
      `
        ]);
        allLikes = likesRaw;
        commentCounts = commentsRaw.map((c)=>({
                kudosId: c.kudosId,
                count: Number(c.count)
            }));
    } catch  {
        allLikes = [];
        commentCounts = [];
    }
    const likeCountByKudos = new Map();
    const likedByCurrentUser = new Set();
    for (const like of allLikes){
        likeCountByKudos.set(like.kudosId, (likeCountByKudos.get(like.kudosId) ?? 0) + 1);
        if (currentUserId && like.teamMemberId === currentUserId) {
            likedByCurrentUser.add(like.kudosId);
        }
    }
    const commentCountByKudos = new Map(commentCounts.map((c)=>[
            c.kudosId,
            c.count
        ]));
    return kudosList.map((row)=>({
            ...row,
            likesCount: likeCountByKudos.get(row.id) ?? 0,
            commentsCount: commentCountByKudos.get(row.id) ?? 0,
            currentUserLiked: likedByCurrentUser.has(row.id)
        }));
}
}),
"[project]/app/actions/comments.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"400cbc3b3086607f55bdd678ca8e26204f2b3e96db":"getKudosComments","604afa3571c0d80c9cb93223a13b15f76ba7631179":"submitKudosComment"},"",""] */ __turbopack_context__.s([
    "getKudosComments",
    ()=>getKudosComments,
    "submitKudosComment",
    ()=>submitKudosComment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/feed.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const MAX_COMMENT_LENGTH = 500;
async function submitKudosComment(kudosId, body) {
    const currentUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUser"])();
    if (!currentUser) {
        return {
            success: false,
            error: "You must be logged in to comment."
        };
    }
    if (!kudosId || typeof kudosId !== "string" || !kudosId.trim()) {
        return {
            success: false,
            error: "Invalid kudos."
        };
    }
    const trimmedBody = typeof body === "string" ? body.trim() : "";
    if (trimmedBody.length === 0) {
        return {
            success: false,
            error: "Comment cannot be empty."
        };
    }
    if (trimmedBody.length > MAX_COMMENT_LENGTH) {
        return {
            success: false,
            error: `Comment must be at most ${MAX_COMMENT_LENGTH} characters.`
        };
    }
    try {
        const kudos = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudos.findUnique({
            where: {
                id: kudosId.trim()
            }
        });
        if (!kudos) {
            return {
                success: false,
                error: "Kudos not found."
            };
        }
        const comment = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].kudosComment.create({
            data: {
                kudosId: kudos.id,
                authorId: currentUser.id,
                body: trimmedBody
            },
            include: {
                author: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/feed");
        return {
            success: true,
            comment: {
                id: comment.id,
                kudosId: comment.kudosId,
                authorId: comment.authorId,
                body: comment.body,
                createdAt: comment.createdAt.toISOString(),
                author: {
                    id: comment.author.id,
                    name: comment.author.name,
                    displayName: comment.author.displayName,
                    avatarUrl: comment.author.avatarUrl
                }
            }
        };
    } catch  {
        return {
            success: false,
            error: "Something went wrong. Please try again."
        };
    }
}
async function getKudosComments(kudosId) {
    const comments = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$feed$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCommentsForKudos"])(kudosId);
    return comments.map((c)=>({
            id: c.id,
            kudosId: c.kudosId,
            authorId: c.authorId,
            body: c.body,
            createdAt: c.createdAt.toISOString(),
            author: {
                id: c.author.id,
                name: c.author.name,
                displayName: c.author.displayName,
                avatarUrl: c.author.avatarUrl
            }
        }));
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    submitKudosComment,
    getKudosComments
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(submitKudosComment, "604afa3571c0d80c9cb93223a13b15f76ba7631179", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getKudosComments, "400cbc3b3086607f55bdd678ca8e26204f2b3e96db", null);
}),
"[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/kudos.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/profile.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/likes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/app/actions/comments.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/kudos.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/likes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/comments.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/session.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/kudos.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/app/actions/profile.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/app/actions/likes.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/app/actions/comments.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "007b86f91233611ecc1a6881424aaad20a9c3eaeb4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearCurrentUser"],
    "400cbc3b3086607f55bdd678ca8e26204f2b3e96db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getKudosComments"],
    "40907c717243a88f3c16d8d3fda9adab51e9ee819a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitKudos"],
    "409afebbccfd31d8aa8dd6a82b5e1b2a34ae1c1c5b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toggleKudosLike"],
    "40ab7a86963598877e1b28ea3d26f6a9f290c1374f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProfileAvatar"],
    "604afa3571c0d80c9cb93223a13b15f76ba7631179",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["submitKudosComment"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$profile$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/profile/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/session.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/kudos.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/app/actions/profile.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/app/actions/likes.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/app/actions/comments.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$kudos$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/kudos.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$profile$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/profile.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$likes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/likes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$comments$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/comments.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__506968b7._.js.map