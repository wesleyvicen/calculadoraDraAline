import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
    font-family: "Roboto";
    border-radius: 15px;
    padding: 15px 0;
    background: white;

    .box {
        background: #fff;
    }

    .boxImage {
        margin: 0 auto;
    }

    .logo {
        display: flex;
        max-width: 250px;
        max-height: 95px;
        margin: 4% auto 1%;
        color: white;
    }

    .item {
        text-align: center;
        flex-grow: 1;
    }

    * {
        box-sizing: border-box;
    }
    tr:nth-child(odd) {
        background-color: #fff;
    }
    tr:nth-child(even) {
        background-color: #f5f5f5;
    }

    .group {
        flex: 1;
        margin: 0 15px 45px;
    }
    input,
    select {
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        width: 100%;
        border: none;
        border-bottom: 1px solid black;
    }

    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"] {
        -moz-appearance: textfield;
        appearance: textfield;
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-indent: 1px;
        text-overflow: "";
        background: transparent;
    }
    .whatsapp {
        background-color: #310204;
        color: white;
        padding: 8px 15px;
        border-radius: 5px;
        margin-top: 15px;
        text-align: center;
        text-decoration: none;
    }
    .divw {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    textarea:focus,
    input:focus,
    select:focus {
        box-shadow: 0 0 0 0;
        border-bottom: solid black 1.5px;
        outline-style: none;
    }

    label {
        color: #999;
        font-size: 18px;
        font-weight: normal;
    }

    table {
        width: 100%;
        display: table;
        border-collapse: collapse;
        border-spacing: 0;
    }
    tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }
    td {
        text-align: center;
        padding: 8px;
    }

    .products-list {
        margin: 20px 0;
        padding: 1vh;
    }

    .group input[type="text"] {
        font-size: 16px;
        padding: 8px 10px;
        width: 100%;
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.12);
        margin-top: 8px;
    }

    .product-item {
        display: grid;
        grid-template-columns: 40px 1fr 80px;
        align-items: center;
        gap: 12px;
        margin-bottom: 10px;
        padding: 8px 10px;
        background: #fafafa;
        border-radius: 6px;
        border: 1px solid rgba(0,0,0,0.04);
    }

    .product-checkbox {
        justify-self: center;
        transform: scale(0.95);
        margin: 0;
    }

    /* larger, more visible checkbox with brand color */
    .product-checkbox {
        width: 18px;
        height: 18px;
        accent-color: #310204;
    }

    .product-name {
        font-size: 18px;
        color: #210101;
        min-width: 0;
        white-space: normal;
        word-break: break-word;
    }

    .product-quantity {
        width: 70px;
        justify-self: end;
        text-align: right;
    }

    .product-item {
        transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease;
    }

    .product-item:hover {
        background-color: #fff6f6;
        box-shadow: 0 2px 8px rgba(33,1,1,0.04);
    }

    .product-item {
        cursor: pointer;
    }

    .product-item:focus {
        outline: 3px solid rgba(49,2,4,0.12);
        outline-offset: 2px;
    }

    .product-checkbox:checked + .product-name,
    .product-item.checked .product-name {
        font-weight: 700;
    }

    .product-checkbox:checked ~ .product-quantity,
    .product-item.checked .product-quantity {
        background: #fff9c4;
        border-radius: 4px;
        padding: 6px 8px;
    }

    .other-products {
        margin-top: 20px;
        padding: 1vh;
    }

    .other-product-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }

    .other-name {
        flex: 1;
        margin-right: 10px;
    }

    .other-quantity {
        width: 80px;
    }

    .submit-btn {
        background-color: #310204;
        color: white;
        padding: 10px 22px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 18px;
        width: auto;
        display: block;
        margin: 20px auto 0 auto; /* centered */
        min-width: 180px;
    }

    .submit-btn:hover:enabled {
        background-color: #4a0a1a;
    }

    .submit-btn:disabled {
        background-color: #ddd;
        color: #888;
        cursor: not-allowed;
        box-shadow: none;
    }

    .alert {
        margin-top: 10px;
        padding: 10px;
        border-radius: 5px;
        color: white;
    }

    .alert-error {
        background-color: #f44336;
    }

    .alert-success {
        background-color: #4caf50;
    }

    .confirm-modal {
        position: relative;
        background: #ffffff;
        padding: 20px 18px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(33,1,1,0.12), 0 2px 8px rgba(33,1,1,0.06);
        z-index: 1001;
        max-width: 520px;
        width: 96%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .modal-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.45);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 24px;
    }

    .confirm-modal header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    .confirm-modal h4 {
        margin: 0;
        font-size: 1.125rem;
        color: #210101;
    }

    .confirm-modal p.description {
        margin: 0 0 12px 0;
        color: #444;
        font-size: 0.95rem;
    }

    .confirm-modal ul {
        margin: 8px 0 12px 1rem;
        padding: 0;
        color: #333;
        max-height: 220px;
        overflow: auto;
    }

    .confirm-modal .modal-actions {
        display: flex;
        gap: 10px;
        margin-top: 12px;
    }

    .btn {
        padding: 10px 14px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.98rem;
    }

    .btn-primary {
        background: #310204;
        color: #fff;
        box-shadow: 0 6px 16px rgba(49,2,4,0.12);
    }

    .btn-secondary {
        background: #f3f3f3;
        color: #210101;
    }

    
    @media only screen and (min-width: 320px) {
        margin: 15px 25px;
    }

    @media only screen and (min-width: 620px) {
        margin: 15px 100px;
    }
    @media only screen and (min-width: 920px) {
        margin: 20px 150px;
    }
    @media only screen and (min-width: 1200px) {
        margin: 20px 200px;
    }
    @media only screen and (min-width: 1400px) {
        margin: 20px 250px;
    }
`;
