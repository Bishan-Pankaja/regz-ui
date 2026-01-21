import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    /* Custom CSS Variables for Modone Theme */
    :root {
        --modone-bg-primary: #000000;
        --modone-bg-secondary: #0f0f0f;
        --modone-bg-tertiary: #1a1a1a;
        --modone-bg-accent: #2a2a2a;

        --modone-text-primary: #f9fafb;
        --modone-text-secondary: #d1d5db;
        --modone-text-muted: #6b7280;

        --modone-border-primary: #374151;
        --modone-border-secondary: #4b5563;

        --modone-primary: #60a5fa;
        --modone-primary-dark: #3b82f6;
        --modone-primary-light: #93c5fd;

        --modone-success: #10b981;
        --modone-danger: #ef4444;
        --modone-warning: #f59e0b;

        --modone-radius: 12px;
        --modone-radius-lg: 16px;
        --modone-radius-xl: 20px;

        --modone-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        --modone-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.4);
        --modone-shadow-xl: 0 20px 60px rgba(0, 0, 0, 0.5);
    }

    body {
        ${tw`font-sans bg-neutral-800 text-neutral-200`};
        letter-spacing: 0.015em;
        background: linear-gradient(135deg, var(--modone-bg-primary) 0%, var(--modone-bg-secondary) 50%, var(--modone-bg-primary) 100%) !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
        color: var(--modone-text-primary) !important;
        font-family: 'Inter', sans-serif !important;
    }

    p {
        ${tw`text-neutral-200 leading-snug font-sans`};
        color: var(--modone-text-secondary) !important;
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Enhanced Scroll Bar Style for Modone Theme */
    ::-webkit-scrollbar {
        background: var(--modone-bg-secondary);
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--modone-border-primary);
        border-radius: 4px;
        transition: background 0.3s ease;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--modone-primary);
    }

    ::-webkit-scrollbar-track {
        background: var(--modone-bg-secondary);
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }

    /* Modone Theme Component Overrides */

    /* Cards */
    .card, [class*="card"] {
        background: linear-gradient(135deg, var(--modone-bg-tertiary) 0%, var(--modone-bg-secondary) 100%) !important;
        border: 1px solid var(--modone-border-primary) !important;
        border-radius: var(--modone-radius-lg) !important;
        box-shadow: var(--modone-shadow) !important;
        transition: all 0.3s ease !important;
        overflow: hidden !important;
    }

    .card:hover, [class*="card"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: var(--modone-shadow-lg) !important;
        border-color: rgba(96, 165, 250, 0.3) !important;
    }

    /* Buttons */
    .btn, button, [class*="btn"], [class*="button"] {
        border-radius: var(--modone-radius) !important;
        font-weight: 600 !important;
        transition: all 0.3s ease !important;
        border: none !important;
        position: relative !important;
        overflow: hidden !important;
        text-transform: uppercase !important;
        letter-spacing: 0.5px !important;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2) !important;
        font-family: 'Inter', sans-serif !important;
    }

    .btn-primary, .button-primary, [class*="btn-primary"] {
        background: linear-gradient(135deg, var(--modone-primary) 0%, var(--modone-primary-dark) 100%) !important;
        color: white !important;
    }

    .btn-primary:hover, .button-primary:hover, [class*="btn-primary"]:hover {
        background: linear-gradient(135deg, var(--modone-primary-light) 0%, var(--modone-primary) 100%) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 25px rgba(96, 165, 250, 0.4) !important;
        color: white !important;
    }

    .btn-success, .button-success, [class*="btn-success"] {
        background: linear-gradient(135deg, var(--modone-success) 0%, #059669 100%) !important;
        color: white !important;
    }

    .btn-success:hover, .button-success:hover, [class*="btn-success"]:hover {
        background: linear-gradient(135deg, #34d399 0%, var(--modone-success) 100%) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 25px rgba(16, 185, 129, 0.4) !important;
        color: white !important;
    }

    .btn-danger, .button-danger, [class*="btn-danger"] {
        background: linear-gradient(135deg, var(--modone-danger) 0%, #dc2626 100%) !important;
        color: white !important;
    }

    .btn-danger:hover, .button-danger:hover, [class*="btn-danger"]:hover {
        background: linear-gradient(135deg, #f87171 0%, var(--modone-danger) 100%) !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 25px rgba(239, 68, 68, 0.4) !important;
        color: white !important;
    }

    /* Form Inputs */
    input, textarea, select, [class*="input"], [class*="form-control"] {
        background: var(--modone-bg-tertiary) !important;
        border: 2px solid var(--modone-border-primary) !important;
        border-radius: var(--modone-radius) !important;
        color: var(--modone-text-primary) !important;
        transition: all 0.3s ease !important;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1) !important;
        font-family: 'Inter', sans-serif !important;
    }

    input:focus, textarea:focus, select:focus, [class*="input"]:focus, [class*="form-control"]:focus {
        border-color: var(--modone-primary) !important;
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.1) !important;
        background: var(--modone-bg-secondary) !important;
    }

    input::placeholder, textarea::placeholder, [class*="input"]::placeholder, [class*="form-control"]::placeholder {
        color: var(--modone-text-muted) !important;
    }

    /* Navigation */
    .navigation, [class*="nav"], [class*="navbar"] {
        background: linear-gradient(135deg, var(--modone-bg-tertiary) 0%, var(--modone-bg-accent) 100%) !important;
        border-bottom: 1px solid var(--modone-border-primary) !important;
        box-shadow: var(--modone-shadow) !important;
    }

    /* Sidebar */
    .sidebar, [class*="sidebar"] {
        background: linear-gradient(180deg, var(--modone-bg-tertiary) 0%, var(--modone-bg-accent) 100%) !important;
        border-right: 1px solid var(--modone-border-primary) !important;
    }

    .sidebar-item, [class*="sidebar"] a, [class*="sidebar"] li {
        color: var(--modone-text-secondary) !important;
        transition: all 0.3s ease !important;
        border-radius: var(--modone-radius) !important;
    }

    .sidebar-item:hover, [class*="sidebar"] a:hover, [class*="sidebar"] li:hover {
        background: rgba(96, 165, 250, 0.1) !important;
        color: var(--modone-primary) !important;
        transform: translateX(4px) !important;
    }

    .sidebar-item.active, [class*="sidebar"] .active {
        background: linear-gradient(135deg, var(--modone-primary) 0%, var(--modone-primary-dark) 100%) !important;
        color: white !important;
        box-shadow: 0 4px 20px rgba(96, 165, 250, 0.3) !important;
    }

    /* Tables */
    table, [class*="table"] {
        background: var(--modone-bg-tertiary) !important;
        color: var(--modone-text-secondary) !important;
        border-radius: var(--modone-radius) !important;
        overflow: hidden !important;
        border: 1px solid var(--modone-border-primary) !important;
    }

    thead, [class*="table"] thead {
        background: linear-gradient(135deg, var(--modone-bg-accent) 0%, var(--modone-bg-tertiary) 100%) !important;
    }

    thead th, [class*="table"] thead th {
        color: var(--modone-text-primary) !important;
        font-weight: 600 !important;
        border-bottom: 2px solid var(--modone-primary) !important;
    }

    tbody tr, [class*="table"] tbody tr {
        border-bottom: 1px solid var(--modone-border-primary) !important;
        transition: all 0.2s ease !important;
    }

    tbody tr:hover, [class*="table"] tbody tr:hover {
        background: rgba(96, 165, 250, 0.05) !important;
    }

    tbody td, [class*="table"] tbody td {
        color: var(--modone-text-secondary) !important;
    }

    /* Modals */
    .modal-overlay, [class*="modal"] [class*="overlay"] {
        background: rgba(0, 0, 0, 0.8) !important;
        backdrop-filter: blur(10px) !important;
    }

    .modal-content, [class*="modal"] [class*="content"] {
        background: linear-gradient(135deg, var(--modone-bg-tertiary) 0%, var(--modone-bg-secondary) 100%) !important;
        border: 1px solid var(--modone-border-primary) !important;
        border-radius: var(--modone-radius-xl) !important;
        box-shadow: var(--modone-shadow-xl) !important;
        backdrop-filter: blur(20px) !important;
    }

    .modal-header, [class*="modal"] [class*="header"] {
        background: linear-gradient(135deg, var(--modone-bg-accent) 0%, var(--modone-bg-tertiary) 100%) !important;
        border-bottom: 1px solid var(--modone-border-primary) !important;
        color: var(--modone-text-primary) !important;
    }

    .modal-body, [class*="modal"] [class*="body"] {
        background: var(--modone-bg-secondary) !important;
        color: var(--modone-text-secondary) !important;
    }

    /* Alerts */
    .alert, [class*="alert"], [class*="notification"] {
        border-radius: var(--modone-radius) !important;
        border: none !important;
        position: relative !important;
        overflow: hidden !important;
    }

    .alert::before, [class*="alert"]::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: currentColor;
    }

    .alert-success, [class*="alert-success"] {
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%) !important;
        color: #86efac !important;
        border-left: 4px solid var(--modone-success) !important;
    }

    .alert-danger, [class*="alert-danger"] {
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%) !important;
        color: #fca5a5 !important;
        border-left: 4px solid var(--modone-danger) !important;
    }

    .alert-warning, [class*="alert-warning"] {
        background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%) !important;
        color: #fcd34d !important;
        border-left: 4px solid var(--modone-warning) !important;
    }

    /* Links */
    a, [class*="link"] {
        color: var(--modone-primary) !important;
        transition: all 0.2s ease !important;
    }

    a:hover, [class*="link"]:hover {
        color: var(--modone-primary-light) !important;
    }

    /* Code blocks */
    code, pre, [class*="code"] {
        background: var(--modone-bg-tertiary) !important;
        color: var(--modone-text-primary) !important;
        border: 1px solid var(--modone-border-primary) !important;
        border-radius: var(--modone-radius) !important;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace !important;
    }

    /* Loading states */
    .loading, .spinner, [class*="loading"], [class*="spinner"] {
        color: var(--modone-primary) !important;
    }

    /* Utility Classes */
    .text-primary, [class*="text-primary"] { color: var(--modone-primary) !important; }
    .text-success, [class*="text-success"] { color: var(--modone-success) !important; }
    .text-danger, [class*="text-danger"] { color: var(--modone-danger) !important; }
    .text-warning, [class*="text-warning"] { color: var(--modone-warning) !important; }
    .text-muted, [class*="text-muted"] { color: var(--modone-text-muted) !important; }

    /* Animations */
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 20px rgba(96, 165, 250, 0.3);
        }
        50% {
            box-shadow: 0 0 30px rgba(96, 165, 250, 0.6);
        }
    }

    .fade-in-up {
        animation: fadeInUp 0.5s ease-out;
    }

    .glow-primary {
        animation: glow 2s ease-in-out infinite;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .card, [class*="card"], .modal-content, [class*="modal"] [class*="content"] {
            margin: 0.5rem !important;
            border-radius: var(--modone-radius) !important;
        }
    }

    /* High Contrast Mode */
    @media (prefers-contrast: high) {
        :root {
            --modone-border-primary: #ffffff;
            --modone-text-primary: #ffffff;
            --modone-bg-tertiary: #000000;
        }
    }

    /* Reduced Motion */
    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;
