# ARInvoiceCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountNo** | Pointer to **string** | The Account Number for the Account. | [optional] 
**AdditionalFilter** | Pointer to [**ARInvoiceCriteriaTypeAdditionalFilter**](ARInvoiceCriteriaTypeAdditionalFilter.md) |  | [optional] 
**AddresseeInfo** | Pointer to [**ProfileInfoType**](ProfileInfoType.md) |  | [optional] 
**Adjusted** | Pointer to **bool** |  | [optional] 
**Age** | Pointer to **int32** | The Aging age of the invoice | [optional] 
**AllowPartialTransferYn** | Pointer to **bool** | Flag to check Partail Transfer Allowed. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CanBeModified** | Pointer to **bool** | Flag to indicate if postings or adjustments can be made to the invoice. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CashierInfo** | Pointer to [**CashierInfoType**](CashierInfoType.md) |  | [optional] 
**CloseDate** | Pointer to **string** | Close date of the invoice. | [optional] 
**Compressed** | Pointer to **bool** |  | [optional] 
**CompressedDate** | Pointer to **string** |  | [optional] 
**CustomNumbers** | Pointer to **[]string** | Unique Custom Numbers associated with this record. | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FiscalResponseType** | Pointer to [**FiscalResponseType**](FiscalResponseType.md) |  | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioTexts** | Pointer to [**[]FolioTextsTypeInner**](FolioTextsTypeInner.md) | This stores the description for the type of tax calculation especially with tax exemption, etc. | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**GuestName** | Pointer to **string** | Name of the Guest who consumed these transactions. | [optional] 
**GuestProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property where the invoice exists. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**InvoiceType** | Pointer to [**ARInvoiceCategory**](ARInvoiceCategory.md) |  | [optional] 
**Market** | Pointer to [**MarketCodeInfoType**](MarketCodeInfoType.md) |  | [optional] 
**OriginalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ParentInvoiceNo** | Pointer to **float32** |  | [optional] 
**PaymentCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**Payments** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingDate** | Pointer to **string** | Posting date of the invoice. | [optional] 
**Printed** | Pointer to **bool** | Flag to check Invoice Statement is Printed. | [optional] 
**PrintedDate** | Pointer to **string** | Invoice Statement Printed Date. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | User-defined posting remark. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**RevenueDate** | Pointer to **string** | Revenue date ID of the invoice. | [optional] 
**RoomClass** | Pointer to [**RoomClassCodeInfoType**](RoomClassCodeInfoType.md) |  | [optional] 
**Source** | Pointer to [**SourceCodeInfoType**](SourceCodeInfoType.md) |  | [optional] 
**StatementNo** | Pointer to **int32** | Statementno of the invoice. | [optional] 
**Status** | Pointer to **string** | Status of the invoice. | [optional] 
**StoredDebitFolioId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**StoredDebitFolioName** | Pointer to **string** | Name of the Stored Debit Folio. | [optional] 
**StoredFolioId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**StoredFolioName** | Pointer to **string** | Name of the Stored Folio. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code of the invoice. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date of the invoice. | [optional] 
**TransactionInfo** | Pointer to [**TrxInfoType**](TrxInfoType.md) |  | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier of the Invoice. | [optional] 
**TransferDate** | Pointer to **string** | Transfer date of the invoice. | [optional] 
**TransferredIn** | Pointer to **bool** |  | [optional] 
**TransferredOut** | Pointer to **bool** |  | [optional] 

## Methods

### NewARInvoiceCriteriaType

`func NewARInvoiceCriteriaType() *ARInvoiceCriteriaType`

NewARInvoiceCriteriaType instantiates a new ARInvoiceCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARInvoiceCriteriaTypeWithDefaults

`func NewARInvoiceCriteriaTypeWithDefaults() *ARInvoiceCriteriaType`

NewARInvoiceCriteriaTypeWithDefaults instantiates a new ARInvoiceCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *ARInvoiceCriteriaType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARInvoiceCriteriaType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARInvoiceCriteriaType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARInvoiceCriteriaType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountNo

`func (o *ARInvoiceCriteriaType) GetAccountNo() string`

GetAccountNo returns the AccountNo field if non-nil, zero value otherwise.

### GetAccountNoOk

`func (o *ARInvoiceCriteriaType) GetAccountNoOk() (*string, bool)`

GetAccountNoOk returns a tuple with the AccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountNo

`func (o *ARInvoiceCriteriaType) SetAccountNo(v string)`

SetAccountNo sets AccountNo field to given value.

### HasAccountNo

`func (o *ARInvoiceCriteriaType) HasAccountNo() bool`

HasAccountNo returns a boolean if a field has been set.

### GetAdditionalFilter

`func (o *ARInvoiceCriteriaType) GetAdditionalFilter() ARInvoiceCriteriaTypeAdditionalFilter`

GetAdditionalFilter returns the AdditionalFilter field if non-nil, zero value otherwise.

### GetAdditionalFilterOk

`func (o *ARInvoiceCriteriaType) GetAdditionalFilterOk() (*ARInvoiceCriteriaTypeAdditionalFilter, bool)`

GetAdditionalFilterOk returns a tuple with the AdditionalFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalFilter

`func (o *ARInvoiceCriteriaType) SetAdditionalFilter(v ARInvoiceCriteriaTypeAdditionalFilter)`

SetAdditionalFilter sets AdditionalFilter field to given value.

### HasAdditionalFilter

`func (o *ARInvoiceCriteriaType) HasAdditionalFilter() bool`

HasAdditionalFilter returns a boolean if a field has been set.

### GetAddresseeInfo

`func (o *ARInvoiceCriteriaType) GetAddresseeInfo() ProfileInfoType`

GetAddresseeInfo returns the AddresseeInfo field if non-nil, zero value otherwise.

### GetAddresseeInfoOk

`func (o *ARInvoiceCriteriaType) GetAddresseeInfoOk() (*ProfileInfoType, bool)`

GetAddresseeInfoOk returns a tuple with the AddresseeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresseeInfo

`func (o *ARInvoiceCriteriaType) SetAddresseeInfo(v ProfileInfoType)`

SetAddresseeInfo sets AddresseeInfo field to given value.

### HasAddresseeInfo

`func (o *ARInvoiceCriteriaType) HasAddresseeInfo() bool`

HasAddresseeInfo returns a boolean if a field has been set.

### GetAdjusted

`func (o *ARInvoiceCriteriaType) GetAdjusted() bool`

GetAdjusted returns the Adjusted field if non-nil, zero value otherwise.

### GetAdjustedOk

`func (o *ARInvoiceCriteriaType) GetAdjustedOk() (*bool, bool)`

GetAdjustedOk returns a tuple with the Adjusted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjusted

`func (o *ARInvoiceCriteriaType) SetAdjusted(v bool)`

SetAdjusted sets Adjusted field to given value.

### HasAdjusted

`func (o *ARInvoiceCriteriaType) HasAdjusted() bool`

HasAdjusted returns a boolean if a field has been set.

### GetAge

`func (o *ARInvoiceCriteriaType) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARInvoiceCriteriaType) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARInvoiceCriteriaType) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARInvoiceCriteriaType) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetAllowPartialTransferYn

`func (o *ARInvoiceCriteriaType) GetAllowPartialTransferYn() bool`

GetAllowPartialTransferYn returns the AllowPartialTransferYn field if non-nil, zero value otherwise.

### GetAllowPartialTransferYnOk

`func (o *ARInvoiceCriteriaType) GetAllowPartialTransferYnOk() (*bool, bool)`

GetAllowPartialTransferYnOk returns a tuple with the AllowPartialTransferYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPartialTransferYn

`func (o *ARInvoiceCriteriaType) SetAllowPartialTransferYn(v bool)`

SetAllowPartialTransferYn sets AllowPartialTransferYn field to given value.

### HasAllowPartialTransferYn

`func (o *ARInvoiceCriteriaType) HasAllowPartialTransferYn() bool`

HasAllowPartialTransferYn returns a boolean if a field has been set.

### GetAmount

`func (o *ARInvoiceCriteriaType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ARInvoiceCriteriaType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ARInvoiceCriteriaType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ARInvoiceCriteriaType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetBalance

`func (o *ARInvoiceCriteriaType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARInvoiceCriteriaType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARInvoiceCriteriaType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARInvoiceCriteriaType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCanBeModified

`func (o *ARInvoiceCriteriaType) GetCanBeModified() bool`

GetCanBeModified returns the CanBeModified field if non-nil, zero value otherwise.

### GetCanBeModifiedOk

`func (o *ARInvoiceCriteriaType) GetCanBeModifiedOk() (*bool, bool)`

GetCanBeModifiedOk returns a tuple with the CanBeModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanBeModified

`func (o *ARInvoiceCriteriaType) SetCanBeModified(v bool)`

SetCanBeModified sets CanBeModified field to given value.

### HasCanBeModified

`func (o *ARInvoiceCriteriaType) HasCanBeModified() bool`

HasCanBeModified returns a boolean if a field has been set.

### GetCashierId

`func (o *ARInvoiceCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARInvoiceCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARInvoiceCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARInvoiceCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCashierInfo

`func (o *ARInvoiceCriteriaType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *ARInvoiceCriteriaType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *ARInvoiceCriteriaType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *ARInvoiceCriteriaType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetCloseDate

`func (o *ARInvoiceCriteriaType) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *ARInvoiceCriteriaType) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *ARInvoiceCriteriaType) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *ARInvoiceCriteriaType) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetCompressed

`func (o *ARInvoiceCriteriaType) GetCompressed() bool`

GetCompressed returns the Compressed field if non-nil, zero value otherwise.

### GetCompressedOk

`func (o *ARInvoiceCriteriaType) GetCompressedOk() (*bool, bool)`

GetCompressedOk returns a tuple with the Compressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressed

`func (o *ARInvoiceCriteriaType) SetCompressed(v bool)`

SetCompressed sets Compressed field to given value.

### HasCompressed

`func (o *ARInvoiceCriteriaType) HasCompressed() bool`

HasCompressed returns a boolean if a field has been set.

### GetCompressedDate

`func (o *ARInvoiceCriteriaType) GetCompressedDate() string`

GetCompressedDate returns the CompressedDate field if non-nil, zero value otherwise.

### GetCompressedDateOk

`func (o *ARInvoiceCriteriaType) GetCompressedDateOk() (*string, bool)`

GetCompressedDateOk returns a tuple with the CompressedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressedDate

`func (o *ARInvoiceCriteriaType) SetCompressedDate(v string)`

SetCompressedDate sets CompressedDate field to given value.

### HasCompressedDate

`func (o *ARInvoiceCriteriaType) HasCompressedDate() bool`

HasCompressedDate returns a boolean if a field has been set.

### GetCustomNumbers

`func (o *ARInvoiceCriteriaType) GetCustomNumbers() []string`

GetCustomNumbers returns the CustomNumbers field if non-nil, zero value otherwise.

### GetCustomNumbersOk

`func (o *ARInvoiceCriteriaType) GetCustomNumbersOk() (*[]string, bool)`

GetCustomNumbersOk returns a tuple with the CustomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumbers

`func (o *ARInvoiceCriteriaType) SetCustomNumbers(v []string)`

SetCustomNumbers sets CustomNumbers field to given value.

### HasCustomNumbers

`func (o *ARInvoiceCriteriaType) HasCustomNumbers() bool`

HasCustomNumbers returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *ARInvoiceCriteriaType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *ARInvoiceCriteriaType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *ARInvoiceCriteriaType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *ARInvoiceCriteriaType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFiscalResponseType

`func (o *ARInvoiceCriteriaType) GetFiscalResponseType() FiscalResponseType`

GetFiscalResponseType returns the FiscalResponseType field if non-nil, zero value otherwise.

### GetFiscalResponseTypeOk

`func (o *ARInvoiceCriteriaType) GetFiscalResponseTypeOk() (*FiscalResponseType, bool)`

GetFiscalResponseTypeOk returns a tuple with the FiscalResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalResponseType

`func (o *ARInvoiceCriteriaType) SetFiscalResponseType(v FiscalResponseType)`

SetFiscalResponseType sets FiscalResponseType field to given value.

### HasFiscalResponseType

`func (o *ARInvoiceCriteriaType) HasFiscalResponseType() bool`

HasFiscalResponseType returns a boolean if a field has been set.

### GetFolioDate

`func (o *ARInvoiceCriteriaType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *ARInvoiceCriteriaType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *ARInvoiceCriteriaType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *ARInvoiceCriteriaType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *ARInvoiceCriteriaType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ARInvoiceCriteriaType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ARInvoiceCriteriaType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ARInvoiceCriteriaType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *ARInvoiceCriteriaType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *ARInvoiceCriteriaType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *ARInvoiceCriteriaType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *ARInvoiceCriteriaType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioStatus

`func (o *ARInvoiceCriteriaType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *ARInvoiceCriteriaType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *ARInvoiceCriteriaType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *ARInvoiceCriteriaType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioTexts

`func (o *ARInvoiceCriteriaType) GetFolioTexts() []FolioTextsTypeInner`

GetFolioTexts returns the FolioTexts field if non-nil, zero value otherwise.

### GetFolioTextsOk

`func (o *ARInvoiceCriteriaType) GetFolioTextsOk() (*[]FolioTextsTypeInner, bool)`

GetFolioTextsOk returns a tuple with the FolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTexts

`func (o *ARInvoiceCriteriaType) SetFolioTexts(v []FolioTextsTypeInner)`

SetFolioTexts sets FolioTexts field to given value.

### HasFolioTexts

`func (o *ARInvoiceCriteriaType) HasFolioTexts() bool`

HasFolioTexts returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ARInvoiceCriteriaType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ARInvoiceCriteriaType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ARInvoiceCriteriaType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ARInvoiceCriteriaType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetGuestName

`func (o *ARInvoiceCriteriaType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ARInvoiceCriteriaType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ARInvoiceCriteriaType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ARInvoiceCriteriaType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetGuestProfileId

`func (o *ARInvoiceCriteriaType) GetGuestProfileId() UniqueIDType`

GetGuestProfileId returns the GuestProfileId field if non-nil, zero value otherwise.

### GetGuestProfileIdOk

`func (o *ARInvoiceCriteriaType) GetGuestProfileIdOk() (*UniqueIDType, bool)`

GetGuestProfileIdOk returns a tuple with the GuestProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestProfileId

`func (o *ARInvoiceCriteriaType) SetGuestProfileId(v UniqueIDType)`

SetGuestProfileId sets GuestProfileId field to given value.

### HasGuestProfileId

`func (o *ARInvoiceCriteriaType) HasGuestProfileId() bool`

HasGuestProfileId returns a boolean if a field has been set.

### GetHotelId

`func (o *ARInvoiceCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARInvoiceCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARInvoiceCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARInvoiceCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *ARInvoiceCriteriaType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *ARInvoiceCriteriaType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *ARInvoiceCriteriaType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *ARInvoiceCriteriaType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *ARInvoiceCriteriaType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *ARInvoiceCriteriaType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *ARInvoiceCriteriaType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *ARInvoiceCriteriaType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetInvoiceType

`func (o *ARInvoiceCriteriaType) GetInvoiceType() ARInvoiceCategory`

GetInvoiceType returns the InvoiceType field if non-nil, zero value otherwise.

### GetInvoiceTypeOk

`func (o *ARInvoiceCriteriaType) GetInvoiceTypeOk() (*ARInvoiceCategory, bool)`

GetInvoiceTypeOk returns a tuple with the InvoiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceType

`func (o *ARInvoiceCriteriaType) SetInvoiceType(v ARInvoiceCategory)`

SetInvoiceType sets InvoiceType field to given value.

### HasInvoiceType

`func (o *ARInvoiceCriteriaType) HasInvoiceType() bool`

HasInvoiceType returns a boolean if a field has been set.

### GetMarket

`func (o *ARInvoiceCriteriaType) GetMarket() MarketCodeInfoType`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *ARInvoiceCriteriaType) GetMarketOk() (*MarketCodeInfoType, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *ARInvoiceCriteriaType) SetMarket(v MarketCodeInfoType)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *ARInvoiceCriteriaType) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *ARInvoiceCriteriaType) GetOriginalAmount() CurrencyAmountType`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *ARInvoiceCriteriaType) GetOriginalAmountOk() (*CurrencyAmountType, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *ARInvoiceCriteriaType) SetOriginalAmount(v CurrencyAmountType)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *ARInvoiceCriteriaType) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetParentInvoiceNo

`func (o *ARInvoiceCriteriaType) GetParentInvoiceNo() float32`

GetParentInvoiceNo returns the ParentInvoiceNo field if non-nil, zero value otherwise.

### GetParentInvoiceNoOk

`func (o *ARInvoiceCriteriaType) GetParentInvoiceNoOk() (*float32, bool)`

GetParentInvoiceNoOk returns a tuple with the ParentInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentInvoiceNo

`func (o *ARInvoiceCriteriaType) SetParentInvoiceNo(v float32)`

SetParentInvoiceNo sets ParentInvoiceNo field to given value.

### HasParentInvoiceNo

`func (o *ARInvoiceCriteriaType) HasParentInvoiceNo() bool`

HasParentInvoiceNo returns a boolean if a field has been set.

### GetPaymentCard

`func (o *ARInvoiceCriteriaType) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *ARInvoiceCriteriaType) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *ARInvoiceCriteriaType) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *ARInvoiceCriteriaType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPayments

`func (o *ARInvoiceCriteriaType) GetPayments() CurrencyAmountType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARInvoiceCriteriaType) GetPaymentsOk() (*CurrencyAmountType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARInvoiceCriteriaType) SetPayments(v CurrencyAmountType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARInvoiceCriteriaType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARInvoiceCriteriaType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARInvoiceCriteriaType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARInvoiceCriteriaType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARInvoiceCriteriaType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetPrinted

`func (o *ARInvoiceCriteriaType) GetPrinted() bool`

GetPrinted returns the Printed field if non-nil, zero value otherwise.

### GetPrintedOk

`func (o *ARInvoiceCriteriaType) GetPrintedOk() (*bool, bool)`

GetPrintedOk returns a tuple with the Printed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinted

`func (o *ARInvoiceCriteriaType) SetPrinted(v bool)`

SetPrinted sets Printed field to given value.

### HasPrinted

`func (o *ARInvoiceCriteriaType) HasPrinted() bool`

HasPrinted returns a boolean if a field has been set.

### GetPrintedDate

`func (o *ARInvoiceCriteriaType) GetPrintedDate() string`

GetPrintedDate returns the PrintedDate field if non-nil, zero value otherwise.

### GetPrintedDateOk

`func (o *ARInvoiceCriteriaType) GetPrintedDateOk() (*string, bool)`

GetPrintedDateOk returns a tuple with the PrintedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintedDate

`func (o *ARInvoiceCriteriaType) SetPrintedDate(v string)`

SetPrintedDate sets PrintedDate field to given value.

### HasPrintedDate

`func (o *ARInvoiceCriteriaType) HasPrintedDate() bool`

HasPrintedDate returns a boolean if a field has been set.

### GetProfileId

`func (o *ARInvoiceCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ARInvoiceCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ARInvoiceCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ARInvoiceCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReference

`func (o *ARInvoiceCriteriaType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARInvoiceCriteriaType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARInvoiceCriteriaType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARInvoiceCriteriaType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARInvoiceCriteriaType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARInvoiceCriteriaType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARInvoiceCriteriaType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARInvoiceCriteriaType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetReservationId

`func (o *ARInvoiceCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ARInvoiceCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ARInvoiceCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ARInvoiceCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ARInvoiceCriteriaType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ARInvoiceCriteriaType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ARInvoiceCriteriaType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ARInvoiceCriteriaType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ARInvoiceCriteriaType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ARInvoiceCriteriaType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ARInvoiceCriteriaType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ARInvoiceCriteriaType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetRoomClass

`func (o *ARInvoiceCriteriaType) GetRoomClass() RoomClassCodeInfoType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *ARInvoiceCriteriaType) GetRoomClassOk() (*RoomClassCodeInfoType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *ARInvoiceCriteriaType) SetRoomClass(v RoomClassCodeInfoType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *ARInvoiceCriteriaType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetSource

`func (o *ARInvoiceCriteriaType) GetSource() SourceCodeInfoType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ARInvoiceCriteriaType) GetSourceOk() (*SourceCodeInfoType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ARInvoiceCriteriaType) SetSource(v SourceCodeInfoType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ARInvoiceCriteriaType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetStatementNo

`func (o *ARInvoiceCriteriaType) GetStatementNo() int32`

GetStatementNo returns the StatementNo field if non-nil, zero value otherwise.

### GetStatementNoOk

`func (o *ARInvoiceCriteriaType) GetStatementNoOk() (*int32, bool)`

GetStatementNoOk returns a tuple with the StatementNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNo

`func (o *ARInvoiceCriteriaType) SetStatementNo(v int32)`

SetStatementNo sets StatementNo field to given value.

### HasStatementNo

`func (o *ARInvoiceCriteriaType) HasStatementNo() bool`

HasStatementNo returns a boolean if a field has been set.

### GetStatus

`func (o *ARInvoiceCriteriaType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ARInvoiceCriteriaType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ARInvoiceCriteriaType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ARInvoiceCriteriaType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStoredDebitFolioId

`func (o *ARInvoiceCriteriaType) GetStoredDebitFolioId() UniqueIDType`

GetStoredDebitFolioId returns the StoredDebitFolioId field if non-nil, zero value otherwise.

### GetStoredDebitFolioIdOk

`func (o *ARInvoiceCriteriaType) GetStoredDebitFolioIdOk() (*UniqueIDType, bool)`

GetStoredDebitFolioIdOk returns a tuple with the StoredDebitFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioId

`func (o *ARInvoiceCriteriaType) SetStoredDebitFolioId(v UniqueIDType)`

SetStoredDebitFolioId sets StoredDebitFolioId field to given value.

### HasStoredDebitFolioId

`func (o *ARInvoiceCriteriaType) HasStoredDebitFolioId() bool`

HasStoredDebitFolioId returns a boolean if a field has been set.

### GetStoredDebitFolioName

`func (o *ARInvoiceCriteriaType) GetStoredDebitFolioName() string`

GetStoredDebitFolioName returns the StoredDebitFolioName field if non-nil, zero value otherwise.

### GetStoredDebitFolioNameOk

`func (o *ARInvoiceCriteriaType) GetStoredDebitFolioNameOk() (*string, bool)`

GetStoredDebitFolioNameOk returns a tuple with the StoredDebitFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioName

`func (o *ARInvoiceCriteriaType) SetStoredDebitFolioName(v string)`

SetStoredDebitFolioName sets StoredDebitFolioName field to given value.

### HasStoredDebitFolioName

`func (o *ARInvoiceCriteriaType) HasStoredDebitFolioName() bool`

HasStoredDebitFolioName returns a boolean if a field has been set.

### GetStoredFolioId

`func (o *ARInvoiceCriteriaType) GetStoredFolioId() UniqueIDType`

GetStoredFolioId returns the StoredFolioId field if non-nil, zero value otherwise.

### GetStoredFolioIdOk

`func (o *ARInvoiceCriteriaType) GetStoredFolioIdOk() (*UniqueIDType, bool)`

GetStoredFolioIdOk returns a tuple with the StoredFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioId

`func (o *ARInvoiceCriteriaType) SetStoredFolioId(v UniqueIDType)`

SetStoredFolioId sets StoredFolioId field to given value.

### HasStoredFolioId

`func (o *ARInvoiceCriteriaType) HasStoredFolioId() bool`

HasStoredFolioId returns a boolean if a field has been set.

### GetStoredFolioName

`func (o *ARInvoiceCriteriaType) GetStoredFolioName() string`

GetStoredFolioName returns the StoredFolioName field if non-nil, zero value otherwise.

### GetStoredFolioNameOk

`func (o *ARInvoiceCriteriaType) GetStoredFolioNameOk() (*string, bool)`

GetStoredFolioNameOk returns a tuple with the StoredFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioName

`func (o *ARInvoiceCriteriaType) SetStoredFolioName(v string)`

SetStoredFolioName sets StoredFolioName field to given value.

### HasStoredFolioName

`func (o *ARInvoiceCriteriaType) HasStoredFolioName() bool`

HasStoredFolioName returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARInvoiceCriteriaType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARInvoiceCriteriaType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARInvoiceCriteriaType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARInvoiceCriteriaType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARInvoiceCriteriaType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARInvoiceCriteriaType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARInvoiceCriteriaType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARInvoiceCriteriaType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionInfo

`func (o *ARInvoiceCriteriaType) GetTransactionInfo() TrxInfoType`

GetTransactionInfo returns the TransactionInfo field if non-nil, zero value otherwise.

### GetTransactionInfoOk

`func (o *ARInvoiceCriteriaType) GetTransactionInfoOk() (*TrxInfoType, bool)`

GetTransactionInfoOk returns a tuple with the TransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionInfo

`func (o *ARInvoiceCriteriaType) SetTransactionInfo(v TrxInfoType)`

SetTransactionInfo sets TransactionInfo field to given value.

### HasTransactionInfo

`func (o *ARInvoiceCriteriaType) HasTransactionInfo() bool`

HasTransactionInfo returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARInvoiceCriteriaType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARInvoiceCriteriaType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARInvoiceCriteriaType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARInvoiceCriteriaType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransferDate

`func (o *ARInvoiceCriteriaType) GetTransferDate() string`

GetTransferDate returns the TransferDate field if non-nil, zero value otherwise.

### GetTransferDateOk

`func (o *ARInvoiceCriteriaType) GetTransferDateOk() (*string, bool)`

GetTransferDateOk returns a tuple with the TransferDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferDate

`func (o *ARInvoiceCriteriaType) SetTransferDate(v string)`

SetTransferDate sets TransferDate field to given value.

### HasTransferDate

`func (o *ARInvoiceCriteriaType) HasTransferDate() bool`

HasTransferDate returns a boolean if a field has been set.

### GetTransferredIn

`func (o *ARInvoiceCriteriaType) GetTransferredIn() bool`

GetTransferredIn returns the TransferredIn field if non-nil, zero value otherwise.

### GetTransferredInOk

`func (o *ARInvoiceCriteriaType) GetTransferredInOk() (*bool, bool)`

GetTransferredInOk returns a tuple with the TransferredIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredIn

`func (o *ARInvoiceCriteriaType) SetTransferredIn(v bool)`

SetTransferredIn sets TransferredIn field to given value.

### HasTransferredIn

`func (o *ARInvoiceCriteriaType) HasTransferredIn() bool`

HasTransferredIn returns a boolean if a field has been set.

### GetTransferredOut

`func (o *ARInvoiceCriteriaType) GetTransferredOut() bool`

GetTransferredOut returns the TransferredOut field if non-nil, zero value otherwise.

### GetTransferredOutOk

`func (o *ARInvoiceCriteriaType) GetTransferredOutOk() (*bool, bool)`

GetTransferredOutOk returns a tuple with the TransferredOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredOut

`func (o *ARInvoiceCriteriaType) SetTransferredOut(v bool)`

SetTransferredOut sets TransferredOut field to given value.

### HasTransferredOut

`func (o *ARInvoiceCriteriaType) HasTransferredOut() bool`

HasTransferredOut returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


