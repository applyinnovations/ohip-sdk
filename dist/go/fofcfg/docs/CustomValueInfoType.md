# CustomValueInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MonthlyValueInfo** | Pointer to [**[]MonthlyValueInfoType**](MonthlyValueInfoType.md) | Value information for each month for CUSTOM segment code. | [optional] 
**TotalValue** | Pointer to **float32** | Total Value for CUSTOM segment code. | [optional] 

## Methods

### NewCustomValueInfoType

`func NewCustomValueInfoType() *CustomValueInfoType`

NewCustomValueInfoType instantiates a new CustomValueInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomValueInfoTypeWithDefaults

`func NewCustomValueInfoTypeWithDefaults() *CustomValueInfoType`

NewCustomValueInfoTypeWithDefaults instantiates a new CustomValueInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMonthlyValueInfo

`func (o *CustomValueInfoType) GetMonthlyValueInfo() []MonthlyValueInfoType`

GetMonthlyValueInfo returns the MonthlyValueInfo field if non-nil, zero value otherwise.

### GetMonthlyValueInfoOk

`func (o *CustomValueInfoType) GetMonthlyValueInfoOk() (*[]MonthlyValueInfoType, bool)`

GetMonthlyValueInfoOk returns a tuple with the MonthlyValueInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthlyValueInfo

`func (o *CustomValueInfoType) SetMonthlyValueInfo(v []MonthlyValueInfoType)`

SetMonthlyValueInfo sets MonthlyValueInfo field to given value.

### HasMonthlyValueInfo

`func (o *CustomValueInfoType) HasMonthlyValueInfo() bool`

HasMonthlyValueInfo returns a boolean if a field has been set.

### GetTotalValue

`func (o *CustomValueInfoType) GetTotalValue() float32`

GetTotalValue returns the TotalValue field if non-nil, zero value otherwise.

### GetTotalValueOk

`func (o *CustomValueInfoType) GetTotalValueOk() (*float32, bool)`

GetTotalValueOk returns a tuple with the TotalValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalValue

`func (o *CustomValueInfoType) SetTotalValue(v float32)`

SetTotalValue sets TotalValue field to given value.

### HasTotalValue

`func (o *CustomValueInfoType) HasTotalValue() bool`

HasTotalValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


