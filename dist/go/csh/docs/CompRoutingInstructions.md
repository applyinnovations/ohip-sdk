# CompRoutingInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResvRoutingInstructions** | Pointer to [**[]ResvRoutingInfoType**](ResvRoutingInfoType.md) | A comp routing info object | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCompRoutingInstructions

`func NewCompRoutingInstructions() *CompRoutingInstructions`

NewCompRoutingInstructions instantiates a new CompRoutingInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompRoutingInstructionsWithDefaults

`func NewCompRoutingInstructionsWithDefaults() *CompRoutingInstructions`

NewCompRoutingInstructionsWithDefaults instantiates a new CompRoutingInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResvRoutingInstructions

`func (o *CompRoutingInstructions) GetResvRoutingInstructions() []ResvRoutingInfoType`

GetResvRoutingInstructions returns the ResvRoutingInstructions field if non-nil, zero value otherwise.

### GetResvRoutingInstructionsOk

`func (o *CompRoutingInstructions) GetResvRoutingInstructionsOk() (*[]ResvRoutingInfoType, bool)`

GetResvRoutingInstructionsOk returns a tuple with the ResvRoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvRoutingInstructions

`func (o *CompRoutingInstructions) SetResvRoutingInstructions(v []ResvRoutingInfoType)`

SetResvRoutingInstructions sets ResvRoutingInstructions field to given value.

### HasResvRoutingInstructions

`func (o *CompRoutingInstructions) HasResvRoutingInstructions() bool`

HasResvRoutingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *CompRoutingInstructions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CompRoutingInstructions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CompRoutingInstructions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CompRoutingInstructions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CompRoutingInstructions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CompRoutingInstructions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CompRoutingInstructions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CompRoutingInstructions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


