# AdjustmentDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Department** | Pointer to **string** | The department name or ID with which the adjustment is associated. | [optional] 
**Percentage** | Pointer to **float32** | The percentage by which the transaction has to be adjusted. | [optional] 
**ReasonCode** | Pointer to **string** | The reason code for the adjustment. | [optional] 
**ReasonDescription** | Pointer to **string** | The reason text for the adjustment. | [optional] 

## Methods

### NewAdjustmentDetailsType

`func NewAdjustmentDetailsType() *AdjustmentDetailsType`

NewAdjustmentDetailsType instantiates a new AdjustmentDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustmentDetailsTypeWithDefaults

`func NewAdjustmentDetailsTypeWithDefaults() *AdjustmentDetailsType`

NewAdjustmentDetailsTypeWithDefaults instantiates a new AdjustmentDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *AdjustmentDetailsType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *AdjustmentDetailsType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *AdjustmentDetailsType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *AdjustmentDetailsType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetDepartment

`func (o *AdjustmentDetailsType) GetDepartment() string`

GetDepartment returns the Department field if non-nil, zero value otherwise.

### GetDepartmentOk

`func (o *AdjustmentDetailsType) GetDepartmentOk() (*string, bool)`

GetDepartmentOk returns a tuple with the Department field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartment

`func (o *AdjustmentDetailsType) SetDepartment(v string)`

SetDepartment sets Department field to given value.

### HasDepartment

`func (o *AdjustmentDetailsType) HasDepartment() bool`

HasDepartment returns a boolean if a field has been set.

### GetPercentage

`func (o *AdjustmentDetailsType) GetPercentage() float32`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *AdjustmentDetailsType) GetPercentageOk() (*float32, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *AdjustmentDetailsType) SetPercentage(v float32)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *AdjustmentDetailsType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetReasonCode

`func (o *AdjustmentDetailsType) GetReasonCode() string`

GetReasonCode returns the ReasonCode field if non-nil, zero value otherwise.

### GetReasonCodeOk

`func (o *AdjustmentDetailsType) GetReasonCodeOk() (*string, bool)`

GetReasonCodeOk returns a tuple with the ReasonCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonCode

`func (o *AdjustmentDetailsType) SetReasonCode(v string)`

SetReasonCode sets ReasonCode field to given value.

### HasReasonCode

`func (o *AdjustmentDetailsType) HasReasonCode() bool`

HasReasonCode returns a boolean if a field has been set.

### GetReasonDescription

`func (o *AdjustmentDetailsType) GetReasonDescription() string`

GetReasonDescription returns the ReasonDescription field if non-nil, zero value otherwise.

### GetReasonDescriptionOk

`func (o *AdjustmentDetailsType) GetReasonDescriptionOk() (*string, bool)`

GetReasonDescriptionOk returns a tuple with the ReasonDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReasonDescription

`func (o *AdjustmentDetailsType) SetReasonDescription(v string)`

SetReasonDescription sets ReasonDescription field to given value.

### HasReasonDescription

`func (o *AdjustmentDetailsType) HasReasonDescription() bool`

HasReasonDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


