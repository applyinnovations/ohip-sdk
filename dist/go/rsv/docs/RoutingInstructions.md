# RoutingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoutingInstructions** | Pointer to [**[]RoutingInfoType**](RoutingInfoType.md) | A routing info object can either be of type Folio OR of type Room with its corresponding instructions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoutingInstructions

`func NewRoutingInstructions() *RoutingInstructions`

NewRoutingInstructions instantiates a new RoutingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsWithDefaults

`func NewRoutingInstructionsWithDefaults() *RoutingInstructions`

NewRoutingInstructionsWithDefaults instantiates a new RoutingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoutingInstructions

`func (o *RoutingInstructions) GetRoutingInstructions() []RoutingInfoType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *RoutingInstructions) GetRoutingInstructionsOk() (*[]RoutingInfoType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *RoutingInstructions) SetRoutingInstructions(v []RoutingInfoType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *RoutingInstructions) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *RoutingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoutingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoutingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoutingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoutingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoutingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoutingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoutingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


