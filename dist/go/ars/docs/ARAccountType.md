# ARAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountIndicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 
**AccountName** | Pointer to **string** | Name of the AR Account. | [optional] 
**AccountNo** | Pointer to **string** | The Account Number for the Account. | [optional] 
**AccountTypeDescription** | Pointer to **string** | The description of the Account Type. | [optional] 
**Address** | Pointer to [**AddressInfoType**](AddressInfoType.md) |  | [optional] 
**AgingInfo** | Pointer to [**ARAgingInfoType**](ARAgingInfoType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**BatchStatement** | Pointer to **bool** | Include In Batch Statement | [optional] 
**ContactName** | Pointer to **string** | The person to contact for this Account. | [optional] 
**CreditLimit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Email** | Pointer to [**EmailInfoType**](EmailInfoType.md) |  | [optional] 
**EmailStatementsReminders** | Pointer to **bool** | Indicates if the Account has opted to send the statements and reminders to the Account email address by default. | [optional] 
**FixedCharges** | Pointer to [**[]FixedChargeType**](FixedChargeType.md) | Holds fixed charge detail. | [optional] 
**HotelId** | Pointer to **string** | Property where the AR Account exists. | [optional] 
**Invoices** | Pointer to [**[]ARInvoiceType**](ARInvoiceType.md) | A collection of AR Invoices. | [optional] 
**LastReminderInfo** | Pointer to [**ARAccountTypeLastReminderInfo**](ARAccountTypeLastReminderInfo.md) |  | [optional] 
**LastStatementInfo** | Pointer to [**ARAccountTypeLastStatementInfo**](ARAccountTypeLastStatementInfo.md) |  | [optional] 
**MonthEndCalcYN** | Pointer to **bool** | Month End Calculation. | [optional] 
**Notes** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | The Note details attached to the Account. | [optional] 
**PaymentDueDays** | Pointer to **string** | Number of days on which person can make payment. | [optional] 
**Payments** | Pointer to [**[]ARPaymentType**](ARPaymentType.md) | A collection of AR Payments. | [optional] 
**Permanent** | Pointer to **bool** | Indicates if this is a Permanent Account. Permanent Accounts cannot be deleted. | [optional] 
**Primary** | Pointer to **bool** | Indicates if this Account is the Primary Account for this Guest/Company. | [optional] 
**PrintFoliosWithStatement** | Pointer to **bool** | Indicates if associated folios should be printed by default with the statement. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**SearchMatches** | Pointer to [**[]SearchMatchType**](SearchMatchType.md) | List of Generic Name-Value-Pair Parameters used for super search matches. | [optional] 
**Status** | Pointer to [**ARAccountStatusType**](ARAccountStatusType.md) |  | [optional] 
**Summary** | Pointer to [**ARBalanceType**](ARBalanceType.md) |  | [optional] 
**Telephones** | Pointer to [**[]TelephoneInfoType**](TelephoneInfoType.md) | The Telephone and Fax details attached to the Account. | [optional] 
**Traces** | Pointer to [**[]TraceType**](TraceType.md) | The Trace details attached to the Account. | [optional] 
**Type** | Pointer to **string** | The type of Account. | [optional] 
**YearViewInfo** | Pointer to [**ARYearViewInfoType**](ARYearViewInfoType.md) |  | [optional] 

## Methods

### NewARAccountType

`func NewARAccountType() *ARAccountType`

NewARAccountType instantiates a new ARAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountTypeWithDefaults

`func NewARAccountTypeWithDefaults() *ARAccountType`

NewARAccountTypeWithDefaults instantiates a new ARAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ARAccountType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARAccountType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARAccountType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARAccountType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountIndicators

`func (o *ARAccountType) GetAccountIndicators() []IndicatorType`

GetAccountIndicators returns the AccountIndicators field if non-nil, zero value otherwise.

### GetAccountIndicatorsOk

`func (o *ARAccountType) GetAccountIndicatorsOk() (*[]IndicatorType, bool)`

GetAccountIndicatorsOk returns a tuple with the AccountIndicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIndicators

`func (o *ARAccountType) SetAccountIndicators(v []IndicatorType)`

SetAccountIndicators sets AccountIndicators field to given value.

### HasAccountIndicators

`func (o *ARAccountType) HasAccountIndicators() bool`

HasAccountIndicators returns a boolean if a field has been set.

### GetAccountName

`func (o *ARAccountType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ARAccountType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ARAccountType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ARAccountType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetAccountNo

`func (o *ARAccountType) GetAccountNo() string`

GetAccountNo returns the AccountNo field if non-nil, zero value otherwise.

### GetAccountNoOk

`func (o *ARAccountType) GetAccountNoOk() (*string, bool)`

GetAccountNoOk returns a tuple with the AccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNo

`func (o *ARAccountType) SetAccountNo(v string)`

SetAccountNo sets AccountNo field to given value.

### HasAccountNo

`func (o *ARAccountType) HasAccountNo() bool`

HasAccountNo returns a boolean if a field has been set.

### GetAccountTypeDescription

`func (o *ARAccountType) GetAccountTypeDescription() string`

GetAccountTypeDescription returns the AccountTypeDescription field if non-nil, zero value otherwise.

### GetAccountTypeDescriptionOk

`func (o *ARAccountType) GetAccountTypeDescriptionOk() (*string, bool)`

GetAccountTypeDescriptionOk returns a tuple with the AccountTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypeDescription

`func (o *ARAccountType) SetAccountTypeDescription(v string)`

SetAccountTypeDescription sets AccountTypeDescription field to given value.

### HasAccountTypeDescription

`func (o *ARAccountType) HasAccountTypeDescription() bool`

HasAccountTypeDescription returns a boolean if a field has been set.

### GetAddress

`func (o *ARAccountType) GetAddress() AddressInfoType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *ARAccountType) GetAddressOk() (*AddressInfoType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *ARAccountType) SetAddress(v AddressInfoType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *ARAccountType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAgingInfo

`func (o *ARAccountType) GetAgingInfo() ARAgingInfoType`

GetAgingInfo returns the AgingInfo field if non-nil, zero value otherwise.

### GetAgingInfoOk

`func (o *ARAccountType) GetAgingInfoOk() (*ARAgingInfoType, bool)`

GetAgingInfoOk returns a tuple with the AgingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgingInfo

`func (o *ARAccountType) SetAgingInfo(v ARAgingInfoType)`

SetAgingInfo sets AgingInfo field to given value.

### HasAgingInfo

`func (o *ARAccountType) HasAgingInfo() bool`

HasAgingInfo returns a boolean if a field has been set.

### GetBalance

`func (o *ARAccountType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARAccountType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARAccountType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARAccountType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetBatchStatement

`func (o *ARAccountType) GetBatchStatement() bool`

GetBatchStatement returns the BatchStatement field if non-nil, zero value otherwise.

### GetBatchStatementOk

`func (o *ARAccountType) GetBatchStatementOk() (*bool, bool)`

GetBatchStatementOk returns a tuple with the BatchStatement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBatchStatement

`func (o *ARAccountType) SetBatchStatement(v bool)`

SetBatchStatement sets BatchStatement field to given value.

### HasBatchStatement

`func (o *ARAccountType) HasBatchStatement() bool`

HasBatchStatement returns a boolean if a field has been set.

### GetContactName

`func (o *ARAccountType) GetContactName() string`

GetContactName returns the ContactName field if non-nil, zero value otherwise.

### GetContactNameOk

`func (o *ARAccountType) GetContactNameOk() (*string, bool)`

GetContactNameOk returns a tuple with the ContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactName

`func (o *ARAccountType) SetContactName(v string)`

SetContactName sets ContactName field to given value.

### HasContactName

`func (o *ARAccountType) HasContactName() bool`

HasContactName returns a boolean if a field has been set.

### GetCreditLimit

`func (o *ARAccountType) GetCreditLimit() CurrencyAmountType`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *ARAccountType) GetCreditLimitOk() (*CurrencyAmountType, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *ARAccountType) SetCreditLimit(v CurrencyAmountType)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *ARAccountType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetEmail

`func (o *ARAccountType) GetEmail() EmailInfoType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ARAccountType) GetEmailOk() (*EmailInfoType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ARAccountType) SetEmail(v EmailInfoType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ARAccountType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetEmailStatementsReminders

`func (o *ARAccountType) GetEmailStatementsReminders() bool`

GetEmailStatementsReminders returns the EmailStatementsReminders field if non-nil, zero value otherwise.

### GetEmailStatementsRemindersOk

`func (o *ARAccountType) GetEmailStatementsRemindersOk() (*bool, bool)`

GetEmailStatementsRemindersOk returns a tuple with the EmailStatementsReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailStatementsReminders

`func (o *ARAccountType) SetEmailStatementsReminders(v bool)`

SetEmailStatementsReminders sets EmailStatementsReminders field to given value.

### HasEmailStatementsReminders

`func (o *ARAccountType) HasEmailStatementsReminders() bool`

HasEmailStatementsReminders returns a boolean if a field has been set.

### GetFixedCharges

`func (o *ARAccountType) GetFixedCharges() []FixedChargeType`

GetFixedCharges returns the FixedCharges field if non-nil, zero value otherwise.

### GetFixedChargesOk

`func (o *ARAccountType) GetFixedChargesOk() (*[]FixedChargeType, bool)`

GetFixedChargesOk returns a tuple with the FixedCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFixedCharges

`func (o *ARAccountType) SetFixedCharges(v []FixedChargeType)`

SetFixedCharges sets FixedCharges field to given value.

### HasFixedCharges

`func (o *ARAccountType) HasFixedCharges() bool`

HasFixedCharges returns a boolean if a field has been set.

### GetHotelId

`func (o *ARAccountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAccountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAccountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAccountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvoices

`func (o *ARAccountType) GetInvoices() []ARInvoiceType`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARAccountType) GetInvoicesOk() (*[]ARInvoiceType, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARAccountType) SetInvoices(v []ARInvoiceType)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARAccountType) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetLastReminderInfo

`func (o *ARAccountType) GetLastReminderInfo() ARAccountTypeLastReminderInfo`

GetLastReminderInfo returns the LastReminderInfo field if non-nil, zero value otherwise.

### GetLastReminderInfoOk

`func (o *ARAccountType) GetLastReminderInfoOk() (*ARAccountTypeLastReminderInfo, bool)`

GetLastReminderInfoOk returns a tuple with the LastReminderInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastReminderInfo

`func (o *ARAccountType) SetLastReminderInfo(v ARAccountTypeLastReminderInfo)`

SetLastReminderInfo sets LastReminderInfo field to given value.

### HasLastReminderInfo

`func (o *ARAccountType) HasLastReminderInfo() bool`

HasLastReminderInfo returns a boolean if a field has been set.

### GetLastStatementInfo

`func (o *ARAccountType) GetLastStatementInfo() ARAccountTypeLastStatementInfo`

GetLastStatementInfo returns the LastStatementInfo field if non-nil, zero value otherwise.

### GetLastStatementInfoOk

`func (o *ARAccountType) GetLastStatementInfoOk() (*ARAccountTypeLastStatementInfo, bool)`

GetLastStatementInfoOk returns a tuple with the LastStatementInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastStatementInfo

`func (o *ARAccountType) SetLastStatementInfo(v ARAccountTypeLastStatementInfo)`

SetLastStatementInfo sets LastStatementInfo field to given value.

### HasLastStatementInfo

`func (o *ARAccountType) HasLastStatementInfo() bool`

HasLastStatementInfo returns a boolean if a field has been set.

### GetMonthEndCalcYN

`func (o *ARAccountType) GetMonthEndCalcYN() bool`

GetMonthEndCalcYN returns the MonthEndCalcYN field if non-nil, zero value otherwise.

### GetMonthEndCalcYNOk

`func (o *ARAccountType) GetMonthEndCalcYNOk() (*bool, bool)`

GetMonthEndCalcYNOk returns a tuple with the MonthEndCalcYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthEndCalcYN

`func (o *ARAccountType) SetMonthEndCalcYN(v bool)`

SetMonthEndCalcYN sets MonthEndCalcYN field to given value.

### HasMonthEndCalcYN

`func (o *ARAccountType) HasMonthEndCalcYN() bool`

HasMonthEndCalcYN returns a boolean if a field has been set.

### GetNotes

`func (o *ARAccountType) GetNotes() []CommentInfoType`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *ARAccountType) GetNotesOk() (*[]CommentInfoType, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *ARAccountType) SetNotes(v []CommentInfoType)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *ARAccountType) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetPaymentDueDays

`func (o *ARAccountType) GetPaymentDueDays() string`

GetPaymentDueDays returns the PaymentDueDays field if non-nil, zero value otherwise.

### GetPaymentDueDaysOk

`func (o *ARAccountType) GetPaymentDueDaysOk() (*string, bool)`

GetPaymentDueDaysOk returns a tuple with the PaymentDueDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentDueDays

`func (o *ARAccountType) SetPaymentDueDays(v string)`

SetPaymentDueDays sets PaymentDueDays field to given value.

### HasPaymentDueDays

`func (o *ARAccountType) HasPaymentDueDays() bool`

HasPaymentDueDays returns a boolean if a field has been set.

### GetPayments

`func (o *ARAccountType) GetPayments() []ARPaymentType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARAccountType) GetPaymentsOk() (*[]ARPaymentType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARAccountType) SetPayments(v []ARPaymentType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARAccountType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetPermanent

`func (o *ARAccountType) GetPermanent() bool`

GetPermanent returns the Permanent field if non-nil, zero value otherwise.

### GetPermanentOk

`func (o *ARAccountType) GetPermanentOk() (*bool, bool)`

GetPermanentOk returns a tuple with the Permanent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPermanent

`func (o *ARAccountType) SetPermanent(v bool)`

SetPermanent sets Permanent field to given value.

### HasPermanent

`func (o *ARAccountType) HasPermanent() bool`

HasPermanent returns a boolean if a field has been set.

### GetPrimary

`func (o *ARAccountType) GetPrimary() bool`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *ARAccountType) GetPrimaryOk() (*bool, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *ARAccountType) SetPrimary(v bool)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *ARAccountType) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetPrintFoliosWithStatement

`func (o *ARAccountType) GetPrintFoliosWithStatement() bool`

GetPrintFoliosWithStatement returns the PrintFoliosWithStatement field if non-nil, zero value otherwise.

### GetPrintFoliosWithStatementOk

`func (o *ARAccountType) GetPrintFoliosWithStatementOk() (*bool, bool)`

GetPrintFoliosWithStatementOk returns a tuple with the PrintFoliosWithStatement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintFoliosWithStatement

`func (o *ARAccountType) SetPrintFoliosWithStatement(v bool)`

SetPrintFoliosWithStatement sets PrintFoliosWithStatement field to given value.

### HasPrintFoliosWithStatement

`func (o *ARAccountType) HasPrintFoliosWithStatement() bool`

HasPrintFoliosWithStatement returns a boolean if a field has been set.

### GetProfileId

`func (o *ARAccountType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ARAccountType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ARAccountType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ARAccountType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetSearchMatches

`func (o *ARAccountType) GetSearchMatches() []SearchMatchType`

GetSearchMatches returns the SearchMatches field if non-nil, zero value otherwise.

### GetSearchMatchesOk

`func (o *ARAccountType) GetSearchMatchesOk() (*[]SearchMatchType, bool)`

GetSearchMatchesOk returns a tuple with the SearchMatches field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSearchMatches

`func (o *ARAccountType) SetSearchMatches(v []SearchMatchType)`

SetSearchMatches sets SearchMatches field to given value.

### HasSearchMatches

`func (o *ARAccountType) HasSearchMatches() bool`

HasSearchMatches returns a boolean if a field has been set.

### GetStatus

`func (o *ARAccountType) GetStatus() ARAccountStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ARAccountType) GetStatusOk() (*ARAccountStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ARAccountType) SetStatus(v ARAccountStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ARAccountType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetSummary

`func (o *ARAccountType) GetSummary() ARBalanceType`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *ARAccountType) GetSummaryOk() (*ARBalanceType, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *ARAccountType) SetSummary(v ARBalanceType)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *ARAccountType) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetTelephones

`func (o *ARAccountType) GetTelephones() []TelephoneInfoType`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ARAccountType) GetTelephonesOk() (*[]TelephoneInfoType, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ARAccountType) SetTelephones(v []TelephoneInfoType)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ARAccountType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetTraces

`func (o *ARAccountType) GetTraces() []TraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *ARAccountType) GetTracesOk() (*[]TraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *ARAccountType) SetTraces(v []TraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *ARAccountType) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetType

`func (o *ARAccountType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ARAccountType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ARAccountType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ARAccountType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetYearViewInfo

`func (o *ARAccountType) GetYearViewInfo() ARYearViewInfoType`

GetYearViewInfo returns the YearViewInfo field if non-nil, zero value otherwise.

### GetYearViewInfoOk

`func (o *ARAccountType) GetYearViewInfoOk() (*ARYearViewInfoType, bool)`

GetYearViewInfoOk returns a tuple with the YearViewInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYearViewInfo

`func (o *ARAccountType) SetYearViewInfo(v ARYearViewInfoType)`

SetYearViewInfo sets YearViewInfo field to given value.

### HasYearViewInfo

`func (o *ARAccountType) HasYearViewInfo() bool`

HasYearViewInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


