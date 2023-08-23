# \CashieringApi

All URIs are relative to */csh/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ActivatePrepaidCard**](CashieringApi.md#ActivatePrepaidCard) | **Put** /hotels/{hotelId}/prepaidCards/activate | Operation to activate prepaid card.
[**AdjustTransactions**](CashieringApi.md#AdjustTransactions) | **Put** /hotels/{hotelId}/transactions/adjust | Adjust Transactions
[**ApplyFinalPostings**](CashieringApi.md#ApplyFinalPostings) | **Post** /hotels/{hotelId}/reservations/{reservationId}/finalCharges | Apply final Postings
[**ApplyFlexibleBenefitPostings**](CashieringApi.md#ApplyFlexibleBenefitPostings) | **Post** /hotels/{hotelId}/reservations/{reservationId}/flexibleBenefitPostings | Apply flexible benefit postings
[**AttachDepositPolicyToPayment**](CashieringApi.md#AttachDepositPolicyToPayment) | **Put** /hotels/{hotelId}/policies/{policyId}/transactions/{transactionId}/deposit | Attach Deposit Policy to Payment
[**AuthorizeCreditCardAmount**](CashieringApi.md#AuthorizeCreditCardAmount) | **Post** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorize | Authorize Credit Card Amount
[**AuthorizeCreditCardAmountByProfile**](CashieringApi.md#AuthorizeCreditCardAmountByProfile) | **Post** /hotels/{hotelId}/profiles/{profileId}/paymentMethods/creditCard/authorize | Authorize Credit Card Amount by Profile
[**AutoSettleCompFolios**](CashieringApi.md#AutoSettleCompFolios) | **Put** /hotels/{hotelId}/reservations/{reservationId}/comp/folios/autoSettlements | Operation to auto settle comp folios.
[**BreakCashierLock**](CashieringApi.md#BreakCashierLock) | **Delete** /cashiers/{cashierId}/locks | Break Cashier Lock
[**CalculateForeignCurrency**](CashieringApi.md#CalculateForeignCurrency) | **Put** /foreignCurrency | Calculate Foreign Currency
[**CancelPrepaidCardTransaction**](CashieringApi.md#CancelPrepaidCardTransaction) | **Put** /hotels/{hotelId}/prepaidCards/cancel | Operation to cancel prepaid card transaction.
[**CashOutPrepaidCard**](CashieringApi.md#CashOutPrepaidCard) | **Put** /hotels/{hotelId}/prepaidCards/cashOut | Operation to cash out prepaid card.
[**ChangeBillingPayment**](CashieringApi.md#ChangeBillingPayment) | **Put** /hotels/{hotelId}/transactions/{transactionId}/payments | Change Billing Payment
[**ChangeRoutingInstructions**](CashieringApi.md#ChangeRoutingInstructions) | **Put** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/change | Change routing instructions
[**CheckPostRateCode**](CashieringApi.md#CheckPostRateCode) | **Put** /hotels/{hotelId}/reservation/{reservationId}/rateCode/{rateCode}/action/validate | Change posted rate codes
[**ClearCashieringServiceCache**](CashieringApi.md#ClearCashieringServiceCache) | **Delete** /services/cashiering/cache | clearing of cache in cashiering services
[**CloseReservationFolio**](CashieringApi.md#CloseReservationFolio) | **Put** /hotels/{hotelId}/reservations/{reservationId}/folios | Close Reservation Folio
[**ConvertFolio**](CashieringApi.md#ConvertFolio) | **Put** /hotels/{hotelId}/folio/{folioId}/convert | Convert Folio
[**DeleteCompRoutingInstructions**](CashieringApi.md#DeleteCompRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/comp | Delete comp routing instructions
[**DeleteFolioRoutingInstructions**](CashieringApi.md#DeleteFolioRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/folio | Delete Folio routing instructions
[**DeleteRequestRoutingInstructions**](CashieringApi.md#DeleteRequestRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/request | Delete request routing instructions
[**DeleteRoomRoutingInstructions**](CashieringApi.md#DeleteRoomRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/room | Delete Room routing instructions
[**DeleteRoutingInstructions**](CashieringApi.md#DeleteRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Delete routing instructions
[**DetachDepositPolicyFromPayment**](CashieringApi.md#DetachDepositPolicyFromPayment) | **Put** /hotels/{hotelId}/transactions/{transactionId}/policies/detach/deposit | Detach Deposit Policy from Payment
[**GenerateFiscalFolio**](CashieringApi.md#GenerateFiscalFolio) | **Post** /hotels/{hotelId}/fiscalFolios | Create Fiscal Information Folio
[**GenerateFolio**](CashieringApi.md#GenerateFolio) | **Post** /hotels/{hotelId}/reservations/{reservationId}/folios | Generate Folios
[**GetAdditionalTaxes**](CashieringApi.md#GetAdditionalTaxes) | **Get** /hotels/{hotelId}/reservations/{reservationId}/additionalTaxes | Get additional Taxes
[**GetAdvancePaymentBalance**](CashieringApi.md#GetAdvancePaymentBalance) | **Get** /hotels/{hotelId}/reservations/{reservationId}/advancePaymentBalance | Get advance payment balance
[**GetAlerts**](CashieringApi.md#GetAlerts) | **Get** /hotels/{hotelId}/reservations/{reservationId}/alerts | Get Alert Notices
[**GetAuthorizationHistory**](CashieringApi.md#GetAuthorizationHistory) | **Get** /hotels/{hotelId}/reservations/{reservationId}/authorizationHistory | Get authorization history
[**GetAuthorizersCreditInfo**](CashieringApi.md#GetAuthorizersCreditInfo) | **Get** /hotels/{hotelId}/authorizers/credits | Get Authorizers Credit Info
[**GetBalanceInfo**](CashieringApi.md#GetBalanceInfo) | **Get** /hotels/{hotelId}/transactionsTotal | Get Balance Information
[**GetBatchCCSettlements**](CashieringApi.md#GetBatchCCSettlements) | **Get** /hotels/{hotelId}/reservations/cCSettlements | Get batch CC Settlements
[**GetBatchCCSettlementsStatus**](CashieringApi.md#GetBatchCCSettlementsStatus) | **Get** /hotels/{hotelId}/bulkCCSettlements/{batchId}/status | Get Batch CC Settlements Status
[**GetBedTaxInfo**](CashieringApi.md#GetBedTaxInfo) | **Get** /hotels/{hotelId}/bedTax | Get bed tax information
[**GetBillingInstructionCodes**](CashieringApi.md#GetBillingInstructionCodes) | **Get** /hotels/{hotelId}/routingInstructionCodes | Get Billing (routing) Instruction Codes
[**GetCCAuthorizationInstructions**](CashieringApi.md#GetCCAuthorizationInstructions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorizeInstructions | Get CC Authorization Instructions
[**GetCCAuthorizationInstructionsByProfile**](CashieringApi.md#GetCCAuthorizationInstructionsByProfile) | **Get** /hotels/{hotelId}/profiles/{profileId}/paymentMethods/creditCard/authorizeInstructions | Get CC Authorization Instructions by Profile
[**GetCCSurchargeInfo**](CashieringApi.md#GetCCSurchargeInfo) | **Get** /hotels/{hotelId}/creditcardsurcharge | Get CC Surcharge Information
[**GetCashierClosure**](CashieringApi.md#GetCashierClosure) | **Get** /hotels/{hotelId}/cashiers/{cashierId}/closure | Get Cashier Closure
[**GetCashierClosureInfo**](CashieringApi.md#GetCashierClosureInfo) | **Get** /hotels/{hotelId}/closureList | Get Cashier Closure Information
[**GetCashierClosureReportsList**](CashieringApi.md#GetCashierClosureReportsList) | **Get** /hotels/{hotelId}/cashiers/{cashierId}/closureReports | Get Cashier Closure Reports List
[**GetCashierLock**](CashieringApi.md#GetCashierLock) | **Get** /cashiers/{cashierId}/locks | Acquire Cashier Locks
[**GetCashierReportPostings**](CashieringApi.md#GetCashierReportPostings) | **Get** /cashierReportPostings | Get Cashier Report Postings
[**GetCashierTransactions**](CashieringApi.md#GetCashierTransactions) | **Get** /cashiers/{cashierId}/transactions | Get Cashier Transactions
[**GetCheckDetails**](CashieringApi.md#GetCheckDetails) | **Get** /hotels/{hotelId}/check/{checkNumber} | Get check details
[**GetCompAccountingJournal**](CashieringApi.md#GetCompAccountingJournal) | **Get** /compAccountingJournal | Get Comp Accounting Journal
[**GetCompRoutingInstructions**](CashieringApi.md#GetCompRoutingInstructions) | **Get** /hotels/{hotelId}/compRoutingInstructions | Get Comp Routing Instructions
[**GetCompTrxAuthorizers**](CashieringApi.md#GetCompTrxAuthorizers) | **Get** /hotels/{hotelId}/compTrxAuthorizers | Get Comp Trx Authorizers
[**GetCreditLimitOveragePayments**](CashieringApi.md#GetCreditLimitOveragePayments) | **Get** /hotels/{hotelId}/creditLimitsOveragePayments | Get Credit Limits Overage Payments
[**GetDepositFolio**](CashieringApi.md#GetDepositFolio) | **Get** /hotels/{hotelId}/depositFolio | Get Deposit Folio
[**GetDepositFolioTransactionDetails**](CashieringApi.md#GetDepositFolioTransactionDetails) | **Get** /hotels/{hotelId}/depositTransactions | Get Deposit Folio Transaction Details
[**GetDepositMaturityInfo**](CashieringApi.md#GetDepositMaturityInfo) | **Get** /hotels/{hotelId}/reservations/{reservationId}/depositMaturity | Get Deposit Maturity Information
[**GetFinancialPostings**](CashieringApi.md#GetFinancialPostings) | **Get** /hotels/{hotelId}/financialPostings | Get Financial Postings
[**GetFiscalFolioActivity**](CashieringApi.md#GetFiscalFolioActivity) | **Get** /hotels/{hotelId}/fiscalFolioResponse | Get the Fiscal Folio Activity for a folio
[**GetFiscalFolioActivityDetails**](CashieringApi.md#GetFiscalFolioActivityDetails) | **Get** /hotels/{hotelId}/fiscalFolioResponse/{folioSeqNo} | Get the Fiscal Folio Activity Response details for a folio
[**GetFiscalPrintingDetails**](CashieringApi.md#GetFiscalPrintingDetails) | **Get** /hotels/{hotelId}/reservations/{reservationId}/fiscalPrinting | Get Fiscal Printing Details
[**GetFixedCharges**](CashieringApi.md#GetFixedCharges) | **Get** /hotels/{hotelId}/reservations/{reservationId}/fixedCharges | Get Fixed Charges
[**GetFolio**](CashieringApi.md#GetFolio) | **Get** /hotels/{hotelId}/reservations/{reservationId}/folios | Get folios
[**GetFolioHistory**](CashieringApi.md#GetFolioHistory) | **Get** /hotels/{hotelId}/folioHistory | Get folio history
[**GetFolioPrinters**](CashieringApi.md#GetFolioPrinters) | **Get** /hotels/{hotelId}/folioPrinters | Get folio printers
[**GetFolioTaxPaymentsInfo**](CashieringApi.md#GetFolioTaxPaymentsInfo) | **Get** /hotels/{hotelId}/reservations/{reservationId}/folioTaxPayments | Get folio tax payments information
[**GetFolioTransactionDetails**](CashieringApi.md#GetFolioTransactionDetails) | **Get** /hotels/{hotelId}/transactionDetails | Get Folio Transaction Details
[**GetFolioTypeName**](CashieringApi.md#GetFolioTypeName) | **Get** /hotels/{hotelId}/folioTypeNames | Get Folio Type Name
[**GetFolioTypes**](CashieringApi.md#GetFolioTypes) | **Get** /hotels/{hotelId}/folioTypes | Get Folio Types
[**GetGamingRequestStatusInfo**](CashieringApi.md#GetGamingRequestStatusInfo) | **Get** /hotels/{hotelId}/transactions/{transactionId}/compRequestStatus | Get Gaming Request Status 
[**GetGuestsTransactions**](CashieringApi.md#GetGuestsTransactions) | **Get** /hotels/{hotelId}/transactions | Get Guests Transactions
[**GetHotelRevenue**](CashieringApi.md#GetHotelRevenue) | **Get** /hotels/{hotelId}/revenue | Get Hotel Revenue
[**GetMaturedDeposits**](CashieringApi.md#GetMaturedDeposits) | **Get** /hotels/{hotelId}/reservations/{reservationId}/depositPayments | Get matured deposits
[**GetPostBillingCharges**](CashieringApi.md#GetPostBillingCharges) | **Get** /hotels/{hotelId}/reservations/{reservationId}/charges | Get Billing Charges
[**GetPostingActivityDetail**](CashieringApi.md#GetPostingActivityDetail) | **Get** /hotels/{hotelId}/reservations/{reservationId}/postingActivities | Get posting activity details
[**GetPostingSummary**](CashieringApi.md#GetPostingSummary) | **Get** /hotels/{hotelId}/postingDates/date/postingSummary | Get Posting Summary
[**GetPostingsForRefresh**](CashieringApi.md#GetPostingsForRefresh) | **Get** /hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/roomRouting | Get Postings For Refresh
[**GetReceiptHistory**](CashieringApi.md#GetReceiptHistory) | **Get** /hotels/{hotelId}/receiptHistory | Get Receipt History
[**GetReservationPackageOptions**](CashieringApi.md#GetReservationPackageOptions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/packageOptions | Get Reservation Package Options
[**GetReservationRevenueBucketTotals**](CashieringApi.md#GetReservationRevenueBucketTotals) | **Get** /hotels/{hotelId}/reservations/{reservationId}/revenueBuckets | Get Reservations Revenue Bucket Totals
[**GetRoundingDifference**](CashieringApi.md#GetRoundingDifference) | **Get** /roundingDifference | Get Rounding Difference
[**GetRoutingInstructions**](CashieringApi.md#GetRoutingInstructions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Get routing instructions
[**GetStoredFolioDetails**](CashieringApi.md#GetStoredFolioDetails) | **Get** /hotels/{hotelId}/storedFolios/{folioId} | Get Stored Folio Details
[**GetTransactionCodes**](CashieringApi.md#GetTransactionCodes) | **Get** /hotels/{hotelId}/transactionCodes | Get Transaction Codes
[**GetValidateFiscalPrintingDetails**](CashieringApi.md#GetValidateFiscalPrintingDetails) | **Get** /hotels/{hotelId}/fiscalPrinting | Get Fiscal Printing Details
[**GetfetchStagedTransactions**](CashieringApi.md#GetfetchStagedTransactions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/fetchStagedTransactions | Get fetchStagedTransactions
[**IsDepositRefundEligible**](CashieringApi.md#IsDepositRefundEligible) | **Get** /hotels/{hotelId}/reservations/{reservationId}/transactions/{transactionId} | Get eligibility of Deposit Refund
[**LinkReservationPackageAllowance**](CashieringApi.md#LinkReservationPackageAllowance) | **Post** /hotels/{hotelId}/sourceReservations/{sourceReservationId}/destinationReservations/{destinationReservationId}/packageAllowance/links | Link Reservation package allowance
[**PingCashieringService**](CashieringApi.md#PingCashieringService) | **Get** /services/cashiering/status | Status check of cashiering services
[**PostAdvanceFolio**](CashieringApi.md#PostAdvanceFolio) | **Post** /hotels/{hotelId}/advanceFolio/batchJobs | Create Batch Advance Folio
[**PostAdvanceRoomCharges**](CashieringApi.md#PostAdvanceRoomCharges) | **Post** /hotels/{hotelId}/reservations/{reservationId}/advanceRoomCharges | Create advance Room Charges
[**PostArticlesSale**](CashieringApi.md#PostArticlesSale) | **Post** /hotels/{hotelId}/articlesSale | Create Articles Sale
[**PostAutoCheckoutReservations**](CashieringApi.md#PostAutoCheckoutReservations) | **Post** /hotels/{hotelId}/autoCheckoutReservations/batchJobs | Create Auto Checkout Reservation Batch 
[**PostBatchAutoSettlement**](CashieringApi.md#PostBatchAutoSettlement) | **Post** /hotels/{hotelId}/autoSettlements/batchJobs | Create Batch Auto Settlement
[**PostBatchCCSettlements**](CashieringApi.md#PostBatchCCSettlements) | **Post** /hotels/{hotelId}/ccSettlements/batchJobs | Create Batch CC Settlements
[**PostBatchDeposit**](CashieringApi.md#PostBatchDeposit) | **Post** /hotels/{hotelId}/batchDeposits | Create batch deposits
[**PostBedTaxInfo**](CashieringApi.md#PostBedTaxInfo) | **Post** /hotels/{hotelId}/bedTax | Create bed tax information
[**PostBillingCharges**](CashieringApi.md#PostBillingCharges) | **Post** /hotels/{hotelId}/reservations/{reservationId}/charges | Post Charge to a folio
[**PostBillingChargesInBatch**](CashieringApi.md#PostBillingChargesInBatch) | **Post** /hotels/{hotelId}/reservations/billingCharges | Create Billing Charges in Batch
[**PostBillingCheckCharges**](CashieringApi.md#PostBillingCheckCharges) | **Post** /hotels/{hotelId}/reservations/{reservationId}/check/{checkNumber}/charges | Pre-validate the Billing Charge
[**PostBillingPayment**](CashieringApi.md#PostBillingPayment) | **Post** /hotels/{hotelId}/reservations/{reservationId}/payments | Create Billing Payment
[**PostCCSettlement**](CashieringApi.md#PostCCSettlement) | **Post** /hotels/{hotelId}/ccSettlement | Create CreditCard Settlement
[**PostCheckOut**](CashieringApi.md#PostCheckOut) | **Post** /hotels/{hotelId}/reservations/{reservationId}/checkOuts | Check out a guest
[**PostCompRedemptions**](CashieringApi.md#PostCompRedemptions) | **Post** /hotels/{hotelId}/reservations/{reservationId}/compRedemptionPostings | Operation to post complimentary bucket redemptions for a guest having PTS Membership Type
[**PostCompTransaction**](CashieringApi.md#PostCompTransaction) | **Post** /hotels/{hotelId}/transactions/{transactionId} | Submit Comp Transaction
[**PostCreditBill**](CashieringApi.md#PostCreditBill) | **Post** /hotels/{hotelId}/creditBill | Create Credit Bill
[**PostCreditLimitOveragePayments**](CashieringApi.md#PostCreditLimitOveragePayments) | **Post** /hotels/{hotelId}/creditLimitsOveragePayments | Create Credit Limit Overage Payments
[**PostDeferredTaxesProcess**](CashieringApi.md#PostDeferredTaxesProcess) | **Post** /hotels/{hotelId}/reservations/{reservationId}/deferredTaxesProcess | Request to submit a job to post the deferred taxes.
[**PostDepositFolio**](CashieringApi.md#PostDepositFolio) | **Post** /hotels/{hotelId}/reservations/{reservationId}/depositFolios | Create Deposit Folio
[**PostDepositPayment**](CashieringApi.md#PostDepositPayment) | **Post** /hotels/{hotelId}/reservations/{reservationId}/depositPayments | Create Deposit Payment
[**PostDepositPaymentByExtId**](CashieringApi.md#PostDepositPaymentByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSysCode}/reservations/{reservationId}/depositPayments | Create Deposit Payment using external reference.
[**PostFBAReimbursement**](CashieringApi.md#PostFBAReimbursement) | **Post** /fbaReimbursements | Create FBA Reimbursement
[**PostFBASettlement**](CashieringApi.md#PostFBASettlement) | **Post** /fbaSettlements | Create FBA Settlement
[**PostFiscalCommandInvoice**](CashieringApi.md#PostFiscalCommandInvoice) | **Post** /hotels/{hotelId}/fiscalCommands | Create Fiscal Invoice
[**PostFiscalInvoice**](CashieringApi.md#PostFiscalInvoice) | **Post** /hotels/{hotelId}/folio/{folioId}/fiscalCommands | Create Fiscal Invoice
[**PostFixedCharges**](CashieringApi.md#PostFixedCharges) | **Post** /hotels/{hotelId}/reservations/{reservationId}/fixedCharges | Create Fixed Charges
[**PostForeignCurrencyExchange**](CashieringApi.md#PostForeignCurrencyExchange) | **Post** /foreignCurrencyExchange | Create Foreign Currency Exchange
[**PostGuestCheckDetails**](CashieringApi.md#PostGuestCheckDetails) | **Post** /hotels/{hotelId}/check/{checkNumber} | Post Guest Check Details
[**PostPasserBySale**](CashieringApi.md#PostPasserBySale) | **Post** /hotels/{hotelId}/passerBySale | Create passer by sale
[**PostPrepaidCards**](CashieringApi.md#PostPrepaidCards) | **Post** /hotels/{hotelId}/prepaidCards | Create Prepaid Cards
[**PostProforma**](CashieringApi.md#PostProforma) | **Post** /hotels/{hotelId}/reservations/{reservationId}/proforma | Create proforma
[**PostRateCode**](CashieringApi.md#PostRateCode) | **Post** /hotels/{hotelId}/reservation/{reservationId}/rateCode/{rateCode} | Create rate codes
[**PostReversePayment**](CashieringApi.md#PostReversePayment) | **Post** /hotels/{hotelId}/transactions/{transactionId}/reversePayments | Create reverse payments
[**PostRoomAndTaxForDayUse**](CashieringApi.md#PostRoomAndTaxForDayUse) | **Post** /reservations/{reservationId}/postRoomAndTaxForDayUse | Operation to post room and tax for day use.
[**PostStoredFolioDetails**](CashieringApi.md#PostStoredFolioDetails) | **Post** /hotels/{hotelId}/storedFolios/{folioId} | Create Stored Folio Details
[**PostSupplementalFolio**](CashieringApi.md#PostSupplementalFolio) | **Post** /hotels/{hotelId}/supplementFolios | Post supplemental folio
[**PostZeroBalanceCheckoutReservations**](CashieringApi.md#PostZeroBalanceCheckoutReservations) | **Post** /hotels/{hotelId}/zeroBalanceCheckoutReservations/batchJobs | Create Zero Balance Checkout Reservation Batch 
[**ProcessFiscalRetry**](CashieringApi.md#ProcessFiscalRetry) | **Put** /hotels/{hotelId}/folios/{folioId}/fiscal | Process Fiscal retry
[**ProcessReservationDeposit**](CashieringApi.md#ProcessReservationDeposit) | **Post** /hotels/{hotelId}/reservations/{reservationId}/deposit | Process Reservations deposit
[**ProcessRoomRoutingRefresh**](CashieringApi.md#ProcessRoomRoutingRefresh) | **Put** /hotels/{hotelId}/sourceReservations/{sourceReservationId}/targetReservations/{targetReservationId}/roomRouting | Process Room Routing Refresh
[**PutBedTaxInfo**](CashieringApi.md#PutBedTaxInfo) | **Put** /hotels/{hotelId}/bedTax/{taxRegistraitionNo} | Change bed tax information
[**PutBillingCharge**](CashieringApi.md#PutBillingCharge) | **Put** /hotels/{hotelId}/transactions/{transactionId}/charges | Change Billing Charge
[**PutBillingCharges**](CashieringApi.md#PutBillingCharges) | **Put** /hotels/{hotelId}/billingCharges | Change Billing Charges
[**PutCashier**](CashieringApi.md#PutCashier) | **Put** /cashiers/{cashierId}/closure | Close Cashier
[**PutCashierLock**](CashieringApi.md#PutCashierLock) | **Put** /hotels/{hotelId}/cashierslock/{lockId} | Extend Cashier Lock
[**PutForEarlyDeparture**](CashieringApi.md#PutForEarlyDeparture) | **Put** /hotels/{hotelId}/reservations/{reservationId}/earlyDeparture | Change early Departure
[**PutPayeeTaxNumber**](CashieringApi.md#PutPayeeTaxNumber) | **Put** /hotels/{hotelId}/payees/{payeeId}/taxNumber | Change Payee Tax Number
[**PutReservationDepositTransfer**](CashieringApi.md#PutReservationDepositTransfer) | **Put** /hotels/{hotelId}/reservations/{sourceReservationId}/deposit/transfers | Change Reservation Deposit Transfer.
[**PutRoutingInstructions**](CashieringApi.md#PutRoutingInstructions) | **Put** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions/create | Create routing instructions
[**RedeemPrepaidCards**](CashieringApi.md#RedeemPrepaidCards) | **Put** /hotels/{hotelId}/reservations/{reservationId}/prepaidCards/redemptions | Operation to redeem prepaid cards.
[**RegisterManualAuthorization**](CashieringApi.md#RegisterManualAuthorization) | **Post** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods/creditCard/authorize/manual | Register Manual Authorization
[**RegisterVaultTransaction**](CashieringApi.md#RegisterVaultTransaction) | **Post** /hotels/{hotelId}/creditcardTransaction/logs | Register Vault Transaction
[**ReinstateCheckOut**](CashieringApi.md#ReinstateCheckOut) | **Put** /hotels/{hotelId}/reservations/{reservationId}/checkOuts/reinstate | Reinstate Checked Out Reservation
[**ReleaseCashierLock**](CashieringApi.md#ReleaseCashierLock) | **Delete** /cashiersLock/{lockId} | Release Cashier Lock
[**ReloadPrepaidCard**](CashieringApi.md#ReloadPrepaidCard) | **Put** /hotels/{hotelId}/prepaidCards/reload | Operation to reload prepaid card.
[**RemoveBedTaxInfo**](CashieringApi.md#RemoveBedTaxInfo) | **Delete** /hotels/{hotelId}/bedTax/{taxRegistraitionNo} | Delete bed tax information
[**RemoveFixedCharges**](CashieringApi.md#RemoveFixedCharges) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/fixedCharges | Delete Fixed Charges 
[**ReverseARInvoice**](CashieringApi.md#ReverseARInvoice) | **Delete** /hotels/{hotelId}/transactions/arInvoices/reverse | Reverse AR Invoice
[**ReverseCertificatePostings**](CashieringApi.md#ReverseCertificatePostings) | **Post** /hotels/{hotelId}/reservations/{reservationId}/reverseCertificate | Reverse certificate postings
[**ReverseCompRedemptions**](CashieringApi.md#ReverseCompRedemptions) | **Post** /hotels/{hotelId}/reservations/{reservationId}/compRedemptionReversals | Operation to reverse complimentary bucket redemptions for a guest having PTS Membership Type
[**ReverseFlexibleBenefitPosting**](CashieringApi.md#ReverseFlexibleBenefitPosting) | **Delete** /hotels/{hotelId}/transactions/{transactionId}/flexibleBenefitPostings | Delete flexible benefit postings
[**ReverseFolioTaxPayment**](CashieringApi.md#ReverseFolioTaxPayment) | **Put** /hotels/{hotelId}/cashiers/{cashierId}/folioTaxPayments | Change folio tax payments
[**SplitAndTransferTransaction**](CashieringApi.md#SplitAndTransferTransaction) | **Put** /hotels/{hotelId}/transactions/splitAndTransfer | Split and transfer transactions
[**SplitDepositTransaction**](CashieringApi.md#SplitDepositTransaction) | **Put** /hotels/{hotelId}/reservations/{reservationId}/transactions/{transactionId} | Split deposit transaction
[**SplitTransaction**](CashieringApi.md#SplitTransaction) | **Put** /hotels/{hotelId}/transactions/split | Split transactions
[**TransferCompTransactions**](CashieringApi.md#TransferCompTransactions) | **Post** /hotels/{hotelId}/transferCompTransactions | Transfer comp transactions to window
[**TransferFolioToWindow**](CashieringApi.md#TransferFolioToWindow) | **Put** /hotels/{hotelId}/reservations/{reservationId}/transferFolioTransactions | Transfer Folio to Window.
[**TransferTransactionToReservation**](CashieringApi.md#TransferTransactionToReservation) | **Put** /hotels/{hotelId}/reservations/{toReservationId}/transferTransaction | Transfer Transaction to Reservation
[**TransferTransactionToWindow**](CashieringApi.md#TransferTransactionToWindow) | **Put** /hotels/{hotelId}/reservations/{reservationId}/transferTransactions | Transfer Transaction to Window
[**TransitionDepositToGuestFolio**](CashieringApi.md#TransitionDepositToGuestFolio) | **Put** /hotels/{hotelId}/reservations/{reservationId}/depositTransition | Transition Deposit to Guest Folio
[**UnlinkReservationPackageAllowance**](CashieringApi.md#UnlinkReservationPackageAllowance) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/packageAllowance/links | Unlink reservation package allowance
[**UpdateFixedCharges**](CashieringApi.md#UpdateFixedCharges) | **Put** /hotels/{hotelId}/reservations/{reservationId}/fixedCharges | Updates Fixed Charges 
[**ValidateCreditBill**](CashieringApi.md#ValidateCreditBill) | **Put** /hotels/{hotelId}/creditBill/action/validate | Validate Credit Bill
[**ValidateDepositFolio**](CashieringApi.md#ValidateDepositFolio) | **Put** /hotels/{hotelId}/depositfolios/action/validate | Validate Deposit Folio
[**ValidateTransactionCodes**](CashieringApi.md#ValidateTransactionCodes) | **Get** /hotels/{hotelId}/transactions/{transactionId} | Validate Transaction Codes
[**VerifyForEarlyDeparture**](CashieringApi.md#VerifyForEarlyDeparture) | **Get** /hotels/{hotelId}/reservations/{reservationId}/earlyDeparture/verify | Verify for early Departure
[**VoidBillingCheckCharges**](CashieringApi.md#VoidBillingCheckCharges) | **Delete** /hotels/{hotelId}/check/{checkNumber}/charges | Delete Billing Check Charges
[**VoidFolio**](CashieringApi.md#VoidFolio) | **Put** /hotels/{hotelId}/reservations/{reservationId}/voidfolios/{folioId} | Void folio



## ActivatePrepaidCard

> ActivatePrepaidCardStatus ActivatePrepaidCard(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivatePrepaidCard(activatePrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to activate prepaid card.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activatePrepaidCard := *openapiclient.NewActivatePrepaidCardRequest() // ActivatePrepaidCardRequest | Request type for activate prepaid card.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ActivatePrepaidCard(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivatePrepaidCard(activatePrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ActivatePrepaidCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ActivatePrepaidCard`: ActivatePrepaidCardStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ActivatePrepaidCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiActivatePrepaidCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activatePrepaidCard** | [**ActivatePrepaidCardRequest**](ActivatePrepaidCardRequest.md) | Request type for activate prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivatePrepaidCardStatus**](ActivatePrepaidCardStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AdjustTransactions

> AdjustedTransactions AdjustTransactions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionsAdjustment(transactionsAdjustment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adjust Transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionsAdjustment := *openapiclient.NewAdjustTransactionsRequest() // AdjustTransactionsRequest | Request to adjust a transaction. In order to adjust a transaction, a valid amount or percentage is required. A valid reason code and reason text is also required. Only negative adjustments are done. The adjust process will post a new negative transaction for the same transaction code for the current day.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AdjustTransactions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionsAdjustment(transactionsAdjustment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AdjustTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AdjustTransactions`: AdjustedTransactions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AdjustTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAdjustTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionsAdjustment** | [**AdjustTransactionsRequest**](AdjustTransactionsRequest.md) | Request to adjust a transaction. In order to adjust a transaction, a valid amount or percentage is required. A valid reason code and reason text is also required. Only negative adjustments are done. The adjust process will post a new negative transaction for the same transaction code for the current day. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdjustedTransactions**](AdjustedTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplyFinalPostings

> Status ApplyFinalPostings(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FinalPostings(finalPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Apply final Postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    finalPostings := *openapiclient.NewApplyFinalPostingsRequest() // ApplyFinalPostingsRequest | Request to apply any final charges or payments to a reservation prior to checkout. This operation should be called prior to the guest settlement which would then reflect the balance the guest has to pay.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ApplyFinalPostings(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FinalPostings(finalPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ApplyFinalPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApplyFinalPostings`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ApplyFinalPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyFinalPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **finalPostings** | [**ApplyFinalPostingsRequest**](ApplyFinalPostingsRequest.md) | Request to apply any final charges or payments to a reservation prior to checkout. This operation should be called prior to the guest settlement which would then reflect the balance the guest has to pay. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApplyFlexibleBenefitPostings

> Status ApplyFlexibleBenefitPostings(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexibleBenefitPostingsCriteria(flexibleBenefitPostingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Apply flexible benefit postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    flexibleBenefitPostingsCriteria := *openapiclient.NewApplyFlexibleBenefitPostingsRequest() // ApplyFlexibleBenefitPostingsRequest | Apply Flexible Benefit Postings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ApplyFlexibleBenefitPostings(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexibleBenefitPostingsCriteria(flexibleBenefitPostingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ApplyFlexibleBenefitPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApplyFlexibleBenefitPostings`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ApplyFlexibleBenefitPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiApplyFlexibleBenefitPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **flexibleBenefitPostingsCriteria** | [**ApplyFlexibleBenefitPostingsRequest**](ApplyFlexibleBenefitPostingsRequest.md) | Apply Flexible Benefit Postings. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AttachDepositPolicyToPayment

> Status AttachDepositPolicyToPayment(ctx, transactionId, policyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttachPolicyApplyCriteria(attachPolicyApplyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Attach Deposit Policy to Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    policyId := "policyId_example" // string | Unique ID of the policy
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    attachPolicyApplyCriteria := *openapiclient.NewAttachDepositPolicyToPaymentRequest() // AttachDepositPolicyToPaymentRequest | Request to attach an existing Deposit Policy on a reservation towards an existing deposit payment on the same reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AttachDepositPolicyToPayment(context.Background(), transactionId, policyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttachPolicyApplyCriteria(attachPolicyApplyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AttachDepositPolicyToPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AttachDepositPolicyToPayment`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AttachDepositPolicyToPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**policyId** | **string** | Unique ID of the policy | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAttachDepositPolicyToPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **attachPolicyApplyCriteria** | [**AttachDepositPolicyToPaymentRequest**](AttachDepositPolicyToPaymentRequest.md) | Request to attach an existing Deposit Policy on a reservation towards an existing deposit payment on the same reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthorizeCreditCardAmount

> AuthorizationInfo AuthorizeCreditCardAmount(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcAuthorizationCriteria(ccAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Authorize Credit Card Amount



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ccAuthorizationCriteria := *openapiclient.NewAuthorizeCreditCardAmountByProfileRequest() // AuthorizeCreditCardAmountByProfileRequest | Request for a credit card authorization. An authorization request will be sent to the Credit Card Vendor as part of this request.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AuthorizeCreditCardAmount(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcAuthorizationCriteria(ccAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AuthorizeCreditCardAmount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthorizeCreditCardAmount`: AuthorizationInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AuthorizeCreditCardAmount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAuthorizeCreditCardAmountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ccAuthorizationCriteria** | [**AuthorizeCreditCardAmountByProfileRequest**](AuthorizeCreditCardAmountByProfileRequest.md) | Request for a credit card authorization. An authorization request will be sent to the Credit Card Vendor as part of this request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizationInfo**](AuthorizationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthorizeCreditCardAmountByProfile

> AuthorizationInfo AuthorizeCreditCardAmountByProfile(ctx, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcAuthorizationCriteria(ccAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Authorize Credit Card Amount by Profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ccAuthorizationCriteria := *openapiclient.NewAuthorizeCreditCardAmountByProfileRequest() // AuthorizeCreditCardAmountByProfileRequest | Request for a credit card authorization. An authorization request will be sent to the Credit Card Vendor as part of this request.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AuthorizeCreditCardAmountByProfile(context.Background(), profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcAuthorizationCriteria(ccAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AuthorizeCreditCardAmountByProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthorizeCreditCardAmountByProfile`: AuthorizationInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AuthorizeCreditCardAmountByProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAuthorizeCreditCardAmountByProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ccAuthorizationCriteria** | [**AuthorizeCreditCardAmountByProfileRequest**](AuthorizeCreditCardAmountByProfileRequest.md) | Request for a credit card authorization. An authorization request will be sent to the Credit Card Vendor as part of this request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizationInfo**](AuthorizationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AutoSettleCompFolios

> AutoSettleCompFoliosStatus AutoSettleCompFolios(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoSettleCompFolios(autoSettleCompFolios).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to auto settle comp folios.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoSettleCompFolios := *openapiclient.NewAutoSettleCompFoliosRequest() // AutoSettleCompFoliosRequest | Request to auto settle comp folios. OPERA will reference the 'Default Comp Payment Method' setting to settle the folio if no authorizer AR account is associated with the folio.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AutoSettleCompFolios(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoSettleCompFolios(autoSettleCompFolios).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AutoSettleCompFolios``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AutoSettleCompFolios`: AutoSettleCompFoliosStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AutoSettleCompFolios`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAutoSettleCompFoliosRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoSettleCompFolios** | [**AutoSettleCompFoliosRequest**](AutoSettleCompFoliosRequest.md) | Request to auto settle comp folios. OPERA will reference the &#39;Default Comp Payment Method&#39; setting to settle the folio if no authorizer AR account is associated with the folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoSettleCompFoliosStatus**](AutoSettleCompFoliosStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## BreakCashierLock

> Status BreakCashierLock(ctx, cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Break Cashier Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.BreakCashierLock(context.Background(), cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.BreakCashierLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `BreakCashierLock`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.BreakCashierLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiBreakCashierLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CalculateForeignCurrency

> CalculatedForeignCurrency CalculateForeignCurrency(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencyCriteria(foreignCurrencyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Calculate Foreign Currency



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    foreignCurrencyCriteria := *openapiclient.NewCalculateForeignCurrencyRequest() // CalculateForeignCurrencyRequest | Operation to calculate foreign currency exchange.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.CalculateForeignCurrency(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencyCriteria(foreignCurrencyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.CalculateForeignCurrency``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CalculateForeignCurrency`: CalculatedForeignCurrency
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.CalculateForeignCurrency`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCalculateForeignCurrencyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **foreignCurrencyCriteria** | [**CalculateForeignCurrencyRequest**](CalculateForeignCurrencyRequest.md) | Operation to calculate foreign currency exchange. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculatedForeignCurrency**](CalculatedForeignCurrency.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CancelPrepaidCardTransaction

> CancelPrepaidCardTransactionStatus CancelPrepaidCardTransaction(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelPrepaidCardTransaction(cancelPrepaidCardTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to cancel prepaid card transaction.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelPrepaidCardTransaction := *openapiclient.NewCancelPrepaidCardTransactionRequest() // CancelPrepaidCardTransactionRequest | Request type for reload prepaid card.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.CancelPrepaidCardTransaction(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelPrepaidCardTransaction(cancelPrepaidCardTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.CancelPrepaidCardTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelPrepaidCardTransaction`: CancelPrepaidCardTransactionStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.CancelPrepaidCardTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelPrepaidCardTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelPrepaidCardTransaction** | [**CancelPrepaidCardTransactionRequest**](CancelPrepaidCardTransactionRequest.md) | Request type for reload prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancelPrepaidCardTransactionStatus**](CancelPrepaidCardTransactionStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CashOutPrepaidCard

> CashOutPrepaidCardStatus CashOutPrepaidCard(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashOutPrepaidCard(cashOutPrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to cash out prepaid card.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashOutPrepaidCard := *openapiclient.NewCashOutPrepaidCardRequest() // CashOutPrepaidCardRequest | Request type for cashout prepaid card.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.CashOutPrepaidCard(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashOutPrepaidCard(cashOutPrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.CashOutPrepaidCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CashOutPrepaidCard`: CashOutPrepaidCardStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.CashOutPrepaidCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCashOutPrepaidCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashOutPrepaidCard** | [**CashOutPrepaidCardRequest**](CashOutPrepaidCardRequest.md) | Request type for cashout prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashOutPrepaidCardStatus**](CashOutPrepaidCardStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeBillingPayment

> Status ChangeBillingPayment(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingPaymentToChange(billingPaymentToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Billing Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingPaymentToChange := *openapiclient.NewChangeBillingPaymentRequest() // ChangeBillingPaymentRequest | Request to change a payment posting.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ChangeBillingPayment(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingPaymentToChange(billingPaymentToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ChangeBillingPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeBillingPayment`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ChangeBillingPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeBillingPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingPaymentToChange** | [**ChangeBillingPaymentRequest**](ChangeBillingPaymentRequest.md) | Request to change a payment posting. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeRoutingInstructions

> ChangedRoutingInstructions ChangeRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsToChange(routingInstructionsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructionsToChange := *openapiclient.NewChangeRoutingInstructionsRequest() // ChangeRoutingInstructionsRequest | Request when changing a routing instruction.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ChangeRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsToChange(routingInstructionsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ChangeRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRoutingInstructions`: ChangedRoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ChangeRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructionsToChange** | [**ChangeRoutingInstructionsRequest**](ChangeRoutingInstructionsRequest.md) | Request when changing a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedRoutingInstructions**](ChangedRoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CheckPostRateCode

> CheckedRateCode CheckPostRateCode(ctx, rateCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRateCodeCriteria(postRateCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change posted rate codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    rateCode := "rateCode_example" // string | The Rate Code which is to be posted on the Guest Folio.
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postRateCodeCriteria := *openapiclient.NewPostRateCodeRequest() // PostRateCodeRequest | Request to check if a Rate Code can be posted to the room manually. This will check if the Rate Code is valid, if the Products(Packages) which are defined as part of the Rate Code can be posted or reversed.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.CheckPostRateCode(context.Background(), rateCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRateCodeCriteria(postRateCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.CheckPostRateCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CheckPostRateCode`: CheckedRateCode
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.CheckPostRateCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | The Rate Code which is to be posted on the Guest Folio. | 
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCheckPostRateCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postRateCodeCriteria** | [**PostRateCodeRequest**](PostRateCodeRequest.md) | Request to check if a Rate Code can be posted to the room manually. This will check if the Rate Code is valid, if the Products(Packages) which are defined as part of the Rate Code can be posted or reversed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckedRateCode**](CheckedRateCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClearCashieringServiceCache

> Status ClearCashieringServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

clearing of cache in cashiering services



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ClearCashieringServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ClearCashieringServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearCashieringServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ClearCashieringServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiClearCashieringServiceCacheRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CloseReservationFolio

> Status CloseReservationFolio(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CloseFolioCriteria(closeFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Close Reservation Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    closeFolioCriteria := *openapiclient.NewCloseReservationFolioRequest() // CloseReservationFolioRequest | Request to close an Open Folio Reservation. The Property should be using the Open Folio Functionality to use this operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.CloseReservationFolio(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CloseFolioCriteria(closeFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.CloseReservationFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CloseReservationFolio`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.CloseReservationFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCloseReservationFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **closeFolioCriteria** | [**CloseReservationFolioRequest**](CloseReservationFolioRequest.md) | Request to close an Open Folio Reservation. The Property should be using the Open Folio Functionality to use this operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ConvertFolio

> ConvertFolioDetails ConvertFolio(ctx, folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConvertFolioCriteria(convertFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Convert Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    convertFolioCriteria := *openapiclient.NewConvertFolioRequest() // ConvertFolioRequest | Request to convert folio from a Non Fiscal Folio type to a Fiscal Folio Type. Functionality is used in Italy and is only available when the country mode is set to Italy.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ConvertFolio(context.Background(), folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConvertFolioCriteria(convertFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ConvertFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ConvertFolio`: ConvertFolioDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ConvertFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiConvertFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **convertFolioCriteria** | [**ConvertFolioRequest**](ConvertFolioRequest.md) | Request to convert folio from a Non Fiscal Folio type to a Fiscal Folio Type. Functionality is used in Italy and is only available when the country mode is set to Italy. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ConvertFolioDetails**](ConvertFolioDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCompRoutingInstructions

> RoomRoutingPostings DeleteCompRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).FolioWindowNo(folioWindowNo).PayeeId(payeeId).MembershipIdNo(membershipIdNo).AuthorizerId(authorizerId).UserId(userId).UserName(userName).Comments(comments).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete comp routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    refreshFolio := true // bool | On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions. (optional)
    retrievePostingsForRoomRouting := true // bool | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. (optional)
    folioWindowNo := int32(56) // int32 |  (optional)
    payeeId := "payeeId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipIdNo := int32(56) // int32 | Unique Id of membership (optional)
    authorizerId := "authorizerId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    userId := int32(56) // int32 | User Id of the Opera User (optional)
    userName := "userName_example" // string | Name of the Opera User (optional)
    comments := "comments_example" // string |  (optional)
    daily := true // bool | Flag to indicate if the routing instruction is a daily instruction. (optional)
    sunday := true // bool |  (optional)
    monday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    friday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    creditLimit := []float32{float32(123)} // []float32 | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. (optional)
    percentageLimit := []float32{float32(123)} // []float32 | The routing limit percentage allowed for this routing instruction. (optional)
    covers := []float32{float32(123)} // []float32 | Number of covers for this routing instruction. (optional)
    transactionCode := []string{"Inner_example"} // []string | Unique identifier for the Transaction code. (optional)
    billingCode := []string{"Inner_example"} // []string | Unique identifier for the Billing Instruction. (optional)
    routingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    routingLinkId := "routingLinkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DeleteCompRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).FolioWindowNo(folioWindowNo).PayeeId(payeeId).MembershipIdNo(membershipIdNo).AuthorizerId(authorizerId).UserId(userId).UserName(userName).Comments(comments).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DeleteCompRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCompRoutingInstructions`: RoomRoutingPostings
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DeleteCompRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCompRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **refreshFolio** | **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | 
 **retrievePostingsForRoomRouting** | **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | 
 **folioWindowNo** | **int32** |  | 
 **payeeId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipIdNo** | **int32** | Unique Id of membership | 
 **authorizerId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **userId** | **int32** | User Id of the Opera User | 
 **userName** | **string** | Name of the Opera User | 
 **comments** | **string** |  | 
 **daily** | **bool** | Flag to indicate if the routing instruction is a daily instruction. | 
 **sunday** | **bool** |  | 
 **monday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **friday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **creditLimit** | **[]float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | 
 **percentageLimit** | **[]float32** | The routing limit percentage allowed for this routing instruction. | 
 **covers** | **[]float32** | Number of covers for this routing instruction. | 
 **transactionCode** | **[]string** | Unique identifier for the Transaction code. | 
 **billingCode** | **[]string** | Unique identifier for the Billing Instruction. | 
 **routingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **routingLinkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomRoutingPostings**](RoomRoutingPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteFolioRoutingInstructions

> RoomRoutingPostings DeleteFolioRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).FolioWindowNo(folioWindowNo).PayeeId(payeeId).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Folio routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    refreshFolio := true // bool | On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions. (optional)
    retrievePostingsForRoomRouting := true // bool | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. (optional)
    folioWindowNo := int32(56) // int32 |  (optional)
    payeeId := "payeeId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    daily := true // bool | Flag to indicate if the routing instruction is a daily instruction. (optional)
    sunday := true // bool |  (optional)
    monday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    friday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    creditLimit := []float32{float32(123)} // []float32 | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. (optional)
    percentageLimit := []float32{float32(123)} // []float32 | The routing limit percentage allowed for this routing instruction. (optional)
    covers := []float32{float32(123)} // []float32 | Number of covers for this routing instruction. (optional)
    transactionCode := []string{"Inner_example"} // []string | Unique identifier for the Transaction code. (optional)
    billingCode := []string{"Inner_example"} // []string | Unique identifier for the Billing Instruction. (optional)
    routingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    routingLinkId := "routingLinkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DeleteFolioRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).FolioWindowNo(folioWindowNo).PayeeId(payeeId).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DeleteFolioRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFolioRoutingInstructions`: RoomRoutingPostings
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DeleteFolioRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFolioRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **refreshFolio** | **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | 
 **retrievePostingsForRoomRouting** | **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | 
 **folioWindowNo** | **int32** |  | 
 **payeeId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **daily** | **bool** | Flag to indicate if the routing instruction is a daily instruction. | 
 **sunday** | **bool** |  | 
 **monday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **friday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **creditLimit** | **[]float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | 
 **percentageLimit** | **[]float32** | The routing limit percentage allowed for this routing instruction. | 
 **covers** | **[]float32** | Number of covers for this routing instruction. | 
 **transactionCode** | **[]string** | Unique identifier for the Transaction code. | 
 **billingCode** | **[]string** | Unique identifier for the Billing Instruction. | 
 **routingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **routingLinkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomRoutingPostings**](RoomRoutingPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRequestRoutingInstructions

> RoomRoutingPostings DeleteRequestRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).UserName(userName).Comments(comments).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete request routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    refreshFolio := true // bool | On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions. (optional)
    retrievePostingsForRoomRouting := true // bool | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. (optional)
    userName := "userName_example" // string | Name of the Opera User (optional)
    comments := "comments_example" // string |  (optional)
    daily := true // bool | Flag to indicate if the routing instruction is a daily instruction. (optional)
    sunday := true // bool |  (optional)
    monday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    friday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DeleteRequestRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).UserName(userName).Comments(comments).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DeleteRequestRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRequestRoutingInstructions`: RoomRoutingPostings
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DeleteRequestRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRequestRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **refreshFolio** | **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | 
 **retrievePostingsForRoomRouting** | **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | 
 **userName** | **string** | Name of the Opera User | 
 **comments** | **string** |  | 
 **daily** | **bool** | Flag to indicate if the routing instruction is a daily instruction. | 
 **sunday** | **bool** |  | 
 **monday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **friday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomRoutingPostings**](RoomRoutingPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRoomRoutingInstructions

> RoomRoutingPostings DeleteRoomRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).ReservationNameId(reservationNameId).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    refreshFolio := true // bool | On a successful update, the transactions that are already posted in the guest's folio will be re-organized based on the configured instructions. (optional)
    retrievePostingsForRoomRouting := true // bool | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. (optional)
    reservationNameId := "reservationNameId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    daily := true // bool | Flag to indicate if the routing instruction is a daily instruction. (optional)
    sunday := true // bool |  (optional)
    monday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    friday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    creditLimit := []float32{float32(123)} // []float32 | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. (optional)
    percentageLimit := []float32{float32(123)} // []float32 | The routing limit percentage allowed for this routing instruction. (optional)
    covers := []float32{float32(123)} // []float32 | Number of covers for this routing instruction. (optional)
    transactionCode := []string{"Inner_example"} // []string | Unique identifier for the Transaction code. (optional)
    billingCode := []string{"Inner_example"} // []string | Unique identifier for the Billing Instruction. (optional)
    routingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    routingLinkId := "routingLinkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DeleteRoomRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RefreshFolio(refreshFolio).RetrievePostingsForRoomRouting(retrievePostingsForRoomRouting).ReservationNameId(reservationNameId).Daily(daily).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).StartDate(startDate).EndDate(endDate).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).TransactionCode(transactionCode).BillingCode(billingCode).RoutingInstructionsId(routingInstructionsId).RoutingLinkId(routingLinkId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DeleteRoomRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomRoutingInstructions`: RoomRoutingPostings
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DeleteRoomRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **refreshFolio** | **bool** | On a successful update, the transactions that are already posted in the guest&#39;s folio will be re-organized based on the configured instructions. | 
 **retrievePostingsForRoomRouting** | **bool** | This flag indicates if postings that can be refreshed need to be part of the response when a routing instruction is created, updated or deleted. | 
 **reservationNameId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **daily** | **bool** | Flag to indicate if the routing instruction is a daily instruction. | 
 **sunday** | **bool** |  | 
 **monday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **friday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **creditLimit** | **[]float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | 
 **percentageLimit** | **[]float32** | The routing limit percentage allowed for this routing instruction. | 
 **covers** | **[]float32** | Number of covers for this routing instruction. | 
 **transactionCode** | **[]string** | Unique identifier for the Transaction code. | 
 **billingCode** | **[]string** | Unique identifier for the Billing Instruction. | 
 **routingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **routingLinkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomRoutingPostings**](RoomRoutingPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRoutingInstructions

> Status DeleteRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DeleteRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DeleteRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DeleteRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DetachDepositPolicyFromPayment

> Status DetachDepositPolicyFromPayment(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DetachPolicyApplyCriteria(detachPolicyApplyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Detach Deposit Policy from Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    detachPolicyApplyCriteria := *openapiclient.NewDetachDepositPolicyFromPaymentRequest() // DetachDepositPolicyFromPaymentRequest | Request to detach a deposit payment from a Deposit Policy on a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.DetachDepositPolicyFromPayment(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DetachPolicyApplyCriteria(detachPolicyApplyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.DetachDepositPolicyFromPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DetachDepositPolicyFromPayment`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.DetachDepositPolicyFromPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDetachDepositPolicyFromPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **detachPolicyApplyCriteria** | [**DetachDepositPolicyFromPaymentRequest**](DetachDepositPolicyFromPaymentRequest.md) | Request to detach a deposit payment from a Deposit Policy on a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GenerateFiscalFolio

> FiscalInformationFolio GenerateFiscalFolio(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalInfoFolioCriteria(fiscalInfoFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Fiscal Information Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalInfoFolioCriteria := *openapiclient.NewGenerateFiscalFolioRequest() // GenerateFiscalFolioRequest | Request to generate fiscal Information folio.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GenerateFiscalFolio(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalInfoFolioCriteria(fiscalInfoFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GenerateFiscalFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateFiscalFolio`: FiscalInformationFolio
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GenerateFiscalFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGenerateFiscalFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalInfoFolioCriteria** | [**GenerateFiscalFolioRequest**](GenerateFiscalFolioRequest.md) | Request to generate fiscal Information folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalInformationFolio**](FiscalInformationFolio.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GenerateFolio

> GeneratedFolio GenerateFolio(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioCriteria(folioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Generate Folios



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioCriteria := *openapiclient.NewGenerateFolioRequest() // GenerateFolioRequest | Generate Folio request can be used to create a folio for checked in reservation or reservation with open folios
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GenerateFolio(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioCriteria(folioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GenerateFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateFolio`: GeneratedFolio
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GenerateFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGenerateFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioCriteria** | [**GenerateFolioRequest**](GenerateFolioRequest.md) | Generate Folio request can be used to create a folio for checked in reservation or reservation with open folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GeneratedFolio**](GeneratedFolio.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAdditionalTaxes

> AdditionalTaxesDetails GetAdditionalTaxes(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).FolioView(folioView).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get additional Taxes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    folioView := int32(56) // int32 | Folio Window. (optional)
    currencyCode := "currencyCode_example" // string | Currency code on which tax is to be calculated (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetAdditionalTaxes(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).FolioView(folioView).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetAdditionalTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAdditionalTaxes`: AdditionalTaxesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetAdditionalTaxes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAdditionalTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **folioView** | **int32** | Folio Window. | 
 **currencyCode** | **string** | Currency code on which tax is to be calculated | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdditionalTaxesDetails**](AdditionalTaxesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAdvancePaymentBalance

> AdvancePaymentBalance GetAdvancePaymentBalance(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).FromDate(fromDate).NumberOfNights(numberOfNights).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get advance payment balance



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    fromDate := time.Now() // string | From date of reservation. (optional)
    numberOfNights := int32(56) // int32 | Number of nights to calculate advance payment. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetAdvancePaymentBalance(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).FromDate(fromDate).NumberOfNights(numberOfNights).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetAdvancePaymentBalance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAdvancePaymentBalance`: AdvancePaymentBalance
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetAdvancePaymentBalance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAdvancePaymentBalanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **fromDate** | **string** | From date of reservation. | 
 **numberOfNights** | **int32** | Number of nights to calculate advance payment. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdvancePaymentBalance**](AdvancePaymentBalance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAlerts

> AlertNotices GetAlerts(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertArea(alertArea).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Alert Notices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertArea := "alertArea_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetAlerts(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertArea(alertArea).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAlerts`: AlertNotices
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertArea** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AlertNotices**](AlertNotices.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizationHistory

> AuthorizationHistory GetAuthorizationHistory(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).IncludeAuthorizations(includeAuthorizations).IncludePayments(includePayments).IncludeRefunds(includeRefunds).IncludeFailures(includeFailures).FolioView(folioView).TransactionType(transactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get authorization history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    includeAuthorizations := true // bool | A flag which indicates whether authorizations should be included in the returned list. (optional)
    includePayments := true // bool | A flag which indicates whether payments should be included in the returned list. (optional)
    includeRefunds := true // bool | A flag which indicates whether refunds should be included in the returned list. (optional)
    includeFailures := true // bool | A flag which indicates whether failures should be included in the returned list. (optional)
    folioView := int32(56) // int32 |  (optional)
    transactionType := "transactionType_example" // string | Currently supported transaction type categories used for credit card authorization. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetAuthorizationHistory(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).IncludeAuthorizations(includeAuthorizations).IncludePayments(includePayments).IncludeRefunds(includeRefunds).IncludeFailures(includeFailures).FolioView(folioView).TransactionType(transactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetAuthorizationHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizationHistory`: AuthorizationHistory
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetAuthorizationHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizationHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **includeAuthorizations** | **bool** | A flag which indicates whether authorizations should be included in the returned list. | 
 **includePayments** | **bool** | A flag which indicates whether payments should be included in the returned list. | 
 **includeRefunds** | **bool** | A flag which indicates whether refunds should be included in the returned list. | 
 **includeFailures** | **bool** | A flag which indicates whether failures should be included in the returned list. | 
 **folioView** | **int32** |  | 
 **transactionType** | **string** | Currently supported transaction type categories used for credit card authorization. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizationHistory**](AuthorizationHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizersCreditInfo

> AuthorizersCreditInfo GetAuthorizersCreditInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).Code(code).IncludeCreditDetails(includeCreditDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Authorizers Credit Info



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    includeCreditDetails := true // bool | This flag will notify the service if the Credit details will also be returned or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetAuthorizersCreditInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).Code(code).IncludeCreditDetails(includeCreditDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetAuthorizersCreditInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizersCreditInfo`: AuthorizersCreditInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetAuthorizersCreditInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizersCreditInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **code** | **[]string** |  | 
 **includeCreditDetails** | **bool** | This flag will notify the service if the Credit details will also be returned or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizersCreditInfo**](AuthorizersCreditInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBalanceInfo

> BalanceInfoCriteria GetBalanceInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).Id(id).IdContext(idContext).Type_(type_).FolioWindowNo(folioWindowNo).CashierId(cashierId).TransactionCode(transactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).PostItNumberId(postItNumberId).PostItNumberIdContext(postItNumberIdContext).PostItNumberType(postItNumberType).ProfileIdId(profileIdId).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).ReservationIdId(reservationIdId).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).PolicyIdId(policyIdId).PolicyIdIdContext(policyIdIdContext).PolicyIdType(policyIdType).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Balance Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    event := "event_example" // string | Event being generated by a Supplemental Folio. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    folioWindowNo := []int32{int32(123)} // []int32 |  (optional)
    cashierId := []float32{float32(123)} // []float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction Code to post. (optional)
    articleCode := []string{"Inner_example"} // []string | Article ID. (optional)
    amount := []float32{float32(123)} // []float32 | A monetary amount. (optional)
    currencyCode := []string{"Inner_example"} // []string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingQuantity := []int32{int32(123)} // []int32 | Quantity to post to the folio. (optional)
    postingReference := []string{"Inner_example"} // []string | User-defined posting reference. (optional)
    postingRemark := []string{"Inner_example"} // []string | User-defined posting remark. (optional)
    checkNumber := []string{"Inner_example"} // []string | Indicates the Cheque number. (optional)
    arrangementCode := []string{"Inner_example"} // []string | Corrected arrangement code from the package associated to this transaction. (optional)
    applyRoutingInstructions := []bool{false} // []bool | Apply room routing when making this posting. (optional)
    usePackageAllowance := []bool{false} // []bool | Use the applicable package allowance when making this posting. (optional)
    autoPosting := []bool{false} // []bool | True indicates the Transaction Code is allowed to be posted automatically. (optional)
    uniqueIdId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    postItNumberId := "postItNumberId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    postItNumberIdContext := "postItNumberIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    postItNumberType := "postItNumberType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    profileIdId := "profileIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdIdContext := "profileIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    reservationIdId := "reservationIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdIdContext := "reservationIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    policyIdId := "policyIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    policyIdIdContext := "policyIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    policyIdType := "policyIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | The Fiscal Bill number of this posting (optional)
    folioDate := time.Now() // string | Date of Folio Generation. (optional)
    folioNo := float32(8.14) // float32 | Folio Number. (optional)
    folioStatus := "folioStatus_example" // string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := "folioTypeName_example" // string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetBalanceInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).Id(id).IdContext(idContext).Type_(type_).FolioWindowNo(folioWindowNo).CashierId(cashierId).TransactionCode(transactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).PostItNumberId(postItNumberId).PostItNumberIdContext(postItNumberIdContext).PostItNumberType(postItNumberType).ProfileIdId(profileIdId).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).ReservationIdId(reservationIdId).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).PolicyIdId(policyIdId).PolicyIdIdContext(policyIdIdContext).PolicyIdType(policyIdType).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetBalanceInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBalanceInfo`: BalanceInfoCriteria
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetBalanceInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBalanceInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **event** | **string** | Event being generated by a Supplemental Folio. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **folioWindowNo** | **[]int32** |  | 
 **cashierId** | **[]float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **transactionCode** | **[]string** | Transaction Code to post. | 
 **articleCode** | **[]string** | Article ID. | 
 **amount** | **[]float32** | A monetary amount. | 
 **currencyCode** | **[]string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingQuantity** | **[]int32** | Quantity to post to the folio. | 
 **postingReference** | **[]string** | User-defined posting reference. | 
 **postingRemark** | **[]string** | User-defined posting remark. | 
 **checkNumber** | **[]string** | Indicates the Cheque number. | 
 **arrangementCode** | **[]string** | Corrected arrangement code from the package associated to this transaction. | 
 **applyRoutingInstructions** | **[]bool** | Apply room routing when making this posting. | 
 **usePackageAllowance** | **[]bool** | Use the applicable package allowance when making this posting. | 
 **autoPosting** | **[]bool** | True indicates the Transaction Code is allowed to be posted automatically. | 
 **uniqueIdId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **postItNumberId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **postItNumberIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **postItNumberType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **profileIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **reservationIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **policyIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **policyIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **policyIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **fiscalBillNo** | **string** | The Fiscal Bill number of this posting | 
 **folioDate** | **string** | Date of Folio Generation. | 
 **folioNo** | **float32** | Folio Number. | 
 **folioStatus** | **string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BalanceInfoCriteria**](BalanceInfoCriteria.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBatchCCSettlements

> CcBatchSettlements GetBatchCCSettlements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OfflineSettlement(offlineSettlement).TransactionDate(transactionDate).GuestName(guestName).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get batch CC Settlements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    offlineSettlement := true // bool | fetch only offline settlements. (optional)
    transactionDate := time.Now() // string | Transaction Date associated with the transaction. (optional)
    guestName := "guestName_example" // string | Guest name associated with the transaction. (optional)
    roomId := "roomId_example" // string | Room number associated with the transaction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetBatchCCSettlements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OfflineSettlement(offlineSettlement).TransactionDate(transactionDate).GuestName(guestName).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetBatchCCSettlements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBatchCCSettlements`: CcBatchSettlements
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetBatchCCSettlements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBatchCCSettlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **offlineSettlement** | **bool** | fetch only offline settlements. | 
 **transactionDate** | **string** | Transaction Date associated with the transaction. | 
 **guestName** | **string** | Guest name associated with the transaction. | 
 **roomId** | **string** | Room number associated with the transaction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CcBatchSettlements**](CcBatchSettlements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBatchCCSettlementsStatus

> CcBatchSettlementsStatus GetBatchCCSettlementsStatus(ctx, batchId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Batch CC Settlements Status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    batchId := "batchId_example" // string | Unique ID of the batch
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetBatchCCSettlementsStatus(context.Background(), batchId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetBatchCCSettlementsStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBatchCCSettlementsStatus`: CcBatchSettlementsStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetBatchCCSettlementsStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**batchId** | **string** | Unique ID of the batch | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBatchCCSettlementsStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CcBatchSettlementsStatus**](CcBatchSettlementsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBedTaxInfo

> BedTaxInfo GetBedTaxInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Arrival(arrival).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get bed tax information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arrival := time.Now() // string | Arrival Date of the reservation (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetBedTaxInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Arrival(arrival).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetBedTaxInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBedTaxInfo`: BedTaxInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetBedTaxInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBedTaxInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arrival** | **string** | Arrival Date of the reservation | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BedTaxInfo**](BedTaxInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBillingInstructionCodes

> BillingInstructionCodes GetBillingInstructionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).IncludeBillingInstructions(includeBillingInstructions).IncludeCompInstructions(includeCompInstructions).CodeWildCard(codeWildCard).DescriptionWildCard(descriptionWildCard).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Billing (routing) Instruction Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := true // bool | Flag to include the search in the Transaction Codes. (optional)
    includeBillingInstructions := true // bool | Flag to include the search in the Billing Instructions. (optional)
    includeCompInstructions := true // bool | Flag to include the comp instructions in the available list. (optional)
    codeWildCard := "codeWildCard_example" // string | Lookup string which will try to match an existing Billing and/or Transaction Codes. (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | Lookup string which will try to match an existing Billing and/or Transaction Code Description. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetBillingInstructionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).IncludeBillingInstructions(includeBillingInstructions).IncludeCompInstructions(includeCompInstructions).CodeWildCard(codeWildCard).DescriptionWildCard(descriptionWildCard).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetBillingInstructionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBillingInstructionCodes`: BillingInstructionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetBillingInstructionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBillingInstructionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | Flag to include the search in the Transaction Codes. | 
 **includeBillingInstructions** | **bool** | Flag to include the search in the Billing Instructions. | 
 **includeCompInstructions** | **bool** | Flag to include the comp instructions in the available list. | 
 **codeWildCard** | **string** | Lookup string which will try to match an existing Billing and/or Transaction Codes. | 
 **descriptionWildCard** | **string** | Lookup string which will try to match an existing Billing and/or Transaction Code Description. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BillingInstructionCodes**](BillingInstructionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCCAuthorizationInstructions

> CcAuthorizationInstructions GetCCAuthorizationInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EvaluateApprovalAmount(evaluateApprovalAmount).SourceOfAuthorization(sourceOfAuthorization).UpdateReservation(updateReservation).IdContext(idContext).Type_(type_).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).Amount(amount).CurrencyCode(currencyCode).FolioView(folioView).Description(description).PaymentFolioView(paymentFolioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).CardPresent(cardPresent).CitId(citId).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CardIdIdContext(cardIdIdContext).CardIdType(cardIdType).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).TerminalId(terminalId).IncidentalAmountAmount(incidentalAmountAmount).IncidentalAmountCurrencyCode(incidentalAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get CC Authorization Instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    evaluateApprovalAmount := true // bool | Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules. (optional)
    sourceOfAuthorization := "sourceOfAuthorization_example" // string | Currently supported transaction type categories used for credit card authorization. (optional)
    updateReservation := true // bool | Update the card details on the reservations for Chip and Pin Authorizations. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional) (default to "Reservation")
    profileIdIdContext := "profileIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional) (default to "Profile")
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    folioView := int32(56) // int32 | The folio window where this authorization is applied. (optional)
    description := "description_example" // string |  (optional)
    paymentFolioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    track2Data := "track2Data_example" // string | Track2 data for the card which would be sent to the CC vendor as part of the authorization. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    cardPresent := true // bool | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. (optional)
    citId := "citId_example" // string | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardIdId := "cardIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cardIdIdContext := "cardIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    currentAuthorizedAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    code := int32(56) // int32 | The authorization rule code. (optional)
    amountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    amountCurrencyCode := "amountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    percent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    uniqueIdId := "uniqueIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := "uniqueIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := "uniqueIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    createDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailFormat := "emailFormat_example" // string | Supported Email format. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    orderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    typeDescription := "typeDescription_example" // string | Describes the Type code (optional)
    approvalCode := "approvalCode_example" // string | The approval code authenticates the authorization. (optional)
    originalAuthSequence := int32(56) // int32 | Unique Authorization Sequence for the authorization and settlement. (optional)
    vendorTranId := "vendorTranId_example" // string | Vendor transaction id for the authorization. (optional)
    approvalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    terminalId := "terminalId_example" // string | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected. (optional)
    incidentalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    incidentalAmountCurrencyCode := "incidentalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCCAuthorizationInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EvaluateApprovalAmount(evaluateApprovalAmount).SourceOfAuthorization(sourceOfAuthorization).UpdateReservation(updateReservation).IdContext(idContext).Type_(type_).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).Amount(amount).CurrencyCode(currencyCode).FolioView(folioView).Description(description).PaymentFolioView(paymentFolioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).CardPresent(cardPresent).CitId(citId).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CardIdIdContext(cardIdIdContext).CardIdType(cardIdType).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).TerminalId(terminalId).IncidentalAmountAmount(incidentalAmountAmount).IncidentalAmountCurrencyCode(incidentalAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCCAuthorizationInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCCAuthorizationInstructions`: CcAuthorizationInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCCAuthorizationInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCCAuthorizationInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **evaluateApprovalAmount** | **bool** | Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules. | 
 **sourceOfAuthorization** | **string** | Currently supported transaction type categories used for credit card authorization. | 
 **updateReservation** | **bool** | Update the card details on the reservations for Chip and Pin Authorizations. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [default to &quot;Reservation&quot;]
 **profileIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [default to &quot;Profile&quot;]
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **folioView** | **int32** | The folio window where this authorization is applied. | 
 **description** | **string** |  | 
 **paymentFolioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **track2Data** | **string** | Track2 data for the card which would be sent to the CC vendor as part of the authorization. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **cardPresent** | **bool** | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. | 
 **citId** | **string** | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cardIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **currentAuthorizedAmountAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **code** | **int32** | The authorization rule code. | 
 **amountAmount** | **float32** | A monetary amount. | 
 **amountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **percent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **uniqueIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **createDateTime** | **time.Time** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailFormat** | **string** | Supported Email format. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **orderSequence** | **float32** | Display Order sequence. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **typeDescription** | **string** | Describes the Type code | 
 **approvalCode** | **string** | The approval code authenticates the authorization. | 
 **originalAuthSequence** | **int32** | Unique Authorization Sequence for the authorization and settlement. | 
 **vendorTranId** | **string** | Vendor transaction id for the authorization. | 
 **approvalAmountAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **terminalId** | **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected. | 
 **incidentalAmountAmount** | **float32** | A monetary amount. | 
 **incidentalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CcAuthorizationInstructions**](CcAuthorizationInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCCAuthorizationInstructionsByProfile

> CcAuthorizationInstructions GetCCAuthorizationInstructionsByProfile(ctx, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EvaluateApprovalAmount(evaluateApprovalAmount).SourceOfAuthorization(sourceOfAuthorization).UpdateReservation(updateReservation).IdContext(idContext).Type_(type_).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).Amount(amount).CurrencyCode(currencyCode).FolioView(folioView).Description(description).PaymentFolioView(paymentFolioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).CardPresent(cardPresent).CitId(citId).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CardIdIdContext(cardIdIdContext).CardIdType(cardIdType).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).TerminalId(terminalId).IncidentalAmountAmount(incidentalAmountAmount).IncidentalAmountCurrencyCode(incidentalAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get CC Authorization Instructions by Profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    evaluateApprovalAmount := true // bool | Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules. (optional)
    sourceOfAuthorization := "sourceOfAuthorization_example" // string | Currently supported transaction type categories used for credit card authorization. (optional)
    updateReservation := true // bool | Update the card details on the reservations for Chip and Pin Authorizations. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional) (default to "Reservation")
    profileIdIdContext := "profileIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional) (default to "Profile")
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    folioView := int32(56) // int32 | The folio window where this authorization is applied. (optional)
    description := "description_example" // string |  (optional)
    paymentFolioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    track2Data := "track2Data_example" // string | Track2 data for the card which would be sent to the CC vendor as part of the authorization. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    cardPresent := true // bool | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. (optional)
    citId := "citId_example" // string | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardIdId := "cardIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cardIdIdContext := "cardIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    currentAuthorizedAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    code := int32(56) // int32 | The authorization rule code. (optional)
    amountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    amountCurrencyCode := "amountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    percent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    uniqueIdId := "uniqueIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := "uniqueIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := "uniqueIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    createDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailFormat := "emailFormat_example" // string | Supported Email format. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    orderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    typeDescription := "typeDescription_example" // string | Describes the Type code (optional)
    approvalCode := "approvalCode_example" // string | The approval code authenticates the authorization. (optional)
    originalAuthSequence := int32(56) // int32 | Unique Authorization Sequence for the authorization and settlement. (optional)
    vendorTranId := "vendorTranId_example" // string | Vendor transaction id for the authorization. (optional)
    approvalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    terminalId := "terminalId_example" // string | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected. (optional)
    incidentalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    incidentalAmountCurrencyCode := "incidentalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCCAuthorizationInstructionsByProfile(context.Background(), profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EvaluateApprovalAmount(evaluateApprovalAmount).SourceOfAuthorization(sourceOfAuthorization).UpdateReservation(updateReservation).IdContext(idContext).Type_(type_).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).Amount(amount).CurrencyCode(currencyCode).FolioView(folioView).Description(description).PaymentFolioView(paymentFolioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).CardPresent(cardPresent).CitId(citId).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CardIdIdContext(cardIdIdContext).CardIdType(cardIdType).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).TerminalId(terminalId).IncidentalAmountAmount(incidentalAmountAmount).IncidentalAmountCurrencyCode(incidentalAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCCAuthorizationInstructionsByProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCCAuthorizationInstructionsByProfile`: CcAuthorizationInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCCAuthorizationInstructionsByProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCCAuthorizationInstructionsByProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **evaluateApprovalAmount** | **bool** | Flag to indicate if the approval amount should be calculated before authorization. If this is true and if the amount is 0 the approval amount will be calculated based on the rules. | 
 **sourceOfAuthorization** | **string** | Currently supported transaction type categories used for credit card authorization. | 
 **updateReservation** | **bool** | Update the card details on the reservations for Chip and Pin Authorizations. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [default to &quot;Reservation&quot;]
 **profileIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [default to &quot;Profile&quot;]
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **folioView** | **int32** | The folio window where this authorization is applied. | 
 **description** | **string** |  | 
 **paymentFolioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **track2Data** | **string** | Track2 data for the card which would be sent to the CC vendor as part of the authorization. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **cardPresent** | **bool** | Flag to determine if the credit card was swiped/manually entered , This element is only used when PAYMENT SERVICE DIRECTIVE(PSD) Opera Control is active. | 
 **citId** | **string** | Customer Initiated Transaction(CIT) Id for Credit Cards. This is only used when PAYMENT SERVICES DIRECTIVE (PSD2) Opera Control is active. | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cardIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **currentAuthorizedAmountAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **code** | **int32** | The authorization rule code. | 
 **amountAmount** | **float32** | A monetary amount. | 
 **amountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **percent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **uniqueIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **createDateTime** | **time.Time** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailFormat** | **string** | Supported Email format. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **orderSequence** | **float32** | Display Order sequence. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **typeDescription** | **string** | Describes the Type code | 
 **approvalCode** | **string** | The approval code authenticates the authorization. | 
 **originalAuthSequence** | **int32** | Unique Authorization Sequence for the authorization and settlement. | 
 **vendorTranId** | **string** | Vendor transaction id for the authorization. | 
 **approvalAmountAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **terminalId** | **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected. | 
 **incidentalAmountAmount** | **float32** | A monetary amount. | 
 **incidentalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CcAuthorizationInstructions**](CcAuthorizationInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCCSurchargeInfo

> CcSurchargeDetails GetCCSurchargeInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).PostingAmountAmount(postingAmountAmount).PostingAmountCurrencyCode(postingAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get CC Surcharge Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    description := "description_example" // string |  (optional)
    folioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    track2Data := "track2Data_example" // string | Track2 data for the card which would be sent to the CC vendor as part of the authorization. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    code := int32(56) // int32 | The authorization rule code. (optional)
    amountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    amountCurrencyCode := "amountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    percent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    uniqueIdId := "uniqueIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := "uniqueIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := "uniqueIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    createDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailFormat := "emailFormat_example" // string | Supported Email format. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    orderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    typeDescription := "typeDescription_example" // string | Describes the Type code (optional)
    approvalCode := "approvalCode_example" // string | The approval code authenticates the authorization. (optional)
    originalAuthSequence := int32(56) // int32 | Unique Authorization Sequence for the authorization and settlement. (optional)
    vendorTranId := "vendorTranId_example" // string | Vendor transaction id for the authorization. (optional)
    approvalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    postingAmountCurrencyCode := "postingAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCCSurchargeInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).PostingAmountAmount(postingAmountAmount).PostingAmountCurrencyCode(postingAmountCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCCSurchargeInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCCSurchargeInfo`: CcSurchargeDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCCSurchargeInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCCSurchargeInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **description** | **string** |  | 
 **folioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **track2Data** | **string** | Track2 data for the card which would be sent to the CC vendor as part of the authorization. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **code** | **int32** | The authorization rule code. | 
 **amountAmount** | **float32** | A monetary amount. | 
 **amountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **percent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **uniqueIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **createDateTime** | **time.Time** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailFormat** | **string** | Supported Email format. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **orderSequence** | **float32** | Display Order sequence. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **typeDescription** | **string** | Describes the Type code | 
 **approvalCode** | **string** | The approval code authenticates the authorization. | 
 **originalAuthSequence** | **int32** | Unique Authorization Sequence for the authorization and settlement. | 
 **vendorTranId** | **string** | Vendor transaction id for the authorization. | 
 **approvalAmountAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingAmountAmount** | **float32** | A monetary amount. | 
 **postingAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CcSurchargeDetails**](CcSurchargeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierClosure

> CashierClosureDetails GetCashierClosure(ctx, cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierLockHandle(cashierLockHandle).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cashier Closure



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierLockHandle := float32(8.14) // float32 | The Cashier Lock Handle to pass along with operation which required cashier to be locked. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierClosure(context.Background(), cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierLockHandle(cashierLockHandle).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierClosure``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierClosure`: CashierClosureDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierClosure`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierClosureRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierLockHandle** | **float32** | The Cashier Lock Handle to pass along with operation which required cashier to be locked. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierClosureDetails**](CashierClosureDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierClosureInfo

> CashierClosureInformation GetCashierClosureInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).CashierId(cashierId).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).ClosureBusinessDate(closureBusinessDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cashier Closure Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    closureNo := float32(8.14) // float32 | The Cashier Shift Number. (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    shiftDropLocationCode := "shiftDropLocationCode_example" // string | Cashier closure shift drop location code. (optional)
    bagNumberForOthers := "bagNumberForOthers_example" // string | Cashier closure shift drop others payment method type bag number. (optional)
    bagNumberForCash := "bagNumberForCash_example" // string | Cashier closure shift drop cash payment method type bag number. (optional)
    closureBusinessDate := time.Now() // string | Business Date of cashier closure. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierClosureInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).CashierId(cashierId).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).ClosureBusinessDate(closureBusinessDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierClosureInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierClosureInfo`: CashierClosureInformation
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierClosureInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierClosureInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **closureNo** | **float32** | The Cashier Shift Number. | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **shiftDropLocationCode** | **string** | Cashier closure shift drop location code. | 
 **bagNumberForOthers** | **string** | Cashier closure shift drop others payment method type bag number. | 
 **bagNumberForCash** | **string** | Cashier closure shift drop cash payment method type bag number. | 
 **closureBusinessDate** | **string** | Business Date of cashier closure. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierClosureInformation**](CashierClosureInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierClosureReportsList

> CashierClosureReportsList GetCashierClosureReportsList(ctx, cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cashier Closure Reports List



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    closureNo := float32(8.14) // float32 | The Cashier Shift Number. (optional)
    shiftDropLocationCode := "shiftDropLocationCode_example" // string | Cashier closure shift drop location code. (optional)
    bagNumberForOthers := "bagNumberForOthers_example" // string | Cashier closure shift drop others payment method type bag number. (optional)
    bagNumberForCash := "bagNumberForCash_example" // string | Cashier closure shift drop cash payment method type bag number. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierClosureReportsList(context.Background(), cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierClosureReportsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierClosureReportsList`: CashierClosureReportsList
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierClosureReportsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierClosureReportsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **closureNo** | **float32** | The Cashier Shift Number. | 
 **shiftDropLocationCode** | **string** | Cashier closure shift drop location code. | 
 **bagNumberForOthers** | **string** | Cashier closure shift drop others payment method type bag number. | 
 **bagNumberForCash** | **string** | Cashier closure shift drop cash payment method type bag number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierClosureReportsList**](CashierClosureReportsList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierLock

> AcquiredCashierLock GetCashierLock(ctx, cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Acquire Cashier Locks



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierLock(context.Background(), cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierLock`: AcquiredCashierLock
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AcquiredCashierLock**](AcquiredCashierLock.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierReportPostings

> CashierReportPostingsInfo GetCashierReportPostings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).RequestType(requestType).ClosureNo(closureNo).CashierId(cashierId).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cashier Report Postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    requestType := "requestType_example" // string | Shift drop report created when cashier closure is completed. It is an integral part of closure report and is not to be printed or accessed by itself. (optional)
    closureNo := float32(8.14) // float32 | The Cashier Shift Number. (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    shiftDropLocationCode := "shiftDropLocationCode_example" // string | Cashier closure shift drop location code. (optional)
    bagNumberForOthers := "bagNumberForOthers_example" // string | Cashier closure shift drop others payment method type bag number. (optional)
    bagNumberForCash := "bagNumberForCash_example" // string | Cashier closure shift drop cash payment method type bag number. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierReportPostings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).RequestType(requestType).ClosureNo(closureNo).CashierId(cashierId).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierReportPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierReportPostings`: CashierReportPostingsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierReportPostings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierReportPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **requestType** | **string** | Shift drop report created when cashier closure is completed. It is an integral part of closure report and is not to be printed or accessed by itself. | 
 **closureNo** | **float32** | The Cashier Shift Number. | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **shiftDropLocationCode** | **string** | Cashier closure shift drop location code. | 
 **bagNumberForOthers** | **string** | Cashier closure shift drop others payment method type bag number. | 
 **bagNumberForCash** | **string** | Cashier closure shift drop cash payment method type bag number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierReportPostingsInfo**](CashierReportPostingsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashierTransactions

> CashierTransactionsDetails GetCashierTransactions(ctx, cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Cashier Transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    closureNo := float32(8.14) // float32 | The Cashier Shift Number. (optional)
    shiftDropLocationCode := "shiftDropLocationCode_example" // string | Cashier closure shift drop location code. (optional)
    bagNumberForOthers := "bagNumberForOthers_example" // string | Cashier closure shift drop others payment method type bag number. (optional)
    bagNumberForCash := "bagNumberForCash_example" // string | Cashier closure shift drop cash payment method type bag number. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCashierTransactions(context.Background(), cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClosureNo(closureNo).ShiftDropLocationCode(shiftDropLocationCode).BagNumberForOthers(bagNumberForOthers).BagNumberForCash(bagNumberForCash).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCashierTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashierTransactions`: CashierTransactionsDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCashierTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashierTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **closureNo** | **float32** | The Cashier Shift Number. | 
 **shiftDropLocationCode** | **string** | Cashier closure shift drop location code. | 
 **bagNumberForOthers** | **string** | Cashier closure shift drop others payment method type bag number. | 
 **bagNumberForCash** | **string** | Cashier closure shift drop cash payment method type bag number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierTransactionsDetails**](CashierTransactionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCheckDetails

> CheckDetails GetCheckDetails(ctx, checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get check details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    checkNumber := "checkNumber_example" // string | Unique number of the check
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCheckDetails(context.Background(), checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCheckDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCheckDetails`: CheckDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCheckDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**checkNumber** | **string** | Unique number of the check | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCheckDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckDetails**](CheckDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompAccountingJournal

> CompAccountingJournal GetCompAccountingJournal(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).StartDate(startDate).EndDate(endDate).Duration(duration).FilterTransactionCode(filterTransactionCode).HotelId(hotelId).FilterRoomNumber(filterRoomNumber).Id(id).IdContext(idContext).Type_(type_).ApprovalCode(approvalCode).Code(code).AuthorizerNameCode(authorizerNameCode).ReferenceNumberWildCard(referenceNumberWildCard).SupplementWildCard(supplementWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Comp Accounting Journal



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    filterTransactionCode := []string{"Inner_example"} // []string |  (optional)
    hotelId := []string{"Inner_example"} // []string |  (optional)
    filterRoomNumber := []string{"Inner_example"} // []string |  (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    approvalCode := "approvalCode_example" // string | Filters the results for approval code. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    authorizerNameCode := []string{"Inner_example"} // []string |  (optional)
    referenceNumberWildCard := "referenceNumberWildCard_example" // string | Filters the results for reference number. (optional)
    supplementWildCard := "supplementWildCard_example" // string | Filter the results for supplement. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCompAccountingJournal(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).StartDate(startDate).EndDate(endDate).Duration(duration).FilterTransactionCode(filterTransactionCode).HotelId(hotelId).FilterRoomNumber(filterRoomNumber).Id(id).IdContext(idContext).Type_(type_).ApprovalCode(approvalCode).Code(code).AuthorizerNameCode(authorizerNameCode).ReferenceNumberWildCard(referenceNumberWildCard).SupplementWildCard(supplementWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCompAccountingJournal``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompAccountingJournal`: CompAccountingJournal
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCompAccountingJournal`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCompAccountingJournalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **filterTransactionCode** | **[]string** |  | 
 **hotelId** | **[]string** |  | 
 **filterRoomNumber** | **[]string** |  | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **approvalCode** | **string** | Filters the results for approval code. | 
 **code** | **[]string** |  | 
 **authorizerNameCode** | **[]string** |  | 
 **referenceNumberWildCard** | **string** | Filters the results for reference number. | 
 **supplementWildCard** | **string** | Filter the results for supplement. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompAccountingJournal**](CompAccountingJournal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompRoutingInstructions

> CompRoutingInstructions GetCompRoutingInstructions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).NameWildcard(nameWildcard).FirstNameWildCard(firstNameWildCard).RoomNumberCodes(roomNumberCodes).Id(id).IdContext(idContext).Type_(type_).MembershipId(membershipId).Code(code).ResStatusCode(resStatusCode).CompRoutingStatuses(compRoutingStatuses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Comp Routing Instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    nameWildcard := "nameWildcard_example" // string | Family name or last name of the guest (optional)
    firstNameWildCard := "firstNameWildCard_example" // string | Given name or first name of the guest. (optional)
    roomNumberCodes := []string{"Inner_example"} // []string |  (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    membershipId := "membershipId_example" // string | Membership Card number. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    resStatusCode := []string{"ResStatusCode_example"} // []string | This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. (optional)
    compRoutingStatuses := []string{"CompRoutingStatuses_example"} // []string | Status which indicates that the Request of Comp Routing was declined (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCompRoutingInstructions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).NameWildcard(nameWildcard).FirstNameWildCard(firstNameWildCard).RoomNumberCodes(roomNumberCodes).Id(id).IdContext(idContext).Type_(type_).MembershipId(membershipId).Code(code).ResStatusCode(resStatusCode).CompRoutingStatuses(compRoutingStatuses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCompRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompRoutingInstructions`: CompRoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCompRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **nameWildcard** | **string** | Family name or last name of the guest | 
 **firstNameWildCard** | **string** | Given name or first name of the guest. | 
 **roomNumberCodes** | **[]string** |  | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **membershipId** | **string** | Membership Card number. | 
 **code** | **[]string** |  | 
 **resStatusCode** | **[]string** | This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. | 
 **compRoutingStatuses** | **[]string** | Status which indicates that the Request of Comp Routing was declined | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompRoutingInstructions**](CompRoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompTrxAuthorizers

> CompTrxAuthorizers GetCompTrxAuthorizers(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).Id(id).IdContext(idContext).Type_(type_).TargetFolioWindowNo(targetFolioWindowNo).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).Transaction(transaction).AuthorizerIdId(authorizerIdId).AuthorizerIdIdContext(authorizerIdIdContext).AuthorizerIdType(authorizerIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Comp Trx Authorizers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    targetFolioWindowNo := int32(56) // int32 | Folio Window Number to where transactions will be transfered. (optional)
    uniqueIdId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    transaction := []float32{float32(123)} // []float32 | List of transactions to be transfered. (optional)
    authorizerIdId := "authorizerIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    authorizerIdIdContext := "authorizerIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    authorizerIdType := "authorizerIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCompTrxAuthorizers(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).Id(id).IdContext(idContext).Type_(type_).TargetFolioWindowNo(targetFolioWindowNo).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).Transaction(transaction).AuthorizerIdId(authorizerIdId).AuthorizerIdIdContext(authorizerIdIdContext).AuthorizerIdType(authorizerIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCompTrxAuthorizers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompTrxAuthorizers`: CompTrxAuthorizers
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCompTrxAuthorizers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompTrxAuthorizersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **targetFolioWindowNo** | **int32** | Folio Window Number to where transactions will be transfered. | 
 **uniqueIdId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **transaction** | **[]float32** | List of transactions to be transfered. | 
 **authorizerIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorizerIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **authorizerIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompTrxAuthorizers**](CompTrxAuthorizers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCreditLimitOveragePayments

> CreditLimitOveragePaymentsInfo GetCreditLimitOveragePayments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestNameWildCard(guestNameWildCard).RoomNumberWildCard(roomNumberWildCard).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Credit Limits Overage Payments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestNameWildCard := "guestNameWildCard_example" // string | Guest name associated with the transaction. (optional)
    roomNumberWildCard := "roomNumberWildCard_example" // string | Room number associated with the transaction. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCreditLimitOveragePayments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestNameWildCard(guestNameWildCard).RoomNumberWildCard(roomNumberWildCard).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCreditLimitOveragePayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditLimitOveragePayments`: CreditLimitOveragePaymentsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCreditLimitOveragePayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditLimitOveragePaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestNameWildCard** | **string** | Guest name associated with the transaction. | 
 **roomNumberWildCard** | **string** | Room number associated with the transaction. | 
 **code** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditLimitOveragePaymentsInfo**](CreditLimitOveragePaymentsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDepositFolio

> ReservationDepositFolios GetDepositFolio(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).Id(id).PolicyIdId(policyIdId).BlockIdId(blockIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Deposit Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for deposit folio instructions that can be used in requests for partial operations. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    policyIdId := "policyIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdId := "blockIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetDepositFolio(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).Id(id).PolicyIdId(policyIdId).BlockIdId(blockIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetDepositFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDepositFolio`: ReservationDepositFolios
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetDepositFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDepositFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for deposit folio instructions that can be used in requests for partial operations. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **policyIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationDepositFolios**](ReservationDepositFolios.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDepositFolioTransactionDetails

> DepositFolioTransactionDetails GetDepositFolioTransactionDetails(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).TransactionNo(transactionNo).IncludeExchangeInformation(includeExchangeInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Deposit Folio Transaction Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeGenerates := true // bool | Flag to indicate if the automatically generated transactions, related to the main transaction number above, are also to be retrieved as part of this request. (optional)
    transactionNo := []float32{float32(123)} // []float32 | Unique Transaction Number of the transaction(posting) for which details are required. (optional)
    includeExchangeInformation := true // bool | Flag to indicate what currency exchange information text needs to be included in response. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetDepositFolioTransactionDetails(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).TransactionNo(transactionNo).IncludeExchangeInformation(includeExchangeInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetDepositFolioTransactionDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDepositFolioTransactionDetails`: DepositFolioTransactionDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetDepositFolioTransactionDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDepositFolioTransactionDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeGenerates** | **bool** | Flag to indicate if the automatically generated transactions, related to the main transaction number above, are also to be retrieved as part of this request. | 
 **transactionNo** | **[]float32** | Unique Transaction Number of the transaction(posting) for which details are required. | 
 **includeExchangeInformation** | **bool** | Flag to indicate what currency exchange information text needs to be included in response. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositFolioTransactionDetails**](DepositFolioTransactionDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDepositMaturityInfo

> DepositMaturityDetails GetDepositMaturityInfo(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Deposit Maturity Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetDepositMaturityInfo(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetDepositMaturityInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDepositMaturityInfo`: DepositMaturityDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetDepositMaturityInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDepositMaturityInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositMaturityDetails**](DepositMaturityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFinancialPostings

> FinancialPostings GetFinancialPostings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).StartDate(startDate).EndDate(endDate).Duration(duration).CashierId(cashierId).FilterTransactionCode(filterTransactionCode).Code(code).FilterRoomNumber(filterRoomNumber).ReferenceNumberWildCard(referenceNumberWildCard).CheckNumberWildCard(checkNumberWildCard).SupplementWildCard(supplementWildCard).ApprovalCode(approvalCode).ApprovalStatusCode(approvalStatusCode).FolioWindowNo(folioWindowNo).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).ClosureNo(closureNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Financial Postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    filterTransactionCode := []string{"Inner_example"} // []string |  (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    filterRoomNumber := []string{"Inner_example"} // []string |  (optional)
    referenceNumberWildCard := "referenceNumberWildCard_example" // string | Filters the results for reference number. (optional)
    checkNumberWildCard := "checkNumberWildCard_example" // string | Filter the results for Cheque number's code. (optional)
    supplementWildCard := "supplementWildCard_example" // string | Filter the results for supplement. (optional)
    approvalCode := "approvalCode_example" // string | Filters the results for approval code. (optional)
    approvalStatusCode := []string{"Inner_example"} // []string |  (optional)
    folioWindowNo := []int32{int32(123)} // []int32 | Filters the result to only include transactions in this window number. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    closureNo := int32(56) // int32 | Filters the result to only display the postings that were made during the cashier closure range (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFinancialPostings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).StartDate(startDate).EndDate(endDate).Duration(duration).CashierId(cashierId).FilterTransactionCode(filterTransactionCode).Code(code).FilterRoomNumber(filterRoomNumber).ReferenceNumberWildCard(referenceNumberWildCard).CheckNumberWildCard(checkNumberWildCard).SupplementWildCard(supplementWildCard).ApprovalCode(approvalCode).ApprovalStatusCode(approvalStatusCode).FolioWindowNo(folioWindowNo).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).ClosureNo(closureNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFinancialPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFinancialPostings`: FinancialPostings
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFinancialPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFinancialPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **filterTransactionCode** | **[]string** |  | 
 **code** | **[]string** |  | 
 **filterRoomNumber** | **[]string** |  | 
 **referenceNumberWildCard** | **string** | Filters the results for reference number. | 
 **checkNumberWildCard** | **string** | Filter the results for Cheque number&#39;s code. | 
 **supplementWildCard** | **string** | Filter the results for supplement. | 
 **approvalCode** | **string** | Filters the results for approval code. | 
 **approvalStatusCode** | **[]string** |  | 
 **folioWindowNo** | **[]int32** | Filters the result to only include transactions in this window number. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **closureNo** | **int32** | Filters the result to only display the postings that were made during the cashier closure range | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FinancialPostings**](FinancialPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalFolioActivity

> FolioActivityDetailsType GetFiscalFolioActivity(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioSeqNo(folioSeqNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Fiscal Folio Activity for a folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioSeqNo := int32(56) // int32 | Folio Sequence number for a folio (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFiscalFolioActivity(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioSeqNo(folioSeqNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFiscalFolioActivity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalFolioActivity`: FolioActivityDetailsType
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFiscalFolioActivity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalFolioActivityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioSeqNo** | **int32** | Folio Sequence number for a folio | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioActivityDetailsType**](FolioActivityDetailsType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalFolioActivityDetails

> FolioActivityResponseDetailType GetFiscalFolioActivityDetails(ctx, folioSeqNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResponseAttemptNo(responseAttemptNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Fiscal Folio Activity Response details for a folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioSeqNo := "folioSeqNo_example" // string | Unique ID of the folio
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    responseAttemptNo := int32(56) // int32 | Number of fiscal response attempt made for the folio (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFiscalFolioActivityDetails(context.Background(), folioSeqNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResponseAttemptNo(responseAttemptNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFiscalFolioActivityDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalFolioActivityDetails`: FolioActivityResponseDetailType
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFiscalFolioActivityDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioSeqNo** | **string** | Unique ID of the folio | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalFolioActivityDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **responseAttemptNo** | **int32** | Number of fiscal response attempt made for the folio | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioActivityResponseDetailType**](FolioActivityResponseDetailType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalPrintingDetails

> FiscalCallStatus GetFiscalPrintingDetails(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioView(folioView).FolioType(folioType).Id(id).Code(code).FetchInstruction(fetchInstruction).ProfileIdId(profileIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Fiscal Printing Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioView := int32(56) // int32 | The folio window where this settlement is applied. (optional)
    folioType := "folioType_example" // string | Folio Type (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    fetchInstruction := []string{"FetchInstruction_example"} // []string | Reservation Related information. (optional)
    profileIdId := "profileIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFiscalPrintingDetails(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioView(folioView).FolioType(folioType).Id(id).Code(code).FetchInstruction(fetchInstruction).ProfileIdId(profileIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFiscalPrintingDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalPrintingDetails`: FiscalCallStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFiscalPrintingDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalPrintingDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioView** | **int32** | The folio window where this settlement is applied. | 
 **folioType** | **string** | Folio Type | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **code** | **[]string** |  | 
 **fetchInstruction** | **[]string** | Reservation Related information. | 
 **profileIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalCallStatus**](FiscalCallStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFixedCharges

> FixedChargesDetails GetFixedCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Fixed Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFixedCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFixedCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFixedCharges`: FixedChargesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFixedCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFixedChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FixedChargesDetails**](FixedChargesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolio

> Folio GetFolio(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestPayOnly(guestPayOnly).IncludeFolioHistory(includeFolioHistory).ReservationBalanceOnly(reservationBalanceOnly).FetchInstructions(fetchInstructions).End(end).FolioWindowNo(folioWindowNo).Limit(limit).Offset(offset).Start(start).SummaryOnly(summaryOnly).GroupType(groupType).ExchangeCurrency(exchangeCurrency).CalculateCollectingAgentTaxes(calculateCollectingAgentTaxes).VATOffset(vATOffset).IncludeDepositTaxes(includeDepositTaxes).SimpleFolio(simpleFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get folios



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestPayOnly := true // bool | Flag to return the Folio Windows information where the Reservation Guest is the Payee, i.e the Folio Window is not Routed to another Reservation or another Profile. (optional)
    includeFolioHistory := true // bool | This flag will notify the service if the folio history will also be returned or not. (optional)
    reservationBalanceOnly := true // bool | This flag will notify the service if the reservation summary information will be returned. If TRUE then we will only return the reservation's outstanding balance. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Posting details of each window. (optional)
    end := []string{time.Now()} // []string | The ending value of the date range. (optional)
    folioWindowNo := []int32{int32(123)} // []int32 |  (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := []int32{int32(123)} // []int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    start := []string{time.Now()} // []string | The starting value of the date range. (optional)
    summaryOnly := true // bool | This flag will notify the service that transactional postings will not be returned. (optional)
    groupType := "groupType_example" // string | Grouping by Transactin Type. (optional)
    exchangeCurrency := "exchangeCurrency_example" // string | Currency to which the Credit and Debit Amounts will be converted for each Folio. The response will have the ExchangeAmounts element with the converted amounts. The Posting Exchange Rate of the current business date will be used for the conversion (optional)
    calculateCollectingAgentTaxes := true // bool |  (optional)
    vATOffset := true // bool |  (optional)
    includeDepositTaxes := true // bool |  (optional)
    simpleFolio := true // bool | This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolio(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestPayOnly(guestPayOnly).IncludeFolioHistory(includeFolioHistory).ReservationBalanceOnly(reservationBalanceOnly).FetchInstructions(fetchInstructions).End(end).FolioWindowNo(folioWindowNo).Limit(limit).Offset(offset).Start(start).SummaryOnly(summaryOnly).GroupType(groupType).ExchangeCurrency(exchangeCurrency).CalculateCollectingAgentTaxes(calculateCollectingAgentTaxes).VATOffset(vATOffset).IncludeDepositTaxes(includeDepositTaxes).SimpleFolio(simpleFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolio`: Folio
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestPayOnly** | **bool** | Flag to return the Folio Windows information where the Reservation Guest is the Payee, i.e the Folio Window is not Routed to another Reservation or another Profile. | 
 **includeFolioHistory** | **bool** | This flag will notify the service if the folio history will also be returned or not. | 
 **reservationBalanceOnly** | **bool** | This flag will notify the service if the reservation summary information will be returned. If TRUE then we will only return the reservation&#39;s outstanding balance. | 
 **fetchInstructions** | **[]string** | Posting details of each window. | 
 **end** | **[]string** | The ending value of the date range. | 
 **folioWindowNo** | **[]int32** |  | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **[]int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **start** | **[]string** | The starting value of the date range. | 
 **summaryOnly** | **bool** | This flag will notify the service that transactional postings will not be returned. | 
 **groupType** | **string** | Grouping by Transactin Type. | 
 **exchangeCurrency** | **string** | Currency to which the Credit and Debit Amounts will be converted for each Folio. The response will have the ExchangeAmounts element with the converted amounts. The Posting Exchange Rate of the current business date will be used for the conversion | 
 **calculateCollectingAgentTaxes** | **bool** |  | 
 **vATOffset** | **bool** |  | 
 **includeDepositTaxes** | **bool** |  | 
 **simpleFolio** | **bool** | This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Folio**](Folio.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioHistory

> FolioHistoryResponse GetFolioHistory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).AR(aR).CheckOut(checkOut).CreditBill(creditBill).IncludeAssociatedFolios(includeAssociatedFolios).NoShow(noShow).OfflineFolio(offlineFolio).PasserBy(passerBy).PostIt(postIt).VideoCheckOut(videoCheckOut).FolioDate(folioDate).ReservationIdId(reservationIdId).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).Room(room).Name(name).FirstName(firstName).CreditCardNo(creditCardNo).FolioNo(folioNo).InvoiceNo(invoiceNo).AddresseeName(addresseeName).FiscalFolioNo(fiscalFolioNo).Code(code).PartnerFiscalFolioStatusCode(partnerFiscalFolioStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get folio history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    aR := true // bool | Indicates if search includes AR Folios. (optional)
    checkOut := true // bool | Indicates if search includes Check Out Folios. (optional)
    creditBill := true // bool | Indicates if search includes Credit Bill Folios. (optional)
    includeAssociatedFolios := true // bool | Indicates if search result includes Associated Bills and is only applied when Folio History for a particular reservation (i.e. ReservationID has a value) is requested. (optional)
    noShow := true // bool | Indicates if search includes No Show Folios. (optional)
    offlineFolio := true // bool | Indicates if search includes Offline Folios. (optional)
    passerBy := true // bool | Indicates if search includes Passer By Folios. (optional)
    postIt := true // bool | Indicates if search includes Post-It Folios. (optional)
    videoCheckOut := true // bool | Indicates if search includes Video Check Out Folios. (optional)
    folioDate := time.Now() // string | Folio History Date. (optional)
    reservationIdId := "reservationIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdIdContext := "reservationIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    room := "room_example" // string | Room Number to which this record applies. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    firstName := "firstName_example" // string | Given name, first name or names. (optional)
    creditCardNo := "creditCardNo_example" // string | Credit card number used. (optional)
    folioNo := "folioNo_example" // string | Folio Number. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice Number. (optional)
    addresseeName := "addresseeName_example" // string | Addressee Name filter. Works with the Addressee Functionality. (optional)
    fiscalFolioNo := "fiscalFolioNo_example" // string | Fiscal Folio Number filter. Works with the Fiscal Folio Number Functionality. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    partnerFiscalFolioStatusCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioHistory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).AR(aR).CheckOut(checkOut).CreditBill(creditBill).IncludeAssociatedFolios(includeAssociatedFolios).NoShow(noShow).OfflineFolio(offlineFolio).PasserBy(passerBy).PostIt(postIt).VideoCheckOut(videoCheckOut).FolioDate(folioDate).ReservationIdId(reservationIdId).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).Room(room).Name(name).FirstName(firstName).CreditCardNo(creditCardNo).FolioNo(folioNo).InvoiceNo(invoiceNo).AddresseeName(addresseeName).FiscalFolioNo(fiscalFolioNo).Code(code).PartnerFiscalFolioStatusCode(partnerFiscalFolioStatusCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioHistory`: FolioHistoryResponse
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **aR** | **bool** | Indicates if search includes AR Folios. | 
 **checkOut** | **bool** | Indicates if search includes Check Out Folios. | 
 **creditBill** | **bool** | Indicates if search includes Credit Bill Folios. | 
 **includeAssociatedFolios** | **bool** | Indicates if search result includes Associated Bills and is only applied when Folio History for a particular reservation (i.e. ReservationID has a value) is requested. | 
 **noShow** | **bool** | Indicates if search includes No Show Folios. | 
 **offlineFolio** | **bool** | Indicates if search includes Offline Folios. | 
 **passerBy** | **bool** | Indicates if search includes Passer By Folios. | 
 **postIt** | **bool** | Indicates if search includes Post-It Folios. | 
 **videoCheckOut** | **bool** | Indicates if search includes Video Check Out Folios. | 
 **folioDate** | **string** | Folio History Date. | 
 **reservationIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **room** | **string** | Room Number to which this record applies. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **firstName** | **string** | Given name, first name or names. | 
 **creditCardNo** | **string** | Credit card number used. | 
 **folioNo** | **string** | Folio Number. | 
 **invoiceNo** | **float32** | Invoice Number. | 
 **addresseeName** | **string** | Addressee Name filter. Works with the Addressee Functionality. | 
 **fiscalFolioNo** | **string** | Fiscal Folio Number filter. Works with the Fiscal Folio Number Functionality. | 
 **code** | **[]string** |  | 
 **partnerFiscalFolioStatusCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioHistoryResponse**](FolioHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioPrinters

> FolioPrinters GetFolioPrinters(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllFolioWindow(allFolioWindow).Correction(correction).DebitFolio(debitFolio).FolioWindowNo(folioWindowNo).ManualFolioNo(manualFolioNo).CashierId(cashierId).FiscalTerminalId(fiscalTerminalId).EventType(eventType).Id(id).ProfileIdId(profileIdId).CurrencyCode(currencyCode).ExchangeRate(exchangeRate).AssociatedBillNumber(associatedBillNumber).AssociatedBillFolioType(associatedBillFolioType).AssociatedBillQueueName(associatedBillQueueName).AssociatedBillFiscalBillNumber(associatedBillFiscalBillNumber).AssociatedBillGenerationDate(associatedBillGenerationDate).FolioType(folioType).GenerateFiscalFolio(generateFiscalFolio).QueueName(queueName).FolioSeqId(folioSeqId).FiscalFolioInstruction(fiscalFolioInstruction).TransactionServiceType(transactionServiceType).Amount(amount).BalanceCurrencyCode(balanceCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get folio printers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    allFolioWindow := true // bool | Flag to decide if folios is to be generated for all windows in addition to the one requested with applicable postings and zero balance. If any of the windows have non-zero balance then folios are not generated for other windows. (optional)
    correction := true // bool | Correction flag (optional)
    debitFolio := true // bool | Indicates the type of folio to be generated (optional)
    folioWindowNo := int32(56) // int32 |  (optional)
    manualFolioNo := int32(56) // int32 | Manual Folio Number used for settlement during checkout (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    fiscalTerminalId := "fiscalTerminalId_example" // string | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. (optional)
    eventType := "eventType_example" // string | Event being generated by a Supplemental Folio. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdId := "profileIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    currencyCode := "currencyCode_example" // string | Description of currency Code. (optional)
    exchangeRate := float32(8.14) // float32 | Description of exchange rate. (optional)
    associatedBillNumber := float32(8.14) // float32 | The bill number of the original bill for which the Credit Bill is being generated. (optional)
    associatedBillFolioType := "associatedBillFolioType_example" // string | The folio type of the original bill for which the Credit Bill is being generated. (optional)
    associatedBillQueueName := "associatedBillQueueName_example" // string | The folio number queue(used in certain countries) of the original bill for which the Credit Bill is being generated. (optional)
    associatedBillFiscalBillNumber := "associatedBillFiscalBillNumber_example" // string | The Fiscal Folio Bill Number(from a Fiscal System) of the original bill for which the Credit Bill is being generated. (optional)
    associatedBillGenerationDate := time.Now() // string | The bill generation date of the original bill for which the Credit Bill is being generated. (optional)
    folioType := "folioType_example" // string | Folio Type to be assigned to generated folio. This is a country requirement. (optional)
    generateFiscalFolio := true // bool | Fiscal folio flag to call fiscal folio web service after folio generation. (optional)
    queueName := "queueName_example" // string | Folio Queue name. (optional)
    folioSeqId := int32(56) // int32 | Fiscal Folio sequence ID stored in queue table. (optional)
    fiscalFolioInstruction := "fiscalFolioInstruction_example" // string | Action to generate Offline folio when no reponse is received from fiscal service. (optional)
    transactionServiceType := "transactionServiceType_example" // string | Contains transaction service type. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioPrinters(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AllFolioWindow(allFolioWindow).Correction(correction).DebitFolio(debitFolio).FolioWindowNo(folioWindowNo).ManualFolioNo(manualFolioNo).CashierId(cashierId).FiscalTerminalId(fiscalTerminalId).EventType(eventType).Id(id).ProfileIdId(profileIdId).CurrencyCode(currencyCode).ExchangeRate(exchangeRate).AssociatedBillNumber(associatedBillNumber).AssociatedBillFolioType(associatedBillFolioType).AssociatedBillQueueName(associatedBillQueueName).AssociatedBillFiscalBillNumber(associatedBillFiscalBillNumber).AssociatedBillGenerationDate(associatedBillGenerationDate).FolioType(folioType).GenerateFiscalFolio(generateFiscalFolio).QueueName(queueName).FolioSeqId(folioSeqId).FiscalFolioInstruction(fiscalFolioInstruction).TransactionServiceType(transactionServiceType).Amount(amount).BalanceCurrencyCode(balanceCurrencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioPrinters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioPrinters`: FolioPrinters
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioPrinters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioPrintersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **allFolioWindow** | **bool** | Flag to decide if folios is to be generated for all windows in addition to the one requested with applicable postings and zero balance. If any of the windows have non-zero balance then folios are not generated for other windows. | 
 **correction** | **bool** | Correction flag | 
 **debitFolio** | **bool** | Indicates the type of folio to be generated | 
 **folioWindowNo** | **int32** |  | 
 **manualFolioNo** | **int32** | Manual Folio Number used for settlement during checkout | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **fiscalTerminalId** | **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | 
 **eventType** | **string** | Event being generated by a Supplemental Folio. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **currencyCode** | **string** | Description of currency Code. | 
 **exchangeRate** | **float32** | Description of exchange rate. | 
 **associatedBillNumber** | **float32** | The bill number of the original bill for which the Credit Bill is being generated. | 
 **associatedBillFolioType** | **string** | The folio type of the original bill for which the Credit Bill is being generated. | 
 **associatedBillQueueName** | **string** | The folio number queue(used in certain countries) of the original bill for which the Credit Bill is being generated. | 
 **associatedBillFiscalBillNumber** | **string** | The Fiscal Folio Bill Number(from a Fiscal System) of the original bill for which the Credit Bill is being generated. | 
 **associatedBillGenerationDate** | **string** | The bill generation date of the original bill for which the Credit Bill is being generated. | 
 **folioType** | **string** | Folio Type to be assigned to generated folio. This is a country requirement. | 
 **generateFiscalFolio** | **bool** | Fiscal folio flag to call fiscal folio web service after folio generation. | 
 **queueName** | **string** | Folio Queue name. | 
 **folioSeqId** | **int32** | Fiscal Folio sequence ID stored in queue table. | 
 **fiscalFolioInstruction** | **string** | Action to generate Offline folio when no reponse is received from fiscal service. | 
 **transactionServiceType** | **string** | Contains transaction service type. | 
 **amount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioPrinters**](FolioPrinters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTaxPaymentsInfo

> FolioTaxPaymentsInfo GetFolioTaxPaymentsInfo(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioWindowNo(folioWindowNo).CashierId(cashierId).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).PostingAmountAmount(postingAmountAmount).PostingAmountCurrencyCode(postingAmountCurrencyCode).PostingReference(postingReference).PostingRemark(postingRemark).Comments(comments).ApplyCCSurcharge(applyCCSurcharge).ManualPaymentTaxInfoFolioWindowNo(manualPaymentTaxInfoFolioWindowNo).TransactionCode(transactionCode).TransactionDate(transactionDate).TransactionDescription(transactionDescription).TransactionNo(transactionNo).TaxInvoiceNo(taxInvoiceNo).PaymentType(paymentType).ManualPaymentTaxAmount(manualPaymentTaxAmount).ManualPaymentTaxCurrencyCode(manualPaymentTaxCurrencyCode).TaxableAmountAmount(taxableAmountAmount).TaxableAmountCurrencyCode(taxableAmountCurrencyCode).NonTaxableAmountAmount(nonTaxableAmountAmount).NonTaxableAmountCurrencyCode(nonTaxableAmountCurrencyCode).AvailableCreditAmount(availableCreditAmount).AvailableCreditCurrencyCode(availableCreditCurrencyCode).PaymentDate(paymentDate).TaxFolioWindowNo(taxFolioWindowNo).TaxTransactionCode(taxTransactionCode).TaxTransactionDate(taxTransactionDate).TaxTransactionDescription(taxTransactionDescription).TaxTransactionNo(taxTransactionNo).TaxTaxInvoiceNo(taxTaxInvoiceNo).TaxPaymentType(taxPaymentType).CreditablePaymentTaxesAmount(creditablePaymentTaxesAmount).CreditablePaymentTaxesCurrencyCode(creditablePaymentTaxesCurrencyCode).CreditablePaymentTaxableAmount(creditablePaymentTaxableAmount).CreditablePaymentTaxableCurrencyCode(creditablePaymentTaxableCurrencyCode).CreditablePaymentNonTaxableAmount(creditablePaymentNonTaxableAmount).CreditablePaymentNonTaxableCurrencyCode(creditablePaymentNonTaxableCurrencyCode).AvailableTaxCreditAmount(availableTaxCreditAmount).AvailableTaxCreditCurrencyCode(availableTaxCreditCurrencyCode).TaxPaymentDate(taxPaymentDate).TerminalId(terminalId).OverrideInsufficientCC(overrideInsufficientCC).ChangeDueAmount(changeDueAmount).ChangeDueAmountCurrencyCode(changeDueAmountCurrencyCode).OverrideARCreditLimit(overrideARCreditLimit).ApplyCurrencyTaxes(applyCurrencyTaxes).VATOffset(vATOffset).Action(action).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).ProfileIdId(profileIdId).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get folio tax payments information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioWindowNo := int32(56) // int32 |  (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    description := "description_example" // string |  (optional)
    folioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    track2Data := "track2Data_example" // string | Track2 data for the card which would be sent to the CC vendor as part of the authorization. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    code := int32(56) // int32 | The authorization rule code. (optional)
    amountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    amountCurrencyCode := "amountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    percent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    uniqueIdId := "uniqueIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdIdContext := "uniqueIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := "uniqueIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    createDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailFormat := "emailFormat_example" // string | Supported Email format. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    orderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    typeDescription := "typeDescription_example" // string | Describes the Type code (optional)
    approvalCode := "approvalCode_example" // string | The approval code authenticates the authorization. (optional)
    originalAuthSequence := int32(56) // int32 | Unique Authorization Sequence for the authorization and settlement. (optional)
    vendorTranId := "vendorTranId_example" // string | Vendor transaction id for the authorization. (optional)
    approvalAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    postingAmountCurrencyCode := "postingAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingReference := "postingReference_example" // string | User-defined posting reference. (optional)
    postingRemark := "postingRemark_example" // string | User-defined posting remark. (optional)
    comments := "comments_example" // string | User Defined Comments. Used for Deposit Payment postings. (optional)
    applyCCSurcharge := true // bool | Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. (optional)
    manualPaymentTaxInfoFolioWindowNo := int32(56) // int32 |  (optional)
    transactionCode := "transactionCode_example" // string | Billing Transaction Code of the Payment. (optional)
    transactionDate := time.Now() // string | Transaction Date of the Payment. (optional)
    transactionDescription := "transactionDescription_example" // string | Billing Transaction Description. (optional)
    transactionNo := float32(8.14) // float32 | Unique Transaction Identifier. (optional)
    taxInvoiceNo := "taxInvoiceNo_example" // string | The Tax Invoice for this payment. (optional)
    paymentType := "paymentType_example" // string | The types of Payment Tax transactions. (optional)
    manualPaymentTaxAmount := float32(8.14) // float32 | A monetary amount. (optional)
    manualPaymentTaxCurrencyCode := "manualPaymentTaxCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    taxableAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    taxableAmountCurrencyCode := "taxableAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    nonTaxableAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    nonTaxableAmountCurrencyCode := "nonTaxableAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableCreditAmount := float32(8.14) // float32 | A monetary amount. (optional)
    availableCreditCurrencyCode := "availableCreditCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    paymentDate := time.Now() // string | The Payment Invoice date (optional)
    taxFolioWindowNo := []int32{int32(123)} // []int32 |  (optional)
    taxTransactionCode := []string{"Inner_example"} // []string | Billing Transaction Code of the Payment. (optional)
    taxTransactionDate := []string{time.Now()} // []string | Transaction Date of the Payment. (optional)
    taxTransactionDescription := []string{"Inner_example"} // []string | Billing Transaction Description. (optional)
    taxTransactionNo := []float32{float32(123)} // []float32 | Unique Transaction Identifier. (optional)
    taxTaxInvoiceNo := []string{"Inner_example"} // []string | The Tax Invoice for this payment. (optional)
    taxPaymentType := []string{"TaxPaymentType_example"} // []string | The types of Payment Tax transactions. (optional)
    creditablePaymentTaxesAmount := float32(8.14) // float32 | A monetary amount. (optional)
    creditablePaymentTaxesCurrencyCode := "creditablePaymentTaxesCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    creditablePaymentTaxableAmount := float32(8.14) // float32 | A monetary amount. (optional)
    creditablePaymentTaxableCurrencyCode := "creditablePaymentTaxableCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    creditablePaymentNonTaxableAmount := float32(8.14) // float32 | A monetary amount. (optional)
    creditablePaymentNonTaxableCurrencyCode := "creditablePaymentNonTaxableCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableTaxCreditAmount := float32(8.14) // float32 | A monetary amount. (optional)
    availableTaxCreditCurrencyCode := "availableTaxCreditCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    taxPaymentDate := []string{time.Now()} // []string | The Payment Invoice date (optional)
    terminalId := "terminalId_example" // string | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. (optional)
    overrideInsufficientCC := true // bool | Flag to allow a rebate by Credit Card (optional)
    changeDueAmount := float32(8.14) // float32 | A monetary amount. (optional)
    changeDueAmountCurrencyCode := "changeDueAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    overrideARCreditLimit := true // bool | Flag to override account receivable credit limit (optional)
    applyCurrencyTaxes := true // bool | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. (optional)
    vATOffset := true // bool | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. (optional)
    action := "action_example" // string | Payment action to know from where the payment has been made. (optional)
    reservationIdIdContext := "reservationIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    profileIdId := "profileIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdIdContext := "profileIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioTaxPaymentsInfo(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioWindowNo(folioWindowNo).CashierId(cashierId).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).Track2Data(track2Data).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).Id(id).IdContext(idContext).Type_(type_).Amount(amount).CurrencyCode(currencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).ApprovalCode(approvalCode).OriginalAuthSequence(originalAuthSequence).VendorTranId(vendorTranId).ApprovalAmountAmount(approvalAmountAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).PostingAmountAmount(postingAmountAmount).PostingAmountCurrencyCode(postingAmountCurrencyCode).PostingReference(postingReference).PostingRemark(postingRemark).Comments(comments).ApplyCCSurcharge(applyCCSurcharge).ManualPaymentTaxInfoFolioWindowNo(manualPaymentTaxInfoFolioWindowNo).TransactionCode(transactionCode).TransactionDate(transactionDate).TransactionDescription(transactionDescription).TransactionNo(transactionNo).TaxInvoiceNo(taxInvoiceNo).PaymentType(paymentType).ManualPaymentTaxAmount(manualPaymentTaxAmount).ManualPaymentTaxCurrencyCode(manualPaymentTaxCurrencyCode).TaxableAmountAmount(taxableAmountAmount).TaxableAmountCurrencyCode(taxableAmountCurrencyCode).NonTaxableAmountAmount(nonTaxableAmountAmount).NonTaxableAmountCurrencyCode(nonTaxableAmountCurrencyCode).AvailableCreditAmount(availableCreditAmount).AvailableCreditCurrencyCode(availableCreditCurrencyCode).PaymentDate(paymentDate).TaxFolioWindowNo(taxFolioWindowNo).TaxTransactionCode(taxTransactionCode).TaxTransactionDate(taxTransactionDate).TaxTransactionDescription(taxTransactionDescription).TaxTransactionNo(taxTransactionNo).TaxTaxInvoiceNo(taxTaxInvoiceNo).TaxPaymentType(taxPaymentType).CreditablePaymentTaxesAmount(creditablePaymentTaxesAmount).CreditablePaymentTaxesCurrencyCode(creditablePaymentTaxesCurrencyCode).CreditablePaymentTaxableAmount(creditablePaymentTaxableAmount).CreditablePaymentTaxableCurrencyCode(creditablePaymentTaxableCurrencyCode).CreditablePaymentNonTaxableAmount(creditablePaymentNonTaxableAmount).CreditablePaymentNonTaxableCurrencyCode(creditablePaymentNonTaxableCurrencyCode).AvailableTaxCreditAmount(availableTaxCreditAmount).AvailableTaxCreditCurrencyCode(availableTaxCreditCurrencyCode).TaxPaymentDate(taxPaymentDate).TerminalId(terminalId).OverrideInsufficientCC(overrideInsufficientCC).ChangeDueAmount(changeDueAmount).ChangeDueAmountCurrencyCode(changeDueAmountCurrencyCode).OverrideARCreditLimit(overrideARCreditLimit).ApplyCurrencyTaxes(applyCurrencyTaxes).VATOffset(vATOffset).Action(action).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).ProfileIdId(profileIdId).ProfileIdIdContext(profileIdIdContext).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioTaxPaymentsInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTaxPaymentsInfo`: FolioTaxPaymentsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioTaxPaymentsInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTaxPaymentsInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioWindowNo** | **int32** |  | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **description** | **string** |  | 
 **folioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **track2Data** | **string** | Track2 data for the card which would be sent to the CC vendor as part of the authorization. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **code** | **int32** | The authorization rule code. | 
 **amountAmount** | **float32** | A monetary amount. | 
 **amountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **percent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **uniqueIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **createDateTime** | **time.Time** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailFormat** | **string** | Supported Email format. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **orderSequence** | **float32** | Display Order sequence. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **typeDescription** | **string** | Describes the Type code | 
 **approvalCode** | **string** | The approval code authenticates the authorization. | 
 **originalAuthSequence** | **int32** | Unique Authorization Sequence for the authorization and settlement. | 
 **vendorTranId** | **string** | Vendor transaction id for the authorization. | 
 **approvalAmountAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingAmountAmount** | **float32** | A monetary amount. | 
 **postingAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingReference** | **string** | User-defined posting reference. | 
 **postingRemark** | **string** | User-defined posting remark. | 
 **comments** | **string** | User Defined Comments. Used for Deposit Payment postings. | 
 **applyCCSurcharge** | **bool** | Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. | 
 **manualPaymentTaxInfoFolioWindowNo** | **int32** |  | 
 **transactionCode** | **string** | Billing Transaction Code of the Payment. | 
 **transactionDate** | **string** | Transaction Date of the Payment. | 
 **transactionDescription** | **string** | Billing Transaction Description. | 
 **transactionNo** | **float32** | Unique Transaction Identifier. | 
 **taxInvoiceNo** | **string** | The Tax Invoice for this payment. | 
 **paymentType** | **string** | The types of Payment Tax transactions. | 
 **manualPaymentTaxAmount** | **float32** | A monetary amount. | 
 **manualPaymentTaxCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **taxableAmountAmount** | **float32** | A monetary amount. | 
 **taxableAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **nonTaxableAmountAmount** | **float32** | A monetary amount. | 
 **nonTaxableAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableCreditAmount** | **float32** | A monetary amount. | 
 **availableCreditCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **paymentDate** | **string** | The Payment Invoice date | 
 **taxFolioWindowNo** | **[]int32** |  | 
 **taxTransactionCode** | **[]string** | Billing Transaction Code of the Payment. | 
 **taxTransactionDate** | **[]string** | Transaction Date of the Payment. | 
 **taxTransactionDescription** | **[]string** | Billing Transaction Description. | 
 **taxTransactionNo** | **[]float32** | Unique Transaction Identifier. | 
 **taxTaxInvoiceNo** | **[]string** | The Tax Invoice for this payment. | 
 **taxPaymentType** | **[]string** | The types of Payment Tax transactions. | 
 **creditablePaymentTaxesAmount** | **float32** | A monetary amount. | 
 **creditablePaymentTaxesCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **creditablePaymentTaxableAmount** | **float32** | A monetary amount. | 
 **creditablePaymentTaxableCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **creditablePaymentNonTaxableAmount** | **float32** | A monetary amount. | 
 **creditablePaymentNonTaxableCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableTaxCreditAmount** | **float32** | A monetary amount. | 
 **availableTaxCreditCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **taxPaymentDate** | **[]string** | The Payment Invoice date | 
 **terminalId** | **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. | 
 **overrideInsufficientCC** | **bool** | Flag to allow a rebate by Credit Card | 
 **changeDueAmount** | **float32** | A monetary amount. | 
 **changeDueAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **overrideARCreditLimit** | **bool** | Flag to override account receivable credit limit | 
 **applyCurrencyTaxes** | **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | 
 **vATOffset** | **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | 
 **action** | **string** | Payment action to know from where the payment has been made. | 
 **reservationIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **profileIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTaxPaymentsInfo**](FolioTaxPaymentsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTransactionDetails

> FolioTransactionDetails GetFolioTransactionDetails(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).TransactionNo(transactionNo).IncludeExchangeInformation(includeExchangeInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Folio Transaction Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeGenerates := true // bool | Flag to indicate if the automatically generated transactions, related to the main transaction number above, are also to be retrieved as part of this request. (optional)
    transactionNo := []float32{float32(123)} // []float32 | Unique Transaction Number of the transaction(posting) for which details are required. (optional)
    includeExchangeInformation := true // bool | Flag to indicate what currency exchange information text needs to be included in response. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioTransactionDetails(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).TransactionNo(transactionNo).IncludeExchangeInformation(includeExchangeInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioTransactionDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTransactionDetails`: FolioTransactionDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioTransactionDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTransactionDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeGenerates** | **bool** | Flag to indicate if the automatically generated transactions, related to the main transaction number above, are also to be retrieved as part of this request. | 
 **transactionNo** | **[]float32** | Unique Transaction Number of the transaction(posting) for which details are required. | 
 **includeExchangeInformation** | **bool** | Flag to indicate what currency exchange information text needs to be included in response. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTransactionDetails**](FolioTransactionDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTypeName

> FolioTypeNameInfo GetFolioTypeName(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InternalFolioWindowId(internalFolioWindowId).LanguageCode(languageCode).FolioTypeName(folioTypeName).FolioReportGroup(folioReportGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Folio Type Name



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    internalFolioWindowId := "internalFolioWindowId_example" // string | The internal folio window Id for the reservation to determine the guest language details. (optional)
    languageCode := "languageCode_example" // string | The Filter language code which will be used to retrieve the report name set for this language. (optional)
    folioTypeName := "folioTypeName_example" // string | The Folio Type for which the details are requested. (optional)
    folioReportGroup := "folioReportGroup_example" // string | The Folio Report Group name. The folio report will be defined under each group and based on where the folio has to be printed, Opera will pick up the correct folio report name to print. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioTypeName(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InternalFolioWindowId(internalFolioWindowId).LanguageCode(languageCode).FolioTypeName(folioTypeName).FolioReportGroup(folioReportGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioTypeName``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTypeName`: FolioTypeNameInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioTypeName`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTypeNameRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **internalFolioWindowId** | **string** | The internal folio window Id for the reservation to determine the guest language details. | 
 **languageCode** | **string** | The Filter language code which will be used to retrieve the report name set for this language. | 
 **folioTypeName** | **string** | The Folio Type for which the details are requested. | 
 **folioReportGroup** | **string** | The Folio Report Group name. The folio report will be defined under each group and based on where the folio has to be printed, Opera will pick up the correct folio report name to print. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypeNameInfo**](FolioTypeNameInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTypes

> FolioTypesInfo GetFolioTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCompress(includeCompress).IncludeCredit(includeCredit).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Folio Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeCompress := true // bool | Folio to be use for compress bills. (optional)
    includeCredit := true // bool | Folio to be use for credit bills. (optional)
    folioType := "folioType_example" // string | Folio Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetFolioTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCompress(includeCompress).IncludeCredit(includeCredit).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetFolioTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTypes`: FolioTypesInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetFolioTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeCompress** | **bool** | Folio to be use for compress bills. | 
 **includeCredit** | **bool** | Folio to be use for credit bills. | 
 **folioType** | **string** | Folio Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypesInfo**](FolioTypesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGamingRequestStatusInfo

> GamingRequestStatusInfo GetGamingRequestStatusInfo(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Gaming Request Status 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetGamingRequestStatusInfo(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetGamingRequestStatusInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGamingRequestStatusInfo`: GamingRequestStatusInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetGamingRequestStatusInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGamingRequestStatusInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GamingRequestStatusInfo**](GamingRequestStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestsTransactions

> GuestsTransactions GetGuestsTransactions(ctx, hotelId).ReservationList(reservationList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).IncludeTransactionsWithARInvoiceNo(includeTransactionsWithARInvoiceNo).IncludeTransactionsWithFolioNo(includeTransactionsWithFolioNo).IncludeTransactionsWithManualPostingOnly(includeTransactionsWithManualPostingOnly).IdContext(idContext).Type_(type_).TransactionNo(transactionNo).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).BillingCode(billingCode).BillingHotelId(billingHotelId).Desc(desc).RoutingInstructionsId(routingInstructionsId).TrxCodeWildCard(trxCodeWildCard).TrxDescriptionWildCard(trxDescriptionWildCard).CheckNumberWildCard(checkNumberWildCard).ReferenceNumberWildCard(referenceNumberWildCard).SupplementWildCard(supplementWildCard).WindowNo(windowNo).CashieringTransactionType(cashieringTransactionType).StartDate(startDate).EndDate(endDate).CashierId(cashierId).Code(code).Commissionable(commissionable).ServiceRecoveryAllowed(serviceRecoveryAllowed).PostedTransactionType(postedTransactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Guests Transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    reservationList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeGenerates := true // bool | Configuring this flag to be TRUE will return transactions that are auto generated like taxes. (optional)
    includeTransactionsWithARInvoiceNo := true // bool | Configuring this flag to be TRUE will return transactions that are included in an Accounts Receivable invoice. (optional)
    includeTransactionsWithFolioNo := true // bool | Configuring this flag to be TRUE will return transactions that already belongs to a folio. (optional)
    includeTransactionsWithManualPostingOnly := true // bool | Configuring this flag to be TRUE will return transactions whose transaction codes have manual posting enabled, or when an adjustment code is attached to the transaction code, the adjustment code's manual posting is enabled. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    transactionNo := []float32{float32(123)} // []float32 | Transaction number of the payment being corrected. (optional)
    transactionGroup := []string{"Inner_example"} // []string | Category of the transaction code to filter the result. (optional)
    transactionSubGroup := []string{"Inner_example"} // []string | Sub category of the transaction code to filter the result. (optional)
    billingCode := []string{"Inner_example"} // []string | Unique identifier for the Billing Instruction. (optional)
    billingHotelId := []string{"Inner_example"} // []string | Hotel context of the Billing Instruction. (optional)
    desc := []string{"Inner_example"} // []string | Billing Instruction code description. (optional)
    routingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    trxCodeWildCard := "trxCodeWildCard_example" // string | Lookup string which will try to match an existing Transaction Code/s. (optional)
    trxDescriptionWildCard := "trxDescriptionWildCard_example" // string | Lookup string which will try to match an existing Transaction Code's Description. (optional)
    checkNumberWildCard := "checkNumberWildCard_example" // string | Lookup string which will try to match an existing Cheque number's code. (optional)
    referenceNumberWildCard := "referenceNumberWildCard_example" // string | Filters the results for reference number. (optional)
    supplementWildCard := "supplementWildCard_example" // string | Filter the results for supplement. (optional)
    windowNo := []int32{int32(123)} // []int32 | Filters the result to only include transactions in this window number. (optional)
    cashieringTransactionType := []string{"CashieringTransactionType_example"} // []string | Wrapper Transaction Type. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    commissionable := true // bool | Filters the result based on its commission property. Do not set this criteria if all transactions should be included whether or not they are commissionable. (optional)
    serviceRecoveryAllowed := true // bool | Filters the result which are allow for service recovery. (optional)
    postedTransactionType := []string{"PostedTransactionType_example"} // []string | Returns only postings without bill number. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetGuestsTransactions(context.Background(), hotelId).ReservationList(reservationList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).IncludeTransactionsWithARInvoiceNo(includeTransactionsWithARInvoiceNo).IncludeTransactionsWithFolioNo(includeTransactionsWithFolioNo).IncludeTransactionsWithManualPostingOnly(includeTransactionsWithManualPostingOnly).IdContext(idContext).Type_(type_).TransactionNo(transactionNo).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).BillingCode(billingCode).BillingHotelId(billingHotelId).Desc(desc).RoutingInstructionsId(routingInstructionsId).TrxCodeWildCard(trxCodeWildCard).TrxDescriptionWildCard(trxDescriptionWildCard).CheckNumberWildCard(checkNumberWildCard).ReferenceNumberWildCard(referenceNumberWildCard).SupplementWildCard(supplementWildCard).WindowNo(windowNo).CashieringTransactionType(cashieringTransactionType).StartDate(startDate).EndDate(endDate).CashierId(cashierId).Code(code).Commissionable(commissionable).ServiceRecoveryAllowed(serviceRecoveryAllowed).PostedTransactionType(postedTransactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetGuestsTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestsTransactions`: GuestsTransactions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetGuestsTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestsTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reservationList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeGenerates** | **bool** | Configuring this flag to be TRUE will return transactions that are auto generated like taxes. | 
 **includeTransactionsWithARInvoiceNo** | **bool** | Configuring this flag to be TRUE will return transactions that are included in an Accounts Receivable invoice. | 
 **includeTransactionsWithFolioNo** | **bool** | Configuring this flag to be TRUE will return transactions that already belongs to a folio. | 
 **includeTransactionsWithManualPostingOnly** | **bool** | Configuring this flag to be TRUE will return transactions whose transaction codes have manual posting enabled, or when an adjustment code is attached to the transaction code, the adjustment code&#39;s manual posting is enabled. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **transactionNo** | **[]float32** | Transaction number of the payment being corrected. | 
 **transactionGroup** | **[]string** | Category of the transaction code to filter the result. | 
 **transactionSubGroup** | **[]string** | Sub category of the transaction code to filter the result. | 
 **billingCode** | **[]string** | Unique identifier for the Billing Instruction. | 
 **billingHotelId** | **[]string** | Hotel context of the Billing Instruction. | 
 **desc** | **[]string** | Billing Instruction code description. | 
 **routingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **trxCodeWildCard** | **string** | Lookup string which will try to match an existing Transaction Code/s. | 
 **trxDescriptionWildCard** | **string** | Lookup string which will try to match an existing Transaction Code&#39;s Description. | 
 **checkNumberWildCard** | **string** | Lookup string which will try to match an existing Cheque number&#39;s code. | 
 **referenceNumberWildCard** | **string** | Filters the results for reference number. | 
 **supplementWildCard** | **string** | Filter the results for supplement. | 
 **windowNo** | **[]int32** | Filters the result to only include transactions in this window number. | 
 **cashieringTransactionType** | **[]string** | Wrapper Transaction Type. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **code** | **[]string** |  | 
 **commissionable** | **bool** | Filters the result based on its commission property. Do not set this criteria if all transactions should be included whether or not they are commissionable. | 
 **serviceRecoveryAllowed** | **bool** | Filters the result which are allow for service recovery. | 
 **postedTransactionType** | **[]string** | Returns only postings without bill number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestsTransactions**](GuestsTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelRevenue

> HotelRevenueDetails GetHotelRevenue(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BusinessDate(businessDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hotel Revenue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    businessDate := time.Now() // string | Business date. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetHotelRevenue(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BusinessDate(businessDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetHotelRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelRevenue`: HotelRevenueDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetHotelRevenue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **businessDate** | **string** | Business date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelRevenueDetails**](HotelRevenueDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMaturedDeposits

> MaturedDepositsDetails GetMaturedDeposits(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get matured deposits



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetMaturedDeposits(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetMaturedDeposits``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMaturedDeposits`: MaturedDepositsDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetMaturedDeposits`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMaturedDepositsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MaturedDepositsDetails**](MaturedDepositsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPostBillingCharges

> BillingChargesStatus GetPostBillingCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).FolioWindowNo(folioWindowNo).ChargeCashierId(chargeCashierId).TransactionCode(transactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).Id(id).IdContext(idContext).Type_(type_).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).Option(option).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Billing Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    folioWindowNo := []int32{int32(123)} // []int32 |  (optional)
    chargeCashierId := []float32{float32(123)} // []float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction Code to post. (optional)
    articleCode := []string{"Inner_example"} // []string | Article ID. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingQuantity := []int32{int32(123)} // []int32 | Quantity to post to the folio. (optional)
    postingReference := []string{"Inner_example"} // []string | User-defined posting reference. (optional)
    postingRemark := []string{"Inner_example"} // []string | User-defined posting remark. (optional)
    checkNumber := []string{"Inner_example"} // []string | Indicates the Cheque number. (optional)
    arrangementCode := []string{"Inner_example"} // []string | Corrected arrangement code from the package associated to this transaction. (optional)
    applyRoutingInstructions := []bool{false} // []bool | Apply room routing when making this posting. (optional)
    usePackageAllowance := []bool{false} // []bool | Use the applicable package allowance when making this posting. (optional)
    autoPosting := []bool{false} // []bool | True indicates the Transaction Code is allowed to be posted automatically. (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    reservationIdIdContext := "reservationIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    option := []string{"Option_example"} // []string | This is the Default option. Operation checks if charges can be posted to the reservation based on the status of the reservation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetPostBillingCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierId(cashierId).FolioWindowNo(folioWindowNo).ChargeCashierId(chargeCashierId).TransactionCode(transactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).Id(id).IdContext(idContext).Type_(type_).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).Option(option).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetPostBillingCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPostBillingCharges`: BillingChargesStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetPostBillingCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPostBillingChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **folioWindowNo** | **[]int32** |  | 
 **chargeCashierId** | **[]float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **transactionCode** | **[]string** | Transaction Code to post. | 
 **articleCode** | **[]string** | Article ID. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingQuantity** | **[]int32** | Quantity to post to the folio. | 
 **postingReference** | **[]string** | User-defined posting reference. | 
 **postingRemark** | **[]string** | User-defined posting remark. | 
 **checkNumber** | **[]string** | Indicates the Cheque number. | 
 **arrangementCode** | **[]string** | Corrected arrangement code from the package associated to this transaction. | 
 **applyRoutingInstructions** | **[]bool** | Apply room routing when making this posting. | 
 **usePackageAllowance** | **[]bool** | Use the applicable package allowance when making this posting. | 
 **autoPosting** | **[]bool** | True indicates the Transaction Code is allowed to be posted automatically. | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **reservationIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **option** | **[]string** | This is the Default option. Operation checks if charges can be posted to the reservation based on the status of the reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BillingChargesStatus**](BillingChargesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPostingActivityDetail

> PostingActivityDetail GetPostingActivityDetail(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).Module(module).LogDate(logDate).RefActionId(refActionId).LogUserId(logUserId).LogUserName(logUserName).MachineStation(machineStation).CroCode(croCode).ActionType(actionType).ActionDescription(actionDescription).IPAddress(iPAddress).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get posting activity details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    module := "module_example" // string |  (optional)
    logDate := time.Now() // time.Time |  (optional)
    refActionId := float32(8.14) // float32 |  (optional)
    logUserId := int32(56) // int32 |  (optional)
    logUserName := "logUserName_example" // string |  (optional)
    machineStation := "machineStation_example" // string |  (optional)
    croCode := "croCode_example" // string |  (optional)
    actionType := "actionType_example" // string |  (optional)
    actionDescription := "actionDescription_example" // string |  (optional)
    iPAddress := "iPAddress_example" // string | The IP Address of the machine that performed the activity (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetPostingActivityDetail(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).Module(module).LogDate(logDate).RefActionId(refActionId).LogUserId(logUserId).LogUserName(logUserName).MachineStation(machineStation).CroCode(croCode).ActionType(actionType).ActionDescription(actionDescription).IPAddress(iPAddress).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetPostingActivityDetail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPostingActivityDetail`: PostingActivityDetail
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetPostingActivityDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPostingActivityDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **module** | **string** |  | 
 **logDate** | **time.Time** |  | 
 **refActionId** | **float32** |  | 
 **logUserId** | **int32** |  | 
 **logUserName** | **string** |  | 
 **machineStation** | **string** |  | 
 **croCode** | **string** |  | 
 **actionType** | **string** |  | 
 **actionDescription** | **string** |  | 
 **iPAddress** | **string** | The IP Address of the machine that performed the activity | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostingActivityDetail**](PostingActivityDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPostingSummary

> PostingSummaryList GetPostingSummary(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).PostingDate(postingDate).CheckPostings(checkPostings).PostingsByExternalSystem(postingsByExternalSystem).CashierId(cashierId).Currency(currency).PostingSummaryType(postingSummaryType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Posting Summary



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeGenerates := true // bool | Configuring this flag to be TRUE will return transactions that are auto generated like taxes. (optional)
    postingDate := time.Now() // string | The date on which the charge is posted. (optional)
    checkPostings := true // bool | When set to true,the summary of only the postings using checks will be fetched. (optional)
    postingsByExternalSystem := true // bool | When set to true,the summary of only the postings done by external systems will be fetched. (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    currency := "currency_example" // string | Currency in which the postings are done. If null,amounts posted in local currency will be fetched. (optional)
    postingSummaryType := "postingSummaryType_example" // string | Enumeration Type of Posting Summary Information. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetPostingSummary(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeGenerates(includeGenerates).PostingDate(postingDate).CheckPostings(checkPostings).PostingsByExternalSystem(postingsByExternalSystem).CashierId(cashierId).Currency(currency).PostingSummaryType(postingSummaryType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetPostingSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPostingSummary`: PostingSummaryList
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetPostingSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPostingSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeGenerates** | **bool** | Configuring this flag to be TRUE will return transactions that are auto generated like taxes. | 
 **postingDate** | **string** | The date on which the charge is posted. | 
 **checkPostings** | **bool** | When set to true,the summary of only the postings using checks will be fetched. | 
 **postingsByExternalSystem** | **bool** | When set to true,the summary of only the postings done by external systems will be fetched. | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **currency** | **string** | Currency in which the postings are done. If null,amounts posted in local currency will be fetched. | 
 **postingSummaryType** | **string** | Enumeration Type of Posting Summary Information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostingSummaryList**](PostingSummaryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPostingsForRefresh

> PostingsForRefresh GetPostingsForRefresh(ctx, targetReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).TargetResvNameIdContext(targetResvNameIdContext).TargetResvNameIdType(targetResvNameIdType).Daily(daily).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).StartDate(startDate).EndDate(endDate).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).TransactionCode(transactionCode).Description(description).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).ArticleTransactionCode(articleTransactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).BillingCode(billingCode).BillingHotelId(billingHotelId).Desc(desc).BillingInstructionRoutingInstructionsId(billingInstructionRoutingInstructionsId).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).LimitUsed(limitUsed).Id(id).RoutingLinkIdIdContext(routingLinkIdIdContext).RoutingLinkIdType(routingLinkIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Postings For Refresh



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    targetReservationId := "targetReservationId_example" // string | Unique ID of the target reservation
    sourceReservationId := "sourceReservationId_example" // string | Unique ID of the source reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    targetResvNameIdContext := "targetResvNameIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    targetResvNameIdType := "targetResvNameIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    daily := true // bool | Flag to indicate if the routing instruction is a daily instruction. (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    transactionHotelId := []string{"Inner_example"} // []string | Hotel context of the Transaction code. (optional)
    printTrxReceipt := []bool{false} // []bool | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. (optional)
    transactionCode := []string{"Inner_example"} // []string | Unique identifier for the Transaction code. (optional)
    description := []string{"Inner_example"} // []string | Transaction codes info. (optional)
    transactionGroup := []string{"Inner_example"} // []string | Category of the transaction code. (optional)
    transactionSubGroup := []string{"Inner_example"} // []string | Sub category of the transaction code. (optional)
    universalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the transaction code. (optional)
    routingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    articleCode := []string{"Inner_example"} // []string | Unique code of the article. (optional)
    articleHotelId := []string{"Inner_example"} // []string | Hotel code to which the article belongs. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    articleDescription := []string{"Inner_example"} // []string | Description of the article. (optional)
    articleTransactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    articleUniversalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    billingCode := []string{"Inner_example"} // []string | Unique identifier for the Billing Instruction. (optional)
    billingHotelId := []string{"Inner_example"} // []string | Hotel context of the Billing Instruction. (optional)
    desc := []string{"Inner_example"} // []string | Billing Instruction code description. (optional)
    billingInstructionRoutingInstructionsId := []float32{float32(123)} // []float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    creditLimit := float32(8.14) // float32 | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. (optional)
    percentageLimit := float32(8.14) // float32 | The routing limit percentage allowed for this routing instruction. (optional)
    covers := float32(8.14) // float32 | Number of covers for this routing instruction. (optional)
    limitUsed := float32(8.14) // float32 | Amount of Credit used for this routing instruction. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    routingLinkIdIdContext := "routingLinkIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    routingLinkIdType := "routingLinkIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetPostingsForRefresh(context.Background(), targetReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).TargetResvNameIdContext(targetResvNameIdContext).TargetResvNameIdType(targetResvNameIdType).Daily(daily).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).StartDate(startDate).EndDate(endDate).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).TransactionCode(transactionCode).Description(description).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).ArticleTransactionCode(articleTransactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).BillingCode(billingCode).BillingHotelId(billingHotelId).Desc(desc).BillingInstructionRoutingInstructionsId(billingInstructionRoutingInstructionsId).CreditLimit(creditLimit).PercentageLimit(percentageLimit).Covers(covers).LimitUsed(limitUsed).Id(id).RoutingLinkIdIdContext(routingLinkIdIdContext).RoutingLinkIdType(routingLinkIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetPostingsForRefresh``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPostingsForRefresh`: PostingsForRefresh
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetPostingsForRefresh`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**targetReservationId** | **string** | Unique ID of the target reservation | 
**sourceReservationId** | **string** | Unique ID of the source reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPostingsForRefreshRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **targetResvNameIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **targetResvNameIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **daily** | **bool** | Flag to indicate if the routing instruction is a daily instruction. | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **transactionHotelId** | **[]string** | Hotel context of the Transaction code. | 
 **printTrxReceipt** | **[]bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | 
 **transactionCode** | **[]string** | Unique identifier for the Transaction code. | 
 **description** | **[]string** | Transaction codes info. | 
 **transactionGroup** | **[]string** | Category of the transaction code. | 
 **transactionSubGroup** | **[]string** | Sub category of the transaction code. | 
 **universalProductCode** | **[]string** | Unique Universal product code of the transaction code. | 
 **routingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **articleCode** | **[]string** | Unique code of the article. | 
 **articleHotelId** | **[]string** | Hotel code to which the article belongs. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **articleDescription** | **[]string** | Description of the article. | 
 **articleTransactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **articleUniversalProductCode** | **[]string** | Unique Universal product code of the article. | 
 **billingCode** | **[]string** | Unique identifier for the Billing Instruction. | 
 **billingHotelId** | **[]string** | Hotel context of the Billing Instruction. | 
 **desc** | **[]string** | Billing Instruction code description. | 
 **billingInstructionRoutingInstructionsId** | **[]float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **creditLimit** | **float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | 
 **percentageLimit** | **float32** | The routing limit percentage allowed for this routing instruction. | 
 **covers** | **float32** | Number of covers for this routing instruction. | 
 **limitUsed** | **float32** | Amount of Credit used for this routing instruction. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **routingLinkIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **routingLinkIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostingsForRefresh**](PostingsForRefresh.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReceiptHistory

> ReceiptHistoryResponse GetReceiptHistory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromDate(fromDate).ToDate(toDate).Name(name).FirstName(firstName).ReceiptTypeName(receiptTypeName).TaxInvoice(taxInvoice).ReceiptNo(receiptNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Receipt History



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fromDate := time.Now() // string | Receipt History Date Range(from). (optional)
    toDate := time.Now() // string | Receipt History Date Range(to). (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    firstName := "firstName_example" // string | Given name, first name or names. (optional)
    receiptTypeName := "receiptTypeName_example" // string | Receipt Type. (optional)
    taxInvoice := "taxInvoice_example" // string | Tax Invoice Number. (optional)
    receiptNo := float32(8.14) // float32 | Receipt Number. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetReceiptHistory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromDate(fromDate).ToDate(toDate).Name(name).FirstName(firstName).ReceiptTypeName(receiptTypeName).TaxInvoice(taxInvoice).ReceiptNo(receiptNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetReceiptHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReceiptHistory`: ReceiptHistoryResponse
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetReceiptHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReceiptHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fromDate** | **string** | Receipt History Date Range(from). | 
 **toDate** | **string** | Receipt History Date Range(to). | 
 **name** | **string** | Family name, last name or Company Name. | 
 **firstName** | **string** | Given name, first name or names. | 
 **receiptTypeName** | **string** | Receipt Type. | 
 **taxInvoice** | **string** | Tax Invoice Number. | 
 **receiptNo** | **float32** | Receipt Number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReceiptHistoryResponse**](ReceiptHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationPackageOptions

> ReservationPackageOptions GetReservationPackageOptions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Package Options



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetReservationPackageOptions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetReservationPackageOptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationPackageOptions`: ReservationPackageOptions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetReservationPackageOptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationPackageOptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPackageOptions**](ReservationPackageOptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationRevenueBucketTotals

> RevenueBucketTotals GetReservationRevenueBucketTotals(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).RevenueBucketType(revenueBucketType).CompRevenue(compRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations Revenue Bucket Totals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    revenueBucketType := "revenueBucketType_example" // string | Type if the revenue bucket. (optional)
    compRevenue := true // bool | This flag will notify the service if the revenue is of complimentary type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetReservationRevenueBucketTotals(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).RevenueBucketType(revenueBucketType).CompRevenue(compRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetReservationRevenueBucketTotals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationRevenueBucketTotals`: RevenueBucketTotals
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetReservationRevenueBucketTotals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRevenueBucketTotalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **revenueBucketType** | **string** | Type if the revenue bucket. | 
 **compRevenue** | **bool** | This flag will notify the service if the revenue is of complimentary type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueBucketTotals**](RevenueBucketTotals.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoundingDifference

> RoundingDifferenceAmount GetRoundingDifference(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).FolioWindowNo(folioWindowNo).InternalFolioWindowID(internalFolioWindowID).CashierId(cashierId).HotelId(hotelId).Id(id).Amount(amount).CurrencyCode(currencyCode).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Rounding Difference



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    event := "event_example" // string | Event being generated by a Supplemental Folio. (optional)
    folioWindowNo := int32(56) // int32 |  (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    hotelId := "hotelId_example" // string | Hotel context of the reservation. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    description := "description_example" // string |  (optional)
    folioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardIdId := "cardIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    currentAuthorizedAmountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeededAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    code := int32(56) // int32 | The authorization rule code. (optional)
    amountAmount := float32(8.14) // float32 | A monetary amount. (optional)
    amountCurrencyCode := "amountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    percent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    uniqueIdId := "uniqueIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    createDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailFormat := "emailFormat_example" // string | Supported Email format. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    orderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    typeDescription := "typeDescription_example" // string | Describes the Type code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetRoundingDifference(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).FolioWindowNo(folioWindowNo).InternalFolioWindowID(internalFolioWindowID).CashierId(cashierId).HotelId(hotelId).Id(id).Amount(amount).CurrencyCode(currencyCode).Description(description).FolioView(folioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardIdId(cardIdId).CurrentAuthorizedAmountAmount(currentAuthorizedAmountAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeededAmount(approvalAmountNeededAmount).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Code(code).AmountAmount(amountAmount).AmountCurrencyCode(amountCurrencyCode).Percent(percent).EmailFolio(emailFolio).UniqueIdId(uniqueIdId).CreateDateTime(createDateTime).CreatorId(creatorId).EmailAddress(emailAddress).EmailFormat(emailFormat).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).OrderSequence(orderSequence).PrimaryInd(primaryInd).PurgeDate(purgeDate).EmailType(emailType).TypeDescription(typeDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetRoundingDifference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoundingDifference`: RoundingDifferenceAmount
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetRoundingDifference`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoundingDifferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **event** | **string** | Event being generated by a Supplemental Folio. | 
 **folioWindowNo** | **int32** |  | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **hotelId** | **string** | Hotel context of the reservation. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **description** | **string** |  | 
 **folioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **currentAuthorizedAmountAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeededAmount** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **code** | **int32** | The authorization rule code. | 
 **amountAmount** | **float32** | A monetary amount. | 
 **amountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **percent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **uniqueIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **createDateTime** | **time.Time** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailFormat** | **string** | Supported Email format. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **orderSequence** | **float32** | Display Order sequence. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **typeDescription** | **string** | Describes the Type code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoundingDifferenceAmount**](RoundingDifferenceAmount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoutingInstructions

> RoutingInstructionsDetails GetRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IncludeWindowRouting(includeWindowRouting).IncludeRoomRouting(includeRoomRouting).IncludeCompRouting(includeCompRouting).IncludeCompRoutingRequests(includeCompRoutingRequests).EffectiveOn(effectiveOn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    includeWindowRouting := true // bool | Include the window routing instructions to the response. (optional)
    includeRoomRouting := true // bool | Include the room routing instructions in the response. (optional)
    includeCompRouting := true // bool | Include the comp routing instructions in the response. (optional)
    includeCompRoutingRequests := true // bool | Include the comp routing requests in the response. (optional)
    effectiveOn := time.Now() // string | If date is included then the search result should only be valid for dates which includes this date. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IncludeWindowRouting(includeWindowRouting).IncludeRoomRouting(includeRoomRouting).IncludeCompRouting(includeCompRouting).IncludeCompRoutingRequests(includeCompRoutingRequests).EffectiveOn(effectiveOn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoutingInstructions`: RoutingInstructionsDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **includeWindowRouting** | **bool** | Include the window routing instructions to the response. | 
 **includeRoomRouting** | **bool** | Include the room routing instructions in the response. | 
 **includeCompRouting** | **bool** | Include the comp routing instructions in the response. | 
 **includeCompRoutingRequests** | **bool** | Include the comp routing requests in the response. | 
 **effectiveOn** | **string** | If date is included then the search result should only be valid for dates which includes this date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoutingInstructionsDetails**](RoutingInstructionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStoredFolioDetails

> StoredFolioDetailsInfo GetStoredFolioDetails(ctx, folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Stored Folio Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalBillNo := "fiscalBillNo_example" // string | The Fiscal Bill number of this posting (optional)
    folioDate := time.Now() // string | Date of Folio Generation. (optional)
    folioStatus := "folioStatus_example" // string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := "folioTypeName_example" // string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetStoredFolioDetails(context.Background(), folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetStoredFolioDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStoredFolioDetails`: StoredFolioDetailsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetStoredFolioDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStoredFolioDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalBillNo** | **string** | The Fiscal Bill number of this posting | 
 **folioDate** | **string** | Date of Folio Generation. | 
 **folioStatus** | **string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StoredFolioDetailsInfo**](StoredFolioDetailsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCodes

> TransactionCodes GetTransactionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).IncludeArticles(includeArticles).UserRoleTransactions(userRoleTransactions).ManualPostAllowed(manualPostAllowed).Code(code).Description(description).WildCard(wildCard).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).TrxServiceType(trxServiceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Transaction Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    event := "event_example" // string | Event being generated by a Supplemental Folio. (optional)
    includeArticles := true // bool | Flag to indicate if Article Codes are required, along with the parent Transaction Codes. (optional)
    userRoleTransactions := true // bool | Flag to indicate if it is allowed to manually post transaction codes. (optional)
    manualPostAllowed := true // bool | Flag to include the search for Manual Post Allowed. (optional)
    code := "code_example" // string | Lookup string which will try to match an existing Transaction Codes. (optional)
    description := "description_example" // string | Lookup string which will try to match an existing Transaction Code Description. (optional)
    wildCard := "wildCard_example" // string |  (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | The Fiscal Bill number of this posting (optional)
    folioDate := time.Now() // string | Date of Folio Generation. (optional)
    folioNo := float32(8.14) // float32 | Folio Number. (optional)
    folioStatus := "folioStatus_example" // string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := "folioTypeName_example" // string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    trxServiceType := "trxServiceType_example" // string | Goods Type Transactions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetTransactionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).IncludeArticles(includeArticles).UserRoleTransactions(userRoleTransactions).ManualPostAllowed(manualPostAllowed).Code(code).Description(description).WildCard(wildCard).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).TrxServiceType(trxServiceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCodes`: TransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetTransactionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **event** | **string** | Event being generated by a Supplemental Folio. | 
 **includeArticles** | **bool** | Flag to indicate if Article Codes are required, along with the parent Transaction Codes. | 
 **userRoleTransactions** | **bool** | Flag to indicate if it is allowed to manually post transaction codes. | 
 **manualPostAllowed** | **bool** | Flag to include the search for Manual Post Allowed. | 
 **code** | **string** | Lookup string which will try to match an existing Transaction Codes. | 
 **description** | **string** | Lookup string which will try to match an existing Transaction Code Description. | 
 **wildCard** | **string** |  | 
 **fiscalBillNo** | **string** | The Fiscal Bill number of this posting | 
 **folioDate** | **string** | Date of Folio Generation. | 
 **folioNo** | **float32** | Folio Number. | 
 **folioStatus** | **string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **trxServiceType** | **string** | Goods Type Transactions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionCodes**](TransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetValidateFiscalPrintingDetails

> FiscalCallStatus GetValidateFiscalPrintingDetails(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioView(folioView).FolioType(folioType).Id(id).Code(code).FetchInstruction(fetchInstruction).ProfileIdId(profileIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Fiscal Printing Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioView := int32(56) // int32 | The folio window where this settlement is applied. (optional)
    folioType := "folioType_example" // string | Folio Type (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    fetchInstruction := []string{"FetchInstruction_example"} // []string | Reservation Related information. (optional)
    profileIdId := "profileIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetValidateFiscalPrintingDetails(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioView(folioView).FolioType(folioType).Id(id).Code(code).FetchInstruction(fetchInstruction).ProfileIdId(profileIdId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetValidateFiscalPrintingDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetValidateFiscalPrintingDetails`: FiscalCallStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetValidateFiscalPrintingDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetValidateFiscalPrintingDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioView** | **int32** | The folio window where this settlement is applied. | 
 **folioType** | **string** | Folio Type | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **code** | **[]string** |  | 
 **fetchInstruction** | **[]string** | Reservation Related information. | 
 **profileIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalCallStatus**](FiscalCallStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetfetchStagedTransactions

> StagedTransactions GetfetchStagedTransactions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId2(hotelId2).FolioWindowNo(folioWindowNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get fetchStagedTransactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId2 := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    folioWindowNo := int32(56) // int32 | Folio Window Number of the staged transactions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetfetchStagedTransactions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId2(hotelId2).FolioWindowNo(folioWindowNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetfetchStagedTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetfetchStagedTransactions`: StagedTransactions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetfetchStagedTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetfetchStagedTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId2** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **folioWindowNo** | **int32** | Folio Window Number of the staged transactions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StagedTransactions**](StagedTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## IsDepositRefundEligible

> DepositRefundEligibleCheck IsDepositRefundEligible(ctx, transactionId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get eligibility of Deposit Refund



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.IsDepositRefundEligible(context.Background(), transactionId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.IsDepositRefundEligible``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `IsDepositRefundEligible`: DepositRefundEligibleCheck
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.IsDepositRefundEligible`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiIsDepositRefundEligibleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositRefundEligibleCheck**](DepositRefundEligibleCheck.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LinkReservationPackageAllowance

> Status LinkReservationPackageAllowance(ctx, destinationReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationPackageAllowance(linkReservationPackageAllowance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservation package allowance



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    destinationReservationId := "destinationReservationId_example" // string | Unique ID of the destination reservation.
    sourceReservationId := "sourceReservationId_example" // string | Unique ID of the source reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationPackageAllowance := *openapiclient.NewLinkReservationPackageAllowanceRequest() // LinkReservationPackageAllowanceRequest | Method to create package allowance link from a source reservation to the target reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.LinkReservationPackageAllowance(context.Background(), destinationReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationPackageAllowance(linkReservationPackageAllowance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.LinkReservationPackageAllowance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LinkReservationPackageAllowance`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.LinkReservationPackageAllowance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**destinationReservationId** | **string** | Unique ID of the destination reservation. | 
**sourceReservationId** | **string** | Unique ID of the source reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiLinkReservationPackageAllowanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationPackageAllowance** | [**LinkReservationPackageAllowanceRequest**](LinkReservationPackageAllowanceRequest.md) | Method to create package allowance link from a source reservation to the target reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingCashieringService

> OperaVersion PingCashieringService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Status check of cashiering services



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PingCashieringService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PingCashieringService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingCashieringService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PingCashieringService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingCashieringServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaVersion**](OperaVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAdvanceFolio

> Status PostAdvanceFolio(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAdvanceFolio(batchAdvanceFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Batch Advance Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchAdvanceFolio := *openapiclient.NewPostAdvanceFolioRequest() // PostAdvanceFolioRequest | Request for submitting batch advance folio.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostAdvanceFolio(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAdvanceFolio(batchAdvanceFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostAdvanceFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdvanceFolio`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostAdvanceFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAdvanceFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchAdvanceFolio** | [**PostAdvanceFolioRequest**](PostAdvanceFolioRequest.md) | Request for submitting batch advance folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAdvanceRoomCharges

> AdvanceRoomChargesReservationInfo PostAdvanceRoomCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceRoomCharges(advanceRoomCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create advance Room Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    advanceRoomCharges := *openapiclient.NewPostAdvanceRoomChargesRequest() // PostAdvanceRoomChargesRequest | Request to post the Room Charges for a reservation in advance. This request posts the Room Charges for a reservation for tonight or for many nights starting from the last posted night. This can also be used to verify if the reservation has already been charged for the full stay. Setting the Verify flag will return details regarding the last Room Charge posted date and if there are any available dates for which the room charges can be posted in advance. Room Charges cannot be posted for dates prior to the business date of the resort. To make the actual posting, the verification flag should be false.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostAdvanceRoomCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceRoomCharges(advanceRoomCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostAdvanceRoomCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdvanceRoomCharges`: AdvanceRoomChargesReservationInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostAdvanceRoomCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAdvanceRoomChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **advanceRoomCharges** | [**PostAdvanceRoomChargesRequest**](PostAdvanceRoomChargesRequest.md) | Request to post the Room Charges for a reservation in advance. This request posts the Room Charges for a reservation for tonight or for many nights starting from the last posted night. This can also be used to verify if the reservation has already been charged for the full stay. Setting the Verify flag will return details regarding the last Room Charge posted date and if there are any available dates for which the room charges can be posted in advance. Room Charges cannot be posted for dates prior to the business date of the resort. To make the actual posting, the verification flag should be false. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdvanceRoomChargesReservationInfo**](AdvanceRoomChargesReservationInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostArticlesSale

> ArticlesSale PostArticlesSale(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticlesSaleCriteria(articlesSaleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Articles Sale



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articlesSaleCriteria := *openapiclient.NewPostArticlesSaleRequest() // PostArticlesSaleRequest | Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostArticlesSale(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticlesSaleCriteria(articlesSaleCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostArticlesSale``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostArticlesSale`: ArticlesSale
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostArticlesSale`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostArticlesSaleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articlesSaleCriteria** | [**PostArticlesSaleRequest**](PostArticlesSaleRequest.md) | Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArticlesSale**](ArticlesSale.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAutoCheckoutReservations

> BatchAutoCheckoutDetails PostAutoCheckoutReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAutoCheckoutReservation(batchAutoCheckoutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Auto Checkout Reservation Batch 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchAutoCheckoutReservation := *openapiclient.NewPostAutoCheckoutReservationsRequest() // PostAutoCheckoutReservationsRequest | Request type for batch auto checkout.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostAutoCheckoutReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAutoCheckoutReservation(batchAutoCheckoutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostAutoCheckoutReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoCheckoutReservations`: BatchAutoCheckoutDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostAutoCheckoutReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoCheckoutReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchAutoCheckoutReservation** | [**PostAutoCheckoutReservationsRequest**](PostAutoCheckoutReservationsRequest.md) | Request type for batch auto checkout. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BatchAutoCheckoutDetails**](BatchAutoCheckoutDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBatchAutoSettlement

> Status PostBatchAutoSettlement(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAutoSettlementCriteria(batchAutoSettlementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Batch Auto Settlement



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchAutoSettlementCriteria := *openapiclient.NewPostBatchAutoSettlementRequest() // PostBatchAutoSettlementRequest | Request type for batch auto settlement.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBatchAutoSettlement(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchAutoSettlementCriteria(batchAutoSettlementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBatchAutoSettlement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBatchAutoSettlement`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBatchAutoSettlement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBatchAutoSettlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchAutoSettlementCriteria** | [**PostBatchAutoSettlementRequest**](PostBatchAutoSettlementRequest.md) | Request type for batch auto settlement. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBatchCCSettlements

> Status PostBatchCCSettlements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcBatchSettlementsProcessCriteria(ccBatchSettlementsProcessCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Batch CC Settlements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ccBatchSettlementsProcessCriteria := *openapiclient.NewPostBatchCCSettlementsRequest() // PostBatchCCSettlementsRequest | Request to process batch settlements
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBatchCCSettlements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcBatchSettlementsProcessCriteria(ccBatchSettlementsProcessCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBatchCCSettlements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBatchCCSettlements`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBatchCCSettlements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBatchCCSettlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ccBatchSettlementsProcessCriteria** | [**PostBatchCCSettlementsRequest**](PostBatchCCSettlementsRequest.md) | Request to process batch settlements | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBatchDeposit

> Status PostBatchDeposit(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchDeposit(batchDeposit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create batch deposits



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchDeposit := *openapiclient.NewPostBatchDepositRequest() // PostBatchDepositRequest | Request for submitting batch deposit for reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBatchDeposit(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchDeposit(batchDeposit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBatchDeposit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBatchDeposit`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBatchDeposit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBatchDepositRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchDeposit** | [**PostBatchDepositRequest**](PostBatchDepositRequest.md) | Request for submitting batch deposit for reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBedTaxInfo

> Status PostBedTaxInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTaxCriteria(bedTaxCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create bed tax information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTaxCriteria := *openapiclient.NewPostBedTaxInfoRequest() // PostBedTaxInfoRequest | Request type for create bed transaction info
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBedTaxInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTaxCriteria(bedTaxCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBedTaxInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBedTaxInfo`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBedTaxInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBedTaxInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTaxCriteria** | [**PostBedTaxInfoRequest**](PostBedTaxInfoRequest.md) | Request type for create bed transaction info | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBillingCharges

> BillingChargesDetails PostBillingCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCharges(billingCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post Charge to a folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingCharges := *openapiclient.NewPostBillingChargesRequest() // PostBillingChargesRequest | Request to post a charge on a reservation's folio.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBillingCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCharges(billingCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBillingCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBillingCharges`: BillingChargesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBillingCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBillingChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingCharges** | [**PostBillingChargesRequest**](PostBillingChargesRequest.md) | Request to post a charge on a reservation&#39;s folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BillingChargesDetails**](BillingChargesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBillingChargesInBatch

> PostedBillingChargesInBatch PostBillingChargesInBatch(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingChargesInBatchCriteria(billingChargesInBatchCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Billing Charges in Batch



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingChargesInBatchCriteria := *openapiclient.NewPostBillingChargesInBatchRequest() // PostBillingChargesInBatchRequest | Operation to post billing charge to list of reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBillingChargesInBatch(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingChargesInBatchCriteria(billingChargesInBatchCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBillingChargesInBatch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBillingChargesInBatch`: PostedBillingChargesInBatch
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBillingChargesInBatch`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBillingChargesInBatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingChargesInBatchCriteria** | [**PostBillingChargesInBatchRequest**](PostBillingChargesInBatchRequest.md) | Operation to post billing charge to list of reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostedBillingChargesInBatch**](PostedBillingChargesInBatch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBillingCheckCharges

> Status PostBillingCheckCharges(ctx, checkNumber, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCheckChargesCriteria(billingCheckChargesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Pre-validate the Billing Charge



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    checkNumber := "checkNumber_example" // string | Unique number of the check.
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingCheckChargesCriteria := *openapiclient.NewPostBillingCheckChargesRequest() // PostBillingCheckChargesRequest | Request object for PostBillingCheckCharges operation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBillingCheckCharges(context.Background(), checkNumber, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCheckChargesCriteria(billingCheckChargesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBillingCheckCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBillingCheckCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBillingCheckCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**checkNumber** | **string** | Unique number of the check. | 
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBillingCheckChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingCheckChargesCriteria** | [**PostBillingCheckChargesRequest**](PostBillingCheckChargesRequest.md) | Request object for PostBillingCheckCharges operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBillingPayment

> PostedBillingPayment PostBillingPayment(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingPayment(billingPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Billing Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingPayment := *openapiclient.NewPostBillingPaymentRequest() // PostBillingPaymentRequest | Request to post a payment on a reservation's folio.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostBillingPayment(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingPayment(billingPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostBillingPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBillingPayment`: PostedBillingPayment
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostBillingPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBillingPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingPayment** | [**PostBillingPaymentRequest**](PostBillingPaymentRequest.md) | Request to post a payment on a reservation&#39;s folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostedBillingPayment**](PostedBillingPayment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCCSettlement

> Status PostCCSettlement(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcSettlementCriteria(ccSettlementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create CreditCard Settlement



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ccSettlementCriteria := *openapiclient.NewPostCCSettlementRequest() // PostCCSettlementRequest | Request object to change credit card settlement information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCCSettlement(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcSettlementCriteria(ccSettlementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCCSettlement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCCSettlement`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCCSettlement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCCSettlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ccSettlementCriteria** | [**PostCCSettlementRequest**](PostCCSettlementRequest.md) | Request object to change credit card settlement information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCheckOut

> Status PostCheckOut(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reservation(reservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check out a guest



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservation := *openapiclient.NewPostCheckOutRequest() // PostCheckOutRequest | Checkout request can be used to verify a reservation for checkout and do an actual checkout. In case the verificationOnly attribute is sent false, the operation will perform an actual checkout. In case the verificationOnly attribute is sent true, the operation goes through the reservation in question and verifies if it's Ok to checkout, otherwise the verification status element will provide you the verification code. The verification codes are described in the documentation of verificationOnly attribute.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCheckOut(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reservation(reservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCheckOut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCheckOut`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCheckOut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCheckOutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservation** | [**PostCheckOutRequest**](PostCheckOutRequest.md) | Checkout request can be used to verify a reservation for checkout and do an actual checkout. In case the verificationOnly attribute is sent false, the operation will perform an actual checkout. In case the verificationOnly attribute is sent true, the operation goes through the reservation in question and verifies if it&#39;s Ok to checkout, otherwise the verification status element will provide you the verification code. The verification codes are described in the documentation of verificationOnly attribute. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCompRedemptions

> Status PostCompRedemptions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostCompRedemptions(postCompRedemptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to post complimentary bucket redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postCompRedemptions := *openapiclient.NewPostCompRedemptionsRequest() // PostCompRedemptionsRequest | Request type of Complimentary Bucket Redemptions posting.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCompRedemptions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostCompRedemptions(postCompRedemptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompRedemptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postCompRedemptions** | [**PostCompRedemptionsRequest**](PostCompRedemptionsRequest.md) | Request type of Complimentary Bucket Redemptions posting. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCompTransaction

> Status PostCompTransaction(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCriteria(compTransactionCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Submit Comp Transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTransactionCriteria := *openapiclient.NewPostCompTransactionRequest() // PostCompTransactionRequest | Request object to submit a comp transaction to gaming system
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCompTransaction(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCriteria(compTransactionCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCompTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompTransaction`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCompTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCompTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTransactionCriteria** | [**PostCompTransactionRequest**](PostCompTransactionRequest.md) | Request object to submit a comp transaction to gaming system | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCreditBill

> PostedCreditBill PostCreditBill(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditBillCriteria(creditBillCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Credit Bill



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditBillCriteria := *openapiclient.NewPostCreditBillRequest() // PostCreditBillRequest | Request to post a Credit Folio for an existing Folio. Credit Bill Functionality parameter is required.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCreditBill(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditBillCriteria(creditBillCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCreditBill``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCreditBill`: PostedCreditBill
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCreditBill`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCreditBillRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditBillCriteria** | [**PostCreditBillRequest**](PostCreditBillRequest.md) | Request to post a Credit Folio for an existing Folio. Credit Bill Functionality parameter is required. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostedCreditBill**](PostedCreditBill.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCreditLimitOveragePayments

> CreditLimitOveragePaymentsDetails PostCreditLimitOveragePayments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditLimitOveragePayments(creditLimitOveragePayments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Credit Limit Overage Payments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditLimitOveragePayments := *openapiclient.NewPostCreditLimitOveragePaymentsRequest() // PostCreditLimitOveragePaymentsRequest | Request to start the Credit Limit Overage process for the reservations with a folio window balance equal or higher to the credit limit set for the credit card payment method of that folio window.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCreditLimitOveragePayments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditLimitOveragePayments(creditLimitOveragePayments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCreditLimitOveragePayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCreditLimitOveragePayments`: CreditLimitOveragePaymentsDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCreditLimitOveragePayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCreditLimitOveragePaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditLimitOveragePayments** | [**PostCreditLimitOveragePaymentsRequest**](PostCreditLimitOveragePaymentsRequest.md) | Request to start the Credit Limit Overage process for the reservations with a folio window balance equal or higher to the credit limit set for the credit card payment method of that folio window. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditLimitOveragePaymentsDetails**](CreditLimitOveragePaymentsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDeferredTaxesProcess

> DeferredTaxesProcessDetails PostDeferredTaxesProcess(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeferredTaxesProcess(deferredTaxesProcess).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Request to submit a job to post the deferred taxes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    deferredTaxesProcess := *openapiclient.NewPostDeferredTaxesProcessRequest() // PostDeferredTaxesProcessRequest | Request to submit a job to post the deferred taxes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostDeferredTaxesProcess(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeferredTaxesProcess(deferredTaxesProcess).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostDeferredTaxesProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDeferredTaxesProcess`: DeferredTaxesProcessDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostDeferredTaxesProcess`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDeferredTaxesProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **deferredTaxesProcess** | [**PostDeferredTaxesProcessRequest**](PostDeferredTaxesProcessRequest.md) | Request to submit a job to post the deferred taxes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DeferredTaxesProcessDetails**](DeferredTaxesProcessDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDepositFolio

> PostedDepositFolio PostDepositFolio(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositFolioCriteria(depositFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Deposit Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositFolioCriteria := *openapiclient.NewPostDepositFolioRequest() // PostDepositFolioRequest | Request to create a Deposit Folio for a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostDepositFolio(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositFolioCriteria(depositFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostDepositFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDepositFolio`: PostedDepositFolio
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostDepositFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDepositFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositFolioCriteria** | [**PostDepositFolioRequest**](PostDepositFolioRequest.md) | Request to create a Deposit Folio for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostedDepositFolio**](PostedDepositFolio.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDepositPayment

> DepositedPayment PostDepositPayment(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPayment(depositPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Deposit Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositPayment := *openapiclient.NewPostDepositPaymentByExtIdRequest() // PostDepositPaymentByExtIdRequest | Request to post a deposit payment to a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostDepositPayment(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPayment(depositPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostDepositPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDepositPayment`: DepositedPayment
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostDepositPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDepositPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositPayment** | [**PostDepositPaymentByExtIdRequest**](PostDepositPaymentByExtIdRequest.md) | Request to post a deposit payment to a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositedPayment**](DepositedPayment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDepositPaymentByExtId

> DepositedPayment PostDepositPaymentByExtId(ctx, reservationId, externalSysCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPayment(depositPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Deposit Payment using external reference.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | External System's reservation ID.
    externalSysCode := "externalSysCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositPayment := *openapiclient.NewPostDepositPaymentByExtIdRequest() // PostDepositPaymentByExtIdRequest | Request to post a deposit payment to a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostDepositPaymentByExtId(context.Background(), reservationId, externalSysCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositPayment(depositPayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostDepositPaymentByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDepositPaymentByExtId`: DepositedPayment
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostDepositPaymentByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | External System&#39;s reservation ID. | 
**externalSysCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDepositPaymentByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositPayment** | [**PostDepositPaymentByExtIdRequest**](PostDepositPaymentByExtIdRequest.md) | Request to post a deposit payment to a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositedPayment**](DepositedPayment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFBAReimbursement

> Status PostFBAReimbursement(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FbaReimbursementCriteria(fbaReimbursementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create FBA Reimbursement



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fbaReimbursementCriteria := *openapiclient.NewPostFBAReimbursementRequest() // PostFBAReimbursementRequest | PostFBAReimbursement operation posts reimbursement against the selected certificate records.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostFBAReimbursement(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FbaReimbursementCriteria(fbaReimbursementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostFBAReimbursement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFBAReimbursement`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostFBAReimbursement`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFBAReimbursementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fbaReimbursementCriteria** | [**PostFBAReimbursementRequest**](PostFBAReimbursementRequest.md) | PostFBAReimbursement operation posts reimbursement against the selected certificate records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFBASettlement

> Status PostFBASettlement(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FbaReimbursementCriteria(fbaReimbursementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create FBA Settlement



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fbaReimbursementCriteria := *openapiclient.NewPostFBAReimbursementRequest() // PostFBAReimbursementRequest | PostFBASettlement operation posts settlement against the selected certificate records.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostFBASettlement(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FbaReimbursementCriteria(fbaReimbursementCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostFBASettlement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFBASettlement`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostFBASettlement`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFBASettlementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fbaReimbursementCriteria** | [**PostFBAReimbursementRequest**](PostFBAReimbursementRequest.md) | PostFBASettlement operation posts settlement against the selected certificate records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFiscalCommandInvoice

> FiscalCommandsResponseInfo PostFiscalCommandInvoice(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioCriteria(fiscalFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Fiscal Invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalFolioCriteria := *openapiclient.NewPostFiscalCommandInvoiceRequest() // PostFiscalCommandInvoiceRequest | Request to generate commands and communicate with fiscal service from fiscal terminals screen..
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostFiscalCommandInvoice(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioCriteria(fiscalFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostFiscalCommandInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFiscalCommandInvoice`: FiscalCommandsResponseInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostFiscalCommandInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFiscalCommandInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalFolioCriteria** | [**PostFiscalCommandInvoiceRequest**](PostFiscalCommandInvoiceRequest.md) | Request to generate commands and communicate with fiscal service from fiscal terminals screen.. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalCommandsResponseInfo**](FiscalCommandsResponseInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFiscalInvoice

> Status PostFiscalInvoice(ctx, folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioCriteria(fiscalFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Fiscal Invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalFolioCriteria := *openapiclient.NewPostFiscalCommandInvoiceRequest() // PostFiscalCommandInvoiceRequest | Request to generate commands and communicate with fiscal service from fiscal terminals screen..
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostFiscalInvoice(context.Background(), folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioCriteria(fiscalFolioCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostFiscalInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFiscalInvoice`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostFiscalInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFiscalInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalFolioCriteria** | [**PostFiscalCommandInvoiceRequest**](PostFiscalCommandInvoiceRequest.md) | Request to generate commands and communicate with fiscal service from fiscal terminals screen.. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostFixedCharges

> Status PostFixedCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedCharges(fixedCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Fixed Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fixedCharges := *openapiclient.NewUpdateFixedChargesRequest() // UpdateFixedChargesRequest | Method to create fixed charges of a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostFixedCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedCharges(fixedCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostFixedCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFixedCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostFixedCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFixedChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fixedCharges** | [**UpdateFixedChargesRequest**](UpdateFixedChargesRequest.md) | Method to create fixed charges of a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostForeignCurrencyExchange

> ForeignCurrencyExchangeTransaction PostForeignCurrencyExchange(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencyExchange(foreignCurrencyExchange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Foreign Currency Exchange



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    foreignCurrencyExchange := *openapiclient.NewPostForeignCurrencyExchangeRequest() // PostForeignCurrencyExchangeRequest | A set of posting transactions that need to be posted with regards to exchange.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostForeignCurrencyExchange(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForeignCurrencyExchange(foreignCurrencyExchange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostForeignCurrencyExchange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostForeignCurrencyExchange`: ForeignCurrencyExchangeTransaction
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostForeignCurrencyExchange`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostForeignCurrencyExchangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **foreignCurrencyExchange** | [**PostForeignCurrencyExchangeRequest**](PostForeignCurrencyExchangeRequest.md) | A set of posting transactions that need to be posted with regards to exchange. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ForeignCurrencyExchangeTransaction**](ForeignCurrencyExchangeTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGuestCheckDetails

> Status PostGuestCheckDetails(ctx, checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestCheckDetails(guestCheckDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post Guest Check Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    checkNumber := "checkNumber_example" // string | Unique number of the check
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestCheckDetails := *openapiclient.NewPostGuestCheckDetailsRequest() // PostGuestCheckDetailsRequest | Request to process a guest check detail.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostGuestCheckDetails(context.Background(), checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestCheckDetails(guestCheckDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostGuestCheckDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestCheckDetails`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostGuestCheckDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**checkNumber** | **string** | Unique number of the check | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestCheckDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestCheckDetails** | [**PostGuestCheckDetailsRequest**](PostGuestCheckDetailsRequest.md) | Request to process a guest check detail. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPasserBySale

> PasserBySale PostPasserBySale(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PasserBySalesCriteria(passerBySalesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create passer by sale



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    passerBySalesCriteria := *openapiclient.NewPostPasserBySaleRequest() // PostPasserBySaleRequest | Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostPasserBySale(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PasserBySalesCriteria(passerBySalesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostPasserBySale``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPasserBySale`: PasserBySale
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostPasserBySale`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPasserBySaleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **passerBySalesCriteria** | [**PostPasserBySaleRequest**](PostPasserBySaleRequest.md) | Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PasserBySale**](PasserBySale.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPrepaidCards

> Status PostPrepaidCards(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PrepaidCardCriteria(prepaidCardCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Prepaid Cards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    prepaidCardCriteria := *openapiclient.NewPostPrepaidCardsRequest() // PostPrepaidCardsRequest | Request type for Prepaid card creation process
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostPrepaidCards(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PrepaidCardCriteria(prepaidCardCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostPrepaidCards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPrepaidCards`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostPrepaidCards`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPrepaidCardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **prepaidCardCriteria** | [**PostPrepaidCardsRequest**](PostPrepaidCardsRequest.md) | Request type for Prepaid card creation process | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostProforma

> ReservationFolioInformation PostProforma(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationFolio(reservationFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create proforma



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationFolio := *openapiclient.NewPostProformaRequest() // PostProformaRequest | Request to create a Proforma(folio) transactions for a reservation. The request generates the internal transactions required to create a Proforma report. After this request is called , the Opera Proforma report should be called so that these transactions can be used in the report. If the report is called without this request, the report will be incorrect and will not have the complete information. If the report is not used after this request, the internal transactions will be removed either by night audit or by the next request.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostProforma(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationFolio(reservationFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostProforma``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProforma`: ReservationFolioInformation
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostProforma`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostProformaRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationFolio** | [**PostProformaRequest**](PostProformaRequest.md) | Request to create a Proforma(folio) transactions for a reservation. The request generates the internal transactions required to create a Proforma report. After this request is called , the Opera Proforma report should be called so that these transactions can be used in the report. If the report is called without this request, the report will be incorrect and will not have the complete information. If the report is not used after this request, the internal transactions will be removed either by night audit or by the next request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationFolioInformation**](ReservationFolioInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRateCode

> PostedRateCode PostRateCode(ctx, rateCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRateCodeCriteria(postRateCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    rateCode := "rateCode_example" // string | The Rate Code which is to be posted on the Guest Folio.
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postRateCodeCriteria := *openapiclient.NewPostRateCodeRequest() // PostRateCodeRequest | Operation to post a Rate Code amount to the Reservation. Based on the criteria, Products(Packages) which are included as part of the Rate Code may be posted along with the room rate amount.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostRateCode(context.Background(), rateCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRateCodeCriteria(postRateCodeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostRateCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRateCode`: PostedRateCode
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostRateCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | The Rate Code which is to be posted on the Guest Folio. | 
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRateCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postRateCodeCriteria** | [**PostRateCodeRequest**](PostRateCodeRequest.md) | Operation to post a Rate Code amount to the Reservation. Based on the criteria, Products(Packages) which are included as part of the Rate Code may be posted along with the room rate amount. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostedRateCode**](PostedRateCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReversePayment

> Status PostReversePayment(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentReversalCriteria(paymentReversalCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create reverse payments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the Transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    paymentReversalCriteria := *openapiclient.NewPostReversePaymentRequest() // PostReversePaymentRequest | Request for posting payment reversal.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostReversePayment(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PaymentReversalCriteria(paymentReversalCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostReversePayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReversePayment`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostReversePayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the Transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReversePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **paymentReversalCriteria** | [**PostReversePaymentRequest**](PostReversePaymentRequest.md) | Request for posting payment reversal. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomAndTaxForDayUse

> Status PostRoomAndTaxForDayUse(ctx, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRoomAndTaxForDayUse(postRoomAndTaxForDayUse).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to post room and tax for day use.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postRoomAndTaxForDayUse := *openapiclient.NewPostRoomAndTaxForDayUseRequest() // PostRoomAndTaxForDayUseRequest | Request object to calculate room and tax.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostRoomAndTaxForDayUse(context.Background(), reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostRoomAndTaxForDayUse(postRoomAndTaxForDayUse).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostRoomAndTaxForDayUse``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomAndTaxForDayUse`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostRoomAndTaxForDayUse`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomAndTaxForDayUseRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postRoomAndTaxForDayUse** | [**PostRoomAndTaxForDayUseRequest**](PostRoomAndTaxForDayUseRequest.md) | Request object to calculate room and tax. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostStoredFolioDetails

> Status PostStoredFolioDetails(ctx, folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StoredFolioDetails(storedFolioDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Stored Folio Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    storedFolioDetails := *openapiclient.NewPostStoredFolioDetailsRequest() // PostStoredFolioDetailsRequest | Request object to update stored folio details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostStoredFolioDetails(context.Background(), folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StoredFolioDetails(storedFolioDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostStoredFolioDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostStoredFolioDetails`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostStoredFolioDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostStoredFolioDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **storedFolioDetails** | [**PostStoredFolioDetailsRequest**](PostStoredFolioDetailsRequest.md) | Request object to update stored folio details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSupplementalFolio

> PostSupplementalFolioStatus PostSupplementalFolio(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostSupplementalFolio(postSupplementalFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post supplemental folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postSupplementalFolio := *openapiclient.NewPostSupplementalFolioRequest() // PostSupplementalFolioRequest | Request to post a Supplemental Folio for an existing Folio. Debit Bill ( Supplemental Folio ) Functionality parameter is required
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostSupplementalFolio(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostSupplementalFolio(postSupplementalFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostSupplementalFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSupplementalFolio`: PostSupplementalFolioStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostSupplementalFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSupplementalFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postSupplementalFolio** | [**PostSupplementalFolioRequest**](PostSupplementalFolioRequest.md) | Request to post a Supplemental Folio for an existing Folio. Debit Bill ( Supplemental Folio ) Functionality parameter is required | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostSupplementalFolioStatus**](PostSupplementalFolioStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostZeroBalanceCheckoutReservations

> BatchZeroBalanceCheckoutDetails PostZeroBalanceCheckoutReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchZeroBalanceCheckoutReservation(batchZeroBalanceCheckoutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Zero Balance Checkout Reservation Batch 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchZeroBalanceCheckoutReservation := *openapiclient.NewPostZeroBalanceCheckoutReservationsRequest() // PostZeroBalanceCheckoutReservationsRequest | Request type for batch zero balance checkout
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostZeroBalanceCheckoutReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchZeroBalanceCheckoutReservation(batchZeroBalanceCheckoutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostZeroBalanceCheckoutReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostZeroBalanceCheckoutReservations`: BatchZeroBalanceCheckoutDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostZeroBalanceCheckoutReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostZeroBalanceCheckoutReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchZeroBalanceCheckoutReservation** | [**PostZeroBalanceCheckoutReservationsRequest**](PostZeroBalanceCheckoutReservationsRequest.md) | Request type for batch zero balance checkout | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BatchZeroBalanceCheckoutDetails**](BatchZeroBalanceCheckoutDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessFiscalRetry

> ProcessFiscalRetryStatus ProcessFiscalRetry(ctx, folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProcessFiscalRetry(processFiscalRetry).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process Fiscal retry



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    processFiscalRetry := *openapiclient.NewProcessFiscalRetryRequest() // ProcessFiscalRetryRequest | The request object to process fiscal retry functionality.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ProcessFiscalRetry(context.Background(), folioId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProcessFiscalRetry(processFiscalRetry).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ProcessFiscalRetry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessFiscalRetry`: ProcessFiscalRetryStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ProcessFiscalRetry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessFiscalRetryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **processFiscalRetry** | [**ProcessFiscalRetryRequest**](ProcessFiscalRetryRequest.md) | The request object to process fiscal retry functionality. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessFiscalRetryStatus**](ProcessFiscalRetryStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessReservationDeposit

> Status ProcessReservationDeposit(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositCriteria(reservationDepositCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process Reservations deposit



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationDepositCriteria := *openapiclient.NewProcessReservationDepositRequest() // ProcessReservationDepositRequest | Request object to process reservation deposit.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ProcessReservationDeposit(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositCriteria(reservationDepositCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ProcessReservationDeposit``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessReservationDeposit`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ProcessReservationDeposit`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessReservationDepositRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationDepositCriteria** | [**ProcessReservationDepositRequest**](ProcessReservationDepositRequest.md) | Request object to process reservation deposit. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessRoomRoutingRefresh

> Status ProcessRoomRoutingRefresh(ctx, targetReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRoutingRefresh(roomRoutingRefresh).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process Room Routing Refresh



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    targetReservationId := "targetReservationId_example" // string | Unique ID of the target reservation
    sourceReservationId := "sourceReservationId_example" // string | Unique ID of the source reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRoutingRefresh := *openapiclient.NewProcessRoomRoutingRefreshRequest() // ProcessRoomRoutingRefreshRequest | The request object for processing refreshing of a routing instruction set. This operation transfers the postings to the respective reservation as per the routing instruction set which is created, edited, deleted or refreshed.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ProcessRoomRoutingRefresh(context.Background(), targetReservationId, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRoutingRefresh(roomRoutingRefresh).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ProcessRoomRoutingRefresh``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessRoomRoutingRefresh`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ProcessRoomRoutingRefresh`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**targetReservationId** | **string** | Unique ID of the target reservation | 
**sourceReservationId** | **string** | Unique ID of the source reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessRoomRoutingRefreshRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRoutingRefresh** | [**ProcessRoomRoutingRefreshRequest**](ProcessRoomRoutingRefreshRequest.md) | The request object for processing refreshing of a routing instruction set. This operation transfers the postings to the respective reservation as per the routing instruction set which is created, edited, deleted or refreshed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBedTaxInfo

> Status PutBedTaxInfo(ctx, taxRegistraitionNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTaxCriteria(bedTaxCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change bed tax information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    taxRegistraitionNo := "taxRegistraitionNo_example" // string | Unique number of the tax registration.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTaxCriteria := *openapiclient.NewPostBedTaxInfoRequest() // PostBedTaxInfoRequest | Request type for change bed transaction info
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutBedTaxInfo(context.Background(), taxRegistraitionNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTaxCriteria(bedTaxCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutBedTaxInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBedTaxInfo`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutBedTaxInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taxRegistraitionNo** | **string** | Unique number of the tax registration. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBedTaxInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTaxCriteria** | [**PostBedTaxInfoRequest**](PostBedTaxInfoRequest.md) | Request type for change bed transaction info | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBillingCharge

> BillingChargeStatus PutBillingCharge(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCharge(billingCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Billing Charge



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    billingCharge := *openapiclient.NewPutBillingChargeRequest() // PutBillingChargeRequest | Request to edit a billing charge information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutBillingCharge(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BillingCharge(billingCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutBillingCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBillingCharge`: BillingChargeStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutBillingCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBillingChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **billingCharge** | [**PutBillingChargeRequest**](PutBillingChargeRequest.md) | Request to edit a billing charge information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BillingChargeStatus**](BillingChargeStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBillingCharges

> PutBillingChargesStatus PutBillingCharges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PutBillingCharges(putBillingCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Billing Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    putBillingCharges := *openapiclient.NewPutBillingChargesRequest() // PutBillingChargesRequest | Request to edit multiple billing charge information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutBillingCharges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PutBillingCharges(putBillingCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutBillingCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBillingCharges`: PutBillingChargesStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutBillingCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBillingChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **putBillingCharges** | [**PutBillingChargesRequest**](PutBillingChargesRequest.md) | Request to edit multiple billing charge information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PutBillingChargesStatus**](PutBillingChargesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCashier

> Status PutCashier(ctx, cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierClosure(cashierClosure).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Close Cashier



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierClosure := *openapiclient.NewPutCashierRequest() // PutCashierRequest | Request to close cashier's shift.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutCashier(context.Background(), cashierId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierClosure(cashierClosure).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutCashier``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCashier`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutCashier`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCashierRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierClosure** | [**PutCashierRequest**](PutCashierRequest.md) | Request to close cashier&#39;s shift. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCashierLock

> ExtendedCashierLock PutCashierLock(ctx, lockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierLockCriteriaToExtend(cashierLockCriteriaToExtend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Extend Cashier Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    lockId := "lockId_example" // string | Unique ID of the lock.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierLockCriteriaToExtend := *openapiclient.NewPutCashierLockRequest() // PutCashierLockRequest | Operation for extending the lifetime of a lock on a cashier.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutCashierLock(context.Background(), lockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierLockCriteriaToExtend(cashierLockCriteriaToExtend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutCashierLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCashierLock`: ExtendedCashierLock
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutCashierLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**lockId** | **string** | Unique ID of the lock. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCashierLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierLockCriteriaToExtend** | [**PutCashierLockRequest**](PutCashierLockRequest.md) | Operation for extending the lifetime of a lock on a cashier. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExtendedCashierLock**](ExtendedCashierLock.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutForEarlyDeparture

> Status PutForEarlyDeparture(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EarlyDeparture(earlyDeparture).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change early Departure



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    earlyDeparture := *openapiclient.NewPutForEarlyDepartureRequest() // PutForEarlyDepartureRequest | Request to change a reservation to an Early Departure. As part of this process the reservation will be changed to a Due Out status with the departure date being the current business date. Only Inhouse reservations can be changed to Early Departure. Before changing the reservation to early departure, rate restrictions on the rate code used and any allowances consumed by the guest for today will be checked. If there is a penalty applicable this can be posted to the reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutForEarlyDeparture(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EarlyDeparture(earlyDeparture).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutForEarlyDeparture``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutForEarlyDeparture`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutForEarlyDeparture`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutForEarlyDepartureRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **earlyDeparture** | [**PutForEarlyDepartureRequest**](PutForEarlyDepartureRequest.md) | Request to change a reservation to an Early Departure. As part of this process the reservation will be changed to a Due Out status with the departure date being the current business date. Only Inhouse reservations can be changed to Early Departure. Before changing the reservation to early departure, rate restrictions on the rate code used and any allowances consumed by the guest for today will be checked. If there is a penalty applicable this can be posted to the reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPayeeTaxNumber

> Status PutPayeeTaxNumber(ctx, payeeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PayeeTaxNumber(payeeTaxNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Payee Tax Number



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    payeeId := "payeeId_example" // string | Unique ID of the payee
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    payeeTaxNumber := *openapiclient.NewPutPayeeTaxNumberRequest() // PutPayeeTaxNumberRequest | Request to validate and change Payee Tax Number.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutPayeeTaxNumber(context.Background(), payeeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PayeeTaxNumber(payeeTaxNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutPayeeTaxNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPayeeTaxNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutPayeeTaxNumber`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**payeeId** | **string** | Unique ID of the payee | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPayeeTaxNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **payeeTaxNumber** | [**PutPayeeTaxNumberRequest**](PutPayeeTaxNumberRequest.md) | Request to validate and change Payee Tax Number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationDepositTransfer

> Status PutReservationDepositTransfer(ctx, sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositTransferCriteria(depositTransferCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Deposit Transfer.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    sourceReservationId := "sourceReservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositTransferCriteria := *openapiclient.NewPutReservationDepositTransferRequest() // PutReservationDepositTransferRequest | Request to transfer a deposit amount from one reservation to one or more reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutReservationDepositTransfer(context.Background(), sourceReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositTransferCriteria(depositTransferCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutReservationDepositTransfer``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationDepositTransfer`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutReservationDepositTransfer`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceReservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationDepositTransferRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositTransferCriteria** | [**PutReservationDepositTransferRequest**](PutReservationDepositTransferRequest.md) | Request to transfer a deposit amount from one reservation to one or more reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoutingInstructions

> CreatedRoutingInstructions PutRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructions := *openapiclient.NewPutRoutingInstructionsRequest() // PutRoutingInstructionsRequest | Request to create a routing instruction.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PutRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructions(routingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PutRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoutingInstructions`: CreatedRoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PutRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructions** | [**PutRoutingInstructionsRequest**](PutRoutingInstructionsRequest.md) | Request to create a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreatedRoutingInstructions**](CreatedRoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RedeemPrepaidCards

> RedeemPrepaidCardsStatus RedeemPrepaidCards(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RedeemPrepaidCards(redeemPrepaidCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to redeem prepaid cards.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    redeemPrepaidCards := *openapiclient.NewRedeemPrepaidCardsRequest() // RedeemPrepaidCardsRequest | Request type for Prepaid card redeem amount request.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.RedeemPrepaidCards(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RedeemPrepaidCards(redeemPrepaidCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.RedeemPrepaidCards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RedeemPrepaidCards`: RedeemPrepaidCardsStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.RedeemPrepaidCards`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRedeemPrepaidCardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **redeemPrepaidCards** | [**RedeemPrepaidCardsRequest**](RedeemPrepaidCardsRequest.md) | Request type for Prepaid card redeem amount request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RedeemPrepaidCardsStatus**](RedeemPrepaidCardsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RegisterManualAuthorization

> Status RegisterManualAuthorization(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcManualAuthorizationCriteria(ccManualAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Register Manual Authorization



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ccManualAuthorizationCriteria := *openapiclient.NewRegisterManualAuthorizationRequest() // RegisterManualAuthorizationRequest | Request for registering a Manual Authorization.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.RegisterManualAuthorization(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CcManualAuthorizationCriteria(ccManualAuthorizationCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.RegisterManualAuthorization``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RegisterManualAuthorization`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.RegisterManualAuthorization`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRegisterManualAuthorizationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ccManualAuthorizationCriteria** | [**RegisterManualAuthorizationRequest**](RegisterManualAuthorizationRequest.md) | Request for registering a Manual Authorization. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RegisterVaultTransaction

> Status RegisterVaultTransaction(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).VaultTransaction(vaultTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Register Vault Transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    vaultTransaction := *openapiclient.NewRegisterVaultTransactionRequest() // RegisterVaultTransactionRequest | Request to register the vault HTTP transaction.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.RegisterVaultTransaction(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).VaultTransaction(vaultTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.RegisterVaultTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RegisterVaultTransaction`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.RegisterVaultTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRegisterVaultTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **vaultTransaction** | [**RegisterVaultTransactionRequest**](RegisterVaultTransactionRequest.md) | Request to register the vault HTTP transaction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReinstateCheckOut

> Status ReinstateCheckOut(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateCheckedOutReservation(reinstateCheckedOutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reinstate Checked Out Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reinstateCheckedOutReservation := *openapiclient.NewReinstateCheckOutRequest() // ReinstateCheckOutRequest | Request to reinstate checkout reservation in order to post additional transactions, etc.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReinstateCheckOut(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateCheckedOutReservation(reinstateCheckedOutReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReinstateCheckOut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReinstateCheckOut`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReinstateCheckOut`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReinstateCheckOutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reinstateCheckedOutReservation** | [**ReinstateCheckOutRequest**](ReinstateCheckOutRequest.md) | Request to reinstate checkout reservation in order to post additional transactions, etc. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReleaseCashierLock

> Status ReleaseCashierLock(ctx, lockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Release Cashier Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    lockId := "lockId_example" // string | Unique ID of the lock.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReleaseCashierLock(context.Background(), lockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReleaseCashierLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReleaseCashierLock`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReleaseCashierLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**lockId** | **string** | Unique ID of the lock. | 

### Other Parameters

Other parameters are passed through a pointer to a apiReleaseCashierLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReloadPrepaidCard

> ReloadPrepaidCardStatus ReloadPrepaidCard(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReloadPrepaidCard(reloadPrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to reload prepaid card.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reloadPrepaidCard := *openapiclient.NewReloadPrepaidCardRequest() // ReloadPrepaidCardRequest | Request type for reload prepaid card.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReloadPrepaidCard(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReloadPrepaidCard(reloadPrepaidCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReloadPrepaidCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReloadPrepaidCard`: ReloadPrepaidCardStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReloadPrepaidCard`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReloadPrepaidCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reloadPrepaidCard** | [**ReloadPrepaidCardRequest**](ReloadPrepaidCardRequest.md) | Request type for reload prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReloadPrepaidCardStatus**](ReloadPrepaidCardStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveBedTaxInfo

> Status RemoveBedTaxInfo(ctx, taxRegistraitionNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete bed tax information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    taxRegistraitionNo := "taxRegistraitionNo_example" // string | Unique number of the tax registration.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.RemoveBedTaxInfo(context.Background(), taxRegistraitionNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.RemoveBedTaxInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveBedTaxInfo`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.RemoveBedTaxInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taxRegistraitionNo** | **string** | Unique number of the tax registration. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveBedTaxInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveFixedCharges

> Status RemoveFixedCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedChargeID(fixedChargeID).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Fixed Charges 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fixedChargeID := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.RemoveFixedCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedChargeID(fixedChargeID).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.RemoveFixedCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFixedCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.RemoveFixedCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFixedChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fixedChargeID** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseARInvoice

> Status ReverseARInvoice(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReasonCode(reasonCode).CashierId(cashierId).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse AR Invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reasonCode := "reasonCode_example" // string | The reason code for the deletion. (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    transactionCodes := []float32{float32(123)} // []float32 | The unique transaction number of this transaction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseARInvoice(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReasonCode(reasonCode).CashierId(cashierId).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseARInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseARInvoice`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseARInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseARInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reasonCode** | **string** | The reason code for the deletion. | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **transactionCodes** | **[]float32** | The unique transaction number of this transaction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseCertificatePostings

> Status ReverseCertificatePostings(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseCertificatePostingsCriteria(reverseCertificatePostingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse certificate postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reverseCertificatePostingsCriteria := *openapiclient.NewReverseCertificatePostingsRequest() // ReverseCertificatePostingsRequest | Request to reverse the certificate postings of transactions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseCertificatePostings(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseCertificatePostingsCriteria(reverseCertificatePostingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseCertificatePostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseCertificatePostings`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseCertificatePostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseCertificatePostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reverseCertificatePostingsCriteria** | [**ReverseCertificatePostingsRequest**](ReverseCertificatePostingsRequest.md) | Request to reverse the certificate postings of transactions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseCompRedemptions

> Status ReverseCompRedemptions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseCompRedemptions(reverseCompRedemptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to reverse complimentary bucket redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reverseCompRedemptions := *openapiclient.NewReverseCompRedemptionsRequest() // ReverseCompRedemptionsRequest | Request type of Complimentary Bucket Redemptions reversal.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseCompRedemptions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseCompRedemptions(reverseCompRedemptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseCompRedemptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reverseCompRedemptions** | [**ReverseCompRedemptionsRequest**](ReverseCompRedemptionsRequest.md) | Request type of Complimentary Bucket Redemptions reversal. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseFlexibleBenefitPosting

> Status ReverseFlexibleBenefitPosting(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete flexible benefit postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseFlexibleBenefitPosting(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseFlexibleBenefitPosting``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseFlexibleBenefitPosting`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseFlexibleBenefitPosting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseFlexibleBenefitPostingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseFolioTaxPayment

> FolioTaxPaymentReversal ReverseFolioTaxPayment(ctx, cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionReversal(transactionReversal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change folio tax payments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    cashierId := "cashierId_example" // string | Unique ID of the cashier.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionReversal := *openapiclient.NewReverseFolioTaxPaymentRequest() // ReverseFolioTaxPaymentRequest | Request to reverse a Payment Tax record for Thailand Tax requirement.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseFolioTaxPayment(context.Background(), cashierId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionReversal(transactionReversal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseFolioTaxPayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseFolioTaxPayment`: FolioTaxPaymentReversal
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseFolioTaxPayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cashierId** | **string** | Unique ID of the cashier. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseFolioTaxPaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionReversal** | [**ReverseFolioTaxPaymentRequest**](ReverseFolioTaxPaymentRequest.md) | Request to reverse a Payment Tax record for Thailand Tax requirement. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTaxPaymentReversal**](FolioTaxPaymentReversal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitAndTransferTransaction

> Status SplitAndTransferTransaction(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToSplitAndTransfer(transactionToSplitAndTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Split and transfer transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionToSplitAndTransfer := *openapiclient.NewSplitAndTransferTransactionRequest() // SplitAndTransferTransactionRequest | Request to split a transaction on a reservation and transfer the new transaction to a different reservation or a different window on the same reservation. Splitting of transactions requires a Inhouse target reservation, a list of transactions for a Inhouse reservation and a valid amount or a percentage by which the amount can be split. Based on parameters, certain transactions cannot be split. Transaction which are included in an invoice cannot be split Transactions where the generates resides elsewhere(reservation or window) cannot be split. Automatically generated transactions such as taxes, cannot be split by itself. Deposits which were part of a deposit folio cannot be split. After the split is done the transaction is transferred to the target reservation/window.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.SplitAndTransferTransaction(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToSplitAndTransfer(transactionToSplitAndTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.SplitAndTransferTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitAndTransferTransaction`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.SplitAndTransferTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitAndTransferTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionToSplitAndTransfer** | [**SplitAndTransferTransactionRequest**](SplitAndTransferTransactionRequest.md) | Request to split a transaction on a reservation and transfer the new transaction to a different reservation or a different window on the same reservation. Splitting of transactions requires a Inhouse target reservation, a list of transactions for a Inhouse reservation and a valid amount or a percentage by which the amount can be split. Based on parameters, certain transactions cannot be split. Transaction which are included in an invoice cannot be split Transactions where the generates resides elsewhere(reservation or window) cannot be split. Automatically generated transactions such as taxes, cannot be split by itself. Deposits which were part of a deposit folio cannot be split. After the split is done the transaction is transferred to the target reservation/window. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitDepositTransaction

> SplitDepositTransactionStatus SplitDepositTransaction(ctx, transactionId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SplitDepositTransaction(splitDepositTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Split deposit transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    splitDepositTransaction := *openapiclient.NewSplitDepositTransactionRequest() // SplitDepositTransactionRequest | Request to split deposit transaction for a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.SplitDepositTransaction(context.Background(), transactionId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SplitDepositTransaction(splitDepositTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.SplitDepositTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitDepositTransaction`: SplitDepositTransactionStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.SplitDepositTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitDepositTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **splitDepositTransaction** | [**SplitDepositTransactionRequest**](SplitDepositTransactionRequest.md) | Request to split deposit transaction for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SplitDepositTransactionStatus**](SplitDepositTransactionStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SplitTransaction

> Status SplitTransaction(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToSplit(transactionToSplit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Split transactions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionToSplit := *openapiclient.NewSplitTransactionRequest() // SplitTransactionRequest | Request to split a transaction on a reservation. Splitting of transactions requires a list of transactions and a valid amount or a percentage by which the amount can be split. Based on parameters, certain transactions cannot be split. Transaction which are included in an invoice cannot be split Transactions where the generates resides elsewhere(reservation or window) cannot be split. Automatically generated transactions such as taxes, cannot be split by itself. Deposits which were part of a deposit folio cannot be split. After the split is done the transaction resides on the same folio window as the original transaction.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.SplitTransaction(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToSplit(transactionToSplit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.SplitTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitTransaction`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.SplitTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionToSplit** | [**SplitTransactionRequest**](SplitTransactionRequest.md) | Request to split a transaction on a reservation. Splitting of transactions requires a list of transactions and a valid amount or a percentage by which the amount can be split. Based on parameters, certain transactions cannot be split. Transaction which are included in an invoice cannot be split Transactions where the generates resides elsewhere(reservation or window) cannot be split. Automatically generated transactions such as taxes, cannot be split by itself. Deposits which were part of a deposit folio cannot be split. After the split is done the transaction resides on the same folio window as the original transaction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferCompTransactions

> Status TransferCompTransactions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferCompTransactions(transferCompTransactions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transfer comp transactions to window



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transferCompTransactions := *openapiclient.NewTransferCompTransactionsRequest() // TransferCompTransactionsRequest | Request object of comp transactions transfer.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.TransferCompTransactions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferCompTransactions(transferCompTransactions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.TransferCompTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferCompTransactions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.TransferCompTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferCompTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transferCompTransactions** | [**TransferCompTransactionsRequest**](TransferCompTransactionsRequest.md) | Request object of comp transactions transfer. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferFolioToWindow

> Status TransferFolioToWindow(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioToWindow(folioToWindow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transfer Folio to Window.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioToWindow := *openapiclient.NewTransferFolioToWindowRequest() // TransferFolioToWindowRequest | Request for transaction folio(s) to specific window
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.TransferFolioToWindow(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioToWindow(folioToWindow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.TransferFolioToWindow``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferFolioToWindow`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.TransferFolioToWindow`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferFolioToWindowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioToWindow** | [**TransferFolioToWindowRequest**](TransferFolioToWindowRequest.md) | Request for transaction folio(s) to specific window | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferTransactionToReservation

> Status TransferTransactionToReservation(ctx, toReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationTransaction(reservationTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transfer Transaction to Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    toReservationId := "toReservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationTransaction := *openapiclient.NewTransferTransactionToReservationRequest() // TransferTransactionToReservationRequest | Request to transfer a transaction(s) to a reservation. In the criteria, the target Reservation Id is required for the transfer.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.TransferTransactionToReservation(context.Background(), toReservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationTransaction(reservationTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.TransferTransactionToReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferTransactionToReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.TransferTransactionToReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toReservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferTransactionToReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationTransaction** | [**TransferTransactionToReservationRequest**](TransferTransactionToReservationRequest.md) | Request to transfer a transaction(s) to a reservation. In the criteria, the target Reservation Id is required for the transfer. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransferTransactionToWindow

> TransferTransactionToWindow TransferTransactionToWindow(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToWindow(transactionToWindow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transfer Transaction to Window



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionToWindow := *openapiclient.NewTransferTransactionToWindowRequest() // TransferTransactionToWindowRequest | Request for transaction transfer
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.TransferTransactionToWindow(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionToWindow(transactionToWindow).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.TransferTransactionToWindow``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferTransactionToWindow`: TransferTransactionToWindow
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.TransferTransactionToWindow`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferTransactionToWindowRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionToWindow** | [**TransferTransactionToWindowRequest**](TransferTransactionToWindowRequest.md) | Request for transaction transfer | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransferTransactionToWindow**](TransferTransactionToWindow.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## TransitionDepositToGuestFolio

> Status TransitionDepositToGuestFolio(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositToGuestFolio(depositToGuestFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transition Deposit to Guest Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositToGuestFolio := *openapiclient.NewTransitionDepositToGuestFolioRequest() // TransitionDepositToGuestFolioRequest | Request to post an existing deposit on a reservation to the Guest Folio for No Show or Cancelled Reservations. Deposits remain in the deposit ledger until Checkin/Checkout. In the case of No Show or Cancelled reservations they remain in the deposit ledger until this request is done.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.TransitionDepositToGuestFolio(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositToGuestFolio(depositToGuestFolio).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.TransitionDepositToGuestFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransitionDepositToGuestFolio`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.TransitionDepositToGuestFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransitionDepositToGuestFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositToGuestFolio** | [**TransitionDepositToGuestFolioRequest**](TransitionDepositToGuestFolioRequest.md) | Request to post an existing deposit on a reservation to the Guest Folio for No Show or Cancelled Reservations. Deposits remain in the deposit ledger until Checkin/Checkout. In the case of No Show or Cancelled reservations they remain in the deposit ledger until this request is done. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnlinkReservationPackageAllowance

> Status UnlinkReservationPackageAllowance(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Unlink reservation package allowance



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.UnlinkReservationPackageAllowance(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.UnlinkReservationPackageAllowance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UnlinkReservationPackageAllowance`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.UnlinkReservationPackageAllowance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnlinkReservationPackageAllowanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFixedCharges

> Status UpdateFixedCharges(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedCharges(fixedCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates Fixed Charges 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fixedCharges := *openapiclient.NewUpdateFixedChargesRequest() // UpdateFixedChargesRequest | Method to update fixed charges of a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.UpdateFixedCharges(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FixedCharges(fixedCharges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.UpdateFixedCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateFixedCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.UpdateFixedCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateFixedChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fixedCharges** | [**UpdateFixedChargesRequest**](UpdateFixedChargesRequest.md) | Method to update fixed charges of a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateCreditBill

> ValidatedCreditBill ValidateCreditBill(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditBillCriteria(creditBillCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Credit Bill



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditBillCriteria := *openapiclient.NewPostCreditBillRequest() // PostCreditBillRequest | Request to check if a Folio is valid for Credit Bill.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ValidateCreditBill(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditBillCriteria(creditBillCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ValidateCreditBill``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateCreditBill`: ValidatedCreditBill
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ValidateCreditBill`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateCreditBillRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditBillCriteria** | [**PostCreditBillRequest**](PostCreditBillRequest.md) | Request to check if a Folio is valid for Credit Bill. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidatedCreditBill**](ValidatedCreditBill.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateDepositFolio

> DepositedFolioValidate ValidateDepositFolio(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositFolioValidateCriteria(depositFolioValidateCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Deposit Folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    depositFolioValidateCriteria := *openapiclient.NewValidateDepositFolioRequest() // ValidateDepositFolioRequest | Request to validate a Deposit Folio for a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ValidateDepositFolio(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DepositFolioValidateCriteria(depositFolioValidateCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ValidateDepositFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateDepositFolio`: DepositedFolioValidate
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ValidateDepositFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateDepositFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **depositFolioValidateCriteria** | [**ValidateDepositFolioRequest**](ValidateDepositFolioRequest.md) | Request to validate a Deposit Folio for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DepositedFolioValidate**](DepositedFolioValidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateTransactionCodes

> ValidatedTransactionCode ValidateTransactionCodes(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Transaction Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    event := "event_example" // string | Event being generated by a Supplemental Folio. (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | The Fiscal Bill number of this posting (optional)
    folioDate := time.Now() // string | Date of Folio Generation. (optional)
    folioNo := float32(8.14) // float32 | Folio Number. (optional)
    folioStatus := "folioStatus_example" // string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := "folioTypeName_example" // string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ValidateTransactionCodes(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ValidateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateTransactionCodes`: ValidatedTransactionCode
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ValidateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **event** | **string** | Event being generated by a Supplemental Folio. | 
 **fiscalBillNo** | **string** | The Fiscal Bill number of this posting | 
 **folioDate** | **string** | Date of Folio Generation. | 
 **folioNo** | **float32** | Folio Number. | 
 **folioStatus** | **string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidatedTransactionCode**](ValidatedTransactionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyForEarlyDeparture

> EarlyDepartureInfo VerifyForEarlyDeparture(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IgnoreCheckOnTieredRate(ignoreCheckOnTieredRate).IgnoreRateRestriction(ignoreRateRestriction).PostConsumedAllowanceToGuest(postConsumedAllowanceToGuest).PostEarlyDeparturePenalty(postEarlyDeparturePenalty).CashierId(cashierId).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Verify for early Departure



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ignoreCheckOnTieredRate := true // bool | Indicates if check has to be done for Rate Tiers. (optional)
    ignoreRateRestriction := true // bool | Indicates if Rate Restriction check should be overridden. (optional)
    postConsumedAllowanceToGuest := true // bool | Indicates if any allowance consumed by the guest for today can be posted to the Guest Folio. If this cannot be done then the Early Departure cannot proceed. (optional)
    postEarlyDeparturePenalty := true // bool | Indicates if the early departure penalty should be posted . (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.VerifyForEarlyDeparture(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IgnoreCheckOnTieredRate(ignoreCheckOnTieredRate).IgnoreRateRestriction(ignoreRateRestriction).PostConsumedAllowanceToGuest(postConsumedAllowanceToGuest).PostEarlyDeparturePenalty(postEarlyDeparturePenalty).CashierId(cashierId).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.VerifyForEarlyDeparture``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyForEarlyDeparture`: EarlyDepartureInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.VerifyForEarlyDeparture`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique ID of the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyForEarlyDepartureRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ignoreCheckOnTieredRate** | **bool** | Indicates if check has to be done for Rate Tiers. | 
 **ignoreRateRestriction** | **bool** | Indicates if Rate Restriction check should be overridden. | 
 **postConsumedAllowanceToGuest** | **bool** | Indicates if any allowance consumed by the guest for today can be posted to the Guest Folio. If this cannot be done then the Early Departure cannot proceed. | 
 **postEarlyDeparturePenalty** | **bool** | Indicates if the early departure penalty should be posted . | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EarlyDepartureInfo**](EarlyDepartureInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VoidBillingCheckCharges

> Status VoidBillingCheckCharges(ctx, checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueDate(revenueDate).Amount(amount).CurrencyCode(currencyCode).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).CheckId(checkId).CheckIdContext(checkIdContext).CheckIdType(checkIdType).CashierId(cashierId).PostingRemark(postingRemark).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Billing Check Charges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    checkNumber := "checkNumber_example" // string | Unique number of the check.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueDate := time.Now() // string | The date against which void (reverse) charges are posted. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    checkId := "checkId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    checkIdContext := "checkIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    checkIdType := "checkIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    postingRemark := "postingRemark_example" // string | Text describing any applicable detail of the posting. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.VoidBillingCheckCharges(context.Background(), checkNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueDate(revenueDate).Amount(amount).CurrencyCode(currencyCode).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).CheckId(checkId).CheckIdContext(checkIdContext).CheckIdType(checkIdType).CashierId(cashierId).PostingRemark(postingRemark).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.VoidBillingCheckCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VoidBillingCheckCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.VoidBillingCheckCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**checkNumber** | **string** | Unique number of the check. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiVoidBillingCheckChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueDate** | **string** | The date against which void (reverse) charges are posted. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **checkId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **checkIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **checkIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **postingRemark** | **string** | Text describing any applicable detail of the posting. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VoidFolio

> VoidedFolio VoidFolio(ctx, folioId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioToVoid(folioToVoid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Void folio



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    folioId := "folioId_example" // string | Unique ID of the folio.
    reservationId := "reservationId_example" // string | Unique ID of the reservation.
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioToVoid := *openapiclient.NewVoidFolioRequest() // VoidFolioRequest | Request to Void a Guest Folio when the Void Functionality is active.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.VoidFolio(context.Background(), folioId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioToVoid(folioToVoid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.VoidFolio``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VoidFolio`: VoidedFolio
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.VoidFolio`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**folioId** | **string** | Unique ID of the folio. | 
**reservationId** | **string** | Unique ID of the reservation. | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiVoidFolioRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioToVoid** | [**VoidFolioRequest**](VoidFolioRequest.md) | Request to Void a Guest Folio when the Void Functionality is active. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**VoidedFolio**](VoidedFolio.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

