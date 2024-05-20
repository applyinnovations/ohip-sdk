# RotationPeriod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RotationPeriod** | Pointer to [**RotationPeriodType**](RotationPeriodType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRotationPeriod

`func NewRotationPeriod() *RotationPeriod`

NewRotationPeriod instantiates a new RotationPeriod object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRotationPeriodWithDefaults

`func NewRotationPeriodWithDefaults() *RotationPeriod`

NewRotationPeriodWithDefaults instantiates a new RotationPeriod object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRotationPeriod

`func (o *RotationPeriod) GetRotationPeriod() RotationPeriodType`

GetRotationPeriod returns the RotationPeriod field if non-nil, zero value otherwise.

### GetRotationPeriodOk

`func (o *RotationPeriod) GetRotationPeriodOk() (*RotationPeriodType, bool)`

GetRotationPeriodOk returns a tuple with the RotationPeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationPeriod

`func (o *RotationPeriod) SetRotationPeriod(v RotationPeriodType)`

SetRotationPeriod sets RotationPeriod field to given value.

### HasRotationPeriod

`func (o *RotationPeriod) HasRotationPeriod() bool`

HasRotationPeriod returns a boolean if a field has been set.

### GetWarnings

`func (o *RotationPeriod) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RotationPeriod) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RotationPeriod) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RotationPeriod) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


