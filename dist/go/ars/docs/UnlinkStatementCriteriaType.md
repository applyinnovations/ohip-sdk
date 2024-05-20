# UnlinkStatementCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** | Hotel code. | [optional] 
**InvoiceTrxNoList** | Pointer to **[]float32** | Transaction Number . | [optional] 

## Methods

### NewUnlinkStatementCriteriaType

`func NewUnlinkStatementCriteriaType() *UnlinkStatementCriteriaType`

NewUnlinkStatementCriteriaType instantiates a new UnlinkStatementCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnlinkStatementCriteriaTypeWithDefaults

`func NewUnlinkStatementCriteriaTypeWithDefaults() *UnlinkStatementCriteriaType`

NewUnlinkStatementCriteriaTypeWithDefaults instantiates a new UnlinkStatementCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierId

`func (o *UnlinkStatementCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *UnlinkStatementCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *UnlinkStatementCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *UnlinkStatementCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *UnlinkStatementCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *UnlinkStatementCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *UnlinkStatementCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *UnlinkStatementCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvoiceTrxNoList

`func (o *UnlinkStatementCriteriaType) GetInvoiceTrxNoList() []float32`

GetInvoiceTrxNoList returns the InvoiceTrxNoList field if non-nil, zero value otherwise.

### GetInvoiceTrxNoListOk

`func (o *UnlinkStatementCriteriaType) GetInvoiceTrxNoListOk() (*[]float32, bool)`

GetInvoiceTrxNoListOk returns a tuple with the InvoiceTrxNoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceTrxNoList

`func (o *UnlinkStatementCriteriaType) SetInvoiceTrxNoList(v []float32)`

SetInvoiceTrxNoList sets InvoiceTrxNoList field to given value.

### HasInvoiceTrxNoList

`func (o *UnlinkStatementCriteriaType) HasInvoiceTrxNoList() bool`

HasInvoiceTrxNoList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


