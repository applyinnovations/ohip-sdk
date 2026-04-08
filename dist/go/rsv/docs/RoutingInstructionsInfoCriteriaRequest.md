# RoutingInstructionsInfoCriteriaRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRequestInfo** | Pointer to [**CompRoutingRequestType**](CompRoutingRequestType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewRoutingInstructionsInfoCriteriaRequest

`func NewRoutingInstructionsInfoCriteriaRequest() *RoutingInstructionsInfoCriteriaRequest`

NewRoutingInstructionsInfoCriteriaRequest instantiates a new RoutingInstructionsInfoCriteriaRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoCriteriaRequestWithDefaults

`func NewRoutingInstructionsInfoCriteriaRequestWithDefaults() *RoutingInstructionsInfoCriteriaRequest`

NewRoutingInstructionsInfoCriteriaRequestWithDefaults instantiates a new RoutingInstructionsInfoCriteriaRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaRequest) GetCompRequestInfo() CompRoutingRequestType`

GetCompRequestInfo returns the CompRequestInfo field if non-nil, zero value otherwise.

### GetCompRequestInfoOk

`func (o *RoutingInstructionsInfoCriteriaRequest) GetCompRequestInfoOk() (*CompRoutingRequestType, bool)`

GetCompRequestInfoOk returns a tuple with the CompRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaRequest) SetCompRequestInfo(v CompRoutingRequestType)`

SetCompRequestInfo sets CompRequestInfo field to given value.

### HasCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaRequest) HasCompRequestInfo() bool`

HasCompRequestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsInfoCriteriaRequest) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsInfoCriteriaRequest) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsInfoCriteriaRequest) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsInfoCriteriaRequest) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


