export function vendorDashboardLayout() {
    // Sample vendor store state configuration
    const vendorStore = {
        name: "ElectroHub Gadgets Ltd",
        merchantId: "VND-2026-9941",
        email: "operations@electrohub.com",
        phone: "+234 812 345 6789",
        accountBalance: "₦ 1,245,800.00",
        payoutMethod: "Bank Transfer (Access Bank - *4412)",
        shippingFee: "₦ 2,500.00",
        status: "Active / Verified"
    };

    return /*html*/`
    <div class="container-fluid my-4 px-md-4">
        <div class="row g-4">
            
            <!-- LEFT COLUMN: SIDEBAR NAVIGATION PANEL -->
            <div class="col-12 col-xl-3">
                <!-- Vendor Store Identity Block -->
                <div class="card border-0 shadow-sm rounded mb-3 bg-white">
                    <div class="card-body p-3 d-flex align-items-center gap-3">
                        <div class="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 text-danger rounded fs-3 fw-bold" style="width: 54px; height: 54px;">
                            <i class="bi bi-shop"></i>
                        </div>
                        <div class="overflow-hidden">
                            <h6 class="fw-bold mb-0 text-dark text-truncate">${vendorStore.name}</h6>
                            <p class="text-muted mb-0 style-code text-uppercase" style="font-size: 0.75rem;">ID: ${vendorStore.merchantId}</p>
                            <span class="badge bg-success bg-opacity-10 text-success rounded-pill mt-1" style="font-size: 0.65rem;">${vendorStore.status}</span>
                        </div>
                    </div>
                </div>

                <!-- Navigation Action Links Wrapper -->
                <div class="card border-0 shadow-sm rounded overflow-hidden bg-white">
                    <div class="list-group list-group-flush" id="vendor-dashboard-tabs" role="tablist" style="font-size: 0.9rem;">
                        <a class="list-group-item list-group-item-action active border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-overview" data-bs-toggle="list" href="#vpane-overview" role="tab">
                            <i class="bi bi-speedometer2"></i> Dashboard Metrics
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-products" data-bs-toggle="list" href="#vpane-products" role="tab">
                            <i class="bi bi-box-seam"></i> Product Inventory
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-orders" data-bs-toggle="list" href="#vpane-orders" role="tab">
                            <i class="bi bi-receipt"></i> Customer Orders
                        </a>
                        <a class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3" id="vtab-settings" data-bs-toggle="list" href="#vpane-settings" role="tab">
                            <i class="bi bi-sliders2"></i> Store Settings & Payouts
                        </a>
                        <a href="#" class="list-group-item list-group-item-action border-0 py-3 px-3 d-flex align-items-center gap-3 text-danger border-top">
                            <i class="bi bi-power"></i> Exit Portal
                        </a>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: MASTER CONTENT TAB CONTROLLER -->
            <div class="col-12 col-xl-9">
                <div class="tab-content" id="vendor-dashboard-panes">
                    
                    <!-- PANE 1: ANALYTICS OVERVIEW -->
                    <div class="tab-pane fade show active" id="vpane-overview" role="tabpanel" aria-labelledby="vtab-overview">
                        
                        <!-- 3-Column Top Performance Counters Grid -->
                        <div class="row g-3 mb-4">
                            <!-- Metric 1: Escrow/Account Payout Balance -->
                            <div class="col-12 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider">Withdrawable Funds</p>
                                            <h4 class="fw-bold mb-0 text-dark">${vendorStore.accountBalance}</h4>
                                        </div>
                                        <div class="p-3 bg-success bg-opacity-10 text-success rounded">
                                            <i class="bi bi-wallet2 fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 2: Monthly Sales Performance -->
                            <div class="col-12 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider">Gross Sales (MTD)</p>
                                            <h4 class="fw-bold mb-0 text-dark">₦ 4,890,200.00</h4>
                                        </div>
                                        <div class="p-3 bg-primary bg-opacity-10 text-primary rounded">
                                            <i class="bi bi-graph-up-arrow fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Metric 3: Pending Order Dispatches -->
                            <div class="col-12 col-md-4">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-body p-3 d-flex align-items-center justify-content-between">
                                        <div>
                                            <p class="text-muted small mb-1 text-uppercase fw-bold tracking-wider">Pending Fulfillment</p>
                                            <h4 class="fw-bold mb-0 text-dark">14 Orders</h4>
                                        </div>
                                        <div class="p-3 bg-warning bg-opacity-10 text-warning rounded">
                                            <i class="bi bi-hourglass-split fs-4"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Data Table Summary Preview: Recent Transactions -->
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-7 tracking-wide">Recent Payout Settlements</h6>
                                <span class="badge bg-light text-dark border">Updated Realtime</span>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Reference ID</th>
                                                <th class="border-0">Settlement Date</th>
                                                <th class="border-0">Disbursed Target</th>
                                                <th class="border-0">Net Amount</th>
                                                <th class="pe-3 border-0">Execution</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#PAY-882415</td>
                                                <td class="text-muted">June 02, 2026</td>
                                                <td>Access Bank (...4412)</td>
                                                <td class="fw-bold text-success">+₦ 650,000.00</td>
                                                <td class="pe-3"><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1">Successful</span></td>
                                            </tr>
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#PAY-871092</td>
                                                <td class="text-muted">May 15, 2026</td>
                                                <td>Access Bank (...4412)</td>
                                                <td class="fw-bold text-success">+₦ 894,200.00</td>
                                                <td class="pe-3"><span class="badge bg-success bg-opacity-10 text-success rounded-pill px-2 py-1">Successful</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 2: PRODUCT INVENTORY MANAGER -->
                    <div class="tab-pane fade" id="vpane-products" role="tabpanel" aria-labelledby="vtab-products">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3 d-flex justify-content-between align-items-center flex-wrap gap-2">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Live Offers Catalog</h6>
                                <button class="btn btn-danger btn-sm fw-bold px-3 py-2 text-uppercase d-flex align-items-center gap-2" style="background-color: #e51a22; border:none; font-size:0.75rem;">
                                    <i class="bi bi-plus-square-fill"></i> Add New Product
                                </button>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table table-hover align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Product Details</th>
                                                <th class="border-0">SKU Code</th>
                                                <th class="border-0">Price Point</th>
                                                <th class="border-0">Stock Depth</th>
                                                <th class="pe-3 text-end border-0">Control Options</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3">
                                                    <div class="d-flex align-items-center gap-2">
                                                        <img src="https://picsum.photos/seed/inv1/50/50" class="rounded border object-fit-cover" style="width: 40px; height: 40px;">
                                                        <div class="text-truncate" style="max-width: 220px;">
                                                            <span class="fw-semibold text-dark d-block text-truncate">Wireless Bluetooth Earbuds Pro</span>
                                                            <span class="text-muted" style="font-size:0.75rem;">Category: Electronics</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="text-muted style-code">ELEC-EAR-PRO-X</td>
                                                <td class="fw-bold text-dark">₦ 12,500.00</td>
                                                <td><span class="fw-bold text-success">42 Units Left</span></td>
                                                <td class="pe-3 text-end">
                                                    <button class="btn btn-sm btn-light border p-1 px-2" title="Modify item details"><i class="bi bi-pencil-square"></i></button>
                                                    <button class="btn btn-sm btn-light border p-1 px-2 text-danger" title="Delist product"><i class="bi bi-trash3-fill"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 3: CUSTOMER ORDERS PROCESSING CONTAINER -->
                    <div class="tab-pane fade" id="vpane-orders" role="tabpanel" aria-labelledby="vtab-orders">
                        <div class="card border-0 shadow-sm rounded bg-white">
                            <div class="card-header bg-transparent border-bottom p-3">
                                <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6">Incoming Order Manifest</h6>
                            </div>
                            <div class="card-body p-0">
                                <div class="table-responsive">
                                    <table class="table align-middle mb-0" style="font-size: 0.85rem;">
                                        <thead class="table-light text-muted text-uppercase fw-bold" style="font-size: 0.75rem;">
                                            <tr>
                                                <th class="ps-3 border-0">Order ID</th>
                                                <th class="border-0">Item Purchased</th>
                                                <th class="border-0">Fulfillment Route</th>
                                                <th class="border-0">Dispatch Status</th>
                                                <th class="pe-3 text-end border-0">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="ps-3 fw-semibold text-dark">#ORD-90214</td>
                                                <td>Wireless Bluetooth Earbuds Pro <span class="text-muted">x1</span></td>
                                                <td><span class="small text-muted">Standard Drop-off</span></td>
                                                <td><span class="badge bg-warning bg-opacity-10 text-warning rounded-pill px-2 py-1">Ready for Dropoff</span></td>
                                                <td class="pe-3 text-end"><a href="#" class="btn btn-sm btn-danger px-3 py-1 text-uppercase fw-bold" style="font-size:0.7rem; background-color: #e51a22; border:none">Print Manifest</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- PANE 4: COMPREHENSIVE STORE & PAYOUT SETTINGS -->
                    <div class="tab-pane fade" id="vpane-settings" role="tabpanel" aria-labelledby="vtab-settings">
                        <div class="row g-4">
                            
                            <!-- Sub-Block 1: Basic Store Configuration Profiles -->
                            <div class="col-12">
                                <div class="card border-0 shadow-sm rounded bg-white">
                                    <div class="card-header bg-transparent border-bottom p-3">
                                        <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6"><i class="bi bi-shop me-2 text-muted"></i>Store Metadata Profile</h6>
                                    </div>
                                    <div class="card-body p-3">
                                        <form>
                                            <div class="row g-3 mb-3">
                                                <div class="col-12 col-md-6">
                                                    <label class="form-label small fw-semibold text-muted mb-1">Public Display Shop Name</label>
                                                    <input type="text" class="form-control shadow-none" value="${vendorStore.name}" required>
                                                </div>
                                                <div class="col-12 col-md-6">
                                                    <label class="form-label small fw-semibold text-muted mb-1">Primary Operational Support Phone</label>
                                                    <input type="tel" class="form-control shadow-none" value="${vendorStore.phone}" required>
                                                </div>
                                                <div class="col-12">
                                                    <label class="form-label small fw-semibold text-muted mb-1">Store Operations Email Address</label>
                                                    <input type="email" class="form-control shadow-none" value="${vendorStore.email}" required>
                                                </div>
                                            </div>
                                            <button class="btn btn-danger fw-bold text-white px-4 text-uppercase py-2 mt-2" type="submit" style="background-color: #e51a22; border: none; font-size: 0.8rem;">
                                                Update General Profile
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Sub-Block 2: Logistics & Flat Rate Shipping Policies -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-header bg-transparent border-bottom p-3">
                                        <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6"><i class="bi bi-truck me-2 text-muted"></i>Shipping Logistics Setup</h6>
                                    </div>
                                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                                        <form>
                                            <div class="mb-3">
                                                <label class="form-label small fw-semibold text-muted mb-1">Base Flat-Rate Delivery Charge</label>
                                                <div class="input-group">
                                                    <span class="input-group-text bg-light text-muted fw-semibold" style="font-size:0.85rem;">₦</span>
                                                    <input type="text" class="form-control shadow-none fw-bold" value="2,500.00">
                                                </div>
                                                <p class="text-muted mt-1 mb-0" style="font-size: 0.72rem;">This fee will apply automatically on checkout profiles for buyers ordering cross-regional items from your hub.</p>
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label small fw-semibold text-muted mb-1">Estimated Lead Preparation Window</label>
                                                <select class="form-select shadow-none" style="font-size: 0.85rem;">
                                                    <option selected>Within 24 Hours (Fast-Track Dispatched)</option>
                                                    <option>1 - 2 Business Working Days</option>
                                                    <option>3 - 5 Extended Procurement Days</option>
                                                </select>
                                            </div>
                                            <button class="btn btn-outline-dark fw-bold px-3 text-uppercase py-2 w-100 mt-2" type="submit" style="font-size: 0.75rem;">
                                                Save Logistics Rules
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <!-- Sub-Block 3: Financial Settlement Banking Profiles -->
                            <div class="col-12 col-md-6">
                                <div class="card border-0 shadow-sm rounded bg-white h-100">
                                    <div class="card-header bg-transparent border-bottom p-3">
                                        <h6 class="fw-bold mb-0 text-dark text-uppercase fs-6"><i class="bi bi-bank me-2 text-muted"></i>Revenue Payout Channel</h6>
                                    </div>
                                    <div class="card-body p-3 d-flex flex-column justify-content-between">
                                        <div>
                                            <div class="bg-light p-3 rounded border border-dashed mb-3">
                                                <span class="text-uppercase tracking-wider text-muted fw-bold d-block mb-1" style="font-size:0.65rem;">Active Target Vault</span>
                                                <span class="fw-bold text-dark fs-6 d-block">${vendorStore.payoutMethod}</span>
                                                <span class="text-success small d-block mt-1"><i class="bi bi-patch-check-fill me-1"></i> Verified for Direct Escrow Auto-Release</span>
                                            </div>
                                            <p class="text-muted mb-0" style="font-size: 0.75rem;">Revenue from successfully completed deliveries is systematically released straight to this financial channel every Friday morning.</p>
                                        </div>
                                        <button class="btn btn-outline-secondary fw-bold px-3 text-uppercase py-2 w-100 mt-3" type="button" style="font-size: 0.75rem;">
                                            Change Banking Target
                                        </button>
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