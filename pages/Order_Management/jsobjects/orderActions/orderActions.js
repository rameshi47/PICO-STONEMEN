export default {

  // ── VALIDATION ──────────────────────────────
  validateAddForm() {
    if (!inp_barcode.text || inp_barcode.text.trim() === '') {
      showAlert('Barcode is required!', 'error');
      return false;
    }
    if (!inp_product_code.text || inp_product_code.text.trim() === '') {
      showAlert('Product Code is required!', 'error');
      return false;
    }
    if (!inp_quantity.text || inp_quantity.text.trim() === '') {
      showAlert('Quantity is required!', 'error');
      return false;
    }
    if (isNaN(Number(inp_quantity.text))) {
      showAlert('Quantity must be a number!', 'error');
      return false;
    }
    if (!inp_input_line.text || inp_input_line.text.trim() === '') {
      showAlert('Input Line is required!', 'error');
      return false;
    }
    if (Number(inp_input_line.text) < 1 || Number(inp_input_line.text) > 18) {
      showAlert('Input Line must be between 1 and 18!', 'error');
      return false;
    }
    if (!inp_output_line.text || inp_output_line.text.trim() === '') {
      showAlert('Output Line is required!', 'error');
      return false;
    }
    if (Number(inp_output_line.text) < 1 || Number(inp_output_line.text) > 18) {
      showAlert('Output Line must be between 1 and 18!', 'error');
      return false;
    }
    return true;
  },

  validateEditForm() {
    if (!inp_edit_quantity.text || inp_edit_quantity.text.trim() === '') {
      showAlert('Quantity is required!', 'error');
      return false;
    }
    if (isNaN(Number(inp_edit_quantity.text))) {
      showAlert('Quantity must be a number!', 'error');
      return false;
    }
    if (Number(inp_edit_input_line.text) < 1 || Number(inp_edit_input_line.text) > 18) {
      showAlert('Input Line must be between 1 and 18!', 'error');
      return false;
    }
    if (Number(inp_edit_output_line.text) < 1 || Number(inp_edit_output_line.text) > 18) {
      showAlert('Output Line must be between 1 and 18!', 'error');
      return false;
    }
    return true;
  },

  // ── ADD ORDER ────────────────────────────────
  async saveOrder() {
    if (!this.validateAddForm()) return;
    await qAddOrder.run();
    await qGetOrders.run();
    closeModal('modal_add');
    showAlert('Order added successfully!', 'success');
  },

  // ── EDIT ORDER ───────────────────────────────
  async updateOrder() {
    if (!this.validateEditForm()) return;
    await qUpdateOrder.run();
    await qGetOrders.run();
    closeModal('modal_edit');
    showAlert('Order updated successfully!', 'success');
  },

  // ── DELETE ORDER ─────────────────────────────
  async deleteOrder() {
    if (!tbl_orders.selectedRow) {
      showAlert('Please select a row to delete!', 'error');
      return;
    }
    await qDeleteOrder.run();
    await qGetOrders.run();
    showAlert('Order deleted!', 'success');
  }
}