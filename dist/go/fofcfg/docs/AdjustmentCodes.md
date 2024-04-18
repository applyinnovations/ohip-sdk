# AdjustmentCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCodes** | Pointer to [**[]AdjustmentCodeType**](AdjustmentCodeType.md) | Holds Adjustment Code details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdjustmentCodes

`func NewAdjustmentCodes() *AdjustmentCodes`

NewAdjustmentCodes instantiates a new AdjustmentCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdjustmentCodesWithDefaults

`func NewAdjustmentCodesWithDefaults() *AdjustmentCodes`

NewAdjustmentCodesWithDefaults instantiates a new AdjustmentCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCodes

`func (o *AdjustmentCodes) GetAdjustmentCodes() []AdjustmentCodeType`

GetAdjustmentCodes returns the AdjustmentCodes field if non-nil, zero value otherwise.

### GetAdjustmentCodesOk

`func (o *AdjustmentCodes) GetAdjustmentCodesOk() (*[]AdjustmentCodeType, bool)`

GetAdjustmentCodesOk returns a tuple with the AdjustmentCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCodes

`func (o *AdjustmentCodes) SetAdjustmentCodes(v []AdjustmentCodeType)`

SetAdjustmentCodes sets AdjustmentCodes field to given value.

### HasAdjustmentCodes

`func (o *AdjustmentCodes) HasAdjustmentCodes() bool`

HasAdjustmentCodes returns a boolean if a field has been set.

### GetLinks

`func (o *AdjustmentCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdjustmentCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdjustmentCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdjustmentCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AdjustmentCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdjustmentCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdjustmentCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdjustmentCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


