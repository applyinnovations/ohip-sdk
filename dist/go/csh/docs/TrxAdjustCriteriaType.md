# TrxAdjustCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code where the reservation transaction exists. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**TransactionList** | Pointer to **[]float32** | The unique transaction number of this transaction. | [optional] 
**Details** | Pointer to [**AdjustmentDetailsType**](AdjustmentDetailsType.md) |  | [optional] 
**IncomeAuditDate** | Pointer to **string** | Date of the Audit. This is used when postings are being created using the Income Audit functionality. | [optional] 
**ARAccountNo** | Pointer to **string** | The AR Account Number for the Account. | [optional] 
**ARInvoiceNo** | Pointer to **float32** | The AR Invoice Number for the Account. | [optional] 
**CustomChargeExemptionDetails** | Pointer to [**[]CustomChargeExemptionType**](CustomChargeExemptionType.md) | List of Custom Charge Exemptions. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 

## Methods

### NewTrxAdjustCriteriaType

`func NewTrxAdjustCriteriaType() *TrxAdjustCriteriaType`

NewTrxAdjustCriteriaType instantiates a new TrxAdjustCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxAdjustCriteriaTypeWithDefaults

`func NewTrxAdjustCriteriaTypeWithDefaults() *TrxAdjustCriteriaType`

NewTrxAdjustCriteriaTypeWithDefaults instantiates a new TrxAdjustCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TrxAdjustCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrxAdjustCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrxAdjustCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrxAdjustCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *TrxAdjustCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *TrxAdjustCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *TrxAdjustCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *TrxAdjustCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetTransactionList

`func (o *TrxAdjustCriteriaType) GetTransactionList() []float32`

GetTransactionList returns the TransactionList field if non-nil, zero value otherwise.

### GetTransactionListOk

`func (o *TrxAdjustCriteriaType) GetTransactionListOk() (*[]float32, bool)`

GetTransactionListOk returns a tuple with the TransactionList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionList

`func (o *TrxAdjustCriteriaType) SetTransactionList(v []float32)`

SetTransactionList sets TransactionList field to given value.

### HasTransactionList

`func (o *TrxAdjustCriteriaType) HasTransactionList() bool`

HasTransactionList returns a boolean if a field has been set.

### GetDetails

`func (o *TrxAdjustCriteriaType) GetDetails() AdjustmentDetailsType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *TrxAdjustCriteriaType) GetDetailsOk() (*AdjustmentDetailsType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *TrxAdjustCriteriaType) SetDetails(v AdjustmentDetailsType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *TrxAdjustCriteriaType) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetIncomeAuditDate

`func (o *TrxAdjustCriteriaType) GetIncomeAuditDate() string`

GetIncomeAuditDate returns the IncomeAuditDate field if non-nil, zero value otherwise.

### GetIncomeAuditDateOk

`func (o *TrxAdjustCriteriaType) GetIncomeAuditDateOk() (*string, bool)`

GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncomeAuditDate

`func (o *TrxAdjustCriteriaType) SetIncomeAuditDate(v string)`

SetIncomeAuditDate sets IncomeAuditDate field to given value.

### HasIncomeAuditDate

`func (o *TrxAdjustCriteriaType) HasIncomeAuditDate() bool`

HasIncomeAuditDate returns a boolean if a field has been set.

### GetARAccountNo

`func (o *TrxAdjustCriteriaType) GetARAccountNo() string`

GetARAccountNo returns the ARAccountNo field if non-nil, zero value otherwise.

### GetARAccountNoOk

`func (o *TrxAdjustCriteriaType) GetARAccountNoOk() (*string, bool)`

GetARAccountNoOk returns a tuple with the ARAccountNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARAccountNo

`func (o *TrxAdjustCriteriaType) SetARAccountNo(v string)`

SetARAccountNo sets ARAccountNo field to given value.

### HasARAccountNo

`func (o *TrxAdjustCriteriaType) HasARAccountNo() bool`

HasARAccountNo returns a boolean if a field has been set.

### GetARInvoiceNo

`func (o *TrxAdjustCriteriaType) GetARInvoiceNo() float32`

GetARInvoiceNo returns the ARInvoiceNo field if non-nil, zero value otherwise.

### GetARInvoiceNoOk

`func (o *TrxAdjustCriteriaType) GetARInvoiceNoOk() (*float32, bool)`

GetARInvoiceNoOk returns a tuple with the ARInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARInvoiceNo

`func (o *TrxAdjustCriteriaType) SetARInvoiceNo(v float32)`

SetARInvoiceNo sets ARInvoiceNo field to given value.

### HasARInvoiceNo

`func (o *TrxAdjustCriteriaType) HasARInvoiceNo() bool`

HasARInvoiceNo returns a boolean if a field has been set.

### GetCustomChargeExemptionDetails

`func (o *TrxAdjustCriteriaType) GetCustomChargeExemptionDetails() []CustomChargeExemptionType`

GetCustomChargeExemptionDetails returns the CustomChargeExemptionDetails field if non-nil, zero value otherwise.

### GetCustomChargeExemptionDetailsOk

`func (o *TrxAdjustCriteriaType) GetCustomChargeExemptionDetailsOk() (*[]CustomChargeExemptionType, bool)`

GetCustomChargeExemptionDetailsOk returns a tuple with the CustomChargeExemptionDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomChargeExemptionDetails

`func (o *TrxAdjustCriteriaType) SetCustomChargeExemptionDetails(v []CustomChargeExemptionType)`

SetCustomChargeExemptionDetails sets CustomChargeExemptionDetails field to given value.

### HasCustomChargeExemptionDetails

`func (o *TrxAdjustCriteriaType) HasCustomChargeExemptionDetails() bool`

HasCustomChargeExemptionDetails returns a boolean if a field has been set.

### GetCashierId

`func (o *TrxAdjustCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *TrxAdjustCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *TrxAdjustCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *TrxAdjustCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


