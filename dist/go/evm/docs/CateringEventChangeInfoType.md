# CateringEventChangeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | Pointer to [**CateringEventChangeActions**](CateringEventChangeActions.md) |  | [optional] 
**ChangeId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ChangeSource** | Pointer to [**CateringEventChangeSources**](CateringEventChangeSources.md) |  | [optional] 
**ChangeUserInfo** | Pointer to [**LogUserInfoType**](LogUserInfoType.md) |  | [optional] 
**EventChangeDetailList** | Pointer to [**[]CateringEventChangeDetailType**](CateringEventChangeDetailType.md) |  | [optional] 
**EventId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**EventName** | Pointer to **string** | Name of the event | [optional] 
**HotelId** | Pointer to **string** | HotelCode associated with the event | [optional] 
**ResourceName** | Pointer to **string** | Description of the Resource | [optional] 

## Methods

### NewCateringEventChangeInfoType

`func NewCateringEventChangeInfoType() *CateringEventChangeInfoType`

NewCateringEventChangeInfoType instantiates a new CateringEventChangeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventChangeInfoTypeWithDefaults

`func NewCateringEventChangeInfoTypeWithDefaults() *CateringEventChangeInfoType`

NewCateringEventChangeInfoTypeWithDefaults instantiates a new CateringEventChangeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *CateringEventChangeInfoType) GetAction() CateringEventChangeActions`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *CateringEventChangeInfoType) GetActionOk() (*CateringEventChangeActions, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *CateringEventChangeInfoType) SetAction(v CateringEventChangeActions)`

SetAction sets Action field to given value.

### HasAction

`func (o *CateringEventChangeInfoType) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetChangeId

`func (o *CateringEventChangeInfoType) GetChangeId() UniqueIDType`

GetChangeId returns the ChangeId field if non-nil, zero value otherwise.

### GetChangeIdOk

`func (o *CateringEventChangeInfoType) GetChangeIdOk() (*UniqueIDType, bool)`

GetChangeIdOk returns a tuple with the ChangeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeId

`func (o *CateringEventChangeInfoType) SetChangeId(v UniqueIDType)`

SetChangeId sets ChangeId field to given value.

### HasChangeId

`func (o *CateringEventChangeInfoType) HasChangeId() bool`

HasChangeId returns a boolean if a field has been set.

### GetChangeSource

`func (o *CateringEventChangeInfoType) GetChangeSource() CateringEventChangeSources`

GetChangeSource returns the ChangeSource field if non-nil, zero value otherwise.

### GetChangeSourceOk

`func (o *CateringEventChangeInfoType) GetChangeSourceOk() (*CateringEventChangeSources, bool)`

GetChangeSourceOk returns a tuple with the ChangeSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeSource

`func (o *CateringEventChangeInfoType) SetChangeSource(v CateringEventChangeSources)`

SetChangeSource sets ChangeSource field to given value.

### HasChangeSource

`func (o *CateringEventChangeInfoType) HasChangeSource() bool`

HasChangeSource returns a boolean if a field has been set.

### GetChangeUserInfo

`func (o *CateringEventChangeInfoType) GetChangeUserInfo() LogUserInfoType`

GetChangeUserInfo returns the ChangeUserInfo field if non-nil, zero value otherwise.

### GetChangeUserInfoOk

`func (o *CateringEventChangeInfoType) GetChangeUserInfoOk() (*LogUserInfoType, bool)`

GetChangeUserInfoOk returns a tuple with the ChangeUserInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeUserInfo

`func (o *CateringEventChangeInfoType) SetChangeUserInfo(v LogUserInfoType)`

SetChangeUserInfo sets ChangeUserInfo field to given value.

### HasChangeUserInfo

`func (o *CateringEventChangeInfoType) HasChangeUserInfo() bool`

HasChangeUserInfo returns a boolean if a field has been set.

### GetEventChangeDetailList

`func (o *CateringEventChangeInfoType) GetEventChangeDetailList() []CateringEventChangeDetailType`

GetEventChangeDetailList returns the EventChangeDetailList field if non-nil, zero value otherwise.

### GetEventChangeDetailListOk

`func (o *CateringEventChangeInfoType) GetEventChangeDetailListOk() (*[]CateringEventChangeDetailType, bool)`

GetEventChangeDetailListOk returns a tuple with the EventChangeDetailList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventChangeDetailList

`func (o *CateringEventChangeInfoType) SetEventChangeDetailList(v []CateringEventChangeDetailType)`

SetEventChangeDetailList sets EventChangeDetailList field to given value.

### HasEventChangeDetailList

`func (o *CateringEventChangeInfoType) HasEventChangeDetailList() bool`

HasEventChangeDetailList returns a boolean if a field has been set.

### GetEventId

`func (o *CateringEventChangeInfoType) GetEventId() UniqueIDType`

GetEventId returns the EventId field if non-nil, zero value otherwise.

### GetEventIdOk

`func (o *CateringEventChangeInfoType) GetEventIdOk() (*UniqueIDType, bool)`

GetEventIdOk returns a tuple with the EventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventId

`func (o *CateringEventChangeInfoType) SetEventId(v UniqueIDType)`

SetEventId sets EventId field to given value.

### HasEventId

`func (o *CateringEventChangeInfoType) HasEventId() bool`

HasEventId returns a boolean if a field has been set.

### GetEventName

`func (o *CateringEventChangeInfoType) GetEventName() string`

GetEventName returns the EventName field if non-nil, zero value otherwise.

### GetEventNameOk

`func (o *CateringEventChangeInfoType) GetEventNameOk() (*string, bool)`

GetEventNameOk returns a tuple with the EventName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventName

`func (o *CateringEventChangeInfoType) SetEventName(v string)`

SetEventName sets EventName field to given value.

### HasEventName

`func (o *CateringEventChangeInfoType) HasEventName() bool`

HasEventName returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringEventChangeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringEventChangeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringEventChangeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringEventChangeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetResourceName

`func (o *CateringEventChangeInfoType) GetResourceName() string`

GetResourceName returns the ResourceName field if non-nil, zero value otherwise.

### GetResourceNameOk

`func (o *CateringEventChangeInfoType) GetResourceNameOk() (*string, bool)`

GetResourceNameOk returns a tuple with the ResourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceName

`func (o *CateringEventChangeInfoType) SetResourceName(v string)`

SetResourceName sets ResourceName field to given value.

### HasResourceName

`func (o *CateringEventChangeInfoType) HasResourceName() bool`

HasResourceName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


