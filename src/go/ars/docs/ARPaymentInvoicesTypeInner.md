# ARPaymentInvoicesTypeInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AddresseeInfo** | Pointer to [**ProfileInfoType**](ProfileInfoType.md) |  | [optional] 
**Adjusted** | Pointer to **bool** |  | [optional] 
**Age** | Pointer to **int32** | The Aging age of the invoice | [optional] 
**AllowPartialTransferYn** | Pointer to **bool** | Flag to check Partail Transfer Allowed. | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AmountToApply** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CanBeModified** | Pointer to **bool** | Flag to indicate if postings or adjustments can be made to the invoice. | [optional] 
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
**FolioTexts** | Pointer to [**FolioTextsType**](FolioTextsType.md) |  | [optional] 
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

### NewARPaymentInvoicesTypeInner

`func NewARPaymentInvoicesTypeInner() *ARPaymentInvoicesTypeInner`

NewARPaymentInvoicesTypeInner instantiates a new ARPaymentInvoicesTypeInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARPaymentInvoicesTypeInnerWithDefaults

`func NewARPaymentInvoicesTypeInnerWithDefaults() *ARPaymentInvoicesTypeInner`

NewARPaymentInvoicesTypeInnerWithDefaults instantiates a new ARPaymentInvoicesTypeInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddresseeInfo

`func (o *ARPaymentInvoicesTypeInner) GetAddresseeInfo() ProfileInfoType`

GetAddresseeInfo returns the AddresseeInfo field if non-nil, zero value otherwise.

### GetAddresseeInfoOk

`func (o *ARPaymentInvoicesTypeInner) GetAddresseeInfoOk() (*ProfileInfoType, bool)`

GetAddresseeInfoOk returns a tuple with the AddresseeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresseeInfo

`func (o *ARPaymentInvoicesTypeInner) SetAddresseeInfo(v ProfileInfoType)`

SetAddresseeInfo sets AddresseeInfo field to given value.

### HasAddresseeInfo

`func (o *ARPaymentInvoicesTypeInner) HasAddresseeInfo() bool`

HasAddresseeInfo returns a boolean if a field has been set.

### GetAdjusted

`func (o *ARPaymentInvoicesTypeInner) GetAdjusted() bool`

GetAdjusted returns the Adjusted field if non-nil, zero value otherwise.

### GetAdjustedOk

`func (o *ARPaymentInvoicesTypeInner) GetAdjustedOk() (*bool, bool)`

GetAdjustedOk returns a tuple with the Adjusted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjusted

`func (o *ARPaymentInvoicesTypeInner) SetAdjusted(v bool)`

SetAdjusted sets Adjusted field to given value.

### HasAdjusted

`func (o *ARPaymentInvoicesTypeInner) HasAdjusted() bool`

HasAdjusted returns a boolean if a field has been set.

### GetAge

`func (o *ARPaymentInvoicesTypeInner) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARPaymentInvoicesTypeInner) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARPaymentInvoicesTypeInner) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARPaymentInvoicesTypeInner) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetAllowPartialTransferYn

`func (o *ARPaymentInvoicesTypeInner) GetAllowPartialTransferYn() bool`

GetAllowPartialTransferYn returns the AllowPartialTransferYn field if non-nil, zero value otherwise.

### GetAllowPartialTransferYnOk

`func (o *ARPaymentInvoicesTypeInner) GetAllowPartialTransferYnOk() (*bool, bool)`

GetAllowPartialTransferYnOk returns a tuple with the AllowPartialTransferYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPartialTransferYn

`func (o *ARPaymentInvoicesTypeInner) SetAllowPartialTransferYn(v bool)`

SetAllowPartialTransferYn sets AllowPartialTransferYn field to given value.

### HasAllowPartialTransferYn

`func (o *ARPaymentInvoicesTypeInner) HasAllowPartialTransferYn() bool`

HasAllowPartialTransferYn returns a boolean if a field has been set.

### GetAmount

`func (o *ARPaymentInvoicesTypeInner) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ARPaymentInvoicesTypeInner) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ARPaymentInvoicesTypeInner) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ARPaymentInvoicesTypeInner) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetAmountToApply

`func (o *ARPaymentInvoicesTypeInner) GetAmountToApply() CurrencyAmountType`

GetAmountToApply returns the AmountToApply field if non-nil, zero value otherwise.

### GetAmountToApplyOk

`func (o *ARPaymentInvoicesTypeInner) GetAmountToApplyOk() (*CurrencyAmountType, bool)`

GetAmountToApplyOk returns a tuple with the AmountToApply field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountToApply

`func (o *ARPaymentInvoicesTypeInner) SetAmountToApply(v CurrencyAmountType)`

SetAmountToApply sets AmountToApply field to given value.

### HasAmountToApply

`func (o *ARPaymentInvoicesTypeInner) HasAmountToApply() bool`

HasAmountToApply returns a boolean if a field has been set.

### GetBalance

`func (o *ARPaymentInvoicesTypeInner) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARPaymentInvoicesTypeInner) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARPaymentInvoicesTypeInner) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARPaymentInvoicesTypeInner) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCanBeModified

`func (o *ARPaymentInvoicesTypeInner) GetCanBeModified() bool`

GetCanBeModified returns the CanBeModified field if non-nil, zero value otherwise.

### GetCanBeModifiedOk

`func (o *ARPaymentInvoicesTypeInner) GetCanBeModifiedOk() (*bool, bool)`

GetCanBeModifiedOk returns a tuple with the CanBeModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanBeModified

`func (o *ARPaymentInvoicesTypeInner) SetCanBeModified(v bool)`

SetCanBeModified sets CanBeModified field to given value.

### HasCanBeModified

`func (o *ARPaymentInvoicesTypeInner) HasCanBeModified() bool`

HasCanBeModified returns a boolean if a field has been set.

### GetCashierInfo

`func (o *ARPaymentInvoicesTypeInner) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *ARPaymentInvoicesTypeInner) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *ARPaymentInvoicesTypeInner) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *ARPaymentInvoicesTypeInner) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetCloseDate

`func (o *ARPaymentInvoicesTypeInner) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *ARPaymentInvoicesTypeInner) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *ARPaymentInvoicesTypeInner) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *ARPaymentInvoicesTypeInner) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetCompressed

`func (o *ARPaymentInvoicesTypeInner) GetCompressed() bool`

GetCompressed returns the Compressed field if non-nil, zero value otherwise.

### GetCompressedOk

`func (o *ARPaymentInvoicesTypeInner) GetCompressedOk() (*bool, bool)`

GetCompressedOk returns a tuple with the Compressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressed

`func (o *ARPaymentInvoicesTypeInner) SetCompressed(v bool)`

SetCompressed sets Compressed field to given value.

### HasCompressed

`func (o *ARPaymentInvoicesTypeInner) HasCompressed() bool`

HasCompressed returns a boolean if a field has been set.

### GetCompressedDate

`func (o *ARPaymentInvoicesTypeInner) GetCompressedDate() string`

GetCompressedDate returns the CompressedDate field if non-nil, zero value otherwise.

### GetCompressedDateOk

`func (o *ARPaymentInvoicesTypeInner) GetCompressedDateOk() (*string, bool)`

GetCompressedDateOk returns a tuple with the CompressedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressedDate

`func (o *ARPaymentInvoicesTypeInner) SetCompressedDate(v string)`

SetCompressedDate sets CompressedDate field to given value.

### HasCompressedDate

`func (o *ARPaymentInvoicesTypeInner) HasCompressedDate() bool`

HasCompressedDate returns a boolean if a field has been set.

### GetCustomNumbers

`func (o *ARPaymentInvoicesTypeInner) GetCustomNumbers() []string`

GetCustomNumbers returns the CustomNumbers field if non-nil, zero value otherwise.

### GetCustomNumbersOk

`func (o *ARPaymentInvoicesTypeInner) GetCustomNumbersOk() (*[]string, bool)`

GetCustomNumbersOk returns a tuple with the CustomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumbers

`func (o *ARPaymentInvoicesTypeInner) SetCustomNumbers(v []string)`

SetCustomNumbers sets CustomNumbers field to given value.

### HasCustomNumbers

`func (o *ARPaymentInvoicesTypeInner) HasCustomNumbers() bool`

HasCustomNumbers returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *ARPaymentInvoicesTypeInner) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *ARPaymentInvoicesTypeInner) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *ARPaymentInvoicesTypeInner) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *ARPaymentInvoicesTypeInner) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFiscalResponseType

`func (o *ARPaymentInvoicesTypeInner) GetFiscalResponseType() FiscalResponseType`

GetFiscalResponseType returns the FiscalResponseType field if non-nil, zero value otherwise.

### GetFiscalResponseTypeOk

`func (o *ARPaymentInvoicesTypeInner) GetFiscalResponseTypeOk() (*FiscalResponseType, bool)`

GetFiscalResponseTypeOk returns a tuple with the FiscalResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalResponseType

`func (o *ARPaymentInvoicesTypeInner) SetFiscalResponseType(v FiscalResponseType)`

SetFiscalResponseType sets FiscalResponseType field to given value.

### HasFiscalResponseType

`func (o *ARPaymentInvoicesTypeInner) HasFiscalResponseType() bool`

HasFiscalResponseType returns a boolean if a field has been set.

### GetFolioDate

`func (o *ARPaymentInvoicesTypeInner) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *ARPaymentInvoicesTypeInner) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *ARPaymentInvoicesTypeInner) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioNo

`func (o *ARPaymentInvoicesTypeInner) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ARPaymentInvoicesTypeInner) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ARPaymentInvoicesTypeInner) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *ARPaymentInvoicesTypeInner) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *ARPaymentInvoicesTypeInner) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *ARPaymentInvoicesTypeInner) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioStatus

`func (o *ARPaymentInvoicesTypeInner) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *ARPaymentInvoicesTypeInner) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *ARPaymentInvoicesTypeInner) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioTexts

`func (o *ARPaymentInvoicesTypeInner) GetFolioTexts() FolioTextsType`

GetFolioTexts returns the FolioTexts field if non-nil, zero value otherwise.

### GetFolioTextsOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioTextsOk() (*FolioTextsType, bool)`

GetFolioTextsOk returns a tuple with the FolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTexts

`func (o *ARPaymentInvoicesTypeInner) SetFolioTexts(v FolioTextsType)`

SetFolioTexts sets FolioTexts field to given value.

### HasFolioTexts

`func (o *ARPaymentInvoicesTypeInner) HasFolioTexts() bool`

HasFolioTexts returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ARPaymentInvoicesTypeInner) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ARPaymentInvoicesTypeInner) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ARPaymentInvoicesTypeInner) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ARPaymentInvoicesTypeInner) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetGuestName

`func (o *ARPaymentInvoicesTypeInner) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ARPaymentInvoicesTypeInner) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ARPaymentInvoicesTypeInner) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ARPaymentInvoicesTypeInner) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetGuestProfileId

`func (o *ARPaymentInvoicesTypeInner) GetGuestProfileId() UniqueIDType`

GetGuestProfileId returns the GuestProfileId field if non-nil, zero value otherwise.

### GetGuestProfileIdOk

`func (o *ARPaymentInvoicesTypeInner) GetGuestProfileIdOk() (*UniqueIDType, bool)`

GetGuestProfileIdOk returns a tuple with the GuestProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestProfileId

`func (o *ARPaymentInvoicesTypeInner) SetGuestProfileId(v UniqueIDType)`

SetGuestProfileId sets GuestProfileId field to given value.

### HasGuestProfileId

`func (o *ARPaymentInvoicesTypeInner) HasGuestProfileId() bool`

HasGuestProfileId returns a boolean if a field has been set.

### GetHotelId

`func (o *ARPaymentInvoicesTypeInner) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARPaymentInvoicesTypeInner) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARPaymentInvoicesTypeInner) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARPaymentInvoicesTypeInner) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *ARPaymentInvoicesTypeInner) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *ARPaymentInvoicesTypeInner) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *ARPaymentInvoicesTypeInner) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *ARPaymentInvoicesTypeInner) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *ARPaymentInvoicesTypeInner) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetInvoiceType

`func (o *ARPaymentInvoicesTypeInner) GetInvoiceType() ARInvoiceCategory`

GetInvoiceType returns the InvoiceType field if non-nil, zero value otherwise.

### GetInvoiceTypeOk

`func (o *ARPaymentInvoicesTypeInner) GetInvoiceTypeOk() (*ARInvoiceCategory, bool)`

GetInvoiceTypeOk returns a tuple with the InvoiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceType

`func (o *ARPaymentInvoicesTypeInner) SetInvoiceType(v ARInvoiceCategory)`

SetInvoiceType sets InvoiceType field to given value.

### HasInvoiceType

`func (o *ARPaymentInvoicesTypeInner) HasInvoiceType() bool`

HasInvoiceType returns a boolean if a field has been set.

### GetMarket

`func (o *ARPaymentInvoicesTypeInner) GetMarket() MarketCodeInfoType`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *ARPaymentInvoicesTypeInner) GetMarketOk() (*MarketCodeInfoType, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *ARPaymentInvoicesTypeInner) SetMarket(v MarketCodeInfoType)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *ARPaymentInvoicesTypeInner) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *ARPaymentInvoicesTypeInner) GetOriginalAmount() CurrencyAmountType`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *ARPaymentInvoicesTypeInner) GetOriginalAmountOk() (*CurrencyAmountType, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *ARPaymentInvoicesTypeInner) SetOriginalAmount(v CurrencyAmountType)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *ARPaymentInvoicesTypeInner) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetParentInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) GetParentInvoiceNo() float32`

GetParentInvoiceNo returns the ParentInvoiceNo field if non-nil, zero value otherwise.

### GetParentInvoiceNoOk

`func (o *ARPaymentInvoicesTypeInner) GetParentInvoiceNoOk() (*float32, bool)`

GetParentInvoiceNoOk returns a tuple with the ParentInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) SetParentInvoiceNo(v float32)`

SetParentInvoiceNo sets ParentInvoiceNo field to given value.

### HasParentInvoiceNo

`func (o *ARPaymentInvoicesTypeInner) HasParentInvoiceNo() bool`

HasParentInvoiceNo returns a boolean if a field has been set.

### GetPaymentCard

`func (o *ARPaymentInvoicesTypeInner) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *ARPaymentInvoicesTypeInner) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *ARPaymentInvoicesTypeInner) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *ARPaymentInvoicesTypeInner) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetPayments

`func (o *ARPaymentInvoicesTypeInner) GetPayments() CurrencyAmountType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARPaymentInvoicesTypeInner) GetPaymentsOk() (*CurrencyAmountType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARPaymentInvoicesTypeInner) SetPayments(v CurrencyAmountType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARPaymentInvoicesTypeInner) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARPaymentInvoicesTypeInner) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARPaymentInvoicesTypeInner) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARPaymentInvoicesTypeInner) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARPaymentInvoicesTypeInner) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetPrinted

`func (o *ARPaymentInvoicesTypeInner) GetPrinted() bool`

GetPrinted returns the Printed field if non-nil, zero value otherwise.

### GetPrintedOk

`func (o *ARPaymentInvoicesTypeInner) GetPrintedOk() (*bool, bool)`

GetPrintedOk returns a tuple with the Printed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinted

`func (o *ARPaymentInvoicesTypeInner) SetPrinted(v bool)`

SetPrinted sets Printed field to given value.

### HasPrinted

`func (o *ARPaymentInvoicesTypeInner) HasPrinted() bool`

HasPrinted returns a boolean if a field has been set.

### GetPrintedDate

`func (o *ARPaymentInvoicesTypeInner) GetPrintedDate() string`

GetPrintedDate returns the PrintedDate field if non-nil, zero value otherwise.

### GetPrintedDateOk

`func (o *ARPaymentInvoicesTypeInner) GetPrintedDateOk() (*string, bool)`

GetPrintedDateOk returns a tuple with the PrintedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintedDate

`func (o *ARPaymentInvoicesTypeInner) SetPrintedDate(v string)`

SetPrintedDate sets PrintedDate field to given value.

### HasPrintedDate

`func (o *ARPaymentInvoicesTypeInner) HasPrintedDate() bool`

HasPrintedDate returns a boolean if a field has been set.

### GetReference

`func (o *ARPaymentInvoicesTypeInner) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARPaymentInvoicesTypeInner) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARPaymentInvoicesTypeInner) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARPaymentInvoicesTypeInner) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARPaymentInvoicesTypeInner) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARPaymentInvoicesTypeInner) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARPaymentInvoicesTypeInner) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARPaymentInvoicesTypeInner) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetReservationId

`func (o *ARPaymentInvoicesTypeInner) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ARPaymentInvoicesTypeInner) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ARPaymentInvoicesTypeInner) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ARPaymentInvoicesTypeInner) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ARPaymentInvoicesTypeInner) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ARPaymentInvoicesTypeInner) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ARPaymentInvoicesTypeInner) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ARPaymentInvoicesTypeInner) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ARPaymentInvoicesTypeInner) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ARPaymentInvoicesTypeInner) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ARPaymentInvoicesTypeInner) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ARPaymentInvoicesTypeInner) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetRoomClass

`func (o *ARPaymentInvoicesTypeInner) GetRoomClass() RoomClassCodeInfoType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *ARPaymentInvoicesTypeInner) GetRoomClassOk() (*RoomClassCodeInfoType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *ARPaymentInvoicesTypeInner) SetRoomClass(v RoomClassCodeInfoType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *ARPaymentInvoicesTypeInner) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetSource

`func (o *ARPaymentInvoicesTypeInner) GetSource() SourceCodeInfoType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ARPaymentInvoicesTypeInner) GetSourceOk() (*SourceCodeInfoType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ARPaymentInvoicesTypeInner) SetSource(v SourceCodeInfoType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ARPaymentInvoicesTypeInner) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetStatementNo

`func (o *ARPaymentInvoicesTypeInner) GetStatementNo() int32`

GetStatementNo returns the StatementNo field if non-nil, zero value otherwise.

### GetStatementNoOk

`func (o *ARPaymentInvoicesTypeInner) GetStatementNoOk() (*int32, bool)`

GetStatementNoOk returns a tuple with the StatementNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNo

`func (o *ARPaymentInvoicesTypeInner) SetStatementNo(v int32)`

SetStatementNo sets StatementNo field to given value.

### HasStatementNo

`func (o *ARPaymentInvoicesTypeInner) HasStatementNo() bool`

HasStatementNo returns a boolean if a field has been set.

### GetStatus

`func (o *ARPaymentInvoicesTypeInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ARPaymentInvoicesTypeInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ARPaymentInvoicesTypeInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ARPaymentInvoicesTypeInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStoredDebitFolioId

`func (o *ARPaymentInvoicesTypeInner) GetStoredDebitFolioId() UniqueIDType`

GetStoredDebitFolioId returns the StoredDebitFolioId field if non-nil, zero value otherwise.

### GetStoredDebitFolioIdOk

`func (o *ARPaymentInvoicesTypeInner) GetStoredDebitFolioIdOk() (*UniqueIDType, bool)`

GetStoredDebitFolioIdOk returns a tuple with the StoredDebitFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioId

`func (o *ARPaymentInvoicesTypeInner) SetStoredDebitFolioId(v UniqueIDType)`

SetStoredDebitFolioId sets StoredDebitFolioId field to given value.

### HasStoredDebitFolioId

`func (o *ARPaymentInvoicesTypeInner) HasStoredDebitFolioId() bool`

HasStoredDebitFolioId returns a boolean if a field has been set.

### GetStoredDebitFolioName

`func (o *ARPaymentInvoicesTypeInner) GetStoredDebitFolioName() string`

GetStoredDebitFolioName returns the StoredDebitFolioName field if non-nil, zero value otherwise.

### GetStoredDebitFolioNameOk

`func (o *ARPaymentInvoicesTypeInner) GetStoredDebitFolioNameOk() (*string, bool)`

GetStoredDebitFolioNameOk returns a tuple with the StoredDebitFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioName

`func (o *ARPaymentInvoicesTypeInner) SetStoredDebitFolioName(v string)`

SetStoredDebitFolioName sets StoredDebitFolioName field to given value.

### HasStoredDebitFolioName

`func (o *ARPaymentInvoicesTypeInner) HasStoredDebitFolioName() bool`

HasStoredDebitFolioName returns a boolean if a field has been set.

### GetStoredFolioId

`func (o *ARPaymentInvoicesTypeInner) GetStoredFolioId() UniqueIDType`

GetStoredFolioId returns the StoredFolioId field if non-nil, zero value otherwise.

### GetStoredFolioIdOk

`func (o *ARPaymentInvoicesTypeInner) GetStoredFolioIdOk() (*UniqueIDType, bool)`

GetStoredFolioIdOk returns a tuple with the StoredFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioId

`func (o *ARPaymentInvoicesTypeInner) SetStoredFolioId(v UniqueIDType)`

SetStoredFolioId sets StoredFolioId field to given value.

### HasStoredFolioId

`func (o *ARPaymentInvoicesTypeInner) HasStoredFolioId() bool`

HasStoredFolioId returns a boolean if a field has been set.

### GetStoredFolioName

`func (o *ARPaymentInvoicesTypeInner) GetStoredFolioName() string`

GetStoredFolioName returns the StoredFolioName field if non-nil, zero value otherwise.

### GetStoredFolioNameOk

`func (o *ARPaymentInvoicesTypeInner) GetStoredFolioNameOk() (*string, bool)`

GetStoredFolioNameOk returns a tuple with the StoredFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioName

`func (o *ARPaymentInvoicesTypeInner) SetStoredFolioName(v string)`

SetStoredFolioName sets StoredFolioName field to given value.

### HasStoredFolioName

`func (o *ARPaymentInvoicesTypeInner) HasStoredFolioName() bool`

HasStoredFolioName returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARPaymentInvoicesTypeInner) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARPaymentInvoicesTypeInner) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARPaymentInvoicesTypeInner) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARPaymentInvoicesTypeInner) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARPaymentInvoicesTypeInner) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARPaymentInvoicesTypeInner) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARPaymentInvoicesTypeInner) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARPaymentInvoicesTypeInner) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionInfo

`func (o *ARPaymentInvoicesTypeInner) GetTransactionInfo() TrxInfoType`

GetTransactionInfo returns the TransactionInfo field if non-nil, zero value otherwise.

### GetTransactionInfoOk

`func (o *ARPaymentInvoicesTypeInner) GetTransactionInfoOk() (*TrxInfoType, bool)`

GetTransactionInfoOk returns a tuple with the TransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionInfo

`func (o *ARPaymentInvoicesTypeInner) SetTransactionInfo(v TrxInfoType)`

SetTransactionInfo sets TransactionInfo field to given value.

### HasTransactionInfo

`func (o *ARPaymentInvoicesTypeInner) HasTransactionInfo() bool`

HasTransactionInfo returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARPaymentInvoicesTypeInner) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARPaymentInvoicesTypeInner) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARPaymentInvoicesTypeInner) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARPaymentInvoicesTypeInner) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransferDate

`func (o *ARPaymentInvoicesTypeInner) GetTransferDate() string`

GetTransferDate returns the TransferDate field if non-nil, zero value otherwise.

### GetTransferDateOk

`func (o *ARPaymentInvoicesTypeInner) GetTransferDateOk() (*string, bool)`

GetTransferDateOk returns a tuple with the TransferDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferDate

`func (o *ARPaymentInvoicesTypeInner) SetTransferDate(v string)`

SetTransferDate sets TransferDate field to given value.

### HasTransferDate

`func (o *ARPaymentInvoicesTypeInner) HasTransferDate() bool`

HasTransferDate returns a boolean if a field has been set.

### GetTransferredIn

`func (o *ARPaymentInvoicesTypeInner) GetTransferredIn() bool`

GetTransferredIn returns the TransferredIn field if non-nil, zero value otherwise.

### GetTransferredInOk

`func (o *ARPaymentInvoicesTypeInner) GetTransferredInOk() (*bool, bool)`

GetTransferredInOk returns a tuple with the TransferredIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredIn

`func (o *ARPaymentInvoicesTypeInner) SetTransferredIn(v bool)`

SetTransferredIn sets TransferredIn field to given value.

### HasTransferredIn

`func (o *ARPaymentInvoicesTypeInner) HasTransferredIn() bool`

HasTransferredIn returns a boolean if a field has been set.

### GetTransferredOut

`func (o *ARPaymentInvoicesTypeInner) GetTransferredOut() bool`

GetTransferredOut returns the TransferredOut field if non-nil, zero value otherwise.

### GetTransferredOutOk

`func (o *ARPaymentInvoicesTypeInner) GetTransferredOutOk() (*bool, bool)`

GetTransferredOutOk returns a tuple with the TransferredOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredOut

`func (o *ARPaymentInvoicesTypeInner) SetTransferredOut(v bool)`

SetTransferredOut sets TransferredOut field to given value.

### HasTransferredOut

`func (o *ARPaymentInvoicesTypeInner) HasTransferredOut() bool`

HasTransferredOut returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


