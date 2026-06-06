import { CompanyInfo } from "../../main"
export function adminDashboardLayout() {
    return /*html*/`
    <div class="d-flex min-vh-100 bg-light" id="dashboard-wrapper">
        
        <!-- SIDEBAR NAVIGATION -->
        <aside class="bg-dark text-white flex-shrink-0" style="width: 260px; min-height: 100vh;">
            <!-- Brand Logotype -->
            <div class="p-3 border-bottom border-secondary d-flex align-items-center gap-2">
                <i class="bi bi-speedometer2 text-warning fs-4"></i>
                <span class="fs-5 fw-bold tracking-wide text-uppercase text-white">Merchant Admin</span>
            </div>
            
            <!-- Nav Links -->
            <div class="p-3">
                <ul class="nav nav-pills flex-column gap-1" id="sidebar-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link active bg-warning text-dark fw-bold d-flex align-items-center gap-3 py-2 px-3 rounded">
                            <i class="bi bi-grid-1x2-fill"></i> Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white-50 hover-white d-flex align-items-center justify-content-between gap-3 py-2 px-3 rounded transition-all">
                            <div class="d-flex align-items-center gap-3">
                                <i class="bi bi-tags-fill text-white"></i> Categories
                            </div>
                            <span class="badge bg-secondary rounded-pill" style="font-size: 0.7rem;">20</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white-50 hover-white d-flex align-items-center gap-3 py-2 px-3 rounded transition-all">
                            <i class="bi bi-box-seam-fill text-white"></i> Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white-50 hover-white d-flex align-items-center gap-3 py-2 px-3 rounded transition-all">
                            <i class="bi bi-cart-check-fill text-white"></i> Orders
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white-50 hover-white d-flex align-items-center gap-3 py-2 px-3 rounded transition-all">
                            <i class="bi bi-people-fill text-white"></i> Customers
                        </a>
                    </li>
                    <li class="nav-item">
                        <hr class="border-secondary my-2 opacity-25">
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link text-white-50 hover-white d-flex align-items-center gap-3 py-2 px-3 rounded transition-all">
                            <i class="bi bi-gear-fill text-white"></i> Settings
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

        <!-- MAIN VIEW CONTENT LAYER -->
        <main class="flex-grow-1 d-flex flex-column overflow-hidden">
            
            <!-- TOP UTILITY NAVBAR -->
            <header class="navbar navbar-expand bg-white border-bottom px-4 py-2 shadow-sm">
                <div class="container-fluid p-0 d-flex justify-content-between align-items-center">
                    <h5 class="mb-0 fw-bold text-dark">Overview Workspace</h5>
                    
                    <!-- Admin Profile Node -->
                    <div class="dropdown">
                        <button class="btn border-0 d-flex align-items-center gap-2 px-2 shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <div class="bg-warning text-dark fw-bold rounded-circle d-flex align-items-center justify-content-center shadow-sm" style="width: 36px; height: 36px;">A</div>
                            <div class="text-start d-none d-sm-block">
                                <p class="mb-0 small fw-bold text-dark leading-none">Admin Controller</p>
                                <span class="text-muted" style="font-size: 0.7rem;">Superuser</span>
                            </div>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end shadow-sm border-0 mt-2">
                            <li><a class="dropdown-item py-2 small" href="#"><i class="bi bi-person me-2"></i> Profile Info</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item py-2 small text-danger" href="#"><i class="bi bi-box-arrow-right me-2"></i> Close Session</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <!-- ANALYTICS CONTAINER -->
            <section class="p-4 flex-grow-1 overflow-y-auto">
                
                <!-- ROW 1: ANALYTICS CARDS -->
                <div class="row g-4 mb-4">
                    <!-- Stat Item 1 -->
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm rounded p-3 bg-white">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted small text-uppercase fw-bold">Gross Income</span>
                                    <h4 class="fw-bold text-dark mt-1 mb-0">₦2,450,000</h4>
                                </div>
                                <div class="p-3 bg-success bg-opacity-10 text-success rounded-circle fs-4 leading-none"><i class="bi bi-currency-exchange"></i></div>
                            </div>
                            <div class="mt-2 text-success small fw-semibold"><i class="bi bi-arrow-up-short"></i> +12.5% <span class="text-muted font-normal">this week</span></div>
                        </div>
                    </div>
                    <!-- Stat Item 2 -->
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm rounded p-3 bg-white">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted small text-uppercase fw-bold">Open Orders</span>
                                    <h4 class="fw-bold text-dark mt-1 mb-0">142 Items</h4>
                                </div>
                                <div class="p-3 bg-primary bg-opacity-10 text-primary rounded-circle fs-4 leading-none"><i class="bi bi-bag-check-fill"></i></div>
                            </div>
                            <div class="mt-2 text-primary small fw-semibold"><i class="bi bi-clock-history"></i> 12 pending packaging</div>
                        </div>
                    </div>
                    <!-- Stat Item 3 -->
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm rounded p-3 bg-white">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted small text-uppercase fw-bold">Active Subcategories</span>
                                    <h4 class="fw-bold text-dark mt-1 mb-0">14 Node Branches</h4>
                                </div>
                                <div class="p-3 bg-warning bg-opacity-10 text-warning rounded-circle fs-4 leading-none"><i class="bi bi-diagram-3-fill"></i></div>
                            </div>
                            <div class="mt-2 text-muted small">Linked to 6 top parent units</div>
                        </div>
                    </div>
                    <!-- Stat Item 4 -->
                    <div class="col-12 col-sm-6 col-xl-3">
                        <div class="card border-0 shadow-sm rounded p-3 bg-white">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <span class="text-muted small text-uppercase fw-bold">System Status</span>
                                    <h4 class="fw-bold text-success mt-1 mb-0">99.98% Operational</h4>
                                </div>
                                <div class="p-3 bg-info bg-opacity-10 text-info rounded-circle fs-4 leading-none"><i class="bi bi-cpu-fill"></i></div>
                            </div>
                            <div class="mt-2 text-muted small">Server ping: 14ms latency</div>
                        </div>
                    </div>
                </div>

                <!-- ROW 2: ACTIVE CATEGORY MONITOR TABLE -->
                <div class="card border-0 shadow-sm rounded bg-white">
                    <div class="card-header border-0 bg-white py-3 px-4 d-flex align-items-center justify-content-between">
                        <h6 class="fw-bold text-dark mb-0">Recently Created Base Categories</h6>
                        <button class="btn btn-warning btn-sm fw-bold text-white d-flex align-items-center gap-1 px-3 py-1.5" style="background-color: #f68b1e; border:none; font-size: 0.75rem;">
                            <i class="bi bi-plus-lg"></i> Append New Entry
                        </button>
                    </div>
                    <div class="table-responsive px-4 pb-3">
                        <table class="table table-hover align-middle mb-0" style="font-size: 0.85rem;">
                            <thead class="table-light text-muted fw-bold">
                                <tr>
                                    <th scope="col" class="py-2.5">ID Hash</th>
                                    <th scope="col">Icon Display</th>
                                    <th scope="col">Category Descriptor</th>
                                    <th scope="col">URL Route Slug</th>
                                    <th scope="col">Parent Relation</th>
                                    <th scope="col" class="text-end">Management Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-secondary fw-mono">#00001</td>
                                    <td class="fs-5">🥩</td>
                                    <td><span class="fw-bold text-dark">Supermarket</span></td>
                                    <td><code class="bg-light px-2 py-1 text-danger rounded">supermarket</code></td>
                                    <td><span class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">Master Root</span></td>
                                    <td class="text-end">
                                        <div class="btn-group">
                                            <button class="btn btn-light btn-sm border-0 text-primary" title="Modify Node"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn btn-light btn-sm border-0 text-danger" title="Purge Record"><i class="bi bi-trash-fill"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-secondary fw-mono">#00002</td>
                                    <td class="fs-5">📱</td>
                                    <td><span class="fw-bold text-dark">Phones & Tablets</span></td>
                                    <td><code class="bg-light px-2 py-1 text-danger rounded">phones-tablets</code></td>
                                    <td><span class="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-25">Master Root</span></td>
                                    <td class="text-end">
                                        <div class="btn-group">
                                            <button class="btn btn-light btn-sm border-0 text-primary" title="Modify Node"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn btn-light btn-sm border-0 text-danger" title="Purge Record"><i class="bi bi-trash-fill"></i></button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-secondary fw-mono">#00007</td>
                                    <td class="fs-5">🥫</td>
                                    <td><span class="text-dark">Groceries</span></td>
                                    <td><code class="bg-light px-2 py-1 text-danger rounded">supermarket-groceries</code></td>
                                    <td><span class="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25">ID: #00001 (Supermarket)</span></td>
                                    <td class="text-end">
                                        <div class="btn-group">
                                            <button class="btn btn-light btn-sm border-0 text-primary" title="Modify Node"><i class="bi bi-pencil-square"></i></button>
                                            <button class="btn btn-light btn-sm border-0 text-danger" title="Purge Record"><i class="bi bi-trash-fill"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </main>
    </div>`
}