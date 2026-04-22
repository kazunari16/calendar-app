const STORAGE_SCHEDULE_KEY = "memoryCalendarSchedules_v6";
const STORAGE_CATEGORY_KEY = "memoryCalendarCategories_v6";
const STORAGE_WORKOUT_MASTER_KEY = "memoryCalendarWorkoutMasters_v3";
const STORAGE_WORKOUT_SESSION_KEY = "memoryCalendarWorkoutSessions_v3";
const STORAGE_WORKOUT_UI_SETTINGS_KEY = "memoryCalendarWorkoutUiSettings_v1";

const DEFAULT_TEMPLATE = "【大項目】\n- \n\n【小項目】\n- \n\n【内容】\n- ";

const DEFAULT_CATEGORIES = [
  { id: createId(), name: "業務用", color: "#2563eb", template: DEFAULT_TEMPLATE },
  { id: createId(), name: "投稿用", color: "#7c3aed", template: DEFAULT_TEMPLATE },
  { id: createId(), name: "副業用", color: "#059669", template: DEFAULT_TEMPLATE }
];

const DEFAULT_WORKOUT_MASTERS = {
  "肩": ["ショルダープレス", "サイドレイズ"],
  "腕": ["ダンベルカール", "トライセプスエクステンション"],
  "胸": ["ベンチプレス", "ダンベルフライ"],
  "腹筋": ["クランチ", "レッグレイズ"],
  "背中": ["ラットプルダウン", "デッドリフト"],
  "お尻": ["ヒップスラスト", "ブルガリアンスクワット"],
  "脚": ["スクワット", "レッグプレス"]
};

const DEFAULT_WORKOUT_UI_SETTINGS = {
  defaultSets: 3,
  defaultRestSec: 60
};

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
  "閼・": "脚"
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
const saveRecordBtn = $("saveRecordBtn");

const backToCalendarFromWorkoutBtn = $("backToCalendarFromWorkoutBtn");
const goWorkoutInputBtn = $("goWorkoutInputBtn");
const goWorkoutStatsBtn = $("goWorkoutStatsBtn");
const workoutDateInput = $("workoutDate");
const workoutMiniMonthLabel = $("workoutMiniMonthLabel");
const workoutMiniCalendarGrid = $("workoutMiniCalendarGrid");
const workoutMiniPrevMonthBtn = $("workoutMiniPrevMonthBtn");
const workoutMiniNextMonthBtn = $("workoutMiniNextMonthBtn");
const workoutDashboard = $("workoutDashboard");
const workoutHistoryList = $("workoutHistoryList");
const workoutItemCount = $("workoutItemCount");

const backToWorkoutFromInputBtn = $("backToWorkoutFromInputBtn");
const workoutInputTargetDateLabel = $("workoutInputTargetDateLabel");
const workoutInputDateChangeBtn = $("workoutInputDateChangeBtn");
const workoutDatePickerNative = $("workoutDatePickerNative");
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
const calendarSettingsSection = $("calendarSettingsSection");
const workoutSettingsSection = $("workoutSettingsSection");
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
let activeRollPickerApply = null;

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

function getCategories() {
  const parsed = readStorage(STORAGE_CATEGORY_KEY, null);
  if (!Array.isArray(parsed) || parsed.length === 0) {
    const defaults = deepCopy(DEFAULT_CATEGORIES);
    writeStorage(STORAGE_CATEGORY_KEY, defaults);
    return defaults;
  }

  const normalized = parsed.map((item, index) => {
    const fallback = DEFAULT_CATEGORIES[index] || DEFAULT_CATEGORIES[0];
    const name = CATEGORY_NAME_REPAIRS[item?.name] || item?.name || fallback.name;
    const template = item?.template && !item.template.includes("縲") ? item.template : DEFAULT_TEMPLATE;
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
  writeStorage(STORAGE_CATEGORY_KEY, data);
}

function getSchedules() {
  const parsed = readStorage(STORAGE_SCHEDULE_KEY, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}

function saveSchedules(data) {
  writeStorage(STORAGE_SCHEDULE_KEY, data);
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
  const parsed = readStorage(STORAGE_WORKOUT_MASTER_KEY, null);
  const normalized = normalizeWorkoutMasters(parsed);
  if (!parsed) writeStorage(STORAGE_WORKOUT_MASTER_KEY, normalized);
  return normalized;
}

function saveWorkoutMasters(data) {
  writeStorage(STORAGE_WORKOUT_MASTER_KEY, normalizeWorkoutMasters(data));
}

function getWorkoutSessions() {
  const parsed = readStorage(STORAGE_WORKOUT_SESSION_KEY, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}

function saveWorkoutSessions(data) {
  writeStorage(STORAGE_WORKOUT_SESSION_KEY, data);
}

function getWorkoutUiSettings() {
  const parsed = readStorage(STORAGE_WORKOUT_UI_SETTINGS_KEY, DEFAULT_WORKOUT_UI_SETTINGS);
  const defaultSets = Math.max(1, Number(parsed?.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets));
  const defaultRestSec = Math.max(0, Number(parsed?.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec));
  return { defaultSets, defaultRestSec };
}

function saveWorkoutUiSettings(data) {
  const normalized = {
    defaultSets: Math.max(1, Number(data.defaultSets || DEFAULT_WORKOUT_UI_SETTINGS.defaultSets)),
    defaultRestSec: Math.max(0, Number(data.defaultRestSec ?? DEFAULT_WORKOUT_UI_SETTINGS.defaultRestSec))
  };
  writeStorage(STORAGE_WORKOUT_UI_SETTINGS_KEY, normalized);
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
  bindRollDirectInputs();
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
    <div class="roll-column">
      <span>kg</span>
      <select id="rollWeightIntegerSelect" class="roll-select" size="5"></select>
    </div>
    <div class="roll-column">
      <span>小数</span>
      <select id="rollWeightDecimalSelect" class="roll-select" size="5"></select>
    </div>
  `, () => {
    const kg = Number(rollPickerBody.querySelector("#rollWeightIntegerSelect").value || 0);
    const decimal = Number(rollPickerBody.querySelector("#rollWeightDecimalSelect").value || 0);
    onApply((kg + decimal / 10).toFixed(1));
  });

  setSelectOptions(rollPickerBody.querySelector("#rollWeightIntegerSelect"), rangeOptions(0, 300), integerValue);
  setSelectOptions(rollPickerBody.querySelector("#rollWeightDecimalSelect"), rangeOptions(0, 9), decimalValue);
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

function setWorkoutSetCount(value) {
  const nextValue = Math.max(1, Math.floor(Number(value || 1)));
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

function getCalendarCells(year, month) {
  const first = new Date(year, month, 1);
  const start = addDays(first, -first.getDay());
  return Array.from({ length: 42 }, (_, idx) => addDays(start, idx));
}

function getCategoryById(id) {
  return getCategories().find(item => item.id === id);
}

function updateAppViewTitle(viewName) {
  if (viewName === "workout" || viewName === "workoutInput" || viewName === "workoutEdit" || viewName === "workoutStats") {
    appViewTitle.textContent = "筋トレ";
  } else if (viewName === "settings") {
    appViewTitle.textContent = "設定";
  } else {
    appViewTitle.textContent = "カレンダー";
  }
}

function switchView(viewName) {
  updateAppViewTitle(viewName);
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
    buildSetForms();
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
}

function setSelectedDate(dateKey) {
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  renderCalendar();
  renderScheduleList();
}

function renderCalendar() {
  monthLabel.textContent = `${currentYear}年${currentMonth + 1}月`;
  const schedules = getSchedules();
  const categories = getCategories();
  const categoryMap = new Map(categories.map(item => [item.id, item]));
  const todayKey = formatDateKey(new Date());

  calendarGrid.innerHTML = getCalendarCells(currentYear, currentMonth).map(dateObj => {
    const dateKey = formatDateKey(dateObj);
    const dayItems = schedules[dateKey] || [];
    const dotHtml = dayItems.slice(0, 4).map(item => {
      const category = categoryMap.get(item.categoryId);
      const color = item.color || category?.color || "#2563eb";
      return `<span class="event-dot" style="background:${escapeAttr(color)}"></span>`;
    }).join("");

    const classes = [
      "day-cell",
      dateObj.getMonth() !== currentMonth ? "other-month" : "",
      dateKey === todayKey ? "today" : "",
      dateKey === selectedDate ? "selected" : ""
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateKey}">
        <div class="day-number">${dateObj.getDate()}</div>
        ${dayItems.length ? `<div class="day-count">${dayItems.length}</div>` : ""}
        <div class="event-dot-wrap">${dotHtml}</div>
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
  const schedules = getSchedules();
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
  categorySelect.innerHTML = categories.map(item => (
    `<option value="${escapeAttr(item.id)}">${escapeHtml(item.name)}</option>`
  )).join("");

  if (selectedId && categories.some(item => item.id === selectedId)) {
    categorySelect.value = selectedId;
  }
}

function updateContentTemplateIfEmpty(force = false) {
  const category = getCategoryById(categorySelect.value);
  if (!category) return;
  if (force || !contentInput.value.trim()) {
    contentInput.value = category.template || DEFAULT_TEMPLATE;
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

function openScheduleCreate() {
  scheduleEditState = null;
  renderCategorySelect();
  titleInput.value = "";
  contentInput.value = "";
  setDefaultDateTimes();
  saveRecordBtn.textContent = "保存する";
  updateContentTemplateIfEmpty(false);
  switchView("input");
}

function openScheduleEdit(dateKey, id) {
  const schedules = getSchedules();
  const item = (schedules[dateKey] || []).find(schedule => schedule.id === id);
  if (!item) return;

  scheduleEditState = { dateKey, id };
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  renderCalendar();
  renderCategorySelect(item.categoryId);
  titleInput.value = item.title || "";
  contentInput.value = item.content || "";
  startDateTimeInput.value = item.start || `${dateKey}T00:00`;
  endDateTimeInput.value = item.end || `${dateKey}T00:00`;
  normalizeDateTimeYearInput(startDateTimeInput);
  normalizeDateTimeYearInput(endDateTimeInput);
  saveRecordBtn.textContent = "編集を保存";
  switchView("input");
}

function addSchedule() {
  const category = getCategoryById(categorySelect.value) || getCategories()[0];
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const start = startDateTimeInput.value;
  const end = endDateTimeInput.value;
  const dateKey = start ? start.slice(0, 10) : selectedDate;

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
    createdAt: Date.now()
  };

  if (scheduleEditState) {
    const oldDateKey = scheduleEditState.dateKey;
    const original = (schedules[oldDateKey] || []).find(item => item.id === scheduleEditState.id);
    nextItem.createdAt = original?.createdAt || nextItem.createdAt;
    schedules[oldDateKey] = (schedules[oldDateKey] || []).filter(item => item.id !== scheduleEditState.id);
    if (!schedules[oldDateKey].length) delete schedules[oldDateKey];
    if (!schedules[dateKey]) schedules[dateKey] = [];
    schedules[dateKey].push(nextItem);
    scheduleEditState = null;
  } else {
    schedules[dateKey].push(nextItem);
  }

  saveSchedules(schedules);
  selectedDate = dateKey;
  currentYear = Number(dateKey.slice(0, 4));
  currentMonth = Number(dateKey.slice(5, 7)) - 1;
  titleInput.value = "";
  contentInput.value = "";
  saveRecordBtn.textContent = "保存する";
  renderCalendar();
  renderMiniCalendar();
  renderScheduleList();
  switchView("calendar");
}

function renderScheduleList() {
  const schedules = getSchedules();
  const items = (schedules[selectedDate] || []).slice().sort((a, b) => {
    return String(a.start || "").localeCompare(String(b.start || "")) || (a.createdAt || 0) - (b.createdAt || 0);
  });

  selectedDateLabel.textContent = formatDisplayDate(selectedDate);
  itemCount.textContent = `${items.length}件`;
  if (!items.length) {
    scheduleList.innerHTML = `
      <div class="timeline-empty">
        <div class="timeline-empty-date">${escapeHtml(formatDisplayDate(selectedDate))}</div>
        <p class="empty-text">この日の予定はまだありません。</p>
      </div>
    `;
    return;
  }

  scheduleList.innerHTML = items.map(item => {
    const category = getCategoryById(item.categoryId);
    const color = item.color || category?.color || "#2563eb";
    const categoryName = category?.name || item.categoryName || "未分類";
    const timeText = formatScheduleSummaryTime(item.start, item.end);
    const fullTimeText = formatDateTimeRange(item.start, item.end);
    return `
      <details class="schedule-item schedule-detail-item" style="--item-color:${escapeAttr(color)}">
        <summary class="schedule-summary-row">
          <span class="schedule-time-chip">${escapeHtml(timeText)}</span>
          <span class="schedule-summary-title">${escapeHtml(item.title || "無題")}</span>
        </summary>
        <div class="schedule-body">
          <div class="schedule-top">
            <div class="schedule-category" style="background:${escapeAttr(color)}">${escapeHtml(categoryName)}</div>
            <div class="schedule-detail-time">${escapeHtml(fullTimeText)}</div>
          </div>
          <div class="schedule-content">${escapeHtml(item.content || "")}</div>
        </div>
        <div class="schedule-actions">
          <button class="sub-btn" type="button" data-edit-schedule="${escapeAttr(item.id)}">編集</button>
          <button class="delete-btn" type="button" data-delete-schedule="${escapeAttr(item.id)}">削除</button>
        </div>
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
  const schedules = getSchedules();
  if (!schedules[dateKey]) return;
  schedules[dateKey] = schedules[dateKey].filter(item => item.id !== id);
  if (schedules[dateKey].length === 0) delete schedules[dateKey];
  saveSchedules(schedules);
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
  categories.push({ id: createId(), name, color: "#2563eb", template: DEFAULT_TEMPLATE });
  saveCategories(categories);
  newCategoryInput.value = "";
  renderCategorySelect();
  renderCategorySettingsList();
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
        <input class="color-input" type="color" data-category-color value="${escapeAttr(item.color)}" aria-label="色" />
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
        <button class="delete-small-btn" type="button" data-delete-category>削除</button>
      </div>
    </article>
  `).join("");

  categorySettingsList.querySelectorAll("[data-category-id]").forEach(card => {
    const id = card.dataset.categoryId;
    card.querySelector("[data-save-category]").addEventListener("click", () => saveCategorySetting(card, id));
    card.querySelector("[data-delete-category]").addEventListener("click", () => deleteCategory(id));
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
  target.template = card.querySelector("[data-category-template]").value || DEFAULT_TEMPLATE;
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
    const dots = Array.from({ length: Math.min(count, 5) }, () => `<span class="workout-mini-day-dot"></span>`).join("");
    const classes = [
      "day-cell",
      dateObj.getMonth() !== workoutMiniMonth ? "other-month" : "",
      dateKey === todayKey ? "today" : "",
      dateKey === selectedDate ? "selected" : ""
    ].filter(Boolean).join(" ");

    return `
      <button class="${classes}" type="button" data-date="${dateKey}">
        <div class="day-number">${dateObj.getDate()}</div>
        <div class="workout-mini-day-dot-wrap">${dots}</div>
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

function ensureWorkoutDraftsSize() {
  const targetSets = getTargetSets();
  for (let i = 1; i <= targetSets; i++) {
    if (!workoutDraftInputs[i]) {
      workoutDraftInputs[i] = { weight: "", reps: "", memo: "", assist: false };
    }
  }
}

function saveCurrentSetDraft() {
  const box = setFormsWrap.querySelector("[data-set-form]");
  if (!box) return;
  const setNo = Number(box.dataset.setForm);
  workoutDraftInputs[setNo] = {
    weight: formatWeightRollValue(box.querySelector("[data-weight]").value),
    reps: formatRepsRollValue(box.querySelector("[data-reps]").value),
    memo: box.querySelector("[data-memo]").value,
    assist: box.querySelector("[data-assist]").checked
  };
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

function buildSetForms() {
  ensureWorkoutDraftsSize();
  const setNo = getActiveWorkoutSetNo();
  const targetSets = getTargetSets();
  const draft = workoutDraftInputs[setNo] || { weight: "", reps: "", memo: "", assist: false };
  const existingLog = workoutState.setLogs.find(log => Number(log.setNo) === setNo);

  setFormsWrap.innerHTML = `
    <article class="set-form-item active-set-card" data-set-form="${setNo}">
      <div class="set-top-row compact-top-row">
        <div class="set-now-title">${setNo}セット目</div>
        <div class="set-config-inline">
          <span class="set-config-label">セット数</span>
          <span class="set-config-edit"><button id="setsInlineInput" class="roll-field-btn metric-roll-btn set-count-roll-btn" type="button" data-sets-roll>${targetSets}</button></span>
          <span class="set-config-unit">セット</span>
        </div>
      </div>
      <div class="set-middle-row compact-middle-row">
        <label class="set-inline-field">
          <span>重量</span>
          <button class="roll-field-btn metric-roll-btn" type="button" data-weight-roll>${formatWeightRollValue(draft.weight)}</button>
          <input type="hidden" data-weight value="${escapeAttr(formatWeightRollValue(draft.weight))}" />
          <em>kg</em>
        </label>
        <label class="set-inline-field">
          <span>回数</span>
          <button class="roll-field-btn metric-roll-btn" type="button" data-reps-roll>${formatRepsRollValue(draft.reps)}</button>
          <input type="hidden" data-reps value="${escapeAttr(formatRepsRollValue(draft.reps))}" />
          <em>回</em>
        </label>
        <div class="set-rm-assist-row">
          <div class="set-rm-inline" data-rm-display>RM ${escapeHtml(calcEstimated1RM(draft.weight, draft.reps) || "-")}</div>
          <label class="set-assist-inline">
            <input type="checkbox" data-assist ${draft.assist ? "checked" : ""} />
            補助
          </label>
        </div>
      </div>
      <div class="set-bottom-row compact-bottom-row">
        <div class="set-memo-label">メモ</div>
        <textarea rows="3" data-memo placeholder="フォームや体感など">${escapeHtml(draft.memo)}</textarea>
      </div>
      ${existingLog ? `<div class="workout-log-item-body">記録済み: 実施 ${formatSeconds(existingLog.workSec)} / 休憩 ${formatSeconds(existingLog.restSec || 0)}</div>` : ""}
    </article>
  `;

  const box = setFormsWrap.querySelector("[data-set-form]");
  const updateDraftAndRm = () => {
    saveCurrentSetDraft();
    const current = workoutDraftInputs[setNo] || {};
    box.querySelector("[data-rm-display]").textContent = `RM ${calcEstimated1RM(current.weight, current.reps) || "-"}`;
  };

  box.querySelectorAll("input, textarea").forEach(input => {
    input.addEventListener("input", updateDraftAndRm);
    input.addEventListener("change", updateDraftAndRm);
  });
  box.querySelector("[data-weight-roll]").addEventListener("click", () => {
    const input = box.querySelector("[data-weight]");
    const button = box.querySelector("[data-weight-roll]");
    openWeightRollPicker("重量", input.value, value => {
      input.value = value;
      button.textContent = value;
      updateDraftAndRm();
    });
  });
  box.querySelector("[data-reps-roll]").addEventListener("click", () => {
    const input = box.querySelector("[data-reps]");
    const button = box.querySelector("[data-reps-roll]");
    openRepsRollPicker("回数", input.value, value => {
      input.value = value;
      button.textContent = value;
      updateDraftAndRm();
    });
  });

  const inlineSetsInput = $("setsInlineInput");
  inlineSetsInput.addEventListener("click", () => {
    openSetCountRollPicker(getTargetSets(), value => {
      setWorkoutSetCount(value);
      buildSetForms();
    });
  });
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
  if (!workoutState.setLogs.length) {
    if (!isAutoSave) alert("保存できる記録がありません。");
    return;
  }

  const dateKey = workoutDateInput.value || selectedDate;
  const bodyPart = bodyPartSelect.value;
  const exercise = exerciseSelect.value;

  if (!bodyPart || !exercise) {
    alert("部位とメニューを選択してください。");
    return;
  }

  const sessions = getWorkoutSessions();
  if (!sessions[dateKey]) sessions[dateKey] = [];
  sessions[dateKey].push({
    id: createId(),
    bodyPart,
    exercise,
    targetSets: getTargetSets(),
    memo: workoutMemo.value || "",
    setLogs: deepCopy(workoutState.setLogs),
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
  return {
    totalVolume: items.reduce((sum, item) => sum + calcWorkoutTotalVolume(item.setLogs || []), 0),
    totalSets: setLogs.length,
    totalWork: setLogs.reduce((sum, log) => sum + Number(log.workSec || 0), 0)
  };
}

function getWorkoutVolumeText(item) {
  const validLogs = (item.setLogs || []).filter(log => Number(log.weight || 0) > 0 && Number(log.reps || 0) > 0);
  if (!validLogs.length) return "総重量: -";
  return `総重量: ${formatWeightNumber(calcWorkoutTotalVolume(validLogs))}kg`;
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
          <span>総重量</span>
          <strong>${formatWeightNumber(summary.totalVolume)}kg</strong>
        </div>
        <div>
          <span>セット数</span>
          <strong>${summary.totalSets}</strong>
        </div>
        <div>
          <span>実施時間</span>
          <strong>${formatSeconds(summary.totalWork)}</strong>
        </div>
      </div>
    </article>
  `;
}

function renderWorkoutBalanceCard(items) {
  const balance = new Map();
  items.forEach(item => {
    const part = item.bodyPart || "未分類";
    const volume = calcWorkoutTotalVolume(item.setLogs || []);
    balance.set(part, (balance.get(part) || 0) + volume);
  });
  const sortedRows = [...balance.entries()].sort((a, b) => b[1] - a[1]);
  const total = sortedRows.reduce((sum, [, value]) => sum + value, 0);
  const rows = sortedRows.slice(0, 3);

  if (!rows.length || total <= 0) {
    return `
      <article class="workout-period-card workout-balance-card">
        <div class="workout-period-head">
          <strong>部位バランス</strong>
          <span>-</span>
        </div>
        <div class="workout-balance-body">この月の記録がありません。</div>
      </article>
    `;
  }

  return `
    <article class="workout-period-card workout-balance-card">
      <div class="workout-period-head">
        <strong>部位バランス</strong>
        <span>上位${rows.length}</span>
      </div>
      <div class="workout-balance-body">
        ${rows.map(([part, value]) => {
          const percent = Math.round((value / total) * 100);
          return `
            <div class="workout-balance-row">
              <span>${escapeHtml(part)}</span>
              <div class="workout-balance-track"><i style="width:${percent}%"></i></div>
              <strong>${percent}%</strong>
            </div>
          `;
        }).join("")}
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
    renderWorkoutBalanceCard(monthItems)
  ].join("");
}

function renderWorkoutHistory() {
  const dateKey = workoutDateInput.value || selectedDate;
  const sessions = getWorkoutSessions();
  const items = (sessions[dateKey] || []).slice().sort((a, b) => (a.createdAt || 0) - (b.createdAt || 0));

  renderWorkoutDashboard();
  workoutItemCount.textContent = `${items.length}件`;
  if (!items.length) {
    workoutHistoryList.innerHTML = `<p class="empty-text">まだ筋トレ記録はありません。</p>`;
    return;
  }

  workoutHistoryList.innerHTML = items.map(item => {
    const setLogs = item.setLogs || [];
    const totalWork = setLogs.reduce((sum, log) => sum + Number(log.workSec || 0), 0);
    const totalRest = setLogs.reduce((sum, log) => sum + Number(log.restSec || 0), 0);
    const topRm = Math.max(...setLogs.map(log => Number(log.rm || 0)), 0);
    const detailHtml = setLogs.map((log, index) => `
      <div class="workout-history-detail-row">
        <div class="workout-history-detail-title">${index + 1}セット目</div>
        <div class="workout-history-detail-body">
          重量: ${escapeHtml(log.weight || "-")}kg / 回数: ${escapeHtml(log.reps || "-")}回 / 補助: ${log.assist ? "あり" : "なし"}<br>
          実施: ${formatSeconds(log.workSec || 0)} / 休憩: ${formatSeconds(log.restSec || 0)} / RM: ${escapeHtml(log.rm || "-")}
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
              セット: ${escapeHtml(item.targetSets || setLogs.length || "-")} /
              実施: ${formatSeconds(totalWork)} /
              休憩: ${formatSeconds(totalRest)} /
              最高RM: ${topRm ? topRm.toFixed(1) : "-"}kg
            </div>
            <div class="workout-history-simple-body">${escapeHtml(getWorkoutVolumeText(item))}</div>
          </div>
          <div class="workout-history-actions">
            <button class="edit-workout-btn" type="button" data-edit-workout="${escapeAttr(item.id)}">編集</button>
            <button class="close-x-btn" type="button" aria-label="削除" data-delete-workout="${escapeAttr(item.id)}">×</button>
          </div>
        </summary>
        <div class="workout-history-detail-wrap">
          ${detailHtml || `<div class="workout-history-simple-body">セット詳細はありません。</div>`}
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

  const sourceLogs = latest.setLogs || [];
  const sourceSetCount = sourceLogs.length || latest.targetSets || 1;
  setsInput.value = String(sourceSetCount);
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
  const setLogs = [...workoutEditSetList.querySelectorAll("[data-edit-set-index]")].map((card, index) => {
    const weight = formatWeightRollValue(card.querySelector("[data-edit-weight]").value);
    const reps = formatRepsRollValue(card.querySelector("[data-edit-reps]").value);
    return {
      setNo: index + 1,
      weight,
      reps,
      assist: card.querySelector("[data-edit-assist]").checked,
      workSec: Math.max(0, Math.floor(Number(card.querySelector("[data-edit-work-sec]").value || 0))),
      restSec: Math.max(0, Math.floor(Number(card.querySelector("[data-edit-rest-sec]").value || 0))),
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
      targetSets: setLogs.length,
      memo: "",
      setLogs
    }
  };
}

function renderWorkoutEditSetList() {
  if (!workoutEditState?.session) return;
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
            <button class="roll-field-btn metric-roll-btn" type="button" data-edit-weight-roll>${formatWeightRollValue(weight)}</button>
            <input type="hidden" data-edit-weight value="${escapeAttr(formatWeightRollValue(weight))}" />
          </label>
          <label class="edit-field">
            <span>回数</span>
            <button class="roll-field-btn metric-roll-btn" type="button" data-edit-reps-roll>${formatRepsRollValue(reps)}</button>
            <input type="hidden" data-edit-reps value="${escapeAttr(formatRepsRollValue(reps))}" />
          </label>
          <label class="edit-field">
            <span>実施</span>
            <button class="roll-field-btn duration-roll-btn" type="button" data-edit-work-roll>${formatSeconds(log.workSec || 0)}</button>
            <input type="hidden" data-edit-work-sec value="${escapeAttr(log.workSec || 0)}" />
          </label>
          <label class="edit-field">
            <span>休憩</span>
            <button class="roll-field-btn duration-roll-btn" type="button" data-edit-rest-roll>${formatSeconds(log.restSec || 0)}</button>
            <input type="hidden" data-edit-rest-sec value="${escapeAttr(log.restSec || 0)}" />
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
    card.querySelector("[data-edit-weight-roll]").addEventListener("click", () => {
      const input = card.querySelector("[data-edit-weight]");
      const button = card.querySelector("[data-edit-weight-roll]");
      openWeightRollPicker("重量", input.value, value => {
        input.value = value;
        button.textContent = value;
        updateRm();
      });
    });
    card.querySelector("[data-edit-reps-roll]").addEventListener("click", () => {
      const input = card.querySelector("[data-edit-reps]");
      const button = card.querySelector("[data-edit-reps-roll]");
      openRepsRollPicker("回数", input.value, value => {
        input.value = value;
        button.textContent = value;
        updateRm();
      });
    });
    card.querySelector("[data-edit-work-roll]").addEventListener("click", () => {
      const input = card.querySelector("[data-edit-work-sec]");
      const button = card.querySelector("[data-edit-work-roll]");
      openDurationRollPicker("実施時間", input.value, value => {
        input.value = String(value);
        button.textContent = formatSeconds(value);
      });
    });
    card.querySelector("[data-edit-rest-roll]").addEventListener("click", () => {
      const input = card.querySelector("[data-edit-rest-sec]");
      const button = card.querySelector("[data-edit-rest-roll]");
      openDurationRollPicker("休憩時間", input.value, value => {
        input.value = String(value);
        button.textContent = formatSeconds(value);
      });
    });
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
  if (!session.setLogs.length) {
    alert("セットを1つ以上入力してください。");
    return;
  }

  session.id = workoutEditState.sessionId;
  session.createdAt = session.createdAt || Date.now();
  session.setLogs = session.setLogs.map((log, index) => ({
    ...log,
    setNo: index + 1,
    rm: calcEstimated1RM(log.weight, log.reps)
  }));

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
        <button class="x-btn bodypart-x-btn" type="button" data-delete-bodypart aria-label="部位を削除">×</button>
      </div>
      <div class="menu-list-wrap">
        ${(masters[part] || []).map(ex => `
          <div class="menu-line" data-exercise="${escapeAttr(ex)}">
            <span class="menu-line-text">${escapeHtml(ex)}</span>
            <button class="x-btn" type="button" data-delete-exercise aria-label="メニューを削除">×</button>
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
    card.querySelector("[data-add-exercise-for-part]").addEventListener("click", () => {
      addExerciseToPart(part, card.querySelector("[data-new-exercise-for-part]"));
    });
    card.querySelectorAll("[data-delete-exercise]").forEach(button => {
      const row = button.closest("[data-exercise]");
      button.addEventListener("click", () => deleteExercise(part, row.dataset.exercise));
    });
  });
}

function addExercise() {
  addExerciseToPart(settingsBodyPartSelect.value, newExerciseInput);
  newExerciseInput.value = "";
}

function showCalendarSettings() {
  calendarSettingsSection.classList.remove("hidden");
  workoutSettingsSection.classList.add("hidden");
  showCalendarSettingsBtn.classList.add("active-tab");
  showWorkoutSettingsBtn.classList.remove("active-tab");
}

function showWorkoutSettings() {
  calendarSettingsSection.classList.add("hidden");
  workoutSettingsSection.classList.remove("hidden");
  showCalendarSettingsBtn.classList.remove("active-tab");
  showWorkoutSettingsBtn.classList.add("active-tab");
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
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);

  const left = 52;
  const right = 20;
  const top = 24;
  const bottom = 46;
  const chartW = w - left - right;
  const chartH = h - top - bottom;
  const maxValue = Math.max(...data.map(point => point.value), 1);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top);
  ctx.lineTo(left, top + chartH);
  ctx.lineTo(left + chartW, top + chartH);
  ctx.stroke();

  ctx.fillStyle = "#64748b";
  ctx.font = "12px sans-serif";
  for (let i = 0; i <= 4; i++) {
    const ratio = i / 4;
    const y = top + chartH * ratio;
    const label = (maxValue * (1 - ratio)).toFixed(0);
    ctx.fillText(label, 8, y + 4);
    ctx.strokeStyle = "#e5e7eb";
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(left + chartW, y);
    ctx.stroke();
  }

  const stepX = data.length > 1 ? chartW / (data.length - 1) : chartW;
  ctx.strokeStyle = "#2563eb";
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
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
    const shouldShowDateLabel = days <= 7 || index % 5 === 0;
    if (shouldShowDateLabel) {
      ctx.fillStyle = "#64748b";
      ctx.fillText(point.date.slice(5), x - 14, top + chartH + 20);
    }
    if (point.value > 0) {
      ctx.fillStyle = "#111827";
      ctx.fillText(point.value.toFixed(1), x - 14, y - 10);
    }
  });

  const nonZero = data.filter(point => point.value > 0);
  const latest = nonZero[nonZero.length - 1];
  const best = Math.max(...data.map(point => point.value), 0);
  statsSummary.textContent = `期間: ${days === 7 ? "1週間" : "1か月"} / 最新: ${latest ? latest.value.toFixed(1) : "-"} / 最高: ${best ? best.toFixed(1) : "-"}`;
}

function bindEvents() {
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

  goInputBtn.addEventListener("click", openScheduleCreate);
  backToCalendarFromInputBtn.addEventListener("click", () => {
    scheduleEditState = null;
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
  saveRecordBtn.addEventListener("click", addSchedule);
  addCategoryBtn.addEventListener("click", addCategory);

  bodyPartSelect.addEventListener("change", () => {
    saveCurrentSetDraft();
    renderWorkoutExerciseSelect();
  });
  exerciseSelect.addEventListener("change", saveCurrentSetDraft);
  workoutMainBtn.addEventListener("click", workoutMainAction);
  workoutResetBtn.addEventListener("click", () => {
    applyWorkoutDefaultsToInputs();
    resetWorkoutState();
    buildSetForms();
  });
  saveWorkoutBtn.addEventListener("click", () => saveWorkoutSession(false));
  loadPreviousWorkoutBtn.addEventListener("click", loadPreviousWorkout);
  backToWorkoutFromEditBtn.addEventListener("click", () => switchView("workout"));
  workoutEditDatePickerBtn.addEventListener("change", () => {
    if (workoutEditDatePickerBtn.value) setWorkoutEditDateValue(workoutEditDatePickerBtn.value);
  });
  workoutEditBodyPartSelect.addEventListener("change", () => renderWorkoutEditExerciseSelect());
  addWorkoutEditSetBtn.addEventListener("click", addWorkoutEditSet);
  saveWorkoutEditBtn.addEventListener("click", saveWorkoutEdit);
  rollPickerOverlay.addEventListener("click", event => {
    if (event.target === rollPickerOverlay) closeRollPicker();
  });

  workoutInputDateChangeBtn.addEventListener("click", openWorkoutInputDateRollPicker);

  workoutDatePickerNative.addEventListener("change", () => {
    if (workoutDatePickerNative.value) setWorkoutDate(workoutDatePickerNative.value);
  });

  workoutDateInput.addEventListener("change", () => {
    if (workoutDateInput.value) setWorkoutDate(workoutDateInput.value);
  });

  addBodyPartBtn.addEventListener("click", addBodyPart);
  addExerciseBtn.addEventListener("click", addExercise);
  saveWorkoutDefaultsBtn.addEventListener("click", saveWorkoutDefaultSettings);
  showCalendarSettingsBtn.addEventListener("click", showCalendarSettings);
  showWorkoutSettingsBtn.addEventListener("click", showWorkoutSettings);

  statsBodyPartSelect.addEventListener("change", () => {
    renderStatsExerciseSelect();
    drawStats(7);
  });
  statsExerciseSelect.addEventListener("change", () => drawStats(7));
  showWeekStatsBtn.addEventListener("click", () => drawStats(7));
  showMonthStatsBtn.addEventListener("click", () => drawStats(30));
}

function init() {
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
  buildSetForms();
  renderWorkoutLogs();

  renderCategorySettingsList();
  renderSettingsBodyPartSelect();
  renderWorkoutSettingsList();
  renderWorkoutDefaultSettingsInputs();
  renderStatsBodyPartSelect();

  setDefaultDateTimes();
  bindEvents();
  switchView("calendar");
}

window.deleteSchedule = deleteSchedule;
window.deleteWorkoutSession = deleteWorkoutSession;

init();
