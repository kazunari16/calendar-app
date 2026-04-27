const STORAGE_SCHEDULE_KEY = "memoryCalendarSchedules_v6";
const STORAGE_SHARED_SCHEDULE_KEY = "memoryCalendarSharedSchedules_v1";
const STORAGE_CATEGORY_KEY = "memoryCalendarCategories_v6";
const STORAGE_WORKOUT_MASTER_KEY = "memoryCalendarWorkoutMasters_v3";
const STORAGE_WORKOUT_SESSION_KEY = "memoryCalendarWorkoutSessions_v3";
const STORAGE_WORKOUT_UI_SETTINGS_KEY = "memoryCalendarWorkoutUiSettings_v1";
const STORAGE_THEME_KEY = "memoryCalendarTheme_v1";
const STORAGE_LOGIN_KEY = "memoryCalendarLogin_v1";
const STORAGE_USERS_KEY = "memoryCalendarUsers_v1";
const SESSION_LOGIN_KEY = "memoryCalendarLoggedIn_v1";
const SESSION_CURRENT_USER_KEY = "memoryCalendarCurrentUser_v1";
const SESSION_ADMIN_VIEW_USER_KEY = "memoryCalendarAdminViewUser_v1";
const ADMIN_USERNAME = "admini";
const ADMIN_PASSWORD = "kazunari_satoyama16840227";

const DEFAULT_TEMPLATE = "【大項目】\n- \n\n【小項目】\n- \n\n【内容】\n- ";

const DEFAULT_CATEGORIES = [
  { id: createId(), name: "業務用", color: "#2563eb", template: DEFAULT_TEMPLATE },
  { id: createId(), name: "投稿用", color: "#7c3aed", template: DEFAULT_TEMPLATE },
  { id: createId(), name: "副業用", color: "#059669", template: DEFAULT_TEMPLATE }
];

const CARDIO_BODY_PART = "有酸素運動";
const CARDIO_EXERCISES = ["トレッドミル", "ステアクライマー", "アップライトバイク", "リカンベントバイク", "クロストレーナー"];

const DEFAULT_WORKOUT_MASTERS = {
  "肩": ["ショルダープレス", "サイドレイズ"],
  "腕": ["ダンベルカール", "トライセプスエクステンション"],
  "胸": ["ベンチプレス", "ダンベルフライ"],
  "腹筋": ["クランチ", "レッグレイズ"],
  "背中": ["ラットプルダウン", "デッドリフト"],
  "お尻": ["ヒップスラスト", "ブルガリアンスクワット"],
  "脚": ["スクワット", "レッグプレス"],
  [CARDIO_BODY_PART]: CARDIO_EXERCISES
};

const DEFAULT_WORKOUT_UI_SETTINGS = {
  defaultSets: 3,
  defaultRestSec: 60
};

const THEME_PRESETS = [
  {
    id: "blue-orange",
    name: "白青 × 黒橙",
    note: "今の標準",
    colors: ["#1677ff", "#f97316", "#eef3f7"],
    vars: {
      "--page-bg-top": "#f7fafc",
      "--page-bg-bottom": "#eef3f7",
      "--bg": "#eef3f7",
      "--card": "#ffffff",
      "--text": "#172033",
      "--subtext": "#667085",
      "--line": "#d9e2ec",
      "--primary": "#1677ff",
      "--primary-dark": "#0958d9",
      "--primary-light": "#eaf3ff",
      "--today": "#fff8e7",
      "--selected": "#e6f4ff",
      "--workout-primary": "#f97316",
      "--workout-primary-dark": "#c2410c",
      "--workout-primary-light": "#fff3e6",
      "--workout-accent": "#fb923c",
      "--workout-chip": "#fed7aa",
      "--workout-on-accent": "#111827",
      "--workout-card": "#121722",
      "--workout-card-alt": "#1d2430",
      "--workout-surface": "#151a24",
      "--workout-field": "#0f141d",
      "--workout-line": "#303746",
      "--workout-text": "#f8fafc",
      "--workout-subtext": "#b8c0cc",
      "--workout-today": "#29251b",
      "--workout-selected": "#3a2415",
      "--workout-other": "#151a24"
    }
  },
  {
    id: "mint-charcoal",
    name: "ミント × チャコール",
    note: "爽やか",
    colors: ["#059669", "#34d399", "#edf8f3"],
    vars: {
      "--page-bg-top": "#f5fbf7",
      "--page-bg-bottom": "#edf8f3",
      "--bg": "#edf8f3",
      "--card": "#ffffff",
      "--text": "#10231b",
      "--subtext": "#5f716a",
      "--line": "#d6e7df",
      "--primary": "#059669",
      "--primary-dark": "#047857",
      "--primary-light": "#dff8ed",
      "--today": "#fff7ed",
      "--selected": "#dff8ed",
      "--workout-primary": "#34d399",
      "--workout-primary-dark": "#059669",
      "--workout-primary-light": "#d1fae5",
      "--workout-accent": "#6ee7b7",
      "--workout-chip": "#bbf7d0",
      "--workout-on-accent": "#052e1a",
      "--workout-card": "#0e1916",
      "--workout-card-alt": "#16231f",
      "--workout-surface": "#101d19",
      "--workout-field": "#0a1411",
      "--workout-line": "#29443a",
      "--workout-text": "#f4fff9",
      "--workout-subtext": "#b8d8cc",
      "--workout-today": "#183328",
      "--workout-selected": "#124030",
      "--workout-other": "#0d1714"
    }
  },
  {
    id: "rose-navy",
    name: "ローズ × ネイビー",
    note: "強め",
    colors: ["#e11d48", "#fb7185", "#fff1f4"],
    vars: {
      "--page-bg-top": "#fff7f9",
      "--page-bg-bottom": "#fff1f4",
      "--bg": "#fff1f4",
      "--card": "#ffffff",
      "--text": "#2b1720",
      "--subtext": "#755f68",
      "--line": "#f3d0d9",
      "--primary": "#e11d48",
      "--primary-dark": "#be123c",
      "--primary-light": "#ffe4ea",
      "--today": "#fff7ed",
      "--selected": "#ffe4ea",
      "--workout-primary": "#fb7185",
      "--workout-primary-dark": "#e11d48",
      "--workout-primary-light": "#ffe4ea",
      "--workout-accent": "#fda4af",
      "--workout-chip": "#fecdd3",
      "--workout-on-accent": "#3b0714",
      "--workout-card": "#111827",
      "--workout-card-alt": "#1b2433",
      "--workout-surface": "#151d2a",
      "--workout-field": "#0c1220",
      "--workout-line": "#334155",
      "--workout-text": "#f8fafc",
      "--workout-subtext": "#cbd5e1",
      "--workout-today": "#33202b",
      "--workout-selected": "#3f1d2b",
      "--workout-other": "#111827"
    }
  },
  {
    id: "violet-gold",
    name: "紫 × ゴールド",
    note: "集中",
    colors: ["#7c3aed", "#f59e0b", "#f5f1ff"],
    vars: {
      "--page-bg-top": "#fbf8ff",
      "--page-bg-bottom": "#f5f1ff",
      "--bg": "#f5f1ff",
      "--card": "#ffffff",
      "--text": "#221838",
      "--subtext": "#716588",
      "--line": "#ded4f3",
      "--primary": "#7c3aed",
      "--primary-dark": "#5b21b6",
      "--primary-light": "#ede9fe",
      "--today": "#fff7ed",
      "--selected": "#ede9fe",
      "--workout-primary": "#f59e0b",
      "--workout-primary-dark": "#b45309",
      "--workout-primary-light": "#fef3c7",
      "--workout-accent": "#fbbf24",
      "--workout-chip": "#fde68a",
      "--workout-on-accent": "#241a05",
      "--workout-card": "#171224",
      "--workout-card-alt": "#231a34",
      "--workout-surface": "#1b162b",
      "--workout-field": "#110d1d",
      "--workout-line": "#3e3356",
      "--workout-text": "#fbf7ff",
      "--workout-subtext": "#d5c7ed",
      "--workout-today": "#332715",
      "--workout-selected": "#44280a",
      "--workout-other": "#151120"
    }
  },
  {
    id: "sky-lime",
    name: "スカイ × ライム",
    note: "軽快",
    colors: ["#0284c7", "#84cc16", "#edf8ff"],
    vars: {
      "--page-bg-top": "#f6fbff",
      "--page-bg-bottom": "#edf8ff",
      "--bg": "#edf8ff",
      "--card": "#ffffff",
      "--text": "#102536",
      "--subtext": "#607285",
      "--line": "#d2e7f4",
      "--primary": "#0284c7",
      "--primary-dark": "#0369a1",
      "--primary-light": "#e0f2fe",
      "--today": "#f7fee7",
      "--selected": "#e0f2fe",
      "--workout-primary": "#84cc16",
      "--workout-primary-dark": "#4d7c0f",
      "--workout-primary-light": "#ecfccb",
      "--workout-accent": "#a3e635",
      "--workout-chip": "#d9f99d",
      "--workout-on-accent": "#142300",
      "--workout-card": "#0c1720",
      "--workout-card-alt": "#142434",
      "--workout-surface": "#101c27",
      "--workout-field": "#08121a",
      "--workout-line": "#294052",
      "--workout-text": "#f5fbff",
      "--workout-subtext": "#bdd3e3",
      "--workout-today": "#253114",
      "--workout-selected": "#30410f",
      "--workout-other": "#0b151e"
    }
  },
  {
    id: "indigo-cyan",
    name: "藍 × シアン",
    note: "デジタル",
    colors: ["#4f46e5", "#06b6d4", "#eef2ff"],
    vars: {
      "--page-bg-top": "#f8f9ff",
      "--page-bg-bottom": "#eef2ff",
      "--bg": "#eef2ff",
      "--card": "#ffffff",
      "--text": "#1d2140",
      "--subtext": "#646b8c",
      "--line": "#d7dcf4",
      "--primary": "#4f46e5",
      "--primary-dark": "#3730a3",
      "--primary-light": "#e0e7ff",
      "--today": "#ecfeff",
      "--selected": "#e0e7ff",
      "--workout-primary": "#06b6d4",
      "--workout-primary-dark": "#0e7490",
      "--workout-primary-light": "#cffafe",
      "--workout-accent": "#22d3ee",
      "--workout-chip": "#a5f3fc",
      "--workout-on-accent": "#06252b",
      "--workout-card": "#101526",
      "--workout-card-alt": "#182038",
      "--workout-surface": "#121a2e",
      "--workout-field": "#0b1020",
      "--workout-line": "#303a5c",
      "--workout-text": "#f8fbff",
      "--workout-subtext": "#c7d2fe",
      "--workout-today": "#12333a",
      "--workout-selected": "#0c3b48",
      "--workout-other": "#0f1628"
    }
  },
  {
    id: "slate-red",
    name: "スレート × 赤",
    note: "硬派",
    colors: ["#475569", "#ef4444", "#f1f5f9"],
    vars: {
      "--page-bg-top": "#f8fafc",
      "--page-bg-bottom": "#f1f5f9",
      "--bg": "#f1f5f9",
      "--card": "#ffffff",
      "--text": "#1e293b",
      "--subtext": "#64748b",
      "--line": "#dbe3ee",
      "--primary": "#475569",
      "--primary-dark": "#334155",
      "--primary-light": "#e2e8f0",
      "--today": "#fef2f2",
      "--selected": "#e2e8f0",
      "--workout-primary": "#ef4444",
      "--workout-primary-dark": "#b91c1c",
      "--workout-primary-light": "#fee2e2",
      "--workout-accent": "#f87171",
      "--workout-chip": "#fecaca",
      "--workout-on-accent": "#2a0909",
      "--workout-card": "#111827",
      "--workout-card-alt": "#1f2937",
      "--workout-surface": "#17202d",
      "--workout-field": "#0b1220",
      "--workout-line": "#374151",
      "--workout-text": "#f8fafc",
      "--workout-subtext": "#cbd5e1",
      "--workout-today": "#332020",
      "--workout-selected": "#421c1c",
      "--workout-other": "#111827"
    }
  },
  {
    id: "teal-amber",
    name: "ティール × 琥珀",
    note: "落ち着き",
    colors: ["#0f766e", "#d97706", "#effaf8"],
    vars: {
      "--page-bg-top": "#f6fffc",
      "--page-bg-bottom": "#effaf8",
      "--bg": "#effaf8",
      "--card": "#ffffff",
      "--text": "#102522",
      "--subtext": "#5f7470",
      "--line": "#d4e9e4",
      "--primary": "#0f766e",
      "--primary-dark": "#115e59",
      "--primary-light": "#ccfbf1",
      "--today": "#fff7ed",
      "--selected": "#ccfbf1",
      "--workout-primary": "#d97706",
      "--workout-primary-dark": "#92400e",
      "--workout-primary-light": "#ffedd5",
      "--workout-accent": "#f59e0b",
      "--workout-chip": "#fed7aa",
      "--workout-on-accent": "#271604",
      "--workout-card": "#101817",
      "--workout-card-alt": "#1a2422",
      "--workout-surface": "#121d1b",
      "--workout-field": "#0a1413",
      "--workout-line": "#2d4641",
      "--workout-text": "#f7fffd",
      "--workout-subtext": "#bfd8d3",
      "--workout-today": "#322816",
      "--workout-selected": "#41290d",
      "--workout-other": "#0d1715"
    }
  },
  {
    id: "mono-blue",
    name: "モノ × ブルー",
    note: "視認性",
    colors: ["#2563eb", "#60a5fa", "#f3f4f6"],
    vars: {
      "--page-bg-top": "#fafafa",
      "--page-bg-bottom": "#f3f4f6",
      "--bg": "#f3f4f6",
      "--card": "#ffffff",
      "--text": "#111827",
      "--subtext": "#6b7280",
      "--line": "#d1d5db",
      "--primary": "#2563eb",
      "--primary-dark": "#1d4ed8",
      "--primary-light": "#dbeafe",
      "--today": "#eff6ff",
      "--selected": "#dbeafe",
      "--workout-primary": "#60a5fa",
      "--workout-primary-dark": "#2563eb",
      "--workout-primary-light": "#dbeafe",
      "--workout-accent": "#93c5fd",
      "--workout-chip": "#bfdbfe",
      "--workout-on-accent": "#0b1d38",
      "--workout-card": "#111827",
      "--workout-card-alt": "#1f2937",
      "--workout-surface": "#17202d",
      "--workout-field": "#0b1220",
      "--workout-line": "#374151",
      "--workout-text": "#f9fafb",
      "--workout-subtext": "#d1d5db",
      "--workout-today": "#172842",
      "--workout-selected": "#12305d",
      "--workout-other": "#111827"
    }
  },
  {
    id: "sakura-ink",
    name: "桜 × 墨",
    note: "やわらか",
    colors: ["#db2777", "#f472b6", "#fff5f8"],
    vars: {
      "--page-bg-top": "#fffafb",
      "--page-bg-bottom": "#fff5f8",
      "--bg": "#fff5f8",
      "--card": "#ffffff",
      "--text": "#2b1722",
      "--subtext": "#76616b",
      "--line": "#f0d7df",
      "--primary": "#db2777",
      "--primary-dark": "#be185d",
      "--primary-light": "#fce7f3",
      "--today": "#fff7ed",
      "--selected": "#fce7f3",
      "--workout-primary": "#f472b6",
      "--workout-primary-dark": "#db2777",
      "--workout-primary-light": "#fce7f3",
      "--workout-accent": "#f9a8d4",
      "--workout-chip": "#fbcfe8",
      "--workout-on-accent": "#3b0a22",
      "--workout-card": "#161419",
      "--workout-card-alt": "#241d25",
      "--workout-surface": "#1b171e",
      "--workout-field": "#100d12",
      "--workout-line": "#403541",
      "--workout-text": "#fff7fb",
      "--workout-subtext": "#e8ccda",
      "--workout-today": "#33202b",
      "--workout-selected": "#432035",
      "--workout-other": "#151216"
    }
  }
];

const CATEGORY_NAME_REPAIRS = {
  "讌ｭ蜍咏畑": "業務用",
  "謚慕ｨｿ逕ｨ": "投稿用",
  "蜑ｯ讌ｭ逕ｨ": "副業用",
  "辟｡鬘・": "無題"
};

const WORKOUT_PART_REPAIRS = {
  "閧ｩ": "肩",
  "閻・": "腕",
  "閭ｸ": "胸",
  "閻ｹ遲・": "腹筋",
  "閭御ｸｭ": "背中",
  "縺雁ｰｻ": "お尻",
  "閼・": "脚",
  "譛臥┌驟ｸ邏驕句虚": CARDIO_BODY_PART
};

const WORKOUT_EXERCISE_REPAIRS = {
  "繧ｷ繝ｧ繝ｫ繝繝ｼ繝励Ξ繧ｹ": "ショルダープレス",
  "繧ｵ繧､繝峨Ξ繧､繧ｺ": "サイドレイズ",
  "繝繝ｳ繝吶Ν繧ｫ繝ｼ繝ｫ": "ダンベルカール",
  "繝医Λ繧､繧ｻ繝励せ繧ｨ繧ｯ繧ｹ繝・Φ繧ｷ繝ｧ繝ｳ": "トライセプスエクステンション",
  "繝吶Φ繝√・繝ｬ繧ｹ": "ベンチプレス",
  "繝繝ｳ繝吶Ν繝輔Λ繧､": "ダンベルフライ",
  "繧ｯ繝ｩ繝ｳ繝・": "クランチ",
  "繝ｬ繝・げ繝ｬ繧､繧ｺ": "レッグレイズ",
  "繝ｩ繝・ヨ繝励Ν繝繧ｦ繝ｳ": "ラットプルダウン",
  "繝・ャ繝峨Μ繝輔ヨ": "デッドリフト",
  "繝偵ャ繝励せ繝ｩ繧ｹ繝・": "ヒップスラスト",
  "繝悶Ν繧ｬ繝ｪ繧｢繝ｳ繧ｹ繧ｯ繝ｯ繝・ヨ": "ブルガリアンスクワット",
  "繧ｹ繧ｯ繝ｯ繝・ヨ": "スクワット",
  "繝ｬ繝・げ繝励Ξ繧ｹ": "レッグプレス"
};

function $(id) {
  return document.getElementById(id);
}

function createId() {
  return "id_" + Math.random().toString(36).slice(2, 11);
}

function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

const views = {
  calendar: $("view-calendar"),
  input: $("view-input"),
  workout: $("view-workout"),
  workoutInput: $("view-workout-input"),
  workoutEdit: $("view-workout-edit"),
  workoutStats: $("view-workout-stats"),
  settings: $("view-settings")
};

const loginView = $("view-login");
const showLoginModeBtn = $("showLoginModeBtn");
const showRegisterModeBtn = $("showRegisterModeBtn");
const loginTitle = $("loginTitle");
const loginDescription = $("loginDescription");
const loginAdminNote = $("loginAdminNote");
const loginNameInput = $("loginNameInput");
const registerNicknameWrap = $("registerNicknameWrap");
const registerNicknameInput = $("registerNicknameInput");
const loginPasswordInput = $("loginPasswordInput");
const toggleLoginPasswordBtn = $("toggleLoginPasswordBtn");
const registerPasswordConfirmWrap = $("registerPasswordConfirmWrap");
const registerPasswordConfirmInput = $("registerPasswordConfirmInput");
const toggleRegisterPasswordConfirmBtn = $("toggleRegisterPasswordConfirmBtn");
const loginSubmitBtn = $("loginSubmitBtn");

const appViewTitle = $("appViewTitle");
const goCalendarBtnHeader = $("goCalendarBtnHeader");
const goWorkoutBtnHeader = $("goWorkoutBtnHeader");
const goSettingsBtnHeader = $("goSettingsBtnHeader");

const monthLabel = $("monthLabel");
const calendarGrid = $("calendarGrid");
const scheduleList = $("scheduleList");
const itemCount = $("itemCount");
const selectedDateLabel = $("selectedDateLabel");
const prevMonthBtn = $("prevMonthBtn");
const nextMonthBtn = $("nextMonthBtn");
const todayMonthBtn = $("todayMonthBtn");
const goInputBtn = $("goInputBtn");

const miniMonthLabel = $("miniMonthLabel");
const miniCalendarGrid = $("miniCalendarGrid");
const miniPrevMonthBtn = $("miniPrevMonthBtn");
const miniNextMonthBtn = $("miniNextMonthBtn");
const backToCalendarFromInputBtn = $("backToCalendarFromInputBtn");
const categorySelect = $("categorySelect");
const startDateTimeInput = $("startDateTime");
const endDateTimeInput = $("endDateTime");
const setNowStartBtn = $("setNowStartBtn");
const setNowEndBtn = $("setNowEndBtn");
const titleInput = $("title");
const contentInput = $("content");
const calendarPhotoInput = $("calendarPhotoInput");
const calendarPhotoPreviewList = $("calendarPhotoPreviewList");
const calendarShareInput = $("calendarShareInput");
const saveRecordBtn = $("saveRecordBtn");

const backToCalendarFromWorkoutBtn = $("backToCalendarFromWorkoutBtn");
const goWorkoutInputBtn = $("goWorkoutInputBtn");
const goWorkoutStatsBtn = $("goWorkoutStatsBtn");
const workoutDateInput = $("workoutDate");
const workoutMiniMonthLabel = $("workoutMiniMonthLabel");
const workoutMiniCalendarGrid = $("workoutMiniCalendarGrid");
const workoutMiniPrevMonthBtn = $("workoutMiniPrevMonthBtn");
const workoutMiniNextMonthBtn = $("workoutMiniNextMonthBtn");
const workoutTodayBtn = $("workoutTodayBtn");
const workoutDashboard = $("workoutDashboard");
const workoutHistoryList = $("workoutHistoryList");
const workoutItemCount = $("workoutItemCount");
const workoutRankingGrid = $("workoutRankingGrid");

const backToWorkoutFromInputBtn = $("backToWorkoutFromInputBtn");
const workoutInputTargetDateLabel = $("workoutInputTargetDateLabel");
const workoutInputDateChangeBtn = $("workoutInputDateChangeBtn");
const workoutDatePickerNative = $("workoutDatePickerNative");
const setWorkoutDateTodayBtn = $("setWorkoutDateTodayBtn");
const bodyPartSelect = $("bodyPartSelect");
const exerciseSelect = $("exerciseSelect");
const setsInput = $("setsInput");
const restSecInput = $("restSecInput");
const workoutMemo = $("workoutMemo");
const workoutPhaseLabel = $("workoutPhaseLabel");
const workoutTimerDisplay = $("workoutTimerDisplay");
const workoutSetStatus = $("workoutSetStatus");
const workoutMainBtn = $("workoutMainBtn");
const workoutResetBtn = $("workoutResetBtn");
const loadPreviousWorkoutBtn = $("loadPreviousWorkoutBtn");
const setFormsWrap = $("setFormsWrap");
const cardioFormsWrap = $("cardioFormsWrap");
const workoutTimerActionPanel = $("workoutTimerActionPanel");
const workoutDetailSection = $("workoutDetailSection");
const workoutLogs = $("workoutLogs");
const saveWorkoutBtn = $("saveWorkoutBtn");

const backToWorkoutFromEditBtn = $("backToWorkoutFromEditBtn");
const workoutEditDateInput = $("workoutEditDateInput");
const workoutEditDatePickerBtn = $("workoutEditDatePickerBtn");
const workoutEditDatePickerLabel = $("workoutEditDatePickerLabel");
const workoutEditBodyPartSelect = $("workoutEditBodyPartSelect");
const workoutEditExerciseSelect = $("workoutEditExerciseSelect");
const workoutEditSetList = $("workoutEditSetList");
const addWorkoutEditSetBtn = $("addWorkoutEditSetBtn");
const saveWorkoutEditBtn = $("saveWorkoutEditBtn");
const rollPickerOverlay = $("rollPickerOverlay");
const rollPickerTitle = $("rollPickerTitle");
const rollPickerBody = $("rollPickerBody");
const rollPickerCancelBtn = $("rollPickerCancelBtn");
const rollPickerApplyBtn = $("rollPickerApplyBtn");

const backToWorkoutFromStatsBtn = $("backToWorkoutFromStatsBtn");
const statsBodyPartSelect = $("statsBodyPartSelect");
const statsExerciseSelect = $("statsExerciseSelect");
const showWeekStatsBtn = $("showWeekStatsBtn");
const showMonthStatsBtn = $("showMonthStatsBtn");
const statsCanvas = $("statsCanvas");
const statsSummary = $("statsSummary");

const backToCalendarFromSettingsBtn = $("backToCalendarFromSettingsBtn");
const showCalendarSettingsBtn = $("showCalendarSettingsBtn");
const showWorkoutSettingsBtn = $("showWorkoutSettingsBtn");
const showThemeSettingsBtn = $("showThemeSettingsBtn");
const showTransferSettingsBtn = $("showTransferSettingsBtn");
const showPasswordSettingsBtn = $("showPasswordSettingsBtn");
const logoutBtn = $("logoutBtn");
const adminViewUserWrap = $("adminViewUserWrap");
const adminViewUserSelect = $("adminViewUserSelect");
const passwordSettingsWrap = $("passwordSettingsWrap");
const changePasswordFieldsWrap = $("changePasswordFieldsWrap");
const currentPasswordInput = $("currentPasswordInput");
const newPasswordInput = $("newPasswordInput");
const confirmNewPasswordInput = $("confirmNewPasswordInput");
const userNicknameInput = $("userNicknameInput");
const saveUserNicknameBtn = $("saveUserNicknameBtn");
const calendarSettingsSectionHeading = document.querySelector("#calendarSettingsSection .list-header h2");
const themeSettingsHeadings = document.querySelectorAll("#themeSettingsSection .settings-block h3");
const calendarThemeHeading = themeSettingsHeadings[1] || null;

if (goCalendarBtnHeader) goCalendarBtnHeader.textContent = "予定";
if (showPasswordSettingsBtn) showPasswordSettingsBtn.textContent = "ユーザー";
if (goCalendarBtnHeader) goCalendarBtnHeader.textContent = "予定";
if (showCalendarSettingsBtn) showCalendarSettingsBtn.textContent = "予定";
if (showPasswordSettingsBtn) showPasswordSettingsBtn.textContent = "ユーザー";
if (calendarSettingsSectionHeading) calendarSettingsSectionHeading.textContent = "予定設定";
if (calendarThemeHeading) calendarThemeHeading.textContent = "予定のテーマ";
const toggleCurrentPasswordBtn = $("toggleCurrentPasswordBtn");
const toggleNewPasswordBtn = $("toggleNewPasswordBtn");
const toggleConfirmNewPasswordBtn = $("toggleConfirmNewPasswordBtn");
const changePasswordBtn = $("changePasswordBtn");
const calendarSettingsSection = $("calendarSettingsSection");
const workoutSettingsSection = $("workoutSettingsSection");
const themeSettingsSection = $("themeSettingsSection");
const transferSettingsSection = $("transferSettingsSection");
const passwordSettingsSection = $("passwordSettingsSection");
const siteThemePresetList = $("siteThemePresetList");
const calendarThemePresetList = $("calendarThemePresetList");
const workoutThemePresetList = $("workoutThemePresetList");
const dataTransferTypeSelect = $("dataTransferTypeSelect");
const exportCsvBtn = $("exportCsvBtn");
const exportZipBtn = $("exportZipBtn");
const importCsvBtn = $("importCsvBtn");
const importCsvInput = $("importCsvInput");
const resetCalendarDataBtn = $("resetCalendarDataBtn");
const resetWorkoutDataBtn = $("resetWorkoutDataBtn");
const resetAllDataBtn = $("resetAllDataBtn");
const newCategoryInput = $("newCategoryInput");
const addCategoryBtn = $("addCategoryBtn");
const categorySettingsList = $("categorySettingsList");
const newBodyPartInput = $("newBodyPartInput");
const addBodyPartBtn = $("addBodyPartBtn");
const settingsBodyPartSelect = $("settingsBodyPartSelect");
const newExerciseInput = $("newExerciseInput");
const addExerciseBtn = $("addExerciseBtn");
const workoutSettingsList = $("workoutSettingsList");
const defaultSetsSettingInput = $("defaultSetsSettingInput");
const defaultRestSecSettingInput = $("defaultRestSecSettingInput");
const saveWorkoutDefaultsBtn = $("saveWorkoutDefaultsBtn");

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth();
let selectedDate = formatDateKey(today);
let miniYear = today.getFullYear();
let miniMonth = today.getMonth();
let workoutMiniYear = today.getFullYear();
let workoutMiniMonth = today.getMonth();

let workoutTimerInterval = null;
let workoutState = {
  mode: "idle",
  currentSet: 1,
  targetSets: 0,
  phaseStartedAt: null,
  setLogs: []
};
let workoutDraftInputs = {};
let workoutEditState = null;
let scheduleEditState = null;
let authMode = "login";
let schedulePhotoDrafts = [];
let schedulePhotoLoadPromise = Promise.resolve();
let activeRollPickerApply = null;
let numericAssist = null;
let activeNumericAssistInput = null;
let numericAssistHideTimer = null;

function isReplaceOnFirstNumericInput(input) {
  return !!input?.matches?.("[data-numeric-assist], .roll-direct-input, .roll-combined-input, .replace-on-first-input");
}

function selectInputText(input) {
  requestAnimationFrame(() => {
    try {
      input.select();
    } catch {
      try {
        input.setSelectionRange(0, String(input.value || "").length);
      } catch {}
    }
  });
}

function armReplaceOnFirstNumericInput(input) {
  if (!isReplaceOnFirstNumericInput(input)) return;
  input.dataset.replaceOnFirstInput = "true";
  selectInputText(input);
}

function sanitizeFirstNumericInput(input, value) {
  const allowsDecimal = input.inputMode === "decimal" || String(input.step || "").includes(".");
  const raw = String(value || "");
  if (allowsDecimal) {
    const cleaned = raw.replace(/[^\d.]/g, "");
    const dotIndex = cleaned.indexOf(".");
    return dotIndex === -1
      ? cleaned
      : cleaned.slice(0, dotIndex + 1) + cleaned.slice(dotIndex + 1).replace(/\./g, "");
  }
  return raw.replace(/\D/g, "");
}

function finishFirstNumericReplacement(input, value) {
  input.dataset.replaceOnFirstInput = "false";
  input.value = value;
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function normalizeUsername(username) {
  return String(username || "").trim();
}

function normalizeNickname(nickname, fallbackUsername = "") {
  const normalized = String(nickname || "").trim();
  return normalized || normalizeUsername(fallbackUsername) || "";
}

function getLegacyLoginSettings() {
  const parsed = readStorage(STORAGE_LOGIN_KEY, null);
  if (!parsed?.username || !parsed?.password) return null;
  return {
    username: normalizeUsername(parsed.username),
    password: String(parsed.password || "")
  };
}

function createStoredUser(username, password, createdAt = Date.now(), nickname = "") {
  const normalizedUsername = normalizeUsername(username);
  return {
    username: normalizedUsername,
    password: String(password || ""),
    createdAt: Number(createdAt || Date.now()),
    nickname: normalizeNickname(nickname, normalizedUsername)
  };
}

function getUserAccounts() {
  const parsed = readStorage(STORAGE_USERS_KEY, null);
  const accounts = parsed && typeof parsed === "object" && !Array.isArray(parsed) ? { ...parsed } : {};
  let changed = !parsed;

  const legacy = getLegacyLoginSettings();
  if (legacy?.username && legacy.password && !accounts[legacy.username]) {
    accounts[legacy.username] = createStoredUser(legacy.username, legacy.password, Date.now(), legacy.username);
    changed = true;
  }

  Object.keys(accounts).forEach(key => {
    const current = accounts[key];
    const username = normalizeUsername(current?.username || key);
    if (!username || !current || typeof current !== "object") {
      delete accounts[key];
      changed = true;
      return;
    }
    const normalized = createStoredUser(username, current.password, current.createdAt, current.nickname || username);
    if (key !== username) {
      delete accounts[key];
      changed = true;
    }
    accounts[username] = normalized;
  });

  const admin = accounts[ADMIN_USERNAME];
  if (!admin || admin.password !== ADMIN_PASSWORD) {
    accounts[ADMIN_USERNAME] = createStoredUser(ADMIN_USERNAME, ADMIN_PASSWORD, admin?.createdAt, admin?.nickname || ADMIN_USERNAME);
    changed = true;
  }

  if (changed) writeStorage(STORAGE_USERS_KEY, accounts);
  return accounts;
}

function saveUserAccounts(accounts) {
  writeStorage(STORAGE_USERS_KEY, accounts);
}

function getUserNickname(username) {
  const resolved = normalizeUsername(username);
  const account = getUserAccounts()[resolved];
  return normalizeNickname(account?.nickname, resolved);
}

function getUserDisplayName(username) {
  const resolved = normalizeUsername(username);
  const nickname = getUserNickname(resolved);
  return nickname && nickname !== resolved ? `${nickname} (${resolved})` : (nickname || resolved);
}

function initializeUserDataStorage(username) {
  const resolved = normalizeUsername(username);
  if (!resolved || isAdminUser(resolved)) return;

  const calendarKey = getScopedDataKey(STORAGE_CATEGORY_KEY, resolved);
  if (!Array.isArray(readStorage(calendarKey, null))) {
    writeStorage(calendarKey, []);
  }

  const scheduleKey = getScopedDataKey(STORAGE_SCHEDULE_KEY, resolved);
  if (!readStorage(scheduleKey, null) || Array.isArray(readStorage(scheduleKey, null))) {
    writeStorage(scheduleKey, {});
  }

  const workoutMasterKey = getScopedDataKey(STORAGE_WORKOUT_MASTER_KEY, resolved);
  if (!readStorage(workoutMasterKey, null)) {
    writeStorage(workoutMasterKey, deepCopy(DEFAULT_WORKOUT_MASTERS));
  }

  const workoutSessionKey = getScopedDataKey(STORAGE_WORKOUT_SESSION_KEY, resolved);
  if (!readStorage(workoutSessionKey, null) || Array.isArray(readStorage(workoutSessionKey, null))) {
    writeStorage(workoutSessionKey, {});
  }

  const workoutUiKey = getScopedDataKey(STORAGE_WORKOUT_UI_SETTINGS_KEY, resolved);
  if (!readStorage(workoutUiKey, null)) {
    writeStorage(workoutUiKey, deepCopy(DEFAULT_WORKOUT_UI_SETTINGS));
  }
}

function getCurrentUsername() {
  return normalizeUsername(sessionStorage.getItem(SESSION_CURRENT_USER_KEY) || "");
}

function isAdminUser(username = getCurrentUsername()) {
  return normalizeUsername(username) === ADMIN_USERNAME;
}

function getEffectiveUsername(username = getCurrentUsername()) {
  const resolved = normalizeUsername(username);
  if (!resolved) return "";
  if (!isAdminUser(resolved)) return resolved;
  const accounts = getUserAccounts();
  const target = normalizeUsername(sessionStorage.getItem(SESSION_ADMIN_VIEW_USER_KEY) || ADMIN_USERNAME);
  return accounts[target] ? target : ADMIN_USERNAME;
}

function getScopedDataKey(baseKey, username = getCurrentUsername()) {
  const resolved = getEffectiveUsername(username);
  if (!resolved || isAdminUser(resolved)) return baseKey;
  return `${baseKey}__${resolved}`;
}

function getScopedDataKeyForUsername(baseKey, username = "") {
  const resolved = normalizeUsername(username);
  if (!resolved || isAdminUser(resolved)) return baseKey;
  return `${baseKey}__${resolved}`;
}

function readUserDataStorage(baseKey, fallback) {
  return readStorage(getScopedDataKey(baseKey), fallback);
}

function writeUserDataStorage(baseKey, value) {
  writeStorage(getScopedDataKey(baseKey), value);
}

function readUserDataStorageForUsername(baseKey, username, fallback) {
  return readStorage(getScopedDataKeyForUsername(baseKey, username), fallback);
}

function isAuthenticated() {
  const username = getCurrentUsername();
  if (!username || sessionStorage.getItem(SESSION_LOGIN_KEY) !== "1") return false;
  const accounts = getUserAccounts();
  return Boolean(accounts[username]);
}

function setAuthenticated(nextValue, username = getCurrentUsername()) {
  if (nextValue) {
    const resolved = normalizeUsername(username);
    sessionStorage.setItem(SESSION_LOGIN_KEY, "1");
    sessionStorage.setItem(SESSION_CURRENT_USER_KEY, resolved);
    if (isAdminUser(resolved)) {
      const target = normalizeUsername(sessionStorage.getItem(SESSION_ADMIN_VIEW_USER_KEY) || ADMIN_USERNAME);
      sessionStorage.setItem(SESSION_ADMIN_VIEW_USER_KEY, target || ADMIN_USERNAME);
    } else {
      sessionStorage.removeItem(SESSION_ADMIN_VIEW_USER_KEY);
    }
  } else {
    sessionStorage.removeItem(SESSION_LOGIN_KEY);
    sessionStorage.removeItem(SESSION_CURRENT_USER_KEY);
    sessionStorage.removeItem(SESSION_ADMIN_VIEW_USER_KEY);
  }
  updateLoginView();
}

function setAuthMode(mode) {
  authMode = mode === "register" ? "register" : "login";
  updateLoginView();
}

function renderAdminViewUserSelect() {
  if (!adminViewUserWrap || !adminViewUserSelect) return;
  const show = isAdminUser();
  adminViewUserWrap.classList.toggle("hidden", !show);
  if (!show) return;

  const accounts = getUserAccounts();
  const usernames = Object.keys(accounts).sort((a, b) => {
    if (a === ADMIN_USERNAME) return -1;
    if (b === ADMIN_USERNAME) return 1;
    return a.localeCompare(b, "ja");
  });
  adminViewUserSelect.innerHTML = usernames.map(username => `
    <option value="${escapeAttr(username)}">${escapeHtml(username === ADMIN_USERNAME ? `${getUserDisplayName(username)} (既存データ)` : getUserDisplayName(username))}</option>
  `).join("");
  const target = getEffectiveUsername();
  adminViewUserSelect.value = usernames.includes(target) ? target : ADMIN_USERNAME;
}

function setPasswordFieldVisibility(input, button, visible) {
  if (!input || !button) return;
  const nextVisible = !!visible;
  input.type = nextVisible ? "text" : "password";
  button.textContent = nextVisible ? "非表示" : "表示";
  button.setAttribute("aria-label", nextVisible ? "パスワードを隠す" : "パスワードを表示");
  button.dataset.visible = nextVisible ? "1" : "0";
}

function togglePasswordFieldVisibility(input, button) {
  if (!input || !button) return;
  setPasswordFieldVisibility(input, button, button.dataset.visible !== "1");
}

function resetPasswordFieldVisibility() {
  setPasswordFieldVisibility(loginPasswordInput, toggleLoginPasswordBtn, false);
  setPasswordFieldVisibility(registerPasswordConfirmInput, toggleRegisterPasswordConfirmBtn, false);
  setPasswordFieldVisibility(currentPasswordInput, toggleCurrentPasswordBtn, false);
  setPasswordFieldVisibility(newPasswordInput, toggleNewPasswordBtn, false);
  setPasswordFieldVisibility(confirmNewPasswordInput, toggleConfirmNewPasswordBtn, false);
}

function clearPasswordSettingsForm() {
  [currentPasswordInput, newPasswordInput, confirmNewPasswordInput].filter(Boolean).forEach(input => {
    input.value = "";
  });
  resetPasswordFieldVisibility();
}

function renderPasswordSettings() {
  if (!passwordSettingsWrap) return;
  const loggedIn = isAuthenticated();
  const canChangePassword = loggedIn && !isAdminUser();
  passwordSettingsWrap.classList.toggle("hidden", !loggedIn);
  changePasswordFieldsWrap?.classList.toggle("hidden", !canChangePassword);
  if (userNicknameInput && loggedIn) {
    userNicknameInput.value = getUserNickname(getCurrentUsername());
  }
  if (!canChangePassword) clearPasswordSettingsForm();
  showPasswordSettingsBtn?.classList.toggle("hidden", !isAuthenticated());
}

function saveCurrentUserNickname() {
  const username = getCurrentUsername();
  if (!username) return;
  const nickname = normalizeNickname(userNicknameInput?.value, username);
  const accounts = getUserAccounts();
  const account = accounts[username];
  if (!account) return;
  accounts[username] = { ...account, nickname };
  saveUserAccounts(accounts);
  renderAdminViewUserSelect();
  renderPasswordSettings();
  renderWorkoutRankings();
  alert("ニックネームを保存しました。");
}

function setAdminViewUser(username) {
  if (!isAdminUser()) return;
  const accounts = getUserAccounts();
  const target = normalizeUsername(username);
  const nextUser = accounts[target] ? target : ADMIN_USERNAME;
  sessionStorage.setItem(SESSION_ADMIN_VIEW_USER_KEY, nextUser);
  refreshUserScopedUi();
  switchView("workout");
}

function isAdminCalendarLocked() {
  return isAdminUser();
}

function refreshUserScopedUi() {
  applyThemeSettings();
  renderAdminViewUserSelect();
  renderPasswordSettings();
  goInputBtn?.classList.toggle("hidden", isAdminCalendarLocked());
  renderCategorySelect();
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();
  applyWorkoutDefaultsToInputs();
  workoutDateInput.value = selectedDate;
  updateWorkoutInputTargetDateLabel();
  renderWorkoutBodyPartSelect();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
  renderWorkoutDashboard();
  renderWorkoutRankings();
  updateWorkoutInputMode();
  renderWorkoutLogs();
  renderCategorySettingsList();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderWorkoutDefaultSettingsInputs();
  renderStatsBodyPartSelect();
  renderThemeSettings();
}

function updateLoginView() {
  const loggedIn = isAuthenticated();
  const currentUsername = getCurrentUsername();
  document.body.classList.toggle("auth-locked", !loggedIn);
  if (loginView) loginView.classList.toggle("hidden", loggedIn);
  if (!loginTitle || !loginDescription || !loginSubmitBtn) return;

  const isRegisterMode = authMode === "register";
  loginTitle.textContent = isRegisterMode ? "新規登録" : "ログイン";
  loginDescription.textContent = isRegisterMode
    ? "ユーザー名とパスワードを登録して、自分専用のカレンダーと筋トレ記録を使い始めます。"
    : "登録済みのユーザー名とパスワードでログインしてください。";
  loginSubmitBtn.textContent = isRegisterMode ? "登録して開始" : "ログイン";
  registerPasswordConfirmWrap?.classList.toggle("hidden", !isRegisterMode);
  loginAdminNote?.classList.toggle("hidden", isRegisterMode);
  showLoginModeBtn?.classList.toggle("active-tab", !isRegisterMode);
  showRegisterModeBtn?.classList.toggle("active-tab", isRegisterMode);

  if (!loggedIn) {
    if (!loginNameInput.value) {
      loginNameInput.value = currentUsername || "";
    }
    loginPasswordInput.value = "";
    if (registerPasswordConfirmInput) registerPasswordConfirmInput.value = "";
    if (!isRegisterMode) selectInputText(loginPasswordInput);
  }
}

function logoutUser() {
  closeRollPicker();
  setAuthenticated(false, "");
  setAuthMode("login");
  loginNameInput.value = "";
  if (registerNicknameInput) registerNicknameInput.value = "";
  loginPasswordInput.value = "";
  if (registerPasswordConfirmInput) registerPasswordConfirmInput.value = "";
  clearPasswordSettingsForm();
  switchView("calendar");
}

function resetCalendarData() {
  removeSharedSchedulesByOwner(getCurrentUsername());
  saveCategories(getDefaultCategoriesForCurrentUser());
  saveSchedules({});
  scheduleEditState = null;
  resetSchedulePhotos();
  if (calendarShareInput) calendarShareInput.checked = false;
  setDefaultDateTimes();
  renderCategorySelect();
  renderCategorySettingsList();
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();
  saveRecordBtn.textContent = "保存する";
  switchView("calendar");
}

function resetWorkoutData() {
  saveWorkoutMasters(deepCopy(DEFAULT_WORKOUT_MASTERS));
  saveWorkoutSessions({});
  saveWorkoutUiSettings(DEFAULT_WORKOUT_UI_SETTINGS);
  workoutEditState = null;
  applyWorkoutDefaultsToInputs();
  resetWorkoutState();
  renderSettingsBodyPartSelect();
  renderWorkoutBodyPartSelect();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
  renderWorkoutDashboard();
  renderWorkoutRankings();
  renderWorkoutSettingsList();
  renderWorkoutDefaultSettingsInputs();
  renderStatsBodyPartSelect();
  updateWorkoutInputMode();
  renderWorkoutLogs();
  switchView("workout");
}

function confirmAndResetData(target) {
  const messages = {
    calendar: "予定の記録と項目設定を初期化します。よろしいですか？",
    workout: "筋トレの記録と設定を初期化します。よろしいですか？",
    all: "予定と筋トレのデータをまとめて初期化します。よろしいですか？"
  };
  if (!confirm(messages[target] || messages.all)) return;
  if (target === "calendar") {
    resetCalendarData();
    alert("予定データを初期化しました。");
    return;
  }
  if (target === "workout") {
    resetWorkoutData();
    alert("筋トレデータを初期化しました。");
    return;
  }
  resetCalendarData();
  resetWorkoutData();
  switchView("calendar");
  alert("予定と筋トレのデータを初期化しました。");
}

function getDefaultCategoriesForCurrentUser() {
  return isAdminUser(getEffectiveUsername()) ? deepCopy(DEFAULT_CATEGORIES) : [];
}

function getCategories() {
  const parsed = readUserDataStorage(STORAGE_CATEGORY_KEY, null);
  if (!Array.isArray(parsed)) {
    const defaults = getDefaultCategoriesForCurrentUser();
    writeUserDataStorage(STORAGE_CATEGORY_KEY, defaults);
    return defaults;
  }
  if (parsed.length === 0) return [];

  const normalized = parsed.map((item, index) => {
    const fallback = DEFAULT_CATEGORIES[index] || DEFAULT_CATEGORIES[0];
    const name = CATEGORY_NAME_REPAIRS[item?.name] || item?.name || fallback.name;
    const template = typeof item?.template === "string" && !item.template.includes("縲")
      ? item.template
      : fallback.template;
    return {
      id: item?.id || createId(),
      name,
      color: item?.color || fallback.color || "#2563eb",
      template
    };
  });

  return normalized;
}

function saveCategories(data) {
  writeUserDataStorage(STORAGE_CATEGORY_KEY, data);
}

function getSchedules() {
  const parsed = readUserDataStorage(STORAGE_SCHEDULE_KEY, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}

function saveSchedules(data) {
  writeUserDataStorage(STORAGE_SCHEDULE_KEY, data);
}

function getSharedSchedules() {
  const parsed = readStorage(STORAGE_SHARED_SCHEDULE_KEY, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}

function saveSharedSchedules(data) {
  writeStorage(STORAGE_SHARED_SCHEDULE_KEY, data);
}

function getScheduleOwnerUsername(item, fallback = getCurrentUsername()) {
  return normalizeUsername(item?.ownerUsername) || normalizeUsername(fallback);
}

function removeSharedSchedulesByOwner(username) {
  const ownerUsername = normalizeUsername(username);
  if (!ownerUsername) return;
  const sharedSchedules = getSharedSchedules();
  let changed = false;

  Object.keys(sharedSchedules).forEach(dateKey => {
    const filtered = (sharedSchedules[dateKey] || []).filter(item => {
      return getScheduleOwnerUsername(item) !== ownerUsername;
    });
    if (filtered.length !== (sharedSchedules[dateKey] || []).length) changed = true;
    if (filtered.length) {
      sharedSchedules[dateKey] = filtered;
    } else {
      delete sharedSchedules[dateKey];
    }
  });

  if (changed) saveSharedSchedules(sharedSchedules);
}

function syncSharedScheduleItem(dateKey, item) {
  const sharedSchedules = getSharedSchedules();
  const ownerUsername = getScheduleOwnerUsername(item);

  Object.keys(sharedSchedules).forEach(key => {
    const filtered = (sharedSchedules[key] || []).filter(sharedItem => {
      return !(
        sharedItem.id === item.id &&
        getScheduleOwnerUsername(sharedItem) === ownerUsername
      );
    });
    if (filtered.length) {
      sharedSchedules[key] = filtered;
    } else {
      delete sharedSchedules[key];
    }
  });

  if (item.isShared) {
    if (!sharedSchedules[dateKey]) sharedSchedules[dateKey] = [];
    sharedSchedules[dateKey].push(deepCopy({
      ...item,
      ownerUsername,
      isShared: true
    }));
  }

  saveSharedSchedules(sharedSchedules);
}

function getVisibleSchedules() {
  const currentUsername = getCurrentUsername();
  const ownSchedules = isAdminUser(currentUsername) ? {} : getSchedules();
  const visibleSchedules = deepCopy(ownSchedules);
  const sharedSchedules = getSharedSchedules();

  Object.entries(sharedSchedules).forEach(([dateKey, items]) => {
    (items || []).forEach(item => {
      if (!item?.isShared) return;
      if (!visibleSchedules[dateKey]) visibleSchedules[dateKey] = [];
      const ownerUsername = getScheduleOwnerUsername(item);
      const exists = visibleSchedules[dateKey].some(existing => (
        existing.id === item.id &&
        getScheduleOwnerUsername(existing) === ownerUsername
      ));
      if (exists) return;
      visibleSchedules[dateKey].push(deepCopy(item));
    });
  });

  return visibleSchedules;
}

function canManageScheduleItem(item) {
  if (isAdminUser()) return false;
  const ownerUsername = getScheduleOwnerUsername(item);
  return !ownerUsername || ownerUsername === getCurrentUsername();
}

function normalizeWorkoutMasters(parsed) {
  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return deepCopy(DEFAULT_WORKOUT_MASTERS);

  const result = {};
  Object.entries(parsed).forEach(([part, exercises]) => {
    const cleanPart = WORKOUT_PART_REPAIRS[part] || part;
    const cleanExercises = Array.isArray(exercises)
      ? exercises.map(ex => WORKOUT_EXERCISE_REPAIRS[ex] || ex).filter(Boolean)
      : [];
    result[cleanPart] = unique([...(result[cleanPart] || []), ...cleanExercises]);
  });

  Object.entries(DEFAULT_WORKOUT_MASTERS).forEach(([part, exercises]) => {
    if (!result[part] || result[part].length === 0) result[part] = exercises.slice();
  });

  return result;
}

function getWorkoutMasters() {
  const parsed = readUserDataStorage(STORAGE_WORKOUT_MASTER_KEY, null);
  const normalized = normalizeWorkoutMasters(parsed);
  if (!parsed) writeUserDataStorage(STORAGE_WORKOUT_MASTER_KEY, normalized);
  return normalized;
}

function saveWorkoutMasters(data) {
  writeUserDataStorage(STORAGE_WORKOUT_MASTER_KEY, normalizeWorkoutMasters(data));
}

function getWorkoutSessions() {
  const parsed = readUserDataStorage(STORAGE_WORKOUT_SESSION_KEY, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}

function saveWorkoutSessions(data) {
  writeUserDataStorage(STORAGE_WORKOUT_SESSION_KEY, data);
}

function getWorkoutUiSettings() {
  const parsed = readUserDataStorage(STORAGE_WORKOUT_UI_SETTINGS_KEY, DEFAULT_WORKOUT_UI_SETTINGS);
  const defaultSets = Math.max(1, Number(parsed?.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets));
  const defaultRestSec = Math.max(0, Number(parsed?.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec));
  return { defaultSets, defaultRestSec };
}

function saveWorkoutUiSettings(data) {
  const normalized = {
    defaultSets: Math.max(1, Number(data.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets)),
    defaultRestSec: Math.max(0, Number(data.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec))
  };
  writeUserDataStorage(STORAGE_WORKOUT_UI_SETTINGS_KEY, normalized);
}

function createThemeLightVariantPreset(theme, index) {
  const vars = theme.vars;
  const lightCard = mixHexColors(vars["--primary-light"], vars["--card"], 0.68);
  const lightAlt = mixHexColors(vars["--primary-light"], vars["--card"], 0.5);
  const lightSurface = mixHexColors(vars["--primary-light"], "#ffffff", 0.26);
  const lightField = mixHexColors(vars["--primary-light"], "#ffffff", 0.5);
  const lightLine = mixHexColors(vars["--primary"], vars["--line"], 0.28);
  const accent = vars["--primary"];
  const accentDark = vars["--primary-dark"];
  const accentLight = mixHexColors(vars["--primary-light"], "#ffffff", 0.82);
  return {
    ...theme,
    id: `${theme.id}-light-${index}`,
    variant: "light",
    name: `${theme.id} light ${index}`,
    note: "",
    colors: [
      vars["--primary-light"],
      accent,
      lightCard
    ],
    vars: {
      ...vars,
      "--workout-card": lightCard,
      "--workout-card-alt": lightAlt,
      "--workout-surface": lightSurface,
      "--workout-field": lightField,
      "--workout-line": lightLine,
      "--workout-text": getReadableTextColor(lightCard, "#0f172a", "#ffffff"),
      "--workout-subtext": getReadableMutedTextColor(lightCard),
      "--workout-primary": accent,
      "--workout-primary-dark": accentDark,
      "--workout-primary-light": accentLight,
      "--workout-accent": accent,
      "--workout-chip": accentLight,
      "--workout-on-accent": getReadableTextColor(accent, "#111827", "#ffffff"),
      "--workout-today": vars["--today"],
      "--workout-selected": vars["--selected"],
      "--workout-other": mixHexColors(vars["--primary-light"], "#ffffff", 0.34)
    }
  };
}

function createThemeDarkVariantPreset(theme, index) {
  const vars = theme.vars;
  const darkCard = vars["--workout-card"];
  const darkAlt = vars["--workout-card-alt"];
  const darkField = vars["--workout-field"];
  const darkLine = vars["--workout-line"];
  const accent = vars["--primary"];
  const accentDark = vars["--primary-dark"];
  const accentLight = mixHexColors(darkField, vars["--primary-light"], 0.38);
  return {
    ...theme,
    id: `${theme.id}-dark-${index}`,
    variant: "dark",
    name: `${theme.id} dark ${index}`,
    note: "",
    colors: [
      accent,
      vars["--workout-accent"],
      darkCard
    ],
    vars: {
      ...vars,
      "--page-bg-top": mixHexColors(darkCard, "#000000", 0.88),
      "--page-bg-bottom": mixHexColors(darkAlt, darkCard, 0.54),
      "--bg": mixHexColors(darkCard, darkAlt, 0.5),
      "--card": darkCard,
      "--text": "#ffffff",
      "--subtext": "#d1d5db",
      "--line": darkLine,
      "--primary": accent,
      "--primary-dark": accentDark,
      "--primary-light": accentLight,
      "--today": vars["--workout-today"],
      "--selected": vars["--workout-selected"],
      "--workout-card": darkCard,
      "--workout-card-alt": darkAlt,
      "--workout-surface": vars["--workout-surface"],
      "--workout-field": darkField,
      "--workout-line": darkLine,
      "--workout-text": "#ffffff",
      "--workout-subtext": "#e5e7eb",
      "--workout-primary": accent,
      "--workout-primary-dark": accentDark,
      "--workout-primary-light": accentLight,
      "--workout-accent": accent,
      "--workout-chip": accentLight,
      "--workout-on-accent": getReadableTextColor(accent, "#111827", "#ffffff"),
      "--workout-today": vars["--workout-today"],
      "--workout-selected": vars["--workout-selected"],
      "--workout-other": vars["--workout-other"]
    }
  };
}

function createSoftThemePreset({ id, name, accent, pale, line, selected, today }) {
  const todayTone = mixHexColors(accent, "#ffffff", 0.08);
  const selectedTone = mixHexColors(accent, "#ffffff", 0.20);
  return {
    id,
    name,
    note: "",
    colors: [accent, pale, "#ffffff"],
    vars: {
      "--page-bg-top": "#ffffff",
      "--page-bg-bottom": pale,
      "--bg": "#ffffff",
      "--card": "#ffffff",
      "--text": "#111827",
      "--subtext": "#4b5563",
      "--line": line,
      "--primary": accent,
      "--primary-dark": accent,
      "--primary-light": pale,
      "--today": todayTone,
      "--selected": selectedTone,
      "--workout-primary": accent,
      "--workout-primary-dark": accent,
      "--workout-primary-light": pale,
      "--workout-accent": accent,
      "--workout-chip": pale,
      "--workout-on-accent": "#111827",
      "--workout-card": "#ffffff",
      "--workout-card-alt": pale,
      "--workout-surface": pale,
      "--workout-field": "#ffffff",
      "--workout-line": line,
      "--workout-text": "#111827",
      "--workout-subtext": "#4b5563",
      "--workout-today": todayTone,
      "--workout-selected": selectedTone,
      "--workout-other": pale
    }
  };
}

const SOFT_THEME_PRESETS = [
  createSoftThemePreset({
    id: "soft-black",
    name: "黒",
    accent: "#111827",
    pale: "#f8fafc",
    line: "#cbd5e1",
    selected: "#dbe4f0",
    today: "#f8fafc"
  }),
  createSoftThemePreset({
    id: "soft-gray",
    name: "灰色",
    accent: "#94a3b8",
    pale: "#f8fafc",
    line: "#cbd5e1",
    selected: "#d8e1eb",
    today: "#eef2f7"
  }),
  createSoftThemePreset({
    id: "soft-blue",
    name: "薄い青",
    accent: "#60a5fa",
    pale: "#eff6ff",
    line: "#bfdbfe",
    selected: "#bfdbfe",
    today: "#eff6ff"
  }),
  createSoftThemePreset({
    id: "soft-cyan",
    name: "薄い水色",
    accent: "#22d3ee",
    pale: "#ecfeff",
    line: "#a5f3fc",
    selected: "#a5f3fc",
    today: "#ecfeff"
  }),
  createSoftThemePreset({
    id: "soft-green",
    name: "薄い緑",
    accent: "#4ade80",
    pale: "#f0fdf4",
    line: "#bbf7d0",
    selected: "#bbf7d0",
    today: "#f0fdf4"
  }),
  createSoftThemePreset({
    id: "soft-lime",
    name: "薄い黄緑",
    accent: "#a3e635",
    pale: "#f7fee7",
    line: "#d9f99d",
    selected: "#d9f99d",
    today: "#fefce8"
  }),
  createSoftThemePreset({
    id: "soft-red",
    name: "薄い赤",
    accent: "#f87171",
    pale: "#fef2f2",
    line: "#fecaca",
    selected: "#fecaca",
    today: "#fff1f2"
  }),
  createSoftThemePreset({
    id: "soft-pink",
    name: "薄いピンク",
    accent: "#f472b6",
    pale: "#fdf2f8",
    line: "#fbcfe8",
    selected: "#fbcfe8",
    today: "#fdf2f8"
  }),
  createSoftThemePreset({
    id: "soft-yellow",
    name: "薄い黄",
    accent: "#facc15",
    pale: "#fefce8",
    line: "#fde68a",
    selected: "#fde68a",
    today: "#fffbeb"
  }),
  createSoftThemePreset({
    id: "soft-orange",
    name: "薄い橙",
    accent: "#fb923c",
    pale: "#fff7ed",
    line: "#fdba74",
    selected: "#fdba74",
    today: "#fff7ed"
  })
];

const SITE_THEME_PRESETS = SOFT_THEME_PRESETS;
const CONTENT_THEME_PRESETS = SOFT_THEME_PRESETS;

function normalizeThemeId(themeId, presets = CONTENT_THEME_PRESETS) {
  return presets.some(theme => theme.id === themeId) ? themeId : presets[0].id;
}

function getThemeSettings() {
  const parsed = readUserDataStorage(STORAGE_THEME_KEY, {});
  const legacyThemeId = normalizeThemeId(parsed?.themeId, CONTENT_THEME_PRESETS);
  return {
    siteThemeId: normalizeThemeId(parsed?.siteThemeId || parsed?.themeId, SITE_THEME_PRESETS),
    calendarThemeId: normalizeThemeId(parsed?.calendarThemeId || legacyThemeId, CONTENT_THEME_PRESETS),
    workoutThemeId: normalizeThemeId(parsed?.workoutThemeId || legacyThemeId, CONTENT_THEME_PRESETS)
  };
}

function saveThemeSettings(nextValues) {
  const current = getThemeSettings();
  const merged = {
    siteThemeId: normalizeThemeId(nextValues?.siteThemeId || current.siteThemeId, SITE_THEME_PRESETS),
    calendarThemeId: normalizeThemeId(nextValues?.calendarThemeId || current.calendarThemeId, CONTENT_THEME_PRESETS),
    workoutThemeId: normalizeThemeId(nextValues?.workoutThemeId || current.workoutThemeId, CONTENT_THEME_PRESETS)
  };
  writeUserDataStorage(STORAGE_THEME_KEY, merged);
  applyThemeSettings();
  renderThemeSettings();
}

function getThemePresetById(themeId, presets = CONTENT_THEME_PRESETS) {
  return presets.find(theme => theme.id === themeId) || presets[0];
}

function getCurrentThemePresets() {
  const { siteThemeId, calendarThemeId, workoutThemeId } = getThemeSettings();
  return {
    siteTheme: getThemePresetById(siteThemeId, SITE_THEME_PRESETS),
    calendarTheme: getThemePresetById(calendarThemeId, CONTENT_THEME_PRESETS),
    workoutTheme: getThemePresetById(workoutThemeId, CONTENT_THEME_PRESETS)
  };
}

function hexToRgb(hex) {
  const normalized = String(hex || "").trim().replace("#", "");
  if (!/^[0-9a-fA-F]{6}$/.test(normalized)) return null;
  return {
    r: parseInt(normalized.slice(0, 2), 16),
    g: parseInt(normalized.slice(2, 4), 16),
    b: parseInt(normalized.slice(4, 6), 16)
  };
}

function rgbToHex(rgb) {
  if (!rgb) return null;
  return `#${[rgb.r, rgb.g, rgb.b].map(value => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0")).join("")}`;
}

function mixHexColors(primary, secondary, primaryWeight = 0.5) {
  const a = hexToRgb(primary);
  const b = hexToRgb(secondary);
  if (!a || !b) return primary || secondary || "#ffffff";
  const weight = Math.max(0, Math.min(1, Number(primaryWeight)));
  return rgbToHex({
    r: a.r * weight + b.r * (1 - weight),
    g: a.g * weight + b.g * (1 - weight),
    b: a.b * weight + b.b * (1 - weight)
  });
}

function getReadableTextColor(background, dark = "#111827", light = "#f8fafc") {
  const rgb = hexToRgb(background);
  if (!rgb) return dark;
  const srgb = [rgb.r, rgb.g, rgb.b].map(value => {
    const channel = value / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  });
  const luminance = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  return luminance >= 0.58 ? dark : light;
}

function getReadableMutedTextColor(background, dark = "#6b7280", light = "#cbd5e1") {
  return getReadableTextColor(background, dark, light);
}

function deriveContentThemeSurface(vars) {
  const fill = vars["--card"];
  const fillAlt = mixHexColors(vars["--primary-light"], vars["--card"], 0.38);
  const inputBg = mixHexColors(vars["--primary-light"], vars["--card"], 0.22);
  const chipBg = mixHexColors(vars["--primary-light"], vars["--card"], 0.58);
  return {
    frame: vars["--line"],
    fill,
    fillAlt,
    inputBg,
    buttonBg: vars["--primary"],
    chipBg,
    text: vars["--text"] || "#111827",
    subtext: vars["--subtext"] || "#4b5563",
    inputText: vars["--text"] || "#111827",
    placeholderText: vars["--subtext"] || "#6b7280",
    buttonText: getReadableTextColor(vars["--primary"], "#111827", "#f8fafc"),
    chipText: vars["--text"] || "#111827"
  };
}

function buildThemePreviewMarkup(theme, scope) {
  const vars = theme.vars;
  if (scope === "site") {
    const shellText = getReadableTextColor(vars["--card"]);
    const calendarText = getReadableTextColor(vars["--primary-light"]);
    const workoutText = getReadableTextColor(vars["--primary"]);
    return `
      <span class="theme-preview theme-preview-site" style="background:${escapeAttr(vars["--bg"])};border-color:${escapeAttr(vars["--line"])};">
        <span class="theme-preview-header" style="background:${escapeAttr(vars["--card"])};border-color:${escapeAttr(vars["--line"])};color:${escapeAttr(shellText)};">
          <span class="theme-preview-chip" style="background:${escapeAttr(vars["--primary-light"])};color:${escapeAttr(calendarText)};">予定</span>
          <span class="theme-preview-chip" style="background:${escapeAttr(vars["--primary"])};color:${escapeAttr(workoutText)};">筋トレ</span>
          <span class="theme-preview-chip theme-preview-chip-icon" style="background:${escapeAttr(vars["--card"])};border-color:${escapeAttr(vars["--line"])};color:${escapeAttr(shellText)};">⚙</span>
        </span>
        <span class="theme-preview-panel" style="background:${escapeAttr(vars["--card"])};border-color:${escapeAttr(vars["--line"])};color:${escapeAttr(shellText)};">
          <span class="theme-preview-line" style="background:${escapeAttr(vars["--primary-light"])};"></span>
          <span class="theme-preview-label">サイト全体</span>
        </span>
      </span>
    `;
  }

  const isWorkout = scope === "workout";
  const derived = deriveContentThemeSurface(vars);
  const cardBg = derived.fill;
  const frameColor = derived.frame;
  const fieldBg = derived.inputBg;
  const buttonBg = derived.buttonBg;
  const cardText = derived.text;
  const fieldText = derived.inputText;
  const buttonText = derived.buttonText;
  const title = isWorkout ? "筋トレ入力" : "予定入力";
  const buttonLabel = "入力";
  const valueLabel = isWorkout ? "20.0kg" : "2026/04/25";
  return `
    <span class="theme-preview theme-preview-card" style="background:${escapeAttr(cardBg)};border-color:${escapeAttr(frameColor)};color:${escapeAttr(cardText)};">
      <span class="theme-preview-title">${escapeHtml(title)}</span>
      <span class="theme-preview-field" style="background:${escapeAttr(fieldBg)};border-color:${escapeAttr(frameColor)};color:${escapeAttr(fieldText)};">${escapeHtml(valueLabel)}</span>
      <span class="theme-preview-button" style="background:${escapeAttr(buttonBg)};color:${escapeAttr(buttonText)};">${escapeHtml(buttonLabel)}</span>
    </span>
  `;
}

function applyThemeSettings() {
  const { siteTheme, calendarTheme, workoutTheme } = getCurrentThemePresets();
  const calendarSurface = deriveContentThemeSurface(calendarTheme.vars);
  const workoutSurface = deriveContentThemeSurface(workoutTheme.vars);
  const appHeaderText = getReadableTextColor(siteTheme.vars["--card"], "#111827", "#f8fafc");
  const topCalendarText = getReadableTextColor(siteTheme.vars["--primary-light"], "#111827", "#f8fafc");
  const topWorkoutText = getReadableTextColor(siteTheme.vars["--primary"], "#111827", "#f8fafc");
  const topSettingsText = getReadableTextColor(siteTheme.vars["--card"], "#111827", "#f8fafc");
  const settingsText = getReadableTextColor(siteTheme.vars["--card"], "#111827", "#f8fafc");
  const loginInputText = getReadableTextColor(siteTheme.vars["--card"], "#111827", "#f8fafc");
  const loginPlaceholderText = getReadableMutedTextColor(siteTheme.vars["--card"]);
  const settingsPlaceholderText = getReadableMutedTextColor(siteTheme.vars["--card"]);
  const vars = {
    ...siteTheme.vars,
    "--today": calendarTheme.vars["--today"],
    "--selected": calendarTheme.vars["--selected"],
    "--workout-primary": workoutTheme.vars["--workout-primary"],
    "--workout-primary-dark": workoutTheme.vars["--workout-primary-dark"],
    "--workout-primary-light": workoutTheme.vars["--workout-primary-light"],
    "--workout-accent": workoutSurface.buttonBg,
    "--workout-chip": workoutSurface.chipBg,
    "--workout-on-accent": workoutSurface.chipText,
    "--workout-card": workoutSurface.fill,
    "--workout-card-alt": workoutSurface.fillAlt,
    "--workout-surface": workoutSurface.fillAlt,
    "--workout-field": workoutSurface.inputBg,
    "--workout-line": workoutSurface.frame,
    "--workout-text": workoutSurface.text,
    "--workout-subtext": workoutSurface.subtext,
    "--workout-today": workoutTheme.vars["--workout-today"],
    "--workout-selected": workoutTheme.vars["--workout-selected"],
    "--workout-other": workoutTheme.vars["--workout-other"],
    "--app-header-bg": siteTheme.vars["--card"],
    "--app-header-text": appHeaderText,
    "--top-calendar-bg": siteTheme.vars["--primary-light"],
    "--top-calendar-text": topCalendarText,
    "--top-workout-bg": siteTheme.vars["--primary"],
    "--top-workout-text": topWorkoutText,
    "--top-settings-bg": siteTheme.vars["--card"],
    "--top-settings-text": topSettingsText,
    "--login-input-bg": siteTheme.vars["--card"],
    "--login-input-text": loginInputText,
    "--login-placeholder-text": loginPlaceholderText,
    "--calendar-frame": calendarSurface.frame,
    "--calendar-fill": calendarSurface.fill,
    "--calendar-fill-alt": calendarSurface.fillAlt,
    "--calendar-text": calendarSurface.text,
    "--calendar-subtext": calendarSurface.subtext,
    "--calendar-button-bg": calendarSurface.buttonBg,
    "--calendar-button-text": calendarSurface.buttonText,
    "--calendar-input-bg": calendarSurface.inputBg,
    "--calendar-input-text": calendarSurface.inputText,
    "--calendar-placeholder-text": calendarSurface.placeholderText,
    "--settings-frame": siteTheme.vars["--line"],
    "--settings-fill": siteTheme.vars["--card"],
    "--settings-text": settingsText,
    "--settings-button-bg": siteTheme.vars["--primary"],
    "--settings-button-text": getReadableTextColor(siteTheme.vars["--primary"]),
    "--settings-input-bg": siteTheme.vars["--card"],
    "--settings-input-text": settingsText,
    "--settings-placeholder-text": settingsPlaceholderText,
    "--workout-frame": workoutSurface.frame,
    "--workout-fill": workoutSurface.fill,
    "--workout-fill-alt": workoutSurface.fillAlt,
    "--workout-button-bg": workoutSurface.buttonBg,
    "--workout-button-text": workoutSurface.buttonText,
    "--workout-input-text": workoutSurface.inputText,
    "--workout-placeholder-text": workoutSurface.placeholderText
  };
  Object.entries(vars).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value);
  });
  document.body.dataset.theme = `${siteTheme.id}-${calendarTheme.id}-${workoutTheme.id}`;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", siteTheme.vars["--primary"]);
}

function formatDateKey(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatDisplayDate(dateKey) {
  if (!dateKey) return "";
  const [y, m, d] = dateKey.split("-");
  return `${Number(y)}/${Number(m)}/${Number(d)}`;
}

function toDateTimeLocalString(dateObj) {
  const y = dateObj.getFullYear();
  const m = String(dateObj.getMonth() + 1).padStart(2, "0");
  const d = String(dateObj.getDate()).padStart(2, "0");
  const hh = String(dateObj.getHours()).padStart(2, "0");
  const mm = String(dateObj.getMinutes()).padStart(2, "0");
  return `${y}-${m}-${d}T${hh}:${mm}`;
}

function getDateFromKey(dateKey) {
  const [y, m, d] = dateKey.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function addDays(dateObj, amount) {
  const result = new Date(dateObj);
  result.setDate(result.getDate() + amount);
  return result;
}

function formatDateTimeRange(start, end) {
  const s = start ? start.replace("T", " ") : "";
  const e = end ? end.replace("T", " ") : "";
  if (s && e) return `${s} - ${e}`;
  if (s) return `${s} -`;
  if (e) return `- ${e}`;
  return "日時未設定";
}

function formatScheduleSummaryTime(start, end) {
  const s = start ? start.slice(11, 16) : "";
  const e = end ? end.slice(11, 16) : "";
  if (s && e) return `${s}-${e}`;
  if (s) return s;
  if (e) return e;
  return "時間未設定";
}

function formatSeconds(sec) {
  const total = Math.max(0, Math.floor(Number(sec || 0)));
  const mm = String(Math.floor(total / 60)).padStart(2, "0");
  const ss = String(total % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

function formatHms(sec) {
  const total = Math.max(0, Math.floor(Number(sec || 0)));
  const hh = String(Math.floor(total / 3600)).padStart(2, "0");
  const mm = String(Math.floor((total % 3600) / 60)).padStart(2, "0");
  const ss = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

function formatWeightNumber(value) {
  const num = Number(value || 0);
  if (!Number.isFinite(num) || num <= 0) return "0";
  return Number.isInteger(num) ? String(num) : num.toFixed(1).replace(/\.0$/, "");
}

function calcEstimated1RM(weight, reps) {
  const w = Number(weight || 0);
  const r = Number(reps || 0);
  if (w <= 0 || r <= 0) return "";
  return (w * (1 + r / 30)).toFixed(1);
}

function rangeOptions(start, end, pad = false) {
  const values = [];
  for (let value = start; value <= end; value++) {
    values.push({
      value: String(value),
      label: pad ? String(value).padStart(2, "0") : String(value)
    });
  }
  return values;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function setSelectOptions(select, values, selectedValue) {
  select.innerHTML = values.map(item => (
    `<option value="${escapeAttr(item.value)}">${escapeHtml(item.label)}</option>`
  )).join("");
  select.value = String(selectedValue);
  if (select.value !== String(selectedValue) && select.options.length) {
    select.selectedIndex = select.options.length - 1;
  }
  syncRollDirectInput(select);
  scrollRollSelect(select);
}

function scrollRollSelect(select) {
  requestAnimationFrame(() => {
    const selected = select.options[select.selectedIndex];
    if (selected) selected.scrollIntoView({ block: "center" });
  });
}

function syncRollDirectInput(select) {
  const input = select.closest(".roll-column")?.querySelector(".roll-direct-input");
  if (input) input.value = select.value || "";
}

function bindRollDirectInputs() {
  if (rollPickerBody.querySelector(".roll-combined-input")) return;

  rollPickerBody.querySelectorAll(".roll-column select").forEach(select => {
    const column = select.closest(".roll-column");
    if (!column || column.querySelector(".roll-direct-input")) return;
    const input = document.createElement("input");
    input.className = "roll-direct-input";
    input.type = "number";
    input.inputMode = "numeric";
    column.insertBefore(input, select);
    input.addEventListener("focus", () => armReplaceOnFirstNumericInput(input));

    const applyInputValue = () => {
      const options = [...select.options].map(option => Number(option.value));
      if (!options.length) return;
      const min = Math.min(...options);
      const max = Math.max(...options);
      const nextValue = Math.min(max, Math.max(min, Math.floor(Number(input.value || min))));
      select.value = String(nextValue);
      if (select.value !== String(nextValue)) {
        select.selectedIndex = nextValue <= min ? 0 : select.options.length - 1;
      }
      syncRollDirectInput(select);
      scrollRollSelect(select);
    };

    select.addEventListener("change", () => syncRollDirectInput(select));
    input.addEventListener("input", applyInputValue);
    input.addEventListener("change", applyInputValue);
  });
}

function openRollPicker(title, bodyHtml, onApply) {
  rollPickerTitle.textContent = title;
  rollPickerBody.innerHTML = bodyHtml;
  rollPickerBody.classList.toggle("has-combined-input", !!rollPickerBody.querySelector(".roll-combined-input"));
  rollPickerBody.style.setProperty("--roll-column-count", String(Math.max(1, rollPickerBody.querySelectorAll(".roll-column").length)));
  bindRollDirectInputs();
  rollPickerBody.querySelectorAll(".roll-combined-input").forEach(input => {
    input.addEventListener("focus", () => armReplaceOnFirstNumericInput(input));
  });
  activeRollPickerApply = onApply;
  rollPickerCancelBtn.onclick = closeRollPicker;
  rollPickerApplyBtn.onclick = () => {
    if (activeRollPickerApply) activeRollPickerApply();
    closeRollPicker();
  };
  rollPickerOverlay.classList.remove("hidden");
  rollPickerBody.querySelectorAll("select").forEach(scrollRollSelect);
}

function closeRollPicker() {
  rollPickerOverlay.classList.add("hidden");
  rollPickerBody.innerHTML = "";
  rollPickerBody.classList.remove("has-combined-input");
  rollPickerBody.style.removeProperty("--roll-column-count");
  activeRollPickerApply = null;
}

function setWorkoutEditDateValue(dateKey) {
  workoutEditDateInput.value = dateKey;
  if (workoutEditDatePickerBtn) workoutEditDatePickerBtn.value = dateKey;
  if (workoutEditDatePickerLabel) workoutEditDatePickerLabel.textContent = formatDisplayDate(dateKey);
}

function openDateRollPickerFor(baseDate, onApply) {
  const [baseYear, baseMonth, baseDay] = baseDate.split("-").map(Number);
  const years = rangeOptions(baseYear - 10, baseYear + 10);
  const months = rangeOptions(1, 12, true);
  const days = rangeOptions(1, getDaysInMonth(baseYear, baseMonth), true);

  openRollPicker("日付を選択", `
    <div class="roll-combined-input-row">
      <input id="rollDateDirectInput" class="roll-combined-input" type="text" inputmode="numeric" maxlength="8" placeholder="20260110" />
    </div>
    <div class="roll-column">
      <span>年</span>
      <select id="rollYearSelect" class="roll-select" size="5"></select>
    </div>
    <div class="roll-column">
      <span>月</span>
      <select id="rollMonthSelect" class="roll-select" size="5"></select>
    </div>
    <div class="roll-column">
      <span>日</span>
      <select id="rollDaySelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    const direct = rollPickerBody.querySelector("#rollDateDirectInput")?.value.replace(/\D/g, "");
    if (direct?.length === 8) {
      const y = direct.slice(0, 4);
      const m = String(Math.min(12, Math.max(1, Number(direct.slice(4, 6))))).padStart(2, "0");
      const maxDay = getDaysInMonth(Number(y), Number(m));
      const d = String(Math.min(maxDay, Math.max(1, Number(direct.slice(6, 8))))).padStart(2, "0");
      onApply(`${y}-${m}-${d}`);
      return;
    }
    const y = rollPickerBody.querySelector("#rollYearSelect").value;
    const m = rollPickerBody.querySelector("#rollMonthSelect").value.padStart(2, "0");
    const d = rollPickerBody.querySelector("#rollDaySelect").value.padStart(2, "0");
    onApply(`${y}-${m}-${d}`);
  });

  const yearSelect = rollPickerBody.querySelector("#rollYearSelect");
  const monthSelect = rollPickerBody.querySelector("#rollMonthSelect");
  const daySelect = rollPickerBody.querySelector("#rollDaySelect");

  setSelectOptions(yearSelect, years, baseYear);
  setSelectOptions(monthSelect, months, baseMonth);
  setSelectOptions(daySelect, days, baseDay);

  const dateDirectInput = rollPickerBody.querySelector("#rollDateDirectInput");
  const syncDateDirectInput = () => {
    dateDirectInput.value = `${yearSelect.value}${monthSelect.value.padStart(2, "0")}${daySelect.value.padStart(2, "0")}`;
  };
  const updateDays = () => {
    const maxDay = getDaysInMonth(Number(yearSelect.value), Number(monthSelect.value));
    const currentDay = Math.min(Number(daySelect.value || baseDay), maxDay);
    setSelectOptions(daySelect, rangeOptions(1, maxDay, true), currentDay);
    syncDateDirectInput();
  };
  const applyDateDirectInput = () => {
    const compact = dateDirectInput.value.replace(/\D/g, "").slice(0, 8);
    dateDirectInput.value = compact;
    if (compact.length !== 8) return;
    const y = compact.slice(0, 4);
    const m = Math.min(12, Math.max(1, Number(compact.slice(4, 6))));
    const maxDay = getDaysInMonth(Number(y), m);
    const d = Math.min(maxDay, Math.max(1, Number(compact.slice(6, 8))));
    yearSelect.value = y;
    if (yearSelect.value !== y) return;
    monthSelect.value = String(m);
    setSelectOptions(daySelect, rangeOptions(1, maxDay, true), d);
    scrollRollSelect(yearSelect);
    scrollRollSelect(monthSelect);
    syncDateDirectInput();
  };

  yearSelect.addEventListener("change", updateDays);
  monthSelect.addEventListener("change", updateDays);
  daySelect.addEventListener("change", syncDateDirectInput);
  dateDirectInput.addEventListener("input", applyDateDirectInput);
  dateDirectInput.addEventListener("change", applyDateDirectInput);
  syncDateDirectInput();
}

function openDateRollPicker() {
  openDateRollPickerFor(workoutEditDateInput.value || selectedDate || formatDateKey(new Date()), setWorkoutEditDateValue);
}

function openWorkoutInputDateRollPicker() {
  openDateRollPickerFor(workoutDateInput.value || selectedDate || formatDateKey(new Date()), setWorkoutDate);
}

function openDurationRollPicker(title, totalSeconds, onApply) {
  const safeTotal = Math.max(0, Math.floor(Number(totalSeconds || 0)));
  const minutes = Math.min(99, Math.floor(safeTotal / 60));
  const seconds = safeTotal % 60;

  openRollPicker(title, `
    <div class="roll-column">
      <span>分</span>
      <select id="rollMinuteSelect" class="roll-select" size="5"></select>
    </div>
    <div class="roll-column">
      <span>秒</span>
      <select id="rollSecondSelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    const minuteValue = Number(rollPickerBody.querySelector("#rollMinuteSelect").value || 0);
    const secondValue = Number(rollPickerBody.querySelector("#rollSecondSelect").value || 0);
    onApply((minuteValue * 60) + secondValue);
  });

  setSelectOptions(rollPickerBody.querySelector("#rollMinuteSelect"), rangeOptions(0, 99, true), minutes);
  setSelectOptions(rollPickerBody.querySelector("#rollSecondSelect"), rangeOptions(0, 59, true), seconds);
}

function parseDurationInputValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return 0;
  if (raw.includes(":")) {
    const parts = raw.split(":").map(part => Number(part.replace(/\D/g, "") || 0));
    if (parts.length >= 3) {
      const [h, m, s] = parts;
      return Math.max(0, Math.floor((Number(h || 0) * 3600) + (Number(m || 0) * 60) + Math.min(59, Number(s || 0))));
    }
    const [m, s] = parts;
    return Math.max(0, Math.floor(Number(m || 0) * 60 + Math.min(59, Number(s || 0))));
  }
  const compact = raw.replace(/\D/g, "");
  if (!compact) return 0;
  if (compact.length <= 2) return Math.max(0, Number(compact) * 60);
  if (compact.length <= 4) {
    const minutes = Number(compact.slice(0, -2) || 0);
    const seconds = Number(compact.slice(-2) || 0);
    return Math.max(0, Math.floor((minutes * 60) + Math.min(59, seconds)));
  }
  const hours = Number(compact.slice(0, -4) || 0);
  const minutes = Number(compact.slice(-4, -2) || 0);
  const seconds = Number(compact.slice(-2) || 0);
  return Math.max(0, Math.floor((hours * 3600) + (Math.min(59, minutes) * 60) + Math.min(59, seconds)));
}

function bindDurationDirectInput(input, useLongFormat = false) {
  if (!input) return;
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^\d:]/g, "").slice(0, useLongFormat ? 8 : 5);
  });
  input.addEventListener("change", () => {
    input.value = useLongFormat ? formatHms(parseDurationInputValue(input.value)) : formatSeconds(parseDurationInputValue(input.value));
  });
  input.addEventListener("blur", () => {
    input.value = useLongFormat ? formatHms(parseDurationInputValue(input.value)) : formatSeconds(parseDurationInputValue(input.value));
  });
}

function formatWeightRollValue(value) {
  const number = Math.max(0, Number(value || 0));
  return number.toFixed(1);
}

function formatRepsRollValue(value) {
  return String(Math.max(0, Math.floor(Number(value || 0))));
}

function openWeightRollPicker(title, value, onApply) {
  const safeValue = Math.max(0, Number(value || 0));
  const integerValue = Math.min(300, Math.floor(safeValue));
  const decimalValue = Math.min(9, Math.round((safeValue - integerValue) * 10));

  openRollPicker(title, `
    <div class="roll-combined-input-row">
      <input id="rollWeightDirectInput" class="roll-combined-input" type="number" inputmode="decimal" min="0" max="300" step="0.1" placeholder="10.0" />
    </div>
    <div class="roll-column">
      <span>kg</span>
      <select id="rollWeightIntegerSelect" class="roll-select" size="5"></select>
    </div>
    <div class="roll-column">
      <span>小数</span>
      <select id="rollWeightDecimalSelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    const directValue = rollPickerBody.querySelector("#rollWeightDirectInput")?.value;
    if (directValue !== undefined && directValue !== "") {
      onApply(formatWeightRollValue(directValue));
      return;
    }
    const kg = Number(rollPickerBody.querySelector("#rollWeightIntegerSelect").value || 0);
    const decimal = Number(rollPickerBody.querySelector("#rollWeightDecimalSelect").value || 0);
    onApply((kg + decimal / 10).toFixed(1));
  });

  setSelectOptions(rollPickerBody.querySelector("#rollWeightIntegerSelect"), rangeOptions(0, 300), integerValue);
  setSelectOptions(rollPickerBody.querySelector("#rollWeightDecimalSelect"), rangeOptions(0, 9), decimalValue);
  const integerSelect = rollPickerBody.querySelector("#rollWeightIntegerSelect");
  const decimalSelect = rollPickerBody.querySelector("#rollWeightDecimalSelect");
  const directInput = rollPickerBody.querySelector("#rollWeightDirectInput");
  const syncDirectInput = () => {
    directInput.value = `${integerSelect.value}.${decimalSelect.value}`;
  };
  const applyDirectInput = () => {
    const value = Math.min(300, Math.max(0, Number(directInput.value || 0)));
    const kg = Math.floor(value);
    const decimal = Math.min(9, Math.max(0, Math.round((value - kg) * 10)));
    integerSelect.value = String(kg);
    decimalSelect.value = String(decimal);
    syncDirectInput();
    scrollRollSelect(integerSelect);
    scrollRollSelect(decimalSelect);
  };
  integerSelect.addEventListener("change", syncDirectInput);
  decimalSelect.addEventListener("change", syncDirectInput);
  directInput.addEventListener("change", applyDirectInput);
  syncDirectInput();
}

function openRepsRollPicker(title, value, onApply) {
  const safeValue = Math.min(300, Math.max(0, Math.floor(Number(value || 0))));

  openRollPicker(title, `
    <div class="roll-column">
      <span>回</span>
      <select id="rollRepsSelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    onApply(formatRepsRollValue(rollPickerBody.querySelector("#rollRepsSelect").value));
  });

  setSelectOptions(rollPickerBody.querySelector("#rollRepsSelect"), rangeOptions(0, 300), safeValue);
}

function openSetCountRollPicker(value, onApply) {
  const safeValue = Math.max(1, Math.floor(Number(value || 1)));

  openRollPicker("セット数", `
    <div class="roll-column">
      <span>セット</span>
      <select id="rollSetCountSelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    onApply(Math.max(1, Math.floor(Number(rollPickerBody.querySelector("#rollSetCountSelect").value || 1))));
  });

  setSelectOptions(rollPickerBody.querySelector("#rollSetCountSelect"), rangeOptions(1, 30), Math.min(30, safeValue));
}

function setWorkoutSetCount(value, options = {}) {
  const rawValue = String(value ?? "").trim();
  if (options.allowEmpty && rawValue === "") {
    setsInput.value = "";
    const inlineSetsInput = $("setsInlineInput");
    if (inlineSetsInput) {
      if ("value" in inlineSetsInput) inlineSetsInput.value = "";
      inlineSetsInput.textContent = "";
    }
    renderWorkoutState();
    return;
  }

  const nextValue = Math.max(1, Math.floor(Number(rawValue || 1)));
  setsInput.value = String(nextValue);
  const inlineSetsInput = $("setsInlineInput");
  if (inlineSetsInput) {
    if ("value" in inlineSetsInput) inlineSetsInput.value = String(nextValue);
    inlineSetsInput.textContent = String(nextValue);
  }
  if (workoutState.currentSet > nextValue) workoutState.currentSet = nextValue;
  ensureWorkoutDraftsSize();
  renderWorkoutState();
}

function formatNumericAssistValue(value, step) {
  const number = Number(value || 0);
  const decimals = String(step).includes(".") ? String(step).split(".")[1].length : 0;
  return decimals ? number.toFixed(decimals) : String(Math.round(number));
}

function ensureNumericInputAssist() {
  if (numericAssist) return numericAssist;
  numericAssist = document.createElement("div");
  numericAssist.id = "numericInputAssist";
  numericAssist.className = "numeric-input-assist hidden";
  numericAssist.innerHTML = `
    <div class="numeric-assist-head">
      <span data-numeric-assist-label>数値</span>
      <strong data-numeric-assist-value>0</strong>
    </div>
    <div class="numeric-assist-control">
      <input data-numeric-assist-range type="range" />
    </div>
  `;
  document.body.appendChild(numericAssist);

  numericAssist.querySelector("[data-numeric-assist-range]").addEventListener("input", event => {
    if (!activeNumericAssistInput) return;
    const step = Number(activeNumericAssistInput.dataset.numericStep || activeNumericAssistInput.step || 1);
    activeNumericAssistInput.value = formatNumericAssistValue(event.target.value, step);
    activeNumericAssistInput.dispatchEvent(new Event("input", { bubbles: true }));
    syncNumericAssist();
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", positionNumericAssist);
    window.visualViewport.addEventListener("scroll", positionNumericAssist);
  }
  return numericAssist;
}

function getNumericAssistRange(input) {
  const step = Number(input.dataset.numericStep || input.step || 1);
  const min = Number(input.dataset.numericMin || input.min || 0);
  const max = Number(input.dataset.numericMax || input.max || 300);
  const value = Math.min(max, Math.max(min, Number(input.value || min)));
  return { min, max, step, value };
}

function positionNumericAssist() {
  if (!numericAssist || numericAssist.classList.contains("hidden")) return;
  if (!window.visualViewport) {
    numericAssist.style.bottom = "0px";
    return;
  }
  const bottom = Math.max(0, window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop);
  numericAssist.style.bottom = `${bottom}px`;
}

function syncNumericAssist() {
  if (!numericAssist || !activeNumericAssistInput) return;
  const { min, max, step, value } = getNumericAssistRange(activeNumericAssistInput);
  const range = numericAssist.querySelector("[data-numeric-assist-range]");
  range.min = String(min);
  range.max = String(max);
  range.step = String(step);
  range.value = String(value);
  numericAssist.querySelector("[data-numeric-assist-label]").textContent = activeNumericAssistInput.dataset.numericLabel || "数値";
  numericAssist.querySelector("[data-numeric-assist-value]").textContent = formatNumericAssistValue(value, step);
}

function showNumericAssist(input) {
  ensureNumericInputAssist();
  activeNumericAssistInput = input;
  armReplaceOnFirstNumericInput(input);
  clearTimeout(numericAssistHideTimer);
  syncNumericAssist();
  numericAssist.classList.remove("hidden");
  positionNumericAssist();
}

function hideNumericAssist() {
  numericAssistHideTimer = setTimeout(() => {
    if (numericAssist) numericAssist.classList.add("hidden");
    activeNumericAssistInput = null;
  }, 120);
}

function initNumericInputAssist() {
  ensureNumericInputAssist();
  document.addEventListener("focusin", event => {
    const input = event.target.closest?.("[data-numeric-assist]");
    if (input) showNumericAssist(input);
  });
  document.addEventListener("beforeinput", event => {
    const input = event.target.closest?.("input");
    if (!input || input.dataset.replaceOnFirstInput !== "true") return;

    if (event.inputType?.startsWith("delete")) {
      event.preventDefault();
      finishFirstNumericReplacement(input, "");
      return;
    }

    if (event.inputType && !event.inputType.startsWith("insert")) return;
    const nextValue = sanitizeFirstNumericInput(input, event.data || "");
    if (!nextValue && event.data) return;

    event.preventDefault();
    finishFirstNumericReplacement(input, nextValue);
  });
  document.addEventListener("focusout", event => {
    const input = event.target.closest?.("[data-numeric-assist], .roll-direct-input, .roll-combined-input, .replace-on-first-input");
    if (input) input.dataset.replaceOnFirstInput = "false";
    if (event.target.closest?.("[data-numeric-assist]")) hideNumericAssist();
  });
  document.addEventListener("input", event => {
    if (isReplaceOnFirstNumericInput(event.target)) event.target.dataset.replaceOnFirstInput = "false";
    if (event.target === activeNumericAssistInput) syncNumericAssist();
  });
}

function getCalendarCells(year, month) {
  const first = new Date(year, month, 1);
  const start = addDays(first, -first.getDay());
  return Array.from({ length: 42 }, (_, idx) => addDays(start, idx));
}

function getCategoryById(id) {
  return getCategories().find(item => item.id === id);
}

function updateAppViewTitle(viewName) {
  const isWorkoutView = viewName === "workout" || viewName === "workoutInput" || viewName === "workoutEdit" || viewName === "workoutStats";
  const isSettingsView = viewName === "settings";
  goCalendarBtnHeader.classList.toggle("active-view", !isWorkoutView && !isSettingsView);
  goWorkoutBtnHeader.classList.toggle("active-view", isWorkoutView);
  goSettingsBtnHeader.classList.toggle("active-view", isSettingsView);

  if (isWorkoutView) {
    appViewTitle.textContent = "筋トレ";
  } else if (isSettingsView) {
    appViewTitle.textContent = "設定";
  } else {
    appViewTitle.textContent = "予定";
  }
}

function submitLogin() {
  const username = loginNameInput.value.trim();
  const password = loginPasswordInput.value;
  if (!username || !password) {
    alert("ユーザー名とパスワードを入力してください。");
    return;
  }

  const settings = getLoginSettings();
  if (!settings) {
    saveLoginSettings(username, password);
    setAuthenticated(true);
    switchView(isAdminUser(username) ? "workout" : "calendar");
    return;
  }

  if (settings.username !== username || settings.password !== password) {
    alert("ユーザー名かパスワードが違います。");
    loginPasswordInput.value = "";
    selectInputText(loginPasswordInput);
    return;
  }

  setAuthenticated(true);
  switchView(isAdminUser(username) ? "workout" : "calendar");
}

function isRecordView(viewName) {
  return ["input", "workoutInput", "workoutEdit"].includes(viewName);
}

function scrollToPageTop() {
  requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
}

function switchView(viewName) {
  updateAppViewTitle(viewName);
  document.body.classList.toggle("record-mode", isRecordView(viewName));
  Object.entries(views).forEach(([key, view]) => {
    view.classList.toggle("active", key === viewName);
  });

  if (viewName === "input") {
    if (!scheduleEditState) {
      setDefaultDateTimes();
      updateContentTemplateIfEmpty(false);
      saveRecordBtn.textContent = "保存する";
    } else {
      saveRecordBtn.textContent = "編集を保存";
    }
  }

  if (viewName === "workout") {
    workoutDateInput.value = selectedDate;
    workoutMiniYear = Number(selectedDate.slice(0, 4));
    workoutMiniMonth = Number(selectedDate.slice(5, 7)) - 1;
    renderWorkoutMiniCalendar();
    renderWorkoutHistory();
  }

  if (viewName === "workoutInput") {
    workoutDateInput.value = selectedDate;
    updateWorkoutInputTargetDateLabel();
    renderWorkoutBodyPartSelect();
    updateWorkoutInputMode();
    renderWorkoutLogs();
    renderWorkoutState();
  }

  if (viewName === "workoutStats") {
    renderStatsBodyPartSelect();
    drawStats(7);
  }

  if (viewName === "settings") {
    renderCategorySettingsList();
    renderWorkoutSettingsList();
    renderSettingsBodyPartSelect();
    renderWorkoutDefaultSettingsInputs();
    showCalendarSettings();
  }

  if (isRecordView(viewName)) scrollToPageTop();
}

function setSelectedDate(dateKey) {
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  renderCalendar();
  renderScheduleList();
}

function goCalendarToday() {
  setSelectedDate(formatDateKey(new Date()));
}

function goWorkoutToday() {
  setWorkoutDate(formatDateKey(new Date()));
}

function renderCalendar() {
  monthLabel.textContent = `${currentYear}年${currentMonth + 1}月`;
  const schedules = getVisibleSchedules();
  const todayKey = formatDateKey(new Date());

  calendarGrid.innerHTML = getCalendarCells(currentYear, currentMonth).map(dateObj => {
    const dateKey = formatDateKey(dateObj);
    const dayItems = schedules[dateKey] || [];

    const classes = [
      "day-cell",
      dateObj.getMonth() !== currentMonth ? "other-month" : "",
      dateKey === todayKey ? "today" : "",
      dateKey === selectedDate ? "selected" : "",
      dayItems.length ? "has-items" : ""
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateKey}">
        <div class="day-number">${dateObj.getDate()}</div>
      </button>
    `;
  }).join("");

  calendarGrid.querySelectorAll("[data-date]").forEach(button => {
    button.addEventListener("click", () => setSelectedDate(button.dataset.date));
  });
}

function renderMiniCalendar() {
  if (!miniCalendarGrid || !miniMonthLabel) return;
  miniMonthLabel.textContent = `${miniYear}年${miniMonth + 1}月`;
  const schedules = getVisibleSchedules();
  const todayKey = formatDateKey(new Date());

  miniCalendarGrid.innerHTML = getCalendarCells(miniYear, miniMonth).map(dateObj => {
    const dateKey = formatDateKey(dateObj);
    const hasItems = (schedules[dateKey] || []).length > 0;
    const classes = [
      "mini-day-cell",
      dateObj.getMonth() !== miniMonth ? "other-month" : "",
      dateKey === todayKey ? "today" : "",
      dateKey === selectedDate ? "selected" : ""
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateKey}">
        <div class="mini-day-number">${dateObj.getDate()}</div>
        <div class="event-dot-wrap">${hasItems ? '<span class="event-dot" style="background:#2563eb"></span>' : ""}</div>
      </button>
    `;
  }).join("");

  miniCalendarGrid.querySelectorAll("[data-date]").forEach(button => {
    button.addEventListener("click", () => {
      selectedDate = button.dataset.date;
      setDefaultDateTimes();
      renderMiniCalendar();
      renderCalendar();
      renderScheduleList();
    });
  });
}

function renderCategorySelect(selectedId = "") {
  const categories = getCategories();
  if (!categories.length) {
    categorySelect.innerHTML = `<option value="">項目なし</option>`;
    categorySelect.value = "";
    return;
  }
  categorySelect.innerHTML = categories.map(item => (
    `<option value="${escapeAttr(item.id)}">${escapeHtml(item.name)}</option>`
  )).join("");

  if (selectedId && categories.some(item => item.id === selectedId)) {
    categorySelect.value = selectedId;
  }
}

function updateContentTemplateIfEmpty(force = false) {
  const category = getCategoryById(categorySelect.value);
  if (!category) {
    if (force) contentInput.value = "";
    return;
  }
  if (force || !contentInput.value.trim()) {
    contentInput.value = category.template || "";
  }
}

function setDefaultDateTimes() {
  const selected = getDateFromKey(selectedDate);
  const now = new Date();
  selected.setHours(now.getHours(), now.getMinutes(), 0, 0);
  const plusOne = new Date(selected.getTime() + 60 * 60 * 1000);
  startDateTimeInput.value = toDateTimeLocalString(selected);
  endDateTimeInput.value = toDateTimeLocalString(plusOne);
}

function setNowToInput(input) {
  input.value = toDateTimeLocalString(new Date());
  normalizeDateTimeYearInput(input);
}

function normalizeDateTimeYearInput(input) {
  if (!input?.value) return;
  const value = input.value;
  const year = value.split("-")[0] || "";
  if (year.length <= 4) return;
  input.value = `${year.slice(0, 4)}-${value.split("-").slice(1).join("-")}`;
}

function normalizeDateYearInput(input) {
  if (!input?.value) return;
  const value = input.value;
  const year = value.split("-")[0] || "";
  if (year.length <= 4) return;
  input.value = `${year.slice(0, 4)}-${value.split("-").slice(1).join("-")}`;
}

function renderPhotoPreviewList() {
  if (!calendarPhotoPreviewList) return;
  if (!schedulePhotoDrafts.length) {
    calendarPhotoPreviewList.innerHTML = `<p class="photo-empty-text">写真はまだありません。</p>`;
    return;
  }

  calendarPhotoPreviewList.innerHTML = schedulePhotoDrafts.map((photo, index) => `
    <div class="photo-preview-item">
      <img src="${escapeAttr(photo.dataUrl || "")}" alt="${escapeAttr(photo.name || `写真${index + 1}`)}" />
      <button class="close-x-btn" type="button" aria-label="写真を削除" data-remove-photo="${index}">×</button>
    </div>
  `).join("");

  calendarPhotoPreviewList.querySelectorAll("[data-remove-photo]").forEach(button => {
    button.addEventListener("click", () => {
      schedulePhotoDrafts.splice(Number(button.dataset.removePhoto), 1);
      renderPhotoPreviewList();
    });
  });
}

function resetSchedulePhotos(photos = []) {
  schedulePhotoDrafts = deepCopy(Array.isArray(photos) ? photos : []).slice(0, 5);
  schedulePhotoLoadPromise = Promise.resolve();
  if (calendarPhotoInput) calendarPhotoInput.value = "";
  renderPhotoPreviewList();
}

function handleSchedulePhotoInput() {
  const files = [...(calendarPhotoInput.files || [])].slice(0, Math.max(0, 5 - schedulePhotoDrafts.length));
  if (!files.length) {
    calendarPhotoInput.value = "";
    return;
  }

  saveRecordBtn.disabled = true;
  schedulePhotoLoadPromise = Promise.all(files.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, dataUrl: String(reader.result || "") });
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }))).then(results => {
    schedulePhotoDrafts = schedulePhotoDrafts.concat(results.filter(Boolean)).slice(0, 5);
    calendarPhotoInput.value = "";
    renderPhotoPreviewList();
  }).finally(() => {
    saveRecordBtn.disabled = false;
  });
}

function renderSchedulePhotos(photos = []) {
  if (!Array.isArray(photos) || !photos.length) return "";
  return `
    <div class="schedule-photo-grid">
      ${photos.slice(0, 5).map((photo, index) => `
        <img src="${escapeAttr(photo.dataUrl || "")}" alt="${escapeAttr(photo.name || `写真${index + 1}`)}" />
      `).join("")}
    </div>
  `;
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\r\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}

function toCsv(headers, rows) {
  return [
    headers.map(csvEscape).join(","),
    ...rows.map(row => headers.map(header => csvEscape(row[header])).join(","))
  ].join("\n");
}

function parseCsv(text) {
  text = String(text || "").replace(/^\uFEFF/, "");
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];
    if (char === '"') {
      if (inQuotes && next === '"') {
        cell += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i++;
      row.push(cell);
      if (row.some(value => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some(value => value !== "")) rows.push(row);

  const headers = rows.shift() || [];
  return rows.map(values => Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])));
}

function parseJsonField(value, fallback) {
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function parseJsonArray(value) {
  const parsed = parseJsonField(value, []);
  return Array.isArray(parsed) ? parsed : [];
}

function downloadTextFile(fileName, text) {
  const blob = new Blob([`\uFEFF${text}`], { type: "text/csv;charset=utf-8" });
  downloadBlob(fileName, blob);
}

function downloadBlob(fileName, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function sanitizeZipSegment(value, fallback = "データ") {
  const text = String(value || "").trim() || fallback;
  return text
    .replace(/[\\/:*?"<>|\x00-\x1F]/g, "_")
    .replace(/\s+/g, " ")
    .slice(0, 80) || fallback;
}

function getPhotoExtension(photo = {}) {
  const fromName = String(photo.name || "").match(/\.([a-zA-Z0-9]{2,5})$/)?.[1];
  if (fromName) return fromName.toLowerCase();
  const fromData = String(photo.dataUrl || "").match(/^data:image\/([^;,]+)/)?.[1];
  if (!fromData) return "jpg";
  return fromData === "jpeg" ? "jpg" : fromData.toLowerCase();
}

function dataUrlToBytes(dataUrl) {
  const raw = String(dataUrl || "");
  const commaIndex = raw.indexOf(",");
  if (commaIndex < 0) return new Uint8Array();
  const binary = atob(raw.slice(commaIndex + 1));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

const ZIP_CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) {
    crc = ZIP_CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function writeUint16(view, offset, value) {
  view.setUint16(offset, value, true);
}

function writeUint32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true);
}

function getZipDosTime(date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const dosDate = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, date: dosDate };
}

function textToBytes(text) {
  return new TextEncoder().encode(String(text ?? ""));
}

function createZipBlob(entries) {
  const files = entries.map(entry => {
    const nameBytes = textToBytes(entry.path);
    const data = entry.data instanceof Uint8Array ? entry.data : textToBytes(entry.data);
    const { time, date } = getZipDosTime(entry.date || new Date());
    return { ...entry, nameBytes, data, time, date, crc: crc32(data) };
  });

  const chunks = [];
  const centralChunks = [];
  let offset = 0;

  files.forEach(file => {
    const local = new Uint8Array(30 + file.nameBytes.length);
    const view = new DataView(local.buffer);
    writeUint32(view, 0, 0x04034b50);
    writeUint16(view, 4, 20);
    writeUint16(view, 6, 0x0800);
    writeUint16(view, 8, 0);
    writeUint16(view, 10, file.time);
    writeUint16(view, 12, file.date);
    writeUint32(view, 14, file.crc);
    writeUint32(view, 18, file.data.length);
    writeUint32(view, 22, file.data.length);
    writeUint16(view, 26, file.nameBytes.length);
    writeUint16(view, 28, 0);
    local.set(file.nameBytes, 30);
    chunks.push(local, file.data);

    const central = new Uint8Array(46 + file.nameBytes.length);
    const centralView = new DataView(central.buffer);
    writeUint32(centralView, 0, 0x02014b50);
    writeUint16(centralView, 4, 20);
    writeUint16(centralView, 6, 20);
    writeUint16(centralView, 8, 0x0800);
    writeUint16(centralView, 10, 0);
    writeUint16(centralView, 12, file.time);
    writeUint16(centralView, 14, file.date);
    writeUint32(centralView, 16, file.crc);
    writeUint32(centralView, 20, file.data.length);
    writeUint32(centralView, 24, file.data.length);
    writeUint16(centralView, 28, file.nameBytes.length);
    writeUint16(centralView, 30, 0);
    writeUint16(centralView, 32, 0);
    writeUint16(centralView, 34, 0);
    writeUint16(centralView, 36, 0);
    writeUint32(centralView, 38, 0);
    writeUint32(centralView, 42, offset);
    central.set(file.nameBytes, 46);
    centralChunks.push(central);

    offset += local.length + file.data.length;
  });

  const centralOffset = offset;
  const centralSize = centralChunks.reduce((sum, chunk) => sum + chunk.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  writeUint32(endView, 0, 0x06054b50);
  writeUint16(endView, 4, 0);
  writeUint16(endView, 6, 0);
  writeUint16(endView, 8, files.length);
  writeUint16(endView, 10, files.length);
  writeUint32(endView, 12, centralSize);
  writeUint32(endView, 16, centralOffset);
  writeUint16(endView, 20, 0);

  return new Blob([...chunks, ...centralChunks, end], { type: "application/zip" });
}

function exportCalendarZip() {
  const schedules = getSchedules();
  const entries = [];
  const folderCounts = new Map();

  Object.entries(schedules)
    .sort(([a], [b]) => a.localeCompare(b))
    .forEach(([dateKey, items]) => {
      (items || [])
        .slice()
        .sort((a, b) => String(a.start || "").localeCompare(String(b.start || "")) || (a.createdAt || 0) - (b.createdAt || 0))
        .forEach((item, index) => {
          const baseFolder = `記録カレンダー/${sanitizeZipSegment(dateKey, "日付")}/${sanitizeZipSegment(item.title || `記録${index + 1}`, "無題")}`;
          const usedCount = folderCounts.get(baseFolder) || 0;
          folderCounts.set(baseFolder, usedCount + 1);
          const folder = usedCount ? `${baseFolder}_${usedCount + 1}` : baseFolder;
          (item.photos || []).slice(0, 5).forEach((photo, photoIndex) => {
            const bytes = dataUrlToBytes(photo.dataUrl);
            if (!bytes.length) return;
            const ext = getPhotoExtension(photo);
            const name = sanitizeZipSegment(photo.name ? photo.name.replace(/\.[^.]+$/, "") : `写真${photoIndex + 1}`, `写真${photoIndex + 1}`);
            entries.push({
              path: `${folder}/${name}.${ext}`,
              data: bytes
            });
          });
        });
    });

  if (!entries.length) {
    alert("ZIPに出力できる写真がありません。");
    return;
  }

  downloadBlob("記録カレンダー.zip", createZipBlob(entries));
}

function getCsvDateStamp() {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
}

function normalizeCsvDate(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const compact = raw.replace(/\D/g, "");
  if (compact.length >= 8) {
    return `${compact.slice(0, 4)}-${compact.slice(4, 6)}-${compact.slice(6, 8)}`;
  }
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? "" : formatDateKey(date);
}

function normalizeCsvTime(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const parts = raw.split(":").map(part => part.replace(/\D/g, ""));
  const hour = Math.min(23, Math.max(0, Number(parts[0] || 0)));
  const minute = Math.min(59, Math.max(0, Number(parts[1] || 0)));
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function splitDateTimeValue(value, fallbackDate = "") {
  const raw = String(value || "");
  return {
    date: raw.slice(0, 10) || fallbackDate,
    time: raw.includes("T") ? raw.slice(11, 16) : ""
  };
}

function combineCsvDateTime(dateKey, timeValue) {
  const time = normalizeCsvTime(timeValue);
  return `${dateKey}T${time || "00:00"}`;
}

function parseCsvDuration(value) {
  const raw = String(value || "").trim();
  if (!raw) return 0;
  if (raw.includes(":")) {
    const parts = raw.split(":").map(Number);
    if (parts.length >= 3) {
      const [h, m, s] = parts;
      return Math.max(0, (Number(h || 0) * 3600) + (Number(m || 0) * 60) + Number(s || 0));
    }
    const [m, s] = parts;
    return Math.max(0, (Number(m || 0) * 60) + Number(s || 0));
  }
  return Math.max(0, Number(raw || 0));
}

function parseCsvAssist(value) {
  const raw = String(value || "").trim().toLowerCase();
  return ["あり", "有", "true", "1", "yes", "y"].includes(raw);
}

function getOrCreateCategoryByName(name, categories) {
  const safeName = name || "未分類";
  const existing = categories.find(category => category.name === safeName);
  if (existing) return existing;
  const category = { id: createId(), name: safeName, color: "#2563eb", template: "" };
  categories.push(category);
  return category;
}

function exportCalendarCsv() {
  const schedules = getSchedules();
  const headers = ["日付", "開始時間", "終了時間", "項目", "タイトル", "内容"];
  const rows = Object.entries(schedules)
    .flatMap(([dateKey, items]) => (items || []).map(item => {
      const start = splitDateTimeValue(item.start, dateKey);
      const end = splitDateTimeValue(item.end, dateKey);
      const category = getCategoryById(item.categoryId);
      return {
        "日付": start.date || dateKey,
        "開始時間": start.time,
        "終了時間": end.time,
        "項目": category?.name || item.categoryName || "未分類",
        "タイトル": item.title || "",
        "内容": item.content || ""
      };
    }))
    .sort((a, b) => `${a["日付"]} ${a["開始時間"]}`.localeCompare(`${b["日付"]} ${b["開始時間"]}`));
  downloadTextFile(`calendar-${getCsvDateStamp()}.csv`, toCsv(headers, rows));
}

function exportWorkoutCsv() {
  const sessions = getWorkoutSessions();
  const items = Object.entries(sessions)
    .flatMap(([dateKey, dayItems]) => (dayItems || []).map(item => ({ dateKey, ...item })))
    .sort((a, b) => `${a.dateKey} ${a.createdAt || ""}`.localeCompare(`${b.dateKey} ${b.createdAt || ""}`));
  const maxSets = Math.max(1, ...items.map(item => (item.setLogs || []).length));
  const headers = ["日付", "部位", "メニュー"];
  for (let setNo = 1; setNo <= maxSets; setNo++) {
    headers.push(
      `重量(${setNo}セット)`,
      `回数(${setNo}セット)`,
      `RM(${setNo}セット)`,
      `補助有無(${setNo}セット)`,
      `メモ(${setNo}セット)`,
      `実施時間(${setNo}セット)`,
      `休憩時間(${setNo}セット)`
    );
  }
  headers.push("有酸素時間", "距離/段数", "距離単位", "スピード/ペース", "スピード単位", "カロリー", "平均心拍数", "最大心拍数", "有酸素メモ");
  const rows = items.map(item => {
    const cardio = item.cardioData || {};
    const config = getCardioMetricConfig(item.exercise);
    const row = {
      "日付": item.dateKey,
      "部位": item.bodyPart || "",
      "メニュー": item.exercise || ""
    };
    for (let index = 0; index < maxSets; index++) {
      const setNo = index + 1;
      const log = (item.setLogs || [])[index] || {};
      row[`重量(${setNo}セット)`] = log.weight || "";
      row[`回数(${setNo}セット)`] = log.reps || "";
      row[`RM(${setNo}セット)`] = log.rm || "";
      row[`補助有無(${setNo}セット)`] = log.assist ? "あり" : "";
      row[`メモ(${setNo}セット)`] = log.memo || "";
      row[`実施時間(${setNo}セット)`] = log.workSec != null && log.workSec !== "" ? formatSeconds(log.workSec) : "";
      row[`休憩時間(${setNo}セット)`] = log.restSec != null && log.restSec !== "" ? formatSeconds(log.restSec) : "";
    }
    row["有酸素時間"] = isCardioSession(item) ? formatHms(cardio.durationSec || 0) : "";
    row["距離/段数"] = isCardioSession(item) ? (cardio.distance || "") : "";
    row["距離単位"] = isCardioSession(item) ? (cardio.distanceUnit || config.distanceUnit) : "";
    row["スピード/ペース"] = isCardioSession(item) ? (cardio.speed || "") : "";
    row["スピード単位"] = isCardioSession(item) ? (cardio.speedUnit || config.speedUnit) : "";
    row["カロリー"] = isCardioSession(item) ? (cardio.calories || "") : "";
    row["平均心拍数"] = isCardioSession(item) ? (cardio.avgHeartRate || "") : "";
    row["最大心拍数"] = isCardioSession(item) ? (cardio.maxHeartRate || "") : "";
    row["有酸素メモ"] = isCardioSession(item) ? (cardio.memo || item.memo || "") : "";
    return row;
  });
  downloadTextFile(`workout-${getCsvDateStamp()}.csv`, toCsv(headers, rows));
}

function importCalendarCsv(text) {
  const rows = parseCsv(text);
  const schedules = getSchedules();
  const categories = getCategories();

  rows.forEach(row => {
    const dateKey = normalizeCsvDate(row["日付"] || row.dateKey || (row.start ? row.start.slice(0, 10) : ""));
    if (!dateKey) return;
    const category = row["項目"]
      ? getOrCreateCategoryByName(row["項目"], categories)
      : (getCategoryById(row.categoryId) || getOrCreateCategoryByName(row.categoryName || "未分類", categories));

    const item = {
      id: row.id || createId(),
      categoryId: category.id,
      categoryName: category.name,
      color: category.color || "#2563eb",
      start: row.start || (normalizeCsvTime(row["開始時間"]) ? combineCsvDateTime(dateKey, row["開始時間"]) : `${dateKey}T00:00`),
      end: row.end || (normalizeCsvTime(row["終了時間"]) ? combineCsvDateTime(dateKey, row["終了時間"]) : ""),
      title: row["タイトル"] || row.title || "無題",
      content: row["内容"] || row.content || "",
      ownerUsername: getCurrentUsername(),
      isShared: false,
      createdAt: Number(row.createdAt || Date.now()),
      photos: parseJsonArray(row.photos).slice(0, 5)
    };
    if (!schedules[dateKey]) schedules[dateKey] = [];
    schedules[dateKey] = schedules[dateKey].filter(existing => (
      existing.id !== item.id &&
      !(existing.start === item.start && existing.title === item.title && existing.content === item.content)
    )).concat(item);
  });

  saveCategories(categories);
  saveSchedules(schedules);
  renderCategorySelect(categorySelect.value);
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function importWorkoutCsv(text) {
  const rows = parseCsv(text);
  const sessions = getWorkoutSessions();
  const masters = getWorkoutMasters();

  rows.forEach(row => {
    const dateKey = normalizeCsvDate(row["日付"] || row.dateKey);
    if (!dateKey) return;
    const bodyPart = row["部位"] || row.bodyPart || "未分類";
    const exercise = row["メニュー"] || row.exercise || "メニュー未設定";
    if (!masters[bodyPart]) masters[bodyPart] = [];
    if (!masters[bodyPart].includes(exercise)) masters[bodyPart].push(exercise);
    const setLogs = row.setLogs ? parseJsonArray(row.setLogs) : [];
    const isCardioRow = bodyPart === CARDIO_BODY_PART ||
      !!row["有酸素時間"] ||
      !!row["距離/段数"] ||
      !!row["スピード/ペース"] ||
      !!row["カロリー"] ||
      !!row["平均心拍数"] ||
      !!row["最大心拍数"] ||
      !!row["有酸素メモ"];
    if (isCardioRow) {
      if (!masters[CARDIO_BODY_PART]) masters[CARDIO_BODY_PART] = [];
      if (!masters[CARDIO_BODY_PART].includes(exercise)) masters[CARDIO_BODY_PART].push(exercise);
    }
    if (!setLogs.length) {
      for (let setNo = 1; ; setNo++) {
        const weight = row[`重量(${setNo}セット)`];
        const reps = row[`回数(${setNo}セット)`];
        const rm = row[`RM(${setNo}セット)`];
        const memo = row[`メモ(${setNo}セット)`];
        const workSec = row[`実施時間(${setNo}セット)`];
        const restSec = row[`休憩時間(${setNo}セット)`];
        const assist = row[`補助有無(${setNo}セット)`];
        if ([weight, reps, rm, memo, workSec, restSec, assist].every(value => value == null || value === "")) break;
        setLogs.push({
          setNo,
          weight: weight || "",
          reps: reps || "",
          rm: rm || calcEstimated1RM(weight, reps),
          assist: parseCsvAssist(assist),
          memo: memo || "",
          workSec: parseCsvDuration(workSec),
          restSec: parseCsvDuration(restSec)
        });
      }
    }

    const config = getCardioMetricConfig(exercise);
    const item = isCardioRow ? {
      id: row.id || createId(),
      type: "cardio",
      bodyPart: CARDIO_BODY_PART,
      exercise,
      targetSets: 0,
      memo: row["有酸素メモ"] || row.memo || "",
      createdAt: Number(row.createdAt || Date.now()),
      cardioData: {
        durationSec: parseCsvDuration(row["有酸素時間"] || row.cardioDurationSec),
        distance: normalizeCardioNumber(row["距離/段数"] || row.cardioDistance, (row["距離単位"] || config.distanceUnit) === "段" ? 0 : 1),
        distanceUnit: row["距離単位"] || config.distanceUnit,
        speed: normalizeCardioNumber(row["スピード/ペース"] || row.cardioSpeed, (row["スピード単位"] || config.speedUnit) === "段/分" ? 0 : 1),
        speedUnit: row["スピード単位"] || config.speedUnit,
        calories: normalizeCardioNumber(row["カロリー"] || row.calories, 0),
        avgHeartRate: normalizeCardioNumber(row["平均心拍数"] || row.avgHeartRate, 0),
        maxHeartRate: normalizeCardioNumber(row["最大心拍数"] || row.maxHeartRate, 0),
        memo: row["有酸素メモ"] || row.memo || ""
      },
      setLogs: []
    } : {
      id: row.id || createId(),
      bodyPart,
      exercise,
      targetSets: Number(row.targetSets || setLogs.length || 0),
      memo: row.memo || "",
      createdAt: Number(row.createdAt || Date.now()),
      setLogs
    };
    if (!sessions[dateKey]) sessions[dateKey] = [];
    sessions[dateKey] = sessions[dateKey].filter(existing => (
      existing.id !== item.id &&
      !(existing.bodyPart === item.bodyPart && existing.exercise === item.exercise && JSON.stringify(existing.setLogs || []) === JSON.stringify(item.setLogs || []))
    )).concat(item);
  });

  saveWorkoutMasters(masters);
  saveWorkoutSessions(sessions);
  renderWorkoutBodyPartSelect(bodyPartSelect.value);
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
}

function exportSelectedCsv() {
  if (dataTransferTypeSelect.value === "workout") {
    exportWorkoutCsv();
  } else {
    exportCalendarCsv();
  }
}

function importSelectedCsv(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    const text = String(reader.result || "");
    if (dataTransferTypeSelect.value === "workout") {
      importWorkoutCsv(text);
    } else {
      importCalendarCsv(text);
    }
    importCsvInput.value = "";
    alert("CSVをインポートしました。");
  };
  reader.readAsText(file);
}

function openScheduleCreate() {
  if (isAdminCalendarLocked()) {
    alert("adminiではカレンダー予定は表示できません。");
    return;
  }
  scheduleEditState = null;
  renderCategorySelect();
  titleInput.value = "";
  contentInput.value = "";
  resetSchedulePhotos();
  if (calendarShareInput) calendarShareInput.checked = false;
  setDefaultDateTimes();
  saveRecordBtn.textContent = "保存する";
  updateContentTemplateIfEmpty(false);
  switchView("input");
}

function openScheduleEdit(dateKey, id) {
  if (isAdminCalendarLocked()) {
    alert("adminiではカレンダー予定は表示できません。");
    return;
  }
  const schedules = getSchedules();
  const item = (schedules[dateKey] || []).find(schedule => schedule.id === id);
  if (!item || !canManageScheduleItem(item)) return;

  scheduleEditState = { dateKey, id };
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  renderCalendar();
  renderCategorySelect(item.categoryId);
  titleInput.value = item.title || "";
  contentInput.value = item.content || "";
  resetSchedulePhotos(item.photos || []);
  if (calendarShareInput) calendarShareInput.checked = !!item.isShared;
  startDateTimeInput.value = item.start || `${dateKey}T00:00`;
  endDateTimeInput.value = item.end || `${dateKey}T00:00`;
  normalizeDateTimeYearInput(startDateTimeInput);
  normalizeDateTimeYearInput(endDateTimeInput);
  saveRecordBtn.textContent = "編集を保存";
  switchView("input");
}

async function addSchedule() {
  if (isAdminCalendarLocked()) {
    alert("adminiではカレンダー予定を保存できません。");
    return;
  }
  await schedulePhotoLoadPromise;
  const category = getCategoryById(categorySelect.value) || getCategories()[0];
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const start = startDateTimeInput.value;
  const end = endDateTimeInput.value;
  const dateKey = start ? start.slice(0, 10) : selectedDate;
  const currentUsername = getCurrentUsername();
  const isShared = !!calendarShareInput?.checked;

  if (!title && !content) {
    alert("タイトルか内容を入力してください。");
    return;
  }

  const schedules = getSchedules();
  if (!schedules[dateKey]) schedules[dateKey] = [];

  const nextItem = {
    id: scheduleEditState?.id || createId(),
    categoryId: category?.id || "",
    categoryName: category?.name || "未分類",
    color: category?.color || "#2563eb",
    start,
    end,
    title: title || "無題",
    content,
    ownerUsername: currentUsername,
    isShared,
    photos: deepCopy(schedulePhotoDrafts).slice(0, 5),
    createdAt: Date.now()
  };

  if (scheduleEditState) {
    const oldDateKey = scheduleEditState.dateKey;
    const original = (schedules[oldDateKey] || []).find(item => item.id === scheduleEditState.id);
    nextItem.createdAt = original?.createdAt || nextItem.createdAt;
    nextItem.ownerUsername = getScheduleOwnerUsername(original, currentUsername);
    schedules[oldDateKey] = (schedules[oldDateKey] || []).filter(item => item.id !== scheduleEditState.id);
    if (!schedules[oldDateKey].length) delete schedules[oldDateKey];
    if (!schedules[dateKey]) schedules[dateKey] = [];
    schedules[dateKey].push(nextItem);
    scheduleEditState = null;
  } else {
    schedules[dateKey].push(nextItem);
  }

  saveSchedules(schedules);
  syncSharedScheduleItem(dateKey, nextItem);
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  titleInput.value = "";
  contentInput.value = "";
  resetSchedulePhotos();
  if (calendarShareInput) calendarShareInput.checked = false;
  saveRecordBtn.textContent = "保存する";
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();
  renderPhotoPreviewList();
  switchView("calendar");
}

function renderScheduleList() {
  const schedules = getVisibleSchedules();
  const items = (schedules[selectedDate] || []).slice().sort((a, b) => {
    return String(a.start || "").localeCompare(String(b.start || "")) || (a.createdAt || 0) - (b.createdAt || 0);
  });

  selectedDateLabel.textContent = formatDisplayDate(selectedDate);
  itemCount.textContent = `${items.length}件`;
  if (!items.length) {
    scheduleList.innerHTML = `
      <div class="timeline-empty">
        <div class="timeline-empty-date">${escapeHtml(formatDisplayDate(selectedDate))}</div>
        <p class="empty-text">${isAdminUser() ? "共有予定はまだありません。" : "この日の予定はまだありません。"}</p>
      </div>
    `;
    return;
  }

  scheduleList.innerHTML = items.map(item => {
    const category = getCategoryById(item.categoryId);
    const color = item.color || category?.color || "#2563eb";
    const categoryName = item.categoryName || category?.name || "未分類";
    const timeText = formatScheduleSummaryTime(item.start, item.end);
    const fullTimeText = formatDateTimeRange(item.start, item.end);
    const canManage = canManageScheduleItem(item);
    const ownerUsername = getScheduleOwnerUsername(item);
    const sharedChip = item.isShared
      ? `<span class="schedule-share-chip">${escapeHtml(ownerUsername && ownerUsername !== getCurrentUsername() ? `共有・${ownerUsername}` : "共有")}</span>`
      : "";
    return `
      <details class="schedule-item schedule-detail-item" style="--item-color:${escapeAttr(color)}">
        <summary class="schedule-summary-row">
          <span class="schedule-time-chip">${escapeHtml(timeText)}</span>
          <span class="schedule-summary-title">${escapeHtml(item.title || "無題")}</span>
        </summary>
        <div class="schedule-body">
          <div class="schedule-top">
            <div class="schedule-meta-row">
              <div class="schedule-category" style="background:${escapeAttr(color)}">${escapeHtml(categoryName)}</div>
              ${sharedChip}
            </div>
            <div class="schedule-detail-time">${escapeHtml(fullTimeText)}</div>
          </div>
          <div class="schedule-content">${escapeHtml(item.content || "")}</div>
          ${renderSchedulePhotos(item.photos || [])}
        </div>
        ${canManage ? `
          <div class="schedule-actions">
            <button class="sub-btn" type="button" data-edit-schedule="${escapeAttr(item.id)}">編集</button>
            <button class="close-x-btn inline-x-btn" type="button" data-delete-schedule="${escapeAttr(item.id)}" aria-label="予定を削除">×</button>
          </div>
        ` : ""}
      </details>
    `;
  }).join("");

  scheduleList.querySelectorAll("[data-delete-schedule]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      deleteSchedule(selectedDate, button.dataset.deleteSchedule);
    });
  });

  scheduleList.querySelectorAll("[data-edit-schedule]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      openScheduleEdit(selectedDate, button.dataset.editSchedule);
    });
  });
}

function deleteSchedule(dateKey, id) {
  if (isAdminCalendarLocked()) return;
  const schedules = getSchedules();
  if (!schedules[dateKey]) return;
  const deletedItem = (schedules[dateKey] || []).find(item => item.id === id);
  if (deletedItem && !canManageScheduleItem(deletedItem)) return;
  schedules[dateKey] = schedules[dateKey].filter(item => item.id !== id);
  if (schedules[dateKey].length === 0) delete schedules[dateKey];
  saveSchedules(schedules);
  if (deletedItem) {
    syncSharedScheduleItem(dateKey, {
      id: deletedItem.id,
      ownerUsername: getScheduleOwnerUsername(deletedItem),
      isShared: false
    });
  }
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();
}
function addCategory() {
  const name = newCategoryInput.value.trim();
  if (!name) {
    alert("項目名を入力してください。");
    return;
  }

  const categories = getCategories();
  categories.push({ id: createId(), name, color: "#2563eb", template: "" });
  saveCategories(categories);
  newCategoryInput.value = "";
  renderCategorySelect();
  renderCategorySettingsList();
}

function moveCategory(id, offset) {
  const categories = getCategories();
  const index = categories.findIndex(item => item.id === id);
  const nextIndex = index + offset;
  if (index < 0 || nextIndex < 0 || nextIndex >= categories.length) return;
  const [item] = categories.splice(index, 1);
  categories.splice(nextIndex, 0, item);
  saveCategories(categories);
  renderCategorySelect(id);
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function renderCategorySettingsList() {
  const categories = getCategories();
  if (!categories.length) {
    categorySettingsList.innerHTML = `<p class="empty-text">項目がありません。</p>`;
    return;
  }

  categorySettingsList.innerHTML = categories.map(item => `
    <article class="setting-item" data-category-id="${escapeAttr(item.id)}">
      <div class="setting-item-top">
        <div class="setting-item-title">${escapeHtml(item.name)}</div>
        <div class="setting-item-actions">
          <button class="order-btn" type="button" data-move-category="-1" aria-label="上へ移動">↑</button>
          <button class="order-btn" type="button" data-move-category="1" aria-label="下へ移動">↓</button>
          <input class="color-input" type="color" data-category-color value="${escapeAttr(item.color)}" aria-label="色" />
          <button class="close-x-btn inline-x-btn" type="button" data-delete-category aria-label="項目を削除">×</button>
        </div>
      </div>
      <div class="form-group">
        <label>項目名</label>
        <input type="text" data-category-name value="${escapeAttr(item.name)}" />
      </div>
      <div class="form-group">
        <label>テンプレート</label>
        <textarea rows="5" data-category-template>${escapeHtml(item.template || "")}</textarea>
      </div>
      <div class="small-btn-row">
        <button class="save-small-btn" type="button" data-save-category>保存</button>
      </div>
    </article>
  `).join("");

  categorySettingsList.querySelectorAll("[data-category-id]").forEach(card => {
    const id = card.dataset.categoryId;
    card.querySelector("[data-save-category]").addEventListener("click", () => saveCategorySetting(card, id));
    card.querySelector("[data-delete-category]").addEventListener("click", () => deleteCategory(id));
    card.querySelectorAll("[data-move-category]").forEach(button => {
      button.addEventListener("click", () => moveCategory(id, Number(button.dataset.moveCategory)));
    });
  });
}

function saveCategorySetting(card, id) {
  const categories = getCategories();
  const target = categories.find(item => item.id === id);
  if (!target) return;

  const name = card.querySelector("[data-category-name]").value.trim();
  if (!name) {
    alert("項目名を入力してください。");
    return;
  }

  target.name = name;
  target.color = card.querySelector("[data-category-color]").value || "#2563eb";
  target.template = card.querySelector("[data-category-template]").value;
  saveCategories(categories);
  renderCategorySelect(id);
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function deleteCategory(id) {
  const categories = getCategories();
  if (categories.length <= 1) {
    alert("項目は1つ以上必要です。");
    return;
  }
  saveCategories(categories.filter(item => item.id !== id));
  renderCategorySelect();
  renderCategorySettingsList();
  renderCalendar();
  renderScheduleList();
}

function setWorkoutDate(dateKey) {
  if (!dateKey) return;
  selectedDate = dateKey;
  workoutDateInput.value = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  workoutMiniYear = currentYear;
  workoutMiniMonth = currentMonth;
  updateWorkoutInputTargetDateLabel();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
  renderCalendar();
  renderScheduleList();
}

function updateWorkoutInputTargetDateLabel() {
  const dateKey = workoutDateInput.value || selectedDate;
  if (workoutInputTargetDateLabel) workoutInputTargetDateLabel.textContent = formatDisplayDate(dateKey);
  if (workoutDatePickerNative) workoutDatePickerNative.value = dateKey;
}

function renderWorkoutMiniCalendar() {
  workoutMiniMonthLabel.textContent = `${workoutMiniYear}年${workoutMiniMonth + 1}月`;
  const sessions = getWorkoutSessions();
  const todayKey = formatDateKey(new Date());

  workoutMiniCalendarGrid.innerHTML = getCalendarCells(workoutMiniYear, workoutMiniMonth).map(dateObj => {
    const dateKey = formatDateKey(dateObj);
    const count = (sessions[dateKey] || []).length;
    const classes = [
      "day-cell",
      dateObj.getMonth() !== workoutMiniMonth ? "other-month" : "",
      dateKey === todayKey ? "today" : "",
      dateKey === selectedDate ? "selected" : "",
      count ? "has-workout" : ""
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateKey}">
        <div class="day-number">${dateObj.getDate()}</div>
      </button>
    `;
  }).join("");

  workoutMiniCalendarGrid.querySelectorAll("[data-date]").forEach(button => {
    button.addEventListener("click", () => setWorkoutDate(button.dataset.date));
  });
}

function renderWorkoutBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyParts = Object.keys(masters);
  bodyPartSelect.innerHTML = bodyParts.map(part => (
    `<option value="${escapeAttr(part)}">${escapeHtml(part)}</option>`
  )).join("");
  if (selected && bodyParts.includes(selected)) bodyPartSelect.value = selected;
  renderWorkoutExerciseSelect();
}

function renderWorkoutExerciseSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyPart = bodyPartSelect.value || Object.keys(masters)[0];
  const exercises = masters[bodyPart] || [];
  exerciseSelect.innerHTML = exercises.map(ex => (
    `<option value="${escapeAttr(ex)}">${escapeHtml(ex)}</option>`
  )).join("");
  if (selected && exercises.includes(selected)) exerciseSelect.value = selected;
}

function isCardioBodyPart(bodyPart = bodyPartSelect?.value) {
  return bodyPart === CARDIO_BODY_PART;
}

function isCardioSession(item = {}) {
  return item.type === "cardio" || item.bodyPart === CARDIO_BODY_PART || !!item.cardioData;
}

function getCardioMetricConfig(exercise = "") {
  if (exercise === "ステアクライマー") {
    return {
      distanceLabel: "段数",
      distanceUnit: "段",
      speedLabel: "ペース",
      speedUnit: "段/分",
      distanceStep: "1",
      speedStep: "1",
      distancePlaceholder: "500",
      speedPlaceholder: "60"
    };
  }

  return {
    distanceLabel: "距離",
    distanceUnit: "km",
    speedLabel: "スピード",
    speedUnit: "km/h",
    distanceStep: "0.1",
    speedStep: "0.1",
    distancePlaceholder: "3.0",
    speedPlaceholder: "8.5"
  };
}

function normalizeCardioNumber(value, decimals = 1) {
  if (value == null || value === "") return "";
  const number = Number(value);
  if (!Number.isFinite(number) || number < 0) return "";
  return decimals === 0 ? String(Math.floor(number)) : number.toFixed(decimals);
}

function getCardioFormData(scope = cardioFormsWrap) {
  const form = scope?.querySelector("[data-cardio-form]");
  if (!form) {
    const config = getCardioMetricConfig(exerciseSelect.value);
    return {
      durationSec: 0,
      distance: "",
      distanceUnit: config.distanceUnit,
      speed: "",
      speedUnit: config.speedUnit,
      calories: "",
      avgHeartRate: "",
      maxHeartRate: "",
      memo: ""
    };
  }

  const config = getCardioMetricConfig(exerciseSelect.value);
  return {
    durationSec: parseDurationInputValue(form.querySelector("[data-cardio-duration]")?.value),
    distance: normalizeCardioNumber(form.querySelector("[data-cardio-distance]")?.value, config.distanceStep === "1" ? 0 : 1),
    distanceUnit: config.distanceUnit,
    speed: normalizeCardioNumber(form.querySelector("[data-cardio-speed]")?.value, config.speedStep === "1" ? 0 : 1),
    speedUnit: config.speedUnit,
    calories: normalizeCardioNumber(form.querySelector("[data-cardio-calories]")?.value, 0),
    avgHeartRate: normalizeCardioNumber(form.querySelector("[data-cardio-avg-hr]")?.value, 0),
    maxHeartRate: normalizeCardioNumber(form.querySelector("[data-cardio-max-hr]")?.value, 0),
    memo: form.querySelector("[data-cardio-memo]")?.value || ""
  };
}

function buildCardioForm(preset = null) {
  if (!cardioFormsWrap) return;
  const exercise = exerciseSelect.value;
  const config = getCardioMetricConfig(exercise);
  const current = preset || getCardioFormData();
  const durationSec = Math.max(0, Math.floor(Number(current.durationSec || 0)));
  const distanceValue = normalizeCardioNumber(current.distance, config.distanceStep === "1" ? 0 : 1);
  const speedValue = normalizeCardioNumber(current.speed, config.speedStep === "1" ? 0 : 1);
  const caloriesValue = normalizeCardioNumber(current.calories, 0);

  cardioFormsWrap.innerHTML = `
    <article class="set-form-item cardio-form-card" data-cardio-form>
      <div class="cardio-form-head">
        <div class="set-now-title">有酸素記録</div>
        <div class="cardio-form-sub">${escapeHtml(exercise || CARDIO_BODY_PART)}</div>
      </div>
      <div class="cardio-grid">
        <label class="cardio-field cardio-duration-field">
          <span>時間</span>
          <input class="metric-number-input duration-direct-input" type="text" inputmode="numeric" data-cardio-duration value="${escapeAttr(formatHms(durationSec))}" placeholder="00:00:00" />
        </label>
        <label class="cardio-field">
          <span>${escapeHtml(config.distanceLabel)}</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="decimal" min="0" max="999" step="${escapeAttr(config.distanceStep)}" data-cardio-distance value="${escapeAttr(distanceValue)}" placeholder="${escapeAttr(config.distancePlaceholder)}" data-numeric-assist data-numeric-label="${escapeAttr(config.distanceLabel)}" data-numeric-step="${escapeAttr(config.distanceStep)}" data-numeric-min="0" data-numeric-max="999" />
            <em>${escapeHtml(config.distanceUnit)}</em>
          </div>
        </label>
        <label class="cardio-field">
          <span>${escapeHtml(config.speedLabel)}</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="decimal" min="0" max="300" step="${escapeAttr(config.speedStep)}" data-cardio-speed value="${escapeAttr(speedValue)}" placeholder="${escapeAttr(config.speedPlaceholder)}" data-numeric-assist data-numeric-label="${escapeAttr(config.speedLabel)}" data-numeric-step="${escapeAttr(config.speedStep)}" data-numeric-min="0" data-numeric-max="300" />
            <em>${escapeHtml(config.speedUnit)}</em>
          </div>
        </label>
        <label class="cardio-field">
          <span>カロリー</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="5000" step="1" data-cardio-calories value="${escapeAttr(caloriesValue)}" placeholder="250" data-numeric-assist data-numeric-label="カロリー" data-numeric-step="1" data-numeric-min="0" data-numeric-max="5000" />
            <em>kcal</em>
          </div>
        </label>
        <label class="cardio-field">
          <span>平均心拍</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="240" step="1" data-cardio-avg-hr value="${escapeAttr(normalizeCardioNumber(current.avgHeartRate, 0))}" placeholder="130" data-numeric-assist data-numeric-label="平均心拍" data-numeric-step="1" data-numeric-min="0" data-numeric-max="240" />
            <em>bpm</em>
          </div>
        </label>
        <label class="cardio-field">
          <span>最大心拍</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="240" step="1" data-cardio-max-hr value="${escapeAttr(normalizeCardioNumber(current.maxHeartRate, 0))}" placeholder="160" data-numeric-assist data-numeric-label="最大心拍" data-numeric-step="1" data-numeric-min="0" data-numeric-max="240" />
            <em>bpm</em>
          </div>
        </label>
      </div>
      <label class="cardio-field cardio-memo-field">
        <span>メモ</span>
        <textarea rows="3" data-cardio-memo placeholder="体感や負荷設定など">${escapeHtml(current.memo || "")}</textarea>
      </label>
      <button class="primary-btn cardio-save-btn" type="button" data-save-cardio>保存</button>
    </article>
  `;

  const form = cardioFormsWrap.querySelector("[data-cardio-form]");
  bindDurationDirectInput(form.querySelector("[data-cardio-duration]"), true);
  form.querySelector("[data-save-cardio]").addEventListener("click", () => saveWorkoutSession(false));
}

function updateWorkoutInputMode(presetCardioData = null) {
  const cardio = isCardioBodyPart();
  setFormsWrap?.classList.toggle("hidden", cardio);
  cardioFormsWrap?.classList.toggle("hidden", !cardio);
  workoutTimerActionPanel?.classList.toggle("hidden", cardio);
  workoutDetailSection?.classList.toggle("hidden", cardio);
  loadPreviousWorkoutBtn.textContent = cardio ? "前回有酸素" : "前回記録";

  if (cardio) {
    buildCardioForm(presetCardioData);
  } else {
    buildSetForms();
    renderWorkoutLogs();
    renderWorkoutState();
  }
}

function applyWorkoutDefaultsToInputs() {
  const settings = getWorkoutUiSettings();
  setsInput.value = String(settings.defaultSets);
  restSecInput.value = String(settings.defaultRestSec);
}

function renderWorkoutDefaultSettingsInputs() {
  const settings = getWorkoutUiSettings();
  defaultSetsSettingInput.value = String(settings.defaultSets);
  defaultRestSecSettingInput.value = String(settings.defaultRestSec);
}

function saveWorkoutDefaultSettings() {
  const defaultSets = Number(defaultSetsSettingInput.value || 0);
  const defaultRestSec = Number(defaultRestSecSettingInput.value || 0);
  if (!defaultSets || defaultSets < 1) {
    alert("初期セット数は1以上で入力してください。");
    return;
  }
  if (defaultRestSec < 0) {
    alert("休憩時間は0以上で入力してください。");
    return;
  }
  saveWorkoutUiSettings({ defaultSets, defaultRestSec });
  applyWorkoutDefaultsToInputs();
  resetWorkoutState();
  buildSetForms();
  renderWorkoutDefaultSettingsInputs();
}

function getTargetSets() {
  return Math.max(1, Number(setsInput.value || 1));
}

function getActiveWorkoutSetNo() {
  return Math.min(Math.max(1, Number(workoutState.currentSet || 1)), getTargetSets());
}

function createEmptyWorkoutDraft() {
  return { weight: "", reps: "", memo: "", assist: false };
}

function ensureWorkoutDraftsSize() {
  const targetSets = getTargetSets();
  for (let i = 1; i <= targetSets; i++) {
    if (!workoutDraftInputs[i]) {
      workoutDraftInputs[i] = createEmptyWorkoutDraft();
    }
  }
}

function saveWorkoutSetDraftFromCard(card) {
  if (!card) return;
  const setNo = Number(card.dataset.setForm || 0);
  if (!setNo) return;
  workoutDraftInputs[setNo] = {
    weight: formatWeightRollValue(card.querySelector("[data-weight]")?.value),
    reps: formatRepsRollValue(card.querySelector("[data-reps]")?.value),
    memo: card.querySelector("[data-memo]")?.value || "",
    assist: !!card.querySelector("[data-assist]")?.checked
  };
}

function saveCurrentSetDraft() {
  if (isCardioBodyPart()) return;
  setFormsWrap.querySelectorAll("[data-set-form]").forEach(saveWorkoutSetDraftFromCard);
}

function getCurrentSetFormData(setNo) {
  saveCurrentSetDraft();
  const draft = workoutDraftInputs[setNo] || {};
  const weight = draft.weight || "";
  const reps = draft.reps || "";
  return {
    setNo,
    weight,
    reps,
    memo: draft.memo || "",
    assist: !!draft.assist,
    rm: calcEstimated1RM(weight, reps)
  };
}

function hasWorkoutSetContent(log) {
  return Number(log?.weight || 0) > 0 ||
    Number(log?.reps || 0) > 0 ||
    !!String(log?.memo || "").trim() ||
    !!log?.assist;
}

function buildWorkoutLogsForSave() {
  saveCurrentSetDraft();
  const targetSets = getTargetSets();
  for (let setNo = 1; setNo <= targetSets; setNo++) {
    const draftLog = getCurrentSetFormData(setNo);
    const existing = workoutState.setLogs.find(log => Number(log.setNo) === setNo);
    if (!hasWorkoutSetContent(draftLog) && !existing) continue;
    workoutState.setLogs[setNo - 1] = {
      ...draftLog,
      setNo,
      workSec: Number(existing?.workSec || 0),
      restSec: Number(existing?.restSec || 0),
      rm: calcEstimated1RM(draftLog.weight, draftLog.reps)
    };
  }
  return workoutState.setLogs
    .filter(log => log && Number(log.setNo || 0) <= targetSets)
    .filter(log => hasWorkoutSetContent(log) || Number(log.workSec || 0) > 0 || Number(log.restSec || 0) > 0)
    .sort((a, b) => Number(a.setNo || 0) - Number(b.setNo || 0));
}

function getWorkoutSetSnapshot(setNo) {
  const draft = workoutDraftInputs[setNo] || createEmptyWorkoutDraft();
  const weight = formatWeightRollValue(draft.weight);
  const reps = formatRepsRollValue(draft.reps);
  return {
    setNo,
    weight,
    reps,
    memo: draft.memo || "",
    assist: !!draft.assist,
    rm: calcEstimated1RM(weight, reps) || "-",
    existingLog: workoutState.setLogs.find(log => Number(log.setNo) === setNo) || null
  };
}

function getWorkoutSetMetricText(snapshot) {
  return `${snapshot.weight || "-"}kg / ${snapshot.reps || "-"}回 / RM ${snapshot.rm}`;
}

function getWorkoutSetStatusText(snapshot) {
  if (snapshot.existingLog) {
    return `実施 ${formatSeconds(snapshot.existingLog.workSec || 0)}`;
  }
  return snapshot.weight || snapshot.reps ? "編集中" : "未入力";
}

function updateWorkoutSetSummaryButton(setNo) {
  const button = setFormsWrap.querySelector(`[data-set-summary="${setNo}"]`);
  if (!button) return;
  const snapshot = getWorkoutSetSnapshot(setNo);
  const meta = button.querySelector(".set-summary-row-meta");
  const status = button.querySelector(".set-summary-row-status");
  if (meta) meta.textContent = getWorkoutSetMetricText(snapshot);
  if (status) status.textContent = getWorkoutSetStatusText(snapshot);
}

function syncDirectSetCardActiveState() {
  const activeSetNo = getActiveWorkoutSetNo();
  const currentModeLocked = workoutState.mode === "work" || workoutState.mode === "rest";
  setFormsWrap.querySelectorAll("[data-set-form]").forEach(card => {
    const cardSetNo = Number(card.dataset.setForm || 0);
    const isActive = cardSetNo === activeSetNo;
    card.classList.toggle("active", isActive);
    card.classList.toggle("is-locked", currentModeLocked && !isActive);
    card.querySelectorAll("input, textarea").forEach(input => {
      if (input.matches("[data-weight],[data-reps],[data-assist],[data-memo]")) {
        input.disabled = currentModeLocked && !isActive;
      }
    });
    card.querySelectorAll("[data-copy-field]").forEach(button => {
      button.disabled = currentModeLocked && !isActive;
    });
  });
}

function copyWorkoutFieldFromPrevious(setNo, fieldName) {
  if (setNo <= 1) return;
  ensureWorkoutDraftsSize();
  const previous = workoutDraftInputs[setNo - 1] || createEmptyWorkoutDraft();
  const current = workoutDraftInputs[setNo] || createEmptyWorkoutDraft();
  workoutDraftInputs[setNo] = {
    ...current,
    [fieldName]: previous[fieldName] ?? current[fieldName]
  };
}

function buildSetForms() {
  ensureWorkoutDraftsSize();
  const activeSetNo = getActiveWorkoutSetNo();
  const targetSets = getTargetSets();
  const currentModeLocked = workoutState.mode === "work" || workoutState.mode === "rest";
  const setCardsHtml = Array.from({ length: targetSets }, (_, index) => {
    const setNo = index + 1;
    const snapshot = getWorkoutSetSnapshot(setNo);
    const existingLog = snapshot.existingLog;
    const isActive = setNo === activeSetNo;
    const isDisabled = currentModeLocked && !isActive;
    const statusText = getWorkoutSetStatusText(snapshot);
    const weightCopyBtn = setNo > 1 ? `<button class="copy-inline-btn" type="button" data-copy-field="weight" aria-label="前のセットの重量をコピー" ${isDisabled ? "disabled" : ""}>➥</button>` : "";
    const repsCopyBtn = setNo > 1 ? `<button class="copy-inline-btn" type="button" data-copy-field="reps" aria-label="前のセットの回数をコピー" ${isDisabled ? "disabled" : ""}>➥</button>` : "";
    const memoCopyBtn = setNo > 1 ? `<button class="copy-inline-btn" type="button" data-copy-field="memo" aria-label="前のセットのメモをコピー" ${isDisabled ? "disabled" : ""}>➥</button>` : "";
    return `
      <article class="set-form-item set-direct-card ${isActive ? "active" : ""} ${isDisabled ? "is-locked" : ""}" data-set-form="${setNo}">
        <div class="set-direct-head">
          <div class="set-title-status">
            <span class="set-now-title">${setNo}セット目</span>
            <span class="set-direct-status" data-set-status>(${escapeHtml(statusText)})</span>
          </div>
          <div class="set-head-actions">
            <label class="set-assist-inline set-assist-inline-top">
              <input type="checkbox" data-assist ${snapshot.assist ? "checked" : ""} ${isDisabled ? "disabled" : ""} />
              補助
            </label>
            <strong class="set-rm-inline set-rm-inline-compact" data-rm-display>RM ${escapeHtml(calcEstimated1RM(snapshot.weight, snapshot.reps) || "-")}</strong>
          </div>
        </div>
        <div class="set-direct-metrics">
          <label class="set-inline-field set-inline-field-compact">
            <span class="field-label-with-copy">重量${weightCopyBtn}</span>
            <input class="metric-number-input replace-on-first-input" type="number" inputmode="decimal" min="0" max="300" step="0.1" data-weight value="${escapeAttr(formatWeightRollValue(snapshot.weight))}" ${isDisabled ? "disabled" : ""} />
            <em>kg</em>
          </label>
          <label class="set-inline-field set-inline-field-compact">
            <span class="field-label-with-copy">回数${repsCopyBtn}</span>
            <input class="metric-number-input replace-on-first-input" type="number" inputmode="numeric" min="0" max="300" step="1" data-reps value="${escapeAttr(formatRepsRollValue(snapshot.reps))}" ${isDisabled ? "disabled" : ""} />
            <em>回</em>
          </label>
        </div>
        <div class="set-bottom-row compact-bottom-row set-memo-row">
          <div class="set-memo-label field-label-with-copy">メモ${memoCopyBtn}</div>
          <textarea class="set-memo-input" rows="2" data-memo placeholder="フォームや体感など" ${isDisabled ? "disabled" : ""}>${escapeHtml(snapshot.memo)}</textarea>
        </div>
        ${existingLog ? `<div class="workout-log-item-body">実施済み: 実施 ${formatSeconds(existingLog.workSec || 0)} / 休憩 ${formatSeconds(existingLog.restSec || 0)}</div>` : ""}
      </article>
    `;
  }).join("");

  setFormsWrap.innerHTML = `
    <div class="set-direct-list">
      ${setCardsHtml}
    </div>
    <div class="set-count-actions" aria-label="セット数調整">
      <button class="stepper-btn" type="button" data-set-count-minus aria-label="セット数を減らす">-</button>
      <button class="stepper-btn" type="button" data-set-count-plus aria-label="セット数を増やす">+</button>
    </div>
  `;

  const refreshSetCard = card => {
    const setNo = Number(card.dataset.setForm || 0);
    if (!setNo) return;
    saveWorkoutSetDraftFromCard(card);
    const current = workoutDraftInputs[setNo] || createEmptyWorkoutDraft();
    const rmText = calcEstimated1RM(current.weight, current.reps) || "-";
    const statusText = getWorkoutSetStatusText(getWorkoutSetSnapshot(setNo));
    card.querySelector("[data-rm-display]").textContent = `RM ${rmText}`;
    card.querySelector("[data-set-status]").textContent = `(${statusText})`;
  };

  setFormsWrap.querySelectorAll("[data-set-form]").forEach(card => {
    const setNo = Number(card.dataset.setForm || 0);
    card.querySelectorAll("input, textarea").forEach(input => {
      input.addEventListener("focus", () => {
        if (currentModeLocked) return;
        workoutState.currentSet = setNo;
        if (input.matches(".replace-on-first-input")) armReplaceOnFirstNumericInput(input);
        syncDirectSetCardActiveState();
        renderWorkoutState();
      });
      input.addEventListener("input", () => refreshSetCard(card));
      input.addEventListener("change", () => refreshSetCard(card));
    });
    card.querySelector("[data-weight]")?.addEventListener("change", event => {
      event.target.value = formatWeightRollValue(event.target.value);
      refreshSetCard(card);
    });
    card.querySelector("[data-reps]")?.addEventListener("change", event => {
      event.target.value = formatRepsRollValue(event.target.value);
      refreshSetCard(card);
    });
    card.querySelectorAll("[data-copy-field]").forEach(button => {
      button.addEventListener("click", event => {
        event.preventDefault();
        event.stopPropagation();
        if (currentModeLocked) return;
        const fieldName = button.dataset.copyField;
        copyWorkoutFieldFromPrevious(setNo, fieldName);
        buildSetForms();
      });
    });
    card.addEventListener("click", event => {
      if (currentModeLocked) return;
      if (event.target.closest("button")) return;
      workoutState.currentSet = setNo;
      syncDirectSetCardActiveState();
      renderWorkoutState();
    });
  });

  const adjustSetCount = delta => {
    saveCurrentSetDraft();
    const currentCount = getTargetSets();
    const nextCount = Math.max(1, currentCount + delta);
    if (nextCount === currentCount) return;
    if (delta > 0 && !workoutDraftInputs[nextCount]) {
      const previous = workoutDraftInputs[nextCount - 1] || createEmptyWorkoutDraft();
      workoutDraftInputs[nextCount] = { ...previous };
    }
    setWorkoutSetCount(nextCount);
    if (workoutState.currentSet > nextCount) {
      workoutState.currentSet = nextCount;
    }
    buildSetForms();
  };

  setFormsWrap.querySelector("[data-set-count-minus]")?.addEventListener("click", () => adjustSetCount(-1));
  setFormsWrap.querySelector("[data-set-count-plus]")?.addEventListener("click", () => adjustSetCount(1));
  syncDirectSetCardActiveState();
}

function resetWorkoutState() {
  stopWorkoutTimer();
  workoutState = {
    mode: "idle",
    currentSet: 1,
    targetSets: 0,
    phaseStartedAt: null,
    setLogs: []
  };
  workoutDraftInputs = {};
  renderWorkoutState();
  renderWorkoutLogs();
}

function startWorkoutTimer() {
  stopWorkoutTimer();
  workoutTimerInterval = setInterval(renderWorkoutState, 500);
}

function stopWorkoutTimer() {
  if (workoutTimerInterval) clearInterval(workoutTimerInterval);
  workoutTimerInterval = null;
}

function renderWorkoutState() {
  const targetSets = getTargetSets();
  const setNo = getActiveWorkoutSetNo();
  let elapsed = 0;
  if (workoutState.phaseStartedAt) {
    elapsed = Math.round((Date.now() - workoutState.phaseStartedAt) / 1000);
  }

  workoutTimerDisplay.textContent = formatSeconds(elapsed);
  workoutSetStatus.textContent = `セット ${setNo} / ${targetSets}`;
  workoutMainBtn.disabled = false;

  if (workoutState.mode === "work") {
    workoutPhaseLabel.textContent = "実施中";
    workoutMainBtn.textContent = "セット完了";
  } else if (workoutState.mode === "rest") {
    const restTarget = Math.max(0, Number(restSecInput.value || 0));
    workoutPhaseLabel.textContent = restTarget ? `休憩中 / 目安 ${formatSeconds(restTarget)}` : "休憩中";
    workoutMainBtn.textContent = "次セット開始";
  } else if (workoutState.mode === "done") {
    workoutPhaseLabel.textContent = "完了";
    workoutTimerDisplay.textContent = "00:00";
    workoutMainBtn.textContent = "開始";
  } else {
    workoutPhaseLabel.textContent = "待機中";
    workoutTimerDisplay.textContent = "00:00";
    workoutMainBtn.textContent = "開始";
  }
}

function renderWorkoutLogs() {
  if (!workoutState.setLogs.length) {
    workoutLogs.innerHTML = `<p class="empty-text">まだ記録はありません。</p>`;
    return;
  }

  workoutLogs.innerHTML = workoutState.setLogs.map(log => `
    <div class="workout-log-item detail-log-card">
      <div class="workout-log-item-title">${escapeHtml(log.setNo)}セット目</div>
      <div class="workout-log-item-body">
        重量: ${escapeHtml(log.weight || "-")}kg / 回数: ${escapeHtml(log.reps || "-")}回 / 補助: ${log.assist ? "あり" : "なし"}
      </div>
      <div class="workout-log-item-body">
        実施: ${formatSeconds(log.workSec || 0)} / 休憩: ${formatSeconds(log.restSec || 0)} / RM: ${escapeHtml(log.rm || "-")}
      </div>
      <div class="workout-log-item-body">メモ: ${escapeHtml(log.memo || "なし")}</div>
    </div>
  `).join("");
}

function workoutMainAction() {
  if (isCardioBodyPart()) {
    saveWorkoutSession(false);
    return;
  }

  const targetSets = getTargetSets();
  const currentSetNo = getActiveWorkoutSetNo();
  const setData = getCurrentSetFormData(currentSetNo);

  if (Number(setData.weight || 0) <= 0) {
    alert("重量を入力してください。");
    return;
  }
  if (Number(setData.reps || 0) <= 0) {
    alert("回数を入力してください。");
    return;
  }

  if (workoutState.mode === "idle" || workoutState.mode === "done") {
    workoutState.targetSets = targetSets;
    workoutState.currentSet = currentSetNo;
    workoutState.mode = "work";
    workoutState.phaseStartedAt = Date.now();
    startWorkoutTimer();
    renderWorkoutState();
    return;
  }

  if (workoutState.mode === "work") {
    const workSec = Math.max(1, Math.round((Date.now() - workoutState.phaseStartedAt) / 1000));
    const log = { ...setData, workSec, restSec: 0 };
    const existingIndex = workoutState.setLogs.findIndex(item => Number(item.setNo) === currentSetNo);
    if (existingIndex >= 0) workoutState.setLogs[existingIndex] = log;
    else workoutState.setLogs.push(log);

    if (currentSetNo >= targetSets) {
      workoutState.mode = "done";
      workoutState.phaseStartedAt = null;
      stopWorkoutTimer();
      renderWorkoutLogs();
      renderWorkoutState();
      saveWorkoutSession(true);
      return;
    }

    const nextSet = currentSetNo + 1;
    const nextDraft = workoutDraftInputs[nextSet] || {};
    workoutDraftInputs[nextSet] = {
      weight: Number(nextDraft.weight || 0) > 0 ? nextDraft.weight : setData.weight,
      reps: Number(nextDraft.reps || 0) > 0 ? nextDraft.reps : setData.reps,
      memo: nextDraft.memo || setData.memo,
      assist: typeof nextDraft.assist === "boolean" ? nextDraft.assist : setData.assist
    };
    workoutState.currentSet = nextSet;
    workoutState.mode = "rest";
    workoutState.phaseStartedAt = Date.now();
    startWorkoutTimer();
    renderWorkoutLogs();
    buildSetForms();
    renderWorkoutState();
    return;
  }

  if (workoutState.mode === "rest") {
    const previousSetNo = Math.max(1, currentSetNo - 1);
    const restSec = Math.max(1, Math.round((Date.now() - workoutState.phaseStartedAt) / 1000));
    const previous = workoutState.setLogs.find(item => Number(item.setNo) === previousSetNo);
    if (previous) previous.restSec = restSec;

    workoutState.mode = "work";
    workoutState.phaseStartedAt = Date.now();
    startWorkoutTimer();
    renderWorkoutLogs();
    renderWorkoutState();
  }
}

function saveWorkoutSession(isAutoSave = false) {
  const dateKey = workoutDateInput.value || selectedDate;
  const bodyPart = bodyPartSelect.value;
  const exercise = exerciseSelect.value;

  if (!bodyPart || !exercise) {
    alert("部位とメニューを選択してください。");
    return;
  }

  if (isCardioBodyPart(bodyPart)) {
    if (isAutoSave) return;
    const cardioData = getCardioFormData();
    const hasCardioRecord = Number(cardioData.durationSec || 0) > 0 ||
      Number(cardioData.distance || 0) > 0 ||
      Number(cardioData.speed || 0) > 0 ||
      Number(cardioData.calories || 0) > 0 ||
      Number(cardioData.avgHeartRate || 0) > 0 ||
      Number(cardioData.maxHeartRate || 0) > 0 ||
      !!cardioData.memo.trim();

    if (!hasCardioRecord) {
      alert("有酸素運動の記録を入力してください。");
      return;
    }

    const sessions = getWorkoutSessions();
    if (!sessions[dateKey]) sessions[dateKey] = [];
    sessions[dateKey].push({
      id: createId(),
      type: "cardio",
      bodyPart,
      exercise,
      targetSets: 0,
      memo: cardioData.memo || "",
      cardioData,
      setLogs: [],
      createdAt: Date.now()
    });

    saveWorkoutSessions(sessions);
    setWorkoutDate(dateKey);
    switchView("workout");
    alert("有酸素運動の記録を保存しました。");
    return;
  }

  const logsToSave = buildWorkoutLogsForSave();
  if (!logsToSave.length) {
    if (!isAutoSave) alert("保存できる記録がありません。");
    return;
  }

  const sessions = getWorkoutSessions();
  if (!sessions[dateKey]) sessions[dateKey] = [];
  const actualSetCount = logsToSave.length;
  sessions[dateKey].push({
    id: createId(),
    bodyPart,
    exercise,
    targetSets: actualSetCount,
    memo: workoutMemo.value || "",
    setLogs: deepCopy(logsToSave),
    createdAt: Date.now()
  });

  saveWorkoutSessions(sessions);
  resetWorkoutState();
  setWorkoutDate(dateKey);
  switchView("workout");
  if (!isAutoSave) alert("筋トレ記録を保存しました。");
}

function calcWorkoutTotalVolume(setLogs) {
  return (setLogs || []).reduce((sum, log) => {
    return sum + Number(log.weight || 0) * Number(log.reps || 0);
  }, 0);
}

function getWorkoutMonthItems(year = workoutMiniYear, month = workoutMiniMonth) {
  const monthPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
  const sessions = getWorkoutSessions();
  return Object.entries(sessions)
    .filter(([dateKey]) => dateKey.startsWith(monthPrefix))
    .flatMap(([, items]) => items || []);
}

function getWorkoutItemsByDateKeys(dateKeys) {
  const sessions = getWorkoutSessions();
  return dateKeys.flatMap(dateKey => sessions[dateKey] || []);
}

function getWorkoutRangeItems(startDate, endDate) {
  const dateKeys = [];
  for (let date = new Date(startDate); date <= endDate; date = addDays(date, 1)) {
    dateKeys.push(formatDateKey(date));
  }
  return getWorkoutItemsByDateKeys(dateKeys);
}

function formatMonthDay(dateObj) {
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
}

function summarizeWorkoutItems(items) {
  const setLogs = items.flatMap(item => item.setLogs || []);
  const cardioWork = items.reduce((sum, item) => (
    sum + (isCardioSession(item) ? Number(item.cardioData?.durationSec || 0) : 0)
  ), 0);
  return {
    totalVolume: items.reduce((sum, item) => sum + calcWorkoutTotalVolume(item.setLogs || []), 0),
    totalSets: setLogs.length,
    totalReps: setLogs.reduce((sum, log) => sum + Number(log.reps || 0), 0),
    totalWork: setLogs.reduce((sum, log) => sum + Number(log.workSec || 0), 0) + cardioWork
  };
}

function getWorkoutVolumeText(item) {
  const validLogs = (item.setLogs || []).filter(log => Number(log.weight || 0) > 0 && Number(log.reps || 0) > 0);
  if (!validLogs.length) return "総負荷量: -";
  return `総負荷量: ${formatWeightNumber(calcWorkoutTotalVolume(validLogs))}kg`;
}

function renderWorkoutPeriodCard(label, subText, summary) {
  return `
    <article class="workout-period-card">
      <div class="workout-period-head">
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(subText)}</span>
      </div>
      <div class="workout-period-metrics">
        <div>
          <span>総負荷量</span>
          <strong>${formatWeightNumber(summary.totalVolume)}kg</strong>
        </div>
        <div>
          <span>セット数</span>
          <strong>${summary.totalSets}</strong>
        </div>
        <div>
          <span>レップ数</span>
          <strong>${summary.totalReps}</strong>
        </div>
        <div>
          <span>実施時間</span>
          <strong>${formatSeconds(summary.totalWork)}</strong>
        </div>
      </div>
    </article>
  `;
}

function summarizeCardioItems(items) {
  const cardioItems = items.filter(isCardioSession);
  const heartRates = cardioItems
    .map(item => Number(item.cardioData?.avgHeartRate || 0))
    .filter(value => value > 0);
  return {
    count: cardioItems.length,
    totalDuration: cardioItems.reduce((sum, item) => sum + Number(item.cardioData?.durationSec || 0), 0),
    totalCalories: cardioItems.reduce((sum, item) => sum + Number(item.cardioData?.calories || 0), 0),
    totalDistance: cardioItems.reduce((sum, item) => {
      const cardio = item.cardioData || {};
      return cardio.distanceUnit === "段" ? sum : sum + Number(cardio.distance || 0);
    }, 0),
    totalSteps: cardioItems.reduce((sum, item) => {
      const cardio = item.cardioData || {};
      return cardio.distanceUnit === "段" ? sum + Number(cardio.distance || 0) : sum;
    }, 0),
    averageHeartRate: heartRates.length
      ? Math.round(heartRates.reduce((sum, value) => sum + value, 0) / heartRates.length)
      : 0
  };
}

function renderWorkoutCardioMonthCard(items, monthText) {
  const summary = summarizeCardioItems(items);

  return `
    <article class="workout-period-card workout-balance-card cardio-month-card">
      <div class="workout-period-head">
        <strong>有酸素運動</strong>
        <span>${escapeHtml(monthText)}</span>
      </div>
      <div class="workout-period-metrics">
        <div>
          <span>時間</span>
          <strong>${summary.count ? formatHms(summary.totalDuration) : "-"}</strong>
        </div>
        <div>
          <span>カロリー</span>
          <strong>${summary.count ? `${formatWeightNumber(summary.totalCalories)}kcal` : "-"}</strong>
        </div>
        <div>
          <span>距離</span>
          <strong>${summary.totalDistance ? `${formatWeightNumber(summary.totalDistance)}km` : "-"}</strong>
        </div>
        <div>
          <span>段数</span>
          <strong>${summary.totalSteps ? `${formatWeightNumber(summary.totalSteps)}段` : "-"}</strong>
        </div>
        <div>
          <span>心拍数</span>
          <strong>${summary.averageHeartRate ? `${summary.averageHeartRate}bpm` : "-"}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderWorkoutDashboard() {
  const anchorKey = workoutDateInput.value || selectedDate || formatDateKey(new Date());
  const anchorDate = getDateFromKey(anchorKey);
  const weekStart = addDays(anchorDate, -anchorDate.getDay());
  const weekEnd = addDays(weekStart, 6);

  const monthSummary = summarizeWorkoutItems(getWorkoutMonthItems());
  const weekSummary = summarizeWorkoutItems(getWorkoutRangeItems(weekStart, weekEnd));
  const daySummary = summarizeWorkoutItems(getWorkoutItemsByDateKeys([anchorKey]));
  const monthItems = getWorkoutMonthItems();

  workoutDashboard.innerHTML = [
    renderWorkoutPeriodCard("今月", `${workoutMiniYear}年${workoutMiniMonth + 1}月`, monthSummary),
    renderWorkoutPeriodCard("今週", `${formatMonthDay(weekStart)}-${formatMonthDay(weekEnd)}`, weekSummary),
    renderWorkoutPeriodCard("今日", formatMonthDay(anchorDate), daySummary),
    renderWorkoutCardioMonthCard(monthItems, `${workoutMiniYear}年${workoutMiniMonth + 1}月`)
  ].join("");
}

function getAllWorkoutItems() {
  const sessions = getWorkoutSessions();
  return Object.entries(sessions).flatMap(([dateKey, items]) => (
    (items || []).map(item => ({ ...item, dateKey }))
  ));
}

function getWorkoutMonthItemsForUsername(username, year = workoutMiniYear, month = workoutMiniMonth) {
  const monthPrefix = `${year}-${String(month + 1).padStart(2, "0")}-`;
  const sessions = readUserDataStorageForUsername(STORAGE_WORKOUT_SESSION_KEY, username, {});
  return Object.entries(sessions)
    .filter(([dateKey]) => dateKey.startsWith(monthPrefix))
    .flatMap(([dateKey, items]) => (
      (items || []).map(item => ({
        ...item,
        dateKey,
        username,
        nickname: getUserNickname(username)
      }))
    ));
}

function getAllWorkoutMonthItemsForUsers(year = workoutMiniYear, month = workoutMiniMonth) {
  return Object.keys(getUserAccounts()).flatMap(username => getWorkoutMonthItemsForUsername(username, year, month));
}

function getWorkoutItemWorkSeconds(item) {
  if (isCardioSession(item)) {
    return Number(item.cardioData?.durationSec || 0);
  }
  return (item.setLogs || []).reduce((sum, log) => sum + Number(log.workSec || 0), 0);
}

function buildWorkoutRankingRows(entries, formatValue) {
  const topItems = entries
    .filter(item => Number(item.value || 0) > 0)
    .sort((a, b) => Number(b.value || 0) - Number(a.value || 0))
    .slice(0, 10);

  return Array.from({ length: 10 }, (_, index) => {
    const item = topItems[index];
    if (!item) {
      return `
        <li class="workout-ranking-row">
          <span class="workout-ranking-rank">${index + 1}</span>
          <span class="workout-ranking-name">-</span>
          <strong class="workout-ranking-value">-</strong>
        </li>
      `;
    }
    return `
      <li class="workout-ranking-row">
        <span class="workout-ranking-rank">${index + 1}</span>
        <span class="workout-ranking-name">${escapeHtml(item.label)}</span>
        <strong class="workout-ranking-value">${escapeHtml(formatValue(item.value, item))}</strong>
      </li>
    `;
  }).join("");
}

function renderWorkoutRankingCard(title, entries, formatValue) {
  return `
    <article class="workout-ranking-panel">
      <h3>${escapeHtml(title)}</h3>
      <ol class="workout-ranking-list">
        ${buildWorkoutRankingRows(entries, formatValue)}
      </ol>
    </article>
  `;
}

function renderWorkoutRankingsLegacy() {
  if (!workoutRankingGrid) return;
  const items = getAllWorkoutItems();

  const timeEntries = items.map(item => ({
    label: `${item.dateKey} ${item.bodyPart} / ${item.exercise}`,
    value: isCardioSession(item)
      ? Number(item.cardioData?.durationSec || 0)
      : (item.setLogs || []).reduce((sum, log) => sum + Number(log.workSec || 0), 0)
  }));

  const weightEntries = items.flatMap(item => (
    (item.setLogs || [])
      .filter(log => Number(log.weight || 0) > 0)
      .map((log, index) => ({
        label: `${item.dateKey} ${item.exercise} ${index + 1}セット目`,
        value: Number(log.weight || 0)
      }))
  ));

  const rmEntries = items.flatMap(item => (
    (item.setLogs || [])
      .filter(log => Number(log.rm || 0) > 0)
      .map((log, index) => ({
        label: `${item.dateKey} ${item.exercise} ${index + 1}セット目`,
        value: Number(log.rm || 0)
      }))
  ));

  const popularMap = new Map();
  items.forEach(item => {
    const key = `${item.bodyPart} / ${item.exercise}`;
    popularMap.set(key, (popularMap.get(key) || 0) + 1);
  });
  const popularEntries = Array.from(popularMap.entries()).map(([label, value]) => ({ label, value }));

  workoutRankingGrid.innerHTML = [
    renderWorkoutRankingCard("時間", timeEntries, value => formatSeconds(value)),
    renderWorkoutRankingCard("重さ", weightEntries, value => `${formatWeightNumber(value)}kg`),
    renderWorkoutRankingCard("最高RM", rmEntries, value => `${formatWeightNumber(value)}kg`),
    renderWorkoutRankingCard("人気の筋トレ", popularEntries, value => `${value}回`)
  ].join("");
}

function renderWorkoutRankings() {
  if (!workoutRankingGrid) return;
  const monthText = `${workoutMiniYear}年${workoutMiniMonth + 1}月`;
  const items = getAllWorkoutMonthItemsForUsers();
  const timeMap = new Map();
  const weightMap = new Map();
  const rmMap = new Map();
  const popularMap = new Map();

  items.forEach(item => {
    const nickname = item.nickname || item.username;
    const dateText = formatDisplayDate(item.dateKey);
    const dayKey = `${item.username}__${item.dateKey}`;
    const workSeconds = getWorkoutItemWorkSeconds(item);
    if (workSeconds > 0) {
      if (!timeMap.has(dayKey)) {
        timeMap.set(dayKey, {
          label: `${nickname} / ${dateText}`,
          value: 0
        });
      }
      timeMap.get(dayKey).value += workSeconds;
    }

    const maxWeight = Math.max(0, ...(item.setLogs || []).map(log => Number(log.weight || 0)));
    if (maxWeight > 0) {
      const currentWeight = weightMap.get(dayKey);
      if (!currentWeight || maxWeight > currentWeight.value) {
        weightMap.set(dayKey, {
          label: `${nickname} / ${dateText} / ${item.exercise}`,
          value: maxWeight
        });
      }
    }

    const maxRm = Math.max(0, ...(item.setLogs || []).map(log => Number(log.rm || 0)));
    if (maxRm > 0) {
      const currentRm = rmMap.get(dayKey);
      if (!currentRm || maxRm > currentRm.value) {
        rmMap.set(dayKey, {
          label: `${nickname} / ${dateText} / ${item.exercise}`,
          value: maxRm
        });
      }
    }

    const popularKey = `${item.bodyPart} / ${item.exercise}`;
    popularMap.set(popularKey, (popularMap.get(popularKey) || 0) + 1);
  });

  const timeEntries = Array.from(timeMap.values());
  const weightEntries = Array.from(weightMap.values());
  const rmEntries = Array.from(rmMap.values());
  const popularEntries = Array.from(popularMap.entries()).map(([label, value]) => ({ label, value }));

  workoutRankingGrid.innerHTML = [
    `<div class="workout-ranking-month">${escapeHtml(monthText)}ランキング</div>`,
    renderWorkoutRankingCard("実施時間", timeEntries, value => formatSeconds(value)),
    renderWorkoutRankingCard("重さ", weightEntries, value => `${formatWeightNumber(value)}kg`),
    renderWorkoutRankingCard("最高RM", rmEntries, value => `${formatWeightNumber(value)}kg`),
    renderWorkoutRankingCard("人気の筋トレ", popularEntries, value => `${value}回`)
  ].join("");
}

function formatCardioValue(value, unit = "") {
  return value !== "" && value != null ? `${escapeHtml(value)}${escapeHtml(unit)}` : "-";
}

function renderCardioHistoryItem(item) {
  const cardio = item.cardioData || {};
  const config = getCardioMetricConfig(item.exercise);
  const distanceUnit = cardio.distanceUnit || config.distanceUnit;
  const speedUnit = cardio.speedUnit || config.speedUnit;
  const durationText = formatHms(cardio.durationSec || 0);
  const distanceText = formatCardioValue(cardio.distance, distanceUnit);
  const speedText = formatCardioValue(cardio.speed, speedUnit);
  const caloriesText = formatCardioValue(cardio.calories, "kcal");
  const avgHrText = formatCardioValue(cardio.avgHeartRate, "bpm");
  const maxHrText = formatCardioValue(cardio.maxHeartRate, "bpm");

  return `
    <details class="workout-history-simple">
      <summary class="workout-history-summary">
        <div class="workout-history-summary-main">
          <div class="workout-history-simple-title">${escapeHtml(item.bodyPart)} / ${escapeHtml(item.exercise)}</div>
          <div class="workout-history-simple-body">
            時間: ${durationText} / ${escapeHtml(config.distanceLabel)}: ${distanceText} / ${escapeHtml(config.speedLabel)}: ${speedText}
          </div>
          <div class="workout-history-simple-body">カロリー: ${caloriesText} / 心拍: 平均 ${avgHrText} / 最大 ${maxHrText}</div>
        </div>
      </summary>
      <div class="workout-history-detail-wrap">
        <div class="workout-history-detail-row">
          <div class="workout-history-detail-title">有酸素内容</div>
          <div class="workout-history-detail-body">
            時間: ${durationText} / ${escapeHtml(config.distanceLabel)}: ${distanceText} / ${escapeHtml(config.speedLabel)}: ${speedText}<br>
            カロリー: ${caloriesText}<br>
            心拍: 平均 ${avgHrText} / 最大 ${maxHrText}
          </div>
          ${cardio.memo ? `<div class="workout-history-detail-body">メモ: ${escapeHtml(cardio.memo)}</div>` : ""}
        </div>
        <div class="workout-history-actions">
          <button class="edit-workout-btn" type="button" data-edit-workout="${escapeAttr(item.id)}">編集</button>
          <button class="close-x-btn" type="button" aria-label="削除" data-delete-workout="${escapeAttr(item.id)}">×</button>
        </div>
      </div>
    </details>
  `;
}

function renderWorkoutHistory() {
  const dateKey = workoutDateInput.value || selectedDate;
  const sessions = getWorkoutSessions();
  const items = (sessions[dateKey] || []).slice().sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

  renderWorkoutDashboard();
  renderWorkoutRankings();
  workoutItemCount.textContent = `${items.length}件`;
  if (!items.length) {
    workoutHistoryList.innerHTML = `<p class="empty-text">まだ筋トレ記録はありません。</p>`;
    return;
  }

  workoutHistoryList.innerHTML = items.map(item => {
    if (isCardioSession(item)) return renderCardioHistoryItem(item);

    const setLogs = item.setLogs || [];
    const totalWork = setLogs.reduce((sum, log) => sum + Number(log.workSec || 0), 0);
    const totalRest = setLogs.reduce((sum, log) => sum + Number(log.restSec || 0), 0);
    const totalVolume = calcWorkoutTotalVolume(setLogs);
    const totalReps = setLogs.reduce((sum, log) => sum + Number(log.reps || 0), 0);
    const topRm = Math.max(...setLogs.map(log => Number(log.rm || 0)), 0);
    const actualSetCount = setLogs.length || "-";
    const detailHtml = setLogs.map((log, index) => `
      <div class="workout-history-detail-row">
        <div class="workout-history-detail-title">${index + 1}セット目</div>
        <div class="workout-history-detail-body">
          重量: ${escapeHtml(log.weight || "-")}kg / 回数: ${escapeHtml(log.reps || "-")}回 / 補助: ${log.assist ? "あり" : "なし"}<br>
          実施時間: ${formatSeconds(log.workSec || 0)} / 休憩: ${formatSeconds(log.restSec || 0)} / RM: ${escapeHtml(log.rm || "-")}
        </div>
        <div class="workout-history-detail-body">メモ: ${escapeHtml(log.memo || "なし")}</div>
      </div>
    `).join("");

    return `
      <details class="workout-history-simple">
        <summary class="workout-history-summary">
          <div class="workout-history-summary-main">
            <div class="workout-history-simple-title">${escapeHtml(item.bodyPart)} / ${escapeHtml(item.exercise)}</div>
            <div class="workout-history-simple-body">
              総負荷量: ${formatWeightNumber(totalVolume)}kg / セット数: ${escapeHtml(actualSetCount)} / レップ数: ${totalReps} / 最高RM: ${topRm ? `${topRm.toFixed(1)}kg` : "-"}
            </div>
            <div class="workout-history-simple-body">実施時間: ${formatSeconds(totalWork)} / 休憩: ${formatSeconds(totalRest)}</div>
          </div>
        </summary>
        <div class="workout-history-detail-wrap">
          ${detailHtml || `<div class="workout-history-simple-body">セット詳細はありません。</div>`}
          <div class="workout-history-actions">
            <button class="edit-workout-btn" type="button" data-edit-workout="${escapeAttr(item.id)}">編集</button>
            <button class="close-x-btn" type="button" aria-label="削除" data-delete-workout="${escapeAttr(item.id)}">×</button>
          </div>
        </div>
      </details>
    `;
  }).join("");

  workoutHistoryList.querySelectorAll("[data-delete-workout]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      deleteWorkoutSession(dateKey, button.dataset.deleteWorkout);
    });
  });

  workoutHistoryList.querySelectorAll("[data-edit-workout]").forEach(button => {
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      openWorkoutEdit(dateKey, button.dataset.editWorkout);
    });
  });
}

function deleteWorkoutSession(dateKey, sessionId) {
  const sessions = getWorkoutSessions();
  if (!sessions[dateKey]) return;
  sessions[dateKey] = sessions[dateKey].filter(item => item.id !== sessionId);
  if (!sessions[dateKey].length) delete sessions[dateKey];
  saveWorkoutSessions(sessions);
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
}

function loadPreviousWorkout() {
  const bodyPart = bodyPartSelect.value;
  const exercise = exerciseSelect.value;
  const currentDateKey = workoutDateInput.value || selectedDate;
  const sessions = getWorkoutSessions();
  const candidates = [];

  Object.entries(sessions).forEach(([dateKey, items]) => {
    if (dateKey >= currentDateKey) return;
    (items || []).forEach(item => {
      if (item.bodyPart === bodyPart && item.exercise === exercise) {
        candidates.push({ dateKey, ...item });
      }
    });
  });

  candidates.sort((a, b) => {
    if (a.dateKey === b.dateKey) return (b.createdAt || 0) - (a.createdAt || 0);
    return a.dateKey < b.dateKey ? 1 : -1;
  });

  const latest = candidates[0];
  if (!latest) {
    alert("前回記録がありません。");
    return;
  }

  if (isCardioSession(latest)) {
    updateWorkoutInputMode(latest.cardioData || {});
    return;
  }

  const sourceLogs = latest.setLogs || [];
  const sourceSetCount = sourceLogs.length || latest.targetSets || 1;
  setWorkoutSetCount(sourceSetCount);
  workoutDraftInputs = {};
  for (let i = 1; i <= getTargetSets(); i++) {
    const sourceLog = sourceLogs[i - 1] || sourceLogs[sourceLogs.length - 1] || {};
    workoutDraftInputs[i] = {
      weight: formatWeightRollValue(sourceLog.weight),
      reps: formatRepsRollValue(sourceLog.reps),
      memo: "",
      assist: !!sourceLog.assist
    };
  }
  workoutState.currentSet = 1;
  workoutState.mode = "idle";
  workoutState.phaseStartedAt = null;
  workoutState.setLogs = [];
  buildSetForms();
  renderWorkoutLogs();
  renderWorkoutState();
  alert(`${formatDisplayDate(latest.dateKey)} の前回記録を読み込みました。`);
}

function renderWorkoutEditBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const parts = unique([...Object.keys(masters), selected]);
  workoutEditBodyPartSelect.innerHTML = parts.map(part => (
    `<option value="${escapeAttr(part)}">${escapeHtml(part)}</option>`
  )).join("");
  if (selected) workoutEditBodyPartSelect.value = selected;
  renderWorkoutEditExerciseSelect(workoutEditState?.session?.exercise || "");
}

function renderWorkoutEditExerciseSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyPart = workoutEditBodyPartSelect.value;
  const exercises = unique([...(masters[bodyPart] || []), selected]);
  workoutEditExerciseSelect.innerHTML = exercises.map(exercise => (
    `<option value="${escapeAttr(exercise)}">${escapeHtml(exercise)}</option>`
  )).join("");
  if (selected) workoutEditExerciseSelect.value = selected;
}

function getWorkoutEditDraftFromForm() {
  const session = workoutEditState?.session || {};
  if (isCardioBodyPart(workoutEditBodyPartSelect.value)) {
    const cardioData = getWorkoutEditCardioDataFromForm();
    return {
      dateKey: workoutEditDateInput.value || workoutEditState?.dateKey || selectedDate,
      session: {
        ...session,
        type: "cardio",
        bodyPart: workoutEditBodyPartSelect.value,
        exercise: workoutEditExerciseSelect.value,
        targetSets: 0,
        memo: cardioData.memo || "",
        cardioData,
        setLogs: []
      }
    };
  }

  const setLogs = [...workoutEditSetList.querySelectorAll("[data-edit-set-index]")].map((card, index) => {
    const weight = formatWeightRollValue(card.querySelector("[data-edit-weight]").value);
    const reps = formatRepsRollValue(card.querySelector("[data-edit-reps]").value);
    return {
      setNo: index + 1,
      weight,
      reps,
      assist: card.querySelector("[data-edit-assist]").checked,
      workSec: parseDurationInputValue(card.querySelector("[data-edit-work-duration]")?.value),
      restSec: parseDurationInputValue(card.querySelector("[data-edit-rest-duration]")?.value),
      memo: card.querySelector("[data-edit-memo]").value,
      rm: calcEstimated1RM(weight, reps)
    };
  });

  return {
    dateKey: workoutEditDateInput.value || workoutEditState?.dateKey || selectedDate,
    session: {
      ...session,
      bodyPart: workoutEditBodyPartSelect.value,
      exercise: workoutEditExerciseSelect.value,
      type: "strength",
      cardioData: undefined,
      targetSets: setLogs.length,
      memo: "",
      setLogs
    }
  };
}

function getWorkoutEditCardioDataFromForm() {
  const form = workoutEditSetList.querySelector("[data-edit-cardio-form]");
  const config = getCardioMetricConfig(workoutEditExerciseSelect.value);
  if (!form) {
    return {
      durationSec: 0,
      distance: "",
      distanceUnit: config.distanceUnit,
      speed: "",
      speedUnit: config.speedUnit,
      calories: "",
      avgHeartRate: "",
      maxHeartRate: "",
      memo: ""
    };
  }

  return {
    durationSec: parseDurationInputValue(form.querySelector("[data-edit-cardio-duration]")?.value),
    distance: normalizeCardioNumber(form.querySelector("[data-edit-cardio-distance]")?.value, config.distanceStep === "1" ? 0 : 1),
    distanceUnit: config.distanceUnit,
    speed: normalizeCardioNumber(form.querySelector("[data-edit-cardio-speed]")?.value, config.speedStep === "1" ? 0 : 1),
    speedUnit: config.speedUnit,
    calories: normalizeCardioNumber(form.querySelector("[data-edit-cardio-calories]")?.value, 0),
    avgHeartRate: normalizeCardioNumber(form.querySelector("[data-edit-cardio-avg-hr]")?.value, 0),
    maxHeartRate: normalizeCardioNumber(form.querySelector("[data-edit-cardio-max-hr]")?.value, 0),
    memo: form.querySelector("[data-edit-cardio-memo]")?.value || ""
  };
}

function renderWorkoutEditCardioForm(preset = null) {
  const config = getCardioMetricConfig(workoutEditExerciseSelect.value);
  const current = preset || getWorkoutEditCardioDataFromForm();
  const durationSec = Math.max(0, Math.floor(Number(current.durationSec || 0)));
  const distanceValue = normalizeCardioNumber(current.distance, config.distanceStep === "1" ? 0 : 1);
  const speedValue = normalizeCardioNumber(current.speed, config.speedStep === "1" ? 0 : 1);
  const caloriesValue = normalizeCardioNumber(current.calories, 0);

  workoutEditSetList.innerHTML = `
    <article class="edit-set-card edit-cardio-card" data-edit-cardio-form>
      <div class="edit-cardio-head">
        <span>有酸素記録</span>
        <strong>${escapeHtml(workoutEditExerciseSelect.value || CARDIO_BODY_PART)}</strong>
      </div>
      <div class="edit-cardio-grid">
        <label class="edit-field">
          <span>時間</span>
          <input class="metric-number-input duration-direct-input" type="text" inputmode="numeric" data-edit-cardio-duration value="${escapeAttr(formatHms(durationSec))}" placeholder="00:00:00" />
        </label>
        <label class="edit-field">
          <span>${escapeHtml(config.distanceLabel)}</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="decimal" min="0" max="999" step="${escapeAttr(config.distanceStep)}" data-edit-cardio-distance value="${escapeAttr(distanceValue)}" placeholder="${escapeAttr(config.distancePlaceholder)}" data-numeric-assist data-numeric-label="${escapeAttr(config.distanceLabel)}" data-numeric-step="${escapeAttr(config.distanceStep)}" data-numeric-min="0" data-numeric-max="999" />
            <em>${escapeHtml(config.distanceUnit)}</em>
          </div>
        </label>
        <label class="edit-field">
          <span>${escapeHtml(config.speedLabel)}</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="decimal" min="0" max="300" step="${escapeAttr(config.speedStep)}" data-edit-cardio-speed value="${escapeAttr(speedValue)}" placeholder="${escapeAttr(config.speedPlaceholder)}" data-numeric-assist data-numeric-label="${escapeAttr(config.speedLabel)}" data-numeric-step="${escapeAttr(config.speedStep)}" data-numeric-min="0" data-numeric-max="300" />
            <em>${escapeHtml(config.speedUnit)}</em>
          </div>
        </label>
        <label class="edit-field">
          <span>カロリー</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="5000" step="1" data-edit-cardio-calories value="${escapeAttr(caloriesValue)}" placeholder="250" data-numeric-assist data-numeric-label="カロリー" data-numeric-step="1" data-numeric-min="0" data-numeric-max="5000" />
            <em>kcal</em>
          </div>
        </label>
        <label class="edit-field">
          <span>平均心拍</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="240" step="1" data-edit-cardio-avg-hr value="${escapeAttr(normalizeCardioNumber(current.avgHeartRate, 0))}" placeholder="130" data-numeric-assist data-numeric-label="平均心拍" data-numeric-step="1" data-numeric-min="0" data-numeric-max="240" />
            <em>bpm</em>
          </div>
        </label>
        <label class="edit-field">
          <span>最大心拍</span>
          <div class="unit-input-wrap">
            <input type="number" inputmode="numeric" min="0" max="240" step="1" data-edit-cardio-max-hr value="${escapeAttr(normalizeCardioNumber(current.maxHeartRate, 0))}" placeholder="160" data-numeric-assist data-numeric-label="最大心拍" data-numeric-step="1" data-numeric-min="0" data-numeric-max="240" />
            <em>bpm</em>
          </div>
        </label>
      </div>
      <label class="edit-field edit-cardio-memo">
        <span>メモ</span>
        <input type="text" data-edit-cardio-memo value="${escapeAttr(current.memo || "")}" placeholder="体感や負荷設定など" />
      </label>
    </article>
  `;

  const form = workoutEditSetList.querySelector("[data-edit-cardio-form]");
  bindDurationDirectInput(form.querySelector("[data-edit-cardio-duration]"), true);
}

function renderWorkoutEditSetList() {
  if (!workoutEditState?.session) return;
  if (isCardioBodyPart(workoutEditBodyPartSelect.value)) {
    addWorkoutEditSetBtn.classList.add("hidden");
    renderWorkoutEditCardioForm(workoutEditState.session.cardioData || {});
    return;
  }

  addWorkoutEditSetBtn.classList.remove("hidden");
  const setLogs = workoutEditState.session.setLogs?.length
    ? workoutEditState.session.setLogs
    : [{ setNo: 1, weight: "", reps: "", assist: false, workSec: 0, restSec: 0, memo: "", rm: "" }];

  workoutEditSetList.innerHTML = setLogs.map((log, index) => {
    const weight = log.weight || "";
    const reps = log.reps || "";
    const rm = calcEstimated1RM(weight, reps) || log.rm || "-";
    return `
      <article class="edit-set-card edit-set-card-compact" data-edit-set-index="${index}">
        <div class="edit-set-head compact-edit-set-head">
          <span>${index + 1}セット目</span>
          <button class="x-btn" type="button" data-remove-edit-set aria-label="セットを削除">×</button>
        </div>
        <div class="edit-compact-grid">
          <label class="edit-field">
            <span>重量</span>
            <input class="metric-number-input" type="number" inputmode="decimal" min="0" max="300" step="0.1" data-edit-weight value="${escapeAttr(formatWeightRollValue(weight))}" data-numeric-assist data-numeric-label="重量" data-numeric-step="0.1" data-numeric-min="0" data-numeric-max="300" />
          </label>
          <label class="edit-field">
            <span>回数</span>
            <input class="metric-number-input" type="number" inputmode="numeric" min="0" max="300" step="1" data-edit-reps value="${escapeAttr(formatRepsRollValue(reps))}" data-numeric-assist data-numeric-label="回数" data-numeric-step="1" data-numeric-min="0" data-numeric-max="300" />
          </label>
          <label class="edit-field">
            <span>実施</span>
            <input class="metric-number-input duration-direct-input" type="text" inputmode="numeric" data-edit-work-duration value="${escapeAttr(formatSeconds(log.workSec || 0))}" placeholder="00:00" />
          </label>
          <label class="edit-field">
            <span>休憩</span>
            <input class="metric-number-input duration-direct-input" type="text" inputmode="numeric" data-edit-rest-duration value="${escapeAttr(formatSeconds(log.restSec || 0))}" placeholder="00:00" />
          </label>
          <label class="edit-field edit-field-short edit-assist-compact">
            <span>補助</span>
            <input type="checkbox" data-edit-assist ${log.assist ? "checked" : ""} />
          </label>
          <div class="edit-rm-box" data-edit-rm>RM ${escapeHtml(rm)}</div>
        </div>
        <label class="edit-field edit-field-memo edit-memo-compact">
          <span>メモ</span>
          <input type="text" data-edit-memo value="${escapeAttr(log.memo || "")}" placeholder="メモ" />
        </label>
      </article>
    `;
  }).join("");

  workoutEditSetList.querySelectorAll("[data-edit-set-index]").forEach(card => {
    const updateRm = () => {
      const weight = card.querySelector("[data-edit-weight]").value;
      const reps = card.querySelector("[data-edit-reps]").value;
      card.querySelector("[data-edit-rm]").textContent = `RM ${calcEstimated1RM(weight, reps) || "-"}`;
    };
    card.querySelector("[data-edit-weight]").addEventListener("input", updateRm);
    card.querySelector("[data-edit-reps]").addEventListener("input", updateRm);
    card.querySelector("[data-edit-weight]").addEventListener("change", event => {
      event.target.value = formatWeightRollValue(event.target.value);
      updateRm();
    });
    card.querySelector("[data-edit-reps]").addEventListener("change", event => {
      event.target.value = formatRepsRollValue(event.target.value);
      updateRm();
    });
    bindDurationDirectInput(card.querySelector("[data-edit-work-duration]"));
    bindDurationDirectInput(card.querySelector("[data-edit-rest-duration]"));
    card.querySelector("[data-remove-edit-set]").addEventListener("click", () => {
      const draft = getWorkoutEditDraftFromForm();
      if (draft.session.setLogs.length <= 1) {
        alert("セットは1つ以上必要です。");
        return;
      }
      const index = Number(card.dataset.editSetIndex);
      draft.session.setLogs.splice(index, 1);
      draft.session.setLogs = draft.session.setLogs.map((log, idx) => ({ ...log, setNo: idx + 1 }));
      workoutEditState.session = draft.session;
      renderWorkoutEditSetList();
    });
  });
}

function openWorkoutEdit(dateKey, sessionId) {
  const sessions = getWorkoutSessions();
  const session = (sessions[dateKey] || []).find(item => item.id === sessionId);
  if (!session) {
    alert("編集対象の記録が見つかりません。");
    return;
  }

  workoutEditState = {
    dateKey,
    sessionId,
    session: deepCopy(session)
  };
  setWorkoutEditDateValue(dateKey);
  renderWorkoutEditBodyPartSelect(session.bodyPart || "");
  renderWorkoutEditExerciseSelect(session.exercise || "");
  renderWorkoutEditSetList();
  switchView("workoutEdit");
}

function addWorkoutEditSet() {
  if (!workoutEditState?.session) return;
  const draft = getWorkoutEditDraftFromForm();
  draft.session.setLogs.push({
    setNo: draft.session.setLogs.length + 1,
    weight: "",
    reps: "",
    assist: false,
    workSec: 0,
    restSec: 0,
    memo: "",
    rm: ""
  });
  workoutEditState.session = draft.session;
  renderWorkoutEditSetList();
}

function saveWorkoutEdit() {
  if (!workoutEditState?.session) return;
  const draft = getWorkoutEditDraftFromForm();
  const dateKey = draft.dateKey;
  const session = draft.session;

  if (!dateKey) {
    alert("日付を入力してください。");
    return;
  }
  if (!session.bodyPart || !session.exercise) {
    alert("部位とメニューを選択してください。");
    return;
  }
  if (isCardioSession(session)) {
    const cardioData = session.cardioData || {};
    const hasCardioRecord = Number(cardioData.durationSec || 0) > 0 ||
      Number(cardioData.distance || 0) > 0 ||
      Number(cardioData.speed || 0) > 0 ||
      Number(cardioData.calories || 0) > 0 ||
      Number(cardioData.avgHeartRate || 0) > 0 ||
      Number(cardioData.maxHeartRate || 0) > 0 ||
      !!String(cardioData.memo || "").trim();
    if (!hasCardioRecord) {
      alert("有酸素運動の記録を入力してください。");
      return;
    }
  } else if (!session.setLogs.length) {
    alert("セットを1つ以上入力してください。");
    return;
  }

  session.id = workoutEditState.sessionId;
  session.createdAt = session.createdAt || Date.now();
  if (isCardioSession(session)) {
    session.type = "cardio";
    session.setLogs = [];
    session.targetSets = 0;
  } else {
    session.setLogs = session.setLogs.map((log, index) => ({
      ...log,
      setNo: index + 1,
      rm: calcEstimated1RM(log.weight, log.reps)
    }));
    delete session.cardioData;
    if (session.type === "cardio") delete session.type;
  }

  const sessions = getWorkoutSessions();
  const oldDateKey = workoutEditState.dateKey;
  sessions[oldDateKey] = (sessions[oldDateKey] || []).filter(item => item.id !== workoutEditState.sessionId);
  if (!sessions[oldDateKey].length) delete sessions[oldDateKey];
  if (!sessions[dateKey]) sessions[dateKey] = [];
  sessions[dateKey].push(session);
  saveWorkoutSessions(sessions);

  workoutEditState = null;
  setWorkoutDate(dateKey);
  switchView("workout");
}

function renderSettingsBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const parts = Object.keys(masters);
  settingsBodyPartSelect.innerHTML = parts.map(part => (
    `<option value="${escapeAttr(part)}">${escapeHtml(part)}</option>`
  )).join("");
  if (selected && parts.includes(selected)) settingsBodyPartSelect.value = selected;
}

function addBodyPart() {
  const name = newBodyPartInput.value.trim();
  if (!name) {
    alert("部位名を入力してください。");
    return;
  }
  const masters = getWorkoutMasters();
  if (!masters[name]) masters[name] = [];
  saveWorkoutMasters(masters);
  newBodyPartInput.value = "";
  renderWorkoutBodyPartSelect(name);
  renderStatsBodyPartSelect(name);
  renderSettingsBodyPartSelect(name);
  renderWorkoutSettingsList();
}

function deleteBodyPart(part) {
  const masters = getWorkoutMasters();
  if (Object.keys(masters).length <= 1) {
    alert("部位は1つ以上必要です。");
    return;
  }
  delete masters[part];
  saveWorkoutMasters(masters);
  renderWorkoutBodyPartSelect();
  renderStatsBodyPartSelect();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
}

function addExerciseToPart(part, input) {
  const name = input.value.trim();
  if (!name) {
    alert("メニュー名を入力してください。");
    return;
  }
  const masters = getWorkoutMasters();
  if (!masters[part]) masters[part] = [];
  if (!masters[part].includes(name)) masters[part].push(name);
  saveWorkoutMasters(masters);
  renderWorkoutBodyPartSelect(part);
  renderStatsBodyPartSelect(part);
  renderWorkoutSettingsList();
}

function deleteExercise(part, exercise) {
  const masters = getWorkoutMasters();
  masters[part] = (masters[part] || []).filter(item => item !== exercise);
  saveWorkoutMasters(masters);
  renderWorkoutExerciseSelect();
  renderStatsExerciseSelect();
  renderWorkoutSettingsList();
}

function moveBodyPart(part, offset) {
  const masters = getWorkoutMasters();
  const parts = Object.keys(masters);
  const index = parts.indexOf(part);
  const nextIndex = index + offset;
  if (index < 0 || nextIndex < 0 || nextIndex >= parts.length) return;
  const [moved] = parts.splice(index, 1);
  parts.splice(nextIndex, 0, moved);
  const reordered = {};
  parts.forEach(name => {
    reordered[name] = masters[name];
  });
  saveWorkoutMasters(reordered);
  renderWorkoutBodyPartSelect(part);
  renderStatsBodyPartSelect(part);
  renderSettingsBodyPartSelect(part);
  renderWorkoutSettingsList();
}

function moveExercise(part, exercise, offset) {
  const masters = getWorkoutMasters();
  const items = [...(masters[part] || [])];
  const index = items.indexOf(exercise);
  const nextIndex = index + offset;
  if (index < 0 || nextIndex < 0 || nextIndex >= items.length) return;
  const [moved] = items.splice(index, 1);
  items.splice(nextIndex, 0, moved);
  masters[part] = items;
  saveWorkoutMasters(masters);
  renderWorkoutBodyPartSelect(part);
  renderStatsBodyPartSelect(part);
  renderSettingsBodyPartSelect(part);
  renderWorkoutSettingsList();
}

function renderWorkoutSettingsList() {
  const masters = getWorkoutMasters();
  const parts = Object.keys(masters);
  if (!parts.length) {
    workoutSettingsList.innerHTML = `<p class="empty-text">部位がありません。</p>`;
    return;
  }

  workoutSettingsList.innerHTML = parts.map(part => `
    <article class="setting-item" data-body-part="${escapeAttr(part)}">
      <div class="setting-item-top workout-setting-head">
        <div class="setting-item-title">${escapeHtml(part)}</div>
        <div class="setting-item-actions">
          <button class="order-btn" type="button" data-move-bodypart="-1" aria-label="上へ移動">↑</button>
          <button class="order-btn" type="button" data-move-bodypart="1" aria-label="下へ移動">↓</button>
          <button class="x-btn bodypart-x-btn" type="button" data-delete-bodypart aria-label="部位を削除">×</button>
        </div>
      </div>
      <div class="menu-list-wrap">
        ${(masters[part] || []).map(ex => `
          <div class="menu-line" data-exercise="${escapeAttr(ex)}">
            <span class="menu-line-text">${escapeHtml(ex)}</span>
            <div class="menu-line-actions">
              <button class="order-btn" type="button" data-move-exercise="-1" aria-label="上へ移動">↑</button>
              <button class="order-btn" type="button" data-move-exercise="1" aria-label="下へ移動">↓</button>
              <button class="x-btn" type="button" data-delete-exercise aria-label="メニューを削除">×</button>
            </div>
          </div>
        `).join("") || `<p class="empty-text">メニューがありません。</p>`}
      </div>
      <div class="inline-add-row">
        <input type="text" data-new-exercise-for-part placeholder="例: ダンベルカール" />
        <button class="sub-btn compact-btn" type="button" data-add-exercise-for-part>追加</button>
      </div>
    </article>
  `).join("");

  workoutSettingsList.querySelectorAll("[data-body-part]").forEach(card => {
    const part = card.dataset.bodyPart;
    card.querySelector("[data-delete-bodypart]").addEventListener("click", () => deleteBodyPart(part));
    card.querySelectorAll("[data-move-bodypart]").forEach(button => {
      button.addEventListener("click", () => moveBodyPart(part, Number(button.dataset.moveBodypart)));
    });
    card.querySelector("[data-add-exercise-for-part]").addEventListener("click", () => {
      addExerciseToPart(part, card.querySelector("[data-new-exercise-for-part]"));
    });
    card.querySelectorAll("[data-delete-exercise]").forEach(button => {
      const row = button.closest("[data-exercise]");
      button.addEventListener("click", () => deleteExercise(part, row.dataset.exercise));
    });
    card.querySelectorAll("[data-move-exercise]").forEach(button => {
      const row = button.closest("[data-exercise]");
      button.addEventListener("click", () => moveExercise(part, row.dataset.exercise, Number(button.dataset.moveExercise)));
    });
  });
}

function addExercise() {
  addExerciseToPart(settingsBodyPartSelect.value, newExerciseInput);
  newExerciseInput.value = "";
}

function resolveThemeSelectionThemeId(index, saveKey, presets = CONTENT_THEME_PRESETS) {
  return presets[index]?.id || presets[0]?.id || SITE_THEME_PRESETS[0].id;
}

function isThemeButtonActive(index, currentThemeId, saveKey, presets = CONTENT_THEME_PRESETS) {
  const selectedThemeId = resolveThemeSelectionThemeId(index, saveKey, presets);
  return currentThemeId === selectedThemeId;
}

function renderThemePresetButtons(container, currentThemeId, labels, saveKey, previewType, presets = CONTENT_THEME_PRESETS) {
  if (!container) return;
  container.innerHTML = presets.map((theme, index) => {
    const resolvedPreviewType = previewType === "site" ? "site" : previewType;
    const selectedThemeId = resolveThemeSelectionThemeId(index, saveKey, presets);
    return `
    <button class="theme-preset-btn ${isThemeButtonActive(index, currentThemeId, saveKey, presets) ? "active" : ""}" type="button" title="${escapeAttr(theme.name)}" aria-label="${escapeAttr(theme.name)}" data-theme-id="${escapeAttr(selectedThemeId)}" data-theme-key="${escapeAttr(saveKey)}">
      ${buildThemePreviewMarkup(theme, resolvedPreviewType)}
    </button>
  `;
  }).join("");
  container.querySelectorAll("[data-theme-id]").forEach(button => {
    button.addEventListener("click", () => {
      saveThemeSettings({ [button.dataset.themeKey]: button.dataset.themeId });
    });
  });
}

function renderThemeSettings() {
  const { siteThemeId, calendarThemeId, workoutThemeId } = getThemeSettings();
  renderThemePresetButtons(siteThemePresetList, siteThemeId, [], "siteThemeId", "site", SITE_THEME_PRESETS);
  renderThemePresetButtons(calendarThemePresetList, calendarThemeId, [], "calendarThemeId", "calendar", CONTENT_THEME_PRESETS);
  renderThemePresetButtons(workoutThemePresetList, workoutThemeId, [], "workoutThemeId", "workout", CONTENT_THEME_PRESETS);
}

function showSettingsSection(sectionName) {
  calendarSettingsSection.classList.toggle("hidden", sectionName !== "calendar");
  workoutSettingsSection.classList.toggle("hidden", sectionName !== "workout");
  themeSettingsSection.classList.toggle("hidden", sectionName !== "theme");
  transferSettingsSection.classList.toggle("hidden", sectionName !== "transfer");
  passwordSettingsSection.classList.toggle("hidden", sectionName !== "password");
  showCalendarSettingsBtn.classList.toggle("active-tab", sectionName === "calendar");
  showWorkoutSettingsBtn.classList.toggle("active-tab", sectionName === "workout");
  showThemeSettingsBtn.classList.toggle("active-tab", sectionName === "theme");
  showTransferSettingsBtn.classList.toggle("active-tab", sectionName === "transfer");
  showPasswordSettingsBtn.classList.toggle("active-tab", sectionName === "password");
}

function showCalendarSettings() {
  showSettingsSection("calendar");
}

function showWorkoutSettings() {
  showSettingsSection("workout");
}

function showThemeSettings() {
  renderThemeSettings();
  showSettingsSection("theme");
}

function showTransferSettings() {
  showSettingsSection("transfer");
}

function showPasswordSettings() {
  renderPasswordSettings();
  showSettingsSection("password");
}

function renderStatsBodyPartSelect(selected = "") {
  const masters = getWorkoutMasters();
  const parts = Object.keys(masters);
  statsBodyPartSelect.innerHTML = parts.map(part => (
    `<option value="${escapeAttr(part)}">${escapeHtml(part)}</option>`
  )).join("");
  if (selected && parts.includes(selected)) statsBodyPartSelect.value = selected;
  renderStatsExerciseSelect();
}

function renderStatsExerciseSelect(selected = "") {
  const masters = getWorkoutMasters();
  const bodyPart = statsBodyPartSelect.value || Object.keys(masters)[0];
  const exercises = masters[bodyPart] || [];
  statsExerciseSelect.innerHTML = exercises.map(ex => (
    `<option value="${escapeAttr(ex)}">${escapeHtml(ex)}</option>`
  )).join("");
  if (selected && exercises.includes(selected)) statsExerciseSelect.value = selected;
}

function collectWorkoutStats(days) {
  const bodyPart = statsBodyPartSelect.value;
  const exercise = statsExerciseSelect.value;
  const sessions = getWorkoutSessions();
  const end = new Date();
  const start = addDays(end, -(days - 1));
  const map = new Map();

  for (let d = new Date(start); d <= end; d = addDays(d, 1)) {
    map.set(formatDateKey(d), 0);
  }

  Object.entries(sessions).forEach(([dateKey, items]) => {
    if (!map.has(dateKey)) return;
    (items || []).forEach(item => {
      if (item.bodyPart !== bodyPart || item.exercise !== exercise) return;
      if (isCardioSession(item)) {
        const cardio = item.cardioData || {};
        const cardioValue = Number(cardio.distance || 0) || (Number(cardio.durationSec || 0) / 60);
        map.set(dateKey, Math.max(map.get(dateKey), cardioValue));
        return;
      }
      const topRm = Math.max(...(item.setLogs || []).map(log => Number(log.rm || 0)), 0);
      const volume = calcWorkoutTotalVolume(item.setLogs || []);
      map.set(dateKey, Math.max(map.get(dateKey), topRm || volume));
    });
  });

  return Array.from(map.entries()).map(([date, value]) => ({ date, value }));
}

function drawStats(days) {
  const ctx = statsCanvas.getContext("2d");
  const data = collectWorkoutStats(days);
  const w = statsCanvas.width;
  const h = statsCanvas.height;
  const themeStyles = getComputedStyle(document.documentElement);
  const chartBackground = themeStyles.getPropertyValue("--workout-fill").trim() || "#ffffff";
  const chartAxis = themeStyles.getPropertyValue("--workout-frame").trim() || "#cbd5e1";
  const chartGrid = mixHexColors(chartAxis, chartBackground, 0.38);
  const chartText = themeStyles.getPropertyValue("--workout-text").trim() || "#111827";
  const chartSubtext = themeStyles.getPropertyValue("--workout-subtext").trim() || "#64748b";
  const chartAccent = themeStyles.getPropertyValue("--workout-button-bg").trim() || "#2563eb";
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = chartBackground;
  ctx.fillRect(0, 0, w, h);

  const left = 52;
  const right = 20;
  const top = 24;
  const bottom = 46;
  const chartW = w - left - right;
  const chartH = h - top - bottom;
  const maxValue = Math.max(...data.map(point => point.value), 1);

  ctx.strokeStyle = chartAxis;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, top + chartH);
  ctx.lineTo(left + chartW, top + chartH);
  ctx.stroke();

  ctx.fillStyle = chartSubtext;
  ctx.font = "12px sans-serif";
  for (let i = 0; i <= 4; i++) {
    const ratio = i / 4;
    const y = top + chartH * ratio;
    const label = (maxValue * (1 - ratio)).toFixed(0);
    ctx.fillText(label, 8, y + 4);
    ctx.strokeStyle = chartGrid;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(left + chartW, y);
    ctx.stroke();
  }

  const stepX = data.length > 1 ? chartW / (data.length - 1) : chartW;
  ctx.strokeStyle = chartAccent;
  ctx.lineWidth = 2;
  ctx.beginPath();
  data.forEach((point, index) => {
    const x = left + stepX * index;
    const y = top + chartH - (point.value / maxValue) * chartH;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  data.forEach((point, index) => {
    const x = left + stepX * index;
    const y = top + chartH - (point.value / maxValue) * chartH;
    ctx.fillStyle = chartAccent;
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    const shouldShowDateLabel = days <= 7 || index % 5 === 0;
    if (shouldShowDateLabel) {
      ctx.fillStyle = chartSubtext;
      ctx.fillText(point.date.slice(5), x - 14, top + chartH + 20);
    }
    if (point.value > 0) {
      ctx.fillStyle = chartText;
      ctx.fillText(point.value.toFixed(1), x - 14, y - 10);
    }
  });

  const nonZero = data.filter(point => point.value > 0);
  const latest = nonZero[nonZero.length - 1];
  const best = Math.max(...data.map(point => point.value), 0);
  statsSummary.textContent = `期間: ${days === 7 ? "1週間" : "1か月"} / 最新: ${latest ? latest.value.toFixed(1) : "-"} / 最高: ${best ? best.toFixed(1) : "-"}`;
}

function updateLoginView() {
  const loggedIn = isAuthenticated();
  const currentUsername = getCurrentUsername();
  document.body.classList.toggle("auth-locked", !loggedIn);
  if (loginView) loginView.classList.toggle("hidden", loggedIn);
  if (!loginTitle || !loginDescription || !loginSubmitBtn) return;

  const isRegisterMode = authMode === "register";
  loginTitle.textContent = isRegisterMode ? "新規登録" : "ログイン";
  loginDescription.textContent = "";
  loginSubmitBtn.textContent = isRegisterMode ? "登録して開始" : "ログイン";
  loginDescription.classList.add("hidden");
  registerNicknameWrap?.classList.toggle("hidden", !isRegisterMode);
  registerPasswordConfirmWrap?.classList.toggle("hidden", !isRegisterMode);
  loginAdminNote?.classList.add("hidden");
  showLoginModeBtn?.classList.toggle("active-tab", !isRegisterMode);
  showRegisterModeBtn?.classList.toggle("active-tab", isRegisterMode);
  loginPasswordInput.autocomplete = isRegisterMode ? "new-password" : "current-password";
  if (registerPasswordConfirmInput) {
    registerPasswordConfirmInput.autocomplete = isRegisterMode ? "new-password" : "off";
  }
  resetPasswordFieldVisibility();
  renderPasswordSettings();

  if (!loggedIn) {
    if (!loginNameInput.value && currentUsername) {
      loginNameInput.value = currentUsername;
    }
    loginPasswordInput.value = "";
    if (registerNicknameInput && !isRegisterMode) registerNicknameInput.value = "";
    if (registerPasswordConfirmInput) registerPasswordConfirmInput.value = "";
    if (!isRegisterMode) requestAnimationFrame(() => selectInputText(loginPasswordInput));
  }
}

function changeCurrentUserPassword() {
  const username = getCurrentUsername();
  if (!username || isAdminUser(username)) return;

  const currentPassword = String(currentPasswordInput?.value || "");
  const nextPassword = String(newPasswordInput?.value || "");
  const confirmPassword = String(confirmNewPasswordInput?.value || "");
  if (!currentPassword || !nextPassword || !confirmPassword) {
    alert("現在のパスワードと新しいパスワードをすべて入力してください。");
    return;
  }

  const accounts = getUserAccounts();
  const account = accounts[username];
  if (!account || String(account.password || "") !== currentPassword) {
    alert("現在のパスワードが違います。");
    currentPasswordInput?.focus();
    return;
  }
  if (nextPassword !== confirmPassword) {
    alert("新しいパスワードが一致しません。");
    confirmNewPasswordInput?.focus();
    return;
  }

  accounts[username] = {
    ...account,
    password: nextPassword
  };
  saveUserAccounts(accounts);
  clearPasswordSettingsForm();
  alert("パスワードを変更しました。");
}

function submitLogin() {
  const username = normalizeUsername(loginNameInput.value);
  const nickname = normalizeNickname(registerNicknameInput?.value, username);
  const password = String(loginPasswordInput.value || "");
  const passwordConfirm = String(registerPasswordConfirmInput?.value || "");

  if (!username || !password) {
    alert("ユーザー名とパスワードを入力してください。");
    return;
  }

  const accounts = getUserAccounts();
  if (authMode === "register") {
    if (accounts[username]) {
      alert("そのユーザー名はすでに使われています。");
      loginNameInput.focus();
      return;
    }
    if (password !== passwordConfirm) {
      alert("確認用パスワードが一致しません。");
      registerPasswordConfirmInput?.focus();
      return;
    }
    accounts[username] = createStoredUser(username, password, Date.now(), nickname);
    saveUserAccounts(accounts);
    initializeUserDataStorage(username);
    setAuthenticated(true, username);
    refreshUserScopedUi();
    switchView(isAdminUser(username) ? "workout" : "calendar");
    return;
  }

  const account = accounts[username];
  if (!account || String(account.password || "") !== password) {
    alert("ユーザー名かパスワードが違います。");
    loginPasswordInput.value = "";
    selectInputText(loginPasswordInput);
    return;
  }

  initializeUserDataStorage(username);
  setAuthenticated(true, username);
  refreshUserScopedUi();
  switchView(isAdminUser(username) ? "workout" : "calendar");
}

function bindEvents() {
  loginSubmitBtn.addEventListener("click", submitLogin);
  showLoginModeBtn?.addEventListener("click", () => setAuthMode("login"));
  showRegisterModeBtn?.addEventListener("click", () => setAuthMode("register"));
  toggleLoginPasswordBtn?.addEventListener("click", () => togglePasswordFieldVisibility(loginPasswordInput, toggleLoginPasswordBtn));
  toggleRegisterPasswordConfirmBtn?.addEventListener("click", () => togglePasswordFieldVisibility(registerPasswordConfirmInput, toggleRegisterPasswordConfirmBtn));
  [loginNameInput, registerNicknameInput, loginPasswordInput, registerPasswordConfirmInput].filter(Boolean).forEach(input => {
    input.addEventListener("keydown", event => {
      if (event.key === "Enter") submitLogin();
    });
  });

  goCalendarBtnHeader.addEventListener("click", () => switchView("calendar"));
  goWorkoutBtnHeader.addEventListener("click", () => switchView("workout"));
  goSettingsBtnHeader.addEventListener("click", () => switchView("settings"));

  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });
  todayMonthBtn.addEventListener("click", goCalendarToday);

  if (miniPrevMonthBtn && miniNextMonthBtn) {
    miniPrevMonthBtn.addEventListener("click", () => {
      miniMonth--;
      if (miniMonth < 0) {
        miniMonth = 11;
        miniYear--;
      }
      renderMiniCalendar();
    });

    miniNextMonthBtn.addEventListener("click", () => {
      miniMonth++;
      if (miniMonth > 11) {
        miniMonth = 0;
        miniYear++;
      }
      renderMiniCalendar();
    });
  }

  workoutMiniPrevMonthBtn.addEventListener("click", () => {
    workoutMiniMonth--;
    if (workoutMiniMonth < 0) {
      workoutMiniMonth = 11;
      workoutMiniYear--;
    }
    renderWorkoutMiniCalendar();
    renderWorkoutDashboard();
  });

  workoutMiniNextMonthBtn.addEventListener("click", () => {
    workoutMiniMonth++;
    if (workoutMiniMonth > 11) {
      workoutMiniMonth = 0;
      workoutMiniYear++;
    }
    renderWorkoutMiniCalendar();
    renderWorkoutDashboard();
  });
  workoutTodayBtn.addEventListener("click", goWorkoutToday);

  goInputBtn.addEventListener("click", openScheduleCreate);
  backToCalendarFromInputBtn.addEventListener("click", () => {
    scheduleEditState = null;
    resetSchedulePhotos();
    saveRecordBtn.textContent = "保存する";
    switchView("calendar");
  });
  backToCalendarFromWorkoutBtn.addEventListener("click", () => switchView("calendar"));
  backToCalendarFromSettingsBtn.addEventListener("click", () => switchView("calendar"));
  goWorkoutInputBtn.addEventListener("click", () => {
    setWorkoutDate(selectedDate);
    switchView("workoutInput");
  });
  backToWorkoutFromInputBtn.addEventListener("click", () => switchView("workout"));
  goWorkoutStatsBtn.addEventListener("click", () => switchView("workoutStats"));
  backToWorkoutFromStatsBtn.addEventListener("click", () => switchView("workout"));

  setNowStartBtn.addEventListener("click", () => setNowToInput(startDateTimeInput));
  setNowEndBtn.addEventListener("click", () => setNowToInput(endDateTimeInput));
  [startDateTimeInput, endDateTimeInput].forEach(input => {
    input.addEventListener("input", () => normalizeDateTimeYearInput(input));
    input.addEventListener("change", () => normalizeDateTimeYearInput(input));
  });
  categorySelect.addEventListener("change", () => updateContentTemplateIfEmpty(true));
  calendarPhotoInput.addEventListener("change", handleSchedulePhotoInput);
  saveRecordBtn.addEventListener("click", addSchedule);
  addCategoryBtn.addEventListener("click", addCategory);

  bodyPartSelect.addEventListener("change", () => {
    saveCurrentSetDraft();
    renderWorkoutExerciseSelect();
    resetWorkoutState();
    updateWorkoutInputMode();
  });
  exerciseSelect.addEventListener("change", () => {
    saveCurrentSetDraft();
    updateWorkoutInputMode(getCardioFormData());
  });
  workoutMainBtn.addEventListener("click", workoutMainAction);
  workoutResetBtn.addEventListener("click", () => {
    applyWorkoutDefaultsToInputs();
    resetWorkoutState();
    updateWorkoutInputMode();
  });
  saveWorkoutBtn.addEventListener("click", () => saveWorkoutSession(false));
  loadPreviousWorkoutBtn.addEventListener("click", loadPreviousWorkout);
  backToWorkoutFromEditBtn.addEventListener("click", () => switchView("workout"));
  workoutEditDatePickerBtn.addEventListener("change", () => {
    normalizeDateYearInput(workoutEditDatePickerBtn);
    if (workoutEditDatePickerBtn.value) setWorkoutEditDateValue(workoutEditDatePickerBtn.value);
  });
  workoutEditDatePickerBtn.addEventListener("input", () => normalizeDateYearInput(workoutEditDatePickerBtn));
  workoutEditBodyPartSelect.addEventListener("change", () => {
    const draft = getWorkoutEditDraftFromForm();
    workoutEditState.session = draft.session;
    renderWorkoutEditExerciseSelect();
    renderWorkoutEditSetList();
  });
  workoutEditExerciseSelect.addEventListener("change", () => {
    const draft = getWorkoutEditDraftFromForm();
    workoutEditState.session = draft.session;
    renderWorkoutEditSetList();
  });
  addWorkoutEditSetBtn.addEventListener("click", addWorkoutEditSet);
  saveWorkoutEditBtn.addEventListener("click", saveWorkoutEdit);
  rollPickerOverlay.addEventListener("click", event => {
    if (event.target === rollPickerOverlay) closeRollPicker();
  });

  workoutInputDateChangeBtn.addEventListener("click", openWorkoutInputDateRollPicker);
  setWorkoutDateTodayBtn.addEventListener("click", goWorkoutToday);

  workoutDatePickerNative.addEventListener("change", () => {
    normalizeDateYearInput(workoutDatePickerNative);
    if (workoutDatePickerNative.value) setWorkoutDate(workoutDatePickerNative.value);
  });
  workoutDatePickerNative.addEventListener("input", () => normalizeDateYearInput(workoutDatePickerNative));

  workoutDateInput.addEventListener("change", () => {
    normalizeDateYearInput(workoutDateInput);
    if (workoutDateInput.value) setWorkoutDate(workoutDateInput.value);
  });

  addBodyPartBtn.addEventListener("click", addBodyPart);
  addExerciseBtn.addEventListener("click", addExercise);
  saveWorkoutDefaultsBtn.addEventListener("click", saveWorkoutDefaultSettings);
  showCalendarSettingsBtn.addEventListener("click", showCalendarSettings);
  showWorkoutSettingsBtn.addEventListener("click", showWorkoutSettings);
  showThemeSettingsBtn.addEventListener("click", showThemeSettings);
  showTransferSettingsBtn.addEventListener("click", showTransferSettings);
  showPasswordSettingsBtn?.addEventListener("click", showPasswordSettings);
  logoutBtn.addEventListener("click", logoutUser);
  adminViewUserSelect?.addEventListener("change", () => setAdminViewUser(adminViewUserSelect.value));
  toggleCurrentPasswordBtn?.addEventListener("click", () => togglePasswordFieldVisibility(currentPasswordInput, toggleCurrentPasswordBtn));
  toggleNewPasswordBtn?.addEventListener("click", () => togglePasswordFieldVisibility(newPasswordInput, toggleNewPasswordBtn));
  toggleConfirmNewPasswordBtn?.addEventListener("click", () => togglePasswordFieldVisibility(confirmNewPasswordInput, toggleConfirmNewPasswordBtn));
  saveUserNicknameBtn?.addEventListener("click", saveCurrentUserNickname);
  changePasswordBtn?.addEventListener("click", changeCurrentUserPassword);
  exportCsvBtn.addEventListener("click", exportSelectedCsv);
  exportZipBtn.addEventListener("click", () => {
    if (dataTransferTypeSelect.value !== "calendar") {
      alert("ZIPエクスポートは写真付き予定記録用です。対象を予定にしてください。");
      return;
    }
    exportCalendarZip();
  });
  importCsvBtn.addEventListener("click", () => importCsvInput.click());
  importCsvInput.addEventListener("change", () => importSelectedCsv(importCsvInput.files?.[0]));
  resetCalendarDataBtn.addEventListener("click", () => confirmAndResetData("calendar"));
  resetWorkoutDataBtn.addEventListener("click", () => confirmAndResetData("workout"));
  resetAllDataBtn.addEventListener("click", () => confirmAndResetData("all"));

  statsBodyPartSelect.addEventListener("change", () => {
    renderStatsExerciseSelect();
    drawStats(7);
  });
  statsExerciseSelect.addEventListener("change", () => drawStats(7));
  showWeekStatsBtn.addEventListener("click", () => drawStats(7));
  showMonthStatsBtn.addEventListener("click", () => drawStats(30));
}

function init() {
  applyThemeSettings();
  renderCategorySelect();
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();

  applyWorkoutDefaultsToInputs();
  workoutDateInput.value = selectedDate;
  updateWorkoutInputTargetDateLabel();
  renderWorkoutBodyPartSelect();
  renderWorkoutMiniCalendar();
  renderWorkoutHistory();
  updateWorkoutInputMode();
  renderWorkoutLogs();

  renderCategorySettingsList();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderWorkoutDefaultSettingsInputs();
  renderStatsBodyPartSelect();

  setDefaultDateTimes();
  initNumericInputAssist();
  bindEvents();
  switchView("calendar");
  updateLoginView();
}

window.deleteSchedule = deleteSchedule;
window.deleteWorkoutSession = deleteWorkoutSession;

init();

