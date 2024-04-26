# RoutingInstructionsInfoCriteriaComp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompRequestInfo** | Pointer to [**CompRoutingRequestType**](CompRoutingRequestType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 

## Methods

### NewRoutingInstructionsInfoCriteriaComp

`func NewRoutingInstructionsInfoCriteriaComp() *RoutingInstructionsInfoCriteriaComp`

NewRoutingInstructionsInfoCriteriaComp instantiates a new RoutingInstructionsInfoCriteriaComp object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoCriteriaCompWithDefaults

`func NewRoutingInstructionsInfoCriteriaCompWithDefaults() *RoutingInstructionsInfoCriteriaComp`

NewRoutingInstructionsInfoCriteriaCompWithDefaults instantiates a new RoutingInstructionsInfoCriteriaComp object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaComp) GetCompRequestInfo() CompRoutingRequestType`

GetCompRequestInfo returns the CompRequestInfo field if non-nil, zero value otherwise.

### GetCompRequestInfoOk

`func (o *RoutingInstructionsInfoCriteriaComp) GetCompRequestInfoOk() (*CompRoutingRequestType, bool)`

GetCompRequestInfoOk returns a tuple with the CompRequestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaComp) SetCompRequestInfo(v CompRoutingRequestType)`

SetCompRequestInfo sets CompRequestInfo field to given value.

### HasCompRequestInfo

`func (o *RoutingInstructionsInfoCriteriaComp) HasCompRequestInfo() bool`

HasCompRequestInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsInfoCriteriaComp) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsInfoCriteriaComp) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsInfoCriteriaComp) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsInfoCriteriaComp) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaComp) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *RoutingInstructionsInfoCriteriaComp) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaComp) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *RoutingInstructionsInfoCriteriaComp) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


