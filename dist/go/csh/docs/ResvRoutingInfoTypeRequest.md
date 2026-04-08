# ResvRoutingInfoTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRequestInfo** | Pointer to [**CompRoutingRequestType**](CompRoutingRequestType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewResvRoutingInfoTypeRequest

`func NewResvRoutingInfoTypeRequest() *ResvRoutingInfoTypeRequest`

NewResvRoutingInfoTypeRequest instantiates a new ResvRoutingInfoTypeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvRoutingInfoTypeRequestWithDefaults

`func NewResvRoutingInfoTypeRequestWithDefaults() *ResvRoutingInfoTypeRequest`

NewResvRoutingInfoTypeRequestWithDefaults instantiates a new ResvRoutingInfoTypeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRequestInfo

`func (o *ResvRoutingInfoTypeRequest) GetCompRequestInfo() CompRoutingRequestType`

GetCompRequestInfo returns the CompRequestInfo field if non-nil, zero value otherwise.

### GetCompRequestInfoOk

`func (o *ResvRoutingInfoTypeRequest) GetCompRequestInfoOk() (*CompRoutingRequestType, bool)`

GetCompRequestInfoOk returns a tuple with the CompRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRequestInfo

`func (o *ResvRoutingInfoTypeRequest) SetCompRequestInfo(v CompRoutingRequestType)`

SetCompRequestInfo sets CompRequestInfo field to given value.

### HasCompRequestInfo

`func (o *ResvRoutingInfoTypeRequest) HasCompRequestInfo() bool`

HasCompRequestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *ResvRoutingInfoTypeRequest) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ResvRoutingInfoTypeRequest) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ResvRoutingInfoTypeRequest) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ResvRoutingInfoTypeRequest) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


