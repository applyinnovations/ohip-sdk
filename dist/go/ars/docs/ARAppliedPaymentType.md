# ARAppliedPaymentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where the invoice exists. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**GuestProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Age** | Pointer to **int32** | The Aging age of the invoice | [optional] 
**GuestName** | Pointer to **string** | Name of the Guest who consumed these transactions. | [optional] 
**OriginalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Payments** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | User-defined posting remark. | [optional] 
**Adjusted** | Pointer to **bool** |  | [optional] 
**ParentInvoiceNo** | Pointer to **float32** |  | [optional] 
**Compressed** | Pointer to **bool** |  | [optional] 
**CompressedDate** | Pointer to **string** |  | [optional] 
**TransferredOut** | Pointer to **bool** |  | [optional] 
**TransferredIn** | Pointer to **bool** |  | [optional] 
**Market** | Pointer to [**MarketCodeInfoType**](MarketCodeInfoType.md) |  | [optional] 
**RoomClass** | Pointer to [**RoomClassCodeInfoType**](RoomClassCodeInfoType.md) |  | [optional] 
**Source** | Pointer to [**SourceCodeInfoType**](SourceCodeInfoType.md) |  | [optional] 
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**CashierInfo** | Pointer to [**CashierInfoType**](CashierInfoType.md) |  | [optional] 
**TransactionInfo** | Pointer to [**TrxInfoType**](TrxInfoType.md) |  | [optional] 
**PaymentCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**AddresseeInfo** | Pointer to [**ProfileInfoType**](ProfileInfoType.md) |  | [optional] 
**AllowPartialTransferYn** | Pointer to **bool** | Flag to check Partail Transfer Allowed. | [optional] 
**Printed** | Pointer to **bool** | Flag to check Invoice Statement is Printed. | [optional] 
**PrintedDate** | Pointer to **string** | Invoice Statement Printed Date. | [optional] 
**StoredFolioId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**StoredFolioName** | Pointer to **string** | Name of the Stored Folio. | [optional] 
**StoredDebitFolioId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**StoredDebitFolioName** | Pointer to **string** | Name of the Stored Debit Folio. | [optional] 
**FolioTexts** | Pointer to [**[]FolioTextsTypeInner**](FolioTextsTypeInner.md) | This stores the description for the type of tax calculation especially with tax exemption, etc. | [optional] 
**CustomNumbers** | Pointer to **[]string** | Unique Custom Numbers associated with this record. | [optional] 
**FiscalResponseType** | Pointer to [**FiscalResponseType**](FiscalResponseType.md) |  | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier of the Invoice. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date of the invoice. | [optional] 
**Status** | Pointer to **string** | Status of the invoice. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code of the invoice. | [optional] 
**FolioNo** | Pointer to **float32** | Folio Number. | [optional] 
**InvoiceNo** | Pointer to **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**FolioDate** | Pointer to **string** | Date of Folio Generation. | [optional] 
**FolioStatus** | Pointer to [**FolioStatusType**](FolioStatusType.md) |  | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**InvoiceType** | Pointer to [**ARInvoiceCategory**](ARInvoiceCategory.md) |  | [optional] 
**StatementNo** | Pointer to **int32** | Statementno of the invoice. | [optional] 
**RevenueDate** | Pointer to **string** | Revenue date ID of the invoice. | [optional] 
**CloseDate** | Pointer to **string** | Close date of the invoice. | [optional] 
**PostingDate** | Pointer to **string** | Posting date of the invoice. | [optional] 
**TransferDate** | Pointer to **string** | Transfer date of the invoice. | [optional] 
**CanBeModified** | Pointer to **bool** | Flag to indicate if postings or adjustments can be made to the invoice. | [optional] 
**AppliedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PaymentTrxNo** | Pointer to **float32** | Transaction no of the Payment. | [optional] 

## Methods

### NewARAppliedPaymentType

`func NewARAppliedPaymentType() *ARAppliedPaymentType`

NewARAppliedPaymentType instantiates a new ARAppliedPaymentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAppliedPaymentTypeWithDefaults

`func NewARAppliedPaymentTypeWithDefaults() *ARAppliedPaymentType`

NewARAppliedPaymentTypeWithDefaults instantiates a new ARAppliedPaymentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ARAppliedPaymentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAppliedPaymentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAppliedPaymentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAppliedPaymentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ARAppliedPaymentType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ARAppliedPaymentType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ARAppliedPaymentType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ARAppliedPaymentType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetGuestProfileId

`func (o *ARAppliedPaymentType) GetGuestProfileId() UniqueIDType`

GetGuestProfileId returns the GuestProfileId field if non-nil, zero value otherwise.

### GetGuestProfileIdOk

`func (o *ARAppliedPaymentType) GetGuestProfileIdOk() (*UniqueIDType, bool)`

GetGuestProfileIdOk returns a tuple with the GuestProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestProfileId

`func (o *ARAppliedPaymentType) SetGuestProfileId(v UniqueIDType)`

SetGuestProfileId sets GuestProfileId field to given value.

### HasGuestProfileId

`func (o *ARAppliedPaymentType) HasGuestProfileId() bool`

HasGuestProfileId returns a boolean if a field has been set.

### GetAge

`func (o *ARAppliedPaymentType) GetAge() int32`

GetAge returns the Age field if non-nil, zero value otherwise.

### GetAgeOk

`func (o *ARAppliedPaymentType) GetAgeOk() (*int32, bool)`

GetAgeOk returns a tuple with the Age field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAge

`func (o *ARAppliedPaymentType) SetAge(v int32)`

SetAge sets Age field to given value.

### HasAge

`func (o *ARAppliedPaymentType) HasAge() bool`

HasAge returns a boolean if a field has been set.

### GetGuestName

`func (o *ARAppliedPaymentType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ARAppliedPaymentType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ARAppliedPaymentType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ARAppliedPaymentType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetOriginalAmount

`func (o *ARAppliedPaymentType) GetOriginalAmount() CurrencyAmountType`

GetOriginalAmount returns the OriginalAmount field if non-nil, zero value otherwise.

### GetOriginalAmountOk

`func (o *ARAppliedPaymentType) GetOriginalAmountOk() (*CurrencyAmountType, bool)`

GetOriginalAmountOk returns a tuple with the OriginalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalAmount

`func (o *ARAppliedPaymentType) SetOriginalAmount(v CurrencyAmountType)`

SetOriginalAmount sets OriginalAmount field to given value.

### HasOriginalAmount

`func (o *ARAppliedPaymentType) HasOriginalAmount() bool`

HasOriginalAmount returns a boolean if a field has been set.

### GetAmount

`func (o *ARAppliedPaymentType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ARAppliedPaymentType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ARAppliedPaymentType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ARAppliedPaymentType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetPayments

`func (o *ARAppliedPaymentType) GetPayments() CurrencyAmountType`

GetPayments returns the Payments field if non-nil, zero value otherwise.

### GetPaymentsOk

`func (o *ARAppliedPaymentType) GetPaymentsOk() (*CurrencyAmountType, bool)`

GetPaymentsOk returns a tuple with the Payments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayments

`func (o *ARAppliedPaymentType) SetPayments(v CurrencyAmountType)`

SetPayments sets Payments field to given value.

### HasPayments

`func (o *ARAppliedPaymentType) HasPayments() bool`

HasPayments returns a boolean if a field has been set.

### GetBalance

`func (o *ARAppliedPaymentType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *ARAppliedPaymentType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *ARAppliedPaymentType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *ARAppliedPaymentType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetReference

`func (o *ARAppliedPaymentType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARAppliedPaymentType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARAppliedPaymentType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARAppliedPaymentType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *ARAppliedPaymentType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARAppliedPaymentType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARAppliedPaymentType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARAppliedPaymentType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetAdjusted

`func (o *ARAppliedPaymentType) GetAdjusted() bool`

GetAdjusted returns the Adjusted field if non-nil, zero value otherwise.

### GetAdjustedOk

`func (o *ARAppliedPaymentType) GetAdjustedOk() (*bool, bool)`

GetAdjustedOk returns a tuple with the Adjusted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjusted

`func (o *ARAppliedPaymentType) SetAdjusted(v bool)`

SetAdjusted sets Adjusted field to given value.

### HasAdjusted

`func (o *ARAppliedPaymentType) HasAdjusted() bool`

HasAdjusted returns a boolean if a field has been set.

### GetParentInvoiceNo

`func (o *ARAppliedPaymentType) GetParentInvoiceNo() float32`

GetParentInvoiceNo returns the ParentInvoiceNo field if non-nil, zero value otherwise.

### GetParentInvoiceNoOk

`func (o *ARAppliedPaymentType) GetParentInvoiceNoOk() (*float32, bool)`

GetParentInvoiceNoOk returns a tuple with the ParentInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentInvoiceNo

`func (o *ARAppliedPaymentType) SetParentInvoiceNo(v float32)`

SetParentInvoiceNo sets ParentInvoiceNo field to given value.

### HasParentInvoiceNo

`func (o *ARAppliedPaymentType) HasParentInvoiceNo() bool`

HasParentInvoiceNo returns a boolean if a field has been set.

### GetCompressed

`func (o *ARAppliedPaymentType) GetCompressed() bool`

GetCompressed returns the Compressed field if non-nil, zero value otherwise.

### GetCompressedOk

`func (o *ARAppliedPaymentType) GetCompressedOk() (*bool, bool)`

GetCompressedOk returns a tuple with the Compressed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressed

`func (o *ARAppliedPaymentType) SetCompressed(v bool)`

SetCompressed sets Compressed field to given value.

### HasCompressed

`func (o *ARAppliedPaymentType) HasCompressed() bool`

HasCompressed returns a boolean if a field has been set.

### GetCompressedDate

`func (o *ARAppliedPaymentType) GetCompressedDate() string`

GetCompressedDate returns the CompressedDate field if non-nil, zero value otherwise.

### GetCompressedDateOk

`func (o *ARAppliedPaymentType) GetCompressedDateOk() (*string, bool)`

GetCompressedDateOk returns a tuple with the CompressedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompressedDate

`func (o *ARAppliedPaymentType) SetCompressedDate(v string)`

SetCompressedDate sets CompressedDate field to given value.

### HasCompressedDate

`func (o *ARAppliedPaymentType) HasCompressedDate() bool`

HasCompressedDate returns a boolean if a field has been set.

### GetTransferredOut

`func (o *ARAppliedPaymentType) GetTransferredOut() bool`

GetTransferredOut returns the TransferredOut field if non-nil, zero value otherwise.

### GetTransferredOutOk

`func (o *ARAppliedPaymentType) GetTransferredOutOk() (*bool, bool)`

GetTransferredOutOk returns a tuple with the TransferredOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredOut

`func (o *ARAppliedPaymentType) SetTransferredOut(v bool)`

SetTransferredOut sets TransferredOut field to given value.

### HasTransferredOut

`func (o *ARAppliedPaymentType) HasTransferredOut() bool`

HasTransferredOut returns a boolean if a field has been set.

### GetTransferredIn

`func (o *ARAppliedPaymentType) GetTransferredIn() bool`

GetTransferredIn returns the TransferredIn field if non-nil, zero value otherwise.

### GetTransferredInOk

`func (o *ARAppliedPaymentType) GetTransferredInOk() (*bool, bool)`

GetTransferredInOk returns a tuple with the TransferredIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferredIn

`func (o *ARAppliedPaymentType) SetTransferredIn(v bool)`

SetTransferredIn sets TransferredIn field to given value.

### HasTransferredIn

`func (o *ARAppliedPaymentType) HasTransferredIn() bool`

HasTransferredIn returns a boolean if a field has been set.

### GetMarket

`func (o *ARAppliedPaymentType) GetMarket() MarketCodeInfoType`

GetMarket returns the Market field if non-nil, zero value otherwise.

### GetMarketOk

`func (o *ARAppliedPaymentType) GetMarketOk() (*MarketCodeInfoType, bool)`

GetMarketOk returns a tuple with the Market field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarket

`func (o *ARAppliedPaymentType) SetMarket(v MarketCodeInfoType)`

SetMarket sets Market field to given value.

### HasMarket

`func (o *ARAppliedPaymentType) HasMarket() bool`

HasMarket returns a boolean if a field has been set.

### GetRoomClass

`func (o *ARAppliedPaymentType) GetRoomClass() RoomClassCodeInfoType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *ARAppliedPaymentType) GetRoomClassOk() (*RoomClassCodeInfoType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *ARAppliedPaymentType) SetRoomClass(v RoomClassCodeInfoType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *ARAppliedPaymentType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetSource

`func (o *ARAppliedPaymentType) GetSource() SourceCodeInfoType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ARAppliedPaymentType) GetSourceOk() (*SourceCodeInfoType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ARAppliedPaymentType) SetSource(v SourceCodeInfoType)`

SetSource sets Source field to given value.

### HasSource

`func (o *ARAppliedPaymentType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetReservationInfo

`func (o *ARAppliedPaymentType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ARAppliedPaymentType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ARAppliedPaymentType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ARAppliedPaymentType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetCashierInfo

`func (o *ARAppliedPaymentType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *ARAppliedPaymentType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *ARAppliedPaymentType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *ARAppliedPaymentType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetTransactionInfo

`func (o *ARAppliedPaymentType) GetTransactionInfo() TrxInfoType`

GetTransactionInfo returns the TransactionInfo field if non-nil, zero value otherwise.

### GetTransactionInfoOk

`func (o *ARAppliedPaymentType) GetTransactionInfoOk() (*TrxInfoType, bool)`

GetTransactionInfoOk returns a tuple with the TransactionInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionInfo

`func (o *ARAppliedPaymentType) SetTransactionInfo(v TrxInfoType)`

SetTransactionInfo sets TransactionInfo field to given value.

### HasTransactionInfo

`func (o *ARAppliedPaymentType) HasTransactionInfo() bool`

HasTransactionInfo returns a boolean if a field has been set.

### GetPaymentCard

`func (o *ARAppliedPaymentType) GetPaymentCard() ResPaymentCardType`

GetPaymentCard returns the PaymentCard field if non-nil, zero value otherwise.

### GetPaymentCardOk

`func (o *ARAppliedPaymentType) GetPaymentCardOk() (*ResPaymentCardType, bool)`

GetPaymentCardOk returns a tuple with the PaymentCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentCard

`func (o *ARAppliedPaymentType) SetPaymentCard(v ResPaymentCardType)`

SetPaymentCard sets PaymentCard field to given value.

### HasPaymentCard

`func (o *ARAppliedPaymentType) HasPaymentCard() bool`

HasPaymentCard returns a boolean if a field has been set.

### GetAddresseeInfo

`func (o *ARAppliedPaymentType) GetAddresseeInfo() ProfileInfoType`

GetAddresseeInfo returns the AddresseeInfo field if non-nil, zero value otherwise.

### GetAddresseeInfoOk

`func (o *ARAppliedPaymentType) GetAddresseeInfoOk() (*ProfileInfoType, bool)`

GetAddresseeInfoOk returns a tuple with the AddresseeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddresseeInfo

`func (o *ARAppliedPaymentType) SetAddresseeInfo(v ProfileInfoType)`

SetAddresseeInfo sets AddresseeInfo field to given value.

### HasAddresseeInfo

`func (o *ARAppliedPaymentType) HasAddresseeInfo() bool`

HasAddresseeInfo returns a boolean if a field has been set.

### GetAllowPartialTransferYn

`func (o *ARAppliedPaymentType) GetAllowPartialTransferYn() bool`

GetAllowPartialTransferYn returns the AllowPartialTransferYn field if non-nil, zero value otherwise.

### GetAllowPartialTransferYnOk

`func (o *ARAppliedPaymentType) GetAllowPartialTransferYnOk() (*bool, bool)`

GetAllowPartialTransferYnOk returns a tuple with the AllowPartialTransferYn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPartialTransferYn

`func (o *ARAppliedPaymentType) SetAllowPartialTransferYn(v bool)`

SetAllowPartialTransferYn sets AllowPartialTransferYn field to given value.

### HasAllowPartialTransferYn

`func (o *ARAppliedPaymentType) HasAllowPartialTransferYn() bool`

HasAllowPartialTransferYn returns a boolean if a field has been set.

### GetPrinted

`func (o *ARAppliedPaymentType) GetPrinted() bool`

GetPrinted returns the Printed field if non-nil, zero value otherwise.

### GetPrintedOk

`func (o *ARAppliedPaymentType) GetPrintedOk() (*bool, bool)`

GetPrintedOk returns a tuple with the Printed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrinted

`func (o *ARAppliedPaymentType) SetPrinted(v bool)`

SetPrinted sets Printed field to given value.

### HasPrinted

`func (o *ARAppliedPaymentType) HasPrinted() bool`

HasPrinted returns a boolean if a field has been set.

### GetPrintedDate

`func (o *ARAppliedPaymentType) GetPrintedDate() string`

GetPrintedDate returns the PrintedDate field if non-nil, zero value otherwise.

### GetPrintedDateOk

`func (o *ARAppliedPaymentType) GetPrintedDateOk() (*string, bool)`

GetPrintedDateOk returns a tuple with the PrintedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintedDate

`func (o *ARAppliedPaymentType) SetPrintedDate(v string)`

SetPrintedDate sets PrintedDate field to given value.

### HasPrintedDate

`func (o *ARAppliedPaymentType) HasPrintedDate() bool`

HasPrintedDate returns a boolean if a field has been set.

### GetStoredFolioId

`func (o *ARAppliedPaymentType) GetStoredFolioId() UniqueIDType`

GetStoredFolioId returns the StoredFolioId field if non-nil, zero value otherwise.

### GetStoredFolioIdOk

`func (o *ARAppliedPaymentType) GetStoredFolioIdOk() (*UniqueIDType, bool)`

GetStoredFolioIdOk returns a tuple with the StoredFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioId

`func (o *ARAppliedPaymentType) SetStoredFolioId(v UniqueIDType)`

SetStoredFolioId sets StoredFolioId field to given value.

### HasStoredFolioId

`func (o *ARAppliedPaymentType) HasStoredFolioId() bool`

HasStoredFolioId returns a boolean if a field has been set.

### GetStoredFolioName

`func (o *ARAppliedPaymentType) GetStoredFolioName() string`

GetStoredFolioName returns the StoredFolioName field if non-nil, zero value otherwise.

### GetStoredFolioNameOk

`func (o *ARAppliedPaymentType) GetStoredFolioNameOk() (*string, bool)`

GetStoredFolioNameOk returns a tuple with the StoredFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioName

`func (o *ARAppliedPaymentType) SetStoredFolioName(v string)`

SetStoredFolioName sets StoredFolioName field to given value.

### HasStoredFolioName

`func (o *ARAppliedPaymentType) HasStoredFolioName() bool`

HasStoredFolioName returns a boolean if a field has been set.

### GetStoredDebitFolioId

`func (o *ARAppliedPaymentType) GetStoredDebitFolioId() UniqueIDType`

GetStoredDebitFolioId returns the StoredDebitFolioId field if non-nil, zero value otherwise.

### GetStoredDebitFolioIdOk

`func (o *ARAppliedPaymentType) GetStoredDebitFolioIdOk() (*UniqueIDType, bool)`

GetStoredDebitFolioIdOk returns a tuple with the StoredDebitFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioId

`func (o *ARAppliedPaymentType) SetStoredDebitFolioId(v UniqueIDType)`

SetStoredDebitFolioId sets StoredDebitFolioId field to given value.

### HasStoredDebitFolioId

`func (o *ARAppliedPaymentType) HasStoredDebitFolioId() bool`

HasStoredDebitFolioId returns a boolean if a field has been set.

### GetStoredDebitFolioName

`func (o *ARAppliedPaymentType) GetStoredDebitFolioName() string`

GetStoredDebitFolioName returns the StoredDebitFolioName field if non-nil, zero value otherwise.

### GetStoredDebitFolioNameOk

`func (o *ARAppliedPaymentType) GetStoredDebitFolioNameOk() (*string, bool)`

GetStoredDebitFolioNameOk returns a tuple with the StoredDebitFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredDebitFolioName

`func (o *ARAppliedPaymentType) SetStoredDebitFolioName(v string)`

SetStoredDebitFolioName sets StoredDebitFolioName field to given value.

### HasStoredDebitFolioName

`func (o *ARAppliedPaymentType) HasStoredDebitFolioName() bool`

HasStoredDebitFolioName returns a boolean if a field has been set.

### GetFolioTexts

`func (o *ARAppliedPaymentType) GetFolioTexts() []FolioTextsTypeInner`

GetFolioTexts returns the FolioTexts field if non-nil, zero value otherwise.

### GetFolioTextsOk

`func (o *ARAppliedPaymentType) GetFolioTextsOk() (*[]FolioTextsTypeInner, bool)`

GetFolioTextsOk returns a tuple with the FolioTexts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTexts

`func (o *ARAppliedPaymentType) SetFolioTexts(v []FolioTextsTypeInner)`

SetFolioTexts sets FolioTexts field to given value.

### HasFolioTexts

`func (o *ARAppliedPaymentType) HasFolioTexts() bool`

HasFolioTexts returns a boolean if a field has been set.

### GetCustomNumbers

`func (o *ARAppliedPaymentType) GetCustomNumbers() []string`

GetCustomNumbers returns the CustomNumbers field if non-nil, zero value otherwise.

### GetCustomNumbersOk

`func (o *ARAppliedPaymentType) GetCustomNumbersOk() (*[]string, bool)`

GetCustomNumbersOk returns a tuple with the CustomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomNumbers

`func (o *ARAppliedPaymentType) SetCustomNumbers(v []string)`

SetCustomNumbers sets CustomNumbers field to given value.

### HasCustomNumbers

`func (o *ARAppliedPaymentType) HasCustomNumbers() bool`

HasCustomNumbers returns a boolean if a field has been set.

### GetFiscalResponseType

`func (o *ARAppliedPaymentType) GetFiscalResponseType() FiscalResponseType`

GetFiscalResponseType returns the FiscalResponseType field if non-nil, zero value otherwise.

### GetFiscalResponseTypeOk

`func (o *ARAppliedPaymentType) GetFiscalResponseTypeOk() (*FiscalResponseType, bool)`

GetFiscalResponseTypeOk returns a tuple with the FiscalResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalResponseType

`func (o *ARAppliedPaymentType) SetFiscalResponseType(v FiscalResponseType)`

SetFiscalResponseType sets FiscalResponseType field to given value.

### HasFiscalResponseType

`func (o *ARAppliedPaymentType) HasFiscalResponseType() bool`

HasFiscalResponseType returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARAppliedPaymentType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARAppliedPaymentType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARAppliedPaymentType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARAppliedPaymentType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARAppliedPaymentType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARAppliedPaymentType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARAppliedPaymentType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARAppliedPaymentType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetStatus

`func (o *ARAppliedPaymentType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ARAppliedPaymentType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ARAppliedPaymentType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ARAppliedPaymentType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARAppliedPaymentType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARAppliedPaymentType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARAppliedPaymentType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARAppliedPaymentType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetFolioNo

`func (o *ARAppliedPaymentType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *ARAppliedPaymentType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *ARAppliedPaymentType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *ARAppliedPaymentType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetInvoiceNo

`func (o *ARAppliedPaymentType) GetInvoiceNo() float32`

GetInvoiceNo returns the InvoiceNo field if non-nil, zero value otherwise.

### GetInvoiceNoOk

`func (o *ARAppliedPaymentType) GetInvoiceNoOk() (*float32, bool)`

GetInvoiceNoOk returns a tuple with the InvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceNo

`func (o *ARAppliedPaymentType) SetInvoiceNo(v float32)`

SetInvoiceNo sets InvoiceNo field to given value.

### HasInvoiceNo

`func (o *ARAppliedPaymentType) HasInvoiceNo() bool`

HasInvoiceNo returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *ARAppliedPaymentType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *ARAppliedPaymentType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *ARAppliedPaymentType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *ARAppliedPaymentType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *ARAppliedPaymentType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *ARAppliedPaymentType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *ARAppliedPaymentType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *ARAppliedPaymentType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *ARAppliedPaymentType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *ARAppliedPaymentType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *ARAppliedPaymentType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *ARAppliedPaymentType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetFolioDate

`func (o *ARAppliedPaymentType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *ARAppliedPaymentType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *ARAppliedPaymentType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *ARAppliedPaymentType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioStatus

`func (o *ARAppliedPaymentType) GetFolioStatus() FolioStatusType`

GetFolioStatus returns the FolioStatus field if non-nil, zero value otherwise.

### GetFolioStatusOk

`func (o *ARAppliedPaymentType) GetFolioStatusOk() (*FolioStatusType, bool)`

GetFolioStatusOk returns a tuple with the FolioStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioStatus

`func (o *ARAppliedPaymentType) SetFolioStatus(v FolioStatusType)`

SetFolioStatus sets FolioStatus field to given value.

### HasFolioStatus

`func (o *ARAppliedPaymentType) HasFolioStatus() bool`

HasFolioStatus returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *ARAppliedPaymentType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *ARAppliedPaymentType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *ARAppliedPaymentType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *ARAppliedPaymentType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetInvoiceType

`func (o *ARAppliedPaymentType) GetInvoiceType() ARInvoiceCategory`

GetInvoiceType returns the InvoiceType field if non-nil, zero value otherwise.

### GetInvoiceTypeOk

`func (o *ARAppliedPaymentType) GetInvoiceTypeOk() (*ARInvoiceCategory, bool)`

GetInvoiceTypeOk returns a tuple with the InvoiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceType

`func (o *ARAppliedPaymentType) SetInvoiceType(v ARInvoiceCategory)`

SetInvoiceType sets InvoiceType field to given value.

### HasInvoiceType

`func (o *ARAppliedPaymentType) HasInvoiceType() bool`

HasInvoiceType returns a boolean if a field has been set.

### GetStatementNo

`func (o *ARAppliedPaymentType) GetStatementNo() int32`

GetStatementNo returns the StatementNo field if non-nil, zero value otherwise.

### GetStatementNoOk

`func (o *ARAppliedPaymentType) GetStatementNoOk() (*int32, bool)`

GetStatementNoOk returns a tuple with the StatementNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementNo

`func (o *ARAppliedPaymentType) SetStatementNo(v int32)`

SetStatementNo sets StatementNo field to given value.

### HasStatementNo

`func (o *ARAppliedPaymentType) HasStatementNo() bool`

HasStatementNo returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ARAppliedPaymentType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ARAppliedPaymentType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ARAppliedPaymentType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ARAppliedPaymentType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetCloseDate

`func (o *ARAppliedPaymentType) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *ARAppliedPaymentType) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *ARAppliedPaymentType) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *ARAppliedPaymentType) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARAppliedPaymentType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARAppliedPaymentType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARAppliedPaymentType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARAppliedPaymentType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetTransferDate

`func (o *ARAppliedPaymentType) GetTransferDate() string`

GetTransferDate returns the TransferDate field if non-nil, zero value otherwise.

### GetTransferDateOk

`func (o *ARAppliedPaymentType) GetTransferDateOk() (*string, bool)`

GetTransferDateOk returns a tuple with the TransferDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransferDate

`func (o *ARAppliedPaymentType) SetTransferDate(v string)`

SetTransferDate sets TransferDate field to given value.

### HasTransferDate

`func (o *ARAppliedPaymentType) HasTransferDate() bool`

HasTransferDate returns a boolean if a field has been set.

### GetCanBeModified

`func (o *ARAppliedPaymentType) GetCanBeModified() bool`

GetCanBeModified returns the CanBeModified field if non-nil, zero value otherwise.

### GetCanBeModifiedOk

`func (o *ARAppliedPaymentType) GetCanBeModifiedOk() (*bool, bool)`

GetCanBeModifiedOk returns a tuple with the CanBeModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanBeModified

`func (o *ARAppliedPaymentType) SetCanBeModified(v bool)`

SetCanBeModified sets CanBeModified field to given value.

### HasCanBeModified

`func (o *ARAppliedPaymentType) HasCanBeModified() bool`

HasCanBeModified returns a boolean if a field has been set.

### GetAppliedAmount

`func (o *ARAppliedPaymentType) GetAppliedAmount() CurrencyAmountType`

GetAppliedAmount returns the AppliedAmount field if non-nil, zero value otherwise.

### GetAppliedAmountOk

`func (o *ARAppliedPaymentType) GetAppliedAmountOk() (*CurrencyAmountType, bool)`

GetAppliedAmountOk returns a tuple with the AppliedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedAmount

`func (o *ARAppliedPaymentType) SetAppliedAmount(v CurrencyAmountType)`

SetAppliedAmount sets AppliedAmount field to given value.

### HasAppliedAmount

`func (o *ARAppliedPaymentType) HasAppliedAmount() bool`

HasAppliedAmount returns a boolean if a field has been set.

### GetPaymentTrxNo

`func (o *ARAppliedPaymentType) GetPaymentTrxNo() float32`

GetPaymentTrxNo returns the PaymentTrxNo field if non-nil, zero value otherwise.

### GetPaymentTrxNoOk

`func (o *ARAppliedPaymentType) GetPaymentTrxNoOk() (*float32, bool)`

GetPaymentTrxNoOk returns a tuple with the PaymentTrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentTrxNo

`func (o *ARAppliedPaymentType) SetPaymentTrxNo(v float32)`

SetPaymentTrxNo sets PaymentTrxNo field to given value.

### HasPaymentTrxNo

`func (o *ARAppliedPaymentType) HasPaymentTrxNo() bool`

HasPaymentTrxNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


