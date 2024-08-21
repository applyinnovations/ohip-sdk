# RoutingInstructionsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the routing instructions to be copied to hotel code(s). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoutingInstructionsCopy

`func NewRoutingInstructionsCopy() *RoutingInstructionsCopy`

NewRoutingInstructionsCopy instantiates a new RoutingInstructionsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsCopyWithDefaults

`func NewRoutingInstructionsCopyWithDefaults() *RoutingInstructionsCopy`

NewRoutingInstructionsCopyWithDefaults instantiates a new RoutingInstructionsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoutingInstructionsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoutingInstructionsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoutingInstructionsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoutingInstructionsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *RoutingInstructionsCopy) GetRoutingInstructions() []CopyConfigurationCodeType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *RoutingInstructionsCopy) GetRoutingInstructionsOk() (*[]CopyConfigurationCodeType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *RoutingInstructionsCopy) SetRoutingInstructions(v []CopyConfigurationCodeType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *RoutingInstructionsCopy) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetWarnings

`func (o *RoutingInstructionsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoutingInstructionsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoutingInstructionsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoutingInstructionsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


