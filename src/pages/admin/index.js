export function adminDashboardLayout() {
    // Sample global system state context
    const adminUser = {
        name: "Admin Director",
        role: "Super Administrator",
        email: "root@marketplace.com",
        platformCurrency: "₦ (NGN)",
        globalCommission: "12.5%",
        systemStatus: "Operational / Stable"
    };

    return /*html*/`
    <div class="container-fluid my-4 px-md-4">
        <div class="row g-4">
            
            <!-- LEFT COLUMN: SIDEBAR GLOBAL CONTROL PANEL NAVIGATION -->
            <div class="col-12 col-xl-3">
                <!-- Admin Profile Card Info -->
                <div class="card border-0 shadow-sm rounded mb-3 bg-white">
                    <div class="card-body p-3 d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center justify-content-center bg-dark bg-opacity-10 text-dark rounded fs-3 fw-bold" style="width: 54px; height: 54px;">
                            <i class="bi bi-shield-lock-fill text-dark"></i>
                        </div>
                        <div class="overflow-hidden">
                            <h6 class="fw-bold mb-0 text-dark text-truncate">${adminUser.name}</h6>
                            <p class="text-muted mb-0 text-uppercase tracking-wider fw-semibold" style="font-size: 0.7rem;">${adminUser.role}</p>
                            <span class="badge bg-success bg-opacity-10 text-success rounded-pill mt-1" style="font-size: 0.65rem;">System: ${adminUser.systemStatus}</span>
                        </div>
                    </div>
                </div>

                <!-- Navigation Master Routes Links -->
                <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
                    <div class="list-group list-group-flush" id="admin-dashboard-tabs" role="tablist" style="font-size: 0.9rem;">
                        <a class="list-group-item list-group-item-action active border-0 py-3 px-3 d-flex align-items-center gap-3" id="atab-overview" data-bs-toggle="list" href="#apane-overview" role="tab">
                            <i class="bi bi-speedometer"></i> Platform Overview
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="atab-vendors" data-bs-toggle="list" href="#apane-vendors" role="tab">
                            <i class="bi bi-shop-window"></i> Vendor Moderation
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="atab-users" data-bs-toggle="list" href="#apane-users" role="tab">
                            <i class="bi bi-people-fill"></i> User Management
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="atab-config" data-bs-toggle="list" href="#apane-config" role="tab">
                            <i class="bi bi-sliders"></i> Global Settings & Engine
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3 text-danger border-top">
                            <i class="bi bi-power"></i> Kill Session
                        </a>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: MASTER ADMINISTRATIVE MAIN CONTENT BLOCKS -->
            <div class="col-12 col-xl-9">
                <div class="tab-content" id="admin-dashboard-panes">
                    
                    <!-- PANE 1: PLATFORM OVERVIEW (METRICS) -->
                    <div class="tab-pane fade show active" id="apane-overview" role="tabpanel" aria-labelledby="atab-overview">
                        
                        <!-- 4-Column Financial & Infrastructure Telemetry Grid -->
                        <div class="row g-3 mb-4">
                            <!-- Metric 1: System-wide Total Transaction Volume (GMV) -->
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider" style="font-size:0.7rem;">Platform GMV</p>
                                            <h5 class="fw-bold mb-0 text-dark">₦ 42.8M</h5>
                                        </div>
                                        <div class="p-2.5 bg-primary bg-opacity-10 text-primary rounded fs-5 px-3 py-2">
                                            <i class="bi bi-currency-exchange"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 2: Net Platform Marketplace Commission Earned -->
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider" style="font-size:0.7rem;">Net Commission</p>
                                            <h5 class="fw-bold mb-0 text-success">₦ 5.3M</h5>
                                        </div>
                                        <div class="p-2.5 bg-success bg-opacity-10 text-success rounded fs-5 px-3 py-2">
                                            <i class="bi bi-graph-up-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 3: Total Stores Onboarded -->
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider" style="font-size:0.7rem;">Active Merchants</p>
                                            <h5 class="fw-bold mb-0 text-dark">1,240</h5>
                                        </div>
                                        <div class="p-2.5 bg-warning bg-opacity-10 text-warning rounded fs-5 px-3 py-2">
                                            <i class="bi bi-shop"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 4: Open Infrastructure Support Tickets -->
                            <div class="col-12 col-sm-6 col-md-3">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider" style="font-size:0.7rem;">Open Disputes</p>
                                            <h5 class="fw-bold mb-0 text-danger">8 Cases</h5>
                                        </div>
                                        <div class="p-2.5 bg-danger bg-opacity-10 text-danger rounded fs-5 px-3 py-2">
                                            <i class="bi bi-exclamation-octagon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Platform Audit Logs Module View -->
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-7 tracking-wide">Real-time Platform Core Activity logs</h6>
                                <span class="spinner-grow spinner-grow-sm text-danger" role="status"></span>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Timestamp Trace</th>
                                                <th class="border-0">Subsystem Scope</th>
                                                <th class="border-0">Action Event Detail</th>
                                                <th class="border-0">Origin Node / IP</th>
                                                <th class="pe-3 border-0 text-end">Severity Vector</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3 text-muted">2026-06-07 07:51:04</td>
                                                <td><span class="badge bg-secondary rounded-sm">PAYMENTS</span></td>
                                                <td class="fw-semibold text-dark">Payout Reference Batch #PAY-882415 executed via Hook</td>
                                                <td class="style-code">192.168.12.44</td>
                                                <td class="pe-3 text-end"><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1">INFO</span></td>
                                            </tr>
                                            <tr>
                                                <td class="ps-3 text-muted">2026-06-07 07:44:12</td>
                                                <td><span class="badge bg-dark text-white rounded-sm">SECURITY</span></td>
                                                <td class="fw-semibold text-dark">Failed merchant login credentials override warning triggered</td>
                                                <td class="style-code">102.89.34.112</td>
                                                <td class="pe-3 text-end"><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 py-1">WARNING</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 2: VENDOR APPROVAL / MODERATION -->
                    <div class="tab-pane fade" id="apane-vendors" role="tabpanel" aria-labelledby="atab-vendors">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Pending KYC Merchant Applications</h6>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Applicant Vendor Store</th>
                                                <th class="border-0">Tax/Reg Document</th>
                                                <th class="border-0">Application Date</th>
                                                <th class="border-0">Risk Profile Assessment</th>
                                                <th class="pe-3 text-end border-0">Review Decision</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3">
                                                    <span class="fw-bold text-dark d-block">Zara Apparel Hub Enterprise</span>
                                                    <span class="text-muted small">contact@zarahub.ng</span>
                                                </td>
                                                <td><a href="#" class="text-decoration-none text-primary fw-semibold"><i class="bi bi-file-earmark-pdf-fill me-1"></i>CAC_Registration.pdf</a></td>
                                                <td class="text-muted">June 05, 2026</td>
                                                <td><span class="badge bg-info bg-opacity-10 text-info rounded-pill px-2 py-1">Standard / Low-Risk</span></td>
                                                <td class="pe-3 text-end">
                                                    <button class="btn btn-sm btn-success fw-bold px-2.5 text-uppercase btn-xs" style="font-size:0.7rem;">Approve</button>
                                                    <button class="btn btn-sm btn-outline-danger fw-bold px-2.5 text-uppercase btn-xs" style="font-size:0.7rem;">Reject</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 3: USER MANAGEMENT -->
                    <div class="tab-pane fade" id="apane-users" role="tabpanel" aria-labelledby="atab-users">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Registered Platform Accounts</h6>
                                <div class="input-group w-auto style-search-box">
                                    <span class="input-group-text bg-light border-end-0"><i class="bi bi-search text-muted small"></i></span>
                                    <input type="text" class="form-control form-control-sm border-start-0 shadow-none bg-light" placeholder="Search user UID/Email..." style="font-size:0.8rem;">
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">User Accounts Identity</th>
                                                <th class="border-0">Security Role</th>
                                                <th class="border-0">Linked Ledger Balance</th>
                                                <th class="border-0">Account State</th>
                                                <th class="pe-3 text-end border-0">Operations Control</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3">
                                                    <span class="fw-bold text-dark d-block">Chidi Okeke</span>
                                                    <span class="text-muted small">chidi.okeke@example.com</span>
                                                </td>
                                                <td><span class="text-dark fw-semibold">Customer</span></td>
                                                <td class="fw-bold text-dark">₦ 14,500.00</td>
                                                <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1">Active Ledger</span></td>
                                                <td class="pe-3 text-end">
                                                    <button class="btn btn-sm btn-outline-dark px-2 py-0.5" style="font-size:0.75rem;">Audit Logs</button>
                                                    <button class="btn btn-sm btn-outline-danger px-2 py-0.5" style="font-size:0.75rem;">Suspend</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 4: GLOBAL SITE ENGINE SYSTEM SETTINGS -->
                    <div class="tab-pane fade" id="apane-config" role="tabpanel" aria-labelledby="atab-config">
                        <div class="row g-4">
                            
                            <!-- Sub-Block 1: General Core Billing/Fees Commission Config -->
                            <div class="col-12 col-md-7">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-header bg-transparent border-bottom p-3">
                                        <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6"><i class="bi bi-cpu-fill me-2 text-muted"></i>Marketplace Engine Configuration</h6>
                                    </div>
                                    <div class="card-body p-3">
                                        <form>
                                            <div class="row g-3 mb-3">
                                                <div class="col-12 col-sm-6">
                                                    <label class="form-label small fw-semibold text-muted mb-1">Base Vendor Commission Cut</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control shadow-none fw-bold" value="${adminUser.globalCommission}">
                                                        <span class="input-group-text bg-light text-muted fw-semibold" style="font-size:0.85rem;">%</span>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-sm-6">
                                                    <label class="form-label small fw-semibold text-muted mb-1">System Base Settlement Currency</label>
                                                    <select class="form-select shadow-none fw-bold" style="font-size: 0.85rem;">
                                                        <option selected>Nigerian Naira - NGN (₦)</option>
                                                        <option>US Dollar - USD ($)</option>
                                                        <option>Euro - EUR (€)</option>
                                                    </select>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label small fw-semibold text-muted mb-1">Platform Multi-vendor Escrow Holding Rule</label>
                                                    <select class="form-select shadow-none" style="font-size: 0.85rem;">
                                                        <option selected>7 Days Escrow Quarantine Lock (Post Delivery verification)</option>
                                                        <option>Instant Payout Disbursal (High-trusted profiles only)</option>
                                                        <option>14 Days Extended Consumer Protection Escrow Window</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <button class="btn btn-dark fw-bold text-white px-4 text-uppercase py-2 mt-1" type="submit" style="font-size: 0.8rem;">
                                                Apply Platform Configurations
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Sub-Block 2: Operational Gateways Fail-safe & Emergency Switch -->
                            <div class="col-12 col-md-5">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-header bg-transparent border-bottom p-3">
                                        <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6"><i class="bi bi-shield-slash-fill me-2 text-muted"></i>Emergency System Switches</h6>
                                    </div>
                                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-3">Control infrastructure locks and circuit breakers instantly across all storefront nodes in case of emergency security incidents.</p>
                                            
                                            <!-- Switch 1: Platform Global Maintenance Mode -->
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input shadow-none cursor-pointer text-danger" type="checkbox" role="switch" id="maintSwitch">
                                                <label class="form-check-label small fw-bold text-dark" for="maintSwitch">Global Maintenance Circuit (Freeze Frontend)</label>
                                            </div>

                                            <!-- Switch 2: New Merchant Signups Isolation -->
                                            <div class="form-check form-switch mb-3">
                                                <input class="form-check-input shadow-none cursor-pointer" type="checkbox" role="switch" id="signupSwitch" checked>
                                                <label class="form-check-label small fw-semibold text-dark" for="signupSwitch">Allow New Vendor Sign-ups and Onboarding</label>
                                            </div>

                                            <!-- Switch 3: Financial Disbursal Lock -->
                                            <div class="form-check form-switch mb-0">
                                                <input class="form-check-input shadow-none cursor-pointer" type="checkbox" role="switch" id="payoutLockSwitch">
                                                <label class="form-check-label small fw-semibold text-dark" for="payoutLockSwitch">Freeze Automated Friday Payout Withdrawals</label>
                                            </div>
                                        </div>
                                        
                                        <div class="pt-3 border-top border-light mt-3">
                                            <span class="text-muted small d-block mb-0" style="font-size:0.7rem;"><i class="bi bi-info-circle me-1"></i> Modifications trace directly to master audit logs file.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>`
}