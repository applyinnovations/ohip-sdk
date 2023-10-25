# CopyYieldAdjustmentCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**YieldAdjustmentCodes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Yield AdjustmentCodes to be copied. | [optional] 

## Methods

### NewCopyYieldAdjustmentCodesRequest

`func NewCopyYieldAdjustmentCodesRequest() *CopyYieldAdjustmentCodesRequest`

NewCopyYieldAdjustmentCodesRequest instantiates a new CopyYieldAdjustmentCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyYieldAdjustmentCodesRequestWithDefaults

`func NewCopyYieldAdjustmentCodesRequestWithDefaults() *CopyYieldAdjustmentCodesRequest`

NewCopyYieldAdjustmentCodesRequestWithDefaults instantiates a new CopyYieldAdjustmentCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CopyYieldAdjustmentCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyYieldAdjustmentCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyYieldAdjustmentCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyYieldAdjustmentCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyYieldAdjustmentCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyYieldAdjustmentCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyYieldAdjustmentCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyYieldAdjustmentCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodesRequest) GetYieldAdjustmentCodes() []CopyConfigurationCodeType`

GetYieldAdjustmentCodes returns the YieldAdjustmentCodes field if non-nil, zero value otherwise.

### GetYieldAdjustmentCodesOk

`func (o *CopyYieldAdjustmentCodesRequest) GetYieldAdjustmentCodesOk() (*[]CopyConfigurationCodeType, bool)`

GetYieldAdjustmentCodesOk returns a tuple with the YieldAdjustmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodesRequest) SetYieldAdjustmentCodes(v []CopyConfigurationCodeType)`

SetYieldAdjustmentCodes sets YieldAdjustmentCodes field to given value.

### HasYieldAdjustmentCodes

`func (o *CopyYieldAdjustmentCodesRequest) HasYieldAdjustmentCodes() bool`

HasYieldAdjustmentCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


