# CopyYieldAdjustmentCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**YieldAdjustmentCodes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Yield AdjustmentCodes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyYieldAdjustmentCodes

`func NewCopyYieldAdjustmentCodes() *CopyYieldAdjustmentCodes`

NewCopyYieldAdjustmentCodes instantiates a new CopyYieldAdjustmentCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyYieldAdjustmentCodesWithDefaults

`func NewCopyYieldAdjustmentCodesWithDefaults() *CopyYieldAdjustmentCodes`

NewCopyYieldAdjustmentCodesWithDefaults instantiates a new CopyYieldAdjustmentCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodes) GetYieldAdjustmentCodes() []CopyConfigurationCodeType`

GetYieldAdjustmentCodes returns the YieldAdjustmentCodes field if non-nil, zero value otherwise.

### GetYieldAdjustmentCodesOk

`func (o *CopyYieldAdjustmentCodes) GetYieldAdjustmentCodesOk() (*[]CopyConfigurationCodeType, bool)`

GetYieldAdjustmentCodesOk returns a tuple with the YieldAdjustmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodes) SetYieldAdjustmentCodes(v []CopyConfigurationCodeType)`

SetYieldAdjustmentCodes sets YieldAdjustmentCodes field to given value.

### HasYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodes) HasYieldAdjustmentCodes() bool`

HasYieldAdjustmentCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CopyYieldAdjustmentCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyYieldAdjustmentCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyYieldAdjustmentCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyYieldAdjustmentCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyYieldAdjustmentCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyYieldAdjustmentCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyYieldAdjustmentCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyYieldAdjustmentCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


