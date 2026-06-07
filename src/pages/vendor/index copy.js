export function vendorDashboardLayout() {
    // Sample contextual store data state
    const store = {
        name: "ElectroHub International",
        tier: "Gold Seller",
        rating: "4.7 / 5.0",
        payoutPending: "₦ 452,000.00",
        salesMonth: "₦ 1,890,500.00",
        ordersPending: 14,
        outOfStock: 3
    };

    return /*html*/`
    <div class="container-fluid my-4 px-md-4">
        <div class="row g-4">
            
            <!-- LEFT COLUMN: SIDEBAR CONTROLS -->
            <div class="col-12 col-lg-3">
                <!-- Vendor Shop Badge Card -->
                <div class="card border-0 shadow-sm rounded mb-3 bg-white">
                    <div class="card-body py-4 px-3">
                        <div class="d-flex align-items-center gap-3 mb-3">
                            <div class="d-inline-flex align-items-center justify-content-center bg-danger bg-opacity-10 text-danger rounded p-3" style="width: 54px; height: 54px;">
                                <i class="bi bi-shop fs-3"></i>
                            </div>
                            <div>
                                <h6 class="fw-bold mb-1 text-dark text-truncate" style="max-width: 180px;">${store.name}</h6>
                                <span class="badge bg-warning text-dark fw-bold rounded-pill" style="font-size: 0.7rem;">${store.tier}</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center pt-2 border-top border-light" style="font-size: 0.8rem;">
                            <span class="text-muted">Seller Score:</span>
                            <span class="text-success fw-bold"><i class="bi bi-star-fill text-warning me-1"></i> ${store.rating}</span>
                        </div>
                    </div>
                </div>

                <!-- Navigation Hub Menu Links -->
                <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
                    <div class="list-group list-group-flush" id="vendor-tabs" role="tablist" style="font-size: 0.9rem;">
                        <a class="list-group-item list-group-item-action active border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-overview" data-bs-toggle="list" href="#vpane-overview" role="tab">
                            <i class="bi bi-speedometer2"></i> Dashboard Home
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center justify-content-between" id="vtab-orders" data-bs-toggle="list" href="#vpane-orders" role="tab">
                            <div class="d-flex align-items-center gap-3">
                                <i class="bi bi-receipt-cutoff"></i> Orders Management
                            </div>
                            <span class="badge bg-danger rounded-pill px-2" style="font-size: 0.75rem;">${store.ordersPending}</span>
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center justify-content-between" id="vtab-products" data-bs-toggle="list" href="#vpane-products" role="tab">
                            <div class="d-flex align-items-center gap-3">
                                <i class="bi bi-box-seam"></i> Product Inventory
                            </div>
                            ${store.outOfStock > 0 ? `<span class="badge bg-warning text-dark rounded-pill px-2" style="font-size: 0.75rem;">${store.outOfStock} Low</span>` : ''}
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-finances" data-bs-toggle="list" href="#vpane-finances" role="tab">
                            <i class="bi bi-currency-exchange"></i> Payouts & Fees
                        </a>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: MASTER PERFORMANCE OVERVIEW PANE -->
            <div class="col-12 col-lg-9">
                <div class="tab-content" id="vendor-panes">
                    
                    <!-- PANE 1: DASHBOARD HOME OVERVIEW -->
                    <div class="tab-pane fade show active" id="vpane-overview" role="tabpanel" aria-labelledby="vtab-overview">
                        
                        <!-- Analytical Metrics Row -->
                        <div class="row g-3 mb-4">
                            <!-- Metric 1: Monthly Revenue -->
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="text-muted small text-uppercase fw-semibold">Sales (This Month)</span>
                                            <i class="bi bi-graph-up-arrow text-success fs-5"></i>
                                        </div>
                                        <h5 class="fw-bold mb-0 text-dark">${store.salesMonth}</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 2: Pending Cleared Balance -->
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="text-muted small text-uppercase fw-semibold">Pending Payout</span>
                                            <i class="bi bi-wallet2 text-primary fs-5"></i>
                                        </div>
                                        <h5 class="fw-bold mb-0 text-dark">${store.payoutPending}</h5>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 3: Fulfillment Health -->
                            <div class="col-12 col-sm-6 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-body p-3">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="text-muted small text-uppercase fw-semibold">Fulfillment Rate</span>
                                            <i class="bi bi-shield-check text-success fs-5"></i>
                                        </div>
                                        <h5 class="fw-bold mb-0 text-dark">99.2%</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Main Operational Workspace Logs -->
                        <div class="card border-0 shadow-sm rounded bg-white mb-4">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-7"><i class="bi bi-clock-history me-2 text-warning"></i>Urgent Orders Awaiting Action</h6>
                                <button class="btn btn-sm btn-light border small text-muted" onclick="document.getElementById('vtab-orders').click()">View All</button>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Order Ref</th>
                                                <th class="border-0">Product Details</th>
                                                <th class="border-0">Qty</th>
                                                <th class="border-0">Net Earnings</th>
                                                <th class="border-0">Fulfillment Status</th>
                                                <th class="pe-3 text-end border-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody class="border-0">
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#TX-771029</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="https://picsum.photos/seed/phone/40/40" class="rounded border p-1 bg-light" style="width: 36px; height: 36px;">
                                                        <span class="text-truncate text-dark fw-medium" style="max-width: 180px;">Wireless Bluetooth Earbuds Pro</span>
                                                    </div>
                                                </td>
                                                <td>1x</td>
                                                <td class="fw-bold text-dark">₦ 11,250.00</td>
                                                <td><span class="badge bg-danger bg-opacity-10 text-danger rounded-pill px-2 py-1">Pending Pack</span></td>
                                                <td class="pe-3 text-end">
                                                    <button class="btn btn-sm btn-warning fw-bold text-white px-3" style="background-color: #f68b1e; border: none; font-size: 0.75rem;">Ship Item</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#TX-770954</td>
                                                <td>
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="https://picsum.photos/seed/watch/40/40" class="rounded border p-1 bg-light" style="width: 36px; height: 36px;">
                                                        <span class="text-truncate text-dark fw-medium" style="max-width: 180px;">Smart Fitness Watch Series 8</span>
                                                    </div>
                                                </td>
                                                <td>2x</td>
                                                <td class="fw-bold text-dark">₦ 43,200.00</td>
                                                <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 py-1">Ready to Ship</span></td>
                                                <td class="pe-3 text-end">
                                                    <button class="btn btn-sm btn-light border text-muted px-3" style="font-size: 0.75rem;" disabled>Manifest Printed</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- PANE 2: ORDERS MANAGEMENT FULL VIEW -->
                    <div class="tab-pane fade" id="vpane-orders" role="tabpanel" aria-labelledby="vtab-orders">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Master Order Queue</h6>
                            </div>
                            <div class="card-body p-4 text-center text-muted">
                                <i class="bi bi-inboxes fs-1 d-block mb-2 text-black-50"></i>
                                <p class="mb-0 small">No further processed legacy orders found within this payout window cycle.</p>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 3: PRODUCT INVENTORY MANAGEMENT -->
                    <div class="tab-pane fade" id="vpane-products" role="tabpanel" aria-labelledby="vtab-products">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Live Catalog Listings</h6>
                                <button class="btn btn-sm btn-warning text-white fw-bold px-3 py-1.5" style="background-color: #f68b1e; border: none; font-size: 0.8rem;">
                                    <i class="bi bi-plus-lg me-1"></i> Add New Product
                                </button>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Item SKU</th>
                                                <th class="border-0">Product Info</th>
                                                <th class="border-0">Retail Price</th>
                                                <th class="border-0">Stock Level</th>
                                                <th class="border-0">Visibility Status</th>
                                                <th class="pe-3 text-end border-0">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="border-0">
                                            <tr>
                                                <td class="ps-3 text-muted" style="font-family: monospace;">EH-WLEB-01</td>
                                                <td class="fw-medium text-dark">Wireless Bluetooth Earbuds Pro</td>
                                                <td class="fw-bold text-dark">₦ 12,500.00</td>
                                                <td><span class="text-dark fw-bold">42 units</span></td>
                                                <td><span class="badge bg-success rounded-pill px-2">Active</span></td>
                                                <td class="pe-3 text-end">
                                                    <a href="#" class="text-muted p-1 hover-dark"><i class="bi bi-pencil-square"></i></a>
                                                </td>
                                            </tr>
                                            <tr class="table-warning table-opacity-10">
                                                <td class="ps-3 text-muted" style="font-family: monospace;">EH-SMWT-08</td>
                                                <td class="fw-medium text-dark">Smart Fitness Watch Series 8</td>
                                                <td class="fw-bold text-dark">₦ 24,000.00</td>
                                                <td><span class="text-danger fw-bold"><i class="bi bi-exclamation-triangle-fill me-1"></i> 2 units</span></td>
                                                <td><span class="badge bg-success rounded-pill px-2">Active</span></td>
                                                <td class="pe-3 text-end">
                                                    <a href="#" class="text-muted p-1 hover-dark"><i class="bi bi-pencil-square"></i></a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 4: FINANCES PAYOUTS & FEES -->
                    <div class="tab-pane fade" id="vpane-finances" role="tabpanel" aria-labelledby="vtab-finances">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Payout Accounts Overview</h6>
                            </div>
                            <div class="card-body p-3">
                                <div class="p-3 bg-light rounded d-flex justify-content-between align-items-center mb-0" style="font-size: 0.85rem;">
                                    <div>
                                        <span class="text-muted d-block small mb-1">Settlement Bank Account</span>
                                        <span class="fw-bold text-dark"><i class="bi bi-bank me-2"></i>Access Bank Plc — **** 4567</span>
                                    </div>
                                    <span class="badge bg-success bg-opacity-10 text-success rounded px-2 py-1 fw-bold">Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>`
}