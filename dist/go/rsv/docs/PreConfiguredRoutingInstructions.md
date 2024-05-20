# PreConfiguredRoutingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**[]PreConfiguredRoutingInstrType**](PreConfiguredRoutingInstrType.md) | Set of Pre-Configured Routing Instructions. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreConfiguredRoutingInstructions

`func NewPreConfiguredRoutingInstructions() *PreConfiguredRoutingInstructions`

NewPreConfiguredRoutingInstructions instantiates a new PreConfiguredRoutingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreConfiguredRoutingInstructionsWithDefaults

`func NewPreConfiguredRoutingInstructionsWithDefaults() *PreConfiguredRoutingInstructions`

NewPreConfiguredRoutingInstructionsWithDefaults instantiates a new PreConfiguredRoutingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PreConfiguredRoutingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreConfiguredRoutingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreConfiguredRoutingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreConfiguredRoutingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *PreConfiguredRoutingInstructions) GetRoutingInstructions() []PreConfiguredRoutingInstrType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *PreConfiguredRoutingInstructions) GetRoutingInstructionsOk() (*[]PreConfiguredRoutingInstrType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *PreConfiguredRoutingInstructions) SetRoutingInstructions(v []PreConfiguredRoutingInstrType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *PreConfiguredRoutingInstructions) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetWarnings

`func (o *PreConfiguredRoutingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreConfiguredRoutingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreConfiguredRoutingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreConfiguredRoutingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


