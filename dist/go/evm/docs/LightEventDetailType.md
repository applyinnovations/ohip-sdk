# LightEventDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventDetail** | Pointer to [**EventDetailType**](EventDetailType.md) |  | [optional] 
**EventPrimaryInfo** | Pointer to [**EventPrimaryInfoType**](EventPrimaryInfoType.md) |  | [optional] 
**FunctionSpaceInformation** | Pointer to [**EventFunctionSpaceType**](EventFunctionSpaceType.md) |  | [optional] 

## Methods

### NewLightEventDetailType

`func NewLightEventDetailType() *LightEventDetailType`

NewLightEventDetailType instantiates a new LightEventDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLightEventDetailTypeWithDefaults

`func NewLightEventDetailTypeWithDefaults() *LightEventDetailType`

NewLightEventDetailTypeWithDefaults instantiates a new LightEventDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventDetail

`func (o *LightEventDetailType) GetEventDetail() EventDetailType`

GetEventDetail returns the EventDetail field if non-nil, zero value otherwise.

### GetEventDetailOk

`func (o *LightEventDetailType) GetEventDetailOk() (*EventDetailType, bool)`

GetEventDetailOk returns a tuple with the EventDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventDetail

`func (o *LightEventDetailType) SetEventDetail(v EventDetailType)`

SetEventDetail sets EventDetail field to given value.

### HasEventDetail

`func (o *LightEventDetailType) HasEventDetail() bool`

HasEventDetail returns a boolean if a field has been set.

### GetEventPrimaryInfo

`func (o *LightEventDetailType) GetEventPrimaryInfo() EventPrimaryInfoType`

GetEventPrimaryInfo returns the EventPrimaryInfo field if non-nil, zero value otherwise.

### GetEventPrimaryInfoOk

`func (o *LightEventDetailType) GetEventPrimaryInfoOk() (*EventPrimaryInfoType, bool)`

GetEventPrimaryInfoOk returns a tuple with the EventPrimaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventPrimaryInfo

`func (o *LightEventDetailType) SetEventPrimaryInfo(v EventPrimaryInfoType)`

SetEventPrimaryInfo sets EventPrimaryInfo field to given value.

### HasEventPrimaryInfo

`func (o *LightEventDetailType) HasEventPrimaryInfo() bool`

HasEventPrimaryInfo returns a boolean if a field has been set.

### GetFunctionSpaceInformation

`func (o *LightEventDetailType) GetFunctionSpaceInformation() EventFunctionSpaceType`

GetFunctionSpaceInformation returns the FunctionSpaceInformation field if non-nil, zero value otherwise.

### GetFunctionSpaceInformationOk

`func (o *LightEventDetailType) GetFunctionSpaceInformationOk() (*EventFunctionSpaceType, bool)`

GetFunctionSpaceInformationOk returns a tuple with the FunctionSpaceInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFunctionSpaceInformation

`func (o *LightEventDetailType) SetFunctionSpaceInformation(v EventFunctionSpaceType)`

SetFunctionSpaceInformation sets FunctionSpaceInformation field to given value.

### HasFunctionSpaceInformation

`func (o *LightEventDetailType) HasFunctionSpaceInformation() bool`

HasFunctionSpaceInformation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


