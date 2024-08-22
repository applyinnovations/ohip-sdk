# GenerateFolioCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllFolioWindow** | Pointer to **bool** | Flag to decide if folios is to be generated for all windows in addition to the one requested with applicable postings and zero balance. If any of the windows have non-zero balance then folios are not generated for other windows. | [optional] 
**AssociatedBillInfo** | Pointer to [**AssociatedBillInfoType**](AssociatedBillInfoType.md) |  | [optional] 
**Balance** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Correction** | Pointer to **bool** | Correction flag | [optional] 
**DebitFolio** | Pointer to **bool** | Indicates the type of folio to be generated | [optional] 
**EventType** | Pointer to [**CashieringEventType**](CashieringEventType.md) |  | [optional] 
**FiscalFolioInstruction** | Pointer to [**FiscalFolioInstruction**](FiscalFolioInstruction.md) |  | [optional] 
**FiscalInvoicingCurrencyInfo** | Pointer to [**ExchangeRateInfoType**](ExchangeRateInfoType.md) |  | [optional] 
**FiscalTerminalId** | Pointer to **string** | Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected. | [optional] 
**FolioNameValue** | Pointer to [**[]NameValueHeaderDetailType**](NameValueHeaderDetailType.md) | Custom Folio Name Value Information to be saved | [optional] 
**FolioQueue** | Pointer to [**FolioQueueType**](FolioQueueType.md) |  | [optional] 
**FolioSeqId** | Pointer to **int32** | Fiscal Folio sequence ID stored in queue table. | [optional] 
**FolioTypeValidation** | Pointer to [**FolioTypeValidationType**](FolioTypeValidationType.md) |  | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ManualFolioNo** | Pointer to **int32** | Manual Folio Number used for settlement during checkout | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Reason** | Pointer to [**FolioReasonType**](FolioReasonType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**SimpleFolio** | Pointer to **bool** | This flag signifies that generated Folio is Normal or Simple Folio. Certain countries of the World mandate a simple folio when the invoice amount is less than defined threshold. | [optional] 
**TransactionServiceType** | Pointer to **string** | Contains transaction service type. | [optional] 
**Transactions** | Pointer to [**[]TransactionType**](TransactionType.md) | List of transaction information. | [optional] 

## Methods

### NewGenerateFolioCriteriaType

`func NewGenerateFolioCriteriaType() *GenerateFolioCriteriaType`

NewGenerateFolioCriteriaType instantiates a new GenerateFolioCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateFolioCriteriaTypeWithDefaults

`func NewGenerateFolioCriteriaTypeWithDefaults() *GenerateFolioCriteriaType`

NewGenerateFolioCriteriaTypeWithDefaults instantiates a new GenerateFolioCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllFolioWindow

`func (o *GenerateFolioCriteriaType) GetAllFolioWindow() bool`

GetAllFolioWindow returns the AllFolioWindow field if non-nil, zero value otherwise.

### GetAllFolioWindowOk

`func (o *GenerateFolioCriteriaType) GetAllFolioWindowOk() (*bool, bool)`

GetAllFolioWindowOk returns a tuple with the AllFolioWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllFolioWindow

`func (o *GenerateFolioCriteriaType) SetAllFolioWindow(v bool)`

SetAllFolioWindow sets AllFolioWindow field to given value.

### HasAllFolioWindow

`func (o *GenerateFolioCriteriaType) HasAllFolioWindow() bool`

HasAllFolioWindow returns a boolean if a field has been set.

### GetAssociatedBillInfo

`func (o *GenerateFolioCriteriaType) GetAssociatedBillInfo() AssociatedBillInfoType`

GetAssociatedBillInfo returns the AssociatedBillInfo field if non-nil, zero value otherwise.

### GetAssociatedBillInfoOk

`func (o *GenerateFolioCriteriaType) GetAssociatedBillInfoOk() (*AssociatedBillInfoType, bool)`

GetAssociatedBillInfoOk returns a tuple with the AssociatedBillInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedBillInfo

`func (o *GenerateFolioCriteriaType) SetAssociatedBillInfo(v AssociatedBillInfoType)`

SetAssociatedBillInfo sets AssociatedBillInfo field to given value.

### HasAssociatedBillInfo

`func (o *GenerateFolioCriteriaType) HasAssociatedBillInfo() bool`

HasAssociatedBillInfo returns a boolean if a field has been set.

### GetBalance

`func (o *GenerateFolioCriteriaType) GetBalance() CurrencyAmountType`

GetBalance returns the Balance field if non-nil, zero value otherwise.

### GetBalanceOk

`func (o *GenerateFolioCriteriaType) GetBalanceOk() (*CurrencyAmountType, bool)`

GetBalanceOk returns a tuple with the Balance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBalance

`func (o *GenerateFolioCriteriaType) SetBalance(v CurrencyAmountType)`

SetBalance sets Balance field to given value.

### HasBalance

`func (o *GenerateFolioCriteriaType) HasBalance() bool`

HasBalance returns a boolean if a field has been set.

### GetCashierId

`func (o *GenerateFolioCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *GenerateFolioCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *GenerateFolioCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *GenerateFolioCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCorrection

`func (o *GenerateFolioCriteriaType) GetCorrection() bool`

GetCorrection returns the Correction field if non-nil, zero value otherwise.

### GetCorrectionOk

`func (o *GenerateFolioCriteriaType) GetCorrectionOk() (*bool, bool)`

GetCorrectionOk returns a tuple with the Correction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrection

`func (o *GenerateFolioCriteriaType) SetCorrection(v bool)`

SetCorrection sets Correction field to given value.

### HasCorrection

`func (o *GenerateFolioCriteriaType) HasCorrection() bool`

HasCorrection returns a boolean if a field has been set.

### GetDebitFolio

`func (o *GenerateFolioCriteriaType) GetDebitFolio() bool`

GetDebitFolio returns the DebitFolio field if non-nil, zero value otherwise.

### GetDebitFolioOk

`func (o *GenerateFolioCriteriaType) GetDebitFolioOk() (*bool, bool)`

GetDebitFolioOk returns a tuple with the DebitFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitFolio

`func (o *GenerateFolioCriteriaType) SetDebitFolio(v bool)`

SetDebitFolio sets DebitFolio field to given value.

### HasDebitFolio

`func (o *GenerateFolioCriteriaType) HasDebitFolio() bool`

HasDebitFolio returns a boolean if a field has been set.

### GetEventType

`func (o *GenerateFolioCriteriaType) GetEventType() CashieringEventType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *GenerateFolioCriteriaType) GetEventTypeOk() (*CashieringEventType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *GenerateFolioCriteriaType) SetEventType(v CashieringEventType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *GenerateFolioCriteriaType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetFiscalFolioInstruction

`func (o *GenerateFolioCriteriaType) GetFiscalFolioInstruction() FiscalFolioInstruction`

GetFiscalFolioInstruction returns the FiscalFolioInstruction field if non-nil, zero value otherwise.

### GetFiscalFolioInstructionOk

`func (o *GenerateFolioCriteriaType) GetFiscalFolioInstructionOk() (*FiscalFolioInstruction, bool)`

GetFiscalFolioInstructionOk returns a tuple with the FiscalFolioInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalFolioInstruction

`func (o *GenerateFolioCriteriaType) SetFiscalFolioInstruction(v FiscalFolioInstruction)`

SetFiscalFolioInstruction sets FiscalFolioInstruction field to given value.

### HasFiscalFolioInstruction

`func (o *GenerateFolioCriteriaType) HasFiscalFolioInstruction() bool`

HasFiscalFolioInstruction returns a boolean if a field has been set.

### GetFiscalInvoicingCurrencyInfo

`func (o *GenerateFolioCriteriaType) GetFiscalInvoicingCurrencyInfo() ExchangeRateInfoType`

GetFiscalInvoicingCurrencyInfo returns the FiscalInvoicingCurrencyInfo field if non-nil, zero value otherwise.

### GetFiscalInvoicingCurrencyInfoOk

`func (o *GenerateFolioCriteriaType) GetFiscalInvoicingCurrencyInfoOk() (*ExchangeRateInfoType, bool)`

GetFiscalInvoicingCurrencyInfoOk returns a tuple with the FiscalInvoicingCurrencyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalInvoicingCurrencyInfo

`func (o *GenerateFolioCriteriaType) SetFiscalInvoicingCurrencyInfo(v ExchangeRateInfoType)`

SetFiscalInvoicingCurrencyInfo sets FiscalInvoicingCurrencyInfo field to given value.

### HasFiscalInvoicingCurrencyInfo

`func (o *GenerateFolioCriteriaType) HasFiscalInvoicingCurrencyInfo() bool`

HasFiscalInvoicingCurrencyInfo returns a boolean if a field has been set.

### GetFiscalTerminalId

`func (o *GenerateFolioCriteriaType) GetFiscalTerminalId() string`

GetFiscalTerminalId returns the FiscalTerminalId field if non-nil, zero value otherwise.

### GetFiscalTerminalIdOk

`func (o *GenerateFolioCriteriaType) GetFiscalTerminalIdOk() (*string, bool)`

GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalTerminalId

`func (o *GenerateFolioCriteriaType) SetFiscalTerminalId(v string)`

SetFiscalTerminalId sets FiscalTerminalId field to given value.

### HasFiscalTerminalId

`func (o *GenerateFolioCriteriaType) HasFiscalTerminalId() bool`

HasFiscalTerminalId returns a boolean if a field has been set.

### GetFolioNameValue

`func (o *GenerateFolioCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType`

GetFolioNameValue returns the FolioNameValue field if non-nil, zero value otherwise.

### GetFolioNameValueOk

`func (o *GenerateFolioCriteriaType) GetFolioNameValueOk() (*[]NameValueHeaderDetailType, bool)`

GetFolioNameValueOk returns a tuple with the FolioNameValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNameValue

`func (o *GenerateFolioCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType)`

SetFolioNameValue sets FolioNameValue field to given value.

### HasFolioNameValue

`func (o *GenerateFolioCriteriaType) HasFolioNameValue() bool`

HasFolioNameValue returns a boolean if a field has been set.

### GetFolioQueue

`func (o *GenerateFolioCriteriaType) GetFolioQueue() FolioQueueType`

GetFolioQueue returns the FolioQueue field if non-nil, zero value otherwise.

### GetFolioQueueOk

`func (o *GenerateFolioCriteriaType) GetFolioQueueOk() (*FolioQueueType, bool)`

GetFolioQueueOk returns a tuple with the FolioQueue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioQueue

`func (o *GenerateFolioCriteriaType) SetFolioQueue(v FolioQueueType)`

SetFolioQueue sets FolioQueue field to given value.

### HasFolioQueue

`func (o *GenerateFolioCriteriaType) HasFolioQueue() bool`

HasFolioQueue returns a boolean if a field has been set.

### GetFolioSeqId

`func (o *GenerateFolioCriteriaType) GetFolioSeqId() int32`

GetFolioSeqId returns the FolioSeqId field if non-nil, zero value otherwise.

### GetFolioSeqIdOk

`func (o *GenerateFolioCriteriaType) GetFolioSeqIdOk() (*int32, bool)`

GetFolioSeqIdOk returns a tuple with the FolioSeqId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioSeqId

`func (o *GenerateFolioCriteriaType) SetFolioSeqId(v int32)`

SetFolioSeqId sets FolioSeqId field to given value.

### HasFolioSeqId

`func (o *GenerateFolioCriteriaType) HasFolioSeqId() bool`

HasFolioSeqId returns a boolean if a field has been set.

### GetFolioTypeValidation

`func (o *GenerateFolioCriteriaType) GetFolioTypeValidation() FolioTypeValidationType`

GetFolioTypeValidation returns the FolioTypeValidation field if non-nil, zero value otherwise.

### GetFolioTypeValidationOk

`func (o *GenerateFolioCriteriaType) GetFolioTypeValidationOk() (*FolioTypeValidationType, bool)`

GetFolioTypeValidationOk returns a tuple with the FolioTypeValidation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeValidation

`func (o *GenerateFolioCriteriaType) SetFolioTypeValidation(v FolioTypeValidationType)`

SetFolioTypeValidation sets FolioTypeValidation field to given value.

### HasFolioTypeValidation

`func (o *GenerateFolioCriteriaType) HasFolioTypeValidation() bool`

HasFolioTypeValidation returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *GenerateFolioCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *GenerateFolioCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *GenerateFolioCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *GenerateFolioCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetHotelId

`func (o *GenerateFolioCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GenerateFolioCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GenerateFolioCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GenerateFolioCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManualFolioNo

`func (o *GenerateFolioCriteriaType) GetManualFolioNo() int32`

GetManualFolioNo returns the ManualFolioNo field if non-nil, zero value otherwise.

### GetManualFolioNoOk

`func (o *GenerateFolioCriteriaType) GetManualFolioNoOk() (*int32, bool)`

GetManualFolioNoOk returns a tuple with the ManualFolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualFolioNo

`func (o *GenerateFolioCriteriaType) SetManualFolioNo(v int32)`

SetManualFolioNo sets ManualFolioNo field to given value.

### HasManualFolioNo

`func (o *GenerateFolioCriteriaType) HasManualFolioNo() bool`

HasManualFolioNo returns a boolean if a field has been set.

### GetProfileId

`func (o *GenerateFolioCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *GenerateFolioCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *GenerateFolioCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *GenerateFolioCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetReason

`func (o *GenerateFolioCriteriaType) GetReason() FolioReasonType`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *GenerateFolioCriteriaType) GetReasonOk() (*FolioReasonType, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *GenerateFolioCriteriaType) SetReason(v FolioReasonType)`

SetReason sets Reason field to given value.

### HasReason

`func (o *GenerateFolioCriteriaType) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetReservationId

`func (o *GenerateFolioCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *GenerateFolioCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *GenerateFolioCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *GenerateFolioCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetSimpleFolio

`func (o *GenerateFolioCriteriaType) GetSimpleFolio() bool`

GetSimpleFolio returns the SimpleFolio field if non-nil, zero value otherwise.

### GetSimpleFolioOk

`func (o *GenerateFolioCriteriaType) GetSimpleFolioOk() (*bool, bool)`

GetSimpleFolioOk returns a tuple with the SimpleFolio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSimpleFolio

`func (o *GenerateFolioCriteriaType) SetSimpleFolio(v bool)`

SetSimpleFolio sets SimpleFolio field to given value.

### HasSimpleFolio

`func (o *GenerateFolioCriteriaType) HasSimpleFolio() bool`

HasSimpleFolio returns a boolean if a field has been set.

### GetTransactionServiceType

`func (o *GenerateFolioCriteriaType) GetTransactionServiceType() string`

GetTransactionServiceType returns the TransactionServiceType field if non-nil, zero value otherwise.

### GetTransactionServiceTypeOk

`func (o *GenerateFolioCriteriaType) GetTransactionServiceTypeOk() (*string, bool)`

GetTransactionServiceTypeOk returns a tuple with the TransactionServiceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionServiceType

`func (o *GenerateFolioCriteriaType) SetTransactionServiceType(v string)`

SetTransactionServiceType sets TransactionServiceType field to given value.

### HasTransactionServiceType

`func (o *GenerateFolioCriteriaType) HasTransactionServiceType() bool`

HasTransactionServiceType returns a boolean if a field has been set.

### GetTransactions

`func (o *GenerateFolioCriteriaType) GetTransactions() []TransactionType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *GenerateFolioCriteriaType) GetTransactionsOk() (*[]TransactionType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *GenerateFolioCriteriaType) SetTransactions(v []TransactionType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *GenerateFolioCriteriaType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


