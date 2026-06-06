import { CompanyInfo } from "../../main"
export function customerDashboardLayout() {
    // Sample contextual customer data state
    const customer = {
        firstName: "Chidi",
        lastName: "Okeke",
        email: "chidi.okeke@example.com",
        phone: "+234 803 123 4567",
        balance: "₦ 14,500.00",
        address: "12, Joel Ogunnaike Street, Ikeja GRA, Lagos, Nigeria"
    };

    return /*html*/`
    <div class="container my-4">
        <div class="row g-4">
            
            <!-- LEFT COLUMN: SIDEBAR NAVIGATION -->
            <div class="col-12 col-lg-3">
                <!-- Customer Profile Brief Card -->
                <div class="card border-0 shadow-sm rounded mb-3 bg-white">
                    <div class="card-body text-center py-4">
                        <div class="d-inline-flex align-items-center justify-content-center bg-warning bg-opacity-10 text-warning rounded-circle mb-3" style="width: 64px; height: 64px;">
                            <i class="bi bi-person-fill fs-2"></i>
                        </div>
                        <h6 class="fw-bold mb-1 text-dark">${customer.firstName} ${customer.lastName}</h6>
                        <p class="text-muted small mb-0">${customer.email}</p>
                    </div>
                </div>

                <!-- Navigation Menu Links Container -->
                <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
                    <div class="list-group list-group-flush" id="dashboard-tabs" role="tablist" style="font-size: 0.9rem;">
                        <a class="list-group-item list-group-item-action active border-0 py-3 px-3 d-flex align-items-center gap-3" id="tab-overview" data-bs-toggle="list" href="#pane-overview" role="tab">
                            <i class="bi bi-grid-1x2-fill"></i> Account Overview
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="tab-orders" data-bs-toggle="list" href="#pane-orders" role="tab">
                            <i class="bi bi-box-seam-fill"></i> Orders History
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="tab-wallet" data-bs-toggle="list" href="#pane-wallet" role="tab">
                            <i class="bi bi-wallet2"></i> Digital Wallet
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="tab-profile" data-bs-toggle="list" href="#pane-profile" role="tab">
                            <i class="bi bi-gear-fill"></i> Account Settings
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3 text-danger border-top">
                            <i class="bi bi-box-arrow-left"></i> Logout Account
                        </a>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: DYNAMIC CONTENT AREA CONTROLLER -->
            <div class="col-12 col-lg-9">
                <div class="tab-content" id="dashboard-panes">
                    
                    <!-- PANE 1: ACCOUNT OVERVIEW -->
                    <div class="tab-pane fade show active" id="pane-overview" role="tabpanel" aria-labelledby="tab-overview">
                        <div class="row g-3 mb-4">
                            <!-- Stats Box 1: Wallet Balance -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded h-100 bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider">Wallet Balance</p>
                                            <h4 class="fw-bold mb-0 text-dark">${customer.balance}</h4>
                                        </div>
                                        <div class="p-3 bg-success bg-opacity-10 text-success rounded">
                                            <i class="bi bi-cash-stack fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Stats Box 2: Total Orders -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded h-100 bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider">Active Orders</p>
                                            <h4 class="fw-bold mb-0 text-dark">2 Items</h4>
                                        </div>
                                        <div class="p-3 bg-primary bg-opacity-10 text-primary rounded">
                                            <i class="bi bi-truck fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Info Cards Row -->
                        <div class="row g-3 mb-4">
                            <!-- Delivery Address Card View -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded h-100 bg-white">
                                    <div class="card-header bg-transparent border-0 pt-3 pb-0 px-3 d-flex justify-content-between align-items-center">
                                        <h6 class="fw-bold mb-0 text-uppercase small text-muted">Primary Address</h6>
                                        <a href="#" class="text-warning text-decoration-none small" style="color: #f68b1e !important;"><i class="bi bi-pencil-square"></i></a>
                                    </div>
                                    <div class="card-body p-3">
                                        <p class="fw-semibold mb-1 text-dark">${customer.firstName} ${customer.lastName}</p>
                                        <p class="text-muted small mb-2 line-height-sm">${customer.address}</p>
                                        <p class="text-muted small mb-0">${customer.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Preferences Summary Card -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded h-100 bg-white">
                                    <div class="card-header bg-transparent border-0 pt-3 pb-0 px-3">
                                        <h6 class="fw-bold mb-0 text-uppercase small text-muted">Newsletter Control</h6>
                                    </div>
                                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                                        <p class="text-muted small mb-3">You are currently subscribed to receive daily promotional flash sale deals and structural marketplace newsletters.</p>
                                        <div class="form-check form-switch m-0">
                                            <input class="form-check-input shadow-none cursor-pointer" type="checkbox" role="switch" id="newsSwitch" checked>
                                            <label class="form-check-label small fw-semibold text-dark" for="newsSwitch">Subscribed to Email updates</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 2: ORDERS HISTORY -->
                    <div class="tab-pane fade" id="pane-orders" role="tabpanel" aria-labelledby="tab-orders">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Your Placed Orders</h6>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Order ID</th>
                                                <th class="border-0">Date Placed</th>
                                                <th class="border-0">Grand Total</th>
                                                <th class="border-0">Status</th>
                                                <th class="pe-3 text-end border-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="border-0">
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#ORD-90214</td>
                                                <td class="text-muted">June 04, 2026</td>
                                                <td class="fw-bold text-dark">₦ 12,500.00</td>
                                                <td><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1">Delivered</span></td>
                                                <td class="pe-3 text-end"><a href="#" class="btn btn-sm btn-outline-secondary px-3 py-1">Details</a></td>
                                            </tr>
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#ORD-88125</td>
                                                <td class="text-muted">May 28, 2026</td>
                                                <td class="fw-bold text-dark">₦ 24,000.00</td>
                                                <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 py-1">In Transit</span></td>
                                                <td class="pe-3 text-end"><a href="#" class="btn btn-sm btn-outline-secondary px-3 py-1">Details</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 3: DIGITAL WALLET -->
                    <div class="tab-pane fade" id="pane-wallet" role="tabpanel" aria-labelledby="tab-wallet">
                        <div class="card border-0 shadow-sm rounded bg-white mb-4">
                            <div class="card-body p-4 text-center">
                                <p class="text-muted small text-uppercase fw-bold tracking-wider mb-2">Available Credits</p>
                                <h2 class="fw-bold text-dark mb-3">${customer.balance}</h2>
                                <button class="btn btn-warning fw-bold text-white px-4 text-uppercase py-2" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                    <i class="bi bi-plus-circle-fill me-2"></i> Top Up Balance
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 4: ACCOUNT SETTINGS -->
                    <div class="tab-pane fade" id="pane-profile" role="tabpanel" aria-labelledby="tab-profile">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Personal Details Modification</h6>
                            </div>
                            <div class="card-body p-3">
                                <form>
                                    <div class="row g-3 mb-3">
                                        <div class="col-12 col-md-6">
                                            <label class="form-label small fw-semibold text-muted">First Name</label>
                                            <input type="text" class="form-control shadow-none" value="${customer.firstName}" required>
                                        </div>
                                        <div class="col-12 col-md-6">
                                            <label class="form-label small fw-semibold text-muted">Last Name</label>
                                            <input type="text" class="form-control shadow-none" value="${customer.lastName}" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label small fw-semibold text-muted">Phone Number</label>
                                        <input type="tel" class="form-control shadow-none" value="${customer.phone}" required>
                                    </div>
                                    <hr class="my-4 text-muted opacity-25">
                                    <button class="btn btn-warning fw-bold text-white px-4 text-uppercase py-2" type="submit" style="background-color: #f68b1e; border: none; font-size: 0.85rem;">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>`
}