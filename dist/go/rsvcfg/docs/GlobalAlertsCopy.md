# GlobalAlertsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInstructions** | Pointer to [**CopyGlobalAlertType**](CopyGlobalAlertType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGlobalAlertsCopy

`func NewGlobalAlertsCopy() *GlobalAlertsCopy`

NewGlobalAlertsCopy instantiates a new GlobalAlertsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGlobalAlertsCopyWithDefaults

`func NewGlobalAlertsCopyWithDefaults() *GlobalAlertsCopy`

NewGlobalAlertsCopyWithDefaults instantiates a new GlobalAlertsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInstructions

`func (o *GlobalAlertsCopy) GetCopyInstructions() CopyGlobalAlertType`

GetCopyInstructions returns the CopyInstructions field if non-nil, zero value otherwise.

### GetCopyInstructionsOk

`func (o *GlobalAlertsCopy) GetCopyInstructionsOk() (*CopyGlobalAlertType, bool)`

GetCopyInstructionsOk returns a tuple with the CopyInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInstructions

`func (o *GlobalAlertsCopy) SetCopyInstructions(v CopyGlobalAlertType)`

SetCopyInstructions sets CopyInstructions field to given value.

### HasCopyInstructions

`func (o *GlobalAlertsCopy) HasCopyInstructions() bool`

HasCopyInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *GlobalAlertsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GlobalAlertsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GlobalAlertsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GlobalAlertsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GlobalAlertsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GlobalAlertsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GlobalAlertsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GlobalAlertsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


