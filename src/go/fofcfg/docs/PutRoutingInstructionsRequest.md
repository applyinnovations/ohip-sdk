# PutRoutingInstructionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**ConfigRoutingInstructionsType**](ConfigRoutingInstructionsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutRoutingInstructionsRequest

`func NewPutRoutingInstructionsRequest() *PutRoutingInstructionsRequest`

NewPutRoutingInstructionsRequest instantiates a new PutRoutingInstructionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutRoutingInstructionsRequestWithDefaults

`func NewPutRoutingInstructionsRequestWithDefaults() *PutRoutingInstructionsRequest`

NewPutRoutingInstructionsRequestWithDefaults instantiates a new PutRoutingInstructionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutRoutingInstructionsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutRoutingInstructionsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutRoutingInstructionsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutRoutingInstructionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *PutRoutingInstructionsRequest) GetRoutingInstructions() ConfigRoutingInstructionsType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *PutRoutingInstructionsRequest) GetRoutingInstructionsOk() (*ConfigRoutingInstructionsType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *PutRoutingInstructionsRequest) SetRoutingInstructions(v ConfigRoutingInstructionsType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *PutRoutingInstructionsRequest) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetWarnings

`func (o *PutRoutingInstructionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutRoutingInstructionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutRoutingInstructionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutRoutingInstructionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


