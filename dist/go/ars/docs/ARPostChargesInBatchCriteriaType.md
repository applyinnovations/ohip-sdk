# ARPostChargesInBatchCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ChargeInfo** | Pointer to [**ChargeCriteriaType**](ChargeCriteriaType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 

## Methods

### NewARPostChargesInBatchCriteriaType

`func NewARPostChargesInBatchCriteriaType() *ARPostChargesInBatchCriteriaType`

NewARPostChargesInBatchCriteriaType instantiates a new ARPostChargesInBatchCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARPostChargesInBatchCriteriaTypeWithDefaults

`func NewARPostChargesInBatchCriteriaTypeWithDefaults() *ARPostChargesInBatchCriteriaType`

NewARPostChargesInBatchCriteriaTypeWithDefaults instantiates a new ARPostChargesInBatchCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountIdList

`func (o *ARPostChargesInBatchCriteriaType) GetAccountIdList() []UniqueIDType`

GetAccountIdList returns the AccountIdList field if non-nil, zero value otherwise.

### GetAccountIdListOk

`func (o *ARPostChargesInBatchCriteriaType) GetAccountIdListOk() (*[]UniqueIDType, bool)`

GetAccountIdListOk returns a tuple with the AccountIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIdList

`func (o *ARPostChargesInBatchCriteriaType) SetAccountIdList(v []UniqueIDType)`

SetAccountIdList sets AccountIdList field to given value.

### HasAccountIdList

`func (o *ARPostChargesInBatchCriteriaType) HasAccountIdList() bool`

HasAccountIdList returns a boolean if a field has been set.

### GetChargeInfo

`func (o *ARPostChargesInBatchCriteriaType) GetChargeInfo() ChargeCriteriaType`

GetChargeInfo returns the ChargeInfo field if non-nil, zero value otherwise.

### GetChargeInfoOk

`func (o *ARPostChargesInBatchCriteriaType) GetChargeInfoOk() (*ChargeCriteriaType, bool)`

GetChargeInfoOk returns a tuple with the ChargeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeInfo

`func (o *ARPostChargesInBatchCriteriaType) SetChargeInfo(v ChargeCriteriaType)`

SetChargeInfo sets ChargeInfo field to given value.

### HasChargeInfo

`func (o *ARPostChargesInBatchCriteriaType) HasChargeInfo() bool`

HasChargeInfo returns a boolean if a field has been set.

### GetCashierId

`func (o *ARPostChargesInBatchCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARPostChargesInBatchCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARPostChargesInBatchCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARPostChargesInBatchCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetHotelId

`func (o *ARPostChargesInBatchCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARPostChargesInBatchCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARPostChargesInBatchCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARPostChargesInBatchCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


