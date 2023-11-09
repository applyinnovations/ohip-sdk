# FolioWindowType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AckBIRReceiptExists** | Pointer to **bool** | Flag to indicate if an Acknowledgement Receipt is generated for the folio window. Applicable only in the Philippines. | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CompAccountingInfo** | Pointer to [**CompAccountingType**](CompAccountingType.md) |  | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**DebitBalance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DebitPayment** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DebitRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**EmptyFolio** | Pointer to **bool** | Flag to notify if the current folio has any postings. | [optional] 
**EmptyWindow** | Pointer to **bool** | Flag to notify if the entire window has any postings. | [optional] 
**Exchange** | Pointer to [**FolioWindowExchangeAmounts**](FolioWindowExchangeAmounts.md) |  | [optional] 
**FiscalFolioInstruction** | Pointer to [**FiscalFolioInstruction**](FiscalFolioInstruction.md) |  | [optional] 
**FiscalResponseType** | Pointer to [**FiscalResponseType**](FiscalResponseType.md) |  | [optional] 
**FolioSplitInfo** | Pointer to [**[]FolioSplitInfoType**](FolioSplitInfoType.md) | Contains the folio split posting information. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**Folios** | Pointer to [**[]FolioType**](FolioType.md) |  | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**OfficialBIRReceiptExists** | Pointer to **bool** | Flag to indicate if an Official Receipt is generated for the folio window. Applicable only in the Philippines. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**Payment** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**ReceiptNo** | Pointer to **float32** | The receipt number of the transaction, if there is a receipt generated. | [optional] 
**Revenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ServiceTypeInfo** | Pointer to [**TransactionServiceTypesType**](TransactionServiceTypesType.md) |  | [optional] 
**SimpleFolio** | Pointer to **bool** | This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold. | [optional] 
**StoredFolioId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**StoredFolioName** | Pointer to **string** | Name of the Stored Folio. | [optional] 
**TotalPages** | Pointer to **int32** | Evaluated total page count based on the requested max fetch count. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier. | [optional] 
**VATOffsetAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewFolioWindowType

`func NewFolioWindowType() *FolioWindowType`

NewFolioWindowType instantiates a new FolioWindowType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioWindowTypeWithDefaults

`func NewFolioWindowTypeWithDefaults() *FolioWindowType`

NewFolioWindowTypeWithDefaults instantiates a new FolioWindowType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAckBIRReceiptExists

`func (o *FolioWindowType) GetAckBIRReceiptExists() bool`

GetAckBIRReceiptExists returns the AckBIRReceiptExists field if non-nil, zero value otherwise.

### GetAckBIRReceiptExistsOk

`func (o *FolioWindowType) GetAckBIRReceiptExistsOk() (*bool, bool)`

GetAckBIRReceiptExistsOk returns a tuple with the AckBIRReceiptExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAckBIRReceiptExists

`func (o *FolioWindowType) SetAckBIRReceiptExists(v bool)`

SetAckBIRReceiptExists sets AckBIRReceiptExists field to given value.

### HasAckBIRReceiptExists

`func (o *FolioWindowType) HasAckBIRReceiptExists() bool`

HasAckBIRReceiptExists returns a boolean if a field has been set.

### GetBalance

`func (o *FolioWindowType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *FolioWindowType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *FolioWindowType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *FolioWindowType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCompAccountingInfo

`func (o *FolioWindowType) GetCompAccountingInfo() CompAccountingType`

GetCompAccountingInfo returns the CompAccountingInfo field if non-nil, zero value otherwise.

### GetCompAccountingInfoOk

`func (o *FolioWindowType) GetCompAccountingInfoOk() (*CompAccountingType, bool)`

GetCompAccountingInfoOk returns a tuple with the CompAccountingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompAccountingInfo

`func (o *FolioWindowType) SetCompAccountingInfo(v CompAccountingType)`

SetCompAccountingInfo sets CompAccountingInfo field to given value.

### HasCompAccountingInfo

`func (o *FolioWindowType) HasCompAccountingInfo() bool`

HasCompAccountingInfo returns a boolean if a field has been set.

### GetCount

`func (o *FolioWindowType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *FolioWindowType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *FolioWindowType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *FolioWindowType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetDebitBalance

`func (o *FolioWindowType) GetDebitBalance() CurrencyAmountType`

GetDebitBalance returns the DebitBalance field if non-nil, zero value otherwise.

### GetDebitBalanceOk

`func (o *FolioWindowType) GetDebitBalanceOk() (*CurrencyAmountType, bool)`

GetDebitBalanceOk returns a tuple with the DebitBalance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitBalance

`func (o *FolioWindowType) SetDebitBalance(v CurrencyAmountType)`

SetDebitBalance sets DebitBalance field to given value.

### HasDebitBalance

`func (o *FolioWindowType) HasDebitBalance() bool`

HasDebitBalance returns a boolean if a field has been set.

### GetDebitPayment

`func (o *FolioWindowType) GetDebitPayment() CurrencyAmountType`

GetDebitPayment returns the DebitPayment field if non-nil, zero value otherwise.

### GetDebitPaymentOk

`func (o *FolioWindowType) GetDebitPaymentOk() (*CurrencyAmountType, bool)`

GetDebitPaymentOk returns a tuple with the DebitPayment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitPayment

`func (o *FolioWindowType) SetDebitPayment(v CurrencyAmountType)`

SetDebitPayment sets DebitPayment field to given value.

### HasDebitPayment

`func (o *FolioWindowType) HasDebitPayment() bool`

HasDebitPayment returns a boolean if a field has been set.

### GetDebitRevenue

`func (o *FolioWindowType) GetDebitRevenue() CurrencyAmountType`

GetDebitRevenue returns the DebitRevenue field if non-nil, zero value otherwise.

### GetDebitRevenueOk

`func (o *FolioWindowType) GetDebitRevenueOk() (*CurrencyAmountType, bool)`

GetDebitRevenueOk returns a tuple with the DebitRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitRevenue

`func (o *FolioWindowType) SetDebitRevenue(v CurrencyAmountType)`

SetDebitRevenue sets DebitRevenue field to given value.

### HasDebitRevenue

`func (o *FolioWindowType) HasDebitRevenue() bool`

HasDebitRevenue returns a boolean if a field has been set.

### GetEmptyFolio

`func (o *FolioWindowType) GetEmptyFolio() bool`

GetEmptyFolio returns the EmptyFolio field if non-nil, zero value otherwise.

### GetEmptyFolioOk

`func (o *FolioWindowType) GetEmptyFolioOk() (*bool, bool)`

GetEmptyFolioOk returns a tuple with the EmptyFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmptyFolio

`func (o *FolioWindowType) SetEmptyFolio(v bool)`

SetEmptyFolio sets EmptyFolio field to given value.

### HasEmptyFolio

`func (o *FolioWindowType) HasEmptyFolio() bool`

HasEmptyFolio returns a boolean if a field has been set.

### GetEmptyWindow

`func (o *FolioWindowType) GetEmptyWindow() bool`

GetEmptyWindow returns the EmptyWindow field if non-nil, zero value otherwise.

### GetEmptyWindowOk

`func (o *FolioWindowType) GetEmptyWindowOk() (*bool, bool)`

GetEmptyWindowOk returns a tuple with the EmptyWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmptyWindow

`func (o *FolioWindowType) SetEmptyWindow(v bool)`

SetEmptyWindow sets EmptyWindow field to given value.

### HasEmptyWindow

`func (o *FolioWindowType) HasEmptyWindow() bool`

HasEmptyWindow returns a boolean if a field has been set.

### GetExchange

`func (o *FolioWindowType) GetExchange() FolioWindowExchangeAmounts`

GetExchange returns the Exchange field if non-nil, zero value otherwise.

### GetExchangeOk

`func (o *FolioWindowType) GetExchangeOk() (*FolioWindowExchangeAmounts, bool)`

GetExchangeOk returns a tuple with the Exchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchange

`func (o *FolioWindowType) SetExchange(v FolioWindowExchangeAmounts)`

SetExchange sets Exchange field to given value.

### HasExchange

`func (o *FolioWindowType) HasExchange() bool`

HasExchange returns a boolean if a field has been set.

### GetFiscalFolioInstruction

`func (o *FolioWindowType) GetFiscalFolioInstruction() FiscalFolioInstruction`

GetFiscalFolioInstruction returns the FiscalFolioInstruction field if non-nil, zero value otherwise.

### GetFiscalFolioInstructionOk

`func (o *FolioWindowType) GetFiscalFolioInstructionOk() (*FiscalFolioInstruction, bool)`

GetFiscalFolioInstructionOk returns a tuple with the FiscalFolioInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInstruction

`func (o *FolioWindowType) SetFiscalFolioInstruction(v FiscalFolioInstruction)`

SetFiscalFolioInstruction sets FiscalFolioInstruction field to given value.

### HasFiscalFolioInstruction

`func (o *FolioWindowType) HasFiscalFolioInstruction() bool`

HasFiscalFolioInstruction returns a boolean if a field has been set.

### GetFiscalResponseType

`func (o *FolioWindowType) GetFiscalResponseType() FiscalResponseType`

GetFiscalResponseType returns the FiscalResponseType field if non-nil, zero value otherwise.

### GetFiscalResponseTypeOk

`func (o *FolioWindowType) GetFiscalResponseTypeOk() (*FiscalResponseType, bool)`

GetFiscalResponseTypeOk returns a tuple with the FiscalResponseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalResponseType

`func (o *FolioWindowType) SetFiscalResponseType(v FiscalResponseType)`

SetFiscalResponseType sets FiscalResponseType field to given value.

### HasFiscalResponseType

`func (o *FolioWindowType) HasFiscalResponseType() bool`

HasFiscalResponseType returns a boolean if a field has been set.

### GetFolioSplitInfo

`func (o *FolioWindowType) GetFolioSplitInfo() []FolioSplitInfoType`

GetFolioSplitInfo returns the FolioSplitInfo field if non-nil, zero value otherwise.

### GetFolioSplitInfoOk

`func (o *FolioWindowType) GetFolioSplitInfoOk() (*[]FolioSplitInfoType, bool)`

GetFolioSplitInfoOk returns a tuple with the FolioSplitInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSplitInfo

`func (o *FolioWindowType) SetFolioSplitInfo(v []FolioSplitInfoType)`

SetFolioSplitInfo sets FolioSplitInfo field to given value.

### HasFolioSplitInfo

`func (o *FolioWindowType) HasFolioSplitInfo() bool`

HasFolioSplitInfo returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *FolioWindowType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *FolioWindowType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *FolioWindowType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *FolioWindowType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetFolios

`func (o *FolioWindowType) GetFolios() []FolioType`

GetFolios returns the Folios field if non-nil, zero value otherwise.

### GetFoliosOk

`func (o *FolioWindowType) GetFoliosOk() (*[]FolioType, bool)`

GetFoliosOk returns a tuple with the Folios field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolios

`func (o *FolioWindowType) SetFolios(v []FolioType)`

SetFolios sets Folios field to given value.

### HasFolios

`func (o *FolioWindowType) HasFolios() bool`

HasFolios returns a boolean if a field has been set.

### GetHasMore

`func (o *FolioWindowType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *FolioWindowType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *FolioWindowType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *FolioWindowType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *FolioWindowType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *FolioWindowType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *FolioWindowType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *FolioWindowType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetLimit

`func (o *FolioWindowType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *FolioWindowType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *FolioWindowType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *FolioWindowType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOfficialBIRReceiptExists

`func (o *FolioWindowType) GetOfficialBIRReceiptExists() bool`

GetOfficialBIRReceiptExists returns the OfficialBIRReceiptExists field if non-nil, zero value otherwise.

### GetOfficialBIRReceiptExistsOk

`func (o *FolioWindowType) GetOfficialBIRReceiptExistsOk() (*bool, bool)`

GetOfficialBIRReceiptExistsOk returns a tuple with the OfficialBIRReceiptExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOfficialBIRReceiptExists

`func (o *FolioWindowType) SetOfficialBIRReceiptExists(v bool)`

SetOfficialBIRReceiptExists sets OfficialBIRReceiptExists field to given value.

### HasOfficialBIRReceiptExists

`func (o *FolioWindowType) HasOfficialBIRReceiptExists() bool`

HasOfficialBIRReceiptExists returns a boolean if a field has been set.

### GetOffset

`func (o *FolioWindowType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *FolioWindowType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *FolioWindowType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *FolioWindowType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *FolioWindowType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *FolioWindowType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *FolioWindowType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *FolioWindowType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPayment

`func (o *FolioWindowType) GetPayment() CurrencyAmountType`

GetPayment returns the Payment field if non-nil, zero value otherwise.

### GetPaymentOk

`func (o *FolioWindowType) GetPaymentOk() (*CurrencyAmountType, bool)`

GetPaymentOk returns a tuple with the Payment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayment

`func (o *FolioWindowType) SetPayment(v CurrencyAmountType)`

SetPayment sets Payment field to given value.

### HasPayment

`func (o *FolioWindowType) HasPayment() bool`

HasPayment returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *FolioWindowType) GetPaymentMethod() ReservationPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *FolioWindowType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *FolioWindowType) SetPaymentMethod(v ReservationPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *FolioWindowType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetReceiptNo

`func (o *FolioWindowType) GetReceiptNo() float32`

GetReceiptNo returns the ReceiptNo field if non-nil, zero value otherwise.

### GetReceiptNoOk

`func (o *FolioWindowType) GetReceiptNoOk() (*float32, bool)`

GetReceiptNoOk returns a tuple with the ReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNo

`func (o *FolioWindowType) SetReceiptNo(v float32)`

SetReceiptNo sets ReceiptNo field to given value.

### HasReceiptNo

`func (o *FolioWindowType) HasReceiptNo() bool`

HasReceiptNo returns a boolean if a field has been set.

### GetRevenue

`func (o *FolioWindowType) GetRevenue() CurrencyAmountType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *FolioWindowType) GetRevenueOk() (*CurrencyAmountType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *FolioWindowType) SetRevenue(v CurrencyAmountType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *FolioWindowType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetServiceTypeInfo

`func (o *FolioWindowType) GetServiceTypeInfo() TransactionServiceTypesType`

GetServiceTypeInfo returns the ServiceTypeInfo field if non-nil, zero value otherwise.

### GetServiceTypeInfoOk

`func (o *FolioWindowType) GetServiceTypeInfoOk() (*TransactionServiceTypesType, bool)`

GetServiceTypeInfoOk returns a tuple with the ServiceTypeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceTypeInfo

`func (o *FolioWindowType) SetServiceTypeInfo(v TransactionServiceTypesType)`

SetServiceTypeInfo sets ServiceTypeInfo field to given value.

### HasServiceTypeInfo

`func (o *FolioWindowType) HasServiceTypeInfo() bool`

HasServiceTypeInfo returns a boolean if a field has been set.

### GetSimpleFolio

`func (o *FolioWindowType) GetSimpleFolio() bool`

GetSimpleFolio returns the SimpleFolio field if non-nil, zero value otherwise.

### GetSimpleFolioOk

`func (o *FolioWindowType) GetSimpleFolioOk() (*bool, bool)`

GetSimpleFolioOk returns a tuple with the SimpleFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimpleFolio

`func (o *FolioWindowType) SetSimpleFolio(v bool)`

SetSimpleFolio sets SimpleFolio field to given value.

### HasSimpleFolio

`func (o *FolioWindowType) HasSimpleFolio() bool`

HasSimpleFolio returns a boolean if a field has been set.

### GetStoredFolioId

`func (o *FolioWindowType) GetStoredFolioId() UniqueIDType`

GetStoredFolioId returns the StoredFolioId field if non-nil, zero value otherwise.

### GetStoredFolioIdOk

`func (o *FolioWindowType) GetStoredFolioIdOk() (*UniqueIDType, bool)`

GetStoredFolioIdOk returns a tuple with the StoredFolioId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioId

`func (o *FolioWindowType) SetStoredFolioId(v UniqueIDType)`

SetStoredFolioId sets StoredFolioId field to given value.

### HasStoredFolioId

`func (o *FolioWindowType) HasStoredFolioId() bool`

HasStoredFolioId returns a boolean if a field has been set.

### GetStoredFolioName

`func (o *FolioWindowType) GetStoredFolioName() string`

GetStoredFolioName returns the StoredFolioName field if non-nil, zero value otherwise.

### GetStoredFolioNameOk

`func (o *FolioWindowType) GetStoredFolioNameOk() (*string, bool)`

GetStoredFolioNameOk returns a tuple with the StoredFolioName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStoredFolioName

`func (o *FolioWindowType) SetStoredFolioName(v string)`

SetStoredFolioName sets StoredFolioName field to given value.

### HasStoredFolioName

`func (o *FolioWindowType) HasStoredFolioName() bool`

HasStoredFolioName returns a boolean if a field has been set.

### GetTotalPages

`func (o *FolioWindowType) GetTotalPages() int32`

GetTotalPages returns the TotalPages field if non-nil, zero value otherwise.

### GetTotalPagesOk

`func (o *FolioWindowType) GetTotalPagesOk() (*int32, bool)`

GetTotalPagesOk returns a tuple with the TotalPages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPages

`func (o *FolioWindowType) SetTotalPages(v int32)`

SetTotalPages sets TotalPages field to given value.

### HasTotalPages

`func (o *FolioWindowType) HasTotalPages() bool`

HasTotalPages returns a boolean if a field has been set.

### GetTotalResults

`func (o *FolioWindowType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *FolioWindowType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *FolioWindowType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *FolioWindowType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetTransactionNo

`func (o *FolioWindowType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *FolioWindowType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *FolioWindowType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *FolioWindowType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetVATOffsetAmount

`func (o *FolioWindowType) GetVATOffsetAmount() CurrencyAmountType`

GetVATOffsetAmount returns the VATOffsetAmount field if non-nil, zero value otherwise.

### GetVATOffsetAmountOk

`func (o *FolioWindowType) GetVATOffsetAmountOk() (*CurrencyAmountType, bool)`

GetVATOffsetAmountOk returns a tuple with the VATOffsetAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffsetAmount

`func (o *FolioWindowType) SetVATOffsetAmount(v CurrencyAmountType)`

SetVATOffsetAmount sets VATOffsetAmount field to given value.

### HasVATOffsetAmount

`func (o *FolioWindowType) HasVATOffsetAmount() bool`

HasVATOffsetAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


