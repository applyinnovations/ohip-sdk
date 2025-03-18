# RoutingInfoTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRequestInfo** | Pointer to [**CompRoutingRequestType**](CompRoutingRequestType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewRoutingInfoTypeRequest

`func NewRoutingInfoTypeRequest() *RoutingInfoTypeRequest`

NewRoutingInfoTypeRequest instantiates a new RoutingInfoTypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInfoTypeRequestWithDefaults

`func NewRoutingInfoTypeRequestWithDefaults() *RoutingInfoTypeRequest`

NewRoutingInfoTypeRequestWithDefaults instantiates a new RoutingInfoTypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRequestInfo

`func (o *RoutingInfoTypeRequest) GetCompRequestInfo() CompRoutingRequestType`

GetCompRequestInfo returns the CompRequestInfo field if non-nil, zero value otherwise.

### GetCompRequestInfoOk

`func (o *RoutingInfoTypeRequest) GetCompRequestInfoOk() (*CompRoutingRequestType, bool)`

GetCompRequestInfoOk returns a tuple with the CompRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRequestInfo

`func (o *RoutingInfoTypeRequest) SetCompRequestInfo(v CompRoutingRequestType)`

SetCompRequestInfo sets CompRequestInfo field to given value.

### HasCompRequestInfo

`func (o *RoutingInfoTypeRequest) HasCompRequestInfo() bool`

HasCompRequestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInfoTypeRequest) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInfoTypeRequest) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInfoTypeRequest) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInfoTypeRequest) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


