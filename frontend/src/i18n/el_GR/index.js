/*
 * index.js
 * Copyright (c) 2022 james@firefly-iii.org
 *
 * This file is part of Firefly III (https://github.com/firefly-iii).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

export default {
    "config": {
        "html_language": "el",
        "month_and_day_fns": "d MMMM y"
    },
    "form": {
        "name": "\u038c\u03bd\u03bf\u03bc\u03b1",
        "amount_min": "\u0395\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf \u03c0\u03bf\u03c3\u03cc",
        "amount_max": "\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03bf \u03c0\u03bf\u03c3\u03cc",
        "url": "\u0394\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL",
        "title": "\u03a4\u03af\u03c4\u03bb\u03bf\u03c2",
        "first_date": "\u03a0\u03c1\u03ce\u03c4\u03b7 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
        "repetitions": "\u0395\u03c0\u03b1\u03bd\u03b1\u03bb\u03ae\u03c8\u03b5\u03b9\u03c2",
        "description": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
        "iban": "IBAN",
        "skip": "\u03a0\u03b1\u03c1\u03ac\u03bb\u03b5\u03b9\u03c8\u03b7",
        "date": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1"
    },
    "list": {
        "name": "\u038c\u03bd\u03bf\u03bc\u03b1",
        "account_number": "\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd",
        "currentBalance": "\u03a4\u03c1\u03ad\u03c7\u03bf\u03bd \u03c5\u03c0\u03cc\u03bb\u03bf\u03b9\u03c0\u03bf",
        "lastActivity": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b1 \u03b4\u03c1\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03cc\u03c4\u03b7\u03c4\u03b1",
        "active": "\u0395\u03af\u03bd\u03b1\u03b9 \u03b5\u03bd\u03b5\u03c1\u03b3\u03cc;"
    },
    "breadcrumbs": {
        "placeholder": "[Placeholder]",
        "budgets": "\u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03af",
        "subscriptions": "\u03a3\u03c5\u03bd\u03b4\u03c1\u03bf\u03bc\u03ad\u03c2",
        "transactions": "\u03a3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2",
        "title_expenses": "\u0394\u03b1\u03c0\u03ac\u03bd\u03b5\u03c2",
        "title_withdrawal": "\u0394\u03b1\u03c0\u03ac\u03bd\u03b5\u03c2",
        "title_revenue": "\u0388\u03c3\u03bf\u03b4\u03b1",
        "title_deposit": "\u0388\u03c3\u03bf\u03b4\u03b1",
        "title_transfer": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ad\u03c2",
        "title_transfers": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ad\u03c2",
        "asset_accounts": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af \u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03bf\u03c5",
        "expense_accounts": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af \u03b4\u03b1\u03c0\u03b1\u03bd\u03ce\u03bd",
        "revenue_accounts": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af \u03b5\u03c3\u03cc\u03b4\u03c9\u03bd",
        "liabilities_accounts": "\u03a5\u03c0\u03bf\u03c7\u03c1\u03b5\u03ce\u03c3\u03b5\u03b9\u03c2"
    },
    "firefly": {
        "actions": "\u0395\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b5\u03c2",
        "edit": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
        "delete": "\u0394\u03b9\u03b1\u03b3\u03c1\u03b1\u03c6\u03ae",
        "reconcile": "\u03a4\u03b1\u03ba\u03c4\u03bf\u03c0\u03bf\u03af\u03b7\u03c3\u03b7",
        "create_new_asset": "\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bd\u03ad\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03bf\u03c5",
        "confirm_action": "\u0395\u03c0\u03b9\u03b2\u03b5\u03b2\u03b1\u03af\u03c9\u03c3\u03b7 \u03b5\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1\u03c2",
        "new_budget": "\u039d\u03ad\u03bf\u03c2 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2",
        "new_asset_account": "\u039d\u03ad\u03bf\u03c2 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03ba\u03b5\u03c6\u03b1\u03bb\u03b1\u03af\u03bf\u03c5",
        "newTransfer": "\u039d\u03ad\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac",
        "submission_options": "(firefly.submission_options)",
        "apply_rules_checkbox": "(firefly.apply_rules_checkbox)",
        "fire_webhooks_checkbox": "(firefly.fire_webhooks_checkbox)",
        "newDeposit": "\u039d\u03ad\u03b1 \u03ba\u03b1\u03c4\u03ac\u03b8\u03b5\u03c3\u03b7",
        "newWithdrawal": "\u039d\u03ad\u03b1 \u03b4\u03b1\u03c0\u03ac\u03bd\u03b7",
        "bills_paid": "\u03a0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ad\u03bd\u03b1 \u03c0\u03ac\u03b3\u03b9\u03b1 \u03ad\u03be\u03bf\u03b4\u03b1",
        "left_to_spend": "\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03b1 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03ce\u03bd",
        "no_budget": "(\u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc)",
        "budgeted": "\u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf",
        "spent": "\u0394\u03b1\u03c0\u03b1\u03bd\u03ae\u03b8\u03b7\u03ba\u03b1\u03bd",
        "no_bill": "(\u03c7\u03c9\u03c1\u03af\u03c2 \u03c0\u03ac\u03b3\u03b9\u03bf \u03ad\u03be\u03bf\u03b4\u03bf)",
        "rule_trigger_source_account_starts_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b1\u03c1\u03c7\u03af\u03b6\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_source_account_ends_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_source_account_is_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_source_account_contains_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9..",
        "rule_trigger_account_id_choice": "Either account ID is exactly..",
        "rule_trigger_source_account_id_choice": "\u03a4\u03bf ID \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03c1\u03b9\u03b2\u03ce\u03c2..",
        "rule_trigger_destination_account_id_choice": "\u03a4\u03bf ID \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03b5\u03af\u03bd\u03b1\u03b9 \u03b1\u03ba\u03c1\u03b9\u03b2\u03ce\u03c2..",
        "rule_trigger_account_is_cash_choice": "Either account is cash",
        "rule_trigger_source_is_cash_choice": "\u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 (\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ce\u03bd)",
        "rule_trigger_destination_is_cash_choice": "\u039f \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03b5\u03af\u03bd\u03b1\u03b9 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 (\u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ce\u03bd)",
        "rule_trigger_source_account_nr_starts_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \/ IBAN \u03b1\u03c1\u03c7\u03af\u03b6\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_source_account_nr_ends_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \/ IBAN \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_source_account_nr_is_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \/ IBAN \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_source_account_nr_contains_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2 \/ IBAN \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9..",
        "rule_trigger_destination_account_starts_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03b1\u03c1\u03c7\u03af\u03b6\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_destination_account_ends_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_destination_account_is_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_destination_account_contains_choice": "\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03b1 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9..",
        "rule_trigger_destination_account_nr_starts_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \/ IBAN \u03b1\u03c1\u03c7\u03af\u03b6\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_destination_account_nr_ends_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \/ IBAN \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_destination_account_nr_is_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \/ IBAN \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_destination_account_nr_contains_choice": "\u039f \u03b1\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \/ IBAN \u03c4\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9..",
        "rule_trigger_transaction_type_choice": "\u0397 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae \u03b5\u03af\u03bd\u03b1\u03b9 \u03c4\u03cd\u03c0\u03bf\u03c5..",
        "rule_trigger_category_is_choice": "\u0397 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_amount_less_choice": "\u03a4\u03bf \u03c0\u03bf\u03c3\u03cc \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b9\u03ba\u03c1\u03cc\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc..",
        "rule_trigger_amount_is_choice": "Amount is..",
        "rule_trigger_amount_more_choice": "\u03a4\u03bf \u03c0\u03bf\u03c3\u03cc \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03b3\u03b1\u03bb\u03cd\u03c4\u03b5\u03c1\u03bf \u03b1\u03c0\u03cc..",
        "rule_trigger_description_starts_choice": "\u0397 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03b1\u03c1\u03c7\u03af\u03b6\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_description_ends_choice": "\u0397 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c4\u03b5\u03bb\u03b5\u03b9\u03ce\u03bd\u03b5\u03b9 \u03bc\u03b5..",
        "rule_trigger_description_contains_choice": "\u0397 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9..",
        "rule_trigger_description_is_choice": "\u0397 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_date_on_choice": "Transaction date is..",
        "rule_trigger_date_before_choice": "\u0397 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03c0\u03c1\u03b9\u03bd \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2..",
        "rule_trigger_date_after_choice": "\u0397 \u03b7\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03b5\u03c4\u03ac \u03b1\u03c0\u03cc \u03c4\u03b9\u03c2..",
        "rule_trigger_created_at_on_choice": "Transaction was made on..",
        "rule_trigger_updated_at_on_choice": "Transaction was last edited on..",
        "rule_trigger_budget_is_choice": "\u039f \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_tag_is_choice": "\u039f\u03c0\u03bf\u03b9\u03b1\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_currency_is_choice": "\u03a4\u03bf \u03bd\u03cc\u03bc\u03b9\u03c3\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_foreign_currency_is_choice": "\u03a4\u03bf \u03be\u03ad\u03bd\u03bf \u03bd\u03cc\u03bc\u03b9\u03c3\u03bc\u03b1 \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_has_attachments_choice": "\u0388\u03c7\u03b5\u03b9 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03c4\u03cc\u03c3\u03b1 \u03c3\u03c5\u03bd\u03b7\u03bc\u03bc\u03ad\u03bd\u03b1",
        "rule_trigger_has_no_category_choice": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1",
        "rule_trigger_has_any_category_choice": "\u0388\u03c7\u03b5\u03b9 \u03bc\u03af\u03b1(\u03bf\u03c0\u03bf\u03b9\u03b1\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5) \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1",
        "rule_trigger_has_no_budget_choice": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc",
        "rule_trigger_has_any_budget_choice": "\u0388\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1\u03bd (\u03bf\u03c0\u03bf\u03b9\u03bf\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5) \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc",
        "rule_trigger_has_no_bill_choice": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03c0\u03ac\u03b3\u03b9\u03bf \u03ad\u03be\u03bf\u03b4\u03bf",
        "rule_trigger_has_any_bill_choice": "\u0388\u03c7\u03b5\u03b9 \u03ad\u03bd\u03b1 (\u03bf\u03c0\u03bf\u03b9\u03bf\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5) \u03c0\u03ac\u03b3\u03b9\u03bf \u03ad\u03be\u03bf\u03b4\u03bf",
        "rule_trigger_has_no_tag_choice": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b1(\u03b5\u03c2)",
        "rule_trigger_has_any_tag_choice": "\u0388\u03c7\u03b5\u03b9 \u03c0\u03b5\u03c1\u03b9\u03c3\u03c3\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u03b1\u03c0\u03cc \u03bc\u03af\u03b1 (\u03bf\u03c0\u03bf\u03b9\u03b5\u03c3\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5) \u03b5\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2",
        "rule_trigger_any_notes_choice": "\u0388\u03c7\u03b5\u03b9 (\u03bf\u03c0\u03bf\u03b9\u03b5\u03c3\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5) \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2",
        "rule_trigger_no_notes_choice": "\u0394\u03b5\u03bd \u03ad\u03c7\u03b5\u03b9 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2",
        "rule_trigger_notes_is_choice": "\u039f\u03b9 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_notes_contains_choice": "\u039f\u03b9 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03bf\u03c5\u03bd..",
        "rule_trigger_notes_starts_choice": "\u039f\u03b9 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03b9\u03c2 \u03b1\u03c1\u03c7\u03af\u03b6\u03bf\u03c5\u03bd \u03bc\u03b5..",
        "rule_trigger_notes_ends_choice": "Notes end with..",
        "rule_trigger_bill_is_choice": "\u03a4\u03bf \u03c0\u03ac\u03b3\u03b9\u03bf \u03ad\u03be\u03bf\u03b4\u03bf \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_external_id_is_choice": "External ID is..",
        "rule_trigger_internal_reference_is_choice": "Internal reference is..",
        "rule_trigger_journal_id_choice": "\u03a4\u03bf \u03b7\u03bc\u03b5\u03c1\u03bf\u03bb\u03bf\u03b3\u03b9\u03b1\u03ba\u03cc ID \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9..",
        "rule_trigger_any_external_url_choice": "Transaction has an external URL",
        "rule_trigger_no_external_url_choice": "Transaction has no external URL",
        "rule_trigger_id_choice": "Transaction ID is..",
        "rule_action_delete_transaction_choice": "DELETE transaction(!)",
        "rule_action_set_category_choice": "Set category to ..",
        "rule_action_clear_category_choice": "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03bf\u03c0\u03bf\u03b9\u03b1\u03c3\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03ba\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1\u03c2",
        "rule_action_set_budget_choice": "Set budget to ..",
        "rule_action_clear_budget_choice": "\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u03bf\u03c0\u03bf\u03b9\u03bf\u03c5\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03c0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03cd",
        "rule_action_add_tag_choice": "Add tag ..",
        "rule_action_remove_tag_choice": "Remove tag ..",
        "rule_action_remove_all_tags_choice": "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03cc\u03bb\u03c9\u03bd \u03c4\u03c9\u03bd \u03b5\u03c4\u03b9\u03ba\u03b5\u03c4\u03ce\u03bd",
        "rule_action_set_description_choice": "Set description to ..",
        "rule_action_update_piggy_choice": "Add \/ remove transaction amount in piggy bank ..",
        "rule_action_append_description_choice": "Append description with ..",
        "rule_action_prepend_description_choice": "Prepend description with ..",
        "rule_action_set_source_account_choice": "Set source account to ..",
        "rule_action_set_destination_account_choice": "Set destination account to ..",
        "rule_action_append_notes_choice": "Append notes with ..",
        "rule_action_prepend_notes_choice": "Prepend notes with ..",
        "rule_action_clear_notes_choice": "\u0391\u03c6\u03b1\u03af\u03c1\u03b5\u03c3\u03b7 \u03bf\u03c0\u03bf\u03b9\u03bf\u03bd\u03b4\u03ae\u03c0\u03bf\u03c4\u03b5 \u03c3\u03b7\u03bc\u03b5\u03b9\u03ce\u03c3\u03b5\u03c9\u03bd",
        "rule_action_set_notes_choice": "Set notes to ..",
        "rule_action_link_to_bill_choice": "Link to a bill ..",
        "rule_action_convert_deposit_choice": "\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03c3\u03b5 \u03bc\u03af\u03b1 \u03ba\u03b1\u03c4\u03ac\u03b8\u03b5\u03c3\u03b7",
        "rule_action_convert_withdrawal_choice": "\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03c3\u03b5 \u03bc\u03af\u03b1 \u03b1\u03bd\u03ac\u03bb\u03b7\u03c8\u03b7",
        "rule_action_convert_transfer_choice": "\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae \u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ae\u03c2 \u03c3\u03b5 \u03bc\u03af\u03b1 \u03bc\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ac",
        "placeholder": "[Placeholder]",
        "recurrences": "\u0395\u03c0\u03b1\u03bd\u03b1\u03bb\u03b1\u03bc\u03b2\u03b1\u03bd\u03cc\u03bc\u03b5\u03bd\u03b5\u03c2 \u03c3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2",
        "title_expenses": "\u0394\u03b1\u03c0\u03ac\u03bd\u03b5\u03c2",
        "title_withdrawal": "\u0394\u03b1\u03c0\u03ac\u03bd\u03b5\u03c2",
        "title_revenue": "\u0388\u03c3\u03bf\u03b4\u03b1",
        "pref_1D": "\u039c\u03af\u03b1 \u03b7\u03bc\u03ad\u03c1\u03b1",
        "pref_1W": "\u039c\u03af\u03b1 \u03b5\u03b2\u03b4\u03bf\u03bc\u03ac\u03b4\u03b1",
        "pref_1M": "\u0388\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
        "pref_3M": "\u03a4\u03c1\u03b5\u03b9\u03c2 \u03bc\u03ae\u03bd\u03b5\u03c2 (\u03c4\u03c1\u03af\u03bc\u03b7\u03bd\u03bf)",
        "pref_6M": "\u0388\u03be\u03b9 \u03bc\u03ae\u03bd\u03b5\u03c2 (\u03b5\u03be\u03ac\u03bc\u03b7\u03bd\u03bf)",
        "pref_1Y": "\u0388\u03bd\u03b1 \u03ad\u03c4\u03bf\u03c2",
        "repeat_freq_yearly": "\u03b5\u03c4\u03b7\u03c3\u03af\u03c9\u03c2",
        "repeat_freq_half-year": "\u03b5\u03be\u03b1\u03bc\u03b7\u03bd\u03b9\u03b1\u03af\u03c9\u03c2",
        "repeat_freq_quarterly": "\u03c4\u03c1\u03b9\u03bc\u03b7\u03bd\u03b9\u03b1\u03af\u03c9\u03c2",
        "repeat_freq_monthly": "\u03bc\u03b7\u03bd\u03b9\u03b1\u03af\u03c9\u03c2",
        "repeat_freq_weekly": "\u03b5\u03b2\u03b4\u03bf\u03bc\u03b1\u03b4\u03b9\u03b1\u03af\u03c9\u03c2",
        "single_split": "\u0394\u03b9\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2",
        "asset_accounts": "\u039a\u03b5\u03c6\u03ac\u03bb\u03b1\u03b9\u03b1",
        "expense_accounts": "\u0394\u03b1\u03c0\u03ac\u03bd\u03b5\u03c2",
        "liabilities_accounts": "\u03a5\u03c0\u03bf\u03c7\u03c1\u03b5\u03ce\u03c3\u03b5\u03b9\u03c2",
        "undefined_accounts": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af",
        "name": "\u038c\u03bd\u03bf\u03bc\u03b1",
        "revenue_accounts": "\u0388\u03c3\u03bf\u03b4\u03b1",
        "description": "\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",
        "category": "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b1",
        "title_deposit": "\u0388\u03c3\u03bf\u03b4\u03b1",
        "title_transfer": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ad\u03c2",
        "title_transfers": "\u039c\u03b5\u03c4\u03b1\u03c6\u03bf\u03c1\u03ad\u03c2",
        "piggyBanks": "\u039a\u03bf\u03c5\u03bc\u03c0\u03b1\u03c1\u03ac\u03b4\u03b5\u03c2",
        "rules": "\u039a\u03b1\u03bd\u03cc\u03bd\u03b5\u03c2",
        "accounts": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03af",
        "categories": "\u039a\u03b1\u03c4\u03b7\u03b3\u03bf\u03c1\u03af\u03b5\u03c2",
        "tags": "\u0395\u03c4\u03b9\u03ba\u03ad\u03c4\u03b5\u03c2",
        "object_groups_page_title": "\u039f\u03bc\u03ac\u03b4\u03b5\u03c2",
        "reports": "\u0391\u03bd\u03b1\u03c6\u03bf\u03c1\u03ad\u03c2",
        "webhooks": "Webhooks",
        "currencies": "\u039d\u03bf\u03bc\u03af\u03c3\u03bc\u03b1\u03c4\u03b1",
        "administration": "\u0394\u03b9\u03b1\u03c7\u03b5\u03af\u03c1\u03b9\u03c3\u03b7",
        "profile": "\u03a0\u03c1\u03bf\u03c6\u03af\u03bb",
        "source_account": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c0\u03c1\u03bf\u03ad\u03bb\u03b5\u03c5\u03c3\u03b7\u03c2",
        "destination_account": "\u039b\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03cc\u03c2 \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03c3\u03bc\u03bf\u03cd",
        "amount": "\u03a0\u03bf\u03c3\u03cc",
        "date": "\u0397\u03bc\u03b5\u03c1\u03bf\u03bc\u03b7\u03bd\u03af\u03b1",
        "time": "\u038f\u03c1\u03b1",
        "preferences": "\u03a0\u03c1\u03bf\u03c4\u03b9\u03bc\u03ae\u03c3\u03b5\u03b9\u03c2",
        "transactions": "\u03a3\u03c5\u03bd\u03b1\u03bb\u03bb\u03b1\u03b3\u03ad\u03c2",
        "balance": "\u0399\u03c3\u03bf\u03b6\u03cd\u03b3\u03b9\u03bf",
        "budgets": "\u03a0\u03c1\u03bf\u03cb\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03bf\u03af",
        "subscriptions": "\u03a3\u03c5\u03bd\u03b4\u03c1\u03bf\u03bc\u03ad\u03c2",
        "welcome_back": "\u03a4\u03b9 \u03c0\u03b1\u03af\u03b6\u03b5\u03b9;",
        "bills_to_pay": "\u03a0\u03ac\u03b3\u03b9\u03b1 \u03ad\u03be\u03bf\u03b4\u03b1 \u03c0\u03c1\u03bf\u03c2 \u03c0\u03bb\u03b7\u03c1\u03c9\u03bc\u03ae",
        "net_worth": "\u039a\u03b1\u03b8\u03b1\u03c1\u03ae \u03b1\u03be\u03af\u03b1",
        "pref_last365": "\u03a0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf \u03ad\u03c4\u03bf\u03c2",
        "pref_last90": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b5\u03c2 90 \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2",
        "pref_last30": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b5\u03c2 30 \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2",
        "pref_last7": "\u03a4\u03b5\u03bb\u03b5\u03c5\u03c4\u03b1\u03af\u03b5\u03c2 7 \u03b7\u03bc\u03ad\u03c1\u03b5\u03c2",
        "pref_YTD": "\u0391\u03c0\u03cc \u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03ae \u03c4\u03bf\u03c5 \u03ad\u03c4\u03bf\u03c5\u03c2 \u03c9\u03c2 \u03c3\u03ae\u03bc\u03b5\u03c1\u03b1",
        "pref_QTD": "\u0391\u03c0\u03cc \u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03ae \u03c4\u03bf\u03c5 \u03c4\u03c1\u03b9\u03bc\u03ae\u03bd\u03bf\u03c5 \u03c9\u03c2 \u03c3\u03ae\u03bc\u03b5\u03c1\u03b1",
        "pref_MTD": "\u0391\u03c0\u03cc \u03c4\u03b7\u03bd\u03bd \u03b1\u03c1\u03c7\u03ae \u03c4\u03bf\u03c5 \u03bc\u03ae\u03bd\u03b1 \u03c9\u03c2 \u03c3\u03ae\u03bc\u03b5\u03c1\u03b1"
    }
}
