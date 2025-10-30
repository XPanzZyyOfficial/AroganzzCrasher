let currentUser = null
let currentPage = "overview"
const bugHistory = JSON.parse(localStorage.getItem("bugHistory")) || []
const userStats = JSON.parse(localStorage.getItem("userStats")) || {
totalBugs: 0,
successRate: 100,
totalUsers: 1,
}

document.addEventListener("DOMContentLoaded", () => {
const userData = localStorage.getItem("currentUser")
if (!userData) {
window.location.href = "index.html"
return
}

currentUser = JSON.parse(userData)
initializeDashboard()
})

function initializeDashboard() {
document.getElementById("currentUsername").textContent = currentUser.username
document.getElementById("userRole").textContent = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1)

setupRoleBasedUI()

setupNavigation()

setupForms()

updateStats()

startRealTimeUpdates()

showPage("overview")
}

function setupRoleBasedUI() {
const role = currentUser.role

if (role === "developer") {
document.querySelectorAll(".admin-only, .reseller-only, .dev-only").forEach((el) => {
el.style.display = "block"
})
} else if (role === "admin") {
document.querySelectorAll(".admin-only, .reseller-only").forEach((el) => {
el.style.display = "block"
})
} else if (role === "reseller") {
document.querySelectorAll(".reseller-only").forEach((el) => {
el.style.display = "block"
})
}
}

function setupNavigation() {
document.querySelectorAll(".nav-item").forEach((item) => {
item.addEventListener("click", function (e) {
e.preventDefault()
const page = this.dataset.page
if (page) {
showPage(page)

document.querySelectorAll(".nav-item").forEach((nav) => nav.classList.remove("active"))
this.classList.add("active")
}
})
})

const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const sidebar = document.getElementById("sidebar")

mobileMenuBtn.addEventListener("click", () => {
sidebar.classList.toggle("mobile-open")
})

const sidebarToggle = document.getElementById("sidebarToggle")
sidebarToggle.addEventListener("click", () => {
sidebar.classList.toggle("collapsed")
})
}

function setupForms() {
const bugForm = document.getElementById("bugForm")
if (bugForm) {
bugForm.addEventListener("submit", handleBugSubmit)

document.querySelectorAll(".method-option").forEach((option) => {
option.addEventListener("click", function () {
document.querySelectorAll(".method-option").forEach((opt) => opt.classList.remove("selected"))
this.classList.add("selected")

const method = this.dataset.method
const fjidsGroup = document.getElementById("fjidsGroup")

if (method === "crlsql") {
fjidsGroup.style.display = "block"
} else {
fjidsGroup.style.display = "none"
}
})
})
}

const createMemberForm = document.getElementById("createMemberForm")
if (createMemberForm) {
createMemberForm.addEventListener("submit", handleCreateMember)
}

const createUserModalForm = document.getElementById("createUserModalForm")
if (createUserModalForm) {
createUserModalForm.addEventListener("submit", handleCreateUser)
}
}

function showPage(pageId) {
document.querySelectorAll(".page-content").forEach((page) => {
page.style.display = "none"
})

const targetPage = document.getElementById(`${pageId}-page`)
if (targetPage) {
targetPage.style.display = "block"
targetPage.classList.add("animate-slide-right")
}

const pageTitle = document.getElementById("pageTitle")
const titles = {
overview: "Overview",
"send-bug": "Send Bug",
"manage-users": "Manage Users",
"create-member": "Create Member",
"system-settings": "System Settings",
}
pageTitle.textContent = titles[pageId] || "Dashboard"

currentPage = pageId

if (pageId === "manage-users") {
loadUsersTable()
} else if (pageId === "overview") {
loadRecentActivity()
}
}

async function handleBugSubmit(e) {
e.preventDefault()

const targetNumber = document.getElementById("targetNumber").value.trim()
const selectedMethod = document.querySelector(".method-option.selected")
const fjidsParam = document.getElementById("fjidsParam").value.trim()

if (!targetNumber || !selectedMethod) {
showToast("Please fill in all required fields", "error")
return
}

const method = selectedMethod.dataset.method
const submitBtn = e.target.querySelector('button[type="submit"]')

submitBtn.classList.add("loading")

try {
let apiUrl = `/api/bug/${method}?target=${targetNumber}`
if (method === "crashsystem" && fjidsParam) {
apiUrl += `&fjids=${fjidsParam}`
}

const response = await fetch(apiUrl)
const result = await response.json()

if (result.status) {
showToast("Bug attack sent successfully!", "success")

const historyItem = {
id: Date.now(),
method: method.toUpperCase(),
target: targetNumber,
status: "success",
timestamp: new Date().toISOString(),
}

bugHistory.unshift(historyItem)
localStorage.setItem("bugHistory", JSON.stringify(bugHistory))

userStats.totalBugs++
localStorage.setItem("userStats", JSON.stringify(userStats))
updateStats()

updateBugHistory()

e.target.reset()
document.querySelectorAll(".method-option").forEach((opt) => opt.classList.remove("selected"))
document.getElementById("fjidsGroup").style.display = "none"
} else {
throw new Error(result.message || "Failed to send bug attack")
}
} catch (error) {
console.error("Bug attack error:", error)
showToast("Failed to send bug attack: " + error.message, "error")

const historyItem = {
id: Date.now(),
method: method.toUpperCase(),
target: targetNumber,
status: "error",
timestamp: new Date().toISOString(),
}

bugHistory.unshift(historyItem)
localStorage.setItem("bugHistory", JSON.stringify(bugHistory))
updateBugHistory()
} finally {
submitBtn.classList.remove("loading")
}
}

function handleCreateMember(e) {
e.preventDefault()

const username = document.getElementById("newUsername").value.trim()
const password = document.getElementById("newPassword").value
const telegram = document.getElementById("newTelegram").value.trim()

if (!username || !password || !telegram) {
showToast("Please fill in all fields", "error")
return
}

const submitBtn = e.target.querySelector('button[type="submit"]')
submitBtn.classList.add("loading")

setTimeout(() => {
const users = JSON.parse(localStorage.getItem("users")) || {}

if (users[username]) {
showToast("Username already exists", "error")
} else {
users[username] = {
username,
password,
telegram,
role: "member",
createdBy: currentUser.username,
createdAt: new Date().toISOString(),
}

localStorage.setItem("users", JSON.stringify(users))
showToast("Member created successfully!", "success")

e.target.reset()

userStats.totalUsers++
localStorage.setItem("userStats", JSON.stringify(userStats))
updateStats()
}

submitBtn.classList.remove("loading")
}, 1500)
}

function handleCreateUser(e) {
e.preventDefault()

const username = document.getElementById("modalUsername").value.trim()
const password = document.getElementById("modalPassword").value
const telegram = document.getElementById("modalTelegram").value.trim()
const role = document.getElementById("modalRole").value

if (!username || !password || !telegram || !role) {
showToast("Please fill in all fields", "error")
return
}

if (!canCreateRole(role)) {
showToast("You do not have permission to create this role", "error")
return
}

setTimeout(() => {
const users = JSON.parse(localStorage.getItem("users")) || {}

if (users[username]) {
showToast("Username already exists", "error")
} else {
users[username] = {
username,
password,
telegram,
role,
createdBy: currentUser.username,
createdAt: new Date().toISOString(),
}

localStorage.setItem("users", JSON.stringify(users))
showToast(`${role.charAt(0).toUpperCase() + role.slice(1)} created successfully!`, "success")

closeCreateUserModal()
loadUsersTable()

userStats.totalUsers++
localStorage.setItem("userStats", JSON.stringify(userStats))
updateStats()
}
}, 1500)
}

function canCreateRole(role) {
const userRole = currentUser.role

if (userRole === "dev") return true
if (userRole === "admin" && ["member", "reseller"].includes(role)) return true
if (userRole === "reseller" && role === "member") return true

return false
}

function updateStats() {
document.getElementById("totalBugs").textContent = userStats.totalBugs
document.getElementById("successRate").textContent = userStats.successRate + "%"
document.getElementById("totalUsers").textContent = userStats.totalUsers
}

function updateBugHistory() {
const historyContainer = document.getElementById("bugHistory")
if (!historyContainer) return

historyContainer.innerHTML = ""

bugHistory.slice(0, 10).forEach((item) => {
const historyItem = document.createElement("div")
historyItem.className = "history-item"

const statusClass = item.status === "success" ? "success" : "error"
const statusIcon = item.status === "success" ? "fa-check" : "fa-times"
const timeAgo = getTimeAgo(new Date(item.timestamp))

historyItem.innerHTML = `
<div class="history-icon ${statusClass}">
<i class="fas ${statusIcon}"></i>
</div>
<div class="history-content">
<p><strong>${item.method}</strong> → ${item.target}</p>
<span class="history-time">${timeAgo}</span>
</div>
<div class="history-status ${statusClass}">${item.status === "success" ? "Success" : "Failed"}</div>
`

historyContainer.appendChild(historyItem)
})
}

function loadRecentActivity() {
const activityList = document.getElementById("activityList")
if (!activityList) return

const activities = [
{
icon: "fa-sign-in-alt",
text: "Successfully logged in",
time: "Just now",
},
...bugHistory.slice(0, 5).map((item) => ({
icon: item.status === "success" ? "fa-bug" : "fa-exclamation-triangle",
text: `${item.method} attack ${item.status === "success" ? "sent to" : "failed for"} ${item.target}`,
time: getTimeAgo(new Date(item.timestamp)),
})),
]

activityList.innerHTML = ""

activities.forEach((activity) => {
const activityItem = document.createElement("div")
activityItem.className = "activity-item"

activityItem.innerHTML = `
<div class="activity-icon">
<i class="fas ${activity.icon}"></i>
</div>
<div class="activity-content">
<p>${activity.text}</p>
<span class="activity-time">${activity.time}</span>
</div>
`

activityList.appendChild(activityItem)
})
}

function loadUsersTable() {
const tableBody = document.getElementById("usersTableBody")
if (!tableBody) return

const users = JSON.parse(localStorage.getItem("users")) || {}
tableBody.innerHTML = ""

Object.values(users).forEach((user) => {
const row = document.createElement("tr")
const createdDate = new Date(user.createdAt).toLocaleDateString()

row.innerHTML = `
<td>${user.username}</td>
<td><span class="status-badge active">${user.role}</span></td>
<td>${user.telegram}</td>
<td><span class="status-badge active">Active</span></td>
<td>${createdDate}</td>
<td>
<button class="btn-secondary" onclick="editUser('${user.username}')">Edit</button>
<button class="btn-secondary" onclick="deleteUser('${user.username}')">Delete</button>
</td>
`

tableBody.appendChild(row)
})
}

function startRealTimeUpdates() {
function updateTime() {
const now = new Date()
const timeString = now.toLocaleTimeString("en-US", {
hour12: true,
hour: "2-digit",
minute: "2-digit",
})

const timeElement = document.getElementById("currentTime")
if (timeElement) {
timeElement.textContent = timeString
}
}

updateTime()
setInterval(updateTime, 1000)

setInterval(updateBugHistory, 30000)
}

function getTimeAgo(date) {
const now = new Date()
const diffInSeconds = Math.floor((now - date) / 1000)

if (diffInSeconds < 60) return "Just now"
if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
return `${Math.floor(diffInSeconds / 86400)} days ago`
}

function showToast(message, type = "success") {
const toast = document.getElementById("toast")
const toastIcon = toast.querySelector(".toast-icon")
const toastMessage = toast.querySelector(".toast-message")

if (type === "success") {
toastIcon.className = "toast-icon fas fa-check-circle"
} else if (type === "error") {
toastIcon.className = "toast-icon fas fa-exclamation-circle"
} else if (type === "warning") {
toastIcon.className = "toast-icon fas fa-exclamation-triangle"
}

toastMessage.textContent = message
toast.className = `toast ${type} show`

setTimeout(() => {
toast.classList.remove("show")
}, 4000)
}

function openCreateUserModal() {
const modal = document.getElementById("createUserModal")
modal.classList.add("show")

const roleSelect = document.getElementById("modalRole")
roleSelect.innerHTML = ""

const availableRoles = []
if (currentUser.role === "dev") {
availableRoles.push("member", "reseller", "admin")
} else if (currentUser.role === "admin") {
availableRoles.push("member", "reseller")
} else if (currentUser.role === "reseller") {
availableRoles.push("member")
}

availableRoles.forEach((role) => {
const option = document.createElement("option")
option.value = role
option.textContent = role.charAt(0).toUpperCase() + role.slice(1)
roleSelect.appendChild(option)
})
}

function closeCreateUserModal() {
const modal = document.getElementById("createUserModal")
modal.classList.remove("show")

document.getElementById("createUserModalForm").reset()
}

function editUser(username) {
showToast("Edit user functionality coming soon", "warning")
}

function deleteUser(username) {
if (confirm(`Are you sure you want to delete user "${username}"?`)) {
const users = JSON.parse(localStorage.getItem("users")) || {}
delete users[username]
localStorage.setItem("users", JSON.stringify(users))

showToast("User deleted successfully", "success")
loadUsersTable()

userStats.totalUsers--
localStorage.setItem("userStats", JSON.stringify(userStats))
updateStats()
}
}

function logout() {
if (confirm("Are you sure you want to logout?")) {
localStorage.removeItem("currentUser")
window.location.href = "index.html"
}
}

document.addEventListener("click", (e) => {
const modal = document.getElementById("createUserModal")
if (e.target === modal) {
closeCreateUserModal()
}
})

document.addEventListener("keydown", (e) => {
if (e.key === "Escape") {
closeCreateUserModal()
}
})

document.addEventListener("DOMContentLoaded", () => {
setTimeout(() => {
updateBugHistory()
}, 1000)
})
