# RoutingInstructionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**RoutingInfoListType**](RoutingInfoListType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoutingInstructionsDetails

`func NewRoutingInstructionsDetails() *RoutingInstructionsDetails`

NewRoutingInstructionsDetails instantiates a new RoutingInstructionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsDetailsWithDefaults

`func NewRoutingInstructionsDetailsWithDefaults() *RoutingInstructionsDetails`

NewRoutingInstructionsDetailsWithDefaults instantiates a new RoutingInstructionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoutingInstructionsDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoutingInstructionsDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoutingInstructionsDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoutingInstructionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *RoutingInstructionsDetails) GetRoutingInstructions() RoutingInfoListType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *RoutingInstructionsDetails) GetRoutingInstructionsOk() (*RoutingInfoListType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *RoutingInstructionsDetails) SetRoutingInstructions(v RoutingInfoListType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *RoutingInstructionsDetails) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetWarnings

`func (o *RoutingInstructionsDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoutingInstructionsDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoutingInstructionsDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoutingInstructionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


