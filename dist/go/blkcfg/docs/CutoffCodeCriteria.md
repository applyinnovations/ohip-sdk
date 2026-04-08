# CutoffCodeCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CutoffCodes** | Pointer to [**[]CutoffCodeType**](CutoffCodeType.md) | Cutoff Code, which will allow the user to define standard cutoff schedules. Cutoff schedule codes can be applied to blocks, to default number of cutoff days per stay date and room type. A default number number of cutoff days can be set on cutoff scheduler header level, and will be applied when no specific number of days has been defined for a date / room type combination within the cutoff schedule dates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCutoffCodeCriteria

`func NewCutoffCodeCriteria() *CutoffCodeCriteria`

NewCutoffCodeCriteria instantiates a new CutoffCodeCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCutoffCodeCriteriaWithDefaults

`func NewCutoffCodeCriteriaWithDefaults() *CutoffCodeCriteria`

NewCutoffCodeCriteriaWithDefaults instantiates a new CutoffCodeCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCutoffCodes

`func (o *CutoffCodeCriteria) GetCutoffCodes() []CutoffCodeType`

GetCutoffCodes returns the CutoffCodes field if non-nil, zero value otherwise.

### GetCutoffCodesOk

`func (o *CutoffCodeCriteria) GetCutoffCodesOk() (*[]CutoffCodeType, bool)`

GetCutoffCodesOk returns a tuple with the CutoffCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffCodes

`func (o *CutoffCodeCriteria) SetCutoffCodes(v []CutoffCodeType)`

SetCutoffCodes sets CutoffCodes field to given value.

### HasCutoffCodes

`func (o *CutoffCodeCriteria) HasCutoffCodes() bool`

HasCutoffCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CutoffCodeCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CutoffCodeCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CutoffCodeCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CutoffCodeCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CutoffCodeCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CutoffCodeCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CutoffCodeCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CutoffCodeCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


