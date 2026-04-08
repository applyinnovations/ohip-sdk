# AdjustmentCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Adjustment Codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdjustmentCodesCopy

`func NewAdjustmentCodesCopy() *AdjustmentCodesCopy`

NewAdjustmentCodesCopy instantiates a new AdjustmentCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustmentCodesCopyWithDefaults

`func NewAdjustmentCodesCopyWithDefaults() *AdjustmentCodesCopy`

NewAdjustmentCodesCopyWithDefaults instantiates a new AdjustmentCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCode

`func (o *AdjustmentCodesCopy) GetAdjustmentCode() []CopyConfigurationCodeType`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *AdjustmentCodesCopy) GetAdjustmentCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *AdjustmentCodesCopy) SetAdjustmentCode(v []CopyConfigurationCodeType)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *AdjustmentCodesCopy) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetLinks

`func (o *AdjustmentCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdjustmentCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdjustmentCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdjustmentCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AdjustmentCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdjustmentCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdjustmentCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdjustmentCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


